import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getMapDirectionsHref, getMapEmbedSrc } from "@/lib/map-urls";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

const directionsHref = getMapDirectionsHref();

export async function ContactMap() {
  const locale = await getLocale();
  const t = createT(locale);
  const embedSrc = getMapEmbedSrc(locale);

  return (
    <section id="konum" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <FadeIn className="min-w-0 lg:col-span-4">
            <p className="type-kicker">
              {padIndex(1)} — {t("contactPage.mapKicker")}
            </p>
            <h2 className="type-h2 mt-4 text-ink">{t("contactPage.mapHeading")}</h2>
            <p className="type-body mt-5 max-w-[420px]">{t("contactPage.mapLead")}</p>
            <p className="mt-6 max-w-[360px] text-[15px] leading-[1.6] text-ink sm:text-base">
              {contact.address}
            </p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="cta-text mt-8"
            >
              {t("contactPage.directions")}
              <ArrowRight className="size-4" />
            </a>
          </FadeIn>
          <FadeIn delay={0.06} className="min-w-0 lg:col-span-8">
            <div className="relative h-[360px] w-full overflow-hidden border border-line bg-studio lg:h-[460px]">
              <iframe
                title={t("contactPage.mapTitle")}
                src={embedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
