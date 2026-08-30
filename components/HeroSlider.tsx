"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { HeroControls } from "@/components/hero/HeroControls";
import { HeroCopy } from "@/components/hero/HeroCopy";
import { HeroProgress } from "@/components/hero/HeroProgress";
import { HeroSlide } from "@/components/hero/HeroSlide";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { localizeHeroSlides } from "@/lib/i18n/content";

const INTERVAL = 7000;
const SWIPE_THRESHOLD = 48;

export function HeroSlider() {
  const { locale, t } = useI18n();
  const slides = localizeHeroSlides(locale);
  const reduceMotion = Boolean(useReducedMotion());
  const [index, setIndex] = useState(0);
  const [allowVideo, setAllowVideo] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useRef(true);

  const goTo = useCallback(
    (next: number) => {
      const total = slides.length;
      setIndex((next + total) % total);
    },
    [slides.length],
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setAllowVideo(desktop.matches && !reduceMotion);
    update();
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const timer = window.setInterval(() => goTo(index + 1), INTERVAL);
    return () => window.clearInterval(timer);
  }, [goTo, index, reduceMotion, slides.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }
      if (!inView.current) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  const active = slides[index];

  return (
    <section
      ref={sectionRef}
      className="relative isolate -mt-[76px] min-h-[max(680px,100svh)] w-full overflow-hidden bg-[#111111] md:h-[min(100svh,820px)] md:min-h-[720px] md:max-h-[820px] lg:-mt-[88px]"
      aria-roledescription="carousel"
      aria-label={t("home.heroAria")}
      onTouchStart={(event) => {
        touchStart.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }}
      onTouchEnd={(event) => {
        if (!touchStart.current) return;
        const dx = event.changedTouches[0].clientX - touchStart.current.x;
        const dy = event.changedTouches[0].clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
        goTo(dx > 0 ? index - 1 : index + 1);
      }}
    >
      {slides.map((slide, slideIndex) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          active={slideIndex === index}
          priority={slideIndex === 0}
          allowVideo={allowVideo}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.28)_42%,rgba(0,0,0,0.08)_64%,rgba(0,0,0,0)_82%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full min-h-[max(680px,100svh)] w-full max-w-[1440px] flex-col justify-end px-6 pb-[104px] md:min-h-0 md:px-[clamp(2.5rem,8vw,7.5rem)] md:pb-[120px] lg:pb-[128px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <HeroCopy key={active.id} slide={active} motionEnabled={hydrated} />
          <div className="self-end">
            <HeroControls
              index={index}
              total={slides.length}
              onPrev={() => goTo(index - 1)}
              onNext={() => goTo(index + 1)}
              prevLabel={t("home.previousSlide")}
              nextLabel={t("home.nextSlide")}
            />
          </div>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {t("home.slideLabel", { n: index + 1 })}. {active.title.replace(/\n/g, " ")}
      </span>

      <HeroProgress
        index={index}
        total={slides.length}
        durationMs={INTERVAL}
        reduceMotion={reduceMotion}
      />
    </section>
  );
}
