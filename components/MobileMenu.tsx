"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useI18n } from "@/components/i18n/LanguageProvider";
import {
  localizeCategories,
  localizeMedicineCategories,
  navItems,
} from "@/lib/i18n/content";
import { whatsapp } from "@/lib/site";
import { cn, padIndex } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

type NavChild = {
  href: string;
  label: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isExact(pathname: string, href: string) {
  return pathname === href;
}

function subscribe() {
  return () => {};
}

function MenuChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn(
        "size-[18px] transition-transform duration-300 ease-out",
        open && "rotate-180 text-primary",
      )}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 6L8 10.5L12.5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const reduceMotion = useReducedMotion();
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const { locale, t } = useI18n();
  const [expanded, setExpanded] = useState<{
    path: string;
    href: string | null;
  } | null>(null);

  const productChildren = useMemo<NavChild[]>(
    () =>
      localizeCategories(locale).map((category) => ({
        href: category.href,
        label: category.name,
      })),
    [locale],
  );

  const medicineChildren = useMemo<NavChild[]>(
    () =>
      localizeMedicineCategories(locale).map((category) => ({
        href: category.href,
        label: category.name,
      })),
    [locale],
  );

  const items = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        children:
          item.href === "/urunler"
            ? productChildren
            : item.href === "/ilaclar-asilar"
              ? medicineChildren
              : undefined,
      })),
    [medicineChildren, productChildren],
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const routeExpanded =
    items.find((item) => item.children && isActive(pathname, item.href))?.href ??
    null;
  const currentExpanded =
    expanded && expanded.path === pathname ? expanded.href : routeExpanded;
  const openSectionFor = (href: string) => currentExpanded === href;

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.mobileMenu")}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
            aria-label={t("nav.closeMenu")}
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-x-0 bottom-0 top-[76px] flex w-full flex-col bg-white md:inset-x-auto md:right-0 md:w-[min(440px,100vw)] md:shadow-[-16px_0_40px_rgba(23,25,28,0.08)]"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-6 py-4 md:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {t("nav.menu")}
              </p>
              <LanguageSwitcher variant="segmented" />
            </div>

            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 md:px-8 md:py-8"
              aria-label={t("nav.mobileMenu")}
            >
              <ul className="flex flex-col">
                {items.map((item, index) => {
                  const active = isActive(pathname, item.href);
                  const openSection = openSectionFor(item.href);
                  const label = t(item.key);
                  const children = item.children;

                  return (
                    <li key={item.href} className="border-b border-line last:border-b-0">
                      <div className="flex min-h-14 items-center gap-2">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex min-h-14 min-w-0 flex-1 items-center gap-4 py-3"
                        >
                          <span
                            className={cn(
                              "w-6 shrink-0 text-[11px] font-medium uppercase tracking-[0.14em]",
                              active ? "text-primary" : "text-muted",
                            )}
                          >
                            {padIndex(index)}
                          </span>
                          <span
                            className={cn(
                              "flex min-w-0 items-center gap-2.5 font-display text-[20px] font-medium tracking-[-0.03em] sm:text-[22px]",
                              active
                                ? "text-primary"
                                : "text-ink group-hover:text-primary",
                            )}
                          >
                            <span className="truncate">{label}</span>
                            {active ? (
                              <span
                                className="size-1.5 shrink-0 rounded-full bg-primary"
                                aria-hidden="true"
                              />
                            ) : null}
                          </span>
                        </Link>
                        {children ? (
                          <button
                            type="button"
                            className="inline-flex size-11 shrink-0 items-center justify-center text-ink/40 transition-colors duration-200 hover:text-primary"
                            aria-expanded={openSection}
                            aria-controls={`mobile-submenu-${item.href.slice(1)}`}
                            aria-label={
                              openSection
                                ? t("nav.collapseSection", { name: label })
                                : t("nav.expandSection", { name: label })
                            }
                            onClick={() =>
                              setExpanded({
                                path: pathname,
                                href: openSection ? null : item.href,
                              })
                            }
                          >
                            <MenuChevron open={openSection} />
                          </button>
                        ) : null}
                      </div>

                      {children ? (
                        <div
                          id={`mobile-submenu-${item.href.slice(1)}`}
                          className={cn(
                            "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            openSection ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          )}
                        >
                          <div className="overflow-hidden">
                            <ul className="mb-4 ml-10 border-l border-line">
                              {children.map((child, childIndex) => {
                                const childActive = isExact(pathname, child.href);
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className={cn(
                                        "flex min-h-11 items-center gap-3 py-1 pl-4 text-[15px] font-normal transition-colors duration-200",
                                        childActive
                                          ? "text-primary"
                                          : "text-muted hover:text-primary",
                                      )}
                                    >
                                      <span
                                        className={cn(
                                          "w-5 shrink-0 text-[11px] font-medium tracking-[0.08em]",
                                          childActive ? "text-primary" : "text-muted/70",
                                        )}
                                      >
                                        {padIndex(childIndex)}
                                      </span>
                                      <span className="min-w-0 flex-1 leading-[1.4]">
                                        {child.label}
                                      </span>
                                      {childActive ? (
                                        <span
                                          className="size-1.5 shrink-0 rounded-full bg-primary"
                                          aria-hidden="true"
                                        />
                                      ) : null}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 border-t border-line px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 md:px-8">
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-12 items-center gap-3 text-ink transition-colors duration-200 hover:text-primary"
              >
                <WhatsAppIcon className="size-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-[13px] font-medium tracking-[-0.02em]">
                    {t("nav.whatsappWrite")}
                  </span>
                  <span className="mt-0.5 block text-[13px] text-muted group-hover:text-primary/70">
                    {whatsapp.display}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
