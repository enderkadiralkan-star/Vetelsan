import { CorporatePageHero } from "@/components/CorporatePageHero";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { padIndex } from "@/lib/utils";

export async function ContactHero() {
  const t = createT(await getLocale());

  return (
    <CorporatePageHero
      kicker={`${padIndex(4)} — ${t("contactPage.kicker")}`}
      title={t("contactPage.heroTitle")}
      description={t("contactPage.heroLead")}
      image="/images/hero/laboratory.jpg"
      imageAlt={t("contactPage.title")}
      imagePosition="object-[center_38%] lg:object-center"
    />
  );
}
