import { CatalogCategoryGrid } from "@/components/products/CatalogCategoryGrid";
import { CatalogHero } from "@/components/products/CatalogHero";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { productCatalogNav } from "@/components/products/productCatalogNav";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = createT(locale);
  return pageMetadata(
    t("meta.productsTitle"),
    t("meta.productsDescription"),
    "/urunler",
    locale,
  );
}

export default async function ProductsPage() {
  const locale = await getLocale();
  const t = createT(locale);

  return (
    <>
      <CatalogHero />
      <CategoryNavigation
        sticky
        ariaLabel={t("productsPage.catalogNav")}
        activeHref="/urunler"
        items={productCatalogNav(locale)}
      />
      <CatalogCategoryGrid />
    </>
  );
}
