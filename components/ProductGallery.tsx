"use client";

import { useState } from "react";
import Image from "next/image";
import { getProductGallery } from "@/lib/products";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n/LanguageProvider";

type ProductGalleryProps = {
  product: Product;
};

export function ProductGallery({ product }: ProductGalleryProps) {
  const { t } = useI18n();
  const images = getProductGallery(product);
  const [index, setIndex] = useState(0);
  const contain = Boolean(product.imageContain);
  const active = images[index] ?? product.image;

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-[5px] bg-light",
          contain ? "aspect-[4/3] bg-white lg:aspect-square" : "aspect-[4/3]",
        )}
      >
        <Image
          src={active}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={
            contain ? "object-contain p-6 sm:p-16 lg:p-20" : "object-cover"
          }
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((src, imageIndex) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              aria-label={t("gallery.image", {
                name: product.name,
                n: imageIndex + 1,
              })}
              aria-current={imageIndex === index}
              className={cn(
                "relative size-[72px] overflow-hidden bg-light transition-colors duration-200",
                imageIndex === index
                  ? "ring-1 ring-primary"
                  : "ring-1 ring-line hover:ring-primary/40",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="72px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
