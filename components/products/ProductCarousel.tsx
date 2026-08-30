"use client";

import { Carousel } from "../Carousel";
import { ProductCard } from "../ProductCard";
import { CarouselControls } from "./CarouselControls";
import { useI18n } from "@/components/i18n/LanguageProvider";
import type { CatalogItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProductCarouselProps = {
  products: CatalogItem[];
  ariaLabel: string;
};

export function ProductCarousel({ products, ariaLabel }: ProductCarouselProps) {
  const { t } = useI18n();
  const multiple = products.length > 1;

  return (
    <Carousel
      variant="editorial"
      controls="none"
      showProgress={multiple}
      edgeFade={false}
      tone="white"
      ariaLabel={ariaLabel}
      toolbar={({ canPrev, canNext, scrollByCard, index, total }) =>
        total > 1 ? (
          <div className="mb-4 hidden justify-end sm:mb-5 sm:flex">
            <CarouselControls
              index={index}
              total={total}
              canPrev={canPrev}
              canNext={canNext}
              onPrev={() => scrollByCard(-1)}
              onNext={() => scrollByCard(1)}
              previousLabel={t("common.previous")}
              nextLabel={t("common.next")}
            />
          </div>
        ) : null
      }
    >
      {products.map((product, index) => (
        <div
          key={product.slug}
          data-carousel-item
          className={cn(
            "min-w-0 shrink-0 snap-start",
            multiple
              ? "w-[88%] sm:w-[calc((100%-1rem)/2.05)] lg:w-[calc((100%-1rem)/2.12)]"
              : "w-full",
          )}
        >
          <ProductCard
            product={product}
            index={index}
            showCategory={false}
            layout="listing"
          />
        </div>
      ))}
    </Carousel>
  );
}
