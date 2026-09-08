import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { site } from "@/lib/site";
import { padIndex } from "@/lib/utils";

export async function AboutIntro() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <FadeIn className="min-w-0 lg:col-span-5">
            <p className="type-kicker">
              {padIndex(1)} — {site.name}
            </p>
            <h2 className="type-h2 mt-4 max-w-[16ch] text-ink">
              {t("aboutPage.heading")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.04} className="min-w-0 lg:col-span-7">
            <div className="max-w-[540px] space-y-5 border-t border-line pt-8 lg:border-t-0 lg:pt-1">
              <p className="type-body text-[16px] sm:text-[17px]">{t("home.aboutP1")}</p>
              <p className="type-body text-[16px] sm:text-[17px]">{t("home.aboutP2")}</p>
            </div>
            <span
              className="mt-10 block h-px w-12 bg-primary"
              aria-hidden="true"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
