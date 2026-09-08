"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { aboutPlants, getAboutPlantImageAlt } from "@/components/about/plants";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn, padIndex } from "@/lib/utils";

export function AboutPlantGallery() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? aboutPlants[active] : null;

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") {
        setActive((i) =>
          i === null ? i : (i - 1 + aboutPlants.length) % aboutPlants.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActive((i) => (i === null ? i : (i + 1) % aboutPlants.length));
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-px bg-line lg:mt-14 lg:grid-cols-12">
        {aboutPlants.map((plant, index) => (
          <button
            key={plant.titleKey}
            type="button"
            onClick={() => setActive(index)}
            aria-label={t("home.fairsOpen", { name: t(plant.titleKey) })}
            className={cn(
              "group relative flex overflow-hidden bg-ink text-left text-white outline-none",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              index === 0 && "lg:col-span-7",
              index === 1 && "lg:col-span-5",
              index === 2 && "lg:col-span-12",
              index === 2
                ? "h-[220px] sm:h-[260px] lg:h-[300px]"
                : "h-[260px] sm:h-[300px] lg:h-[360px]",
            )}
          >
            <Image
              src={plant.image}
              alt={getAboutPlantImageAlt(plant, t)}
              fill
              sizes={
                index === 2
                  ? "100vw"
                  : index === 0
                    ? "(max-width: 1023px) 100vw, 58vw"
                    : "(max-width: 1023px) 100vw, 42vw"
              }
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
              aria-hidden="true"
            />
            <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-5 sm:p-6 lg:p-7">
              <div className="min-w-0">
                <p className="type-kicker text-white/75">{padIndex(plant.index)}</p>
                <h3 className="mt-2 max-w-[22ch] font-display text-[clamp(1.15rem,2.5vw,1.5rem)] font-medium tracking-[-0.03em] text-white">
                  {t(plant.titleKey)}
                </h3>
              </div>
              <span className="mb-0.5 shrink-0 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 group-hover:text-white">
                {t("home.viewGallery")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {current && active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-[2px] sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t(current.titleKey)}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center bg-white text-ink transition-colors hover:bg-white/90 sm:right-6 sm:top-6"
            aria-label={t("common.close")}
            onClick={() => setActive(null)}
          >
            <X className="size-5" strokeWidth={1.6} />
          </button>
          <div
            className="flex w-full max-w-6xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[16/10] w-full max-h-[78vh] overflow-hidden border border-white/10 bg-ink">
              <Image
                src={current.image}
                alt={getAboutPlantImageAlt(current, t)}
                fill
                sizes="92vw"
                quality={90}
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-5 text-center sm:mt-6">
              <p className="type-kicker text-white/55">{padIndex(current.index)}</p>
              <p className="mt-2 font-display text-[22px] font-medium tracking-[-0.03em] text-white sm:text-[26px]">
                {t(current.titleKey)}
              </p>
              <p className="mx-auto mt-2 max-w-[42rem] text-[15px] leading-[1.55] text-white/70">
                {t(current.textKey)}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
