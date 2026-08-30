import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function CatalogCta() {
  const t = createT(await getLocale());

  return (
    <section className="border-t border-line bg-light py-16 sm:py-20 lg:py-[80px]">
      <Container>
        <FadeIn>
          <p className="type-kicker">{t("productsPage.title")}</p>
          <TextLink href="/urunler" className="mt-4">
            {t("productsPage.exploreGroups")}
          </TextLink>
        </FadeIn>
      </Container>
    </section>
  );
}
