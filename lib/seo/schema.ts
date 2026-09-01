import { productCategories } from "@/lib/categories";
import { medicineCategories, medicines } from "@/lib/medicines";
import { products } from "@/lib/products";
import { contact, mapLocation, site, socialLinks } from "@/lib/site";
import type { Medicine, Product } from "@/lib/types";
import { absoluteImageUrl, absoluteUrl, getSiteUrl } from "./url";

export type SchemaCrumb = {
  label: string;
  href?: string;
};

const VETELSAN_MANUFACTURED_CATEGORIES = new Set([
  "aticilar",
  "enjektorler",
  "yakalama-aparatlari",
  "yakalama-kafesleri",
]);

function parseAddress() {
  return {
    streetAddress: "Başharık Mahallesi Gönültaş Caddesi Irmak Sokak No: 9/A",
    addressLocality: "Battalgazi",
    addressRegion: "Malatya",
    postalCode: "44000",
    addressCountry: "TR",
  };
}

function openingHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ];
}

export function organizationSchema() {
  const sameAs = socialLinks.map((link) => link.href).filter(Boolean);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${getSiteUrl()}/#organization`,
    name: site.legalName,
    alternateName: site.name,
    url: getSiteUrl(),
    logo: absoluteImageUrl("/logo/vetelsan-logo.png"),
    description: site.description,
    foundingDate: String(site.foundedYear),
    email: contact.email,
    telephone: contact.phones[0]?.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      ...parseAddress(),
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  };

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: site.legalName,
    alternateName: site.name,
    url: getSiteUrl(),
    description: site.description,
    publisher: {
      "@id": `${getSiteUrl()}/#organization`,
    },
    inLanguage: ["tr-TR", "en"],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${getSiteUrl()}/iletisim#localbusiness`,
    name: site.legalName,
    url: getSiteUrl(),
    image: absoluteImageUrl("/logo/vetelsan-logo.png"),
    telephone: contact.phones[0]?.href.replace("tel:", ""),
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      ...parseAddress(),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: mapLocation.lat,
      longitude: mapLocation.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
  };
}

export function breadcrumbListSchema(items: SchemaCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = absoluteUrl(item.href);
      }
      return entry;
    }),
  };
}

export function productSchema(product: Product, categoryName: string) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription || product.description,
    image: absoluteImageUrl(product.image),
    url: absoluteUrl(`/urunler/${product.categorySlug}/${product.slug}`),
    category: categoryName,
  };

  if (VETELSAN_MANUFACTURED_CATEGORIES.has(product.categorySlug)) {
    schema.brand = {
      "@type": "Brand",
      name: site.name,
    };
    schema.manufacturer = {
      "@type": "Organization",
      name: site.legalName,
      url: getSiteUrl(),
    };
  }

  return schema;
}

export function medicineProductSchema(
  medicine: Medicine,
  categoryName: string,
) {
  const additionalProperty: Record<string, unknown>[] = [];

  if (medicine.activeIngredient) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "activeIngredient",
      value: medicine.activeIngredient,
    });
  }

  if (medicine.usage) {
    additionalProperty.push({
      "@type": "PropertyValue",
      name: "usage",
      value: medicine.usage,
    });
  }

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: medicine.name,
    description: medicine.shortDescription || medicine.description,
    image: absoluteImageUrl(medicine.image),
    url: absoluteUrl(
      `/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`,
    ),
    category: categoryName,
  };

  if (additionalProperty.length > 0) {
    schema.additionalProperty = additionalProperty;
  }

  return schema;
}

export function collectionPageSchema(options: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    mainEntity: itemListSchema(options.items),
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  };
}

export function faqPageSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productHubItemList() {
  return itemListSchema(
    productCategories.map((category) => ({
      name: category.name,
      url: category.href,
    })),
  );
}

export function medicineHubItemList() {
  return itemListSchema(
    medicineCategories.map((category) => ({
      name: category.name,
      url: category.href,
    })),
  );
}

export function categoryProductItemList(categorySlug: string) {
  return itemListSchema(
    products
      .filter((product) => product.categorySlug === categorySlug)
      .map((product) => ({
        name: product.name,
        url: `/urunler/${product.categorySlug}/${product.slug}`,
      })),
  );
}

export function categoryMedicineItemList(categorySlug: string) {
  return itemListSchema(
    medicines
      .filter((medicine) => medicine.categorySlug === categorySlug)
      .map((medicine) => ({
        name: medicine.name,
        url: `/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`,
      })),
  );
}
