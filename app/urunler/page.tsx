import { CatalogCategoryGrid } from "@/components/products/CatalogCategoryGrid";
import { CatalogHero } from "@/components/products/CatalogHero";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { productCatalogNav } from "@/components/products/productCatalogNav";
import { CategorySeoBlock } from "@/components/seo/CategorySeoBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { localizeCategories } from "@/lib/i18n/content";
import { categoryMetadata } from "@/lib/metadata";
import { getProductsHubSeo } from "@/lib/seo/content";
import { productsHubKeywords } from "@/lib/seo/keywords";
import { collectionPageSchema } from "@/lib/seo/schema";

export async function generateMetadata() {
  const locale = await getLocale();
  return categoryMetadata(
    productsHubKeywords,
    "/urunler",
    "/images/categories/enjektorler.jpg",
    "Vetelsan veteriner ürün kategorileri",
    locale,
  );
}

export default async function ProductsPage() {
  const locale = await getLocale();
  const t = createT(locale);
  const seoContent = getProductsHubSeo(locale);
  const categories = localizeCategories(locale);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: productsHubKeywords.seoTitle,
          description: productsHubKeywords.seoDescription,
          path: "/urunler",
          items: categories.map((item) => ({
            name: item.name,
            url: item.href,
          })),
        })}
      />
      <CatalogHero />
      <CategoryNavigation
        sticky
        ariaLabel={t("productsPage.catalogNav")}
        activeHref="/urunler"
        items={productCatalogNav(locale)}
      />
      <CatalogCategoryGrid />
      {seoContent ? (
        <CategorySeoBlock
          content={seoContent}
          relatedTitle={t("seo.relatedPages")}
          faqTitle={t("seo.faqTitle")}
        />
      ) : null}
    </>
  );
}
