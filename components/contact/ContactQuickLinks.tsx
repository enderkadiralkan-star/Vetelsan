import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { cn, padIndex } from "@/lib/utils";

function locationLabel(address: string) {
  const parts = address.split("/").map((part) => part.trim());
  return parts[parts.length - 1] ?? address;
}

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

export async function ContactQuickLinks() {
  const t = createT(await getLocale());

  return (
    <section className="border-b border-line bg-white">
      <Container>
        <FadeIn>
          <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-line">
            {/* Phone — santral + mobiles */}
            <li className="min-w-0 py-8 sm:border-r sm:border-line sm:px-6 sm:py-10 lg:px-8 lg:pl-0">
              <p className="type-kicker">{padIndex(0)}</p>
              <p className="type-small mt-4 text-muted">{t("contactPage.phone")}</p>
              <ul className="mt-3 space-y-3">
                {contact.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="group block transition-colors duration-300 hover:text-primary"
                    >
                      <p className="text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                        {phone.display}
                      </p>
                      <p className="mt-0.5 text-[13px] leading-[1.45] text-muted group-hover:text-primary/70">
                        {t(phoneLabelKey(phone.label))}
                        {phone.label === "switchboard"
                          ? ` · ${t("contactPage.callDirect")}`
                          : ""}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Email */}
            <li className="min-w-0 py-8 sm:px-6 sm:py-10 lg:border-r-0 lg:px-8">
              <a
                href={`mailto:${contact.email}`}
                className="block transition-colors duration-300 hover:text-primary"
              >
                <p className="type-kicker">{padIndex(1)}</p>
                <p className="type-small mt-4 text-muted">{t("contactPage.email")}</p>
                <p className="mt-2 break-words text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                  {contact.email}
                </p>
                <p className="mt-1 text-[13px] leading-[1.45] text-muted">
                  {t("contactPage.sendMail")}
                </p>
              </a>
            </li>

            {/* Hours */}
            <li
              className={cn(
                "min-w-0 py-8 sm:border-t sm:border-line sm:border-r sm:px-6 sm:py-10",
                "lg:border-t-0 lg:border-l lg:border-r-0 lg:px-8",
              )}
            >
              <p className="type-kicker">{padIndex(2)}</p>
              <p className="type-small mt-4 text-muted">{t("contactPage.hours")}</p>
              <p className="mt-2 text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                {t("contactPage.weekday")}
              </p>
              <p className="mt-1 text-[13px] leading-[1.45] text-muted">
                {t("contactPage.saturday")}
              </p>
            </li>

            {/* Location */}
            <li
              className={cn(
                "min-w-0 py-8 sm:border-t sm:border-line sm:px-6 sm:py-10",
                "lg:border-t-0 lg:border-l lg:px-8 lg:pr-0",
              )}
            >
              <a
                href="#konum"
                className="block transition-colors duration-300 hover:text-primary"
              >
                <p className="type-kicker">{padIndex(3)}</p>
                <p className="type-small mt-4 text-muted">{t("contactPage.location")}</p>
                <p className="mt-2 text-[17px] font-medium tracking-[-0.02em] text-ink sm:text-[18px]">
                  {locationLabel(contact.address)}
                </p>
                <p className="mt-1 text-[13px] leading-[1.45] text-muted">
                  {t("contactPage.viewOnMap")}
                </p>
              </a>
            </li>
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
