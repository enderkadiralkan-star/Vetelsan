import { AboutClose } from "@/components/about/AboutClose";
import { AboutCoverage } from "@/components/about/AboutCoverage";
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
import { intentMetadata } from "@/lib/metadata";
import { aboutKeywords } from "@/lib/seo/keywords";
import { padIndex } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  return intentMetadata(aboutKeywords, "/hakkimizda", locale, {
    ogImage: "/images/about/kafes-aparat-uretim-tesisi.jpg",
    ogImageAlt: "Vetelsan üretim tesisi",
  });
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

      <section className="overflow-x-clip border-t border-line bg-studio py-14 sm:py-16 lg:py-[112px]">
        <Container>
          <FadeIn className="max-w-[640px]">
            <p className="type-kicker">
              {padIndex(4)} — {t("aboutPage.documentsKicker")}
            </p>
            <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.documentsTitle")}</h2>
            <p className="type-body mt-5">{t("aboutPage.documentsDescription")}</p>
          </FadeIn>
          <FadeIn delay={0.05} className="mt-10 lg:mt-12">
            <DocumentsGallery />
          </FadeIn>
        </Container>
      </section>

      <AboutMission />
      <AboutClose />
    </>
  );
}
