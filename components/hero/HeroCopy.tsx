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
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[330px] md:max-w-[600px]"
    >
      <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[13px]">
        {slide.eyebrow}
      </p>
      <h1 className="mt-5 font-display text-[clamp(38px,11vw,52px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white md:mt-6 md:text-[clamp(42px,5vw,78px)]">
        {slide.title.split("\n").map((line, index) => (
          <span key={index} className="block">
            {emphasize(line, slide.highlight)}
          </span>
        ))}
      </h1>
      <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.55] text-white/72 md:mt-6 md:text-[18px] md:leading-[1.6]">
        {slide.description}
      </p>
      <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
        <Link
          href={slide.primaryCta.href}
          className="group inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-7 text-[14px] font-medium tracking-[0.06em] text-white transition-colors duration-300 hover:bg-primary-dark sm:min-h-[52px] sm:px-8 sm:text-[15px]"
        >
          {slide.primaryCta.label}
          <ArrowRight
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </Link>
        {slide.secondaryCta ? (
          <Link
            href={slide.secondaryCta.href}
            className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/40 px-7 text-[14px] font-medium tracking-[0.06em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink sm:min-h-[52px] sm:px-8 sm:text-[15px]"
          >
            {slide.secondaryCta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
}
