"use client";

import { ProductCard } from "../ProductCard";
import { ProductCarousel } from "./ProductCarousel";
import type { CatalogItem } from "@/lib/types";

type RelatedProductsProps = {
  title: string;
  products: CatalogItem[];
};

export function RelatedProducts({ title, products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="mt-12 border-t border-line pt-10 sm:mt-16 sm:pt-14 lg:mt-20 lg:pt-16">
      <h2 className="text-lead tracking-[-0.03em] text-ink">{title}</h2>
      <div className="mt-6 lg:hidden">
        <ProductCarousel products={products} ariaLabel={title} />
      </div>
      <div className="mt-10 hidden grid-cols-3 gap-8 lg:grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            index={index}
            showCategory={false}
            layout="listing"
          />
        ))}
      </div>
    </div>
  );
}
