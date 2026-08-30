import { createT } from "@/lib/i18n/t";
import type { Locale } from "@/lib/i18n/config";
import { localizeCategories } from "@/lib/i18n/content";
import { splitCategoryName } from "@/lib/utils";

export function productCatalogNav(locale: Locale) {
  const t = createT(locale);
  const categories = localizeCategories(locale);

  return [
    { href: "/urunler", label: t("common.all") },
    ...categories.map((item, index) => ({
      href: item.href,
      label: splitCategoryName(item.name).title,
      index,
    })),
  ];
}
