import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex h-[240px] overflow-hidden bg-charcoal sm:h-[260px] lg:h-[280px]">
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-center"
        />
      ) : null}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          image
            ? "bg-gradient-to-r from-charcoal via-charcoal/82 to-charcoal/35"
            : "opacity-40",
        )}
        aria-hidden="true"
        style={
          image
            ? undefined
            : {
                background:
                  "radial-gradient(ellipse 70% 80% at 90% -10%, rgba(227,6,19,0.55), transparent 55%)",
              }
        }
      />
      {image ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25"
          aria-hidden="true"
        />
      ) : null}
      <Container className="relative flex h-full flex-col justify-end py-8 sm:py-9 lg:py-10">
        {kicker ? (
          <p className="section-kicker mb-2 text-white/75">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-[28px] leading-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.12]">
          {title}
        </h1>
        {description ? (
          <p className="mt-2.5 max-w-2xl line-clamp-2 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
