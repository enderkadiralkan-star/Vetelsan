import { productCategories } from "@/lib/categories";

const bySlug = (slug: string) => {
  const category = productCategories.find((item) => item.slug === slug);
  if (!category) {
    throw new Error(`Missing category image for ${slug}`);
  }
  return { image: category.image, imageAlt: category.imageAlt, href: category.href };
};

export const aboutPlants = [
  {
    index: 0,
    titleKey: "aboutPage.facility1Title",
    textKey: "aboutPage.facility1Text",
    ...bySlug("yakalama-kafesleri"),
  },
  {
    index: 1,
    titleKey: "aboutPage.facility2Title",
    textKey: "aboutPage.facility2Text",
    ...bySlug("enjektorler"),
  },
  {
    index: 2,
    titleKey: "aboutPage.facility3Title",
    textKey: "aboutPage.facility3Text",
    ...bySlug("aticilar"),
  },
] as const;
