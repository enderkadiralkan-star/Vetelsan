import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  className?: string;
  label?: string;
};

export function ProgressBar({ value, className, label }: ProgressBarProps) {
  const width = `${Math.min(Math.max(value, 0.08), 1) * 100}%`;

  return (
    <div
      className={cn("h-0.5 w-full bg-line", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(Math.min(Math.max(value, 0), 1) * 100)}
      aria-label={label}
    >
      <div
        className="h-full bg-primary transition-[width] duration-300 ease-out"
        style={{ width }}
      />
    </div>
  );
}
