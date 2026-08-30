"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "./Container";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { navItems } from "@/lib/i18n/content";
import { whatsapp } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const menuOpen = open && openedOn === pathname;
  const overlay = pathname === "/" && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[border-color,background-color,color] duration-300",
        overlay
          ? "border-b-0 bg-transparent text-white"
          : scrolled
            ? "border-b border-line bg-white/94 text-ink backdrop-blur-md"
            : "border-b border-line bg-white text-ink",
        menuOpen && "z-[90] border-line bg-white text-ink",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between lg:h-[88px]">
        <Logo
          priority
          className={overlay ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]" : undefined}
        />
        <nav
          className={cn(
            "hidden items-center gap-8 lg:flex",
            overlay && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]",
          )}
          aria-label={t("nav.mainMenu")}
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex items-center py-1 text-[14px] font-medium tracking-wide transition-colors duration-200",
                  overlay
                    ? "text-white/80 hover:text-white"
                    : "text-ink hover:text-primary",
                  active && (overlay ? "text-white" : "text-primary"),
                )}
              >
                {t(item.key)}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div
          className={cn(
            "hidden items-center gap-5 lg:flex",
            overlay && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]",
          )}
        >
          <LanguageSwitcher tone={overlay ? "onDark" : "default"} />
          <a
            href={whatsapp.href}
            target="_blank"
            rel="noreferrer"
            aria-label={t("nav.whatsapp")}
            className={cn(
              "inline-flex size-11 items-center justify-center transition-colors duration-200",
              overlay ? "text-white hover:text-white" : "text-ink hover:text-primary",
            )}
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
        <div
          className={cn(
            "flex shrink-0 items-center lg:hidden",
            overlay && "drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]",
          )}
        >
          <button
            type="button"
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center",
              overlay ? "text-white" : "text-ink",
            )}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              if (menuOpen) {
                setOpen(false);
              } else {
                setOpenedOn(pathname);
                setOpen(true);
              }
            }}
          >
            <span className="relative block h-[14px] w-[22px]" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-200",
                  menuOpen ? "top-[6px] rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] h-[1.5px] bg-current transition-all duration-200",
                  menuOpen ? "w-0 opacity-0" : "w-full opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] w-full origin-center bg-current transition-transform duration-200",
                  menuOpen ? "top-[6px] -rotate-45" : "bottom-0 top-auto",
                )}
              />
            </span>
          </button>
        </div>
      </Container>
      <MobileMenu open={menuOpen} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
