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
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <FadeIn>
          <p className="type-kicker">{t("aboutPage.story")}</p>
          <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.body1Title")}</h2>
        </FadeIn>
        <ul className="mt-10 border-b border-line lg:mt-16">
          {items.map((item, index) => (
            <li key={item.title}>
              <FadeIn delay={Math.min(index, 3) * 0.04}>
                <article className="group relative grid gap-3 border-t border-line py-8 lg:grid-cols-12 lg:items-start lg:gap-8 lg:py-10">
                  <span
                    className="absolute left-0 top-8 hidden h-[calc(100%-4rem)] w-px origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100 motion-reduce:transition-none lg:block"
                    aria-hidden="true"
                  />
                  <p className="type-kicker lg:col-span-1">{padIndex(index)}</p>
                  <h3 className="type-h3 text-ink lg:col-span-3">{item.title}</h3>
                  <p className="type-body lg:col-span-7">{item.text}</p>
                  <span className="hidden lg:col-span-1 lg:flex lg:justify-end">
                    <ArrowRight
                      className="size-4 text-ink/30 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-primary motion-reduce:transition-none"
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
