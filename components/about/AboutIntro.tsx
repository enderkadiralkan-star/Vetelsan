import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutIntro() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="type-kicker">{t("aboutPage.rootsKicker")}</p>
            <h2 className="type-h2 mt-4 max-w-[18ch] text-ink">
              {t("aboutPage.heading")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.06} className="lg:col-span-7 lg:pt-10">
            <div className="max-w-[560px] space-y-5">
              <p className="type-body">{t("home.aboutP1")}</p>
              <p className="type-body">{t("home.aboutP2")}</p>
            </div>
            <span className="mt-10 block h-px w-16 bg-primary" aria-hidden="true" />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
