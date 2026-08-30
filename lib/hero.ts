import type { HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: "guvenilir-cozum",
    eyebrow: "Vetelsan / Veteriner sağlık",
    title: "Güvenilir veteriner\nçözümleri.",
    highlight: "veteriner",
    description:
      "Veteriner sağlık, saha ekipmanları ve profesyonel ürün çözümlerini tek çatı altında sunuyoruz.",
    primaryCta: { label: "Ürünleri Keşfet", href: "/urunler" },
    secondaryCta: { label: "Vetelsan’ı Tanıyın", href: "/hakkimizda" },
    poster: "/images/hero/veterinary.jpg",
    mobilePoster: "/images/hero/veterinary.jpg",
    alt: "Veteriner hekim hayvan sağlığı kontrolü yaparken",
    objectPosition: "62% center",
    mobileObjectPosition: "32% 30%",
  },
  {
    id: "yakalama-ekipmanlari",
    eyebrow: "Saha ekipmanları",
    title: "Sahada ihtiyaç duyulan\nekipmanlar.",
    description:
      "Yakalama, işaretleme, enjeksiyon ve saha uygulamaları için profesyonel çözümler.",
    primaryCta: { label: "Ekipmanları İncele", href: "/urunler" },
    secondaryCta: { label: "Atıcıları Gör", href: "/urunler/aticilar" },
    poster: "/images/hero/field.jpg",
    mobilePoster: "/images/hero/field.jpg",
    alt: "Açık alanda çalışan veteriner saha ekibi",
    objectPosition: "center",
    mobileObjectPosition: "center 42%",
  },
  {
    id: "ilaclar-asilar",
    eyebrow: "Veteriner tedavi",
    title: "Tedavi ve korumada\ngüvenilir ürünler.",
    description:
      "Veteriner klinikleri ve saha uygulamaları için ilaç ve aşı çözümleri.",
    primaryCta: { label: "İlaçlar & Aşılar", href: "/ilaclar-asilar" },
    secondaryCta: { label: "Bilgi Alın", href: "/iletisim" },
    poster: "/images/hero/laboratory.jpg",
    mobilePoster: "/images/hero/laboratory.jpg",
    alt: "Veteriner laboratuvar ortamı",
    objectPosition: "68% center",
    mobileObjectPosition: "center 38%",
  },
];
