"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroSlide } from "@/lib/types";

function emphasize(line: string, highlight?: string) {
  if (!highlight) return line;
  const idx = line.toLocaleLowerCase("tr-TR").indexOf(highlight.toLocaleLowerCase("tr-TR"));
  if (idx < 0) return line;
  return (
    <>
      {line.slice(0, idx)}
      <span className="text-[#E30613]">{line.slice(idx, idx + highlight.length)}</span>
      {line.slice(idx + highlight.length)}
    </>
  );
}

export function HeroCopy({
  slide,
  motionEnabled = true,
}: {
  slide: HeroSlide;
  motionEnabled?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const animate = motionEnabled && !reduceMotion;

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[340px] md:max-w-[580px]"
    >
      <div className="flex items-center gap-3">
        <span
          className="hidden h-px w-8 bg-[#E30613] sm:block"
          aria-hidden="true"
        />
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 sm:text-[12px]">
          {slide.eyebrow}
        </p>
      </div>
      <h1 className="mt-5 font-display text-[clamp(36px,10.5vw,50px)] font-semibold leading-[1.04] tracking-[-0.035em] text-white md:mt-6 md:text-[clamp(44px,4.8vw,72px)]">
        {slide.title.split("\n").map((line, index) => (
          <span key={index} className="block">
            {emphasize(line, slide.highlight)}
          </span>
        ))}
      </h1>
      <p className="mt-5 max-w-[32rem] text-[15px] leading-[1.6] text-white/68 md:mt-6 md:text-[17px] md:leading-[1.65]">
        {slide.description}
      </p>
      <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-3.5">
        <Link
          href={slide.primaryCta.href}
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 bg-primary px-7 text-[13px] font-medium tracking-[0.08em] text-white transition-colors duration-300 hover:bg-primary-dark sm:min-h-[50px] sm:px-8 sm:text-[14px]"
        >
          {slide.primaryCta.label}
          <ArrowRight
            className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </Link>
        {slide.secondaryCta ? (
          <Link
            href={slide.secondaryCta.href}
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 border border-white/25 bg-white/[0.04] px-7 text-[13px] font-medium tracking-[0.08em] text-white/90 backdrop-blur-[2px] transition-colors duration-300 hover:border-white/55 hover:bg-white hover:text-ink sm:min-h-[50px] sm:px-8 sm:text-[14px]"
          >
            {slide.secondaryCta.label}
            <ArrowRight
              className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
}
