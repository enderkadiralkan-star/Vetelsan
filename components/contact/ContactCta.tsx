import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function ContactCta() {
  const t = createT(await getLocale());
  const links = [
    { href: "/urunler", label: t("contactPage.ctaCatalog") },
    { href: "/ilaclar-asilar", label: t("nav.medicines") },
    { href: "/hakkimizda", label: t("nav.about") },
  ];

  return (
    <section className="border-t border-line bg-white py-10 sm:py-12">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <p className="type-h3 max-w-[28ch] text-ink">{t("contactPage.ctaTitle")}</p>
            <nav
              aria-label={t("nav.contact")}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8"
            >
              {links.map((item) => (
                <TextLink key={item.href} href={item.href}>
                  {item.label}
                </TextLink>
              ))}
            </nav>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
