import { MedicineCategoryGrid } from "@/components/medicines/MedicineCategoryGrid";
import { MedicineHero } from "@/components/medicines/MedicineHero";
import { CategoryNavigation } from "@/components/products/CategoryNavigation";
import { Container } from "@/components/Container";
import { localizeMedicineCategories } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { pageMetadata } from "@/lib/metadata";
import { getMedicineCountByCategory, medicines } from "@/lib/medicines";
import { padCount } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = createT(locale);
  return pageMetadata(
    t("meta.medicinesTitle"),
    t("meta.medicinesDescription"),
    "/ilaclar-asilar",
    locale,
  );
}

export default async function MedicinesPage() {
  const locale = await getLocale();
  const t = createT(locale);
  const categories = localizeMedicineCategories(locale);

  return (
    <>
      <MedicineHero
        kicker={t("medicinesPage.kicker")}
        title={t("medicinesPage.title")}
        description={t("medicinesPage.heroLead")}
        stats={t("medicinesPage.stats", {
          categories: categories.length,
          products: medicines.length,
        })}
      />
      <CategoryNavigation
        sticky
        ariaLabel={t("medicinesPage.catalogNav")}
        activeHref="/ilaclar-asilar"
        items={[
          { href: "/ilaclar-asilar", label: t("common.all") },
          ...categories.map((category, index) => ({
            href: category.href,
            label: category.name,
            index,
          })),
        ]}
      />
      <section className="bg-white py-8 sm:py-14 lg:py-20">
        <Container>
          <MedicineCategoryGrid
            categories={categories}
            getCount={getMedicineCountByCategory}
            formatCount={(count) =>
              t("common.productCount", { count: padCount(count) })
            }
          />
        </Container>
      </section>
    </>
  );
}
