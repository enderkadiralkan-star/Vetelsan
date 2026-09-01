import Link from "next/link";
import { ArrowRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { SectionHeader } from "./SectionHeader";
import { TextLink } from "./TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getMapDirectionsHref, getMapEmbedSrc } from "@/lib/map-urls";
import { contact } from "@/lib/site";

export async function HomeLocationSection() {
  const locale = await getLocale();
  const t = createT(locale);
  const embedSrc = getMapEmbedSrc(locale);
  const directionsHref = getMapDirectionsHref();
  const primaryPhone = contact.phones[0];

  return (
    <section
      id="konum"
      className="scroll-mt-24 border-t border-line bg-studio section-home"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            index={4}
            kicker={t("home.locationKicker")}
            title={t("home.locationTitle")}
            description={t("home.locationLead")}
            aside={
              <TextLink href="/iletisim" kicker={t("home.locationContactKicker")}>
                {t("home.locationContact")}
              </TextLink>
            }
          />
        </FadeIn>

        <FadeIn delay={0.06} className="section-stack">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              <div className="flex flex-col border border-line bg-white p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-line bg-light text-primary">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="type-small text-muted">{t("contactPage.address")}</p>
                    <p className="mt-2 text-[15px] leading-[1.6] text-ink sm:text-base">
                      {contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col border border-line bg-white p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-line bg-light text-primary">
                    <Clock className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="type-small text-muted">{t("contactPage.hours")}</p>
                    <ul className="mt-2 space-y-1 text-[14px] leading-[1.55] text-ink sm:text-[15px]">
                      {contact.hours.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border border-line bg-white p-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:col-span-1 lg:flex-col lg:items-stretch">
                <a
                  href={primaryPhone.href}
                  className="group inline-flex items-center gap-3 text-ink outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center border border-line bg-light text-primary">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="type-small block text-muted">{t("home.locationCall")}</span>
                    <span className="mt-1 block text-[15px] font-medium tracking-[-0.02em] sm:text-base">
                      {primaryPhone.display}
                    </span>
                  </span>
                </a>
                <div className="mt-4 flex flex-wrap gap-4 sm:mt-0 lg:mt-6">
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-text"
                  >
                    {t("contactPage.directions")}
                    <Navigation className="size-4" aria-hidden="true" />
                  </a>
                  <Link href="/iletisim#konum" className="cta-text">
                    {t("contactPage.viewOnMap")}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden border border-line bg-night sm:min-h-[360px] lg:col-span-8 lg:min-h-[460px]">
              <span
                className="absolute inset-x-0 top-0 z-10 h-0.5 bg-primary"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(23,25,27,0.12)_0%,transparent_35%)]"
                aria-hidden="true"
              />
              <iframe
                title={t("contactPage.mapTitle")}
                src={embedSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[1.02] transition-[filter] duration-700 ease-out hover:grayscale-0 motion-reduce:transition-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
