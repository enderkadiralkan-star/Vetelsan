import type { MetadataRoute } from "next";
import { productCategories } from "@/lib/categories";
import { medicineCategories, medicines } from "@/lib/medicines";
import { products } from "@/lib/products";
import { absoluteUrl } from "@/lib/seo/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/urunler"), changeFrequency: "weekly", priority: 0.9 },
    {
      url: absoluteUrl("/ilaclar-asilar"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/hakkimizda"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/iletisim"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const categoryRoutes = productCategories.map((category) => ({
    url: absoluteUrl(category.href),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: absoluteUrl(`/urunler/${product.categorySlug}/${product.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const medicineCategoryRoutes = medicineCategories.map((category) => ({
    url: absoluteUrl(category.href),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const medicineRoutes = medicines.map((medicine) => ({
    url: absoluteUrl(
      `/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`,
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...medicineCategoryRoutes,
    ...medicineRoutes,
  ];
}
