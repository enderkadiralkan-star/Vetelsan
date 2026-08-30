import { ProductCard } from "../ProductCard";
import type { CatalogItem } from "@/lib/types";

type MedicineProductGridProps = {
  products: Array<CatalogItem & { href: string }>;
  emptyLabel: string;
  ctaLabel: string;
};

export function MedicineProductGrid({
  products,
  emptyLabel,
  ctaLabel,
}: MedicineProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="border border-dashed border-line px-6 py-16 text-center text-muted">
        {emptyLabel}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          href={product.href}
          layout="listing"
          showCategory={false}
          index={index}
          studio
          ctaLabel={ctaLabel}
        />
      ))}
    </div>
  );
}
