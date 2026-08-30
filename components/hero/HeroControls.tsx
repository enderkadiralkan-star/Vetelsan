import { ChevronLeft, ChevronRight } from "lucide-react";
import { padCount, padIndex } from "@/lib/utils";

type HeroControlsProps = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

export function HeroControls({
  index,
  total,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
}: HeroControlsProps) {
  return (
    <div className="flex shrink-0 items-center gap-3 sm:gap-5">
      <p className="font-display text-[12px] tabular-nums tracking-[0.16em] text-white/80 sm:text-[13px]">
        <span className="text-white">{padIndex(index)}</span>
        <span className="text-white/35"> / {padCount(total)}</span>
      </p>
      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-white/85 transition-colors duration-300 hover:text-white"
          aria-label={prevLabel}
          onClick={onPrev}
        >
          <ChevronLeft className="size-[18px]" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-white/85 transition-colors duration-300 hover:text-white"
          aria-label={nextLabel}
          onClick={onNext}
        >
          <ChevronRight className="size-[18px]" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
