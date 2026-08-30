import { cn } from "@/lib/utils";

type HeroProgressProps = {
  index: number;
  total: number;
  durationMs: number;
  paused?: boolean;
  reduceMotion?: boolean;
};

export function HeroProgress({
  index,
  total,
  durationMs,
  paused = false,
  reduceMotion = false,
}: HeroProgressProps) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-white/15"
      aria-hidden="true"
    >
      {reduceMotion ? (
        <div
          className="h-full bg-[#E30613]"
          style={{ width: `${((index + 1) / Math.max(total, 1)) * 100}%` }}
        />
      ) : (
        <div
          key={index}
          className={cn("hero-progress-fill h-full bg-[#E30613]", paused && "is-paused")}
          style={{ animationDuration: `${durationMs}ms` }}
        />
      )}
    </div>
  );
}
