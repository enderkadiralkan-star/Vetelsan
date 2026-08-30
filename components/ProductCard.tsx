"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { localizeCategoryName } from "@/lib/i18n/content";
import { getProductHref } from "@/lib/products";
import type { CatalogItem } from "@/lib/types";
import { cn, padIndex } from "@/lib/utils";

type ProductCardProps = {
  product: CatalogItem;
  href?: string;
  className?: string;
  showCategory?: boolean;
  layout?: "default" | "listing";
  categoryLabel?: string;
  index?: number;
  studio?: boolean;
  ctaLabel?: string;
};

export function ProductCard({
  product,
  href,
  className,
  showCategory = true,
  layout = "default",
  categoryLabel,
  index,
  studio = false,
  ctaLabel,
}: ProductCardProps) {
  const { locale, t } = useI18n();
  const destination = href ?? getProductHref(product);
  const categoryName =
    categoryLabel ?? localizeCategoryName(product.categorySlug, locale);
  const contain = studio || Boolean(product.imageContain);
  const catalog = layout === "listing" && !studio;
  const label = ctaLabel ?? (catalog ? t("productsPage.viewProduct") : t("common.explore"));

  if (catalog) {
    return (
      <article className={cn("h-full min-w-0", className)}>
        <Link
          href={destination}
          className="group relative flex h-full flex-col border border-line bg-white outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span
            className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden bg-light sm:aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 420px"
              className={cn(
                "transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                contain ? "object-contain p-8 sm:p-10 lg:p-12" : "object-cover",
              )}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
            {typeof index === "number" ? (
              <p className="type-kicker">{padIndex(index)}</p>
            ) : null}
            <h3
              className={cn(
                "font-display text-[20px] font-medium leading-snug tracking-[-0.03em] text-ink sm:text-[22px]",
                typeof index === "number" && "mt-2",
              )}
            >
              {product.name}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.5] text-muted sm:text-[15px]">
              {product.shortDescription}
            </p>
            <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-[14px] font-medium text-ink">
              {label}
              <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 motion-reduce:transition-none" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("h-full min-w-0", className)}>
      <Link
        href={destination}
        className={cn(
          "group flex h-full flex-col border border-line bg-white outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          studio ? "hover:border-primary" : "bg-light",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden",
            studio
              ? "h-[240px] bg-studio sm:h-[280px] lg:h-[320px]"
              : cn("aspect-[4/3]", contain ? "bg-white" : "bg-light"),
          )}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 420px"
            className={cn(
              "transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
              contain ? "object-contain p-8 sm:p-10 lg:p-12" : "object-cover",
            )}
          />
        </div>
        <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
          {showCategory ? (
            <p className="type-kicker">{categoryName}</p>
          ) : typeof index === "number" ? (
            <p className="type-kicker">{padIndex(index)}</p>
          ) : null}
          <h3
            className={cn(
              "font-medium leading-snug tracking-tight text-ink",
              (showCategory || typeof index === "number") && "mt-2",
              "text-[18px] sm:text-[20px]",
            )}
          >
            {product.name}
          </h3>
          <p className="mt-2 text-[13px] leading-[1.6] text-muted sm:text-[14px]">
            {product.shortDescription}
          </p>
          <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-[13px] font-medium text-ink">
            {label}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none" />
          </span>
        </div>
      </Link>
    </article>
  );
}
