"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { localizeDocuments } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

export function DocumentsGallery() {
  const { locale, t } = useI18n();
  const items = localizeDocuments(locale);
  const [active, setActive] = useState<(typeof items)[number] | null>(null);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 min-[390px]:-mx-5 min-[390px]:px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
        {items.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(item)}
            className="group w-[min(78vw,300px)] shrink-0 snap-start text-left sm:w-auto"
          >
            <span className="relative block aspect-[3/4] overflow-hidden bg-studio">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 78vw, 33vw"
                className="object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </span>
            <span className="mt-4 block">
              <span className="block text-[16px] font-medium tracking-[-0.02em] text-ink">
                {item.title}
              </span>
              <span className="mt-1 block text-[13px] text-muted">{item.detail}</span>
              <span className="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-ink transition-colors duration-300 group-hover:text-primary">
                {t("aboutPage.viewDocument")}
                <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1.5 motion-reduce:transition-none" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center bg-white text-ink sm:right-6 sm:top-6"
            aria-label={t("common.close")}
            onClick={() => setActive(null)}
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
          <div
            className={cn("relative h-[min(88svh,900px)] w-full max-w-4xl")}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
