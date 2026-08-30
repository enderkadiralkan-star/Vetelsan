import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { ProductGrid } from "@/components/ProductGrid";
import { CatalogCta } from "@/components/products/CatalogCta";
import { CategoryHero } from "@/components/products/CategoryHero";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { productCatalogNav } from "@/components/products/productCatalogNav";
import { getCategoryBySlug, productCategories } from "@/lib/categories";
import { localizeCategory, localizeProducts } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { pageMetadata } from "@/lib/metadata";
import { padCount } from "@/lib/utils";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await getLocale();
  const t = createT(locale);
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return pageMetadata(
      t("meta.categoryNotFound"),
      t("meta.categoryNotFoundDescription"),
      "/",
      locale,
    );
  }
  const localized = localizeCategory(category, locale);
  return pageMetadata(
    localized.name,
    localized.description,
    `/urunler/${category.slug}`,
    locale,
  );
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const locale = await getLocale();
  const t = createT(locale);
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const localized = localizeCategory(category, locale);
  const items = localizeProducts(locale).filter(
    (product) => product.categorySlug === category.slug,
  );
  const categoryIndex = productCategories.findIndex(
    (item) => item.slug === category.slug,
  );

  return (
    <>
      <div className="bg-light">
        <Container className="pt-6 sm:pt-8">
          <Breadcrumb
            className="mb-0"
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("nav.products"), href: "/urunler" },
              { label: localized.name },
            ]}
          />
        </Container>
      </div>
      <CategoryHero
        index={Math.max(categoryIndex, 0)}
        category={localized}
      />
      <CategoryNavigation
        sticky
        ariaLabel={t("productsPage.catalogNav")}
        activeHref={`/urunler/${category.slug}`}
        items={productCatalogNav(locale)}
      />
      <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
        <Container>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
            {t("common.productCount", {
              count: padCount(items.length),
            })}
          </p>
          <div className="mt-8 lg:mt-10">
            <ProductGrid products={items} layout="listing" />
          </div>
        </Container>
      </section>
      <CatalogCta />
    </>
  );
}
