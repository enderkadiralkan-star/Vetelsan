"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, padIndex } from "@/lib/utils";

type CarouselControlsProps = {
  index: number;
  total: number;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
  className?: string;
};

export function CarouselControls({
  index,
  total,
  canPrev,
  canNext,
  onPrev,
  onNext,
  previousLabel,
  nextLabel,
  className,
}: CarouselControlsProps) {
  if (total <= 1) return null;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <p className="min-w-[4.5rem] text-[12px] tabular-nums tracking-wide text-muted">
        {padIndex(index)} / {padIndex(total - 1)}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={previousLabel}
          disabled={!canPrev}
          onClick={onPrev}
          className="inline-flex size-10 items-center justify-center border border-line bg-white text-ink transition-colors duration-300 hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-25 sm:size-11"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          disabled={!canNext}
          onClick={onNext}
          className="inline-flex size-10 items-center justify-center border border-line bg-white text-ink transition-colors duration-300 hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-25 sm:size-11"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
