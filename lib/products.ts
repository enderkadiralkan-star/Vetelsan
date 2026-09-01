import { getCategoryBySlug } from "./categories";
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "enjektor-atici-tabanca",
    name: "Enjektör Atıcı Tabanca",
    categorySlug: "aticilar",
    shortDescription:
      "Kartuş kapsül basıncıyla çalışan, %70 sessiz enjektör atıcı tabanca.",
    description:
      "Kartuş içerisine koyulan kapsülün patlama basıncı ile çalışır. %70 oranında sessiz çalışır.\n\nPlastik alaşımlı özel el kundağı sayesinde hafif ve ergonomik bir tutuş ve hakimiyet sağlar. Güçlendirilmiş çelik namlu ve çelik alaşımlı gövdeye sahiptir.\n\nTamamen kendi üretimimizdir. Koruyucu kılıf ve bakım seti ile gönderilir.",
    image: "/images/products/aticilar/enjektor-atici-tabanca.png",
    gallery: [
      "/images/products/aticilar/enjektor-atici-tabanca-kit.png",
      "/images/products/aticilar/enjektor-atici-tabanca-enjektor.png",
    ],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Çalışma", value: "Kartuş kapsül patlama basıncı" },
      { label: "Ses", value: "%70 sessiz" },
      { label: "Namlu uzunluğu", value: "25 cm" },
      { label: "Ağırlık", value: "1.5 kg" },
      { label: "Atış mesafesi", value: "20 – 25 metre" },
      { label: "Gönderim", value: "Koruyucu kılıf ve bakım seti" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "enjektor-atici-tufek",
    name: "Enjektör Atıcı Tüfek",
    categorySlug: "aticilar",
    shortDescription:
      "Uzun çelik namlulu, 25–30 m menzilli fünyeli enjektör atıcı tüfek.",
    description:
      "Kartuş içerisine koyulan kapsülün patlama basıncı ile çalışır. %70 oranında sessiz çalışır.\n\nPlastik alaşımlı dipçik sayesinde konforlu ve ergonomik bir tutuş ve hakimiyet sağlar. Güçlendirilmiş uzun çelik namlu ve çelik alaşımlı gövdeye sahiptir; bu sayede daha uzun menzilli atışlar için idealdir.\n\nTamamen kendi üretimimizdir. Koruyucu kılıf ve bakım seti ile gönderilir.",
    image: "/images/products/aticilar/enjektor-atici-tufek.png",
    gallery: [
      "/images/products/aticilar/enjektor-atici-tufek-acik.png",
      "/images/products/aticilar/enjektor-atici-tufek-kit.png",
      "/images/products/aticilar/enjektor-atici-tufek-enjektor.png",
    ],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Çalışma", value: "Kartuş kapsül patlama basıncı" },
      { label: "Ses", value: "%70 sessiz" },
      { label: "Namlu uzunluğu", value: "50 cm" },
      { label: "Ağırlık", value: "2.3 kg" },
      { label: "Atış mesafesi", value: "25 – 30 metre" },
      { label: "Gönderim", value: "Koruyucu kılıf ve bakım seti" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "ufleme-borusu",
    name: "Üfleme Borusu",
    categorySlug: "aticilar",
    shortDescription:
      "Tamamen sessiz, alüminyum gövdeli üfleme basınçlı atıcı.",
    description:
      "Üfleme basıncı ile çalışır. Plastik ağızlıktan kullanan kişinin üflemesiyle atış yapılır. Tamamen sessiz ve güvenlidir.\n\nAlüminyum gövde ve galvaniz giydirme sayesinde oldukça hafiftir. Kullanılan enjektör, üfleme ağızlığının olduğu bölümden borunun içerisine yerleştirilir ve böylece kullanıma hazır hale gelir.\n\nTamamen kendi üretimimizdir.",
    image: "/images/products/aticilar/ufleme-borusu.png",
    gallery: ["/images/products/aticilar/ufleme-borusu-enjektor.png"],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Çalışma", value: "Üfleme basıncı" },
      { label: "Ses", value: "Tamamen sessiz" },
      { label: "Uzunluk", value: "125 cm" },
      { label: "Ağırlık", value: "300 gram" },
      { label: "Atış mesafesi", value: "10 – 15 metre" },
      { label: "Gövde", value: "Alüminyum, galvaniz giydirme" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "havali-tufek",
    name: "Havalı Tüfek",
    categorySlug: "aticilar",
    shortDescription:
      "Dürbünlü, kademeli menzil ayarlı, tamamen sessiz havalı atıcı.",
    description:
      "En uzun menzilli enjektör atıcı tüfektir. Tamamen sessizdir, bu nedenle güvenle kullanılabilir. Küçük ve büyük tüm hayvanlarda kullanılabilir.\n\nTüfek hava tankı, yanında gönderilen pompa ile doldurulur. Tek dolumda en az 80 atış yapılabilmektedir. Tüfekte 3 kademeli mesafe ayar vanası bulunur; atılacak mesafe için en ideal ayar seçilebilir.\n\nÜzerindeki dürbün sayesinde net görüş sağlar.",
    image: "/images/products/aticilar/havali-tufek.png",
    gallery: ["/images/products/aticilar/havali-tufek-2.png"],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Çalışma", value: "Hava tankı (pompa ile dolum)" },
      { label: "Ses", value: "Tamamen sessiz" },
      { label: "Namlu boyu", value: "70 cm" },
      { label: "Kapasite", value: "Tek dolumda en az 80 atış" },
      { label: "Mesafe ayarı", value: "3 kademeli vana" },
      { label: "Görüş", value: "Dürbün" },
      { label: "Kullanım", value: "Küçük ve büyük tüm hayvanlar" },
    ],
  },
  {
    slug: "funyeli-enjektor",
    name: "Fünyeli Enjektör",
    categorySlug: "enjektorler",
    shortDescription:
      "Kartuş tabanca ve tüfekle atılabilen, 2.5–3 ml ilaç hazneli fünyeli enjektör. Boş gönderilir.",
    description:
      "Arka yönlendirici vidalı kanatçık sistem, kullanım kolaylığı sağlayan kapsül ve kartuş gövdeye monte edilmiştir. Kullanım esnasında parçalanmaya ve dağılmaya dayanıklı birinci sınıf malzemeden üretilmiştir.\n\nArkada bulunan kartuşa tabancanın iğnesinin vurmasıyla ateşleme yapılır ve hedefe temas ettiğinde içerisindeki solüsyon zerk olur.\n\nİçinde ilaç yoktur; boş vaziyette gönderilir. Enjektörü alan kişinin, koyacağı ilacı göndermiş olduğumuz enjeksiyon şırıngasına (kullanacağı hayvanın cinsi, ağırlığı, boyu vb. göre ilaç dozu ayarlanır) çekerek fünyeli enjektörün ucundaki kırmızı koruyucuyu çıkarıp metal iğne ucundaki delikten fünyeli enjektörün içine basması gerekir. Böylelikle fünyeli enjektörü almış olduğunuz tabanca veya tüfeğe koyarak atış yapabilirsiniz.\n\nTamamen kendi üretimimizdir.",
    image: "/images/products/enjektorler/funyeli-enjektor.png",
    gallery: ["/images/products/enjektorler/funyeli-enjektor-2.png"],
    imageContain: true,
    featured: true,
    specs: [
      { label: "İlaç haznesi", value: "2.5 – 3 ml" },
      { label: "Gönderim", value: "İlaçsız / boş" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "uflemeli-enjektor",
    name: "Üflemeli Enjektör (Tüf Tüf Enjektörü)",
    categorySlug: "enjektorler",
    shortDescription:
      "Üfleme borusu ile atılabilen, 3.5 ml ilaç hazneli, tekrar kullanılabilir enjektör.",
    description:
      "Üfleme borusu ile atılabilmektedir. Enjektör atıcı tabanca ve tüfekte kullanılmaz.\n\nMika malzemeden yapılmış olan ve kırılmalara karşı dayanıklı malzemesi sayesinde tek kullanımlık değildir; birçok kez tekrar kullanılabilir. Arkasındaki renkli tüyler sayesinde üfleme esnasında ekstra uzağa gidebilmektedir.",
    image: "/images/products/enjektorler/uflemeli-enjektor.png",
    imageContain: true,
    featured: true,
    specs: [
      { label: "İlaç haznesi", value: "3.5 ml" },
      { label: "Kullanım", value: "Üfleme borusu ile" },
      { label: "Malzeme", value: "Mika, kırılmaya dayanıklı" },
    ],
  },
  {
    slug: "havali-tufek-enjektoru",
    name: "Havalı Tüfek Enjektörü",
    categorySlug: "enjektorler",
    shortDescription:
      "Havalı uzun menzilli tüfek için üretilmiş, 5 ml ilaç hazneli enjektör.",
    description:
      "Havalı uzun menzilli tüfek için üretilmiştir. Birinci sınıf ve kaliteli plastik malzemeden üretilmiştir; kırılmalara karşı ekstra dayanıklıdır. İğne kısmı çelik ve alüminyum karışımıdır.\n\nYalnızca havalı enjektör tüfeği ile atılabilmektedir.",
    image: "/images/products/enjektorler/havali-tufek-enjektoru.png",
    gallery: ["/images/products/enjektorler/havali-tufek-enjektoru-2.png"],
    imageContain: true,
    specs: [
      { label: "İlaç haznesi", value: "5 ml" },
      { label: "Kullanım", value: "Yalnızca havalı enjektör tüfeği" },
      { label: "Malzeme", value: "Birinci sınıf plastik gövde, çelik-alüminyum iğne" },
    ],
  },
  {
    slug: "muayene-eldiveni",
    name: "Muayene Eldiveni",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Tek kullanımlık, steril olmayan muayene eldiveni. S-M-L beden.",
    description:
      "Tek kullanımlıktır ve steril değildir. 100’lük kutularda gönderilir.\n\nHer ebatta elinize göre bedenleri vardır (S-M-L).",
    image: "/images/products/cerrahi-medikal/muayene-eldiveni.png",
    gallery: ["/images/products/cerrahi-medikal/muayene-eldiveni-2.png"],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Kullanım", value: "Tek kullanımlık" },
      { label: "Sterilite", value: "Steril değil" },
      { label: "Ambalaj", value: "100’lük kutu" },
      { label: "Beden", value: "S – M – L" },
    ],
  },
  {
    slug: "steril-cerrahi-eldiven",
    name: "Steril Cerrahi Eldiven",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Doğal kauçuk lateks, his kaybı yaşatmayan steril cerrahi eldiven.",
    description:
      "Doğal kauçuk lateksten üretilmiştir. Parmak ve avuç içi kalınlığı sayesinde his kaybı yaşamadan ve yırtılmadan kullanılabilir.\n\nÖzel formüle edilmiş yumuşak dış yüzeyi, uzun süreli kullanımda el yorgunluğunu azaltır. Bilekliklerinin kıvrımlı ve uzun konçlu olması, ameliyat önlük kol manşetlerinde gevşeme ve kaymayı engeller.\n\nBu sayede cerrahi müdahaleler sırasında maksimum konfor ve güvenlik sağlanır.",
    image: "/images/products/cerrahi-medikal/steril-cerrahi-eldiven.png",
    gallery: ["/images/products/cerrahi-medikal/steril-cerrahi-eldiven-2.png"],
    imageContain: true,
    specs: [
      { label: "Malzeme", value: "Doğal kauçuk lateks" },
      { label: "Sterilite", value: "Steril" },
      { label: "Konç", value: "Kıvrımlı, uzun" },
      { label: "Kullanım", value: "Cerrahi müdahale" },
    ],
  },
  {
    slug: "steril-gaz-kompres",
    name: "Steril Gaz Kompres",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "%100 pamuk, buhar sterilizasyonlu, yüksek emicilikli gaz kompres.",
    description:
      "%100 pamuk dokusu sayesinde cildin nefes almasını sağlar. Buhar sterilizasyonu yöntemi ile steril edilmiştir.\n\nHidrofil özelliği sayesinde kanamalara karşı yüksek emiciliği vardır. Ürün tek kullanımlıktır.",
    image: "/images/products/cerrahi-medikal/steril-gaz-kompres.png",
    gallery: ["/images/products/cerrahi-medikal/steril-gaz-kompres-2.png"],
    imageContain: true,
    specs: [
      { label: "Doku", value: "%100 pamuk" },
      { label: "Sterilizasyon", value: "Buhar" },
      { label: "Özellik", value: "Hidrofil, yüksek emicilik" },
      { label: "Kullanım", value: "Tek kullanımlık" },
    ],
  },
  {
    slug: "spanc",
    name: "Spanç",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Yara temizliği ve kapatma için yumuşak, hava geçirgen spanç.",
    description:
      "Yaranın temizliği ve ardından steril kapatıcı olarak kullanılır. Yaraya yapışmayan özel yumuşak dokusu sayesinde son derece konforludur.\n\nHızlı ve yüksek emiciliği sayesinde yaranın iyileşmesi için gerekli ortamı sağlamaya yardımcı olur. Hava geçirgendir, cildin nefes almasını sağlar.",
    image: "/images/products/cerrahi-medikal/spanc.png",
    gallery: ["/images/products/cerrahi-medikal/spanc-2.png"],
    imageContain: true,
    specs: [
      { label: "Kullanım", value: "Yara temizliği ve kapatma" },
      { label: "Doku", value: "Yumuşak, yaraya yapışmaz" },
      { label: "Emicilik", value: "Hızlı ve yüksek" },
      { label: "Hava", value: "Geçirgen" },
    ],
  },
  {
    slug: "sargi-bezi",
    name: "Sargı Bezi",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "20 tel, %100 pamuklu, tekli ambalajlı sargı bezi.",
    description:
      "Ameliyat sonrasında tedavilerde, her türlü pansuman gerektiren durumlarda ve tedavi bölgesinde sabitleme amacıyla kullanılır.\n\n20 tel, %100 pamuklu dokumadan üretilmiştir. Tekli ambalaj paketlerindedir. Steril değildir.",
    image: "/images/products/cerrahi-medikal/sargi-bezi.png",
    gallery: ["/images/products/cerrahi-medikal/sargi-bezi-2.png"],
    imageContain: true,
    specs: [
      { label: "Doku", value: "20 tel, %100 pamuk" },
      { label: "Ambalaj", value: "Tekli paket" },
      { label: "Sterilite", value: "Steril değil" },
      { label: "Kullanım", value: "Pansuman ve sabitleme" },
    ],
  },
  {
    slug: "kendinden-yapiskanli-bandaj",
    name: "Kendinden Yapışkanlı Bandaj",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Kopçasız, esnek ve hava geçirgen kendinden yapışkanlı bandaj.",
    description:
      "Yara pedleri, kompresler gibi tıbbi malzemelerin hareketli bölgelere sabitlenmesinde kullanılır. Sabitlenmesi için kopça gerektirmez; kendi üzerine kolay ve sıkıca tutunur.\n\nHava geçirgendir, cilde nefes aldırır. Esnek yapısı sayesinde vücut kıvrımlarına uyum sağlar. Tekli ambalajlardadır.",
    image: "/images/products/cerrahi-medikal/kendinden-yapiskanli-bandaj.png",
    gallery: [
      "/images/products/cerrahi-medikal/kendinden-yapiskanli-bandaj-2.png",
    ],
    imageContain: true,
    specs: [
      { label: "Sabitleme", value: "Kopçasız, kendinden yapışkanlı" },
      { label: "Yapı", value: "Esnek, hava geçirgen" },
      { label: "Ambalaj", value: "Tekli" },
    ],
  },
  {
    slug: "cerrahi-maske",
    name: "Cerrahi Maske",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "3 katlı, burun telli, nefes alması kolay cerrahi maske.",
    description:
      "3 katlıdır. Burun kısmındaki telli yapısı sayesinde kolayca ayarlama yapabilirsiniz.\n\nDaha kolay nefes alabileceğiniz bir yapıya sahiptir. Toza karşı filtreleme özelliği vardır.",
    image: "/images/products/cerrahi-medikal/cerrahi-maske-2.png",
    gallery: ["/images/products/cerrahi-medikal/cerrahi-maske.png"],
    imageContain: true,
    specs: [
      { label: "Katman", value: "3 katlı" },
      { label: "Burun", value: "Ayarlanabilir tel" },
      { label: "Filtre", value: "Toz karşıtı" },
    ],
  },
  {
    slug: "ameliyat-onlugu",
    name: "Ameliyat Önlüğü",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Tek kullanımlık, 45 g hafif, lastikli bilekli ameliyat önlüğü.",
    description:
      "Tüm cerrahi operasyonlarda kullanımı uygundur. Tek kullanımlıktır.\n\n45 gramlık ağırlığıyla oldukça hafif ve kullanışlıdır. El bileklerinin lastikli olması sayesinde operasyon sırasında rahatlık ve konfor sağlar.",
    image: "/images/products/cerrahi-medikal/ameliyat-onlugu.png",
    imageContain: true,
    specs: [
      { label: "Kullanım", value: "Tek kullanımlık" },
      { label: "Ağırlık", value: "45 gram" },
      { label: "Bilek", value: "Lastikli" },
    ],
  },
  {
    slug: "portegu",
    name: "Portegü",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Dikiş atma işlemleri için kilit mekanizmalı cerrahi portegü.",
    description:
      "Portegü ve çeşitleri, yapılacak olan ameliyatlarda veya küçük pansumanlarda dikiş atma işlemleri için kullanılan bir cerrahi el aletidir. Uç kısımlarında bulunan kilit mekanizması sayesinde iğne tam bir şekilde tutulabilir; dikiş atma işlemleri kolaylıkla yapılabilir.\n\nPortegülerin farklı çeşidi vardır. Ele ve avuç kısmına tam oturan yapısından dolayı işlemlerde pratiklik sağlar.",
    image: "/images/products/cerrahi-medikal/portegu.png",
    gallery: ["/images/products/cerrahi-medikal/portegu-2.png"],
    imageContain: true,
    specs: [
      { label: "Kullanım", value: "Dikiş atma" },
      { label: "Özellik", value: "Uç kilit mekanizması" },
      { label: "Çeşit", value: "Farklı modeller mevcut" },
    ],
  },
  {
    slug: "veteriner-makas",
    name: "Veteriner Makas",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Paslanmaz çelik, elde kolay kavranan veteriner makas.",
    description:
      "Paslanmaz çelikten üretilmiştir. Elde kolay kavranan yapısıyla rahat bir kullanım sağlar.\n\nÇeşitleri mevcuttur.",
    image: "/images/products/cerrahi-medikal/veteriner-makas.png",
    gallery: ["/images/products/cerrahi-medikal/veteriner-makas-2.png"],
    imageContain: true,
    specs: [
      { label: "Malzeme", value: "Paslanmaz çelik" },
      { label: "Kullanım", value: "Ergonomik tutuş" },
      { label: "Çeşit", value: "Farklı modeller mevcut" },
    ],
  },
  {
    slug: "hemostatik-pens",
    name: "Hemostatik Pens",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Operasyon sırasında kan durdurmaya yardımcı hemostatik pens.",
    description:
      "Hemostatik pens, ameliyatlar sırasında kullanılan bir cerrahi alettir. Cerrahi operasyonlarda kanı durdurmaya yardımcı olur ve gerekli müdahalelerde kullanılır.\n\nElle kullanımı yapıldığından ergonomik yapıya sahiptir ve rahat bir kullanım sunar. Farklı çeşit ve boyutları mevcuttur.",
    image: "/images/products/cerrahi-medikal/hemostatik-pens.png",
    gallery: ["/images/products/cerrahi-medikal/hemostatik-pens-2.png"],
    imageContain: true,
    specs: [
      { label: "Kullanım", value: "Kan durdurma / cerrahi müdahale" },
      { label: "Yapı", value: "Ergonomik el aleti" },
      { label: "Çeşit", value: "Farklı boyut ve modeller" },
    ],
  },
  {
    slug: "bisturi-sapi-ucu",
    name: "Bisturi Sapı & Ucu",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Değiştirilebilir uçlu, ergonomik cerrahi bisturi sapı.",
    description:
      "Cerrahi operasyonlar sırasında müdahale için kesik atmaya yarayan bir cerrahi alettir. Özel yapısı sayesinde ameliyat esnasında yüksek performans gösterir ve operasyon cerrahına kolaylık sağlar.\n\nErgonomik yapısı sayesinde ele tam oturur. Bisturi uçları sapına takılır ve kullanıma hazır hale gelir. Farklı numaralarda bisturi ucu çeşitleri ile farklı boyut ve modeller mevcuttur.",
    image: "/images/products/cerrahi-medikal/bisturi-sapi-ucu.png",
    imageContain: true,
    specs: [
      { label: "Kullanım", value: "Cerrahi kesi" },
      { label: "Uç", value: "Sapa takılır, farklı numaralar" },
      { label: "Yapı", value: "Ergonomik sap" },
    ],
  },
  {
    slug: "cerrahi-alet-kutusu",
    name: "Cerrahi Alet Kutusu",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Paslanmaz metal, kapaklı cerrahi alet muhafaza kutusu.",
    description:
      "Cerrahi operasyon sırasında aletleri muhafaza ve korumaya yarayan kutudur. Paslanmaz metalden imal edilmiştir.\n\nKapaklı olması sayesinde güvenli bir muhafaza sağlar.",
    image: "/images/products/cerrahi-medikal/cerrahi-alet-kutusu.png",
    imageContain: true,
    specs: [
      { label: "Malzeme", value: "Paslanmaz metal" },
      { label: "Kapak", value: "Kapaklı, güvenli muhafaza" },
    ],
  },
  {
    slug: "hayvan-tasima-sedyesi",
    name: "Hayvan Taşıma Sedyesi",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "60×120 cm, antibakteriyel brandalı, sabitleme bantlı sedye.",
    description:
      "Yanlarında sabitleme bantları bulunmaktadır. Yaklaşık 5 kg ağırlığındadır ve 60 x 120 cm ölçülerindedir.\n\nBrandası antibakteriyel özellikte üretilmiştir. Elle taşınması gereken bir üründür.",
    image: "/images/products/cerrahi-medikal/hayvan-tasima-sedyesi.png",
    gallery: ["/images/products/cerrahi-medikal/hayvan-tasima-sedyesi-2.png"],
    imageContain: true,
    specs: [
      { label: "Ölçü", value: "60 x 120 cm" },
      { label: "Ağırlık", value: "5 kg" },
      { label: "Branda", value: "Antibakteriyel" },
      { label: "Taşıma", value: "Elle, sabitleme bantlı" },
    ],
  },
  {
    slug: "veteriner-muayene-masasi",
    name: "Veteriner Muayene Masası",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "Eğim ayarlı, serum askılı, dört tekerli veteriner muayene masası.",
    description:
      "Tüm cerrahi operasyon öncesi muayene etmek ve teşhis koymak amacıyla kullanılır. Paslanmaz çelik ve elektrostatik boya sayesinde operasyon sonrası kolayca yıkanıp temizlenebilir.\n\nHer iki tarafa eğim ayarı yapılabilmektedir. Serum askısı mevcuttur. İkisi frenli olmak üzere dört adet tekeri ve ip bağlama yerleri bulunur.",
    image: "/images/products/cerrahi-medikal/veteriner-muayene-masasi.png",
    gallery: [
      "/images/products/cerrahi-medikal/veteriner-muayene-masasi-2.png",
    ],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Malzeme", value: "Paslanmaz çelik, elektrostatik boya" },
      { label: "Eğim", value: "İki taraflı ayar" },
      { label: "Aksesuar", value: "Serum askısı, ip bağlama yerleri" },
      { label: "Teker", value: "4 adet, 2’si frenli" },
    ],
  },
  {
    slug: "veteriner-operasyon-masasi",
    name: "Veteriner Operasyon Masası",
    categorySlug: "cerrahi-ve-medikal",
    shortDescription:
      "304 paslanmaz, elektrik motorlu, kumandalı operasyon masası.",
    description:
      "Cerrahi operasyonlar için oldukça rahat ve kullanışlıdır. 304 kalite paslanmaz çelikten üretilmiştir. Antibakteriyel toz boya kullanılmıştır.\n\nİkisi frenli olmak üzere dört adet tekeri bulunmaktadır. Elektrik motorlu ve kumandalıdır. İki taraflı eğim ayarı vardır.",
    image: "/images/products/cerrahi-medikal/veteriner-operasyon-masasi.png",
    gallery: [
      "/images/products/cerrahi-medikal/veteriner-operasyon-masasi-2.png",
    ],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Malzeme", value: "304 paslanmaz çelik" },
      { label: "Boya", value: "Antibakteriyel toz boya" },
      { label: "Hareket", value: "Elektrik motorlu, kumandalı" },
      { label: "Eğim", value: "İki taraflı ayar" },
      { label: "Teker", value: "4 adet, 2’si frenli" },
    ],
  },
  {
    slug: "kopek-agizligi",
    name: "Köpek Ağızlığı",
    categorySlug: "diger-urunler",
    shortDescription:
      "Yakalama, rehabilitasyon ve operasyon sırasında köpeklerin ısırmasını önlemek için kullanılır. Farklı ebatları mevcuttur.",
    description:
      "Yakalama sırasında ve rehabilitasyon merkezlerinde, operasyon sırasında veya müşahade altına alınan köpeklerin ısırmasını önlemek amacıyla kullanılır.\n\nFarklı ebatları mevcuttur.",
    image: "/images/products/diger-urunler/kopek-agizligi.png",
    gallery: [
      "/images/products/diger-urunler/kopek-agizligi-2.png",
      "/images/products/diger-urunler/kopek-agizligi-3.png",
    ],
    imageContain: true,
  },
  {
    slug: "kedi-kopek-yakaligi",
    name: "Kedi-Köpek Yakalığı",
    categorySlug: "diger-urunler",
    shortDescription:
      "Operasyon veya tedavi sonrası opere edilen bölgeye ulaşmayı önler. Farklı ebatları mevcuttur.",
    description:
      "Operasyon sonrası veya tedavi sonrası kedi-köpeklerin opere edilen bölgeye ulaşmaması amacıyla kullanılır.\n\nFarklı ebatları mevcuttur.",
    image: "/images/products/diger-urunler/kedi-kopek-yakaligi.png",
    gallery: [
      "/images/products/diger-urunler/kedi-kopek-yakaligi-2.png",
      "/images/products/diger-urunler/kedi-kopek-yakaligi-3.png",
    ],
    imageContain: true,
  },
  {
    slug: "kedi-kopek-sulugu",
    name: "Kedi-Köpek Suluğu",
    categorySlug: "diger-urunler",
    shortDescription:
      "Sokak hayvanları için şamandıralı, 2 litrelik otomatik suluk. Kolay montaj.",
    description:
      "Sokakta yaşayan hayvan dostlarımızın su ihtiyaçlarını giderebilmek amacıyla üretilmiştir.\n\nŞamandıralı ve 2 litre su hacimlidir. Kolay montelenme imkânıyla her yerde kullanılabilir.",
    image: "/images/products/diger-urunler/kedi-kopek-sulugu.png",
    imageContain: true,
    specs: [
      { label: "Hacim", value: "2 litre" },
      { label: "Sistem", value: "Şamandıralı otomatik dolum" },
      { label: "Montaj", value: "Kolay montaj, saha kullanımına uygun" },
    ],
  },
  {
    slug: "kulak-kupesi",
    name: "Kulak Küpesi",
    categorySlug: "isaretleme-numaralandirma",
    shortDescription:
      "Köpek ve besi hayvanlarını işaretleme ve numaralandırma için kulak küpesi. Farklı renk ve modeller.",
    description:
      "Köpekleri ve besi hayvanlarını işaretleme ve numaralandırma işleminde kullanılır.\n\nFarklı renk ve modelleri mevcut olup, isteğinize göre logo ve numara uygulanabilir.",
    image: "/images/products/isaretleme/kulak-kupesi.png",
    imageContain: true,
    featured: true,
  },
  {
    slug: "kupe-tatbik-pensi",
    name: "Küpe Tatbik Pensi",
    categorySlug: "isaretleme-numaralandirma",
    shortDescription: "Kulak küpesi uygulama pensi.",
    description: "Kulak küpesi uygulama pensi olarak üretilmiştir.",
    image: "/images/products/isaretleme/kupe-tatbik-pensi.png",
    imageContain: true,
  },
  {
    slug: "mikrocip",
    name: "Mikroçip",
    categorySlug: "isaretleme-numaralandirma",
    shortDescription:
      "Evcil hayvan kimliklendirme için pirinç tanesi büyüklüğünde implant mikroçip.",
    description:
      "Evcil hayvanın yerini her an tespit etmek amacıyla kullanılır. Çok küçük olan mikroçip yaklaşık olarak pirinç tanesi büyüklüğündedir.\n\nHayvanın iki omuz kemiği arasına deri altına implante edilmek suretiyle kullanılır.\n\nHer çipin, bir mikroçip okuyucu kullanmak suretiyle geliştirdiği ve algıladığı tıpkı parmak izi gibi kendine ait numarası bulunmaktadır. Bu sayede hayvan ve hayvan sahibi hakkındaki ayrıntılara kolayca ulaşılabilmektedir.",
    image: "/images/products/isaretleme/mikrocip.png",
    imageContain: true,
  },
  {
    slug: "mikrocip-okuyucu",
    name: "Mikroçip Okuyucu",
    categorySlug: "isaretleme-numaralandirma",
    shortDescription:
      "Hayvana takılan mikroçipin okunması ve yerinin tespiti için okuyucu cihaz.",
    description:
      "Hayvana takılan mikroçipin okunması, yerinin tespit edilmesi ve ayrıntılı bilgi sahibi olmak amacıyla kullanılır.",
    image: "/images/products/isaretleme/mikrocip-okuyucu.png",
    imageContain: true,
  },
  {
    slug: "kedi-mamasi",
    name: "Kedi Maması",
    categorySlug: "mamalar",
    shortDescription:
      "Birinci sınıf, piyasada kabul görmüş markalardan kedi maması. Kuru ve yaş mama tedariki.",
    description:
      "Kediler için mama tedariği de firmamız tarafından karşılanmaktadır. Dilediğiniz marka ve boyutta kedi maması bulunur.\n\nSatmış olduğumuz kedi mamaları birinci sınıf ürünler ve piyasada kabul görmüş markalardır.\n\nİstediğiniz besin değerleri ve tatlarda (kuzu etli-pirinçli, somonlu, tavuklu vb.) bulunmaktadır.\n\nKediler için yaş mama da tedarik etmekteyiz.",
    image: "/images/products/mamalar/kedi-mamasi.png",
    imageContain: true,
    featured: true,
  },
  {
    slug: "kopek-mamasi",
    name: "Köpek Maması",
    categorySlug: "mamalar",
    shortDescription:
      "Birinci sınıf, piyasada kabul görmüş markalardan köpek maması. Farklı marka ve boyut seçenekleri.",
    description:
      "Köpekler için mama tedariği de firmamız tarafından karşılanmaktadır. Dilediğiniz marka ve boyutta köpek maması bulunur.\n\nSatmış olduğumuz köpek mamaları birinci sınıf ürünler ve piyasada kabul görmüş markalardır.\n\nİstediğiniz besin değerleri ve tatlarda (kuzu etli-pirinçli, somonlu, tavuklu vb.) bulunmaktadır.",
    image: "/images/products/mamalar/kopek-mamasi.png",
    imageContain: true,
  },
  {
    slug: "kopek-yakalama-aparati",
    name: "Köpek Yakalama Aparatı",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "Saldırgan köpekler için 150 cm uzunlukta, güvenli yakalama ve sevk aparatı.",
    description:
      "Köpek yakalama ve sevk amaçlı kullanılır. Yanına yaklaşılamayan ve saldırgan köpekler için uzunluğu sayesinde güvenli bir yakalama sağlar.\n\nKullanımı oldukça kolaydır. Halka, köpeğin boynuna geçirildikten sonra alttaki topun çekilmesiyle hayvan kıskaca alınır.\n\nÇelik alaşımlı, kesinlikle kırılmayan bir malzemeden üretilmiştir. Bu sayede oldukça güvenlidir.\n\nTamamen kendi üretimimizdir.",
    image: "/images/products/yakalama-aparatlari/kopek-yakalama-aparati.png",
    gallery: ["/images/products/yakalama-aparatlari/kopek-yakalama-aparati-2.png"],
    imageContain: true,
    featured: true,
    specs: [
      { label: "Uzunluk", value: "150 cm" },
      { label: "Halka genişliği", value: "70 cm" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "kedi-yakalama-filesi",
    name: "Kedi Yakalama Filesi",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "2,5 mm polyester fileli, 120 cm saplı kedi yakalama filesi. Vetelsan üretimi.",
    description:
      "Kedi yakalama amaçlı kullanılır. Sağlam ve yırtılmaz 2,5 mm polyester ipten üretilmiştir; bu sayede yakalanan kedi fileye zarar veremez.\n\nGövde kırılmaz ve esnek plastik malzemeden üretilmiştir. Kolay tutuş ve esneklik sağlar.\n\nTamamen kendi üretimimizdir.",
    image: "/images/products/yakalama-aparatlari/kedi-yakalama-filesi.png",
    gallery: ["/images/products/yakalama-aparatlari/kedi-yakalama-filesi-2.png"],
    imageContain: true,
    specs: [
      { label: "Uzunluk", value: "120 cm" },
      { label: "Halka çapı", value: "60 cm" },
      { label: "File derinliği", value: "90 cm" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "kedi-yakalama-masasi",
    name: "Kedi Yakalama Maşası",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "Ortopedik kıskaçlı ve fenerli kedi yakalama maşası. 90 ve 160 cm boy seçenekleri.",
    description:
      "Kedi yakalamak ve sevk etmek amacıyla kullanılır. Ucundaki hareket ettirilebilir ortopedik kıskaç sayesinde kediye yaklaşmadan ve kesinlikle zarar vermeden boynundan yakalanır.\n\nKıskacın hemen üstünde takılı olan fener, gece kullanımı için kolaylık sağlar.\n\nMetal gövde ile kırılma riski ortadan kalkmıştır.\n\nİki farklı boy uzunluğunda üretilmiştir.",
    image: "/images/products/yakalama-aparatlari/kedi-yakalama-masasi.png",
    imageContain: true,
    specs: [{ label: "Uzunluk", value: "90 cm – 160 cm" }],
  },
  {
    slug: "yilan-yakalama-masasi",
    name: "Yılan Yakalama Maşası",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "Fenerli, hareketli kıskaçlı yılan yakalama maşası. 90 ve 160 cm boy seçenekleri.",
    description:
      "Yılanları yakalama amacıyla kullanılır. Ucundaki hareket ettirilebilir kıskaç sayesinde yılana yaklaşmadan güvenli bir şekilde yakalama sağlanır.\n\nKıskacın hemen üstünde takılı olan fener, gece kullanımı için kolaylık sağlar.\n\nMetal gövde ile kırılma riski ortadan kalkmıştır.\n\nİki farklı boy uzunluğunda üretilmiştir.",
    image: "/images/products/yakalama-aparatlari/yilan-yakalama-masasi.png",
    imageContain: true,
    specs: [{ label: "Uzunluk", value: "90 cm – 160 cm" }],
  },
  {
    slug: "yilan-tasima-torbasi",
    name: "Yılan Taşıma Torbası",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "Yakalanan yılanların güvenli taşınması için maşa uçlu taşıma torbası.",
    description:
      "Yılan yakalama maşası veya başka bir yöntem ile yakalanmış olan yılanları bir yerden bir yere taşımak maksatlı üretilmiştir. Maşanın ucundaki torba, bir yılanın sığabileceği kadar geniş ve çıkamayacağı kadar sıkıdır.\n\nYılan torbaya koyulduktan sonra torbanın ipleri sayesinde torba burgu haline getirilir ve yılanın kaçması imkânsız hale gelir.",
    image: "/images/products/yakalama-aparatlari/yilan-tasima-torbasi.png",
    imageContain: true,
  },
  {
    slug: "kedi-tutma-eldiveni",
    name: "Kedi Tutma Eldiveni",
    categorySlug: "yakalama-aparatlari",
    shortDescription:
      "2 kat amniyet deri, dirseğe kadar uzanan kedi tutma eldiveni.",
    description:
      "Kedi yakalama ve tutma amaçlı üretilmiştir. Kedilere müdahale gereken durumlarda (yakalama, enjeksiyon, tedavi vb.) kedinin insan elini tırmalaması ve ısırması gibi zarar verici durumların önüne geçmektedir.\n\n2 kat amniyet deriden üretilmiştir. Kedinin tırnağı ve dişi kesinlikle insan eline temas etmez.\n\nDirseğin 3 cm aşağısına kadar gelir; bu sayede kollar da korunmuş olur.",
    image: "/images/products/yakalama-aparatlari/kedi-tutma-eldiveni.png",
    gallery: [
      "/images/products/yakalama-aparatlari/kedi-tutma-eldiveni-2.png",
      "/images/products/yakalama-aparatlari/kedi-tutma-eldiveni-3.png",
    ],
    imageContain: true,
  },
  {
    slug: "kopek-yakalama-kafesi",
    name: "Köpek Yakalama Kafesi",
    categorySlug: "yakalama-kafesleri",
    shortDescription:
      "Tuzaklı, katlanabilir köpek yakalama kafesi. 4–6 mm paslanmaz tel, Vetelsan üretimi.",
    description:
      "Köpeklerin yakalanması ve taşınması amacıyla üretilmiştir. Köpeğin ilgisini çeken gıda materyali kurulan kafesin içine bırakılır ve tuzaklama bölmesine basan köpek, arka kapağın kapanması ile kafesten çıkamaz hale gelir.\n\n4 mm ve 6 mm paslanmaz telden imal edilmiştir. İşlem öncesi ve sonrası katlanabilir özelliği sayesinde fazla yer kaplamaz, kolay taşıma sağlar.\n\nTamamen kendi üretimimizdir.\n\nGerektiğinde sizlerin isteği ile farklı ölçülerde imal edilmektedir.",
    image: "/images/products/yakalama-kafesleri/kopek-yakalama-kafesi.png",
    imageContain: true,
    featured: true,
    specs: [
      { label: "En", value: "50 cm" },
      { label: "Yükseklik", value: "75 cm" },
      { label: "Uzunluk", value: "120 cm" },
      { label: "Tel", value: "4 mm ve 6 mm paslanmaz" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "kedi-yakalama-kafesi",
    name: "Kedi Yakalama Kafesi",
    categorySlug: "yakalama-kafesleri",
    shortDescription:
      "Tuzaklı kedi yakalama kafesi. 2–4 mm paslanmaz tel, Vetelsan üretimi.",
    description:
      "Kedilerin yakalanması ve taşınması amacıyla üretilmiştir. Kedinin ilgisini çeken gıda materyali kurulan kafesin içine bırakılır ve tuzaklama bölmesine basan kedi, arka kapağın kapanması ile kafesten çıkamaz hale gelir.\n\n2 mm ve 4 mm paslanmaz telden imal edilmiştir.\n\nTamamen kendi üretimimizdir.\n\nGerektiğinde sizlerin isteği ile farklı ölçülerde imal edilmektedir.",
    image: "/images/products/yakalama-kafesleri/kedi-yakalama-kafesi.png",
    gallery: ["/images/products/yakalama-kafesleri/kedi-yakalama-kafesi-2.png"],
    imageContain: true,
    specs: [
      { label: "En", value: "30 cm" },
      { label: "Boy", value: "30 cm" },
      { label: "Yükseklik", value: "65 cm" },
      { label: "Tel", value: "2 mm ve 4 mm paslanmaz" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
  {
    slug: "kedi-enjeksiyon-kafesi",
    name: "Kedi Enjeksiyon (Sıkıştırma) Kafesi",
    categorySlug: "yakalama-kafesleri",
    shortDescription:
      "Kedi ve benzeri vahşi hayvanlara güvenli enjeksiyon için sıkıştırma kafesi.",
    description:
      "Kedi ve benzeri vahşi hayvanlara (vaşak, tilki vb.) rahat ve kolay bir şekilde enjeksiyon benzeri tedavileri yapmak amacıyla üretilmiştir.\n\nKedi, kafesin içindeki tepsi benzeri havuza konulduktan sonra kafes içindeki tel ileri doğru itilir ve kedi sıkıştırılır. Böylelikle enjeksiyon yapmanın zor olduğu vakalarda insana zarar verilmeden tedavi tamamlanmış olur. Kafesin telleri geniş olduğu için iğne vb. tedavi ürünleri rahatlıkla hayvana uygulanabilir.\n\nTamamen kendi üretimimizdir.\n\nGerektiğinde sizlerin isteği ile farklı ölçülerde imal edilmektedir.",
    image: "/images/products/yakalama-kafesleri/kedi-enjeksiyon-kafesi.png",
    imageContain: true,
    specs: [
      { label: "En", value: "60 cm" },
      { label: "Boy", value: "30 cm" },
      { label: "Yükseklik", value: "50 cm" },
      { label: "Üretim", value: "Vetelsan" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getProductCountByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug)
    .length;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);

  const sameCategory = products.filter(
    (product) =>
      product.slug !== slug && product.categorySlug === current.categorySlug,
  );

  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  return [
    ...sameCategory,
    ...products.filter(
      (product) =>
        product.slug !== slug && product.categorySlug !== current.categorySlug,
    ),
  ].slice(0, limit);
}

export function getProductGallery(product: Product) {
  const extras = product.gallery ?? [];
  return [product.image, ...extras.filter((src) => src !== product.image)];
}

export function getProductCategoryName(categorySlug: string) {
  return getCategoryBySlug(categorySlug)?.name ?? categorySlug;
}

export function getProductHref(product: Pick<Product, "categorySlug" | "slug">) {
  return `/urunler/${product.categorySlug}/${product.slug}`;
}
