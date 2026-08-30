import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../FadeIn";
import type { MedicineCategory } from "@/lib/types";
import { cn, padIndex } from "@/lib/utils";

type MedicineCategoryCardProps = {
  category: MedicineCategory;
  index: number;
  countLabel: string;
  featured?: boolean;
  className?: string;
};

export function MedicineCategoryCard({
  category,
  index,
  countLabel,
  featured = false,
  className,
}: MedicineCategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group relative flex min-h-[300px] flex-col justify-end overflow-hidden border border-line bg-night text-white transition-colors duration-300 hover:border-primary",
        featured && "min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]",
        className,
      )}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        priority={featured}
        sizes={
          featured
            ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
            : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/15 transition-colors duration-300 group-hover:from-night/95"
        aria-hidden="true"
      />
      <div className="relative flex flex-1 flex-col justify-end p-5 sm:p-6 lg:p-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
          {padIndex(index)}
        </p>
        <h2 className="mt-2 max-w-md text-[22px] tracking-[-0.03em] text-white uppercase sm:text-[26px] lg:text-[28px]">
          {category.name}
        </h2>
        <p className="mt-2 max-w-md text-[13px] leading-[1.55] text-white/70 sm:text-[14px]">
          {category.description}
        </p>
        <span className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-[12px] font-medium uppercase tracking-[0.14em] text-white">
          {countLabel}
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

type MedicineCategoryGridProps = {
  categories: MedicineCategory[];
  getCount: (slug: string) => number;
  formatCount: (count: number) => string;
};

export function MedicineCategoryGrid({
  categories,
  getCount,
  formatCount,
}: MedicineCategoryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {categories.map((category, index) => (
        <FadeIn
          key={category.slug}
          delay={Math.min(index, 4) * 0.04}
          className={cn(index === 0 && "lg:col-span-2")}
        >
          <MedicineCategoryCard
            category={category}
            index={index}
            countLabel={formatCount(getCount(category.slug))}
            featured={index === 0}
            className="h-full"
          />
        </FadeIn>
      ))}
    </div>
  );
}
