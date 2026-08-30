import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutCoverage() {
  const t = createT(await getLocale());
  const audiences = [
    t("aboutPage.audiencePublic"),
    t("aboutPage.audienceHospitals"),
    t("aboutPage.audienceClinics"),
    t("aboutPage.audienceZoos"),
    t("aboutPage.audienceParks"),
    t("aboutPage.audiencePrivate"),
  ];

  return (
    <section className="border-y border-line bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="type-kicker">{t("aboutPage.body3Title")}</p>
            <p className="mt-4 flex items-end gap-3">
              <span className="font-display text-[clamp(5rem,14vw,8.5rem)] font-medium leading-none tracking-[-0.06em] text-ink">
                81
              </span>
              <span className="mb-2 type-small text-muted">{t("aboutPage.provinceLabel")}</span>
            </p>
            <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.coverageHeadline")}</h2>
          </FadeIn>
          <FadeIn delay={0.06} className="lg:col-span-7">
            <p className="type-body max-w-[540px]">{t("aboutPage.body3")}</p>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              {audiences.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-t border-line pt-3 text-[15px] text-ink"
                >
                  <span className="h-px w-5 shrink-0 bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
