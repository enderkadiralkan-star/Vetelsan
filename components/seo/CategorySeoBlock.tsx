import Link from "next/link";
import { Container } from "@/components/Container";
import type { CategorySeoContent } from "@/lib/seo/content";

type CategorySeoBlockProps = {
  content: CategorySeoContent;
  relatedTitle?: string;
  faqTitle?: string;
};

export function CategorySeoBlock({
  content,
  relatedTitle = "İlgili sayfalar",
  faqTitle = "Sık sorulan sorular",
}: CategorySeoBlockProps) {
  return (
    <section
      aria-labelledby="category-seo-heading"
      className="border-t border-charcoal/8 bg-studio py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2
            id="category-seo-heading"
            className="type-h3 text-ink"
          >
            {content.heading}
          </h2>
          <p className="type-body mt-4 text-muted">{content.intro}</p>
          <div className="mt-6 space-y-4">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="type-body text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {content.faq && content.faq.length > 0 ? (
            <div className="mt-10">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                {faqTitle}
              </h3>
              <div className="mt-4 space-y-3">
                {content.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-charcoal/8 bg-white px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-[15px] font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        {item.question}
                        <span
                          aria-hidden="true"
                          className="mt-0.5 text-primary transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ) : null}

          {content.relatedLinks && content.relatedLinks.length > 0 ? (
            <nav
              aria-label={relatedTitle}
              className="mt-10 border-t border-charcoal/8 pt-8"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                {relatedTitle}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {content.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ink/75 transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
