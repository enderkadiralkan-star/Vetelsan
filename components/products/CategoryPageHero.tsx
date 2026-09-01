import Image from "next/image";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import type { ProductCategory } from "@/lib/types";
import { cn, padIndex, splitCategoryName } from "@/lib/utils";

type CategoryPageHeroProps = {
  index: number;
  category: ProductCategory;
  kicker: string;
  countLabel?: string;
  uppercaseTitle?: boolean;
};

export function CategoryPageHero({
  index,
  category,
  kicker,
  countLabel,
  uppercaseTitle = false,
}: CategoryPageHeroProps) {
  const { title, aside } = splitCategoryName(category.name);

  return (
    <section className="bg-light">
      <Container className="grid items-center gap-8 py-10 sm:py-12 lg:min-h-[420px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14 lg:py-16">
        <FadeIn>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {kicker}
          </p>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
            {padIndex(index)}
          </p>
          <h1
            className={cn(
              "mt-3 text-section tracking-[-0.03em] text-ink",
              uppercaseTitle && "uppercase",
            )}
          >
            {title}
            {aside ? (
              <span className="mt-1 block text-[18px] font-medium text-muted sm:text-[22px]">
                ({aside})
              </span>
            ) : null}
          </h1>
          <p className="mt-4 max-w-[400px] text-[15px] leading-[1.6] text-muted sm:text-[16px]">
            {category.description}
          </p>
          {countLabel ? (
            <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.16em] text-ink">
              {countLabel}
            </p>
          ) : null}
        </FadeIn>
        <FadeIn delay={0.08} className="relative aspect-[16/10] overflow-hidden bg-studio sm:aspect-[5/3] lg:aspect-[4/3]">
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            priority
            quality={93}
            sizes="(max-width: 1024px) 100vw, 46vw"
            className={cn(
              category.imageContain
                ? "object-contain p-8 sm:p-10 lg:p-12"
                : "object-cover object-center",
            )}
          />
        </FadeIn>
      </Container>
    </section>
  );
}
