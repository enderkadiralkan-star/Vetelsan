import dynamic from "next/dynamic";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { MedicinesSection } from "@/components/home/MedicinesSection";
import { HeroSlider } from "@/components/HeroSlider";
import { getLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/metadata";
import { homeKeywords } from "@/lib/seo/keywords";

// Defer heavy below-fold components to reduce initial JS
const FairsGallery = dynamic(
  () => import("@/components/home/FairsGallery").then((m) => ({ default: m.FairsGallery })),
  { loading: () => <div className="h-[360px] bg-light" /> },
);

const HomeLocationSection = dynamic(() =>
  import("@/components/home/HomeLocationSection").then((m) => ({
    default: m.HomeLocationSection,
  })),
);

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
      {/* Preload first hero image for faster LCP */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="preload"
        as="image"
        href="/images/hero/veterinary.jpg"
        // @ts-expect-error — imageSizes / imageSrcSet are valid HTML but not yet typed in React
        imageSizes="100vw"
      />
      <HeroSlider />
      <CategoriesSection />
      <MedicinesSection />
      <FairsGallery />
      <AboutPreview />
      <HomeLocationSection />
    </>
  );
}
