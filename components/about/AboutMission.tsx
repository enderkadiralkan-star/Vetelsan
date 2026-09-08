import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { padIndex } from "@/lib/utils";

export async function AboutMission() {
  const t = createT(await getLocale());

  return (
    <section className="border-t border-line bg-studio py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <FadeIn>
          <div className="border-l-2 border-primary bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <p className="type-kicker">
              {padIndex(5)} — {t("aboutPage.missionTitle")}
            </p>
            <p className="mt-5 max-w-[36ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-[1.3] tracking-[-0.03em] text-ink sm:max-w-[42ch]">
              {t("aboutPage.mission")}
            </p>
            <TextLink href="/iletisim" className="mt-8 sm:mt-10">
              {t("common.contactCta")}
            </TextLink>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
