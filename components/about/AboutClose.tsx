import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { padIndex } from "@/lib/utils";

export async function AboutClose() {
  const t = createT(await getLocale());
  const links = [
    {
      href: "/urunler",
      kicker: t("nav.products"),
      label: t("aboutPage.closeProducts"),
    },
    {
      href: "/ilaclar-asilar",
      kicker: t("nav.medicines"),
      label: t("aboutPage.closeMedicines"),
    },
    {
      href: "/iletisim",
      kicker: t("nav.contact"),
      label: t("aboutPage.closeContact"),
    },
  ];

  return (
    <section className="border-t border-line bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <FadeIn>
          <nav aria-label={t("nav.about")}>
            <ul className="border-t border-line">
              {links.map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    className="group flex min-h-14 items-center justify-between gap-6 py-5 outline-none transition-colors focus-visible:bg-studio/50 sm:min-h-16 sm:py-6"
                  >
                    <span className="min-w-0">
                      <span className="type-kicker">
                        {padIndex(index)} — {item.kicker}
                      </span>
                      <span className="mt-2 block font-display text-[clamp(1.15rem,2.5vw,1.5rem)] font-medium tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-primary">
                        {item.label}
                      </span>
                    </span>
                    <ArrowRight
                      className="size-4 shrink-0 text-ink/30 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-primary motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FadeIn>
      </Container>
    </section>
  );
}
