import { CategoryCard } from "./CategoryCard";
import { getProductCountByCategory } from "@/lib/products";
import type { VisualCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type CategoryGridProps = {
  categories: VisualCategory[];
  className?: string;
  showProductCount?: boolean;
  getCount?: (slug: string) => number;
};

export function CategoryGrid({
  categories,
  className,
  showProductCount = false,
  getCount = getProductCountByCategory,
}: CategoryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4",
        className,
      )}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          category={category}
          compact
          productCount={
            showProductCount ? getCount(category.slug) : undefined
          }
          className="w-full"
        />
      ))}
    </div>
  );
}
