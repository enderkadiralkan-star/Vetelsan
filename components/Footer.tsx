"use client";

import Link from "next/link";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useI18n } from "@/components/i18n/LanguageProvider";
import {
  localizeCategories,
  localizeMedicineCategories,
  navItems,
} from "@/lib/i18n/content";
import { contact, site, socialLinks, whatsapp } from "@/lib/site";
import { splitCategoryName } from "@/lib/utils";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H4V20h2.5V9ZM5.25 4A1.75 1.75 0 1 0 5.25 7.5 1.75 1.75 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.58-.56-2.66-1.97-2.66-1.07 0-1.71.73-1.99 1.43-.1.25-.13.6-.13.95V20H11s.03-9.3 0-10.27h2.5v1.45c.33-.51 1.17-1.24 2.86-1.24 2.09 0 3.64 1.37 3.64 4.3V20Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M22 12.2s0-3.2-.4-4.6c-.22-.82-.86-1.46-1.68-1.68C18.5 5.5 12 5.5 12 5.5s-6.5 0-7.92.42c-.82.22-1.46.86-1.68 1.68C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.22.82.86 1.46 1.68 1.68C5.5 18.9 12 18.9 12 18.9s6.5 0 7.92-.42c.82-.22 1.46-.86 1.68-1.68.4-1.4.4-4.6.4-4.6ZM10 15.2v-6l5.2 3-5.2 3Z" />
    </svg>
  );
}

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  YouTube: YouTubeIcon,
} as const;

const quickLinks = navItems.filter((item) => item.href !== "/");

export function Footer() {
  const { locale, t } = useI18n();
  const year = new Date().getFullYear();
  const localizedProducts = localizeCategories(locale);
  const localizedMedicines = localizeMedicineCategories(locale);

  return (
    <footer className="bg-night text-white">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-10">
          <div className="sm:col-span-2 xl:col-span-1">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              {t("footer.blurb", { legalName: site.legalName, year: site.foundedYear })}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {t("footer.pages")}
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/65 transition-colors duration-200 hover:text-white"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {t("footer.products")}
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/urunler"
                  className="inline-flex min-h-10 items-center text-sm text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {t("nav.products")}
                </Link>
              </li>
              {localizedProducts.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={category.href}
                    className="inline-flex min-h-10 items-center text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {splitCategoryName(category.name).title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {t("footer.medicines")}
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/ilaclar-asilar"
                  className="inline-flex min-h-10 items-center text-sm text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {t("nav.medicines")}
                </Link>
              </li>
              {localizedMedicines.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={category.href}
                    className="inline-flex min-h-10 items-center text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 xl:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {t("footer.contact")}
            </p>
            <ul className="mt-5 space-y-1 text-sm text-white/65">
              {contact.phones.slice(0, 2).map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="inline-flex min-h-11 items-center hover:text-white">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 hover:text-white"
                >
                  <WhatsAppIcon className="size-4" />
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li className="max-w-xs py-2 text-white/50">{contact.address}</li>
            </ul>
            {socialLinks.length > 0 ? (
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = socialIcons[item.label];
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex size-11 items-center justify-center border border-white/15 text-white/70 transition-colors duration-200 hover:border-primary hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            ) : null}
            <LanguageSwitcher className="mt-6 text-white/80 [&_button]:min-h-11 [&_button]:text-white/45 [&_button[aria-pressed=true]]:text-white [&_span]:text-white/20" />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright", { year, name: site.name })}</p>
          <Link href="/kvkk" className="inline-flex min-h-11 items-center hover:text-white/70">
            {t("footer.kvkk")}
          </Link>
        </Container>
      </div>
    </footer>
  );
}
