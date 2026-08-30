import Image from "next/image";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

type CorporatePageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export function CorporatePageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-center",
}: CorporatePageHeroProps) {
  return (
    <section className="relative h-[380px] overflow-hidden bg-ink lg:h-[460px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={cn("object-cover", imagePosition)}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-ink/50 backdrop-blur-[10px] backdrop-saturate-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.35)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <Container className="relative flex h-full min-w-0 flex-col justify-end pb-8 lg:pb-14">
        <div className="max-w-[550px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-primary sm:text-[12px]">
            {kicker}
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,10vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white lg:mt-4 lg:text-[clamp(2.75rem,5vw,4.75rem)]">
            {title}
          </h1>
          <p className="mt-4 max-w-[550px] break-words text-[15px] leading-[1.6] text-white/80 sm:mt-5 sm:text-base lg:text-[17px] lg:leading-[1.6]">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
