"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";

export function EmptyCategory() {
  const { t } = useI18n();

  return (
    <div className="border border-dashed border-line px-5 py-12 text-center sm:px-8 sm:py-16">
      <p className="text-[15px] font-medium text-ink">{t("common.emptyCategory")}</p>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        {t("common.emptyCategorySoon")}
      </p>
    </div>
  );
}
