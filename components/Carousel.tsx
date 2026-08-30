"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressBar } from "./products/ProgressBar";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export type CarouselHandle = {
  scrollToIndex: (index: number) => void;
  scrollToStart: () => void;
  scrollByCard: (direction: number) => void;
};

export type CarouselToolbarApi = {
  canPrev: boolean;
  canNext: boolean;
  progress: number;
  index: number;
  total: number;
  scrollByCard: (direction: number) => void;
};

type CarouselProps = {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  showProgress?: boolean;
  tone?: "surface" | "white";
  variant?: "default" | "editorial";
  controls?: "overlay" | "none";
  edgeFade?: boolean;
  toolbar?: (api: CarouselToolbarApi) => React.ReactNode;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(
  function Carousel(
    {
      children,
      ariaLabel,
      className,
      showProgress = true,
      tone = "surface",
      variant = "default",
      controls = "overlay",
      edgeFade,
      toolbar,
    },
    ref,
  ) {
    const { t } = useI18n();
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);
    const [progress, setProgress] = useState(0);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const editorial = variant === "editorial";
    const showFade = edgeFade ?? !editorial;

    const getItems = useCallback(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return [];
      return Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-carousel-item]"),
      );
    }, []);

    const update = useCallback(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const items = getItems();
      const max = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
      setCanPrev(scroller.scrollLeft > 8);
      setCanNext(scroller.scrollLeft < max - 8);
      setTotal(items.length);

      let current = 0;
      const midpoint = scroller.scrollLeft + scroller.clientWidth * 0.12;
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].offsetLeft <= midpoint) current = i;
      }
      setIndex(current);
      setProgress(items.length <= 1 ? 1 : (current + 1) / items.length);
    }, [getItems]);

    const scrollToIndex = useCallback(
      (nextIndex: number) => {
        const scroller = scrollerRef.current;
        const item = getItems()[nextIndex];
        if (!scroller || !item) return;
        scroller.scrollTo({
          left: item.offsetLeft,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      },
      [getItems],
    );

    const scrollByCard = useCallback(
      (direction: number) => {
        const scroller = scrollerRef.current;
        const items = getItems();
        if (!scroller || items.length === 0) return;
        const styles = window.getComputedStyle(scroller);
        const gap = Number.parseFloat(styles.columnGap || styles.gap) || 12;
        const amount = items[0].offsetWidth + gap;
        scroller.scrollBy({
          left: direction * amount,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      },
      [getItems],
    );

    useImperativeHandle(
      ref,
      () => ({
        scrollToIndex,
        scrollToStart: () => scrollToIndex(0),
        scrollByCard,
      }),
      [scrollByCard, scrollToIndex],
    );

    useEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      update();
      scroller.addEventListener("scroll", update, { passive: true });
      const observer = new ResizeObserver(update);
      observer.observe(scroller);
      return () => {
        scroller.removeEventListener("scroll", update);
        observer.disconnect();
      };
    }, [update, children]);

    return (
      <div className="min-w-0">
        {toolbar?.({
          canPrev,
          canNext,
          progress,
          index,
          total,
          scrollByCard,
        })}

        <div className="relative min-w-0 overflow-hidden">
          <div
            ref={scrollerRef}
            className={cn(
              "no-scrollbar flex touch-pan-x snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
              editorial ? "gap-3 sm:gap-4" : "gap-4 px-1 py-1.5",
              className,
            )}
            aria-label={ariaLabel}
            aria-roledescription="carousel"
          >
            {children}
          </div>

          {showFade ? (
            <>
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r to-transparent sm:w-8",
                  tone === "white" ? "from-white" : "from-surface",
                )}
                aria-hidden="true"
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l to-transparent sm:w-8",
                  tone === "white" ? "from-white" : "from-surface",
                )}
                aria-hidden="true"
              />
            </>
          ) : null}

          {controls === "overlay" ? (
            <>
              <button
                type="button"
                aria-label={t("common.previous")}
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className="absolute top-1/2 left-0 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label={t("common.next")}
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className="absolute top-1/2 right-0 z-20 inline-flex size-10 -translate-y-1/2 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          ) : null}
        </div>
        {showProgress ? (
          <ProgressBar value={progress} label={ariaLabel} className="mt-5" />
        ) : null}
      </div>
    );
  },
);
