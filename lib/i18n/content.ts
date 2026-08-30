import type { Locale } from "./config";
import { productCategories } from "@/lib/categories";
import { documents } from "@/lib/documents";
import { heroSlides } from "@/lib/hero";
import { medicineCategories, medicines } from "@/lib/medicines";
import { products } from "@/lib/products";
import type {
  HeroSlide,
  Medicine,
  MedicineCategory,
  Product,
  ProductCategory,
} from "@/lib/types";

type TextFields = {
  name?: string;
  shortDescription?: string;
  description?: string;
  imageAlt?: string;
  specs?: { label: string; value: string }[];
  activeIngredient?: string;
  usage?: string;
};

const categoryEn: Record<string, TextFields> = {
  aticilar: {
    name: "Projectors (Launchers)",
    description:
      "Cartridge- and blowpipe-powered injector projector pistols, rifles, blowpipes, and air rifles. Fully Vetelsan-made field solutions.",
    imageAlt: "Field and wildlife capture operation",
  },
  "cerrahi-ve-medikal": {
    name: "Surgical & Medical",
    description:
      "Clinical equipment from examination and surgical gloves to gauze, sponges, and bandages; needle holders, scissors, forceps, and operating tables.",
    imageAlt: "Sterile surgical instruments and medical equipment",
  },
  "diger-urunler": {
    name: "Other Products",
    description:
      "Dog muzzles, post-treatment collars, care and transport products.",
    imageAlt: "Pet care and accessory products",
  },
  enjektorler: {
    name: "Syringes",
    description:
      "Dart, blowpipe, and air-rifle syringes. Field solutions of our own manufacture.",
    imageAlt: "Veterinary syringe application",
  },
  "isaretleme-numaralandirma": {
    name: "Identification & Numbering",
    description:
      "Ear tags, microchips, and identification equipment for tracking stray and livestock animals.",
    imageAlt: "Cattle identification with ear tags",
  },
  mamalar: {
    name: "Pet Food",
    description:
      "Species-appropriate food and nutrition products for cats and dogs.",
    imageAlt: "Cat and dog food products",
  },
  "yakalama-aparatlari": {
    name: "Capture Apparatus",
    description:
      "Apparatus solutions for the safe capture and transfer of cats and dogs.",
    imageAlt: "Safe animal capture and transfer equipment",
  },
  "yakalama-kafesleri": {
    name: "Capture Cages",
    description: "Portable cages and low-stress capture systems.",
    imageAlt: "Animal holding and capture cages",
  },
};

const medicineCategoryEn: Record<string, TextFields> = {
  "anestezik-ilaclar": {
    name: "Anesthetic Medicines",
    description:
      "Controlled anesthesia solutions used in surgical procedures and field capture operations.",
    imageAlt: "Anesthetic veterinary medicines",
  },
  asilar: {
    name: "Vaccines",
    description:
      "Vaccine and immunity solutions for preventive veterinary medicine.",
    imageAlt: "Veterinary vaccines and immunity products",
  },
  antibiyotikler: {
    name: "Antibiotics",
    description:
      "Veterinary antibiotic products used in the treatment of infections.",
    imageAlt: "Veterinary antibiotic products",
  },
  "paraziter-ilaclar": {
    name: "Parasiticides",
    description:
      "Broad-spectrum products that protect against internal and external parasites.",
    imageAlt: "Parasitic veterinary medicines",
  },
  vitaminler: {
    name: "Vitamins",
    description:
      "Vitamin supplements that strengthen the immune system and support healthy development.",
    imageAlt: "Veterinary vitamin supplements",
  },
  "diger-ilaclar": {
    name: "Other Medicines",
    description:
      "Complementary veterinary medicines that support treatment and care.",
    imageAlt: "Complementary veterinary medicines",
  },
};

