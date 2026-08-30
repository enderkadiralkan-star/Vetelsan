import { CatalogCategoryGrid } from "@/components/products/CatalogCategoryGrid";
import { CatalogHero } from "@/components/products/CatalogHero";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { productCatalogNav } from "@/components/products/productCatalogNav";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
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
      <div className="bg-light">
        <Container className="pt-6 sm:pt-8">
          <Breadcrumb
            className="mb-0"
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("nav.products") },
            ]}
          />
        </Container>
      </div>
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
