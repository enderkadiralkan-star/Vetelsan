"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn, padIndex } from "@/lib/utils";

export type CategoryNavItem = {
  href: string;
  label: string;
  index?: number;
};

type CategoryNavigationProps = {
  items: CategoryNavItem[];
  activeHref?: string;
  sticky?: boolean;
  ariaLabel: string;
};

export function CategoryNavigation({
  items,
  activeHref,
  sticky = false,
  ariaLabel,
}: CategoryNavigationProps) {
  const { t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState({ start: false, end: false });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setOverflow({
        start: el.scrollLeft > 8,
        end: max > 8 && el.scrollLeft < max - 8,
      });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);

    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [items, activeHref]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !activeHref) return;
    const active = el.querySelector<HTMLElement>('[aria-current="page"]');
    if (!active) return;
    const left =
      active.offsetLeft - el.clientWidth / 2 + active.offsetWidth / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeHref]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.max(el.clientWidth * 0.55, 180),
      behavior: "smooth",
    });
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        "w-full min-w-0 border-y border-line bg-white",
        sticky && "sticky top-[76px] z-40 lg:top-[88px]",
      )}
    >
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1440px]">
        {overflow.start ? (
          <button
            type="button"
            aria-label={t("common.previous")}
            onClick={() => scrollByDir(-1)}
            className="absolute left-0 top-0 z-10 hidden h-full w-10 items-center justify-center bg-gradient-to-r from-white from-60% to-transparent text-ink md:flex"
          >
            <ChevronLeft className="size-4" />
          </button>
        ) : null}

        <div
          ref={scrollerRef}
          className="no-scrollbar min-w-0 flex-1 overflow-x-auto overscroll-x-contain touch-pan-x [-webkit-overflow-scrolling:touch]"
        >
          <ul className="flex w-max min-w-full items-stretch px-4 min-[390px]:px-5 sm:px-8 lg:px-12">
            {items.map((item) => {
              const active = activeHref === item.href;
              return (
                <li key={item.href} className="shrink-0">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex min-h-11 items-baseline gap-2 whitespace-nowrap px-3 py-3 text-[13px] tracking-wide transition-colors duration-300 sm:px-4 sm:py-4 sm:text-[14px]",
                      active ? "text-primary" : "text-muted hover:text-ink",
                    )}
                  >
                    {typeof item.index === "number" ? (
                      <span
                        className={cn(
                          "text-[11px] font-medium uppercase tabular-nums",
                          active ? "text-primary" : "text-muted/70",
                        )}
                      >
                        {padIndex(item.index)}
                      </span>
                    ) : null}
                    {item.label}
                    {active ? (
                      <span className="absolute inset-x-3 bottom-0 h-0.5 bg-primary sm:inset-x-4" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 md:w-16",
            overflow.end ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />

        {overflow.end ? (
          <button
            type="button"
            aria-label={t("common.next")}
            onClick={() => scrollByDir(1)}
            className="absolute right-0 top-0 z-10 hidden h-full w-10 items-center justify-center text-ink md:flex"
          >
            <ChevronRight className="size-4" />
          </button>
        ) : null}
      </div>
    </nav>
  );
}
