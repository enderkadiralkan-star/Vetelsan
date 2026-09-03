import type { NextConfig } from "next";
import { productCategories } from "./lib/categories";
import { products } from "./lib/products";

const categorySlugs = new Set(productCategories.map((category) => category.slug));
const isDev = process.env.NODE_ENV === "development";

/** CSP allows Google Maps embeds used on contact / home location. */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com https://maps.gstatic.com https://maps.googleapis.com",
  "font-src 'self' data:",
  "frame-src https://maps.google.com https://www.google.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    qualities: [75, 80],
  },
  serverExternalPackages: ["nodemailer"],
  experimental: {
    serverActions: {
      bodySizeLimit: "64kb",
      allowedOrigins: [
        "vetelsan.com.tr",
        "www.vetelsan.com.tr",
        "vetelsan.vercel.app",
        "*.vercel.app",
        "localhost:3000",
      ],
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
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
