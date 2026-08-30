import Image from "next/image";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { localizeCategories } from "@/lib/i18n/content";
import { products } from "@/lib/products";
import { productCategories } from "@/lib/categories";
import { padCount, padIndex } from "@/lib/utils";

export async function CatalogHero() {
  const locale = await getLocale();
  const t = createT(locale);
  const categories = localizeCategories(locale);
  const leadImage = categories[0];

  return (
    <section className="bg-light">
      <Container className="grid items-start gap-10 py-10 sm:py-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:py-16">
        <FadeIn className="min-w-0 lg:col-span-7">
          <p className="type-kicker">
            {padIndex(0)} — {t("productsPage.title")}
          </p>
          <h1 className="type-h1 mt-4 break-words text-ink sm:mt-5">
            {t("productsPage.catalogTitle")}
          </h1>
          <p className="type-body mt-5 max-w-[540px]">{t("productsPage.catalogLead")}</p>
        </FadeIn>
        <FadeIn delay={0.06} className="min-w-0 lg:col-span-5">
          <div className="mb-6 flex gap-10 lg:justify-end">
            <div>
              <p className="font-display text-[32px] font-medium tracking-[-0.04em] text-ink sm:text-[40px]">
                {padCount(productCategories.length)}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                {t("productsPage.groupsLabel")}
              </p>
            </div>
            <div>
              <p className="font-display text-[32px] font-medium tracking-[-0.04em] text-ink sm:text-[40px]">
                {padCount(products.length)}
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                {t("productsPage.productsLabel")}
              </p>
            </div>
          </div>
          {leadImage ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-studio">
              <Image
                src={leadImage.image}
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
