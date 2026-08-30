import { AboutPreview } from "@/components/home/AboutPreview";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FairsGallery } from "@/components/home/FairsGallery";
import { MedicinesSection } from "@/components/home/MedicinesSection";
import { HeroSlider } from "@/components/HeroSlider";
import { getLocale } from "@/lib/i18n/locale";
import { createT } from "@/lib/i18n/t";

export async function generateMetadata() {
  const t = createT(await getLocale());
  return {
    description: t("meta.description"),
    alternates: { canonical: "/" },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoriesSection />
      <MedicinesSection />
      <FairsGallery />
      <AboutPreview />
    </>
  );
}
