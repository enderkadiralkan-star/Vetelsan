import { cn } from "@/lib/utils";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-[550px]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? <p className="type-kicker">{kicker}</p> : null}
      <h2 className={cn("type-h2 text-ink", kicker && "mt-4")}>{title}</h2>
      {description ? <p className="type-body mt-5">{description}</p> : null}
    </div>
  );
}
