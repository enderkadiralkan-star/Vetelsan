import { ProductCard } from "./ProductCard";
import { EmptyCategory } from "./products/EmptyCategory";
import type { CatalogItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type GridProduct = CatalogItem & { href?: string; featured?: boolean };

type ProductGridProps = {
  products: GridProduct[];
  className?: string;
  layout?: "default" | "listing";
  showCategory?: boolean;
};

export function ProductGrid({
  products,
  className,
  layout = "listing",
  showCategory = false,
}: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyCategory />;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8",
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          href={product.href}
          layout={layout}
          showCategory={showCategory}
          index={index}
        />
      ))}
    </div>
  );
}
