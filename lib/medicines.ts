import type { Medicine, MedicineCategory } from "./types";

export const medicineCategories: MedicineCategory[] = [
  {
    slug: "anestezik-ilaclar",
    name: "Anestezik İlaçlar",
    description:
      "Cerrahi müdahaleler ve saha yakalama operasyonlarında kullanılan kontrollü anestezi çözümleri.",
    href: "/ilaclar-asilar/anestezik-ilaclar",
    icon: "droplets",
    image: "/images/medicines/vials.jpg",
    imageAlt: "Anestezik veteriner ilaçları",
    featured: true,
  },
  {
    slug: "asilar",
    name: "Aşılar",
    description:
      "Koruyucu veteriner hekimlik için aşı ve bağışıklık çözümleri.",
    href: "/ilaclar-asilar/asilar",
    icon: "shield",
    image: "/images/medicines/vaccine.jpg",
    imageAlt: "Veteriner aşı ve bağışıklık ürünleri",
    featured: true,
  },
  {
    slug: "antibiyotikler",
    name: "Antibiyotikler",
    description:
      "Enfeksiyonlarla mücadelede kullanılan veteriner antibiyotik ürünleri.",
    href: "/ilaclar-asilar/antibiyotikler",
    icon: "pill",
    image: "/images/medicines/pills.jpg",
    imageAlt: "Veteriner antibiyotik ürünleri",
  },
  {
    slug: "paraziter-ilaclar",
    name: "Paraziter İlaçlar",
    description:
      "İç ve dış parazitlere karşı koruma sağlayan geniş spektrumlu ürünler.",
    href: "/ilaclar-asilar/paraziter-ilaclar",
    icon: "bug",
    image: "/images/categories/livestock.jpg",
    imageAlt: "Paraziter veteriner ilaçları",
  },
  {
    slug: "vitaminler",
    name: "Vitaminler",
    description:
      "Bağışıklık sistemini güçlendiren ve sağlıklı gelişimi destekleyen vitamin takviyeleri.",
    href: "/ilaclar-asilar/vitaminler",
    icon: "leaf",
    image: "/images/medicines/pharmacy.jpg",
    imageAlt: "Veteriner vitamin takviyeleri",
  },
  {
    slug: "diger-ilaclar",
    name: "Diğer İlaçlar",
    description:
      "Tedavi ve bakım süreçlerini destekleyen tamamlayıcı veteriner ilaçları.",
    href: "/ilaclar-asilar/diger-ilaclar",
    icon: "flask",
    image: "/images/categories/medical.jpg",
    imageAlt: "Tamamlayıcı veteriner ilaçları",
  },
];

export const medicines: Medicine[] = [
  {
    slug: "control-10",
    name: "Control %10",
    categorySlug: "anestezik-ilaclar",
    shortDescription:
      "Etken maddesi ksilazin %10 olan veteriner anestezik ürün.",
    activeIngredient: "Ksilazin %10",
    usage: "Kas içi uygulama",
    description:
      "Sokak hayvanları ve yabani hayvanların yakalanmasında, kaçan hayvanların kontrolünde ve klinik ameliyatlarda kullanılan anestezik üründür. Veteriner klinikleri ve hayvanat bahçelerinde sık tercih edilir. Ksilazin köpekte kusma yaratabileceğinden uygulama öncesi açlık süresi dikkate alınmalıdır.",
    image: "/images/medicines/vials.jpg",
  },
  {
    slug: "keta-control",
    name: "Keta Control",
    categorySlug: "anestezik-ilaclar",
    shortDescription: "Klinik ve saha kullanımına yönelik anestezik çözüm.",
    description:
      "Veteriner kliniklerinde ve saha operasyonlarında kullanılan anestezik ürün. Kontrollü müdahale gerektiren cerrahi ve yakalama süreçlerinde tercih edilir.",
    image: "/images/medicines/vials.jpg",
  },
  {
    slug: "gentavet",
    name: "Gentavet",
    categorySlug: "antibiyotikler",
    shortDescription: "Veteriner hekimlikte kullanılan antibiyotik ürün.",
    description:
      "Enfeksiyon tedavisinde kullanılan veteriner antibiyotik. Klinik uygulamalarda hekim kontrolünde değerlendirilir.",
    image: "/images/medicines/pills.jpg",
  },
  {
    slug: "vilmectin",
    name: "Vilmectin",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Parazit kontrolüne yönelik veteriner ürün.",
    description:
      "İç ve dış parazitlerle mücadelede kullanılan veteriner paraziter ürün. Saha ve klinik kullanım senaryolarına uygun olarak sunulur.",
    image: "/images/categories/livestock.jpg",
  },
  {
    slug: "vitamin-kompleks",
    name: "Veteriner Vitamin Kompleksi",
    categorySlug: "vitaminler",
    shortDescription: "Bağışıklık ve gelişim desteği sağlayan vitamin takviyesi.",
    description:
      "Hayvanların bağışıklık sistemini ve sağlıklı gelişimini desteklemek üzere formüle edilmiş vitamin takviyesi. Klinik ve bakım süreçlerinde tamamlayıcı olarak kullanılır.",
    image: "/images/medicines/pharmacy.jpg",
  },
  {
    slug: "koruyucu-asi",
    name: "Koruyucu Aşı Çözümleri",
    categorySlug: "asilar",
    shortDescription: "Koruyucu hekimlik için veteriner aşı ürünleri.",
    description:
      "Klinik, barınak ve saha uygulamalarında koruyucu hekimliği destekleyen aşı çözümleri. Ürün seçimi hayvan türü ve endikasyona göre hekim tarafından belirlenir.",
    image: "/images/medicines/vaccine.jpg",
  },
  {
    slug: "destek-tedavi",
    name: "Destek Tedavi Ürünleri",
    categorySlug: "diger-ilaclar",
    shortDescription: "Tedavi süreçlerini tamamlayan veteriner ilaçları.",
    description:
      "Semptomatik destek, bakım ve tamamlayıcı tedavi ihtiyaçlarına yönelik veteriner ilaç grubu.",
    image: "/images/categories/medical.jpg",
  },
];

export function getMedicineCategoryBySlug(slug: string) {
  return medicineCategories.find((category) => category.slug === slug);
}

export function getMedicineBySlug(slug: string) {
  return medicines.find((medicine) => medicine.slug === slug);
}

export function getMedicinesByCategory(categorySlug: string) {
  return medicines.filter((medicine) => medicine.categorySlug === categorySlug);
}

export function getMedicineCountByCategory(categorySlug: string) {
  return medicines.filter((medicine) => medicine.categorySlug === categorySlug)
    .length;
}

export function getMedicineHref(medicine: Pick<Medicine, "categorySlug" | "slug">) {
  return `/ilaclar-asilar/${medicine.categorySlug}/${medicine.slug}`;
}
