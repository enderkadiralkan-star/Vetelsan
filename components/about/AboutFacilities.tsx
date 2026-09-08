import Image from "next/image";
import { aboutPlants, getAboutPlantImageAlt } from "@/components/about/plants";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { cn, padIndex } from "@/lib/utils";

export async function AboutFacilities() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-[112px]">
      <Container>
        <FadeIn className="max-w-[560px]">
          <p className="type-kicker">{t("aboutPage.productionKicker")}</p>
          <h2 className="type-h2 mt-4 text-ink">{t("aboutPage.productionTitle")}</h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-px bg-line lg:mt-12 lg:grid-cols-12 lg:grid-rows-2">
          {aboutPlants.map((plant, index) => (
            <FadeIn
              key={plant.titleKey}
              delay={index * 0.04}
              className={cn(
                index === 0 && "lg:col-span-7 lg:row-span-2",
                index === 1 && "lg:col-span-5",
                index === 2 && "lg:col-span-5",
              )}
            >
              <article
                className={cn(
                  "group relative overflow-hidden bg-ink",
                  index === 0
                    ? "aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-full lg:min-h-[440px]"
                    : "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[216px]",
                )}
              >
                <Image
                  src={plant.image}
                  alt={getAboutPlantImageAlt(plant, t)}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 1023px) 100vw, 58vw"
                      : "(max-width: 1023px) 100vw, 42vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="type-kicker text-white/70">{padIndex(plant.index)}</p>
                  <h3 className="mt-2 font-display text-[clamp(1.1rem,2.2vw,1.35rem)] font-medium tracking-[-0.03em] text-white">
                    {t(plant.titleKey)}
                  </h3>
                  <p className="mt-2 max-w-[36ch] text-[13px] leading-[1.55] text-white/75 sm:text-[14px]">
                    {t(plant.textKey)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
