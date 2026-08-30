import { AboutClose } from "@/components/about/AboutClose";
import { AboutCoverage } from "@/components/about/AboutCoverage";
import { AboutFacilities } from "@/components/about/AboutFacilities";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutProduction } from "@/components/about/AboutProduction";
import { AboutQuote } from "@/components/about/AboutQuote";
import { AboutValues } from "@/components/about/AboutValues";
import { Container } from "@/components/Container";
import { DocumentsGallery } from "@/components/DocumentsGallery";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = createT(locale);
  return pageMetadata(
    t("meta.aboutTitle"),
    t("meta.aboutDescription"),
    "/hakkimizda",
    locale,
  );
}

export default async function AboutPage() {
  const t = createT(await getLocale());

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutQuote />
      <AboutProduction />
      <AboutCoverage />

      <section className="overflow-x-clip bg-studio py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <FadeIn className="max-w-[640px]">
            <p className="type-kicker">{t("aboutPage.documentsKicker")}</p>
            <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.documentsTitle")}</h2>
            <p className="type-body mt-5">{t("aboutPage.documentsDescription")}</p>
          </FadeIn>
          <FadeIn delay={0.06} className="mt-10 lg:mt-14">
            <DocumentsGallery />
          </FadeIn>
        </Container>
      </section>

      <AboutFacilities />
      <AboutMission />
      <AboutClose />
    </>
  );
}
