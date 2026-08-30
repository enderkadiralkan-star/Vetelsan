import { ProductCard } from "../ProductCard";
import type { CatalogItem } from "@/lib/types";

type RelatedMedicineProductsProps = {
  kicker: string;
  title: string;
  products: Array<CatalogItem & { href: string }>;
  ctaLabel: string;
};

export function RelatedMedicineProducts({
  kicker,
  title,
  products,
  ctaLabel,
}: RelatedMedicineProductsProps) {
  if (products.length === 0) return null;

  return (
    <div className="mt-14 border-t border-line pt-10 sm:mt-16 sm:pt-14 lg:mt-20 lg:pt-16">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
        {kicker}
      </p>
      <h2 className="mt-3 text-lead tracking-[-0.03em] text-ink">{title}</h2>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.slug}
            product={product}
            href={product.href}
            index={index}
            showCategory={false}
            layout="listing"
            studio
            ctaLabel={ctaLabel}
          />
        ))}
      </div>
    </div>
  );
}
