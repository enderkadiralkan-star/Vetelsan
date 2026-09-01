import type { Locale } from "@/lib/i18n/config";

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export type SeoRelatedLink = {
  href: string;
  label: string;
};

export type CategorySeoContent = {
  heading: string;
  intro: string;
  paragraphs: string[];
  faq?: SeoFaqItem[];
  relatedLinks?: SeoRelatedLink[];
};

type LocalizedSeoContent = Record<Locale, CategorySeoContent>;

const productsHub: LocalizedSeoContent = {
  tr: {
    heading: "Veteriner ürünleri ve saha ekipmanları",
    intro:
      "Vetelsan ürün kataloğu; klinikler, belediyeler, barınaklar ve saha ekipleri için veteriner medikal malzeme ile saha ekipmanlarını tek çatı altında sunar.",
    paragraphs: [
      "Atıcı ve enjektör sistemlerinden cerrahi malzemelere, hayvan yakalama ekipmanlarından kimliklendirme ürünlerine kadar geniş bir yelpazede çözümler sunuyoruz. Kendi üretimimiz olan saha ekipmanları yanında, klinik ihtiyaçlarına yönelik medikal ürünler de portföyümüzde yer alır.",
      "Ürünler hakkında teknik bilgi, uygunluk ve tedarik talepleriniz için iletişim formumuzu kullanabilir veya doğrudan ekibimizle görüşebilirsiniz.",
    ],
    relatedLinks: [
      { href: "/urunler/aticilar", label: "Atıcılar" },
      { href: "/urunler/enjektorler", label: "Enjektörler" },
      { href: "/ilaclar-asilar", label: "İlaçlar & Aşılar" },
      { href: "/iletisim", label: "Teklif ve bilgi" },
    ],
  },
  en: {
    heading: "Veterinary products and field equipment",
    intro:
      "The Vetelsan product catalog brings together veterinary medical supplies and field equipment for clinics, municipalities, shelters, and field teams.",
    paragraphs: [
      "From projector and syringe systems to surgical supplies, capture equipment, and identification products, we offer a broad range of solutions. Our portfolio includes Vetelsan-made field equipment alongside medical products for clinical needs.",
      "Use our contact form or speak with our team for technical details, suitability, and supply requests.",
    ],
    relatedLinks: [
      { href: "/urunler/aticilar", label: "Projectors" },
      { href: "/urunler/enjektorler", label: "Syringes" },
      { href: "/ilaclar-asilar", label: "Medicines & Vaccines" },
      { href: "/iletisim", label: "Request information" },
    ],
  },
};

