import Image from "next/image";
import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import type { ProductCategory } from "@/lib/types";
import { padIndex, splitCategoryName } from "@/lib/utils";

type CategoryHeroProps = {
  index: number;
  category: ProductCategory;
};

export function CategoryHero({ index, category }: CategoryHeroProps) {
  const { title, aside } = splitCategoryName(category.name);

  return (
    <section className="bg-light">
      <Container className="grid items-start gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:py-16">
        <FadeIn className="order-2 min-w-0 lg:order-1 lg:col-span-7">
          <p className="type-kicker">
            {padIndex(index)} — {title}
          </p>
          <h1 className="type-h1 mt-4 break-words text-ink">
            {title}
            {aside ? (
              <span className="mt-1 block text-[20px] font-medium tracking-[-0.03em] text-muted sm:text-[24px]">
                {aside}
              </span>
            ) : null}
          </h1>
          <p className="type-body mt-5 max-w-[540px]">{category.description}</p>
        </FadeIn>
        <FadeIn delay={0.06} className="order-1 min-w-0 lg:order-2 lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-studio">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.18)_0%,transparent_45%)]"
              aria-hidden="true"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
