import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { TextLink } from "@/components/home/TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function ContactCta() {
  const t = createT(await getLocale());

  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <Container>
        <FadeIn className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="type-h3 max-w-[28ch] text-ink">{t("contactPage.ctaTitle")}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
            <TextLink href="/urunler">{t("contactPage.ctaCatalog")}</TextLink>
            <TextLink href="/ilaclar-asilar">{t("nav.medicines")}</TextLink>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
