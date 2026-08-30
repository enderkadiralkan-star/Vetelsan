"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bone,
  Box,
  Bug,
  Crosshair,
  Droplets,
  FlaskConical,
  Hand,
  Leaf,
  Package,
  Pill,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Tags,
  type LucideIcon,
} from "lucide-react";
import type { VisualCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n/LanguageProvider";

const icons: Record<string, LucideIcon> = {
  crosshair: Crosshair,
  stethoscope: Stethoscope,
  package: Package,
  syringe: Syringe,
  tags: Tags,
  bone: Bone,
  hand: Hand,
  box: Box,
  droplets: Droplets,
  pill: Pill,
  flask: FlaskConical,
  bug: Bug,
  shield: ShieldPlus,
  leaf: Leaf,
};

type CategoryCardProps = {
  category: VisualCategory;
  className?: string;
  compact?: boolean;
  productCount?: number;
  onSelect?: () => void;
  selected?: boolean;
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Package;
  return <Icon className={className} aria-hidden="true" />;
}

export function CategoryCard({
  category,
  className,
  compact = false,
  productCount,
  onSelect,
  selected = false,
}: CategoryCardProps) {
  const { t } = useI18n();
  const featured = !compact && Boolean(category.featured);
  const cardClassName = cn(
    "group relative isolate flex overflow-hidden bg-charcoal",
    compact
      ? "h-[210px] rounded-2xl"
      : "h-full min-h-[240px] rounded-2xl sm:min-h-[260px]",
    featured && "sm:min-h-[280px]",
    selected && "ring-2 ring-primary ring-offset-2 ring-offset-surface",
    className,
  );

  const content = (
    <>
      <Image
        src={category.image}
        alt={category.imageAlt}
        fill
        sizes={
          compact
            ? "(max-width: 768px) 70vw, 240px"
            : featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        }
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10 transition-opacity duration-500 group-hover:via-charcoal/65"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <span
        className={cn(
          "absolute flex items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-md",
          compact ? "left-3.5 top-3.5 size-9" : "left-5 top-5 size-11",
        )}
      >
        <CategoryIcon
          name={category.icon}
          className={compact ? "size-4" : "size-5"}
        />
      </span>
      {typeof productCount === "number" ? (
        <span className="absolute right-3.5 top-3.5 rounded-full border border-white/15 bg-charcoal/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
          {t("common.productCount", { count: productCount })}
        </span>
      ) : null}
      <div
        className={cn(
          "relative mt-auto flex w-full flex-col justify-end",
          compact ? "p-4" : "p-6 sm:p-7",
        )}
      >
        <h3
          className={cn(
            "text-white",
            compact
              ? "text-base leading-snug"
              : featured
                ? "text-xl sm:text-[22px]"
                : "text-lg",
          )}
        >
          {category.name}
        </h3>
        <p
          className={cn(
            "leading-relaxed text-white/75",
            compact
              ? "mt-1 line-clamp-2 text-xs"
              : "mt-2 line-clamp-2 max-w-md text-sm",
          )}
        >
          {category.description}
        </p>
        {onSelect ? (
          <Link
            href={category.href}
            className={cn(
              "relative z-20 inline-flex w-fit items-center font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-primary",
              compact
                ? "mt-3 gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs"
                : "mt-5 gap-2 rounded-full bg-white/10 px-4 py-2 text-sm",
            )}
          >
            {t("common.explore")}
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span
            className={cn(
              "inline-flex w-fit items-center font-medium text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-primary",
              compact
                ? "mt-3 gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs"
                : "mt-5 gap-2 rounded-full bg-white/10 px-4 py-2 text-sm",
            )}
          >
            {t("common.explore")}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        )}
      </div>
    </>
  );

  if (onSelect) {
    return (
      <div className={cardClassName}>
        <button
          type="button"
          onClick={onSelect}
          className="absolute inset-0 z-10"
          aria-pressed={selected}
          aria-label={t("common.selectCategory", { name: category.name })}
        />
        {content}
      </div>
    );
  }

  return (
    <Link href={category.href} className={cardClassName}>
      {content}
    </Link>
  );
}
