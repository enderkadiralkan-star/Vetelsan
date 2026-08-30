import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutQuote() {
  const t = createT(await getLocale());

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/field.jpg"
          alt={t("aboutPage.imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div
          className="absolute inset-0 bg-ink/70"
          aria-hidden="true"
        />
      </div>
      <Container className="relative py-20 sm:py-28 lg:py-36">
        <FadeIn className="max-w-[820px]">
          <p className="type-kicker text-white/70">{t("aboutPage.body1Title")}</p>
          <h2 className="type-h1 mt-5 whitespace-pre-line text-white">
            {t("aboutPage.quote")}
          </h2>
          <p className="type-body mt-8 max-w-[540px] text-white/75">
            {t("aboutPage.body1")}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
