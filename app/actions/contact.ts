"use server";

import { headers } from "next/headers";
import {
  buildMailto,
  parseContactForm,
  validateContact,
  type ContactFieldErrors,
} from "@/lib/contact";
import { isMailConfigured, sendContactEmail } from "@/lib/mail";
import { getSiteUrl } from "@/lib/seo/url";
import { contact } from "@/lib/site";

export type ContactActionResult =
  | { ok: true }
  | {
      ok: false;
      code: "invalid" | "rateLimit" | "sendFailed" | "mailUnavailable";
      fields?: ContactFieldErrors;
      mailto?: string;
    };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 5_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();

  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, times] of hits) {
      const fresh = times.filter((time) => now - time < WINDOW_MS);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
    if (hits.size > MAX_TRACKED_IPS) hits.clear();
  }

  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

async function clientIp() {
  const headerList = await headers();
  // Prefer platform-set IP headers; take first hop only.
  const forwarded = headerList.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown"
  );
}

function hostFromUrl(value: string | null) {
  if (!value) return null;
  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return null;
  }
}

async function isTrustedOrigin() {
  const headerList = await headers();
  const originHost = hostFromUrl(headerList.get("origin"));
  if (!originHost) {
    // Same-origin navigations / some browsers may omit Origin; allow Host match.
    const host =
      headerList.get("x-forwarded-host")?.split(",")[0]?.trim().toLowerCase() ||
      headerList.get("host")?.toLowerCase();
    return Boolean(host);
  }

  const allowed = new Set<string>([
    "localhost:3000",
    "127.0.0.1:3000",
    "vetelsan.com.tr",
    "www.vetelsan.com.tr",
    "vetelsan.vercel.app",
  ]);

  const siteHost = hostFromUrl(getSiteUrl());
  if (siteHost) allowed.add(siteHost);

  if (allowed.has(originHost)) return true;
  // Preview deployments: *.vercel.app
  return originHost.endsWith(".vercel.app");
}

export async function submitContact(
  formData: FormData,
): Promise<ContactActionResult> {
  if (!(await isTrustedOrigin())) {
    return { ok: false, code: "invalid" };
  }

  const parsed = parseContactForm(formData);

  // Honeypot: pretend success so bots don't retry.
  if (parsed.honeypot) {
    return { ok: true };
  }

  const ip = await clientIp();
  if (isRateLimited(ip)) {
    return { ok: false, code: "rateLimit" };
  }

  const fields = {
    name: parsed.name,
    email: parsed.email,
    phone: parsed.phone,
    subject: parsed.subject,
    message: parsed.message,
    kvkk: parsed.kvkk,
  };
  const fieldsErrors = validateContact(fields);
  if (Object.keys(fieldsErrors).length > 0) {
    return { ok: false, code: "invalid", fields: fieldsErrors };
  }

  const payload = {
    name: fields.name,
    email: fields.email,
    phone: fields.phone,
    subject: fields.subject,
    message: fields.message,
  };
  const mailto = buildMailto(payload, contact.email);

  if (!isMailConfigured()) {
    return { ok: false, code: "mailUnavailable", mailto };
  }

  try {
    await sendContactEmail(payload);
    return { ok: true };
  } catch {
    return { ok: false, code: "sendFailed", mailto };
  }
}
