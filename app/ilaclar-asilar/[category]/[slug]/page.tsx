import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";
import { MedicineLegalNotice } from "@/components/medicines/MedicineLegalNotice";
import { MedicineProductVisual } from "@/components/medicines/MedicineProductVisual";
import { MedicineSpecs } from "@/components/medicines/MedicineSpecs";
import { RelatedMedicineProducts } from "@/components/medicines/RelatedMedicineProducts";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  localizeMedicine,
  localizeMedicineCategory,
} from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { notFoundMetadata, productMetadata } from "@/lib/metadata";
import { medicineProductSchema } from "@/lib/seo/schema";
import {
  getMedicineBySlug,
  getMedicineCategoryBySlug,
  getMedicineHref,
  getMedicinesByCategory,
  medicines,
} from "@/lib/medicines";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return medicines.map((medicine) => ({
    category: medicine.categorySlug,
    slug: medicine.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const medicine = getMedicineBySlug(slug);
  if (!medicine) {
    return notFoundMetadata(locale);
  }
  const localized = localizeMedicine(medicine, locale);
  return productMetadata(
    localized.name,
    localized.shortDescription,
    `/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`,
    medicine.image,
    locale,
  );
}

export default async function MedicineDetailPage({ params }: PageProps) {
  const locale = await getLocale();
  const t = createT(locale);
  const { category: categorySlug, slug } = await params;
  const category = getMedicineCategoryBySlug(categorySlug);
  const medicine = getMedicineBySlug(slug);

  if (!category || !medicine || medicine.categorySlug !== category.slug) {
    notFound();
  }

  const localizedCategory = localizeMedicineCategory(category, locale);
  const localizedMedicine = localizeMedicine(medicine, locale);
  const related = getMedicinesByCategory(category.slug)
    .filter((item) => item.slug !== medicine.slug)
    .slice(0, 4)
    .map((item) => localizeMedicine(item, locale));
  const breadcrumbItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.medicines"), href: "/ilaclar-asilar" },
    {
      label: localizedCategory.name,
      href: `/ilaclar-asilar/${category.slug}`,
    },
    { label: localizedMedicine.name },
  ];

  return (
    <section className="bg-white py-6 sm:py-10 lg:py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd
        data={medicineProductSchema(localizedMedicine, localizedCategory.name)}
      />
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-14 xl:gap-16">
          <MedicineProductVisual
            src={localizedMedicine.image}
            alt={localizedMedicine.name}
          />
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              {localizedCategory.name}
            </p>
            <h1 className="mt-3 text-lead tracking-[-0.03em] text-ink sm:text-[40px] lg:text-[44px]">
              {localizedMedicine.name}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.7] text-muted sm:mt-6 sm:text-[16px]">
              {localizedMedicine.description}
            </p>
            <MedicineSpecs
              items={[
                {
                  label: t("medicinesPage.activeIngredient"),
                  value: localizedMedicine.activeIngredient ?? "",
                },
                {
                  label: t("medicinesPage.usage"),
                  value: localizedMedicine.usage ?? "",
                },
              ]}
            />
            <p className="mt-8 text-[13px] leading-[1.6] text-muted">
              {t("medicinesPage.contactHint")}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/iletisim" className="btn-dark">
                {t("medicinesPage.getInfo")}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={`/ilaclar-asilar/${category.slug}`}
                className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-ink transition-colors duration-300 hover:text-primary"
              >
                {t("medicinesPage.backToCategory")}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
            <MedicineLegalNotice
              title={t("medicinesPage.legalTitle")}
              body={t("medicinesPage.disclaimer")}
            />
          </div>
        </div>
        <RelatedMedicineProducts
          kicker={t("medicinesPage.relatedKicker")}
          title={t("medicinesPage.sameCategory")}
          ctaLabel={t("medicinesPage.viewDetail")}
          products={related.map((item) => ({
            ...item,
            href: getMedicineHref(item),
          }))}
        />
      </Container>
    </section>
  );
}
