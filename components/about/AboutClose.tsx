import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutClose() {
  const t = createT(await getLocale());
  const links = [
    { href: "/urunler", label: t("nav.products") },
    { href: "/ilaclar-asilar", label: t("nav.medicines") },
    { href: "/iletisim", label: t("nav.contact") },
  ];

  return (
    <section className="border-t border-line bg-white py-10 sm:py-12">
      <Container>
        <FadeIn>
          <nav
            aria-label={t("nav.about")}
            className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-8"
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
