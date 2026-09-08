import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getMapDirectionsHref, getMapEmbedSrc } from "@/lib/map-urls";
import { padIndex } from "@/lib/utils";

const directionsHref = getMapDirectionsHref();

export async function ContactMap() {
  const locale = await getLocale();
  const t = createT(locale);
  const embedSrc = getMapEmbedSrc(locale);

  return (
    <section
      id="konum"
      className="scroll-mt-24 border-t border-line bg-studio py-14 sm:py-16 lg:py-[112px]"
    >
      <Container>
        <FadeIn className="max-w-[560px]">
          <p className="type-kicker">
            {padIndex(2)} — {t("contactPage.mapKicker")}
          </p>
          <h2 className="type-h2 mt-4 text-ink">{t("contactPage.mapHeading")}</h2>
          <p className="type-body mt-5">{t("contactPage.mapLead")}</p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-10 lg:mt-14">
          <div className="relative h-[350px] w-full overflow-hidden border border-line bg-white sm:h-[400px] lg:h-[480px]">
            <iframe
              title={t("contactPage.mapTitle")}
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="cta-text mt-6"
          >
            {t("contactPage.directions")}
            <ArrowRight className="size-4" />
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
