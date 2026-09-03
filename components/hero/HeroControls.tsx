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
    <div className="flex shrink-0 items-center gap-4 sm:gap-5">
      <p className="font-display text-[11px] tabular-nums tracking-[0.2em] text-white/55 sm:text-[12px]">
        <span className="text-white">{padIndex(index)}</span>
        <span className="text-white/30"> / {padCount(total)}</span>
      </p>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-[2px] transition-colors duration-300 hover:border-white/45 hover:bg-white/10 hover:text-white sm:size-11"
          aria-label={prevLabel}
          onClick={onPrev}
        >
          <ChevronLeft className="size-[17px]" strokeWidth={1.4} />
        </button>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-white/20 bg-white/[0.04] text-white/80 backdrop-blur-[2px] transition-colors duration-300 hover:border-white/45 hover:bg-white/10 hover:text-white sm:size-11"
          aria-label={nextLabel}
          onClick={onNext}
        >
          <ChevronRight className="size-[17px]" strokeWidth={1.4} />
        </button>
      </div>
    </div>
  );
}
