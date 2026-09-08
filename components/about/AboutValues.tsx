import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { padIndex } from "@/lib/utils";

export async function AboutValues() {
  const t = createT(await getLocale());
  const items = [
    { title: t("aboutPage.leadTitle"), text: t("aboutPage.lead") },
    { title: t("aboutPage.body1Title"), text: t("aboutPage.body1") },
    { title: t("aboutPage.body2Title"), text: t("aboutPage.body2") },
    { title: t("aboutPage.body3Title"), text: t("aboutPage.body3") },
  ];

  return (
    <section className="border-t border-line bg-white py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <FadeIn className="max-w-[560px]">
          <p className="type-kicker">{t("aboutPage.story")}</p>
          <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.body1Title")}</h2>
        </FadeIn>

        <ul className="mt-10 border-t border-line lg:mt-14">
          {items.map((item, index) => (
            <li key={item.title} className="border-b border-line">
              <FadeIn delay={Math.min(index, 3) * 0.03}>
                <article className="group relative grid gap-3 py-7 sm:py-8 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-9">
                  <span
                    className="absolute left-0 top-7 hidden h-[calc(100%-3.5rem)] w-px origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none lg:top-9 lg:block lg:h-[calc(100%-4.5rem)]"
                    aria-hidden="true"
                  />
                  <p className="type-kicker lg:col-span-1">{padIndex(index)}</p>
                  <h3 className="font-display text-[clamp(1.25rem,3vw,1.5rem)] font-medium tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-primary lg:col-span-3">
                    {item.title}
                  </h3>
                  <p className="type-body lg:col-span-7">{item.text}</p>
                  <span className="hidden lg:col-span-1 lg:flex lg:justify-end">
                    <ArrowRight
                      className="size-4 text-ink/25 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-primary motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
