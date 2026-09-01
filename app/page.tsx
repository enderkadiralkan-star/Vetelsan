import { AboutPreview } from "@/components/home/AboutPreview";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FairsGallery } from "@/components/home/FairsGallery";
import { HomeLocationSection } from "@/components/home/HomeLocationSection";
import { MedicinesSection } from "@/components/home/MedicinesSection";
import { HeroSlider } from "@/components/HeroSlider";
import { getLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/metadata";
import { homeKeywords } from "@/lib/seo/keywords";

export async function generateMetadata() {
  const locale = await getLocale();
  return pageMetadata(
    homeKeywords.seoTitle,
    homeKeywords.seoDescription,
    "/",
    locale,
    {
      absoluteTitle: true,
      ogImage: "/images/hero/veterinary.jpg",
      ogImageAlt: "Vetelsan veteriner sağlık ürünleri",
    },
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CategoriesSection />
      <MedicinesSection />
      <FairsGallery />
      <AboutPreview />
      <HomeLocationSection />
    </>
  );
}
