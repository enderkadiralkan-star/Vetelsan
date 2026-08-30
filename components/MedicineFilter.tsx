"use client";

import { CategoryNavigation } from "./products/CategoryNavigation";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { localizeMedicineCategories } from "@/lib/i18n/content";

export function MedicineFilter({
  activeHref = "/ilaclar-asilar",
}: {
  tone?: "white" | "surface";
  activeHref?: string;
}) {
  const { locale, t } = useI18n();
  const categories = localizeMedicineCategories(locale);

  return (
    <CategoryNavigation
      ariaLabel={t("medicinesPage.catalogNav")}
      activeHref={activeHref}
      items={[
        { href: "/ilaclar-asilar", label: t("common.all") },
        ...categories.map((category, index) => ({
          href: category.href,
          label: category.name,
          index,
        })),
      ]}
    />
  );
}
