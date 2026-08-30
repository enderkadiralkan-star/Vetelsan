import Link from "next/link";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { SectionHeader } from "./SectionHeader";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutPreview() {
  const locale = await getLocale();
  const t = createT(locale);
  const stats = [
    { value: "1996", label: t("home.statFounded") },
    { value: "200+", label: t("home.statProducts") },
    { value: "1.000+", label: t("home.statCustomers") },
    { value: "81", label: t("home.statCoverage") },
  ];

  return (
    <section className="section-home bg-white">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeader
              index={3}
              kicker={t("home.aboutKicker")}
              title={t("home.aboutTitle")}
              description={t("home.aboutP1")}
            />
            <p className="type-body mt-4 max-w-[600px]">{t("home.aboutP2")}</p>
            <Link href="/hakkimizda" className="btn-primary mt-8">
              {t("home.aboutCta")}
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-[140px] flex-col justify-between border border-line bg-light px-5 py-6 sm:min-h-[160px]"
                >
                  <p className="type-stat text-ink">{item.value}</p>
                  <p className="type-small mt-4 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
