import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  kicker?: string;
};

export function TextLink({ href, children, className, kicker }: TextLinkProps) {
  if (kicker) {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex flex-col items-start lg:items-end",
          className,
        )}
      >
        <span className="type-small text-ink">{kicker}</span>
        <span className="cta-text">
          {children}
          <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none" />
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className={cn("group cta-text", className)}>
      {children}
      <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none" />
    </Link>
  );
}
