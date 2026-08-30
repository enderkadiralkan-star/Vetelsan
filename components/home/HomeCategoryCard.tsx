import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/lib/types";
import { cn, padIndex, splitCategoryName } from "@/lib/utils";

type HomeCategoryCardProps = {
  category: ProductCategory;
  index: number;
  countLabel: string;
  exploreLabel: string;
  featured?: boolean;
};

export function HomeCategoryCard({
  category,
  index,
  countLabel,
  exploreLabel,
  featured = false,
}: HomeCategoryCardProps) {
  const { title, aside } = splitCategoryName(category.name);

  return (
    <Link
      href={category.href}
      className={cn(
        "group relative flex h-[260px] flex-col overflow-hidden rounded-[6px] border border-transparent bg-night text-white outline-none transition-[border-color] duration-500 ease-out",
        "hover:border-white/35 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light",
        featured
          ? "md:h-[360px] min-[1200px]:h-[400px]"
          : "min-[1200px]:h-[280px]",
      )}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        loading="lazy"
        sizes={
          featured
            ? "(max-width: 767px) 100vw, (max-width: 1199px) 100vw, 50vw"
            : "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/85 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col p-4 sm:p-5 min-[1200px]:p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="type-kicker">{padIndex(index)}</p>
          <p className="type-small text-white/80">{countLabel}</p>
        </div>
        <div className="mt-auto">
          <h3
            className={cn(
              "max-w-[18ch] uppercase text-white",
              featured ? "type-h3-lg" : "type-h3",
            )}
          >
            {title}
            {aside ? <span className="text-white/70"> / {aside}</span> : null}
          </h3>
          <p className="mt-2 hidden max-w-[400px] text-[15px] leading-[1.65] text-white/75 md:line-clamp-2 md:block sm:text-base">
            {category.description}
          </p>
          <span className="mt-4 inline-flex min-h-12 items-center gap-2 text-[15px] font-medium text-white">
            {exploreLabel}
            <ArrowRight className="size-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none" />
          </span>
        </div>
      </div>
    </Link>
  );
}
