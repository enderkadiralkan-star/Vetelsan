import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { CatalogCategoryCard } from "./CatalogCategoryCard";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { localizeCategories } from "@/lib/i18n/content";
import { getProductCountByCategory } from "@/lib/products";
import { padCount } from "@/lib/utils";

export async function CatalogCategoryGrid() {
  const locale = await getLocale();
  const t = createT(locale);
  const categories = localizeCategories(locale);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[80px]">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-6">
            {categories.map((category, index) => (
              <CatalogCategoryCard
                key={category.slug}
                category={category}
                index={index}
                featured={index < 2}
                countLabel={t("common.productCount", {
                  count: padCount(getProductCountByCategory(category.slug)),
                })}
                exploreLabel={t("common.explore")}
                className={index < 2 ? "lg:col-span-6" : "lg:col-span-4"}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
