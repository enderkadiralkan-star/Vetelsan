import { Container } from "../Container";
import { FadeIn } from "../FadeIn";

type MedicineHeroProps = {
  kicker: string;
  title: string;
  description: string;
  stats: string;
};

export function MedicineHero({
  kicker,
  title,
  description,
  stats,
}: MedicineHeroProps) {
  return (
    <section className="bg-light">
      <Container className="flex min-h-[430px] flex-col justify-center py-14 sm:min-h-[460px] sm:py-16 lg:min-h-[500px] lg:py-20">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary sm:text-[12px]">
            {kicker}
          </p>
          <h1 className="mt-4 text-hero tracking-[-0.04em] text-ink sm:mt-5">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-muted sm:mt-6 sm:text-[16px]">
            {description}
          </p>
          <p className="mt-8 text-[12px] font-medium uppercase tracking-[0.16em] text-ink/50">
            {stats}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
