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
    <section className="border-y border-line bg-studio py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16 xl:gap-20">
          <FadeIn className="min-w-0 lg:col-span-5">
            <p className="type-kicker">{t("aboutPage.body3Title")}</p>
            <p className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="font-display text-[clamp(5rem,18vw,10rem)] font-medium leading-none tracking-[-0.06em] text-ink">
                81
              </span>
              <span className="mb-2 type-small text-muted sm:mb-3">
                {t("aboutPage.provinceLabel")}
              </span>
            </p>
            <h2 className="type-h2 mt-4 max-w-[12ch] text-ink">
              {t("aboutPage.coverageHeadline")}
            </h2>
          </FadeIn>

          <FadeIn delay={0.04} className="min-w-0 lg:col-span-7">
            <p className="type-body max-w-[48ch]">{t("aboutPage.body3")}</p>
            <ul className="mt-8 border-t border-line">
              {audiences.map((item) => (
                <li
                  key={item}
                  className="flex min-h-12 items-center gap-4 border-b border-line py-3.5 text-[15px] text-ink sm:text-[16px]"
                >
                  <span
                    className="h-px w-4 shrink-0 bg-primary sm:w-5"
                    aria-hidden="true"
                  />
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
