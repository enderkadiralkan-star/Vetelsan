export type CatalogItem = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  image: string;
  imageContain?: boolean;
};

export type SocialLink = {
  label: "Instagram" | "LinkedIn" | "YouTube";
  href: string;
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  poster: string;
  mobilePoster?: string;
  videoSrc?: string;
  alt: string;
  highlight?: string;
  objectPosition?: string;
  mobileObjectPosition?: string;
};

export type VisualCategory = {
  slug: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  image: string;
  imageAlt: string;
  imageContain?: boolean;
  featured?: boolean;
};

export type ProductCategory = VisualCategory;

export type Product = CatalogItem & {
  description: string;
  gallery?: string[];
  featured?: boolean;
  specs?: { label: string; value: string }[];
};

export type MedicineCategory = VisualCategory;

export type Medicine = CatalogItem & {
  description: string;
  activeIngredient?: string;
  usage?: string;
};

export type PhoneEntry = {
  label: "switchboard" | "mobile" | "fax";
  display: string;
  href: string;
};

export type ContactInfo = {
  address: string;
  phones: PhoneEntry[];
  fax: PhoneEntry;
  email: string;
  hours: string[];
};
