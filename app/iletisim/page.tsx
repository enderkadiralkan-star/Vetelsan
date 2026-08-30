import { ContactCta } from "@/components/contact/ContactCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactQuickLinks } from "@/components/contact/ContactQuickLinks";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactMap } from "@/components/ContactMap";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { pageMetadata } from "@/lib/metadata";
import { padIndex } from "@/lib/utils";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = createT(locale);
  return pageMetadata(
    t("meta.contactTitle"),
    t("meta.contactDescription"),
    "/iletisim",
    locale,
  );
}

export default async function ContactPage() {
  const t = createT(await getLocale());

  return (
    <>
      <ContactHero />
      <ContactQuickLinks />
      <section className="bg-studio py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <FadeIn className="max-w-[640px]">
            <p className="type-kicker">
              {padIndex(0)} — {t("contactPage.writeKicker")}
            </p>
            <h2 className="type-h2 mt-4 text-ink">{t("contactPage.formTitle")}</h2>
            <p className="type-body mt-5">{t("contactPage.formLead")}</p>
          </FadeIn>
          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-16">
            <FadeIn className="min-w-0">
              <ContactInfo />
            </FadeIn>
            <FadeIn delay={0.06} className="min-w-0">
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>
      <ContactMap />
      <ContactCta />
    </>
  );
}
