import type { ContactInfo, SocialLink } from "./types";

export const site = {
  name: "Vetelsan",
  legalName: "Vetelsan Veteriner Ecza Deposu",
  tagline: "Hayvan sağlığında güvenilir çözüm ortağınız",
  description:
    "Vetelsan; veteriner sağlık ürünleri, ilaçlar, aşılar, cerrahi ve medikal malzemeler ile hayvan yakalama ekipmanları sunan kurumsal bir veteriner sağlık markasıdır.",
  url: "https://www.vetelsan.com.tr",
  foundedYear: 1996,
} as const;

export const contact: ContactInfo = {
  address: "Başharık Mahallesi Gönültaş Caddesi Irmak Sokak No: 9/A Battalgazi / MALATYA",
  phones: [
    {
      label: "switchboard",
      display: "0 (422) 323 52 00",
      href: "tel:+904223235200",
    },
    {
      label: "mobile",
      display: "0 (535) 256 04 77",
      href: "tel:+905352560477",
    },
    {
      label: "mobile",
      display: "0 (539) 931 44 44",
      href: "tel:+905399314444",
    },
  ],
  fax: {
    label: "fax",
    display: "0 (342) 323 16 44",
    href: "fax:+903423231644",
  },
  email: "info@vetelsan.com.tr",
  hours: ["Pazartesi – Cuma: 08:30 – 18:00", "Cumartesi: 09:00 – 13:00"],
};

export const mapLocation = {
  query: contact.address,
  lat: 38.3387614,
  lng: 38.3160209,
  zoom: 17,
} as const;

export const socialLinks: SocialLink[] = [];

export const whatsapp = {
  display: "0 (535) 256 04 77",
  href: "https://wa.me/905352560477",
} as const;
