import type { NextConfig } from "next";
import { productCategories } from "./lib/categories";
import { products } from "./lib/products";

const categorySlugs = new Set(productCategories.map((category) => category.slug));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  serverExternalPackages: ["nodemailer"],
  async redirects() {
    const productRedirects = products
      .filter((product) => !categorySlugs.has(product.slug))
      .map((product) => ({
        source: `/urunler/${product.slug}`,
        destination: `/urunler/${product.categorySlug}/${product.slug}`,
        permanent: true,
      }));

    return [
      ...productRedirects,
      {
        source: "/urunler/funyeli-enjektor-atici-tufek",
        destination: "/urunler/aticilar/enjektor-atici-tufek",
        permanent: true,
      },
      {
        source: "/urunler/cerrahi-medikal-set",
        destination: "/urunler/cerrahi-ve-medikal",
        permanent: true,
      },
      {
        source: "/urunler/cerrahi-medikal",
        destination: "/urunler/cerrahi-ve-medikal",
        permanent: true,
      },
      {
        source: "/urunler/cerrahi-medikal/:slug",
        destination: "/urunler/cerrahi-ve-medikal/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