const medicinesHub: LocalizedSeoContent = {
  tr: {
    heading: "Veteriner ilaçları ve aşılar",
    intro:
      "Vetelsan veteriner ecza deposu olarak anestezik ilaçlardan antibiyotiklere, paraziter ürünlerden aşılara kadar profesyonel kullanım için geniş bir ilaç portföyü sunar.",
    paragraphs: [
      "Tüm ilaç bilgileri mevcut prospektüs ve ruhsat verilerine dayanır; reçeteli ürünler yalnızca yetkili veteriner hekimler tarafından kullanılmalıdır. Ürün seçimi, dozaj ve uygulama konularında veteriner hekiminize danışınız.",
      "Stok durumu, tedarik ve fiyat teklifi için iletişim sayfamızdan bize ulaşabilirsiniz.",
    ],
    faq: [
      {
        question: "İlaçlar hakkında nasıl bilgi alabilirim?",
        answer:
          "Ürün detay sayfalarındaki etken madde ve kullanım bilgilerini inceleyebilir; tedarik ve teklif talepleriniz için iletişim formunu kullanabilirsiniz.",
      },
      {
        question: "Türkiye geneline tedarik yapılıyor mu?",
        answer:
          "Vetelsan, Malatya merkezli veteriner ecza deposu olarak kamu kurumları, klinikler ve profesyonel müşterilere Türkiye genelinde hizmet vermektedir.",
      },
    ],
    relatedLinks: [
      { href: "/ilaclar-asilar/asilar", label: "Aşılar" },
      { href: "/ilaclar-asilar/antibiyotikler", label: "Antibiyotikler" },
      { href: "/urunler/cerrahi-ve-medikal", label: "Cerrahi ve Medikal" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  en: {
    heading: "Veterinary medicines and vaccines",
    intro:
      "As a veterinary pharmaceutical warehouse, Vetelsan offers a broad portfolio for professional use—from anesthetics and antibiotics to parasiticides and vaccines.",
    paragraphs: [
      "All medicine information is based on available leaflet and registration data; prescription products must be used only by authorised veterinarians. Consult your veterinarian for product selection, dosage, and administration.",
      "Contact us for stock, supply, and quotation requests.",
    ],
    faq: [
      {
        question: "How can I get information about medicines?",
        answer:
          "Review active ingredient and usage details on product pages, or use the contact form for supply and quotation requests.",
      },
      {
        question: "Do you supply across Türkiye?",
        answer:
          "Based in Malatya, Vetelsan serves public institutions, clinics, and professional customers across Türkiye.",
      },
    ],
    relatedLinks: [
      { href: "/ilaclar-asilar/asilar", label: "Vaccines" },
      { href: "/ilaclar-asilar/antibiyotikler", label: "Antibiotics" },
      { href: "/urunler/cerrahi-ve-medikal", label: "Surgical & Medical" },
      { href: "/iletisim", label: "Contact" },
    ],
  },
};

const productCategories: Record<string, LocalizedSeoContent> = {
  aticilar: {
    tr: {
      heading: "Veteriner atıcı ve dart sistemleri",
      intro:
        "Uzaktan enjeksiyon ve saha müdahalelerinde kullanılan atıcı tabanca, tüfek ve üfleme borusu sistemleri Vetelsan’ın kendi üretim tesislerinde imal edilmektedir.",
      paragraphs: [
        "Kartuş basınçlı ve havalı tüfek sistemleri; belediye ekipleri, barınaklar, hayvanat bahçeleri ve saha veterinerleri için güvenli mesafeden uygulama imkânı sunar. Enjektörlerle uyumlu dart çözümleri için enjektör kategorimizi de inceleyebilirsiniz.",
      ],
      faq: [
        {
          question: "Bu kategoride hangi ürünler bulunur?",
          answer:
            "Enjektör atıcı tabanca, tüfek, üfleme borusu ve havalı tüfek sistemleri bu kategoride listelenir.",
        },
        {
          question: "Teklif nasıl alınır?",
          answer:
            "Ürün detay sayfasından bilgi alabilir veya iletişim formu üzerinden teklif talep edebilirsiniz.",
        },
      ],
      relatedLinks: [
        { href: "/urunler/enjektorler", label: "Enjektörler" },
        { href: "/ilaclar-asilar/anestezik-ilaclar", label: "Anestezik İlaçlar" },
      ],
    },
    en: {
      heading: "Veterinary projectors and dart systems",
      intro:
        "Projector pistols, rifles, and blowpipe systems used in remote injection and field interventions are manufactured at Vetelsan’s own production facilities.",
      paragraphs: [
        "Cartridge-powered and air-rifle systems enable application from a safe distance for municipal teams, shelters, zoos, and field veterinarians. See our syringe category for compatible dart solutions.",
      ],
      faq: [
        {
          question: "What products are in this category?",
          answer:
            "Injector projector pistols, rifles, blowpipes, and air-rifle systems are listed here.",
        },
        {
          question: "How do I request a quote?",
          answer:
            "Review product pages or submit a request through our contact form.",
        },
      ],
      relatedLinks: [
        { href: "/urunler/enjektorler", label: "Syringes" },
        { href: "/ilaclar-asilar/anestezik-ilaclar", label: "Anesthetic Medicines" },
      ],
    },
  },
  enjektorler: {
    tr: {
      heading: "Veteriner enjektör çözümleri",
      intro:
        "Fünyeli, üflemeli ve havalı tüfek enjektörleri saha operasyonlarında hassas ve güvenli uygulama için tasarlanmıştır.",
      paragraphs: [
        "Dart enjektörleri atıcı sistemlerimizle birlikte çalışacak şekilde üretilir. Uzaktan enjeksiyon ekipmanlarının tamamı için atıcı kategorisine göz atabilirsiniz.",
      ],
      relatedLinks: [
        { href: "/urunler/aticilar", label: "Atıcılar" },
        { href: "/iletisim", label: "Teklif alın" },
      ],
    },
    en: {
      heading: "Veterinary syringe solutions",
      intro:
        "Dart, blowpipe, and air-rifle syringes are designed for precise and safe application in field operations.",
      paragraphs: [
        "Dart syringes are manufactured to work with our projector systems. See the projectors category for the full remote injection range.",
      ],
      relatedLinks: [
        { href: "/urunler/aticilar", label: "Projectors" },
        { href: "/iletisim", label: "Request a quote" },
      ],
    },
  },
  "cerrahi-ve-medikal": {
    tr: {
      heading: "Veteriner cerrahi ve medikal malzemeler",
      intro:
        "Klinik muayene, ameliyat ve bakım süreçlerinde ihtiyaç duyulan eldiven, sargı, cerrahi alet ve operasyon ekipmanları bu kategoride yer alır.",
      paragraphs: [
        "Veteriner klinikleri, hayvan hastaneleri ve saha müdahale ekipleri için medikal sarf malzemeleri ve cerrahi aletler sunuyoruz. İlaç ve aşı ihtiyaçlarınız için İlaçlar & Aşılar bölümümüze de bakabilirsiniz.",
      ],
      relatedLinks: [
        { href: "/ilaclar-asilar", label: "İlaçlar & Aşılar" },
        { href: "/iletisim", label: "İletişim" },
      ],
    },
    en: {
      heading: "Veterinary surgical and medical supplies",
      intro:
        "Gloves, dressings, surgical instruments, and operating equipment needed for clinical examination, surgery, and care are listed in this category.",
      paragraphs: [
        "We supply medical consumables and surgical instruments for veterinary clinics, animal hospitals, and field teams. See Medicines & Vaccines for pharmaceutical needs.",
      ],
      relatedLinks: [
        { href: "/ilaclar-asilar", label: "Medicines & Vaccines" },
        { href: "/iletisim", label: "Contact" },
      ],
    },
  },
  "yakalama-aparatlari": {
    tr: {
      heading: "Hayvan yakalama aparatları",
      intro:
        "Kedi ve köpeklerin güvenli yakalanması, kontrol altına alınması ve sevki için aparat ve yardımcı ekipmanlar.",
      paragraphs: [
        "Belediye, barınak ve saha ekiplerinin ihtiyaç duyduğu yakalama aparatları; kafes sistemlerimizle birlikte tam bir saha çözümü oluşturur.",
      ],
      relatedLinks: [
        { href: "/urunler/yakalama-kafesleri", label: "Yakalama Kafesleri" },
        { href: "/iletisim", label: "Teklif alın" },
      ],
    },
    en: {
      heading: "Animal capture apparatus",
      intro:
        "Apparatus and auxiliary equipment for the safe capture, control, and transfer of cats and dogs.",
      paragraphs: [
        "Capture apparatus for municipal, shelter, and field teams complements our cage systems for complete field solutions.",
      ],
      relatedLinks: [
        { href: "/urunler/yakalama-kafesleri", label: "Capture Cages" },
        { href: "/iletisim", label: "Request a quote" },
      ],
    },
  },
  "yakalama-kafesleri": {
    tr: {
      heading: "Hayvan yakalama kafesleri",
      intro:
        "Taşınabilir ve sabit yakalama kafesleri; stressiz yakalama prensiplerine uygun saha ekipmanları.",
      paragraphs: [
        "Farklı boyut ve kullanım senaryolarına uygun kafes çözümleri Vetelsan üretim tesislerinde imal edilmektedir. Yakalama aparatları kategorisiyle birlikte değerlendirilebilir.",
      ],
      relatedLinks: [
        { href: "/urunler/yakalama-aparatlari", label: "Yakalama Aparatları" },
      ],
    },
    en: {
      heading: "Animal capture cages",
      intro:
        "Portable and fixed capture cages designed for low-stress field capture.",
      paragraphs: [
        "Cage solutions for different sizes and scenarios are manufactured at Vetelsan facilities. Consider alongside our capture apparatus category.",
      ],
      relatedLinks: [
        { href: "/urunler/yakalama-aparatlari", label: "Capture Apparatus" },
      ],
    },
  },
  "isaretleme-numaralandirma": {
    tr: {
      heading: "Hayvan kimliklendirme ekipmanları",
      intro:
        "Kulak küpesi, mikroçip, okuyucu ve uygulama pensleri ile sokak ve besi hayvanlarının kayıt altına alınmasına yönelik çözümler.",
      paragraphs: [
        "Belediye ve tarım işletmelerinin numaralandırma projeleri için kimliklendirme ekipmanları ve sarf malzemeleri sunuyoruz.",
      ],
    },
    en: {
      heading: "Animal identification equipment",
      intro:
        "Ear tags, microchips, readers, and applicators for registering stray and livestock animals.",
      paragraphs: [
        "We supply identification equipment and consumables for municipal and agricultural numbering projects.",
      ],
    },
  },
  mamalar: {
    tr: {
      heading: "Kedi ve köpek mama ürünleri",
      intro:
        "Klinik ve pet shop ihtiyaçlarına yönelik kedi ve köpek mama çeşitleri Vetelsan tedarik portföyünde yer alır.",
      paragraphs: [
        "Beslenme ürünleri hakkında stok ve tedarik bilgisi için iletişime geçebilirsiniz.",
      ],
    },
    en: {
      heading: "Cat and dog food products",
      intro:
        "Cat and dog food varieties for clinic and pet shop needs are part of the Vetelsan supply portfolio.",
      paragraphs: [
        "Contact us for stock and supply information on nutrition products.",
      ],
    },
  },
  "diger-urunler": {
    tr: {
      heading: "Tamamlayıcı veteriner ürünleri",
      intro:
        "Ağızlık, tedavi yakalığı, bakım ve taşıma gibi klinik ve saha operasyonlarını destekleyen ürünler.",
      paragraphs: [
        "Ana kategorilerimizi tamamlayan bu ürün grubu hakkında detaylı bilgi için ürün sayfalarını inceleyebilirsiniz.",
      ],
    },
    en: {
      heading: "Complementary veterinary products",
      intro:
        "Muzzles, recovery collars, care and transport products supporting clinical and field operations.",
      paragraphs: [
        "Review product pages for details on items that complement our main categories.",
      ],
    },
  },
};

const medicineCategories: Record<string, LocalizedSeoContent> = {
  "anestezik-ilaclar": {
    tr: {
      heading: "Veteriner anestezik ilaçlar",
      intro:
        "Saha yakalama ve cerrahi müdahalelerde kullanılan kontrollü anestezi ilaçları; etken madde ve kullanım bilgileri ürün sayfalarında yer alır.",
      paragraphs: [
        "Tüm ilaçlar yalnızca yetkili veteriner hekim kontrolünde kullanılmalıdır. Uzaktan enjeksiyon ekipmanları için Atıcılar ve Enjektörler kategorilerimize bakabilirsiniz.",
      ],
      relatedLinks: [
        { href: "/urunler/aticilar", label: "Atıcılar" },
        { href: "/urunler/enjektorler", label: "Enjektörler" },
      ],
    },
    en: {
      heading: "Veterinary anesthetic medicines",
      intro:
        "Controlled anesthetic medicines used in field capture and surgical procedures; active ingredient and usage details are on product pages.",
      paragraphs: [
        "All medicines must be used under authorised veterinary supervision. See Projectors and Syringes for remote injection equipment.",
      ],
      relatedLinks: [
        { href: "/urunler/aticilar", label: "Projectors" },
        { href: "/urunler/enjektorler", label: "Syringes" },
      ],
    },
  },
  asilar: {
    tr: {
      heading: "Veteriner aşılar",
      intro:
        "Koruyucu veteriner hekimlik uygulamaları için aşı ve bağışıklık ürünleri.",
      paragraphs: [
        "Aşı seçimi, saklama koşulları ve uygulama programı veteriner hekim tarafından belirlenmelidir. Tedarik talepleri için iletişime geçin.",
      ],
    },
    en: {
      heading: "Veterinary vaccines",
      intro:
        "Vaccines and immunity products for preventive veterinary medicine.",
      paragraphs: [
        "Vaccine selection, storage, and schedules must be determined by a veterinarian. Contact us for supply requests.",
      ],
    },
  },
  antibiyotikler: {
    tr: {
      heading: "Veteriner antibiyotikler",
      intro:
        "Bakteriyel enfeksiyon tedavisinde kullanılan veteriner antibiyotik ürünleri.",
      paragraphs: [
        "Reçeteli kullanım zorunludur. Doz ve süre veteriner hekim tarafından hayvan türüne göre belirlenir.",
      ],
    },
    en: {
      heading: "Veterinary antibiotics",
      intro:
        "Veterinary antibiotic products used in the treatment of bacterial infections.",
      paragraphs: [
        "Prescription use is mandatory. Dosage and duration must be set by a veterinarian according to species.",
      ],
    },
  },
  "paraziter-ilaclar": {
    tr: {
      heading: "Veteriner paraziter ilaçlar",
      intro:
        "İç ve dış parazitlere karşı koruma ve tedavi amaçlı geniş spektrumlu ürünler.",
      paragraphs: [
        "Paraziter ilaç seçimi hayvan türü, yaş ve bulunduğu bölgeye göre değişir; veteriner hekiminize danışınız.",
      ],
    },
    en: {
      heading: "Veterinary parasiticides",
      intro:
        "Broad-spectrum products for protection and treatment against internal and external parasites.",
      paragraphs: [
        "Parasiticide selection varies by species, age, and region; consult your veterinarian.",
      ],
    },
  },
  vitaminler: {
    tr: {
      heading: "Veteriner vitaminler",
      intro:
        "Bağışıklık desteği ve sağlıklı gelişim için vitamin takviyeleri.",
      paragraphs: [
        "Vitamin ürünleri hakkında detaylı bilgi ve tedarik için ürün sayfalarını inceleyebilir veya bize ulaşabilirsiniz.",
      ],
    },
    en: {
      heading: "Veterinary vitamins",
      intro:
        "Vitamin supplements for immune support and healthy development.",
      paragraphs: [
        "Review product pages or contact us for details and supply on vitamin products.",
      ],
    },
  },
  "diger-ilaclar": {
    tr: {
      heading: "Diğer veteriner ilaçlar",
      intro:
        "Tedavi ve bakım süreçlerini destekleyen tamamlayıcı veteriner ilaçları.",
      paragraphs: [
        "Portföyümüzdeki diğer ilaç grupları hakkında bilgi almak için iletişim formunu kullanabilirsiniz.",
      ],
    },
    en: {
      heading: "Other veterinary medicines",
      intro:
        "Complementary veterinary medicines supporting treatment and care processes.",
      paragraphs: [
        "Use the contact form for information on other medicine groups in our portfolio.",
      ],
    },
  },
};

export function getProductsHubSeo(locale: Locale): CategorySeoContent {
  return productsHub[locale];
}

export function getMedicinesHubSeo(locale: Locale): CategorySeoContent {
  return medicinesHub[locale];
}

export function getProductCategorySeo(
  slug: string,
  locale: Locale,
): CategorySeoContent | undefined {
  return productCategories[slug]?.[locale];
}

export function getMedicineCategorySeo(
  slug: string,
  locale: Locale,
): CategorySeoContent | undefined {
  return medicineCategories[slug]?.[locale];
}
