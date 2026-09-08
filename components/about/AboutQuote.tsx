import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function AboutQuote() {
  const t = createT(await getLocale());

  return (
    <section className="relative isolate h-[300px] overflow-hidden bg-ink sm:h-[340px] lg:h-[420px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/field.jpg"
          alt={t("aboutPage.imageAlt")}
          fill
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-ink/72" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.55)_0%,transparent_55%)]"
          aria-hidden="true"
        />
      </div>
      <Container className="relative flex h-full min-w-0 flex-col justify-end pb-8 lg:pb-12">
        <FadeIn className="max-w-[760px]">
          <p className="type-kicker text-white/65">{t("aboutPage.body1Title")}</p>
          <h2 className="mt-4 whitespace-pre-line font-display text-[clamp(1.85rem,6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.04em] text-white">
            {t("aboutPage.quote")}
          </h2>
          <p className="type-body mt-5 max-w-[480px] text-[15px] text-white/72 sm:mt-6 sm:text-base">
            {t("aboutPage.body1")}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
