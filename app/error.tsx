"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useI18n();

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="max-w-lg text-3xl sm:text-4xl">{t("errorPage.title")}</h1>
      <p className="mt-4 max-w-md text-muted">{t("errorPage.description")}</p>
      <button type="button" className="btn-primary mt-8" onClick={reset}>
        {t("errorPage.retry")}
      </button>
    </section>
  );
}
