export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  kvkk: boolean;
};

export type ContactField = keyof ContactInput;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strip CR/LF/null to prevent SMTP header injection. */
export function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n\0]/g, "").trim();
}

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function parseContactForm(formData: FormData): ContactInput & {
  honeypot: string;
} {
  return {
    name: sanitizeHeaderValue(String(formData.get("name") ?? "")),
    email: sanitizeHeaderValue(String(formData.get("email") ?? "")).toLowerCase(),
    phone: sanitizeHeaderValue(String(formData.get("phone") ?? "")),
    subject: sanitizeHeaderValue(String(formData.get("subject") ?? "")),
    message: String(formData.get("message") ?? "")
      .replace(/\0/g, "")
      .trim(),
    kvkk:
      formData.get("kvkk") === "on" ||
      formData.get("kvkk") === "true" ||
      formData.get("kvkk") === "1",
    honeypot: String(formData.get("website") ?? "").trim(),
  };
}

export function validateContact(fields: ContactInput): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!fields.name) errors.name = "nameRequired";
  else if (fields.name.length < 2) errors.name = "nameMin";
  else if (fields.name.length > 120) errors.name = "nameMax";

  if (!fields.email) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(fields.email) || fields.email.length > 160) {
    errors.email = "emailInvalid";
  }

  const phoneDigits = digitsOnly(fields.phone);
  if (!fields.phone) errors.phone = "phoneRequired";
  else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "phoneInvalid";
  }

  if (!fields.subject) errors.subject = "subjectRequired";
  else if (fields.subject.length < 3) errors.subject = "subjectMin";
  else if (fields.subject.length > 160) errors.subject = "subjectMax";

  if (!fields.message) errors.message = "messageRequired";
  else if (fields.message.length < 10) errors.message = "messageMin";
  else if (fields.message.length > 4000) errors.message = "messageMax";

  if (!fields.kvkk) errors.kvkk = "kvkkRequired";

  return errors;
}

export function contactErrorKey(code: string) {
  return `contactPage.error${code.charAt(0).toUpperCase()}${code.slice(1)}`;
}

export function buildMailto(
  fields: Omit<ContactInput, "kvkk">,
  to: string,
) {
  const body = [
    `Ad Soyad / Name: ${fields.name}`,
    `E-posta / Email: ${fields.email}`,
    `Telefon / Phone: ${fields.phone}`,
    "",
    fields.message,
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
}
