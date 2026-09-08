import { AboutPlantGallery } from "@/components/about/AboutPlantGallery";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutProduction() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <FadeIn className="max-w-[640px]">
          <p className="type-kicker">{t("aboutPage.productionKicker")}</p>
          <h2 className="type-h2 mt-4 whitespace-pre-line text-ink">
            {t("aboutPage.productionHeadline")}
          </h2>
          <p className="type-body mt-6">{t("aboutPage.body2")}</p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <AboutPlantGallery />
        </FadeIn>
      </Container>
    </section>
  );
}
