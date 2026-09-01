import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { Breadcrumb } from "@/components/Breadcrumb";

import { Container } from "@/components/Container";

import { ProductGrid } from "@/components/ProductGrid";

import { CatalogCta } from "@/components/products/CatalogCta";

import { CategoryHero } from "@/components/products/CategoryHero";

import { CategoryNavigation } from "@/components/products/CategoryNavigation";

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

import { CategorySeoBlock } from "@/components/seo/CategorySeoBlock";

import { JsonLd } from "@/components/seo/JsonLd";

import { productCatalogNav } from "@/components/products/productCatalogNav";

import { getCategoryBySlug, productCategories } from "@/lib/categories";

import { localizeCategory, localizeProducts } from "@/lib/i18n/content";

import { getLocale } from "@/lib/i18n/locale";

import { createT } from "@/lib/i18n/t";

import { categoryMetadata, notFoundMetadata } from "@/lib/metadata";

import { getProductCategorySeo } from "@/lib/seo/content";

import { getProductCategoryKeywords } from "@/lib/seo/keywords";

import {

  categoryProductItemList,

  collectionPageSchema,

  faqPageSchema,

} from "@/lib/seo/schema";

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

  const { category: slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {

    return notFoundMetadata(locale);

  }

  const localized = localizeCategory(category, locale);

  const keywords = getProductCategoryKeywords(category.slug);

  if (keywords) {

    return categoryMetadata(

      keywords,

      `/urunler/${category.slug}`,

      category.image,

      localized.imageAlt ?? localized.name,

      locale,

    );

  }

  return categoryMetadata(

    {

      primary: localized.name,

      secondary: [],

      seoTitle: localized.name,

      seoDescription: localized.description,

    },

    `/urunler/${category.slug}`,

    category.image,

    localized.imageAlt ?? localized.name,

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

  const seoContent = getProductCategorySeo(category.slug, locale);

  const keywords = getProductCategoryKeywords(category.slug);

  const breadcrumbItems = [

    { label: t("nav.home"), href: "/" },

    { label: t("nav.products"), href: "/urunler" },

    { label: localized.name },

  ];

  const schemaItems = items.map((product) => ({

    name: product.name,

    url: `/urunler/${product.categorySlug}/${product.slug}`,

  }));



  return (

    <>

      <BreadcrumbSchema items={breadcrumbItems} />

      <JsonLd

        data={[

          collectionPageSchema({

            name: keywords?.seoTitle ?? localized.name,

            description: keywords?.seoDescription ?? localized.description,

            path: `/urunler/${category.slug}`,

            items: schemaItems,

          }),

          categoryProductItemList(category.slug),

          ...(seoContent?.faq ? [faqPageSchema(seoContent.faq)] : []),

        ]}

      />

      <div className="bg-light">

        <Container className="pt-6 sm:pt-8">

          <Breadcrumb className="mb-0" items={breadcrumbItems} />

        </Container>

      </div>

      <CategoryHero index={Math.max(categoryIndex, 0)} category={localized} />

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

      {seoContent ? (

        <CategorySeoBlock

          content={seoContent}

          relatedTitle={t("seo.relatedPages")}

          faqTitle={t("seo.faqTitle")}

        />

      ) : null}

      <CatalogCta />

    </>

  );

}

