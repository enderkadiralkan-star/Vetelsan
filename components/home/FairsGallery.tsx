"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { SectionHeader } from "./SectionHeader";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { fairPhotos } from "@/lib/fairs";
import { cn, padCount, padIndex } from "@/lib/utils";

function FairCard({
  src,
  caption,
  openLabel,
  onOpen,
  onHighlight,
  inert,
}: {
  src: string;
  caption: string;
  openLabel: string;
  onOpen: () => void;
  onHighlight: () => void;
  inert?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      onFocus={onHighlight}
      onMouseEnter={onHighlight}
      aria-label={openLabel}
      tabIndex={inert ? -1 : 0}
      aria-hidden={inert || undefined}
      className="group relative block aspect-[4/3] w-[min(78vw,300px)] min-h-11 overflow-hidden rounded-[8px] bg-night sm:w-[380px] lg:w-[420px]"
    >
      <Image
        src={src}
        alt={inert ? "" : caption}
        fill
        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 380px, 420px"
        className="object-cover object-[center_42%] transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span
        className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/10 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </button>
  );
}

export function FairsGallery() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [highlight, setHighlight] = useState(0);
  const [touching, setTouching] = useState(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? current
            : (current - 1 + fairPhotos.length) % fairPhotos.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? current : (current + 1) % fairPhotos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  const paused = active !== null || touching;
  const copies = reduceMotion ? [0] : [0, 1];
  const current = active !== null ? fairPhotos[active] : null;
  const indicator = active ?? highlight;

  const handleTouchStart = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    setTouching(true);
  };

  const handleTouchEnd = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setTouching(false), 1400);
  };

  return (
    <section className="overflow-hidden bg-light py-16 lg:py-20">
      <Container>
        <FadeIn>
          <SectionHeader
            index={2}
            kicker={t("home.fairsKicker")}
            title={t("home.fairsTitle")}
            description={t("home.fairsDescription")}
          />
        </FadeIn>
      </Container>

      <div
        className="mt-10 lg:mt-12"
        onPointerDown={handleTouchStart}
        onPointerUp={handleTouchEnd}
        onPointerCancel={handleTouchEnd}
      >
        <div
          className={cn(
            "fair-marquee",
            paused && "is-paused",
            reduceMotion &&
              "no-scrollbar max-w-full overflow-x-auto px-4 min-[390px]:px-5 sm:px-8 lg:px-12",
          )}
          aria-label={t("home.fairsAria")}
        >
          {copies.map((copy) => (
            <div
              key={copy}
              className="flex gap-3 pr-3 sm:gap-4 sm:pr-4"
              aria-hidden={copy === 1 || undefined}
            >
              {fairPhotos.map((photo, index) => {
                const caption = t(photo.captionKey);
                return (
                  <FairCard
                    key={`${copy}-${photo.src}`}
                    src={photo.src}
                    caption={caption}
                    openLabel={t("home.fairsOpen", { name: caption })}
                    inert={copy === 1}
                    onHighlight={() => setHighlight(index)}
                    onOpen={() => setActive(index)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-6 flex items-center justify-between gap-4 lg:mt-8">
          <p className="type-small tabular-nums text-muted">
            {padIndex(indicator)} / {padCount(fairPhotos.length)}
          </p>
          <button
            type="button"
            className="group cta-text"
            onClick={() => setActive(highlight)}
          >
            {t("home.viewGallery")}
            <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" />
          </button>
        </div>
      </Container>

      {current && active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-night/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t(current.captionKey)}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-[6px] bg-white text-ink sm:right-6 sm:top-6"
            aria-label={t("common.close")}
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-[6px] border border-white/15 bg-white/10 text-white sm:inline-flex"
            aria-label={t("common.previous")}
            onClick={(event) => {
              event.stopPropagation();
              setActive((currentIndex) =>
                currentIndex === null
                  ? currentIndex
                  : (currentIndex - 1 + fairPhotos.length) % fairPhotos.length,
              );
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-[6px] border border-white/15 bg-white/10 text-white sm:inline-flex"
            aria-label={t("common.next")}
            onClick={(event) => {
              event.stopPropagation();
              setActive((currentIndex) =>
                currentIndex === null
                  ? currentIndex
                  : (currentIndex + 1) % fairPhotos.length,
              );
            }}
          >
            <ChevronRight className="size-5" />
          </button>
          <div
            className="flex w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-h-[80vh] overflow-hidden rounded-[8px] bg-night">
              <Image
                src={current.src}
                alt={t(current.captionKey)}
                fill
                sizes="90vw"
                className="object-cover object-[center_42%]"
              />
            </div>
            <p className="type-body mt-4 text-center text-white/80">
              {t(current.captionKey)}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
