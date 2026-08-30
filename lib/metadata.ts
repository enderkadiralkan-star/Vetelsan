import type { Metadata } from "next";
import type { Locale } from "./i18n/config";
import { createT } from "./i18n/t";
import { site } from "./site";

export function defaultMetadata(locale: Locale = "tr"): Metadata {
  const t = createT(locale);
  const keywords = t("meta.keywords")
    .split(",")
    .map((item) => item.trim());
  const ogLocale = locale === "en" ? "en_US" : "tr_TR";

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("meta.titleDefault"),
      template: t("meta.titleTemplate"),
    },
    description: t("meta.description"),
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      siteName: site.name,
      title: t("meta.titleDefault"),
      description: t("meta.description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.titleDefault"),
      description: t("meta.description"),
    },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path = "/",
  locale: Locale = "tr",
): Metadata {
  const t = createT(locale);
  const fullTitle = `${title} | Vetelsan`;
  const keywords = t("meta.keywords")
    .split(",")
    .map((item) => item.trim());
  const ogLocale = locale === "en" ? "en_US" : "tr_TR";

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
