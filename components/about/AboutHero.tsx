import { CorporatePageHero } from "@/components/CorporatePageHero";
import { Container } from "@/components/Container";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { padIndex } from "@/lib/utils";

export async function AboutHero() {
  const t = createT(await getLocale());
  const meta = [
    { value: "1996", label: t("aboutPage.statFounded") },
    { value: "200+", label: t("home.statProducts") },
    { value: "81", label: t("aboutPage.provinceLabel") },
  ];

  return (
    <>
      <CorporatePageHero
        kicker={`${padIndex(2)} — ${t("aboutPage.kicker")}`}
        title={t("aboutPage.title")}
        description={t("aboutPage.heroLead")}
        image="/images/hero/veterinary.jpg"
        imageAlt={t("aboutPage.imageAlt")}
        imagePosition="object-[center_28%] lg:object-center"
      />
      <div className="border-b border-line bg-white">
        <Container>
          <dl className="grid grid-cols-3 divide-x divide-line">
            {meta.map((item) => (
              <div key={item.value} className="px-3 py-5 first:pl-0 last:pr-0 sm:px-6 sm:py-6">
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
