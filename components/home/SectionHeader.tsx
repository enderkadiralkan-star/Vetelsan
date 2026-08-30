import { padIndex } from "@/lib/utils";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: number;
  kicker: string;
  title: string;
  description?: string;
  aside?: React.ReactNode;
  className?: string;
};

export function SectionHeader({
  index,
  kicker,
  title,
  description,
  aside,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        className,
      )}
    >
      <div className="max-w-[550px]">
        <p className="type-kicker">
          {padIndex(index)} — {kicker}
        </p>
        <h2 className="type-h2 mt-4 text-ink">{title}</h2>
        {description ? (
          <p className="type-body mt-5 max-w-[550px]">{description}</p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0 lg:text-right">{aside}</div> : null}
    </div>
  );
}
