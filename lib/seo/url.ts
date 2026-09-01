const DEFAULT_SITE_URL = "https://www.vetelsan.com.tr";

/** Production canonical base URL — set via NEXT_PUBLIC_SITE_URL in deployment. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, getSiteUrl()).toString();
}

export function absoluteImageUrl(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return absoluteUrl(src);
}
