import { ContactCta } from "@/components/contact/ContactCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactQuickLinks } from "@/components/contact/ContactQuickLinks";
import { ContactMap } from "@/components/ContactMap";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { intentMetadata } from "@/lib/metadata";
import { contactKeywords } from "@/lib/seo/keywords";
import { localBusinessSchema } from "@/lib/seo/schema";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  return intentMetadata(contactKeywords, "/iletisim", locale, {
    absoluteTitle: true,
    ogImage: "/images/hero/veterinary.jpg",
    ogImageAlt: "Vetelsan iletişim",
  });
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

function phoneLabelKey(label: (typeof contact.phones)[number]["label"]) {
  return label === "switchboard"
    ? "contactPage.phoneSwitchboard"
    : "contactPage.phoneMobile";
}

export default async function ContactPage() {
  const t = createT(await getLocale());
  const breadcrumbItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.contact") },
  ];

  const detailBlocks = [
    {
      label: t("contactPage.address"),
      body: addressLines(contact.address),
      href: "#konum",
    },
    {
      label: t("contactPage.phone"),
      body: contact.phones.map(
        (phone) => `${t(phoneLabelKey(phone.label))}: ${phone.display}`,
      ),
      hrefs: contact.phones.map((phone) => phone.href),
    },
    {
      label: t("contactPage.email"),
      body: [contact.email],
      href: `mailto:${contact.email}`,
    },
    {
      label: t("contactPage.fax"),
      body: [contact.fax.display],
      href: contact.fax.href,
    },
    {
      label: t("contactPage.hours"),
      body: [t("contactPage.weekday"), t("contactPage.saturday")],
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={localBusinessSchema()} />
      <ContactHero />
      <ContactQuickLinks />

      <section className="bg-studio py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <FadeIn className="mx-auto max-w-[720px] text-center">
            <p className="type-kicker">{t("contactPage.writeKicker")}</p>
            <h2 className="type-h2 mt-4 text-ink">{t("contactPage.detailsTitle")}</h2>
            <p className="type-body mx-auto mt-5 max-w-[52ch]">
              {t("contactPage.detailsLead")}
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="mt-12 lg:mt-16">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {detailBlocks.map((block, index) => (
                <li
                  key={block.label}
                  className="bg-white p-6 sm:p-8 lg:min-h-[220px]"
                >
                  <p className="type-kicker">{padIndex(index)}</p>
                  <p className="type-small mt-4 text-muted">{block.label}</p>
                  <div className="mt-3 space-y-1.5">
                    {"hrefs" in block && block.hrefs ? (
                      block.body.map((line, lineIndex) => (
                        <a
                          key={line}
                          href={block.hrefs![lineIndex]}
                          className="block text-[16px] leading-[1.5] text-ink transition-colors duration-300 hover:text-primary sm:text-[17px]"
                        >
                          {line}
                        </a>
                      ))
                    ) : block.href ? (
                      <a
                        href={block.href}
                        className="block text-[16px] leading-[1.5] text-ink transition-colors duration-300 hover:text-primary sm:text-[17px]"
                      >
                        {block.body.map((line) => (
                          <span key={line} className="block break-words">
                            {line}
                          </span>
                        ))}
                      </a>
                    ) : (
                      block.body.map((line) => (
                        <p
                          key={line}
                          className="break-words text-[16px] leading-[1.5] text-ink sm:text-[17px]"
                        >
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      <ContactMap />
      <ContactCta />
    </>
  );
}
