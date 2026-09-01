import type { Medicine, MedicineCategory } from "./types";

export const medicineCategories: MedicineCategory[] = [
  {
    slug: "anestezik-ilaclar",
    name: "Anestezik İlaçlar",
    description:
      "Cerrahi müdahaleler ve saha yakalama operasyonlarında kullanılan kontrollü anestezi çözümleri.",
    href: "/ilaclar-asilar/anestezik-ilaclar",
    icon: "droplets",
    image: "/images/medicines/categories/anestezik-ilaclar-cover.jpg",
    imageAlt: "Anestezik enjeksiyonluk flakonlar — klinik ortamında",
    featured: true,
  },
  {
    slug: "asilar",
    name: "Aşılar",
    description:
      "Koruyucu veteriner hekimlik için aşı ve bağışıklık çözümleri.",
    href: "/ilaclar-asilar/asilar",
    icon: "shield",
    image: "/images/medicines/categories/asilar-cover.jpg",
    imageAlt: "Aşı flakonları ve vaccine ambalajları — renkli enjeksiyonluklar",
    featured: true,
  },
  {
    slug: "antibiyotikler",
    name: "Antibiyotikler",
    description:
      "Enfeksiyonlarla mücadelede kullanılan veteriner antibiyotik ürünleri.",
    href: "/ilaclar-asilar/antibiyotikler",
    icon: "pill",
    image: "/images/medicines/categories/antibiyotikler-cover.jpg",
    imageAlt: "Antibiyotik ve enjeksiyonluk ilaç şişeleri ile şırınga",
  },
  {
    slug: "paraziter-ilaclar",
    name: "Paraziter İlaçlar",
    description:
      "İç ve dış parazitlere karşı koruma sağlayan geniş spektrumlu ürünler.",
    href: "/ilaclar-asilar/paraziter-ilaclar",
    icon: "bug",
    image: "/images/medicines/categories/paraziter-ilaclar-cover.jpg",
    imageAlt: "Paraziter ilaç kutuları — büyükbaş, küçükbaş ve kanatlı ikonları",
  },
  {
    slug: "vitaminler",
    name: "Vitaminler",
    description:
      "Bağışıklık sistemini güçlendiren ve sağlıklı gelişimi destekleyen vitamin takviyeleri.",
    href: "/ilaclar-asilar/vitaminler",
    icon: "leaf",
    image: "/images/medicines/categories/vitaminler-cover.jpg",
    imageAlt: "Veteriner vitamin ve enjeksiyonluk ürün ambalajları",
  },
  {
    slug: "diger-ilaclar",
    name: "Diğer İlaçlar",
    description:
      "Tedavi ve bakım süreçlerini destekleyen tamamlayıcı veteriner ilaçları.",
    href: "/ilaclar-asilar/diger-ilaclar",
    icon: "flask",
    image: "/images/medicines/categories/diger-ilaclar-cover.jpg",
    imageAlt: "Çeşitli veteriner ilaç şişeleri, flakonlar ve ambalajlar",
  },
];

