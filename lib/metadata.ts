import type { Metadata } from "next";
import type { Locale } from "./i18n/config";
import { createT } from "./i18n/t";
import type { KeywordIntent } from "./seo/keywords";
import { absoluteImageUrl, getSiteUrl } from "./seo/url";
import { site } from "./site";

const NO_INDEX = {
  index: false,
  follow: false,
} as const;

const INDEX = {
  index: true,
  follow: true,
} as const;

type PageMetadataOptions = {
  ogImage?: string;
  ogImageAlt?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
  /** Use when title already includes brand suffix. */
  absoluteTitle?: boolean;
};

function buildKeywords(locale: Locale): string[] {
  const t = createT(locale);
  return t("meta.keywords")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function ogLocale(locale: Locale) {
  return locale === "en" ? "en_US" : "tr_TR";
}

function resolveTitle(title: string, absoluteTitle?: boolean) {
  if (absoluteTitle || title.includes("| Vetelsan")) {
    return title;
  }
  return `${title} | Vetelsan`;
}

function buildOpenGraphImage(
  title: string,
  ogImage?: string,
  ogImageAlt?: string,
) {
  if (!ogImage) return undefined;
  return [
    {
      url: absoluteImageUrl(ogImage),
      width: 1200,
      height: 630,
      alt: ogImageAlt ?? title,
    },
  ];
}

export function defaultMetadata(locale: Locale = "tr"): Metadata {
  const t = createT(locale);
  const title = t("meta.titleDefault");

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: title,
      template: t("meta.titleTemplate"),
    },
    description: t("meta.description"),
    keywords: buildKeywords(locale),
    robots: INDEX,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      siteName: site.name,
      title,
      description: t("meta.description"),
      url: "/",
      images: buildOpenGraphImage(title, "/images/hero/veterinary.jpg"),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t("meta.description"),
      images: [absoluteImageUrl("/images/hero/veterinary.jpg")],
    },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path = "/",
  locale: Locale = "tr",
  options: PageMetadataOptions = {},
): Metadata {
  const fullTitle = resolveTitle(title, options.absoluteTitle);
  const images = buildOpenGraphImage(
    fullTitle,
    options.ogImage,
    options.ogImageAlt,
  );

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: buildKeywords(locale),
    alternates: { canonical: path },
    robots: options.robots ?? INDEX,
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: ogLocale(locale),
      type: options.type ?? "website",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images: images.map((image) => image.url) } : {}),
    },
  };
}

export function intentMetadata(
  intent: KeywordIntent,
  path: string,
  locale: Locale = "tr",
  options: PageMetadataOptions = {},
): Metadata {
  return pageMetadata(
    intent.seoTitle,
    intent.seoDescription,
    path,
    locale,
    {
      ...options,
      absoluteTitle:
        options.absoluteTitle ?? intent.seoTitle.includes("| Vetelsan"),
    },
  );
}

export function noIndexMetadata(
  title: string,
  description: string,
  locale: Locale = "tr",
): Metadata {
  return pageMetadata(title, description, "/", locale, {
    robots: NO_INDEX,
  });
}

export function legalMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale = "tr",
): Metadata {
  return pageMetadata(title, description, path, locale, {
    robots: { index: false, follow: true },
  });
}

export function notFoundMetadata(locale: Locale = "tr"): Metadata {
  const t = createT(locale);
  return {
    title: {
      absolute: `404 | ${t("notFound.title")} | Vetelsan`,
    },
    description: t("notFound.description"),
    robots: NO_INDEX,
  };
}

export function productMetadata(
  name: string,
  description: string,
  path: string,
  image: string,
  locale: Locale = "tr",
): Metadata {
  return pageMetadata(name, description, path, locale, {
    ogImage: image,
    ogImageAlt: name,
  });
}

export function categoryMetadata(
  intent: KeywordIntent,
  path: string,
  image: string,
  imageAlt: string,
  locale: Locale = "tr",
): Metadata {
  return intentMetadata(intent, path, locale, {
    ogImage: image,
    ogImageAlt: imageAlt,
  });
}
