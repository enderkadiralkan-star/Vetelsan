import type { HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: "guvenilir-cozum",
    eyebrow: "Vetelsan · Veteriner sağlık",
    title: "Hayvan sağlığında\ngüvenilir ortak.",
    highlight: "güvenilir",
    description:
      "1996’dan beri veteriner klinikleri, kamu kurumları ve saha ekipleri için tek çatı altında güvenilir çözümler.",
    primaryCta: { label: "Ürünleri Keşfet", href: "/urunler" },
    secondaryCta: { label: "Vetelsan’ı Tanıyın", href: "/hakkimizda" },
    poster: "/images/hero/veterinary-hd.jpg",
    mobilePoster: "/images/hero/veterinary-hd.jpg",
    alt: "Veteriner hekim, klinik ortamında golden retriever muayenesi yaparken",
    objectPosition: "72% center",
    mobileObjectPosition: "78% 28%",
  },
  {
    id: "yakalama-ekipmanlari",
    eyebrow: "Üretim · Saha ekipmanları",
    title: "Sahada ihtiyaç duyulan\nekipmanlar.",
    highlight: "ekipmanlar",
    description:
      "Yakalama, işaretleme, enjeksiyon ve saha uygulamaları için kendi üretimimiz profesyonel çözümler.",
    primaryCta: { label: "Ekipmanları İncele", href: "/urunler" },
    secondaryCta: { label: "Atıcıları Gör", href: "/urunler/aticilar" },
    poster: "/images/hero/field-hd.jpg",
    mobilePoster: "/images/hero/field-hd.jpg",
    alt: "Saha ekibi, açık alanda hayvan sağlığı ekipmanlarını hazırlarken",
    objectPosition: "68% center",
    mobileObjectPosition: "70% 40%",
  },
  {
    id: "ilaclar-asilar",
    eyebrow: "İlaç · Aşı · Tedavi",
    title: "Tedavi ve korumada\ngüvenilir ürünler.",
    highlight: "güvenilir",
    description:
      "Veteriner klinikleri ve saha uygulamaları için ilaç, aşı ve koruma çözümleri.",
    primaryCta: { label: "İlaçlar & Aşılar", href: "/ilaclar-asilar" },
    secondaryCta: { label: "Bilgi Alın", href: "/iletisim" },
    poster: "/images/hero/laboratory-hd.jpg",
    mobilePoster: "/images/hero/laboratory-hd.jpg",
    alt: "Veteriner ilaç ve aşı flakonlarının yer aldığı laboratuvar ortamı",
    objectPosition: "78% center",
    mobileObjectPosition: "82% 45%",
  },
];
