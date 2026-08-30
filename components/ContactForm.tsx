"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import { useI18n } from "@/components/i18n/LanguageProvider";
import {
  buildMailto,
  contactErrorKey,
  validateContact,
  type ContactField,
  type ContactFieldErrors,
  type ContactInput,
} from "@/lib/contact";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormState = ContactInput;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  kvkk: false,
};

export function ContactForm() {
  const { t } = useI18n();
  const [values, setValues] = useState<FormState>(initial);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [mailto, setMailto] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function errorText(code: string | undefined) {
    if (!code) return "";
    return t(contactErrorKey(code));
  }

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    if (fieldErrors[field as ContactField]) {
      setFieldErrors((current) => {
        const next = { ...current };
        delete next[field as ContactField];
        return next;
      });
    }
    if (formError) setFormError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setMailto(null);

    const errors = validateContact(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFormError(t("contactPage.errorInvalid"));
      return;
    }

    setFieldErrors({});
    setSending(true);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await submitContact(formData);

      if (result.ok) {
        setSubmitted(true);
        setValues(initial);
        return;
      }

      if (result.fields) {
        setFieldErrors(result.fields);
      }

      if (result.code === "rateLimit") {
        setFormError(t("contactPage.errorRateLimit"));
      } else if (result.code === "mailUnavailable") {
        setFormError(t("contactPage.errorMailUnavailable"));
        setMailto(result.mailto ?? buildMailto(values, contact.email));
      } else if (result.code === "sendFailed") {
        setFormError(t("contactPage.errorSendFailed"));
        setMailto(result.mailto ?? buildMailto(values, contact.email));
      } else {
        setFormError(t("contactPage.errorInvalid"));
      }
    } catch {
      setFormError(t("contactPage.errorNetwork"));
      setMailto(buildMailto(values, contact.email));
    } finally {
      setSending(false);
    }
  }

  function inputClass(field: ContactField) {
    return cn(
      "mt-2 w-full min-h-[52px] border bg-white px-4 text-[15px] text-ink outline-none transition-colors duration-200 placeholder:text-muted/50 focus:border-primary",
      fieldErrors[field] ? "border-primary" : "border-line",
    );
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center" role="status">
        <span
          className="flex size-12 items-center justify-center border border-primary text-primary"
          aria-hidden="true"
        >
          <Check className="size-5" strokeWidth={1.75} />
        </span>
        <p className="type-kicker mt-8">{t("contactPage.successTitle")}</p>
        <p className="type-body mt-4 max-w-[420px]">{t("contactPage.successText")}</p>
        <button
          type="button"
          className="cta-text mt-10"
          onClick={() => {
            setSubmitted(false);
            setFieldErrors({});
            setFormError(null);
            setMailto(null);
          }}
        >
          {t("contactPage.newMessage")}
          <ArrowRight className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {formError ? (
        <div
          className="mb-8 border-l-2 border-primary bg-soft/60 px-4 py-4 text-[14px] leading-[1.6] text-ink sm:px-5"
          role="alert"
        >
          <p>{formError}</p>
          {mailto ? (
            <a
              href={mailto}
              className="mt-3 inline-flex min-h-11 items-center font-medium text-primary"
            >
              {t("contactPage.sendViaEmail")} →
            </a>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="block">
          <span className="type-small text-muted">{t("contactPage.name")}</span>
          <input
            name="name"
            value={values.name}
            autoComplete="name"
            placeholder={t("contactPage.namePlaceholder")}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "error-name" : undefined}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass("name")}
          />
          {fieldErrors.name ? (
            <p id="error-name" className="mt-1.5 text-[12px] font-medium text-primary">
              {errorText(fieldErrors.name)}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="type-small text-muted">{t("contactPage.email")}</span>
          <input
            type="email"
            name="email"
            value={values.email}
            autoComplete="email"
            placeholder={t("contactPage.emailPlaceholder")}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "error-email" : undefined}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass("email")}
          />
          {fieldErrors.email ? (
            <p id="error-email" className="mt-1.5 text-[12px] font-medium text-primary">
              {errorText(fieldErrors.email)}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="type-small text-muted">{t("contactPage.phone")}</span>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "error-phone" : undefined}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass("phone")}
          />
          {fieldErrors.phone ? (
            <p id="error-phone" className="mt-1.5 text-[12px] font-medium text-primary">
              {errorText(fieldErrors.phone)}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="type-small text-muted">{t("contactPage.subject")}</span>
          <input
            name="subject"
            value={values.subject}
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? "error-subject" : undefined}
            onChange={(event) => update("subject", event.target.value)}
            className={inputClass("subject")}
          />
          {fieldErrors.subject ? (
            <p id="error-subject" className="mt-1.5 text-[12px] font-medium text-primary">
              {errorText(fieldErrors.subject)}
            </p>
          ) : null}
        </label>
        <label className="block sm:col-span-2">
          <span className="type-small text-muted">{t("contactPage.message")}</span>
          <textarea
            name="message"
            rows={6}
            value={values.message}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "error-message" : undefined}
            onChange={(event) => update("message", event.target.value)}
            className={cn(inputClass("message"), "min-h-[140px] resize-y py-3")}
          />
          {fieldErrors.message ? (
            <p id="error-message" className="mt-1.5 text-[12px] font-medium text-primary">
              {errorText(fieldErrors.message)}
            </p>
          ) : null}
        </label>
      </div>

      <label className="mt-8 flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-muted">
        <span className="relative mt-0.5 inline-flex size-5 shrink-0">
          <input
            type="checkbox"
            name="kvkk"
            value="on"
            checked={values.kvkk}
            aria-invalid={Boolean(fieldErrors.kvkk)}
            aria-describedby={fieldErrors.kvkk ? "error-kvkk" : undefined}
            onChange={(event) => update("kvkk", event.target.checked)}
            className="peer absolute inset-0 z-10 size-5 cursor-pointer opacity-0"
          />
          <span
            className={cn(
              "flex size-5 items-center justify-center border bg-white transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30 peer-focus-visible:ring-offset-2",
              values.kvkk ? "border-primary bg-primary text-white" : "border-line",
              fieldErrors.kvkk && "border-primary",
            )}
            aria-hidden="true"
          >
            {values.kvkk ? <Check className="size-3" strokeWidth={3} /> : null}
          </span>
        </span>
        <span>
          {t("contactPage.kvkkConsentBefore")}{" "}
          <Link href="/kvkk" className="text-ink underline decoration-line underline-offset-4 hover:text-primary">
            {t("footer.kvkk")}
          </Link>
          {t("contactPage.kvkkConsentAfter")}
        </span>
      </label>
      {fieldErrors.kvkk ? (
        <p id="error-kvkk" className="mt-1.5 text-[12px] font-medium text-primary">
          {errorText(fieldErrors.kvkk)}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-primary px-6 text-[15px] font-medium tracking-[0.04em] text-white transition-colors duration-300 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? t("contactPage.sending") : t("contactPage.submit")}
        {sending ? null : <ArrowRight className="size-4" />}
      </button>
    </form>
  );
}
