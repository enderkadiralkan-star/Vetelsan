export type KeywordIntent = {
  primary: string;
  secondary: string[];
  seoTitle: string;
  seoDescription: string;
};

export const homeKeywords: KeywordIntent = {
  primary: "veteriner sağlık ürünleri",
  secondary: [
    "veteriner medikal ürünler",
    "veteriner ilaçları",
    "veteriner ecza deposu",
  ],
  seoTitle: "Vetelsan | Veteriner Sağlık Ürünleri, İlaç ve Saha Ekipmanları",
  seoDescription:
    "1996’dan beri Malatya merkezli Vetelsan; veteriner ilaçları, aşılar, medikal malzemeler ve saha ekipmanları için teklif ve bilgi alın.",
};

export const productsHubKeywords: KeywordIntent = {
  primary: "veteriner ürünleri",
  secondary: [
    "veteriner medikal malzeme",
    "veteriner ekipmanları",
    "veteriner saha ekipmanları",
  ],
  seoTitle: "Veteriner Ürünleri ve Medikal Ekipmanlar",
  seoDescription:
    "Atıcılar, enjektörler, cerrahi malzemeler, yakalama ekipmanları ve kimliklendirme ürünleri. Vetelsan veteriner ürün kataloğu.",
};

export const medicinesHubKeywords: KeywordIntent = {
  primary: "veteriner ilaçları ve aşılar",
  secondary: [
    "veteriner ecza deposu",
    "veteriner antibiyotik",
    "veteriner aşı",
  ],
  seoTitle: "Veteriner İlaçları ve Aşılar",
  seoDescription:
    "Anestezik ilaçlar, antibiyotikler, paraziter ürünler, vitaminler ve aşılar. Profesyonel veteriner ilaç portföyü için bilgi alın.",
};

export const aboutKeywords: KeywordIntent = {
  primary: "Vetelsan veteriner ecza deposu",
  secondary: ["Malatya veteriner tedarik", "1996 veteriner sağlık"],
  seoTitle: "Hakkımızda",
  seoDescription:
    "1996’dan bu yana Malatya’da faaliyet gösteren Vetelsan; veteriner sağlık ürünleri, üretim tesisleri ve Türkiye geneli hizmet ağı.",
};

export const contactKeywords: KeywordIntent = {
  primary: "Vetelsan iletişim",
  secondary: [
    "Malatya veteriner ecza deposu",
    "veteriner tedarikçi iletişim",
  ],
  seoTitle: "İletişim | Vetelsan Veteriner Ecza Deposu",
  seoDescription:
    "Vetelsan Malatya merkez ofisi: telefon, e-posta ve iletişim formu ile ürün ve tedarik taleplerinizi iletebilirsiniz.",
};

export const productCategoryKeywords: Record<string, KeywordIntent> = {
  aticilar: {
    primary: "veteriner atıcı",
    secondary: [
      "dart atıcı",
      "uzaktan enjeksiyon atıcısı",
      "veteriner dart tüfeği",
    ],
    seoTitle: "Veteriner Atıcılar ve Dart Sistemleri",
    seoDescription:
      "Kartuş ve üfleme basınçlı enjektör atıcı tabanca, tüfek ve saha enjeksiyon sistemleri. Vetelsan üretimi uzaktan enjeksiyon çözümleri.",
  },
  enjektorler: {
    primary: "veteriner enjektör",
    secondary: [
      "dart enjektör",
      "fünyeli enjektör",
      "uzaktan enjeksiyon enjektörü",
    ],
    seoTitle: "Veteriner Enjektörler ve Dart Enjektörleri",
    seoDescription:
      "Fünyeli, üflemeli ve havalı tüfek enjektörleri. Saha müdahalelerinde kullanılan Vetelsan üretimi enjektör çözümleri.",
  },
  "cerrahi-ve-medikal": {
    primary: "veteriner cerrahi malzeme",
    secondary: [
      "veteriner medikal malzeme",
      "muayene eldiveni veteriner",
      "veteriner operasyon ekipmanları",
    ],
    seoTitle: "Cerrahi ve Medikal Veteriner Malzemeleri",
    seoDescription:
      "Muayene eldivenleri, sargı malzemeleri, cerrahi aletler ve klinik ekipmanları. Veteriner klinikler için medikal ürünler.",
  },
  "yakalama-aparatlari": {
    primary: "hayvan yakalama aparatı",
    secondary: [
      "köpek yakalama aparatı",
      "kedi yakalama aparatı",
      "hayvan yakalama ekipmanları",
    ],
    seoTitle: "Hayvan Yakalama Aparatları",
    seoDescription:
      "Kedi ve köpeklerin güvenli yakalanması için aparat, file ve kontrol ekipmanları. Saha operasyonlarına uygun çözümler.",
  },
  "yakalama-kafesleri": {
    primary: "hayvan yakalama kafesi",
    secondary: [
      "taşınabilir yakalama kafesi",
      "stressiz hayvan yakalama",
      "veteriner yakalama kafesi",
    ],
    seoTitle: "Hayvan Yakalama Kafesleri",
    seoDescription:
      "Taşınabilir kafesler ve stressiz yakalama sistemleri. Belediye, barınak ve saha ekipleri için yakalama kafesi çözümleri.",
  },
  "isaretleme-numaralandirma": {
    primary: "hayvan kulak küpesi",
    secondary: [
      "hayvan kimliklendirme",
      "hayvan numaralandırma",
      "kulak küpesi uygulama pensi",
    ],
    seoTitle: "Hayvan İşaretleme ve Numaralandırma",
    seoDescription:
      "Kulak küpesi, mikroçip ve hayvan kimliklendirme ekipmanları. Sokak ve besi hayvanlarının takibi için çözümler.",
  },
  mamalar: {
    primary: "veteriner mama",
    secondary: ["kedi maması", "köpek maması", "hayvan beslenme ürünleri"],
    seoTitle: "Kedi ve Köpek Mama Ürünleri",
    seoDescription:
      "Kedi ve köpekler için türüne uygun mama ve beslenme ürünleri. Veteriner sağlık tedarik portföyümüzdeki mama seçenekleri.",
  },
  "diger-urunler": {
    primary: "veteriner bakım ürünleri",
    secondary: ["köpek ağızlığı", "tedavi yakalığı", "hayvan taşıma"],
    seoTitle: "Diğer Veteriner Ürünleri",
    seoDescription:
      "Köpek ağızlıkları, tedavi sonrası yakalıklar, bakım ve taşıma ürünleri. Klinik ve saha ihtiyaçlarına tamamlayıcı çözümler.",
  },
};

