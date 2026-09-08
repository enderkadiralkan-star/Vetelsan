import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function ContactCta() {
  const t = createT(await getLocale());
  const links = [
    { href: "/urunler", label: t("contactPage.ctaCatalog") },
    { href: "/ilaclar-asilar", label: t("contactPage.ctaMedicines") },
  ];

  return (
    <section className="border-t border-line bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <FadeIn>
          <p className="type-body max-w-[36ch] text-ink">{t("contactPage.ctaTitle")}</p>
          <nav
            aria-label={t("nav.contact")}
            className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-10"
          >
            {links.map((item) => (
              <TextLink key={item.href} href={item.href}>
                {item.label}
              </TextLink>
            ))}
          </nav>
        </FadeIn>
      </Container>
    </section>
  );
}
