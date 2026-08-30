import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { MedicineAccordion } from "./MedicineAccordion";
import { SectionHeader } from "./SectionHeader";
import { TextLink } from "./TextLink";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function MedicinesSection() {
  const locale = await getLocale();
  const t = createT(locale);

  return (
    <section className="section-home bg-white">
      <Container>
        <FadeIn>
          <SectionHeader
            index={1}
            kicker={t("home.medicinesKicker")}
            title={t("home.medicinesTitle")}
            description={t("home.medicinesDescription")}
            aside={
              <TextLink href="/ilaclar-asilar">
                {t("home.viewAllMedicines")}
              </TextLink>
            }
          />
        </FadeIn>
        <FadeIn delay={0.08} className="section-stack">
          <MedicineAccordion />
        </FadeIn>
      </Container>
    </section>
  );
}
