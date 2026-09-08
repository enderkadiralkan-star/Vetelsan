import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact, whatsapp } from "@/lib/site";
import { padIndex } from "@/lib/utils";

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

function addressLines(address: string) {
  const citySep = address.lastIndexOf(" / ");
  if (citySep === -1) return [address];
  const city = address.slice(citySep + 3).trim();
  const before = address.slice(0, citySep).trim();
  const districtSep = before.lastIndexOf(" ");
  if (districtSep === -1) return [before, city];
  return [
    before.slice(0, districtSep).trim(),
    `${before.slice(districtSep + 1)} / ${city}`,
  ];
}

export async function ContactDirectory() {
  const t = createT(await getLocale());
  const lines = addressLines(contact.address);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="type-kicker">{t("contactPage.writeKicker")}</p>
            <h2 className="type-h2 mt-4 max-w-[12ch] text-ink">
              {t("contactPage.detailsTitle")}
            </h2>
            <p className="type-body mt-5 max-w-[34ch]">
              {t("contactPage.detailsLead")}
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-8">
            <div className="border-t border-line">
              {/* Phones */}
              <div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10 sm:py-10">
                <div>
                  <p className="type-kicker">{padIndex(0)}</p>
                  <p className="type-small mt-3 text-muted">{t("contactPage.phone")}</p>
                </div>
                <ul className="space-y-5">
                  {contact.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="group inline-flex flex-col transition-colors duration-300"
                      >
                        <span className="font-display text-[clamp(22px,4vw,32px)] font-semibold tracking-[-0.03em] text-ink transition-colors group-hover:text-primary">
                          {phone.display}
                        </span>
                        <span className="mt-1 text-[13px] uppercase tracking-[0.14em] text-muted">
                          {t(phoneLabelKey(phone.label))}
                        </span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={whatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-1 inline-flex items-center gap-2 text-[14px] font-medium tracking-[0.04em] text-ink transition-colors hover:text-primary"
                    >
                      WhatsApp
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Email */}
              <div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10 sm:py-10">
                <div>
                  <p className="type-kicker">{padIndex(1)}</p>
                  <p className="type-small mt-3 text-muted">{t("contactPage.email")}</p>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="group font-display text-[clamp(20px,3.5vw,28px)] font-semibold tracking-[-0.03em] text-ink transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </div>

              {/* Fax + Hours */}
              <div className="grid gap-0 border-b border-line sm:grid-cols-2">
                <div className="grid gap-6 border-b border-line py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10 sm:border-b-0 sm:border-r sm:border-line sm:py-10 sm:pr-10">
                  <div>
                    <p className="type-kicker">{padIndex(2)}</p>
                    <p className="type-small mt-3 text-muted">{t("contactPage.fax")}</p>
                  </div>
                  <a
                    href={contact.fax.href}
                    className="text-[18px] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-primary sm:text-[20px]"
                  >
                    {contact.fax.display}
                  </a>
                </div>
                <div className="grid gap-6 py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10 sm:py-10 sm:pl-10">
                  <div>
                    <p className="type-kicker">{padIndex(3)}</p>
                    <p className="type-small mt-3 text-muted">{t("contactPage.hours")}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[18px] font-medium tracking-[-0.02em] text-ink sm:text-[20px]">
                      {t("contactPage.weekday")}
                    </p>
                    <p className="text-[15px] text-muted">{t("contactPage.saturday")}</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="grid gap-6 py-8 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-10 sm:py-10">
                <div>
                  <p className="type-kicker">{padIndex(4)}</p>
                  <p className="type-small mt-3 text-muted">{t("contactPage.address")}</p>
                </div>
                <div>
                  <a
                    href="#konum"
                    className="group block max-w-[34ch] transition-colors"
                  >
                    {lines.map((line) => (
                      <span
                        key={line}
                        className="block text-[18px] font-medium leading-[1.45] tracking-[-0.02em] text-ink group-hover:text-primary sm:text-[20px]"
                      >
                        {line}
                      </span>
                    ))}
                  </a>
                  <a
                    href="#konum"
                    className="cta-text mt-5"
                  >
                    {t("contactPage.viewOnMap")}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
