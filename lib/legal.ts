import type { Locale } from "./i18n/config";
import { contact, site } from "./site";

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalPage = {
  kicker: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

const tr: LegalPage = {
  kicker: "Yasal",
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Vetelsan kişisel veri işleme faaliyetleri.",
  lastUpdated: "Son güncelleme: 27 Ağustos 2026",
  intro: `${site.legalName} (“Vetelsan”, “Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda belirtilen kapsamda işlemekteyiz.`,
  sections: [
    {
      title: "Veri sorumlusu",
      body: [
        `Unvan: ${site.legalName}`,
        `Adres: ${contact.address}`,
        `E-posta: ${contact.email}`,
        `Telefon: ${contact.phones.map((phone) => phone.display).join(" / ")}`,
      ],
    },
    {
      title: "İşlenen kişisel veriler",
      body: [
        "İletişim formu aracılığıyla ad-soyad, e-posta adresi, telefon numarası, mesaj konusu ve mesaj içeriği işlenir.",
        "Telefon veya e-posta ile doğrudan iletişime geçmeniz halinde paylaştığınız kimlik ve iletişim verileri de aynı amaçlarla işlenebilir.",
        "Sitede dil tercihini hatırlamak için zorunlu bir çerez (vetelsan-locale) kullanılır. Reklam veya analitik çerezi kullanılmamaktadır.",
      ],
    },
    {
      title: "İşleme amaçları ve hukuki sebep",
      body: [
        "Verileriniz; ürün ve tedarik taleplerinizi yanıtlamak, teknik destek sağlamak, ticari iletişimi yürütmek ve yasal yükümlülükleri yerine getirmek amacıyla işlenir.",
        "Hukuki sebepler: KVKK md. 5/2-c (sözleşmenin kurulması veya ifası), md. 5/2-f (meşru menfaat) ve açık rızanız (iletişim formu onayı).",
      ],
    },
    {
      title: "Aktarım ve saklama",
      body: [
        "Verileriniz, talebinizi yerine getirmek için e-posta altyapısı sağlayıcıları gibi hizmet aldığımız iş ortaklarıyla sınırlı olarak paylaşılabilir.",
        "Kişisel veriler, işleme amacının gerektirdiği süre ve yasal saklama yükümlülükleri boyunca muhafaza edilir; süre sonunda silinir, yok edilir veya anonim hale getirilir.",
      ],
    },
    {
      title: "Haklarınız",
      body: [
        "KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.",
        `Başvurularınızı ${contact.email} adresine veya şirket adresimize yazılı olarak iletebilirsiniz.`,
      ],
    },
  ],
};

const en: LegalPage = {
  kicker: "Legal",
  title: "Personal Data Notice (KVKK)",
  description:
    "Vetelsan’s personal data processing activities under Türkiye’s Personal Data Protection Law No. 6698.",
  lastUpdated: "Last updated: 27 August 2026",
  intro: `As ${site.legalName} (“Vetelsan”, the “Company”), we process your personal data as data controller under Law No. 6698 on the Protection of Personal Data (“KVKK”), within the scope set out below.`,
  sections: [
    {
      title: "Data controller",
      body: [
        `Legal name: ${site.legalName}`,
        `Address: ${contact.address}`,
        `Email: ${contact.email}`,
        `Phone: ${contact.phones.map((phone) => phone.display).join(" / ")}`,
      ],
    },
    {
      title: "Personal data processed",
      body: [
        "Through the contact form we process your full name, email address, phone number, subject, and message content.",
        "If you contact us by phone or email, the identity and contact data you share may be processed for the same purposes.",
        "A strictly necessary cookie (vetelsan-locale) is used to remember your language preference. No advertising or analytics cookies are used.",
      ],
    },
    {
      title: "Purposes and legal basis",
      body: [
        "Your data is processed to respond to product and supply requests, provide technical support, carry out business communication, and meet legal obligations.",
        "Legal bases: KVKK Art. 5/2-c (establishment or performance of a contract), Art. 5/2-f (legitimate interest), and your explicit consent (contact form acknowledgement).",
      ],
    },
    {
      title: "Transfer and retention",
      body: [
        "Your data may be shared only as needed with service providers such as email infrastructure partners in order to fulfil your request.",
        "Personal data is retained for as long as required by the processing purpose and legal retention duties, and is then deleted, destroyed, or anonymised.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "Under Article 11 of the KVKK you may learn whether your data is processed, request information, learn whether it is used in line with its purpose, learn the third parties to whom it is transferred, request correction of incomplete or inaccurate data, request deletion or destruction, object to a result against you arising from automated analysis, and claim compensation for damage caused by unlawful processing.",
        `You may submit requests to ${contact.email} or in writing to our company address.`,
      ],
    },
  ],
};

export function getLegalPage(locale: Locale): LegalPage {
  return locale === "en" ? en : tr;
}
