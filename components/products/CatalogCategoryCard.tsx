import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/lib/types";
import { cn, padIndex, splitCategoryName } from "@/lib/utils";

type CatalogCategoryCardProps = {
  category: ProductCategory;
  index: number;
  countLabel: string;
  exploreLabel: string;
  featured?: boolean;
  className?: string;
};

export function CatalogCategoryCard({
  category,
  index,
  countLabel,
  exploreLabel,
  featured = false,
  className,
}: CatalogCategoryCardProps) {
  const { title, aside } = splitCategoryName(category.name);

  return (
    <Link
      href={category.href}
      className={cn(
        "group relative isolate flex min-h-[260px] min-w-0 flex-col overflow-hidden bg-night text-white outline-none sm:min-h-[280px]",
        featured ? "lg:min-h-[400px]" : "lg:min-h-[300px]",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        sizes={
          featured
            ? "(max-width: 1023px) 100vw, 50vw"
            : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,25,27,0.55)_0%,rgba(23,25,27,0.12)_52%,rgba(23,25,27,0.04)_100%)]"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="type-kicker text-white/85">{padIndex(index)}</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/75">
            {countLabel}
          </p>
        </div>
        <div>
          <h2 className="max-w-[18ch] font-display text-[22px] font-medium tracking-[-0.03em] text-white sm:text-[24px] lg:text-[28px]">
            {title}
            {aside ? <span className="text-white/75"> / {aside}</span> : null}
          </h2>
          <p className="mt-3 max-w-[36ch] text-[14px] leading-[1.5] text-white/80 line-clamp-2">
            {category.description}
          </p>
          <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-white">
            {exploreLabel}
            <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none" />
          </span>
        </div>
      </div>
    </Link>
  );
}
