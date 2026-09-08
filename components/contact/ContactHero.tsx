import { CorporatePageHero } from "@/components/CorporatePageHero";
import { Container } from "@/components/Container";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

export async function ContactHero() {
  const t = createT(await getLocale());

  return (
    <>
      <CorporatePageHero
        kicker={`${padIndex(4)} — ${t("contactPage.kicker")}`}
        title={t("contactPage.heroTitle")}
        description={t("contactPage.heroLead")}
        image="/images/hero/laboratory.jpg"
        imageAlt={t("contactPage.title")}
        imagePosition="object-[center_38%] lg:object-center"
      />
      <div className="border-b border-line bg-white">
        <Container>
          <div className="py-6 sm:py-7">
            <p className="type-small text-muted">{t("contactPage.metaLines")}</p>
            <ul className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
              {contact.phones.map((phone) => (
                <li
                  key={phone.href}
                  className="min-w-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <a
                    href={phone.href}
                    className="group block transition-colors duration-300"
                  >
                    <p className="font-display text-[clamp(1.25rem,3.5vw,1.75rem)] font-medium tracking-[-0.03em] text-ink group-hover:text-primary">
                      {phone.display}
                    </p>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                      {t(phoneLabelKey(phone.label))}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
