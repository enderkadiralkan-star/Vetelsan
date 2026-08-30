import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPlants } from "@/components/about/plants";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { cn, padIndex } from "@/lib/utils";

export async function AboutProduction() {
  const t = createT(await getLocale());

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <FadeIn className="max-w-[640px]">
          <p className="type-kicker">{t("aboutPage.productionKicker")}</p>
          <h2 className="type-h2 mt-4 whitespace-pre-line text-ink">
            {t("aboutPage.productionHeadline")}
          </h2>
          <p className="type-body mt-6">{t("aboutPage.body2")}</p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-3 lg:mt-16 lg:grid-cols-12 lg:gap-4">
          {aboutPlants.map((plant, index) => (
            <FadeIn
              key={plant.titleKey}
              delay={index * 0.05}
              className={cn(
                index === 0 && "lg:col-span-7",
                index === 1 && "lg:col-span-5",
                index === 2 && "lg:col-span-12",
              )}
            >
              <Link
                href={plant.href}
                className={cn(
                  "group relative flex overflow-hidden bg-night text-white",
                  index === 2 ? "h-[240px] sm:h-[280px] lg:h-[320px]" : "h-[280px] sm:h-[320px] lg:h-[380px]",
                )}
              >
                <Image
                  src={plant.image}
                  alt={plant.imageAlt}
                  fill
                  sizes={
                    index === 2
                      ? "100vw"
                      : index === 0
                        ? "(max-width: 1023px) 100vw, 58vw"
                        : "(max-width: 1023px) 100vw, 42vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />
                <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="type-kicker text-white/80">{padIndex(plant.index)}</p>
                    <h3 className="type-h3 mt-2 max-w-[20ch] text-white">
                      {t(plant.titleKey)}
                    </h3>
                  </div>
                  <ArrowRight
                    className="mb-1 size-4 shrink-0 text-white transition-transform duration-500 group-hover:translate-x-1.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
