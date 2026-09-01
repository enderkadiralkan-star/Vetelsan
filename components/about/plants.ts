export const aboutPlants = [
  {
    index: 0,
    titleKey: "aboutPage.facility1Title",
    textKey: "aboutPage.facility1Text",
    imageAltKey: "aboutPage.facility1ImageAlt",
    image: "/images/about/kafes-aparat-uretim-tesisi.jpg",
    href: "/urunler/yakalama-kafesleri",
  },
  {
    index: 1,
    titleKey: "aboutPage.facility2Title",
    textKey: "aboutPage.facility2Text",
    imageAltKey: "aboutPage.facility2ImageAlt",
    image: "/images/about/enjektor-uretim-tesisi.jpg",
    href: "/urunler/enjektorler",
  },
  {
    index: 2,
    titleKey: "aboutPage.facility3Title",
    textKey: "aboutPage.facility3Text",
    imageAltKey: "aboutPage.facility3ImageAlt",
    image: "/images/about/tabanca-tufek-uretim-tesisi.jpg",
    href: "/urunler/aticilar",
  },
] as const;

export type AboutPlant = (typeof aboutPlants)[number];

export function getAboutPlantImageAlt(
  plant: AboutPlant,
  t: (key: string) => string,
): string {
  return t(plant.imageAltKey);
}