export const medicineCategoryKeywords: Record<string, KeywordIntent> = {
  "anestezik-ilaclar": {
    primary: "veteriner anestezik",
    secondary: ["ksilazin", "ketamin", "saha anestezi ilacı"],
    seoTitle: "Veteriner Anestezik İlaçlar",
    seoDescription:
      "Cerrahi müdahale ve saha yakalama operasyonlarında kullanılan kontrollü anestezi çözümleri. Bilgi ve teklif için iletişime geçin.",
  },
  asilar: {
    primary: "veteriner aşı",
    secondary: ["hayvan aşısı", "koruyucu aşı", "bağışıklık aşısı"],
    seoTitle: "Veteriner Aşılar",
    seoDescription:
      "Koruyucu veteriner hekimlik için aşı ve bağışıklık çözümleri. Profesyonel kullanım için aşı portföyümüz hakkında bilgi alın.",
  },
  antibiyotikler: {
    primary: "veteriner antibiyotik",
    secondary: ["hayvan antibiyotiği", "enfeksiyon tedavisi"],
    seoTitle: "Veteriner Antibiyotikler",
    seoDescription:
      "Enfeksiyonlarla mücadelede kullanılan veteriner antibiyotik ürünleri. Reçeteli kullanım; detaylar için bizimle iletişime geçin.",
  },
  "paraziter-ilaclar": {
    primary: "veteriner parazit ilacı",
    secondary: ["iç parazit", "dış parazit", "paraziter tedavi"],
    seoTitle: "Veteriner Paraziter İlaçlar",
    seoDescription:
      "İç ve dış parazitlere karşı koruma sağlayan geniş spektrumlu veteriner ürünleri. Portföy ve tedarik bilgisi için iletişim.",
  },
  vitaminler: {
    primary: "veteriner vitamin",
    secondary: ["hayvan vitamini", "bağışıklık desteği"],
    seoTitle: "Veteriner Vitaminler",
    seoDescription:
      "Bağışıklık sistemini destekleyen ve sağlıklı gelişimi güçlendiren vitamin takviyeleri. Ürün listesi ve bilgi talebi.",
  },
  "diger-ilaclar": {
    primary: "veteriner ilaç",
    secondary: ["tamamlayıcı veteriner ilacı", "tedavi destek ürünü"],
    seoTitle: "Diğer Veteriner İlaçlar",
    seoDescription:
      "Tedavi ve bakım süreçlerini destekleyen tamamlayıcı veteriner ilaçları. Katalog ve tedarik talepleri için iletişime geçin.",
  },
};

export function getProductCategoryKeywords(slug: string): KeywordIntent | undefined {
  return productCategoryKeywords[slug];
}

export function getMedicineCategoryKeywords(slug: string): KeywordIntent | undefined {
  return medicineCategoryKeywords[slug];
}
