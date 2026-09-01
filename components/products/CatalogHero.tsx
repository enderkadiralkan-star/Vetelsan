import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { productCategories } from "@/lib/categories";
import { products } from "@/lib/products";

export async function CatalogHero() {
  const locale = await getLocale();
  const t = createT(locale);

  return (
    <section className="bg-light">
      <Container className="flex min-h-[430px] flex-col justify-center py-14 sm:min-h-[460px] sm:py-16 lg:min-h-[500px] lg:py-20">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary sm:text-[12px]">
            {t("productsPage.kicker")}
          </p>
          <h1 className="mt-4 text-hero tracking-[-0.04em] text-ink sm:mt-5">
            {t("productsPage.catalogTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-muted sm:mt-6 sm:text-[16px]">
            {t("productsPage.catalogLead")}
          </p>
          <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.16em] text-ink/50">
            {t("productsPage.stats", {
              categories: productCategories.length,
              products: products.length,
            })}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
