import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";
import { getLegalPage } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = createT(locale);
  return pageMetadata(
    t("meta.kvkkTitle"),
    t("meta.kvkkDescription"),
    "/kvkk",
    locale,
  );
}

export default async function KvkkPage() {
  const locale = await getLocale();
  const t = createT(locale);
  const page = getLegalPage(locale);

  return (
    <>
      <PageHero
        kicker={page.kicker}
        title={page.title}
        description={page.description}
      />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">{page.lastUpdated}</p>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            {page.intro}
          </p>
          <div className="mt-8 space-y-4">
            {page.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-charcoal/8 bg-white p-6 shadow-[0_8px_30px_rgba(23,25,28,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-xl">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            {t("footer.tagline")}
          </p>
          </div>
        </Container>
      </section>
    </>
  );
}
