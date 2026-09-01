import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { MedicineLegalNotice } from "@/components/medicines/MedicineLegalNotice";
import { MedicineProductGrid } from "@/components/medicines/MedicineProductGrid";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { CategoryPageHero } from "@/components/products/CategoryPageHero";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CategorySeoBlock } from "@/components/seo/CategorySeoBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localizeMedicine,
  localizeMedicineCategories,
  localizeMedicineCategory,
} from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { categoryMetadata, notFoundMetadata } from "@/lib/metadata";
import { getMedicineCategorySeo } from "@/lib/seo/content";
import { getMedicineCategoryKeywords } from "@/lib/seo/keywords";
import {
  categoryMedicineItemList,
  collectionPageSchema,
  faqPageSchema,
} from "@/lib/seo/schema";
import {
  getMedicineCategoryBySlug,
  getMedicineHref,
  getMedicinesByCategory,
  medicineCategories,
} from "@/lib/medicines";
import { padCount } from "@/lib/utils";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return medicineCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await getLocale();
  const { category: slug } = await params;
  const category = getMedicineCategoryBySlug(slug);
  if (!category) {
    return notFoundMetadata(await getLocale());
  }
  const localized = localizeMedicineCategory(category, locale);
  const keywords = getMedicineCategoryKeywords(category.slug);
  if (keywords) {
    return categoryMetadata(
      keywords,
      `/ilaclar-asilar/${category.slug}`,
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
    `/ilaclar-asilar/${category.slug}`,
    category.image,
    localized.imageAlt ?? localized.name,
    locale,
  );
}

export default async function MedicineCategoryPage({ params }: PageProps) {
  const locale = await getLocale();
  const t = createT(locale);
  const { category: slug } = await params;
  const category = getMedicineCategoryBySlug(slug);
  if (!category) notFound();

  const localizedCategory = localizeMedicineCategory(category, locale);
  const categories = localizeMedicineCategories(locale);
  const items = getMedicinesByCategory(category.slug).map((medicine) =>
    localizeMedicine(medicine, locale),
  );
  const categoryIndex = medicineCategories.findIndex(
    (item) => item.slug === category.slug,
  );
  const countLabel = t("common.productCount", {
    count: padCount(items.length),
  });
  const seoContent = getMedicineCategorySeo(category.slug, locale);
  const keywords = getMedicineCategoryKeywords(category.slug);
  const breadcrumbItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.medicines"), href: "/ilaclar-asilar" },
    { label: localizedCategory.name },
  ];
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: getMedicineHref(item),
  }));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd
        data={[
          collectionPageSchema({
            name: keywords?.seoTitle ?? localizedCategory.name,
            description:
              keywords?.seoDescription ?? localizedCategory.description,
            path: `/ilaclar-asilar/${category.slug}`,
            items: schemaItems,
          }),
          categoryMedicineItemList(category.slug),
          ...(seoContent?.faq ? [faqPageSchema(seoContent.faq)] : []),
        ]}
      />
      <CategoryPageHero
        index={Math.max(categoryIndex, 0)}
        category={localizedCategory}
        kicker={t("medicinesPage.categoryKicker")}
        countLabel={countLabel}
        uppercaseTitle
      />
      <CategoryNavigation
        sticky
        ariaLabel={t("medicinesPage.catalogNav")}
        activeHref={`/ilaclar-asilar/${category.slug}`}
        items={[
          { href: "/ilaclar-asilar", label: t("common.all") },
          ...categories.map((item, index) => ({
            href: item.href,
            label: item.name,
            index,
          })),
        ]}
      />
      <section className="bg-white py-8 sm:py-14 lg:py-20">
        <Container>
          <Breadcrumb items={breadcrumbItems} />
          <div className="mb-8 flex items-baseline justify-between gap-4 sm:mb-10">
            <h2 className="text-[22px] tracking-[-0.03em] text-ink sm:text-[28px]">
              {t("medicinesPage.productListing")}
            </h2>
            <p className="shrink-0 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
              {countLabel}
            </p>
          </div>
          <MedicineProductGrid
            products={items.map((item) => ({
              ...item,
              href: getMedicineHref(item),
            }))}
            emptyLabel={t("common.emptyCategory")}
            ctaLabel={t("medicinesPage.viewDetail")}
          />
          <MedicineLegalNotice
            title={t("medicinesPage.legalTitle")}
            body={t("medicinesPage.disclaimer")}
          />
        </Container>
      </section>
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
