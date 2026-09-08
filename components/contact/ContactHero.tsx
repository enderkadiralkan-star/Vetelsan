import { CorporatePageHero } from "@/components/CorporatePageHero";
import { Container } from "@/components/Container";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { contact } from "@/lib/site";
import { padIndex } from "@/lib/utils";

export async function ContactHero() {
  const t = createT(await getLocale());
  const city =
    contact.address.split("/").map((part) => part.trim()).at(-1) ?? "Malatya";
  const meta = [
    {
      value: String(contact.phones.length),
      label: t("contactPage.metaLines"),
    },
    {
      value: city,
      label: t("contactPage.location"),
    },
    {
      value: "08:30 – 18:00",
      label: t("contactPage.metaWeekday"),
    },
  ];

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
          <dl className="grid grid-cols-3 divide-x divide-line">
            {meta.map((item) => (
              <div
                key={item.label}
                className="px-3 py-5 first:pl-0 last:pr-0 sm:px-6 sm:py-6"
              >
                <dt className="type-small text-muted">{item.label}</dt>
                <dd className="mt-2 font-display text-[22px] font-medium tracking-[-0.04em] text-ink sm:text-[28px]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </>
  );
}
