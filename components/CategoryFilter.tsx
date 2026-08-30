"use client";

import { ChipNav } from "./ChipNav";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { localizeCategories } from "@/lib/i18n/content";

export function CategoryFilter({
  tone = "white",
}: {
  tone?: "white" | "surface";
}) {
  const { locale, t } = useI18n();
  const categories = localizeCategories(locale);

  return (
    <ChipNav
      tone={tone}
      items={[
        { href: "/urunler", label: t("common.all") },
        ...categories.map((category) => ({
          href: category.href,
          label: category.name,
        })),
      ]}
    />
  );
}