export const medicines: Medicine[] = [
  {
    slug: "control-10",
    name: "Control %10",
    categorySlug: "anestezik-ilaclar",
    shortDescription: "Etken maddesi ksilazin %10 dur.",
    activeIngredient: "Ksilazin %10",
    usage: "Kas içi",
    description:
      "Sokak hayvanlarını ve yabani hayvanları yakalamada, kurban bayramlarında kaçan hayvanların yakalanmasında, başıboş köpeklerin ve diğer hayvanların ameliyatlarında kullanılır.\n\nVeteriner kliniklerinde, hayvanat bahçeleri gibi yerlerde en çok tercih edilen anestezi türüdür.\n\nKsilazin köpekte kusma yaratır. Bu yüzden uygulama yapılmadan 12 saat öncesinde hayvana yiyecek verilmemelidir.",
    image: "/images/medicines/vials.jpg",
  },
  {
    slug: "keta-control",
    name: "Keta Control",
    categorySlug: "anestezik-ilaclar",
    shortDescription: "Etken maddesi ketamindir.",
    activeIngredient: "Ketamin",
    usage: "Hayvanın türüne, kilosuna ve fizyolojik özelliğine göre değişken",
    description:
      "At, sığır, koyun, köpek ve kedilerde her türlü büyük ve küçük ameliyatlarda genel anestezik olarak kullanılır.\n\nTeşhis için yapılacak muayeneler ve anestezi gerektiren durumlarda güvenle kullanılabilir.\n\nUygulama yolu ve dozu hayvanın türüne, kilosuna ve fizyolojik özelliğine göre değişkenlik göstermektedir. Uygulama yapılmadan 12 saat öncesinde hayvan aç bırakılmalıdır.",
    image: "/images/medicines/products/keta-control.png",
    imageContain: true,
  },
  {
    slug: "gentavet",
    name: "Gentavet",
    categorySlug: "antibiyotikler",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi gentamisindir.",
    activeIngredient: "Gentamisin",
    usage: "Kas içi veya deri altı",
    description:
      "Sığır, at, köpek ve kedilerde solunum sistemi enfeksiyonları, ürogenital sistem enfeksiyonları (nefrit, piyelonefrit, sistit, metrit, endometrit, servisit), kolibasillosis, salmonella ve gentamisine duyarlı bakterilerin neden olduğu bakteriyemi, septisemi, yumuşak doku enfeksiyonlarında kullanılır.\n\nTedaviye ilk gün dozu ikiye bölerek, daha sonra günde bir kez olmak üzere 3 gün devam edilir. Kesinlikle doz aşımı yapılmamalıdır; özellikle zayıf ve küçük cüsseli hayvanlarda doz ayarlaması dikkatli yapılmalıdır.",
    image: "/images/medicines/products/gentavet.png",
    imageContain: true,
  },
  {
    slug: "clamoxyl-la",
    name: "Clamoxyl LA",
    categorySlug: "antibiyotikler",
    shortDescription: "Enjeksiyonluk süspansiyon. Etken maddesi amoksisilin trihidratdır.",
    activeIngredient: "Amoksisilin trihidrat",
    usage: "Kas içi veya deri altı (damar içi uygulanmaz)",
    description:
      "Sığır, koyun, köpek ve kedilerde amoksisiline duyarlı mikroorganizmalardan ileri gelen enteritis gibi sindirim sistemi enfeksiyonları, abse, tırnak, göbek enfeksiyonlarında ve viral hastalıklar sırasında duyarlı bakteriler tarafından oluşturulan sekonder enfeksiyonların tedavisinde ve uzun etkinin gerektiği durumlarda kullanılır.\n\nGerekli olan durumlarda 48 saat sonra tekrar edilebilir.\n\nTedavi süresince ve ilaç uygulanmasından sonra sığır ve koyunlar 30 gün geçmeden kesime sevk edilmemelidir. Süt veren sığırlarda ve koyunlarda ilaç kullanımından 7 gün içinde sütler insan tüketimine sunulmamalıdır. Sütteki kalıntı süresi uzun olduğu için insan tüketimine kullanılan koyunlara uygulanması tavsiye edilmez.",
    image: "/images/medicines/products/clamoxyl-la.png",
    imageContain: true,
  },
  {
    slug: "moksidif-la",
    name: "Moksidif LA",
    categorySlug: "antibiyotikler",
    shortDescription: "Enjeksiyonluk süspansiyon. Etken maddesi amoksisilin trihidratır.",
    activeIngredient: "Amoksisilin trihidrat",
    usage: "Kas içi",
    description:
      "Sığır ve koyunlarda solunum yolu enfeksiyonları, sindirim sistemi enfeksiyonları, deri ve yumuşak doku enfeksiyonları ve ürogenital sistem enfeksiyonlarının tedavisinde kullanılır.\n\nGerekli görülen durumlarda 48 saat sonra doz tekrarı yapılabilir.\n\nTedavi süresince ve son ilaç uygulamasından sonra sığırlar ve koyunlar 16 gün geçmeden kesime gönderilmemelidir. Tedavi süresince ve son ilaç uygulamasını takiben 14 sağım (7 gün) boyunca elde edilen koyun sütleri, 6 sağım (3 gün) boyunca elde edilen inek sütleri insan tüketimine sunulmamalıdır. Sütteki kalıntı arınma süresinin uzun olması nedeniyle insan tüketimi için süt elde edilen koyunlara uygulanması tavsiye edilmez.",
    image: "/images/medicines/products/moksidif-la.png",
    imageContain: true,
  },
  {
    slug: "linco-spectin",
    name: "Linco-Spectin",
    categorySlug: "antibiyotikler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi linkomisin ve spektomisindir.",
    activeIngredient: "Linkomisin ve spektomisin",
    usage: "Kas içi (yalnızca koyunlarda)",
    description:
      "Yalnızca koyunlarda kullanılır. Linkomisin ve spektomisine duyarlı mikroorganizmalardan kaynaklanan enfeksiyonların tedavisinde kullanılır.\n\nKoyunlarda önerilen pratik doz 10 kg canlı ağırlık için 1 ml Linco-Spectin uygulanır.\n\nİlaç kalıntı süresi uygulamadan sonra koyunlarda et ve sakatat için 21 gündür. Sütleri insan tüketimi için olan koyunlarda uygulanmamalıdır.",
    image: "/images/medicines/products/linco-spectin.png",
    imageContain: true,
  },
  {
    slug: "linpectan",
    name: "Linpectan",
    categorySlug: "antibiyotikler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi linkomisin ve spektomisindir.",
    activeIngredient: "Linkomisin ve spektomisin",
    usage: "Kas içi",
    description:
      "Linkomisin ve spektomisinin ideal oranlardaki kombinasyonudur.\n\nSığır ve koyunlarda bakteriyel ve mikoplazmal pnömoniler, septisemiler, bakteriyel enteritisler, bulaşıcı agalaksi, artritis, pyeten ve ayak enfeksiyonlarının tedavisinde; köpek ve kedilerde pnömoni, bronşit, farenjit gibi solunum yolu enfeksiyonlarında, sistit, metrit gibi ürogenital sistem enfeksiyonlarında, gastro-enterit tedavisinde, yara ve abselerin tedavisinde, piyojenik ve pustuler deri enfeksiyonlarının tedavisinde; etçi tavuklarda CRD, CRD complex, airsacculitis, kanatlı pasteurellozisi, stafilokok enfeksiyonları ve koriza enfeksiyonlarının tedavisinde kullanılır.",
    image: "/images/medicines/products/linpectan.png",
    imageContain: true,
  },
  {
    slug: "synulox",
    name: "Synulox",
    categorySlug: "antibiyotikler",
    shortDescription:
      "Enjeksiyonluk süspansiyon. Amoksisilin ve klavulanik asit kombinasyonu.",
    activeIngredient:
      "35 mg klavulanik asit (potasyum klavulanat) ve 140 mg amoksisilin (amoksisilin trihidrat)",
    usage: "Kas içi veya deri altı (20 kg canlı ağırlığa 1 ml)",
    description:
      "Synulox enjeksiyonluk süspansiyon, içerdiği amoksisilin ve klavulanik asit kombinasyonu ile sığır, köpek ve kedilerde bakteriyel enfeksiyonlara karşı geniş spektrumlu bakterisidal bir aktiviteye sahiptir. Hem gram pozitif hem de gram negatif bakterilere etki eden beta laktam grubu bir antibiyotiktir.\n\nSığırlarda, köpeklerde ve kedilerde birçok enfeksiyonun sağaltımında etkili şekilde kullanılır. Kedi ve köpeklerde solunum sistemi ve idrar yolu enfeksiyonları, abseler, piyoderma, anal sakulit ve gingivitis gibi deri ve yumuşak doku enfeksiyonlarında etkilidir.\n\nUygulanmadan önce mutlaka çalkalanmalıdır.",
    image: "/images/medicines/products/synulox.png",
    imageContain: true,
  },
  {
    slug: "baytril-10",
    name: "Baytril %10",
    categorySlug: "antibiyotikler",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi enrofloksasindir.",
    activeIngredient: "Enrofloksasin",
    usage: "Kas içi veya deri altı",
    description:
      "Çözeltinin aktif maddesi enrofloksasin, florokinolon grubu antibiyotiklerden olup özellikle yüksek bakterisidal etkiye sahip antibakteriyel bir ilaçtır.\n\nDana, kuzu, koyun, köpek ve kedilerin her türlü bakteriyel ve mikoplazmal hastalıkların tedavisinde kullanılan bir antibiyotiktir.\n\nUygulama dozu hayvanın türüne, kilosuna, ağırlığına ve fizyolojik özelliklerine göre değişiklik göstermektedir.",
    image: "/images/medicines/pills.jpg",
  },
  {
    slug: "histavet",
    name: "Histavet",
    categorySlug: "antibiyotikler",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi mepiramin maleatdır.",
    activeIngredient: "Mepiramin maleat",
    usage: "Deri altı veya kas içi (0,5–1 ml / 10 kg)",
    description:
      "Histavet antihistaminik bir ilaçtır.\n\nAt, tay, kedi ve köpeklerde histaminin neden olduğu başlıca alerjik ve anaflaktik reaksiyonlar ile böyle reaksiyonlara bağlı hastalıkların sağaltımında kullanılır. Bakteri ve virüslerden ileri gelen yangıya bağlı alerjiler, böcek ve benzeri zehirli hayvan ısırmaları ve sokmaları, serum hastalığı ve anaflaksilerde kullanılır.\n\nGerekli görülmesi durumunda 6–12 saat aralıklarla aynı dozlar tekrarlanır. Çok zorunda kalınmadıkça damar içi yolla verilmesi önerilmez.",
    image: "/images/medicines/products/histavet.png",
    imageContain: true,
  },
  {
    slug: "vilmectin",
    name: "Vilmectin",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi ivermektindir.",
    activeIngredient: "İvermektin",
    usage: "Deri altı (10 ml'yi geçen dozlar ikiye bölünerek)",
    description:
      "Endo ve ektoparaziter etkinliğe sahip geniş etki spektrumlu bir müstahzardır. Sığır ve koyunlarda iç ve dış parazitlerinin mücadelesi ve kontrolünde kullanılır. Vilmectin Enjeksiyonluk Çözelti, parazitler ile mücadelede başarı ile kullanılır.\n\nTedavi süresince ve son ilaç uygulamasından sonra eti için yetiştirilen koyunlar 42 gün, sığırlar 35 gün geçmeden kesime gönderilmemelidir. İnsan tüketimi için süt elde edilmekte olan sağmal inek ve koyunlarda kullanılmamalıdır.",
    image: "/images/medicines/products/vilmectin.png",
    imageContain: true,
  },
  {
    slug: "dectomax",
    name: "Dectomax",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi doramektindir.",
    activeIngredient: "Doramektin",
    usage: "Deri altı veya kas içi",
    description:
      "Dectomax sığır ve koyunlarda geniş spektrumlu etki gösteren bir endektozittir.\n\nSığırlarda mide bağırsak kıl kurtları, akciğer kıl kurtları, göz nematodları, doku kurdu, emici bitler, uyuz etkenleri, burgu kurdu, tek konaklı keneler, boynuz kurdu gibi parazitlere karşı etkilidir.\n\nKoyunlarda ise mide bağırsak kıl kurtları, akciğer kıl kurtları, uyuz etkenleri, ısırıcı bitler, tek konaklı keneler gibi nematod ve artropodlara karşı etkilidir.",
    image: "/images/medicines/products/dectomax.png",
    imageContain: true,
  },
  {
    slug: "teniacid",
    name: "Teniacid",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi prazikuanteldir.",
    activeIngredient: "Prazikuantel",
    usage: "Deri altı veya kas içi (0,1 ml / kg)",
    description:
      "Köpek ve kedilerde Echinococcus granulosus, E. multilocularis, Dipylidium caninum gibi iç parazite yol açan etkenlerin tedavisinde kullanılır.\n\nPratik doz her 1 kg vücut ağırlığı için 0,1 ml'dir.",
    image: "/images/medicines/products/teniacid.png",
    imageContain: true,
  },
  {
    slug: "advantage-multi-kedi",
    name: "Advantage Multi Kedi",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Etken maddesi imidakloprid ve moksidektindir.",
    activeIngredient: "İmidakloprid ve moksidektin",
    usage: "Ense kısmından kuyruğun başlangıcına kadar spot-on uygulama",
    description:
      "Kediler için iç ve dış parazit ilacıdır. Pire, kulak uyuzu, notoedrik uyuz, kalp kurdu, gastrointestinal nematod enfeksiyonlarının tedavisinde kullanılır.\n\nUygulama dozu için kutuyu inceleyiniz.",
    image: "/images/medicines/products/advantage-multi-kedi.png",
    imageContain: true,
  },
  {
    slug: "fiproes-kopek",
    name: "Fiproes Köpek",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Etken maddesi fipronil ve metoprendir.",
    activeIngredient: "Fipronil ve (S)-metopren",
    usage: "Ense kısmından kuyruğun başlangıcına kadar spot-on uygulama",
    description:
      "Köpekler için dış parazit ilacıdır. Pire, kene, ısırıcı bit ve pirelerin larvalarının gelişmesini ve beslenmesini engellemek amacı ile kullanılır.\n\nHayvanın ilacın uygulandığı bölgeyi yalamamasına dikkat edilmelidir.",
    image: "/images/medicines/products/fiproes-kopek.png",
    imageContain: true,
  },
  {
    slug: "tenizol-tablet",
    name: "Tenizol Tablet",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Etken maddesi prazikuantel ve fenbendazoldur.",
    activeIngredient: "Prazikuantel ve fenbendazol",
    usage: "Oral (10 kg canlı ağırlık için 1 tablet)",
    description:
      "Köpek ve kedilerde iç parazit hapıdır. Askaritler, kancalı kurtlar, kamçılı kurtlar ve şeritlerde etkilidir.\n\nKöpek ve kedilerde yiyeceğe kırılarak veya karıştırılarak verilebilir.",
    image: "/images/medicines/products/tenizol-tablet.png",
    imageContain: true,
  },
  {
    slug: "prenova-tablet",
    name: "Prenova Tablet",
    categorySlug: "paraziter-ilaclar",
    shortDescription: "Etken maddesi prazikuantel ve ivermektindir.",
    activeIngredient: "Prazikuantel ve ivermektin",
    usage: "Oral (dilin kaidesine bırakılarak, bol su ile)",
    description:
      "PRENOVA Oral Tablet; koyunlarda mide, bağırsak ve akciğer kılkurtları, burun kurdu gibi iç ve dış parazit invazyonlarının etkili bir şekilde sağaltımında kullanılmak üzere hazırlanmış bir kombinasyondur.\n\nKoyunlarda ve kuzularda ağızdan; tabletler elle veya tablet aparatı ile dilin kaidesine bırakılarak bol su ile yutturulur.",
    image: "/images/medicines/products/prenova-tablet.png",
    imageContain: true,
  },
  {
    slug: "vital-c",
    name: "Vital-C",
    categorySlug: "vitaminler",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi askorbik asittir.",
    activeIngredient: "Askorbik asit (Vitamin C)",
    usage: "Ven içi, kas içi ve damar yolu",
    description:
      "VITAL-C Enjeksiyonluk Çözelti, evcil hayvanlarda askorbik asit (vitamin C) eksikliğinden kaynaklanan hastalıkların tedavisinde ve bu hastalıklara karşı koruyucu olarak kullanılır. Her türlü stres oluşturan durumlar (yüksek efor, ileri gebelik, aşırı sıcaklık, nakiller); muhtelif enfeksiyöz hastalıklar ve nekahat dönemlerinde asıl tedaviye destekleyici olarak; gelişme, beslenme ve adaptasyon sorunlarında, anemiler, hipokalsemi, mikotoksikozisler ve zehirlenme olgularında klinik ve destekleyici tedavi olarak kullanılır.",
    image: "/images/medicines/products/vital-c.png",
    imageContain: true,
  },
  {
    slug: "tekno-c",
    name: "Tekno-C",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi sodyum askorbat (C vitamini) dir.",
    activeIngredient: "Sodyum askorbat (C vitamini)",
    usage: "Kas içi ve damar içi",
    description:
      "Tüm evcil hayvanlarda C vitamini ihtiyacının karşılanması ve eksikliklerinin giderilmesi durumlarında kullanılır. Anemilerde, gastrointestinal sistem ve solunum sistemi enfeksiyonlarının sağaltımında destekleyici olarak, her türlü stres hallerinde, bağışıklık sisteminin desteklenmesinde, diş eti kanaması ve yangılarında, burun kanamalarında, deri hastalıklarında yaraların iyileşmesinde, kalsiyum metabolizması bozukluğu ile seyreden hastalık hallerinde kullanılır.",
    image: "/images/medicines/products/tekno-c.png",
    imageContain: true,
  },
  {
    slug: "hemadur-k",
    name: "Hemadur-K",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi vitamin K-1 (Phytonadione) dir.",
    activeIngredient: "Vitamin K-1 (Phytonadione, Phytomenadione)",
    usage: "Kas içi veya deri altı",
    description:
      "Sığır, at, domuz, koyun, keçi, köpek ve kedilerde; akut kanamalar, postpartum kanamalar, meme dokusunun kılcal kanamaları, operasyon sonrası kanamalar, vitamin K sentezini engelleyen haller (karaciğer bozuklukları, safra sentezi veya akışının engellendiği durumlar, ishal ile seyreden sindirim sistemi hastalıkları ve sindirim sistemi bakteri popülasyonunu olumsuz etkileyen kemoterapi uygulamaları), vitamin K antagonistleri ile zehirlenmeler, yılan sokmaları, bozuk veya küflü yonca yenilmesi ile alınan kumarin türevi maddelerden kaynaklanan iç kanamalarda kanamanın durdurulması amacıyla kullanılır.",
    image: "/images/medicines/products/hemadur-k.png",
    imageContain: true,
  },
  {
    slug: "fitadinon-k",
    name: "Fitadinon-K",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi vitamin K-1 (Fitadinon) dir.",
    activeIngredient: "Vitamin K-1 (Fitadinon)",
    usage: "Kas içi veya deri altı (damar içi kesinlikle verilmez)",
    description:
      "Hemostatik amaçla kullanılır. Sığır, at, koyun, keçi, köpek ve kedilerde akut kanamalar, postpartum kanamalar, meme dokusunun kılcal kanamaları, operasyon sonrası kanamalar, vitamin K sentezini engelleyen haller (karaciğer bozuklukları, safra sentezi veya akışının engellendiği durumlar) kullanılır. Damar içi kullanımın kaçınılmaz olduğu durumlarda ilaç çok yavaş bir şekilde enjekte edilmelidir.",
    image: "/images/medicines/products/fitadinon-k.png",
    imageContain: true,
  },
  {
    slug: "bekombin",
    name: "Bekombin",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. B1, B2, B6, B12 vitaminleri, nikotinik asit ve pantotenik asit kombinasyonu.",
    activeIngredient:
      "B1, B2, B6, B12 vitaminleri, nikotinik asit ve pantotenik asit enjeksiyonluk tuzları",
    usage: "Kas içi, damar içi ve deri altı",
    description:
      "Genel olarak bütün hayvan türlerinde genel durgunluk ve depresyon halleri, formülasyonda adı geçen etkin maddelerin eksikliği veya yokluğundan ileri gelen gelişme geriliği, anemi, bitkinlik, nekahat ve stres halleri, kas zafiyeti, hareket bozuklukları, tutuk yürüyüş, ataksi, parezis, kramplar, konvülsiyonlar, polinöritis gibi durumlarda, yemlerden veya yanlış yemlemeden kaynaklandığı tahmin edilen sinirsel bozukluklar, hareket bozuklukları ve sindirim bozuklukları (atoni, spazm, konstipasyon, ishal vb.), görme bozuklukları, katarakt ve oral antibakteriyel uygulamalarda vitamin takviyesi amacıyla kullanılır.",
    image: "/images/medicines/products/bekombin.png",
    imageContain: true,
  },
  {
    slug: "berovit-b12",
    name: "Berovit B12",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. B kompleks vitaminleri içeren formülasyon.",
    activeIngredient: "Vitamin B1, B2, B6, B12, nikotinamid ve D-pantenol",
    usage: "Deri altı veya kas içi; bazı durumlarda içme suyuna damlatılarak",
    description:
      "Berovit B12'nin bileşiminde B kompleks vitaminleri yer alır. Gıdaya bağlı sindirim yetersizliklerinde, enfeksiyöz hastalıkların seyri sırasında ortaya çıkan indigesyonlarda, iştahsızlık, gelişmede yavaşlama, sindirim sistemi florasının bozulmasına neden olan antibakteriyel uygulamalarda, paraziter salgınlarda asıl tedaviye destekleyici olarak, formülasyondaki vitaminlerin eksikliğinden kaynaklanan deri, kas ve sinir hastalıklarında ve çeşitli stres durumlarında kullanılır.",
    image: "/images/medicines/products/berovit-b12.png",
    imageContain: true,
  },
  {
    slug: "ascorvet",
    name: "Ascorvet",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. Etken maddesi askorbik asit (Vitamin C) dir.",
    activeIngredient: "Askorbik asit (Vitamin C)",
    usage: "Kas içi ve deri altı; gerekli görüldüğünde damar içi",
    description:
      "C vitamini olarak bilinen askorbik asit, gelişmiş canlılarda sağlıklı yaşamın sürdürülmesi, büyüme, gelişme ve optimum verimlilik için kesinlikle gerekli olan mikro besinlerden biridir. Evcil hayvanlarda Vitamin C desteğinin sağlanması, C vitamini eksikliğinden kaynaklanan ya da vitamin C gereksinimini arttıran hastalıkların tedavi ve korumasında kullanılır. Aşırı sıcaklık, ileri gebelik, yarışlar ve fazla efor gerektiren yorucu binek ve yarış atı eğitimleri gibi stres yaratıcı durumlarda; çeşitli enfeksiyon hastalıkları ve nekahat dönemlerinde asıl tedaviye destekleyici olarak, gelişme, beslenme ve adaptasyon bozuklukları durumlarında; anemiler, kanamalı hastalıklar, gastro-enteritisler, dana humması, hipokalsemiler, mikotoksikozisler ve diğer zehirlenme olgularının klinik ve destekleyici sağaltımı başlıca endikasyonlarını oluşturur.",
    image: "/images/medicines/products/ascorvet.png",
    imageContain: true,
  },
  {
    slug: "metabolase",
    name: "Metabolase",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. L-karnitin, B vitaminleri, amino asitler ve şekerler içerir.",
    activeIngredient:
      "L-karnitin hidroklorit, tioktik asit, piridoksin klorhidrat, siyanokobalamin, amino asitler, fruktoz, sorbitol",
    usage: "Kas içi, damar içi veya deri altı",
    description:
      "Metabolase L-karnitin, B grubu vitaminleri, amino asitler ve şekerleri içeren damar içi, deri altı ve periton içi büyük hacimlerde kullanılabilen enjeksiyonluk bir üründür. Ürün içerisindeki aktif maddeler toksikozis, yorgunluk veya stres sonucu meydana gelen katabolitlerin atılımı veya inhibe edilmesi için gerekli olan metabolik yolların aktivatörü olmaları esasına göre seçilmiştir. Sığır, manda, at, koyun, keçi, tavşan, kedi ve köpeklerde vücudun direncinin düştüğü, uzun süreli aşırı aktivite, yüksek verim, stres, hastalık sonrası nekahat dönemi gibi durumlarda protein, karbonhidrat ve lipid metabolizmasını düzenleyen, hepatosit ve kas hücrelerini yeniden aktive etmek suretiyle yorgunluk önleyici ve toksinlerden arındırıcı olarak kullanılır.",
    image: "/images/medicines/products/metabolase.png",
    imageContain: true,
  },
  {
    slug: "nervit",
    name: "Nervit",
    categorySlug: "vitaminler",
    shortDescription:
      "Kompoze enjeksiyonluk çözelti. Etken maddesi B1 ve B6 vitaminleridir.",
    activeIngredient: "B1 ve B6 vitaminleri",
    usage: "Kas içi, damar içi veya deri altı",
    description:
      "Sığır, at, koyun, keçi, kedi ve köpeklerde B1 ve B6 vitaminlerinin eksikliğinden kaynaklanan durumlarda endikedir. Eğrelti otu gibi tiaminaz enzimi içeren bitkilerle zehirlenmeler, çiğ balıkla beslenme ve amprolyum uygulamaları da antagonizma nedeniyle B1 vitamini noksanlığında, B1 ve B6 vitamin eksikliğine bağlı olarak ortaya çıkan duyarlık artışı, ışığa duyarlılık, iştah kaybı, gelişme yavaşlaması veya durması, kuru kepekli dermatit, kıl dökülmesi, lens bozuklukları, korneada vaskülarizasyon ve katarakt, yürüyüş bozuklukları, ataksi, epileptik kramplar, pareziler, genel zayıflık, periferik sinirlerde miyelin kaybı, mikrositer veya hipokromik anemi, kusma, yutma güçlüğü, rezorbsiyon bozuklukları ve sindirim sistemi mukozası bozukluğuna bağlı diyarelerde destek olarak, poliensefalomalazi oluşturan hastalıklar, rumen asidozu ve alkolozu, gastrointestinal sisteme bağlı bozukluk ve enfeksiyonların tedavisinde destek amaçlı kullanılır.",
    image: "/images/medicines/products/nervit.png",
    imageContain: true,
  },
  {
    slug: "duphalyte",
    name: "Duphalyte",
    categorySlug: "vitaminler",
    shortDescription:
      "Enjeksiyonluk çözelti. B vitaminleri, elektrolitler ve amino asitler içerir.",
    activeIngredient: "B vitaminleri, elektrolitler, amino asitler ve besinsel elemanlar",
    usage:
      "Atlar: yavaş IV; inek/domuz: yavaş IV, intraperitoneal veya subkutan; köpek/kedi: yavaş IV veya subkutan",
    description:
      "Duphalyte vitamin, elektrolit, amino asit ve dekstrozdan ibaret steril izotonik bir çözeltidir. Enerji sağlayabilmek için dekstroz, vücut tuzlarını ikame edebilmek için elektrolit ve enzim şekillenmesini sağlayabilmek için B vitaminleri kapsar. Bileşik bozulmuş olan metabolizmanın normale dönmesine yardımcı olur. Hayvanlarda sıvı kaybı, elektrolit dengesizliği ve hipoproteinemide kullanılıp, iştahsızlık, şiddetli ishal, ameliyat, kan kaybı, aşırı terleme, vasküler sok, bitkinlik, kilo kaybı, kusma, ateş, sindirim sisteminin yangısı, enterit ve nekahat devresinde destekleyici olarak uygulanır. İntravenöz enjeksiyonlar çok yavaş yapılmalıdır. Aseptik şartlara uyulmalıdır.",
    image: "/images/medicines/products/duphalyte.png",
    imageContain: true,
  },
  {
    slug: "biocan-r",
    name: "Biocan R",
    categorySlug: "asilar",
    shortDescription: "Kuduz aşısı. Etken madde: inaktif kuduz virüsü (2–4 IU).",
    activeIngredient: "Inaktif kuduz virüsü (2–4 IU)",
    usage: "Deri altı veya kas içi (1 ml doz)",
    description:
      "Köpek, kedi ve diğer kürklü hayvanlar, sığır, at, koyun, keçi, domuz ve diğer çiftlik hayvanları için kuduza karşı aktif bağışıklık sağlamak amacıyla kullanılır.\n\nDoz yaş, ırk veya ağırlık fark etmeksizin 1 ml'dir. Deri altı için tercihen omuz kürek kemiği arasından, kas içi için tercihen kalça kasına uygulanır. Kullanmadan önce şişe iyice çalkalanmalıdır.\n\nHayvanlar 3 aylıktan itibaren aşılanmalıdır. İlk aşıdan 1 sene sonra hayvanlar tekrar aşılanmalıdır. 2 ile 8 derece arasındaki sıcaklıklarda karanlık ve kuru bir yerde muhafaza edilmelidir.",
    image: "/images/medicines/products/biocan-r.png",
    imageContain: true,
  },
  {
    slug: "nobivac-rabies",
    name: "Nobivac Rabies",
    categorySlug: "asilar",
    shortDescription: "Kuduz aşısı. Etken madde: kuduz virüsü Pasteur RIV suşu.",
    activeIngredient: "Kuduz virüsü Pasteur RIV suşu",
    usage: "Deri altı veya kas içi (tek doz)",
    description:
      "Nobivac Rabies kuduz aşısıdır. Tüm sağlıklı memeli hayvanlar için kuduz hastalığına karşı hücre kültüründe hazırlanmış, adjuvantlı, inaktif aşıdır. Yüksek derecede immunojenik bir aşı olan Nobivac Rabies kuduz hastalığına karşı en az 3 yıl süren bir bağışıklık sağlar.\n\nKedi ve köpeklerde 12 haftalıkken yapılan tek bir aşılama ile en az 3 yıl süren bağışıklık sağlanır. 12 haftalıktan küçük hayvanlarda maternal antikorlar etkinliği önleyebileceğinden 12 haftalıkken ya da daha yaşlıyken aşı tekrarlanmalıdır. Nobivac Rabies kedi ve köpekler için önerilen aşılama programının bir parçasıdır.\n\n2 ile 8 derece arası sıcaklıklarda karanlık ve kuru bir yerde muhafaza edilmelidir.",
    image: "/images/medicines/products/nobivac-rabies.png",
    imageContain: true,
  },
  {
    slug: "biocan-dhppi",
    name: "Biocan DHPPI",
    categorySlug: "asilar",
    shortDescription: "Köpek karma aşı.",
    activeIngredient:
      "Virus febris contagiosae canis min., Virus laryngotracheidis contagiosae canis min., Parvovirus enteritidis canis min., Virus parainfluenzae canis min.",
    usage: "Deri altı (1 ml doz)",
    description:
      "Köpekler için karma aşıdır. Köpeklerin gençlik hastalığı, bulaşıcı hepatit, bulaşıcı laringotrakeit, parvoviroz ve parainfluenza'ya karşı aktif immünizasyonuna yöneliktir.\n\nBiocan DHPPi aşısı tek başına veya diğer Biocan aşıları ile aynı anda önerilen aşılama çizelgesine göre veya sıvı Biocan aşıları (LR, L, C, R) ile grup olarak kullanılabilir.\n\nDoz yaş, ırk veya ağırlık fark etmeksizin 1 ml'dir. Aşı ilk olarak hayvan 6 haftalıkken yapılmalıdır. Tercihen kürek kemiğinin arkasındaki bölgeye deri altı uygulanır. 2 ile 8 derece arasındaki sıcaklıklarda karanlık ve kuru bir yerde muhafaza edilmelidir.",
    image: "/images/medicines/products/biocan-dhppi.png",
    imageContain: true,
  },
  {
    slug: "fellocell-cvr",
    name: "Fellocell CVR",
    categorySlug: "asilar",
    shortDescription: "Kedi karma aşı.",
    activeIngredient: "Feline Herpes Virus-1, Feline Calicivirus (FCV) ve Feline Parvovirus",
    usage: "Kas içi veya deri altı (steril sulandırıcı ile)",
    description:
      "Kediler için karma aşıdır. Sağlıklı kedilerin rinotrakeitis, calicivirus ve panleukopenia virus enfeksiyonlarına karşı korunmak amacı ile uygulanır.\n\nSteril sulandırıcı ile sulandırılıp kas içi veya deri altı yolla uygulanır. İlk aşılama 9 haftalık veya daha büyük kedilere 3–4 hafta ara ile 2 doz uygulanır. Yıllık tek doz aşılama tavsiye edilir. 2 ile 8 derece arasında sıcaklıklarda karanlık ve kuru bir yerde muhafaza edilmelidir.",
    image: "/images/medicines/products/fellocell-cvr.png",
    imageContain: true,
  },
  {
    slug: "biocan-m-plus",
    name: "Biocan M Plus",
    categorySlug: "asilar",
    shortDescription: "Köpek mantar aşısı. Etken madde: Microsporum canis inact.",
    activeIngredient: "Microsporum canis (inaktif)",
    usage: "Deri altı (sol/sağ taraf alternatif uygulama)",
    description:
      "Köpekler için mantar aşısıdır. Köpeklerde dermatofit Microsporum canis'in yol açtığı dermal mikozların tedavisi ve önlenmesi için kullanılır.\n\nHayvanlar 2 aylık veya daha yukarı yaşlarda aşılanmalıdır. Gerekli görüldüğü durumlarda 1 sene sonra tekrar aşı uygulanabilir. Doz yaş, ırk ve ağırlık fark etmeksizin tüm doz kullanılır. İlk aşılamada vücudun sol tarafına, diğer aşılamada sağ tarafına uygulanmalıdır.\n\nÖnleyici ve tedavi edici kullanımı vardır. Birinci ve ikinci aşılama arasında 10–21 günlük aralık olacak şekilde hayvanlar 2 kere aşılanmalıdır. 2 ile 8 derece arasındaki sıcaklıklarda karanlık ve kuru bir yerde muhafaza edilmelidir.",
    image: "/images/medicines/products/biocan-m-plus.png",
    imageContain: true,
  },
  {
    slug: "atropin-02",
    name: "Atropin %0,2",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi atropin sülfattır.",
    activeIngredient: "Atropin sülfat",
    usage: "Deri altı",
    description:
      "Sancı olgularında spazmolitik olarak; cerrahi amaçlarla yapılan anestezilerde tükürük ve bronş salgısının azaltılması ve vagovagal refleksler ile artan vagal tonusun kalp üzerindeki olumsuz etkilerinin önlenmesi amacıyla preanestezik olarak (özellikle travmalı kedi ve köpeklerde uygulanacak cerrahi anesteziden önce analjezik ilaçlarla birlikte); organik fosforlu ve karbamat grubu insektisidlerle zehirlenmelerde antidot olarak; morfin ve eserin, pilokarpin, arekolin ve kloroform zehirlenmelerinde de antidot olarak kullanılır.\n\nDoz tekrarı, atropinizasyon bulguları izlenerek ve zehirlenme belirtilerinin gerilemesine bağlı olarak yapılmalıdır.",
    image: "/images/medicines/products/atropin-02.png",
    imageContain: true,
  },
  {
    slug: "kafedif",
    name: "Kafedif",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi kafeindir.",
    activeIngredient: "Kafein",
    usage: "Deri altı",
    description:
      "Kafedif oldukça etkili bir merkezi sinir sistemi uyarıcısıdır. Başlangıçta merkezi sinir sisteminin uyarılmasından ötürü kalp atışı yavaşlasa da kısa bir zaman sonra kalp kasını uyararak kalp atışını düzenli olarak hızlandırır. Böylece kalbin gücü artar, nabız süratlenir, kan basıncı yükselir ve koroner damarlar genişlediğinden kalp daha iyi beslenir.\n\nKafedif, merkezi sinir sisteminin ve özellikle de solunum merkezinin uyarılması gereken bütün durumlarda uyarıcı olarak kullanılır.",
    image: "/images/medicines/products/kafedif.png",
    imageContain: true,
  },
  {
    slug: "doxaprol",
    name: "Doxaprol",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi doksapram HCl dir.",
    activeIngredient: "Doksapram HCl",
    usage: "Anestezi sonrası IV; yavrularda IV, deri altı veya dil altı",
    description:
      "Anestezi sonrası uyanmanın ve reflekslerin başlatılmasının hızlandırılması, merkezi sinir sisteminden kaynaklanan depresyonlarda solunumun uyarılması, yeni doğan köpek, kedi, buzağı ve kuzularda güç doğum ve sezaryen sonrası solunumun başlatılması ve desteklenmesi amacıyla kullanılır.\n\nUygulama dozu anestezi sonrası yetişkinlerde damar içi; yavru hayvanlarda ise değişkenlik göstermekle birlikte damar içi, deri altı veya dil altı yoluyla uygulanabilir.",
    image: "/images/medicines/products/doxaprol.png",
    imageContain: true,
  },
  {
    slug: "vetakort-2-mg",
    name: "Vetakort 2 mg",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi deksametazondur.",
    activeIngredient: "Deksametazon",
    usage: "Kas içi, deri altı veya damar içi",
    description:
      "At, sığır, kedi ve köpeklerde antienflamatuar ve antialerjik olarak; ödem, metabolik yangısal olaylarda, romatizmal, alerjik ve dermatolojik (egzama, kurdeşen vb.) rahatsızlıklar, akut mastitis, fürbür, yanıklar, zehirlenmeler; ayrıca operasyon öncesi ve sonrası şok önleyici olarak ve sığırlarda doğumun başlatılmasında kullanılabilir.\n\nDozlar gerekirse 24–48 saat sonra bir kez tekrarlanabilir. Tedavi süresince ve ilaç uygulanmasından sonra sığırlar 8 gün süreyle kesime gönderilmemelidir. İnek sütleri ise 3 gün süreyle insan tüketimine sunulmamalıdır. Kullanmadan önce çalkalanmalıdır.",
    image: "/images/medicines/products/vetakort-2-mg.png",
    imageContain: true,
  },
  {
    slug: "meloxicam",
    name: "Meloxicam",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi meloxicamdır.",
    activeIngredient: "Meloksikam",
    usage: "Sığırlarda deri altı veya damar içi; kedi ve köpeklerde deri altı",
    description:
      "Sığırlarda, köpek ve kedilerde ağrı kesici olarak kullanılır. Antiinflamatuar, antiromatizmal olarak kullanılır. İshallerde su kaybını azaltmak için, tendo ve tendo kılıfı yangılarında, akut ve kronik nitelikli eklem hastalıklarında ve romatizmal hastalıklarda kullanılır.",
    image: "/images/medicines/products/meloxicam.png",
    imageContain: true,
  },
  {
    slug: "theranekron",
    name: "Theranekron",
    categorySlug: "diger-ilaclar",
    shortDescription: "Enjeksiyonluk çözelti. Etken maddesi tarantula cubensisdir.",
    activeIngredient: "Tarantula cubensis",
    usage: "Deri altı",
    description:
      "Theranekron'un etkisi; yapısında bulunan Spider Venom'a bağlıdır ve bu komponent uzun süre etkilidir.\n\nYangılı ve nekrotik dokularda absorbsiyon ve demarkasyon olgularının tamamlanması için genellikle tek enjeksiyon yeterli olmakla beraber bazı durumlarda ikinci enjeksiyon yapılmasına ihtiyaç duyulabilir.\n\nAyak ve tırnak çürükleri, doğum kanalının ülser ve apseleri, şap, ektima, çiçek gibi viral hastalıklardan sonra oluşan lezyonlar başta olmak üzere, her türlü nekrotik, flojistik ve proliferatif olguların demarkasyon, absorbsiyon ve rejenerasyonunu sağlamak amacıyla kullanılır.",
    image: "/images/medicines/products/theranekron.png",
    imageContain: true,
  },
  {
    slug: "neo-kort",
    name: "Neo-Kort",
    categorySlug: "diger-ilaclar",
    shortDescription: "Göz ve kulak damlası. Etken maddesi deksametazon ve neomisin sülfattır.",
    activeIngredient: "Deksametazon ve neomisin sülfat",
    usage: "Göz ve kulak damlası (günde 2–3 defa 2–3 damla)",
    description:
      "Lokal antibakteriyel etkili NEO-KORT, geniş spektrumlu bir antibiyotik olan neomisin ile antienflamatuar etkiye sahip, sentetik bir kortikosteroid olan deksametazon sodyum fosfatın steril şartlarda hazırlanmış bir üründür. Evcil hayvanlarda bakteriyel veya alerjik nedenlerle oluşan konjuktivitis, keratokonjuktivitis, keratitis, iritis, iridocyclitis gibi göz hastalıkları ile akut ve kronik otitis eksterna, suppuratif otitis eksterna, parazit infestasyonlarından sonra oluşan otitis eksterna ve kulak dermatitlerinde kullanılır.\n\nKulağa uygulanan bir şişenin daha sonra göze uygulanması doğru değildir. Bu nedenle göz ve kulak için ayrı ambalajların kullanılması tavsiye edilir.",
    image: "/images/medicines/products/neo-kort.png",
    imageContain: true,
  },
  {
    slug: "silvezin-pomad",
    name: "Silvezin Pomad",
    categorySlug: "diger-ilaclar",
    shortDescription: "Krem. Etken maddesi silver sulfadiazindir.",
    activeIngredient: "Silver sulfadiazin",
    usage: "Yara ve lezyon üzerine ince tabaka (günde 1–2 kez)",
    description:
      "Tüm hayvanlarda duyarlı bakterilerin karıştığı her türlü deri lezyonlarında ve yaralarında, yanık yaralarında tedavi amacıyla kullanılır.\n\nGerekli şekilde temizlenmiş yara ve lezyonların üstüne ince bir tabaka halinde sürülür. Gerekirse üstüne pansuman örtülür. Günde 1–2 kere yenilenebilir.",
    image: "/images/medicines/products/silvezin-pomad.png",
    imageContain: true,
  },
  {
    slug: "promazin-oral-jel",
    name: "Promazin Oral Jel",
    categorySlug: "diger-ilaclar",
    shortDescription:
      "Etken maddesi asepromazin maleat, metil paraben ve propil parabendir.",
    activeIngredient: "Asepromazin maleat, metil paraben ve propil paraben",
    usage: "Oral",
    description:
      "Köpeklerde, kedilerde ve atlarda sakinleştirici ve pre-anestezik olarak; bir morfin türevi ile birlikte nörolept analjezi olarak; uzun yolculuklarda ortaya çıkan rahatsızlıklarda (kusma vakalarında semptomatik tedavi ve yol tutmasında) anti-emetik olarak kullanılır.",
    image: "/images/medicines/products/promazin-oral-jel.png",
    imageContain: true,
  },
  {
    slug: "rivanol-toz",
    name: "Rivanol Toz",
    categorySlug: "diger-ilaclar",
    shortDescription: "Etken maddesi ethacridin lactate'tir.",
    activeIngredient: "Ethacridin lactate",
    usage: "Solüsyon olarak harici uygulama",
    description:
      "Halk arasında sarı su olarak bilinmektedir. Toz rivanol, ciltteki mikropları öldüren ve mikropların üremesini engelleyen bir antibakteriyel ilaçtır. Ayrıca bir deri antiseptiği olarak da bilinmektedir. Enfeksiyona yol açmış olan mikropları öldürerek enfeksiyonun giderilmesi (antisepsi) için kullanılır.\n\nToz halinde direkt kullanılmaz. 1 litre saf ya da kaynatılıp soğutulmuş suya 1 gr toz rivanol atılıp iyice çalkalanarak solüsyon hazırlanır. Hazırlanmış Rivanol solüsyon deriye yüzeyden sürülerek uygulanır.",
    image: "/images/medicines/products/rivanol-toz.png",
    imageContain: true,
  },
  {
    slug: "neocaf-sprey",
    name: "Neocaf Sprey",
    categorySlug: "diger-ilaclar",
    shortDescription: "Etken maddesi ksiletraksilindir.",
    activeIngredient: "Ksiletraksilin",
    usage: "Topikal sprey (12 saatte bir tekrar)",
    description:
      "Sığırlarda ve koyunlarda deri ve ayak enfeksiyonlarına neden olan birçok Gram negatif ve Gram pozitif bakteriye karşı etkili, geniş spektrumlu bir antibiyotiktir. Sığır ve koyunlarda oksitetrasikline duyarlı mikroorganizmaların neden olduğu deri ve ayaktaki topikal enfeksiyonların tedavi ve kontrolünde kullanılır.\n\nKullanılacak bölge yıkanır ve 15–20 cm boyunca boyanana kadar sprey sıkılır. 12 saatte bir tekrarlamak tedavi açısından elzemdir. Kullanmadan önce iyice çalkalanmalıdır.",
    image: "/images/medicines/products/neocaf-sprey.png",
    imageContain: true,
  },
  {
    slug: "terramycin-deri-spreyi",
    name: "Terramycin Deri Spreyi",
    categorySlug: "diger-ilaclar",
    shortDescription: "Etken maddesi oksitetrasiklin hidroklorürdür.",
    activeIngredient: "Oksitetrasiklin hidroklorür",
    usage: "Topikal sprey (15–20 cm mesafeden)",
    description:
      "Oksitetrasikline duyarlı mikroorganizmaların neden olduğu ya da katıldığı topikal enfeksiyonların tedavi ve kontrolünde endikedir. Başlıca yaraların tedavisinde, operasyonlardan sonra, tırnakların enfeksiyöz lezyonlarında (çatal çürüğü, interdigital enfeksiyonlar, ülserler ve açık apseler) kullanılır. Spesifik endikasyon alanları koyunlarda her türlü piyeten (ayak çürüğü) olgusu ile sığırlarda footrot (panarisyum)'tur.\n\nSprey etkilenen bölgeye 15–20 cm uzaktan ve düğmeye 2–3 saniye basılarak uygulanır. Uygulama sonrası lezyonun 5 dakika süre ile hayvan tarafından yalanması önlenmelidir.",
    image: "/images/medicines/products/terramycin-deri-spreyi.png",
    imageContain: true,
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
