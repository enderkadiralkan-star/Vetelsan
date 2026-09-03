import type { ProductCategory } from "./types";

export const productCategories: ProductCategory[] = [
  {
    slug: "aticilar",
    name: "Atıcılar (Silahlar)",
    description:
      "Kartuş ve üfleme basınçlı enjektör atıcı tabanca, tüfek, üfleme borusu ve havalı tüfek sistemleri. Tamamen Vetelsan üretimi saha çözümleri.",
    href: "/urunler/aticilar",
    icon: "crosshair",
    image: "/images/categories/aticilar.webp",
    imageAlt: "Enjektör atıcı tüfek, tabanca ve saha enjeksiyon sistemleri",
  },
  {
    slug: "cerrahi-ve-medikal",
    name: "Cerrahi ve Medikal",
    description:
      "Muayene ve cerrahi eldivenlerden gaz kompres, spanç ve sargıya; portegü, makas, pens ve operasyon masalarına kadar klinik ekipman.",
    href: "/urunler/cerrahi-ve-medikal",
    icon: "stethoscope",
    image: "/images/categories/cerrahi.webp",
    imageAlt: "Cerrahi aletler, operasyon masası ve klinik sarf malzemeleri",
  },
  {
    slug: "diger-urunler",
    name: "Diğer Ürünler",
    description:
      "Köpek ağızlıkları, tedavi sonrası yakalıklar, bakım ve taşıma ürünleri.",
    href: "/urunler/diger-urunler",
    icon: "package",
    image: "/images/categories/diger.webp",
    imageAlt: "Köpek ağızlığı, tedavi yakalığı ve bakım ürünleri",
  },
  {
    slug: "enjektorler",
    name: "Enjektörler",
    description:
      "Fünyeli, üflemeli ve havalı tüfek enjektörleri. Kendi üretimimiz olan saha çözümleri.",
    href: "/urunler/enjektorler",
    icon: "syringe",
    image: "/images/categories/enjektorler.webp",
    imageAlt: "Fünyeli ve dart enjektörler — saha enjeksiyon çözümleri",
  },
  {
    slug: "isaretleme-numaralandirma",
    name: "İşaretleme ve Numaralandırma",
    description:
      "Sokak ve besi hayvanlarının takibi için kulak küpesi, mikroçip ve işaretleme ekipmanları.",
    href: "/urunler/isaretleme-numaralandirma",
    icon: "tags",
    image: "/images/categories/isaretleme.webp",
    imageAlt: "Kulak küpesi, RFID okuyucu ve hayvan kimliklendirme ekipmanları",
  },
  {
    slug: "mamalar",
    name: "Mamalar",
    description:
      "Kedi ve köpekler için türüne uygun mama ve beslenme ürünleri.",
    href: "/urunler/mamalar",
    icon: "bone",
    image: "/images/categories/mamalar.webp",
    imageAlt: "Kedi ve köpek mama ürünleri — kuru ve konserve",
  },
  {
    slug: "yakalama-aparatlari",
    name: "Yakalama Aparatları",
    description:
      "Kedi ve köpeklerin güvenli yakalanması ve sevki için aparat çözümleri.",
    href: "/urunler/yakalama-aparatlari",
    icon: "hand",
    image: "/images/categories/aparatlari.webp",
    imageAlt: "Yakalama aparatları, file, eldiven ve kontrol ekipmanları",
  },
  {
    slug: "yakalama-kafesleri",
    name: "Yakalama Kafesleri",
    description:
      "Taşınabilir kafesler ve stressiz yakalama sistemleri.",
    href: "/urunler/yakalama-kafesleri",
    icon: "box",
    image: "/images/categories/kafesleri.webp",
    imageAlt: "Tel kafes yakalama sistemleri — farklı boyutlarda",
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
