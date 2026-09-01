import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { ProductHero } from "@/components/products/ProductHero";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCategoryBySlug } from "@/lib/categories";
import {
  localizeCategory,
  localizeProduct,
} from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { notFoundMetadata, productMetadata } from "@/lib/metadata";
import { productSchema } from "@/lib/seo/schema";
import {
  getProductBySlug,
  getProductHref,
  getRelatedProducts,
  products,
} from "@/lib/products";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return notFoundMetadata(locale);
  }
  const localized = localizeProduct(product, locale);
  return productMetadata(
    localized.name,
    localized.shortDescription,
    getProductHref(product),
    product.image,
    locale,
  );
}

export default async function ProductDetailPage({ params }: PageProps) {
  const locale = await getLocale();
  const t = createT(locale);
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(slug);

  if (!category || !product || product.categorySlug !== category.slug) {
    notFound();
  }

  const localizedCategory = localizeCategory(category, locale);
  const localizedProduct = localizeProduct(product, locale);
  const related = getRelatedProducts(product.slug).map((item) =>
    localizeProduct(item, locale),
  );
  const breadcrumbItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.products"), href: "/urunler" },
    {
      label: localizedCategory.name,
      href: `/urunler/${category.slug}`,
    },
    { label: localizedProduct.name },
  ];

  return (
    <section className="bg-white py-6 sm:py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd
        data={productSchema(localizedProduct, localizedCategory.name)}
      />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <ProductHero
          product={localizedProduct}
          category={localizedCategory}
          specsTitle={t("productsPage.technicalSpecs")}
          quoteLabel={t("productsPage.requestQuote")}
          backLabel={t("productsPage.backToCategory")}
        />
        <RelatedProducts
          title={t("productsPage.related")}
          products={related}
        />
      </Container>
    </section>
  );
}
