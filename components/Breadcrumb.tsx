"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  const { t } = useI18n();
  return (
    <nav
      aria-label={t("common.breadcrumb")}
      className={cn("mb-6 sm:mb-10", className)}
    >
      <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[12px] tracking-wide text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors duration-200 hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-ink" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span className="text-muted/35">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
