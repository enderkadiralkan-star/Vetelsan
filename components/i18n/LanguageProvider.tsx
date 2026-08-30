"use client";

import { createContext, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { createT, getDictionary, type TranslateFn } from "@/lib/i18n/t";

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  t: TranslateFn;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const value = useMemo<I18nContextValue>(() => {
    const dict = getDictionary(locale);
    return {
      locale,
      dict,
      t: createT(locale),
      setLocale(next) {
        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
      },
    };
  }, [locale, router]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
