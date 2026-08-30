import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGallery } from "../ProductGallery";
import { ProductSpecs } from "./ProductSpecs";
import type { Product, ProductCategory } from "@/lib/types";

type ProductHeroProps = {
  product: Product;
  category: ProductCategory;
  specsTitle: string;
  quoteLabel: string;
  backLabel: string;
};

export function ProductHero({
  product,
  category,
  specsTitle,
  quoteLabel,
  backLabel,
}: ProductHeroProps) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
      <ProductGallery product={product} />
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
          {category.name}
        </p>
        <h1 className="mt-3 text-lead tracking-[-0.03em] text-ink sm:text-[40px] lg:text-[48px]">
          {product.name}
        </h1>
        <div className="mt-5 space-y-3 text-[15px] leading-[1.6] text-muted sm:mt-6 sm:text-[16px]">
          {product.description.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        {product.specs ? (
          <ProductSpecs title={specsTitle} specs={product.specs} />
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/iletisim" className="btn-primary">
            {quoteLabel}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={`/urunler/${category.slug}`}
            className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-ink transition-colors duration-300 hover:text-primary"
          >
            {backLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