const medicineEn: Record<string, TextFields> = {
  "control-10": {
    shortDescription:
      "Veterinary anesthetic product with xylazine 10% as the active ingredient.",
    activeIngredient: "Xylazine 10%",
    usage: "Intramuscular administration",
    description:
      "An anesthetic used in the capture of stray and wild animals, the control of fleeing animals, and clinical surgery. Frequently preferred in veterinary clinics and zoos. Because xylazine may cause vomiting in dogs, a fasting period should be considered before administration.",
  },
  "keta-control": {
    shortDescription: "Anesthetic solution for clinic and field use.",
    description:
      "An anesthetic used in veterinary clinics and field operations. Preferred in surgical and capture procedures that require controlled intervention.",
  },
  gentavet: {
    shortDescription: "Antibiotic product used in veterinary medicine.",
    description:
      "A veterinary antibiotic used in infection treatment. Evaluated under veterinary supervision in clinical practice.",
  },
  vilmectin: {
    shortDescription: "Veterinary product for parasite control.",
    description:
      "A veterinary parasiticide used against internal and external parasites. Offered for field and clinical use.",
  },
  "vitamin-kompleks": {
    name: "Veterinary Vitamin Complex",
    shortDescription:
      "Vitamin supplement supporting immunity and development.",
    description:
      "A vitamin supplement formulated to support animals’ immune systems and healthy development. Used as a complement in clinical and care processes.",
  },
  "koruyucu-asi": {
    name: "Preventive Vaccine Solutions",
    shortDescription: "Veterinary vaccine products for preventive medicine.",
    description:
      "Vaccine solutions that support preventive medicine in clinic, shelter, and field use. Product selection is determined by the veterinarian according to species and indication.",
  },
  "destek-tedavi": {
    name: "Supportive Treatment Products",
    shortDescription: "Veterinary medicines that complement treatment.",
    description:
      "A veterinary medicine group for symptomatic support, care, and complementary treatment needs.",
  },
};

