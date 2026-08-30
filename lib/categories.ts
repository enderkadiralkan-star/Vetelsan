import type { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    slug: "aticilar",
    name: "Atıcılar (Silahlar)",
    description:
      "Kartuş ve üfleme basınçlı enjektör atıcı tabanca, tüfek, üfleme borusu ve havalı tüfek sistemleri. Tamamen Vetelsan üretimi saha çözümleri.",
    href: "/urunler/aticilar",
    icon: "crosshair",
    image: "/images/categories/aticilar.jpg",
    imageAlt: "Saha ve yaban hayatı yakalama operasyonu",
  },
  {
    slug: "cerrahi-ve-medikal",
    name: "Cerrahi ve Medikal",
    description:
      "Muayene ve cerrahi eldivenlerden gaz kompres, spanç ve sargıya; portegü, makas, pens ve operasyon masalarına kadar klinik ekipman.",
    href: "/urunler/cerrahi-ve-medikal",
    icon: "stethoscope",
    image: "/images/categories/cerrahi.jpg",
    imageAlt: "Steril cerrahi aletler ve medikal ekipman",
  },
  {
    slug: "diger-urunler",
    name: "Diğer Ürünler",
    description:
      "Köpek ağızlıkları, tedavi sonrası yakalıklar, bakım ve taşıma ürünleri.",
    href: "/urunler/diger-urunler",
    icon: "package",
    image: "/images/categories/diger.jpg",
    imageAlt: "Evcil hayvan bakım ve aksesuar ürünleri",
  },
  {
    slug: "enjektorler",
    name: "Enjektörler",
    description:
      "Fünyeli, üflemeli ve havalı tüfek enjektörleri. Kendi üretimimiz olan saha çözümleri.",
    href: "/urunler/enjektorler",
    icon: "syringe",
    image: "/images/categories/enjektorler.jpg",
    imageAlt: "Veteriner enjektör uygulaması",
  },
  {
    slug: "isaretleme-numaralandirma",
    name: "İşaretleme ve Numaralandırma",
    description:
      "Sokak ve besi hayvanlarının takibi için kulak küpesi, mikroçip ve işaretleme ekipmanları.",
    href: "/urunler/isaretleme-numaralandirma",
    icon: "tags",
    image: "/images/categories/isaretleme.jpg",
    imageAlt: "Kulak küpeli büyükbaş hayvan işaretleme",
  },
  {
    slug: "mamalar",
    name: "Mamalar",
    description:
      "Kedi ve köpekler için türüne uygun mama ve beslenme ürünleri.",
    href: "/urunler/mamalar",
    icon: "bone",
    image: "/images/categories/mamalar.jpg",
    imageAlt: "Kedi ve köpek mama ürünleri",
  },
  {
    slug: "yakalama-aparatlari",
    name: "Yakalama Aparatları",
    description:
      "Kedi ve köpeklerin güvenli yakalanması ve sevki için aparat çözümleri.",
    href: "/urunler/yakalama-aparatlari",
    icon: "hand",
    image: "/images/categories/aparatlari.jpg",
    imageAlt: "Güvenli hayvan yakalama ve sevk ekipmanı",
  },
  {
    slug: "yakalama-kafesleri",
    name: "Yakalama Kafesleri",
    description:
      "Taşınabilir kafesler ve stressiz yakalama sistemleri.",
    href: "/urunler/yakalama-kafesleri",
    icon: "box",
    image: "/images/categories/kafesleri.jpg",
    imageAlt: "Hayvan tutma ve yakalama kafesleri",
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
