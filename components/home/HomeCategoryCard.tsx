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
  priority?: boolean;
};

export function HomeCategoryCard({
  category,
  index,
  countLabel,
  exploreLabel,
  priority = false,
}: HomeCategoryCardProps) {
  const { title, aside } = splitCategoryName(category.name);

  return (
    <Link
      href={category.href}
      className={cn(
        "group relative flex aspect-[4/3] flex-col overflow-hidden rounded-[6px] border border-line/60 bg-night text-white outline-none",
        "transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/30 hover:shadow-[0_18px_40px_-24px_rgba(17,17,17,0.55)]",
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light",
      )}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        priority={priority}
        quality={93}
        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
        className={cn(
          category.imageContain
            ? "object-contain bg-studio p-4 sm:p-5"
            : "object-cover object-center",
        )}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.82)_0%,rgba(17,17,17,0.28)_48%,rgba(17,17,17,0.08)_100%)]"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary sm:text-[11px]">
            {padIndex(index)}
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/70 sm:text-[11px]">
            {countLabel}
          </p>
        </div>
        <div className="mt-auto">
          <h3 className="max-w-[16ch] text-[15px] font-medium uppercase leading-[1.2] tracking-[-0.02em] text-white sm:text-[16px] lg:text-[17px]">
            {title}
            {aside ? (
              <span className="mt-0.5 block text-[12px] font-normal normal-case tracking-normal text-white/70 sm:text-[13px]">
                {aside}
              </span>
            ) : null}
          </h3>
          <p className="mt-1.5 hidden text-[13px] leading-[1.5] text-white/72 line-clamp-2 sm:block">
            {category.description}
          </p>
          <span className="mt-2.5 inline-flex min-h-9 items-center gap-1.5 text-[13px] font-medium text-white sm:mt-3 sm:min-h-10 sm:text-[14px]">
            {exploreLabel}
            <ArrowRight className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </div>
      </div>
    </Link>
  );
}
