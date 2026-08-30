import nodemailer from "nodemailer";
import type { ContactInput } from "./contact";
import { contact, site } from "./site";

export function isMailConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail(fields: Omit<ContactInput, "kvkk">) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const to = process.env.CONTACT_TO ?? contact.email;
  const from = process.env.CONTACT_FROM ?? process.env.SMTP_USER;

  const text = [
    `Yeni iletişim formu mesajı — ${site.name}`,
    "",
    `Ad Soyad: ${fields.name}`,
    `E-posta: ${fields.email}`,
    `Telefon: ${fields.phone}`,
    `Konu: ${fields.subject}`,
    "",
    fields.message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: fields.email,
    subject: `[Vetelsan] ${fields.subject}`,
    text,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17191c">
        <p><strong>Yeni iletişim formu mesajı</strong></p>
        <p>
          <strong>Ad Soyad:</strong> ${escapeHtml(fields.name)}<br/>
          <strong>E-posta:</strong> ${escapeHtml(fields.email)}<br/>
          <strong>Telefon:</strong> ${escapeHtml(fields.phone)}<br/>
          <strong>Konu:</strong> ${escapeHtml(fields.subject)}
        </p>
        <p>${escapeHtml(fields.message).replaceAll("\n", "<br/>")}</p>
      </div>
    `,
  });
}