const productEn: Record<string, TextFields> = {
  "enjektor-atici-tabanca": {
    name: "Injector Projector Pistol",
    shortDescription:
      "Injector projector pistol powered by cartridge-capsule pressure, 70% quieter.",
    description:
      "Operates with the burst pressure of a capsule placed in the cartridge. Runs about 70% quieter.\n\nA special plastic-alloy grip provides a light, ergonomic hold and control. It has a reinforced steel barrel and a steel-alloy body.\n\nFully manufactured by us. Supplied with a protective case and maintenance kit.",
    specs: [
      { label: "Operation", value: "Cartridge capsule burst pressure" },
      { label: "Sound", value: "70% quieter" },
      { label: "Barrel length", value: "25 cm" },
      { label: "Weight", value: "1.5 kg" },
      { label: "Range", value: "20 – 25 metres" },
      { label: "Delivery", value: "Protective case and maintenance kit" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "enjektor-atici-tufek": {
    name: "Injector Projector Rifle",
    shortDescription:
      "Dart injector projector rifle with a long steel barrel and 25–30 m range.",
    description:
      "Operates with the burst pressure of a capsule placed in the cartridge. Runs about 70% quieter.\n\nA plastic-alloy stock provides a comfortable, ergonomic hold and control. It has a reinforced long steel barrel and a steel-alloy body, making it ideal for longer-range shots.\n\nFully manufactured by us. Supplied with a protective case and maintenance kit.",
    specs: [
      { label: "Operation", value: "Cartridge capsule burst pressure" },
      { label: "Sound", value: "70% quieter" },
      { label: "Barrel length", value: "50 cm" },
      { label: "Weight", value: "2.3 kg" },
      { label: "Range", value: "25 – 30 metres" },
      { label: "Delivery", value: "Protective case and maintenance kit" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "ufleme-borusu": {
    name: "Blowpipe",
    shortDescription:
      "Fully silent, aluminium-bodied blowpipe projector.",
    description:
      "Operates with blow pressure. The shot is made by the user’s breath through a plastic mouthpiece. Fully silent and safe.\n\nAluminium body and galvanized coating make it very light. The syringe is inserted into the tube from the mouthpiece end and is then ready to use.\n\nFully manufactured by us.",
    specs: [
      { label: "Operation", value: "Blow pressure" },
      { label: "Sound", value: "Fully silent" },
      { label: "Length", value: "125 cm" },
      { label: "Weight", value: "300 grams" },
      { label: "Range", value: "10 – 15 metres" },
      { label: "Body", value: "Aluminium, galvanized coating" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "havali-tufek": {
    name: "Air Rifle",
    shortDescription:
      "Fully silent air projector with scope and stepped range adjustment.",
    description:
      "The longest-range injector projector rifle. Fully silent, so it can be used with confidence. Suitable for small and large animals.\n\nThe air tank is filled with the supplied pump. At least 80 shots can be made on a single fill. A 3-stage distance valve lets you select the ideal setting for the shot distance.\n\nThe onboard scope provides a clear view.",
    specs: [
      { label: "Operation", value: "Air tank (pump fill)" },
      { label: "Sound", value: "Fully silent" },
      { label: "Barrel length", value: "70 cm" },
      { label: "Capacity", value: "At least 80 shots per fill" },
      { label: "Distance setting", value: "3-stage valve" },
      { label: "Sight", value: "Scope" },
      { label: "Use", value: "All small and large animals" },
    ],
  },
  "funyeli-enjektor": {
    name: "Dart Syringe",
    shortDescription:
      "Shatter-resistant dart syringe with a 2.5–3 ml medicine chamber.",
    description:
      "Produced with a rear guiding screw-fin system and a capsule-cartridge body that is easy to use. Made from first-class materials resistant to shattering and breaking apart in use. The medicine chamber is 2.5–3 ml. The product is shipped empty; the dose is set with an injection syringe according to the animal’s species and weight. Fully manufactured by us.",
    specs: [
      { label: "Medicine chamber", value: "2.5 – 3 ml" },
      { label: "Delivery", value: "Empty / without medicine" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "uflemeli-enjektor": {
    name: "Blowpipe Syringe (Tüf Tüf)",
    shortDescription: "Blowpipe syringe system for close-range intervention.",
    description:
      "A blowpipe syringe used to capture stray and fleeing animals. Practical, controlled application suited to close-range field use.",
    specs: [{ label: "Application", value: "Close-range field use" }],
  },
  "havali-tufek-enjektoru": {
    name: "Air Rifle Syringe",
    shortDescription: "Field syringe compatible with air rifle systems.",
    description:
      "A syringe solution used with air rifle systems. Provides safe injection support in field operations that require remote intervention.",
  },
  "muayene-eldiveni": {
    name: "Examination Glove",
    shortDescription:
      "Disposable, non-sterile examination glove. Sizes S-M-L.",
    description:
      "Disposable and non-sterile. Supplied in boxes of 100.\n\nAvailable in sizes to fit every hand (S-M-L).",
    specs: [
      { label: "Use", value: "Disposable" },
      { label: "Sterility", value: "Non-sterile" },
      { label: "Packaging", value: "Box of 100" },
      { label: "Size", value: "S – M – L" },
    ],
  },
  "steril-cerrahi-eldiven": {
    name: "Sterile Surgical Glove",
    shortDescription:
      "Natural rubber latex sterile surgical glove that preserves tactile feel.",
    description:
      "Made from natural rubber latex. Finger and palm thickness allow use without loss of feel or tearing.\n\nA specially formulated soft outer surface reduces hand fatigue in prolonged use. The cuffed, long cuff prevents loosening and slipping on surgical gown sleeves.\n\nThis provides maximum comfort and safety during surgical procedures.",
    specs: [
      { label: "Material", value: "Natural rubber latex" },
      { label: "Sterility", value: "Sterile" },
      { label: "Cuff", value: "Cuffed, long" },
      { label: "Use", value: "Surgical procedure" },
    ],
  },
  "steril-gaz-kompres": {
    name: "Sterile Gauze Compress",
    shortDescription:
      "100% cotton, steam-sterilized, highly absorbent gauze compress.",
    description:
      "100% cotton fabric lets the skin breathe. Sterilized by steam sterilization.\n\nIts hydrophilic property gives high absorbency against bleeding. The product is disposable.",
    specs: [
      { label: "Fabric", value: "100% cotton" },
      { label: "Sterilization", value: "Steam" },
      { label: "Feature", value: "Hydrophilic, high absorbency" },
      { label: "Use", value: "Disposable" },
    ],
  },
  spanc: {
    name: "Sponge",
    shortDescription:
      "Soft, breathable sponge for wound cleaning and covering.",
    description:
      "Used for wound cleaning and then as a sterile cover. Its special soft fabric does not stick to the wound and is highly comfortable.\n\nFast, high absorbency helps create the environment needed for healing. It is breathable and lets the skin breathe.",
    specs: [
      { label: "Use", value: "Wound cleaning and covering" },
      { label: "Fabric", value: "Soft, non-adherent" },
      { label: "Absorbency", value: "Fast and high" },
      { label: "Air", value: "Breathable" },
    ],
  },
  "sargi-bezi": {
    name: "Bandage Gauze",
    shortDescription: "20-count, 100% cotton, individually packed bandage gauze.",
    description:
      "Used after surgery, in any dressing that requires bandaging, and to secure the treatment area.\n\nWoven from 20-count, 100% cotton. Individually packed. Non-sterile.",
    specs: [
      { label: "Fabric", value: "20-count, 100% cotton" },
      { label: "Packaging", value: "Individual pack" },
      { label: "Sterility", value: "Non-sterile" },
      { label: "Use", value: "Dressing and securing" },
    ],
  },
  "kendinden-yapiskanli-bandaj": {
    name: "Self-Adhesive Bandage",
    shortDescription:
      "Clipless, elastic, breathable self-adhesive bandage.",
    description:
      "Used to secure wound pads, compresses, and similar medical materials on moving areas. Does not require clips; it holds easily and firmly to itself.\n\nBreathable, allowing the skin to breathe. Its elastic structure conforms to body contours. Individually packed.",
    specs: [
      { label: "Fixation", value: "Clipless, self-adhesive" },
      { label: "Structure", value: "Elastic, breathable" },
      { label: "Packaging", value: "Individual" },
    ],
  },
  "cerrahi-maske": {
    name: "Surgical Mask",
    shortDescription:
      "3-layer surgical mask with a nose wire, easy to breathe through.",
    description:
      "3-layered. The wire at the nose lets you adjust the fit easily.\n\nDesigned for easier breathing. Filters dust.",
    specs: [
      { label: "Layers", value: "3-layer" },
      { label: "Nose", value: "Adjustable wire" },
      { label: "Filter", value: "Dust filtering" },
    ],
  },
  "ameliyat-onlugu": {
    name: "Surgical Gown",
    shortDescription:
      "Disposable, 45 g lightweight surgical gown with elastic cuffs.",
    description:
      "Suitable for all surgical operations. Disposable.\n\nAt 45 grams it is very light and practical. Elastic wrist cuffs provide comfort during operations.",
    specs: [
      { label: "Use", value: "Disposable" },
      { label: "Weight", value: "45 grams" },
      { label: "Cuff", value: "Elastic" },
    ],
  },
  portegu: {
    name: "Needle Holder",
    shortDescription:
      "Surgical needle holder with a locking mechanism for suturing.",
    description:
      "Needle holders are surgical hand instruments used for suturing in operations or minor dressings. The locking mechanism at the tips holds the needle securely so suturing can be done easily.\n\nDifferent types are available. A design that fits the hand and palm makes procedures more practical.",
    specs: [
      { label: "Use", value: "Suturing" },
      { label: "Feature", value: "Tip locking mechanism" },
      { label: "Range", value: "Different models available" },
    ],
  },
  "veteriner-makas": {
    name: "Veterinary Scissors",
    shortDescription:
      "Stainless steel veterinary scissors with an easy grip.",
    description:
      "Made from stainless steel. An easy-to-grip design provides comfortable use.\n\nDifferent types are available.",
    specs: [
      { label: "Material", value: "Stainless steel" },
      { label: "Use", value: "Ergonomic grip" },
      { label: "Range", value: "Different models available" },
    ],
  },
  "hemostatik-pens": {
    name: "Hemostatic Forceps",
    shortDescription:
      "Hemostatic forceps that help stop bleeding during operations.",
    description:
      "Hemostatic forceps are a surgical instrument used during operations. They help stop bleeding in surgical procedures and are used in necessary interventions.\n\nDesigned for hand use with an ergonomic structure for comfortable handling. Available in different types and sizes.",
    specs: [
      { label: "Use", value: "Hemostasis / surgical intervention" },
      { label: "Structure", value: "Ergonomic hand instrument" },
      { label: "Range", value: "Different sizes and models" },
    ],
  },
  "bisturi-sapi-ucu": {
    name: "Scalpel Handle & Blade",
    shortDescription:
      "Ergonomic surgical scalpel handle with interchangeable blades.",
    description:
      "A surgical instrument used to make incisions during operations. Its special structure delivers high performance in surgery and makes the surgeon’s work easier.\n\nThe ergonomic design fits the hand. Scalpel blades attach to the handle and are then ready to use. Different blade numbers and sizes/models are available.",
    specs: [
      { label: "Use", value: "Surgical incision" },
      { label: "Blade", value: "Attaches to handle, various numbers" },
      { label: "Structure", value: "Ergonomic handle" },
    ],
  },
  "cerrahi-alet-kutusu": {
    name: "Surgical Instrument Case",
    shortDescription:
      "Stainless metal, lidded surgical instrument storage case.",
    description:
      "A case for storing and protecting instruments during surgical operations. Made from stainless metal.\n\nThe lid provides secure storage.",
    specs: [
      { label: "Material", value: "Stainless metal" },
      { label: "Lid", value: "Lidded, secure storage" },
    ],
  },
  "hayvan-tasima-sedyesi": {
    name: "Animal Stretcher",
    shortDescription:
      "60×120 cm stretcher with antibacterial tarp and securing straps.",
    description:
      "Has securing straps on the sides. Weighs about 5 kg and measures 60 x 120 cm.\n\nThe tarp is made with antibacterial properties. Designed to be carried by hand.",
    specs: [
      { label: "Size", value: "60 x 120 cm" },
      { label: "Weight", value: "5 kg" },
      { label: "Tarp", value: "Antibacterial" },
      { label: "Carry", value: "By hand, with securing straps" },
    ],
  },
  "veteriner-muayene-masasi": {
    name: "Veterinary Examination Table",
    shortDescription:
      "Veterinary examination table with tilt adjustment, IV pole, and four wheels.",
    description:
      "Used to examine and diagnose before surgical operations. Stainless steel and electrostatic paint make it easy to wash and clean after operations.\n\nTilt can be adjusted to both sides. Includes an IV pole. Four wheels, two of them braked, and rope-tie points.",
    specs: [
      { label: "Material", value: "Stainless steel, electrostatic paint" },
      { label: "Tilt", value: "Two-sided adjustment" },
      { label: "Accessories", value: "IV pole, rope-tie points" },
      { label: "Wheels", value: "4, 2 braked" },
    ],
  },
  "veteriner-operasyon-masasi": {
    name: "Veterinary Operating Table",
    shortDescription:
      "304 stainless, electric-motor, remote-controlled operating table.",
    description:
      "Comfortable and practical for surgical operations. Made from 304-grade stainless steel. Antibacterial powder coating is used.\n\nFour wheels, two of them braked. Electric-motor driven and remote-controlled. Two-sided tilt adjustment.",
    specs: [
      { label: "Material", value: "304 stainless steel" },
      { label: "Coating", value: "Antibacterial powder coating" },
      { label: "Motion", value: "Electric motor, remote control" },
      { label: "Tilt", value: "Two-sided adjustment" },
      { label: "Wheels", value: "4, 2 braked" },
    ],
  },
  "kopek-agizligi": {
    name: "Dog Muzzle",
    shortDescription: "Dog muzzles for safe handling and transport.",
    description:
      "Dog muzzles suitable for clinic and field use. Support animal and team safety during examination, treatment, and transport.",
  },
  "tedavi-sonrasi-yakalik": {
    name: "Post-Treatment Collar",
    shortDescription: "Protective collar for cats and dogs after treatment.",
    description:
      "Protective collars that prevent the animal from reaching the wound area after surgery and treatment.",
  },
  "kulak-kupesi-isaretleme": {
    name: "Ear Tags and Identification",
    shortDescription:
      "Identification equipment for stray and livestock animals.",
    description:
      "Ear tags and identification equipment used in animal tracking. Designed for numbering and monitoring stray animals and livestock.",
  },
  "kedi-kopek-mamasi": {
    name: "Cat and Dog Food",
    shortDescription: "Food and nutrition products for companion animals.",
    description:
      "Food varieties formulated for cats and dogs. Nutrition solutions that support clinical and care processes.",
  },
  "yakalama-aparati": {
    name: "Capture Apparatus",
    shortDescription:
      "Apparatus for the safe capture and transfer of cats and dogs.",
    description:
      "Capture apparatus used to catch cats and dogs and move them from one place to another. Provides controlled use for field teams and clinic staff.",
  },
  "tasinabilir-yakalama-kafesi": {
    name: "Portable Capture Cage",
    shortDescription:
      "Portable cage system for low-stress capture and transport.",
    description:
      "Portable capture cages used in emergency response and field operations. Designed for holding and transporting the animal safely.",
  },
  "mudahale-kafesi": {
    name: "Intervention Cage",
    shortDescription: "Capture cage for clinic and field interventions.",
    description:
      "A capture cage used for veterinary intervention, examination, and short-term holding. A durable body makes it suitable for field conditions.",
  },
};

const heroEn: Record<
  string,
  Pick<HeroSlide, "eyebrow" | "title" | "description" | "alt"> & {
    primaryCta?: string;
    secondaryCta?: string;
    highlight?: string;
  }
> = {
  "guvenilir-cozum": {
    eyebrow: "Vetelsan / Veterinary health",
    title: "Trusted veterinary\nsolutions.",
    highlight: "veterinary",
    description:
      "Veterinary health, field equipment, and professional product solutions under one roof.",
    primaryCta: "Explore products",
    secondaryCta: "Meet Vetelsan",
    alt: "Veterinarian examining an animal",
  },
  "yakalama-ekipmanlari": {
    eyebrow: "Field equipment",
    title: "Equipment the field\nactually needs.",
    description:
      "Professional solutions for capture, identification, injection, and field operations.",
    primaryCta: "Explore equipment",
    secondaryCta: "View projectors",
    alt: "Veterinary field team working outdoors",
  },
  "ilaclar-asilar": {
    eyebrow: "Veterinary treatment",
    title: "Reliable products for\ntreatment and protection.",
    description:
      "Medicine and vaccine solutions for veterinary clinics and field applications.",
    primaryCta: "Medicines & Vaccines",
    secondaryCta: "Request information",
    alt: "Veterinary laboratory environment",
  },
};

const documentEn: Record<
  string,
  { title: string; issuer: string; detail: string }
> = {
  "veteriner-ecza-deposu-ruhsati": {
    title: "Veterinary Pharmaceutical Warehouse License",
    issuer:
      "Republic of Türkiye, Malatya Governorship Provincial Directorate of Food, Agriculture and Livestock",
    detail: "License No: 44/01 · 24.05.2018",
  },
  "saticilik-bayilik-izin-belgesi": {
    title: "Dealership Permit",
    issuer:
      "Republic of Türkiye, Malatya Governorship Provincial Police Directorate",
    detail: "Dealership permit under Law No. 2521",
  },
  "marka-tescili": {
    title: "Trademark Registration Certificate",
    issuer: "Turkish Patent Institute",
    detail: "Classes 05, 10 and 44 · 17.08.2009",
  },
};

function applyCopy<T extends Record<string, unknown>>(
  item: T,
  copy: TextFields | undefined,
): T {
  if (!copy) return item;
  return {
    ...item,
    ...(copy.name ? { name: copy.name } : {}),
    ...(copy.shortDescription
      ? { shortDescription: copy.shortDescription }
      : {}),
    ...(copy.description ? { description: copy.description } : {}),
    ...(copy.imageAlt ? { imageAlt: copy.imageAlt } : {}),
    ...(copy.specs ? { specs: copy.specs } : {}),
    ...(copy.activeIngredient
      ? { activeIngredient: copy.activeIngredient }
      : {}),
    ...(copy.usage ? { usage: copy.usage } : {}),
  };
}

export function localizeCategories(locale: Locale): ProductCategory[] {
  if (locale !== "en") return productCategories;
  return productCategories.map((category) =>
    applyCopy(category, categoryEn[category.slug]),
  );
}

export function localizeCategory(
  category: ProductCategory,
  locale: Locale,
): ProductCategory {
  if (locale !== "en") return category;
  return applyCopy(category, categoryEn[category.slug]);
}

export function localizeCategoryName(slug: string, locale: Locale) {
  if (locale !== "en") {
    return productCategories.find((item) => item.slug === slug)?.name ?? slug;
  }
  return categoryEn[slug]?.name ?? productCategories.find((item) => item.slug === slug)?.name ?? slug;
}

export function localizeProducts(locale: Locale): Product[] {
  if (locale !== "en") return products;
  return products.map((product) => applyCopy(product, productEn[product.slug]));
}

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale !== "en") return product;
  return applyCopy(product, productEn[product.slug]);
}

export function localizeMedicineCategories(locale: Locale): MedicineCategory[] {
  if (locale !== "en") return medicineCategories;
  return medicineCategories.map((category) =>
    applyCopy(category, medicineCategoryEn[category.slug]),
  );
}

export function localizeMedicineCategory(
  category: MedicineCategory,
  locale: Locale,
): MedicineCategory {
  if (locale !== "en") return category;
  return applyCopy(category, medicineCategoryEn[category.slug]);
}

export function localizeMedicines(locale: Locale): Medicine[] {
  if (locale !== "en") return medicines;
  return medicines.map((medicine) =>
    applyCopy(medicine, medicineEn[medicine.slug]),
  );
}

export function localizeMedicine(medicine: Medicine, locale: Locale): Medicine {
  if (locale !== "en") return medicine;
  return applyCopy(medicine, medicineEn[medicine.slug]);
}

export function localizeHeroSlides(locale: Locale): HeroSlide[] {
  if (locale !== "en") return heroSlides;
  return heroSlides.map((slide) => {
    const copy = heroEn[slide.id];
    if (!copy) return slide;
    return {
      ...slide,
      eyebrow: copy.eyebrow,
      title: copy.title,
      description: copy.description,
      alt: copy.alt,
      highlight: copy.highlight,
      primaryCta: {
        ...slide.primaryCta,
        label: copy.primaryCta ?? slide.primaryCta.label,
      },
      secondaryCta: slide.secondaryCta
        ? {
            ...slide.secondaryCta,
            label: copy.secondaryCta ?? slide.secondaryCta.label,
          }
        : undefined,
    };
  });
}

export function localizeDocuments(locale: Locale) {
  if (locale !== "en") return [...documents];
  return documents.map((item) => {
    const copy = documentEn[item.slug];
    return copy ? { ...item, ...copy } : item;
  });
}

export const navItems = [
  { key: "nav.home" as const, href: "/" },
  { key: "nav.products" as const, href: "/urunler" },
  { key: "nav.medicines" as const, href: "/ilaclar-asilar" },
  { key: "nav.about" as const, href: "/hakkimizda" },
  { key: "nav.contact" as const, href: "/iletisim" },
];
