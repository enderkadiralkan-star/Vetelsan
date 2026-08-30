import type { MetadataRoute } from "next";
import { productCategories } from "@/lib/categories";
import { medicineCategories, medicines } from "@/lib/medicines";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

function url(path: string) {
  return new URL(path, site.url).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: url("/urunler"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    {
      url: url("/ilaclar-asilar"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: url("/hakkimizda"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/iletisim"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/kvkk"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes = productCategories.map((category) => ({
    url: url(category.href),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: url(`/urunler/${product.categorySlug}/${product.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const medicineCategoryRoutes = medicineCategories.map((category) => ({
    url: url(category.href),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const medicineRoutes = medicines.map((medicine) => ({
    url: url(`/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`),
    lastModified,
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
