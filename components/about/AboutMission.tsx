import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutMission() {
  const t = createT(await getLocale());

  return (
    <section className="bg-studio py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-3">
            <p className="type-kicker">{t("aboutPage.missionTitle")}</p>
          </FadeIn>
          <FadeIn delay={0.06} className="lg:col-span-9">
            <p className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.35] tracking-[-0.03em] text-ink">
              {t("aboutPage.mission")}
            </p>
            <TextLink href="/iletisim" className="mt-10">
              {t("common.contactCta")}
            </TextLink>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
