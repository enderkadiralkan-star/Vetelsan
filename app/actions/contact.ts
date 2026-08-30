"use server";

import { headers } from "next/headers";
import {
  buildMailto,
  parseContactForm,
  validateContact,
  type ContactFieldErrors,
} from "@/lib/contact";
import { isMailConfigured, sendContactEmail } from "@/lib/mail";
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
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
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
  const forwarded = headerList.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
}

export async function submitContact(
  formData: FormData,
): Promise<ContactActionResult> {
  const parsed = parseContactForm(formData);

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
