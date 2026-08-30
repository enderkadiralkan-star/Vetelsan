"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ChipNavProps = {
  items: { href: string; label: string }[];
  tone?: "white" | "surface";
};

export function ChipNav({ items, tone = "white" }: ChipNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative -mx-5 mb-8 sm:mx-0 sm:mb-10">
      <div className="no-scrollbar overflow-x-auto overscroll-x-contain px-5 sm:overflow-visible sm:px-0">
        <div className="flex w-max gap-2 sm:w-full sm:flex-wrap">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors",
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-charcoal/10 bg-white text-dark hover:border-primary/40 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent sm:hidden",
          tone === "surface" ? "from-surface" : "from-white",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
