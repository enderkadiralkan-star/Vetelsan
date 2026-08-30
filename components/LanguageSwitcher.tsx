"use client";

import { useI18n } from "@/components/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const options: { locale: Locale; short: string }[] = [
  { locale: "tr", short: "TR" },
  { locale: "en", short: "EN" },
];

type LanguageSwitcherProps = {
  className?: string;
  variant?: "compact" | "segmented";
  tone?: "default" | "onDark";
};

export function LanguageSwitcher({
  className,
  variant = "compact",
  tone = "default",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n();

  if (variant === "segmented") {
    return (
      <div
        className={cn(
          "inline-flex h-[36px] items-center rounded-full border border-line p-0.5",
          className,
        )}
        role="group"
        aria-label={t("language.label")}
      >
        {options.map((option) => {
          const selected = locale === option.locale;
          return (
            <button
              key={option.locale}
              type="button"
              onClick={() => setLocale(option.locale)}
              aria-pressed={selected}
              aria-label={t(`language.${option.locale}`)}
              className={cn(
                "h-8 min-w-11 rounded-full px-3.5 text-[12px] font-medium tracking-[0.08em] transition-colors duration-200",
                selected ? "bg-primary text-white" : "bg-transparent text-ink hover:text-primary",
              )}
            >
              {option.short}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn("inline-flex shrink-0 items-center gap-0.5 text-[13px] font-medium", className)}
      role="group"
      aria-label={t("language.label")}
    >
      {options.map((option, index) => (
        <span key={option.locale} className="inline-flex items-center gap-1">
          {index > 0 ? (
            <span
              className={tone === "onDark" ? "text-white/25" : "text-charcoal/20"}
              aria-hidden="true"
            >
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(option.locale)}
            aria-pressed={locale === option.locale}
            aria-label={t(`language.${option.locale}`)}
            className={cn(
              "rounded-md px-1.5 py-0.5 tracking-[0.08em] transition-colors duration-200",
              tone === "onDark"
                ? locale === option.locale
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                : locale === option.locale
                  ? "text-primary"
                  : "text-muted hover:text-charcoal",
            )}
          >
            {option.short}
          </button>
        </span>
      ))}
    </div>
  );
}
