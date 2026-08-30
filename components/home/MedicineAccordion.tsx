"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import {
  localizeMedicineCategories,
  localizeMedicines,
} from "@/lib/i18n/content";
import { cn, padCount, padIndex } from "@/lib/utils";

export function MedicineAccordion() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const categories = localizeMedicineCategories(locale);
  const medicines = localizeMedicines(locale);
  const [open, setOpen] = useState<string | null>(categories[0]?.slug ?? null);

  const active = useMemo(
    () => categories.find((category) => category.slug === open) ?? categories[0],
    [categories, open],
  );

  return (
    <div>
      {active ? (
        <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[8px] bg-night lg:hidden">
          <Image
            src={active.image}
            alt={active.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="type-kicker text-white/70">{t("home.medicinesKicker")}</p>
            <p className="type-h3 mt-2 text-white">{active.name}</p>
          </div>
        </div>
      ) : null}

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-14">
        <div className="border-y border-line">
          {categories.map((category, index) => {
            const expanded = open === category.slug;
            const items = medicines.filter(
              (medicine) => medicine.categorySlug === category.slug,
            );
            const panelId = `medicine-panel-${category.slug}`;

            return (
              <div
                key={category.slug}
                className={cn(
                  "border-b border-l-2 border-line last:border-b-0",
                  expanded
                    ? "border-l-primary bg-light"
                    : "border-l-transparent",
                )}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : category.slug)}
                    className="flex min-h-[52px] w-full items-center gap-4 px-4 py-4 text-left sm:gap-5 sm:px-5 sm:py-5"
                  >
                    <span
                      className={cn(
                        "type-small w-8 shrink-0 tabular-nums",
                        expanded ? "text-primary" : "text-muted",
                      )}
                    >
                      {padIndex(index)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "type-h3 block",
                          expanded ? "text-ink" : "text-charcoal",
                        )}
                      >
                        {category.name}
                      </span>
                      <span className="type-small mt-1 block text-muted">
                        {t("common.productCount", {
                          count: padCount(items.length),
                        })}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "inline-flex size-11 shrink-0 items-center justify-center text-muted",
                        expanded && "text-primary",
                      )}
                    >
                      {expanded ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-5 sm:pl-[4.5rem] sm:pb-6">
                      <p className="type-body max-w-[400px]">{category.description}</p>
                      {items.length > 0 ? (
                        <ul className="mt-4 divide-y divide-line border-y border-line">
                          {items.map((medicine) => (
                            <li key={medicine.slug}>
                              <Link
                                href={`/ilaclar-asilar/${category.slug}/${medicine.slug}`}
                                className="group cta-text w-full justify-between py-3 text-[15px]"
                              >
                                <span className="min-w-0 truncate font-medium">
                                  {medicine.name}
                                </span>
                                <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <Link
                        href={category.href}
                        className="group cta-text mt-4 text-primary hover:text-primary"
                      >
                        {t("common.viewCategory")}
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative hidden overflow-hidden rounded-[8px] bg-night lg:sticky lg:top-28 lg:block lg:aspect-[4/5]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.slug}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="type-kicker text-white/70">
                    {t("home.medicinesKicker")}
                  </p>
                  <p className="type-h3 mt-2 text-white">{active.name}</p>
                  <p className="mt-2 line-clamp-3 text-[15px] leading-[1.65] text-white/70 sm:text-base">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
