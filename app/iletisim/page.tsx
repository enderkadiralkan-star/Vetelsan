import { ContactCta } from "@/components/contact/ContactCta";
import { ContactDirectory } from "@/components/contact/ContactDirectory";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactMap } from "@/components/ContactMap";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { JsonLd } from "@/components/seo/JsonLd";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { intentMetadata } from "@/lib/metadata";
import { contactKeywords } from "@/lib/seo/keywords";
import { localBusinessSchema } from "@/lib/seo/schema";

export async function generateMetadata() {
  const locale = await getLocale();
  return intentMetadata(contactKeywords, "/iletisim", locale, {
    absoluteTitle: true,
    ogImage: "/images/hero/veterinary.jpg",
    ogImageAlt: "Vetelsan iletişim",
  });
}

export default async function ContactPage() {
  const t = createT(await getLocale());
  const breadcrumbItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.contact") },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <JsonLd data={localBusinessSchema()} />
      <ContactHero />
      <ContactDirectory />
      <ContactMap />
      <ContactCta />
    </>
  );
}
