"use client";

import Link from "next/link";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
};

export function Logo({ className, priority = false, onClick }: LogoProps) {
  const { t } = useI18n();
  return (
    <Link
      href="/"
      aria-label={t("nav.homeLogo")}
      onClick={onClick}
      className={cn("inline-flex min-w-0 items-center", className)}
    >
      {/* Native img keeps PNG alpha; next/image AVIF/WebP was flattening it to black. */}
      <img
        src="/logo/vetelsan.png"
        alt="Vetelsan"
        width={196}
        height={88}
        className="h-11 w-auto max-w-[176px] object-contain object-left sm:h-14 sm:max-w-[210px] lg:h-16 lg:max-w-none"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </Link>
  );
}
