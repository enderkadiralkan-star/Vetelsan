import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { HomeCategoryCard } from "./HomeCategoryCard";
import { SectionHeader } from "./SectionHeader";
import { TextLink } from "./TextLink";
import { localizeCategories } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getProductCountByCategory, products } from "@/lib/products";
import { cn, padCount } from "@/lib/utils";

export async function CategoriesSection() {
  const locale = await getLocale();
  const t = createT(locale);
  const categories = localizeCategories(locale);
  const productTotal = products.length;

  return (
    <section className="section-home-first bg-light">
      <Container>
        <FadeIn>
          <SectionHeader
            index={0}
            kicker={t("home.categoriesKicker")}
            title={t("home.categoriesTitle")}
            description={t("home.categoriesDescription")}
            aside={
              <>
                <p className="type-small text-muted">
                  {t("home.categoryCountStat", { count: categories.length })}
                  <span className="mx-3 text-line">/</span>
                  {t("common.productCount", { count: productTotal })}
                </p>
                <TextLink
                  href="/urunler"
                  kicker={t("home.viewAllProductsKicker")}
                  className="mt-4"
                >
                  {t("common.explore")}
                </TextLink>
              </>
            }
          />
        </FadeIn>

        <div className="section-stack grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 min-[1200px]:grid-cols-12 min-[1200px]:gap-5">
          {categories.map((category, index) => {
            const featured = index < 2;
            return (
              <FadeIn
                key={category.slug}
                delay={Math.min(index, 5) * 0.05}
                className={cn(
                  featured
                    ? "md:col-span-2 min-[1200px]:col-span-6"
                    : "min-[1200px]:col-span-4",
                )}
              >
                <HomeCategoryCard
                  category={category}
                  index={index}
                  featured={featured}
                  countLabel={t("common.productCount", {
                    count: padCount(getProductCountByCategory(category.slug)),
                  })}
                  exploreLabel={t("common.explore")}
                />
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="type-small text-muted">
            {t("home.categoryCountStat", { count: categories.length })}
            <span className="mx-3 text-line">/</span>
            {t("common.productCount", { count: productTotal })}
          </p>
          <TextLink href="/urunler">{t("home.exploreCatalog")}</TextLink>
        </FadeIn>
      </Container>
    </section>
  );
}
