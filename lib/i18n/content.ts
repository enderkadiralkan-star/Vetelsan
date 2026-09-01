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
    imageAlt: "Injector projector rifles, pistols and field injection systems",
  },
  "cerrahi-ve-medikal": {
    name: "Surgical & Medical",
    description:
      "Clinical equipment from examination and surgical gloves to gauze, sponges, and bandages; needle holders, scissors, forceps, and operating tables.",
    imageAlt: "Surgical instruments, operating table and clinical consumables",
  },
  "diger-urunler": {
    name: "Other Products",
    description:
      "Dog muzzles, post-treatment collars, care and transport products.",
    imageAlt: "Dog muzzles, recovery collars and care products",
  },
  enjektorler: {
    name: "Syringes",
    description:
      "Dart, blowpipe, and air-rifle syringes. Field solutions of our own manufacture.",
    imageAlt: "Dart and cartridge syringes for field injection",
  },
  "isaretleme-numaralandirma": {
    name: "Identification & Numbering",
    description:
      "Ear tags, microchips, and identification equipment for tracking stray and livestock animals.",
    imageAlt: "Ear tags, RFID reader and animal identification equipment",
  },
  mamalar: {
    name: "Pet Food",
    description:
      "Species-appropriate food and nutrition products for cats and dogs.",
    imageAlt: "Cat and dog food products — dry and wet",
  },
  "yakalama-aparatlari": {
    name: "Capture Apparatus",
    description:
      "Apparatus solutions for the safe capture and transfer of cats and dogs.",
    imageAlt: "Capture poles, nets, gloves and control equipment",
  },
  "yakalama-kafesleri": {
    name: "Capture Cages",
    description: "Portable cages and low-stress capture systems.",
    imageAlt: "Wire mesh capture cage systems in multiple sizes",
  },
};

const medicineCategoryEn: Record<string, TextFields> = {
  "anestezik-ilaclar": {
    name: "Anesthetic Medicines",
    description:
      "Controlled anesthesia solutions used in surgical procedures and field capture operations.",
    imageAlt: "Anesthetic injectable vials in a clinical setting",
  },
  asilar: {
    name: "Vaccines",
    description:
      "Vaccine and immunity solutions for preventive veterinary medicine.",
    imageAlt: "Vaccine vials and vaccine packaging with colored injectables",
  },
  antibiyotikler: {
    name: "Antibiotics",
    description:
      "Veterinary antibiotic products used in the treatment of infections.",
    imageAlt: "Antibiotic and injectable medicine bottles with syringe",
  },
  "paraziter-ilaclar": {
    name: "Parasiticides",
    description:
      "Broad-spectrum products that protect against internal and external parasites.",
    imageAlt: "Parasiticide medicine boxes with livestock and poultry icons",
  },
  vitaminler: {
    name: "Vitamins",
    description:
      "Vitamin supplements that strengthen the immune system and support healthy development.",
    imageAlt: "Veterinary vitamin and injectable product packaging",
  },
  "diger-ilaclar": {
    name: "Other Medicines",
    description:
      "Complementary veterinary medicines that support treatment and care.",
    imageAlt: "Assorted veterinary medicine bottles, vials and packaging",
  },
};

const medicineEn: Record<string, TextFields> = {
  "control-10": {
    shortDescription: "Active ingredient: xylazine 10%.",
    activeIngredient: "Xylazine 10%",
    usage: "Intramuscular",
    description:
      "Used in the capture of stray and wild animals, fleeing animals during sacrificial festivals, and surgery in stray dogs and other animals.\n\nThe most frequently preferred anesthetic in veterinary clinics, zoos and similar facilities.\n\nXylazine causes vomiting in dogs. Food must not be given for 12 hours before administration.",
  },
  "keta-control": {
    shortDescription: "Active ingredient: ketamine.",
    activeIngredient: "Ketamine",
    usage: "Varies by species, weight and physiological condition",
    description:
      "Used as a general anesthetic in horses, cattle, sheep, dogs and cats for all major and minor surgeries.\n\nCan be used safely for diagnostic examinations and conditions requiring anesthesia.\n\nRoute and dose vary according to species, weight and physiological characteristics. The animal should be fasted for 12 hours before administration.",
  },
  gentavet: {
    shortDescription: "Injectable solution. Active ingredient: gentamicin.",
    activeIngredient: "Gentamicin",
    usage: "Intramuscular or subcutaneous",
    description:
      "Used in cattle, horses, dogs and cats for respiratory infections, urogenital infections (nephritis, pyelonephritis, cystitis, metritis, endometritis, cervicitis), colibacillosis, salmonella and bacteraemia, septicaemia and soft tissue infections caused by gentamicin-sensitive bacteria.\n\nOn the first day the dose is divided in two; thereafter once daily for 3 days. Overdosing must be avoided; dose adjustment requires particular care in weak and small animals.",
  },
  "clamoxyl-la": {
    shortDescription: "Injectable suspension. Active ingredient: amoxicillin trihydrate.",
    activeIngredient: "Amoxicillin trihydrate",
    usage: "Intramuscular or subcutaneous (not intravenous)",
    description:
      "Used in cattle, sheep, dogs and cats for digestive infections such as enteritis from amoxicillin-sensitive organisms, abscesses, hoof and navel infections, and secondary bacterial infections during viral disease when prolonged action is required.\n\nMay be repeated after 48 hours if necessary. Cattle and sheep must not be slaughtered for 30 days after treatment. Milk from dairy cattle and sheep must not be used for human consumption within 7 days. Not recommended for sheep whose milk is for human consumption due to long milk withdrawal.",
  },
  "moksidif-la": {
    shortDescription: "Injectable suspension. Active ingredient: amoxicillin trihydrate.",
    activeIngredient: "Amoxicillin trihydrate",
    usage: "Intramuscular",
    description:
      "Used in cattle and sheep for respiratory, digestive, skin and soft tissue, and urogenital infections.\n\nDose may be repeated after 48 hours if necessary. Cattle and sheep must not be slaughtered for 16 days after last administration. Sheep milk for 14 milkings (7 days) and cow milk for 6 milkings (3 days) must not be used for human consumption. Not recommended for dairy sheep due to long milk withdrawal.",
  },
  "linco-spectin": {
    shortDescription: "Injectable solution. Active ingredients: lincomycin and spectinomycin.",
    activeIngredient: "Lincomycin and spectinomycin",
    usage: "Intramuscular (sheep only)",
    description:
      "For sheep only. Used for infections caused by lincomycin- and spectinomycin-sensitive organisms.\n\nPractical dose: 1 ml per 10 kg body weight in sheep.\n\nWithdrawal period: 21 days for meat and offal in sheep. Must not be used in sheep whose milk is for human consumption.",
  },
  linpectan: {
    shortDescription: "Injectable solution. Active ingredients: lincomycin and spectinomycin.",
    activeIngredient: "Lincomycin and spectinomycin",
    usage: "Intramuscular",
    description:
      "Ideal combination of lincomycin and spectinomycin. Used in cattle and sheep for bacterial and mycoplasmal pneumonia, septicaemia, bacterial enteritis, contagious agalactia, arthritis and foot infections; in dogs and cats for respiratory, urogenital, gastroenteritis, wound and abscess, and pyogenic skin infections; in broilers for CRD, airsacculitis, pasteurellosis, staphylococcal and coryza infections.",
  },
  synulox: {
    shortDescription: "Injectable suspension. Amoxicillin and clavulanic acid combination.",
    activeIngredient:
      "35 mg clavulanic acid (potassium clavulanate) and 140 mg amoxicillin (amoxicillin trihydrate)",
    usage: "Intramuscular or subcutaneous (1 ml per 20 kg body weight)",
    description:
      "Broad-spectrum bactericidal activity against bacterial infections in cattle, dogs and cats. Beta-lactam antibiotic effective against gram-positive and gram-negative bacteria.\n\nEffective for many infections in cattle, dogs and cats including respiratory and urinary infections, abscesses, pyoderma, anal sacculitis and gingivitis in dogs and cats.\n\nMust be shaken well before use.",
  },
  "baytril-10": {
    shortDescription: "Injectable solution. Active ingredient: enrofloxacin.",
    activeIngredient: "Enrofloxacin",
    usage: "Intramuscular or subcutaneous",
    description:
      "Enrofloxacin is a fluoroquinolone antibiotic with high bactericidal activity.\n\nUsed for bacterial and mycoplasmal diseases in calves, lambs, sheep, dogs and cats.\n\nDose varies according to species, weight and physiological characteristics.",
  },
  histavet: {
    shortDescription: "Injectable solution. Active ingredient: mepyramine maleate.",
    activeIngredient: "Mepyramine maleate",
    usage: "Subcutaneous or intramuscular (0.5–1 ml per 10 kg)",
    description:
      "Histavet is an antihistamine.\n\nUsed in horses, foals, cats and dogs for allergic and anaphylactic reactions and related conditions caused by histamine, including inflammatory allergies from bacteria and viruses, insect bites and stings, serum sickness and anaphylaxis.\n\nDose may be repeated at 6–12 hour intervals if necessary. Intravenous administration is not recommended unless absolutely necessary.",
  },
  vilmectin: {
    shortDescription: "Injectable solution. Active ingredient: ivermectin.",
    activeIngredient: "Ivermectin",
    usage: "Subcutaneous (doses over 10 ml split in two)",
    description:
      "Broad-spectrum endo- and ectoparasiticide. Used in cattle and sheep for control of internal and external parasites.\n\nSheep raised for meat must not be slaughtered for 42 days and cattle for 35 days after last treatment. Must not be used in dairy cattle and sheep producing milk for human consumption.",
  },
  dectomax: {
    shortDescription: "Injectable solution. Active ingredient: doramectin.",
    activeIngredient: "Doramectin",
    usage: "Subcutaneous or intramuscular",
    description:
      "Broad-spectrum endectocide in cattle and sheep.\n\nEffective in cattle against gastrointestinal and lung worms, eye nematodes, tissue worms, sucking lice, mange mites, warbles, single-host ticks and horn flies.\n\nEffective in sheep against gastrointestinal and lung worms, mange mites, biting lice, single-host ticks and other nematodes and arthropods.",
  },
  teniacid: {
    shortDescription: "Injectable solution. Active ingredient: praziquantel.",
    activeIngredient: "Praziquantel",
    usage: "Subcutaneous or intramuscular (0.1 ml per kg)",
    description:
      "Used in dogs and cats for tapeworms including Echinococcus granulosus, E. multilocularis and Dipylidium caninum.\n\nPractical dose: 0.1 ml per kg body weight.",
  },
  "advantage-multi-kedi": {
    shortDescription: "Active ingredients: imidacloprid and moxidectin.",
    activeIngredient: "Imidacloprid and moxidectin",
    usage: "Spot-on from neck to base of tail",
    description:
      "Internal and external parasiticide for cats. Used for fleas, ear mites, notoedric mange, heartworm and gastrointestinal nematode infections.\n\nSee package for dosage.",
  },
  "fiproes-kopek": {
    shortDescription: "Active ingredients: fipronil and methoprene.",
    activeIngredient: "Fipronil and (S)-methoprene",
    usage: "Spot-on from neck to base of tail",
    description:
      "External parasiticide for dogs. Used against fleas, ticks, biting lice and to prevent development and feeding of flea larvae.\n\nPrevent the animal from licking the application site.",
  },
  "tenizol-tablet": {
    shortDescription: "Active ingredients: praziquantel and fenbendazole.",
    activeIngredient: "Praziquantel and fenbendazole",
    usage: "Oral (1 tablet per 10 kg body weight)",
    description:
      "Internal parasite tablet for dogs and cats. Effective against roundworms, hookworms, whipworms and tapeworms.\n\nMay be given crushed in or mixed with food.",
  },
  "prenova-tablet": {
    shortDescription: "Active ingredients: praziquantel and ivermectin.",
    activeIngredient: "Praziquantel and ivermectin",
    usage: "Oral (placed at base of tongue with plenty of water)",
    description:
      "PRENOVA Oral Tablet is a combination for effective treatment of internal and external parasite invasions in sheep including stomach, intestinal and lung worms and nasal bots.\n\nIn sheep and lambs, tablets are given orally by hand or with a bolus gun at the base of the tongue with plenty of water.",
  },
  "vital-c": {
    shortDescription: "Injectable solution. Active ingredient: ascorbic acid.",
    activeIngredient: "Ascorbic acid (Vitamin C)",
    usage: "Intravenous, intramuscular, and intravenous route",
    description:
      "VITAL-C Injectable Solution is used in the treatment of diseases caused by ascorbic acid (vitamin C) deficiency in companion animals and as a preventive measure. Used in all stress-inducing situations (high exertion, advanced pregnancy, extreme heat, transport); as an adjunct to primary treatment in various infectious diseases and convalescence; in growth, nutrition and adaptation problems, anaemias, hypocalcaemia, mycotoxicoses and poisoning cases as clinical and supportive therapy.",
  },
  "tekno-c": {
    shortDescription: "Injectable solution. Active ingredient: sodium ascorbate.",
    activeIngredient: "Sodium ascorbate (Vitamin C)",
    usage: "Intramuscular and intravenous",
    description:
      "Used to meet vitamin C requirements and correct deficiencies in all companion animals. Supportive use in anaemias, gastrointestinal and respiratory infections, all stress states, immune support, gingival bleeding and inflammation, nosebleeds, wound healing in skin diseases, and disease states associated with calcium metabolism disorders.",
  },
  "hemadur-k": {
    shortDescription: "Injectable solution. Active ingredient: vitamin K-1.",
    activeIngredient: "Vitamin K-1 (Phytonadione, Phytomenadione)",
    usage: "Intramuscular or subcutaneous",
    description:
      "Used in cattle, horses, pigs, sheep, goats, dogs and cats for acute haemorrhages, postpartum haemorrhages, capillary bleeding of mammary tissue, postoperative haemorrhages, conditions that inhibit vitamin K synthesis, vitamin K antagonist poisoning, snake bites, and internal bleeding from coumarin derivatives in mouldy hay.",
  },
  "fitadinon-k": {
    shortDescription: "Injectable solution. Active ingredient: vitamin K-1 (Phytomenadione).",
    activeIngredient: "Vitamin K-1 (Phytomenadione)",
    usage: "Intramuscular or subcutaneous (never intravenous)",
    description:
      "Used for haemostatic purposes in cattle, horses, sheep, goats, dogs and cats for acute haemorrhages, postpartum haemorrhages, capillary bleeding of mammary tissue, postoperative haemorrhages, and conditions that inhibit vitamin K synthesis. If intravenous use is unavoidable, the product must be injected very slowly.",
  },
  bekombin: {
    shortDescription:
      "Injectable solution. Combination of B1, B2, B6, B12, nicotinic acid and pantothenic acid.",
    activeIngredient:
      "B1, B2, B6, B12 vitamins, nicotinic acid and pantothenic acid injectable salts",
    usage: "Intramuscular, intravenous and subcutaneous",
    description:
      "Used in all animal species for general lethargy and depression, growth retardation, anaemia, exhaustion, convalescence and stress, muscle weakness, movement disorders, ataxia, paresis, cramps, convulsions, polyneuritis, neurological and digestive disorders, vision disorders, cataract, and as vitamin supplementation during oral antibacterial therapy.",
  },
  "berovit-b12": {
    shortDescription: "Injectable solution. B-complex vitamin formulation.",
    activeIngredient: "Vitamins B1, B2, B6, B12, nicotinamide and D-panthenol",
    usage: "Subcutaneous or intramuscular; in some cases via drinking water",
    description:
      "Berovit B12 contains B-complex vitamins. Used in food-related digestive insufficiency, indigestion during infectious diseases, loss of appetite, slow growth, antibacterial treatments affecting gut flora, parasitic outbreaks as adjunct therapy, skin, muscle and nerve diseases from vitamin deficiency, and various stress conditions.",
  },
  ascorvet: {
    shortDescription: "Injectable solution. Active ingredient: ascorbic acid.",
    activeIngredient: "Ascorbic acid (Vitamin C)",
    usage: "Intramuscular and subcutaneous; intravenous when necessary",
    description:
      "Ascorbic acid is essential for health, growth and optimum productivity. Used for treatment and prevention of vitamin C deficiency or increased requirement in companion animals. Indications include stress (heat, pregnancy, racing), infections and convalescence, growth and adaptation disorders, anaemias, haemorrhagic diseases, gastroenteritis, hypocalcaemia, mycotoxicoses and other poisoning cases.",
  },
  metabolase: {
    shortDescription:
      "Injectable solution. Contains L-carnitine, B vitamins, amino acids and sugars.",
    activeIngredient:
      "L-carnitine hydrochloride, thioctic acid, pyridoxine hydrochloride, cyanocobalamin, amino acids, fructose, sorbitol",
    usage: "Intramuscular, intravenous or subcutaneous",
    description:
      "Metabolase is an injectable product containing L-carnitine, B-group vitamins, amino acids and sugars for intravenous, subcutaneous and intraperitoneal use in large volumes. Used in cattle, buffalo, horses, sheep, goats, rabbits, cats and dogs when resistance is low, after prolonged activity, high yield, stress or post-disease convalescence to regulate metabolism and reactivate hepatocytes and muscle cells.",
  },
  nervit: {
    shortDescription: "Composite injectable solution. Active ingredients: vitamins B1 and B6.",
    activeIngredient: "Vitamins B1 and B6",
    usage: "Intramuscular, intravenous or subcutaneous",
    description:
      "Indicated in cattle, horses, sheep, goats, cats and dogs for B1 and B6 deficiency. Supportive use in thiaminase poisoning, raw fish feeding, amprolium antagonism, neurological and digestive signs of deficiency, polioencephalomalacia, rumen acidosis and alkalosis, and gastrointestinal disorders and infections.",
  },
  duphalyte: {
    shortDescription:
      "Injectable solution. Contains B vitamins, electrolytes and amino acids.",
    activeIngredient: "B vitamins, electrolytes, amino acids and nutritional elements",
    usage:
      "Horses: slow IV; cattle/pigs: slow IV, intraperitoneal or SC; dogs/cats: slow IV or SC",
    description:
      "Duphalyte is a sterile isotonic solution of vitamins, electrolytes, amino acids and dextrose. Supports recovery of disturbed metabolism in fluid loss, electrolyte imbalance, hypoproteinaemia, anorexia, severe diarrhoea, surgery, blood loss, exhaustion, vomiting, fever, enteritis and convalescence. Intravenous injections must be given very slowly under aseptic conditions.",
  },
  "biocan-r": {
    shortDescription: "Rabies vaccine. Active ingredient: inactivated rabies virus (2–4 IU).",
    activeIngredient: "Inactivated rabies virus (2–4 IU)",
    usage: "Subcutaneous or intramuscular (1 ml dose)",
    description:
      "Active immunisation against rabies in dogs, cats and other fur-bearing animals, cattle, horses, sheep, goats, pigs and other farm animals.\n\nDose is 1 ml regardless of age, breed or weight. Preferably SC between shoulder blades or IM in hip muscle. Shake well before use.\n\nVaccinate from 3 months of age. Revaccinate 1 year after first dose. Store at 2–8 °C in a dark, dry place.",
  },
  "nobivac-rabies": {
    shortDescription: "Rabies vaccine. Active ingredient: rabies virus Pasteur RIV strain.",
    activeIngredient: "Rabies virus Pasteur RIV strain",
    usage: "Subcutaneous or intramuscular (single dose)",
    description:
      "Inactivated, adjuvanted cell-culture rabies vaccine for all healthy mammals. Provides at least 3 years immunity.\n\nSingle vaccination at 12 weeks in cats and dogs provides at least 3 years immunity. Revaccinate at or after 12 weeks if vaccinated earlier due to maternal antibodies. Part of recommended vaccination schedules for cats and dogs.\n\nStore at 2–8 °C in a dark, dry place.",
  },
  "biocan-dhppi": {
    shortDescription: "Combined dog vaccine.",
    activeIngredient:
      "Canine distemper, infectious hepatitis, laryngotracheitis, parvovirus and parainfluenza virus (min. titre)",
    usage: "Subcutaneous (1 ml dose)",
    description:
      "Combined vaccine for active immunisation of dogs against distemper, infectious hepatitis, laryngotracheitis, parvovirus and parainfluenza.\n\nMay be used alone or with other Biocan vaccines per schedule or grouped with liquid Biocan vaccines (LR, L, C, R).\n\nDose 1 ml regardless of age, breed or weight. First vaccination at 6 weeks. Preferably SC behind shoulder blade. Store at 2–8 °C in a dark, dry place.",
  },
  "fellocell-cvr": {
    shortDescription: "Combined cat vaccine.",
    activeIngredient: "Feline herpesvirus-1, feline calicivirus (FCV) and feline parvovirus",
    usage: "Intramuscular or subcutaneous (reconstituted with sterile diluent)",
    description:
      "Combined vaccine to protect healthy cats against rhinotracheitis, calicivirus and panleukopenia.\n\nReconstitute with sterile diluent and administer IM or SC. Initial course: 2 doses 3–4 weeks apart from 9 weeks of age. Annual single dose recommended. Store at 2–8 °C in a dark, dry place.",
  },
  "biocan-m-plus": {
    shortDescription: "Dog dermatophyte vaccine. Active ingredient: inactivated Microsporum canis.",
    activeIngredient: "Microsporum canis (inactivated)",
    usage: "Subcutaneous (alternate left/right side)",
    description:
      "For treatment and prevention of dermal mycoses caused by Microsporum canis in dogs.\n\nVaccinate from 2 months; may revaccinate after 1 year if needed. Full dose regardless of age, breed or weight. First dose left side, second right side.\n\nPreventive and therapeutic use. Two vaccinations 10–21 days apart. Store at 2–8 °C in a dark, dry place.",
  },
  "atropin-02": {
    shortDescription: "Injectable solution. Active ingredient: atropine sulfate.",
    activeIngredient: "Atropine sulfate",
    usage: "Subcutaneous",
    description:
      "Spasmolytic in colic; preanaesthetic to reduce salivary and bronchial secretions and prevent adverse vagal effects on the heart; antidote in organophosphate and carbamate insecticide poisoning and in morphine, eserine, pilocarpine, arecoline and chloroform poisoning.\n\nRepeat dosing should follow atropinisation signs and regression of poisoning symptoms.",
  },
  kafedif: {
    shortDescription: "Injectable solution. Active ingredient: caffeine.",
    activeIngredient: "Caffeine",
    usage: "Subcutaneous",
    description:
      "Effective central nervous system stimulant. Initially slows heart rate then stimulates cardiac muscle, increasing heart strength, pulse rate and blood pressure and improving coronary perfusion.\n\nUsed as a stimulant whenever the CNS and especially the respiratory centre require stimulation.",
  },
  doxaprol: {
    shortDescription: "Injectable solution. Active ingredient: doxapram HCl.",
    activeIngredient: "Doxapram HCl",
    usage: "Post-anaesthesia IV; in neonates IV, SC or sublingual",
    description:
      "Used to accelerate recovery and reflexes after anaesthesia, stimulate respiration in CNS depression, and initiate and support respiration in newborn puppies, kittens, calves and lambs after difficult birth or caesarean.\n\nIn adults after anaesthesia IV; in young animals IV, SC or sublingual depending on case.",
  },
  "vetakort-2-mg": {
    shortDescription: "Injectable solution. Active ingredient: dexamethasone.",
    activeIngredient: "Dexamethasone",
    usage: "Intramuscular, subcutaneous or intravenous",
    description:
      "Anti-inflammatory and antiallergic use in horses, cattle, cats and dogs for oedema, metabolic inflammatory conditions, rheumatic, allergic and dermatological disorders, acute mastitis, furunculosis, burns, poisoning; shock prophylaxis before and after surgery; may be used to initiate calving in cattle.\n\nDoses may be repeated after 24–48 hours if needed. Cattle must not be slaughtered for 8 days; milk must not be used for human consumption for 3 days. Shake before use.",
  },
  meloxicam: {
    shortDescription: "Injectable solution. Active ingredient: meloxicam.",
    activeIngredient: "Meloxicam",
    usage: "Cattle SC or IV; cats and dogs SC",
    description:
      "Analgesic in cattle, dogs and cats. Anti-inflammatory and antirheumatic use in diarrhoea to reduce fluid loss, tendon and tendon sheath inflammation, acute and chronic joint disease and rheumatic conditions.",
  },
  theranekron: {
    shortDescription: "Injectable solution. Active ingredient: Tarantula cubensis.",
    activeIngredient: "Tarantula cubensis",
    usage: "Subcutaneous",
    description:
      "Effect depends on Spider Venom component with prolonged action.\n\nUsually one injection suffices for absorption and demarcation in inflamed and necrotic tissue; a second may be needed.\n\nUsed for demarcation, absorption and regeneration in necrotic, phlegmonous and proliferative conditions including foot rot, birth canal ulcers and abscesses, and post-viral lesions.",
  },
  "neo-kort": {
    shortDescription: "Eye and ear drops. Active ingredients: dexamethasone and neomycin sulfate.",
    activeIngredient: "Dexamethasone and neomycin sulfate",
    usage: "Eye and ear drops (2–3 drops 2–3 times daily)",
    description:
      "NEO-KORT combines neomycin with dexamethasone sodium phosphate for bacterial and allergic eye conditions and otitis externa in companion animals.\n\nSeparate bottles should be used for eye and ear. Do not use the same bottle for both after ear application.",
  },
  "silvezin-pomad": {
    shortDescription: "Cream. Active ingredient: silver sulfadiazine.",
    activeIngredient: "Silver sulfadiazine",
    usage: "Thin layer on wounds (1–2 times daily)",
    description:
      "Used for skin lesions and wounds involving sensitive bacteria, including burn wounds, in all animal species.\n\nApply a thin layer to cleaned wounds; dress if needed. Renew 1–2 times daily.",
  },
  "promazin-oral-jel": {
    shortDescription:
      "Active ingredients: acepromazine maleate, methyl paraben and propyl paraben.",
    activeIngredient: "Acepromazine maleate, methyl paraben and propyl paraben",
    usage: "Oral",
    description:
      "Sedative and pre-anaesthetic in dogs, cats and horses; neuroleptanalgesia with an opioid derivative; anti-emetic for travel sickness and vomiting on long journeys.",
  },
  "rivanol-toz": {
    shortDescription: "Active ingredient: ethacridine lactate.",
    activeIngredient: "Ethacridine lactate",
    usage: "External use as prepared solution",
    description:
      "Known as yellow wound wash. Antibacterial powder and skin antiseptic for antisepsis.\n\nNot used as powder directly. Dissolve 1 g in 1 litre of boiled cooled water, shake well and apply to skin surface.",
  },
  "neocaf-sprey": {
    shortDescription: "Active ingredient: xyletracycline.",
    activeIngredient: "Xyletracycline",
    usage: "Topical spray (repeat every 12 hours)",
    description:
      "Broad-spectrum antibiotic for Gram-negative and Gram-positive bacteria causing skin and foot infections in cattle and sheep. For topical treatment and control of oxytetracycline-sensitive skin and foot infections.\n\nWash area and spray until coated from 15–20 cm. Repeat every 12 hours. Shake well before use.",
  },
  "terramycin-deri-spreyi": {
    shortDescription: "Active ingredient: oxytetracycline hydrochloride.",
    activeIngredient: "Oxytetracycline hydrochloride",
    usage: "Topical spray (15–20 cm distance)",
    description:
      "For topical infections caused by or involving oxytetracycline-sensitive organisms: wounds, postoperative care, hoof lesions, interdigital infections, ulcers and open abscesses. Specific indications include foot rot in sheep and panaritium in cattle.\n\nSpray 2–3 seconds from 15–20 cm. Prevent licking for 5 minutes after application.",
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
      "Dart syringe for cartridge pistol and rifle use, with a 2.5–3 ml chamber. Shipped empty.",
    description:
      "Features a rear guiding screw-fin system and a capsule-cartridge body mounted for ease of use. Made from first-class material resistant to shattering and breaking apart during use.\n\nFiring is triggered when the pistol needle strikes the cartridge at the rear; the solution is injected on contact with the target.\n\nShipped without medicine. The user draws the required dose into the supplied injection syringe (adjusted for species, weight, size, etc.), removes the red protector at the tip, and fills the dart through the hole at the metal needle end before loading it into the pistol or rifle.\n\nFully manufactured by us.",
    specs: [
      { label: "Medicine chamber", value: "2.5 – 3 ml" },
      { label: "Delivery", value: "Empty / without medicine" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "uflemeli-enjektor": {
    name: "Blowpipe Syringe (Tüf Tüf Syringe)",
    shortDescription:
      "Reusable blowpipe syringe with a 3.5 ml medicine chamber.",
    description:
      "Can be fired through a blowpipe. Not for use with dart pistols or rifles.\n\nMade from mica material that is resistant to breakage, so it is not single-use and can be reused many times. The colored feathers at the rear provide extra range during blowing.",
    specs: [
      { label: "Medicine chamber", value: "3.5 ml" },
      { label: "Use", value: "With blowpipe" },
      { label: "Material", value: "Mica, break-resistant" },
    ],
  },
  "havali-tufek-enjektoru": {
    name: "Air Rifle Syringe",
    shortDescription:
      "Syringe for long-range air rifles with a 5 ml medicine chamber.",
    description:
      "Designed for long-range air rifles. Made from first-class, high-quality plastic that is extra resistant to breakage. The needle section is a steel and aluminum alloy.\n\nCan only be fired with an air dart rifle.",
    specs: [
      { label: "Medicine chamber", value: "5 ml" },
      { label: "Use", value: "Air dart rifle only" },
      { label: "Material", value: "Premium plastic body, steel-aluminum needle" },
    ],
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
    shortDescription:
      "Prevents biting during capture, rehabilitation, surgery, or observation. Available in multiple sizes.",
    description:
      "Used during capture and in rehabilitation centers, during surgery, or while dogs are under observation to prevent biting.\n\nAvailable in multiple sizes.",
  },
  "kedi-kopek-yakaligi": {
    name: "Cat & Dog Recovery Collar",
    shortDescription:
      "Prevents access to treated areas after surgery or treatment. Available in multiple sizes.",
    description:
      "Used after surgery or treatment to prevent cats and dogs from reaching the operated area.\n\nAvailable in multiple sizes.",
  },
  "kedi-kopek-sulugu": {
    name: "Cat & Dog Waterer",
    shortDescription:
      "Float-valve automatic waterer with 2 L capacity for street animals. Easy to install.",
    description:
      "Designed to meet the water needs of street animals.\n\nFeatures a float valve and 2-litre capacity. Can be used anywhere thanks to easy installation.",
    specs: [
      { label: "Capacity", value: "2 litres" },
      { label: "System", value: "Float-valve automatic refill" },
      { label: "Installation", value: "Easy mounting for field use" },
    ],
  },
  "kulak-kupesi": {
    name: "Ear Tag",
    shortDescription:
      "Ear tags for marking and numbering dogs and livestock. Available in various colors and models.",
    description:
      "Used to mark and number dogs and livestock animals.\n\nAvailable in different colors and models; logos and numbers can be applied on request.",
  },
  "kupe-tatbik-pensi": {
    name: "Ear Tag Applicator",
    shortDescription: "Applicator pliers for ear tags.",
    description: "Manufactured as an ear tag application pliers.",
  },
  "mikrocip": {
    name: "Microchip",
    shortDescription:
      "Rice-grain-sized implant microchip for companion animal identification.",
    description:
      "Used to locate a companion animal at any time. The microchip is approximately the size of a grain of rice.\n\nIt is implanted under the skin between the animal’s shoulder blades.\n\nEach chip has a unique number, like a fingerprint, that is read and detected with a microchip reader, making it easy to access details about the animal and its owner.",
  },
  "mikrocip-okuyucu": {
    name: "Microchip Reader",
    shortDescription:
      "Reader device for scanning implanted microchips and locating animals.",
    description:
      "Used to read the microchip implanted in an animal, determine its location, and access detailed information.",
  },
  "kedi-mamasi": {
    name: "Cat Food",
    shortDescription:
      "First-class cat food from well-known brands. Dry and wet food supply.",
    description:
      "We also supply cat food. Cat food is available in the brand and package size you prefer.\n\nThe cat foods we sell are first-class products from brands accepted in the market.\n\nAvailable in the nutritional values and flavors you need (lamb and rice, salmon, chicken, etc.).\n\nWe also supply wet food for cats.",
  },
  "kopek-mamasi": {
    name: "Dog Food",
    shortDescription:
      "First-class dog food from well-known brands. Various brands and package sizes.",
    description:
      "We also supply dog food. Dog food is available in the brand and package size you prefer.\n\nThe dog foods we sell are first-class products from brands accepted in the market.\n\nAvailable in the nutritional values and flavors you need (lamb and rice, salmon, chicken, etc.).",
  },
  "kopek-yakalama-aparati": {
    name: "Dog Capture Pole",
    shortDescription:
      "150 cm capture and transfer pole for aggressive dogs that cannot be approached safely.",
    description:
      "Used for capturing and transferring dogs. Its length allows safe capture of dogs that cannot be approached and may be aggressive.\n\nVery easy to use: after placing the loop around the dog’s neck, pulling the ball at the bottom secures the animal in the grip.\n\nMade from a steel alloy that will not break, making it highly reliable.\n\nFully manufactured by us.",
    specs: [
      { label: "Length", value: "150 cm" },
      { label: "Loop width", value: "70 cm" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "kedi-yakalama-filesi": {
    name: "Cat Capture Net",
    shortDescription:
      "Cat capture net with 2.5 mm polyester mesh and 120 cm handle. Vetelsan manufacture.",
    description:
      "Used for capturing cats. Made from strong, tear-resistant 2.5 mm polyester cord so the captured cat cannot damage the net.\n\nThe body is made from unbreakable, flexible plastic for easy handling and flexibility.\n\nFully manufactured by us.",
    specs: [
      { label: "Length", value: "120 cm" },
      { label: "Hoop diameter", value: "60 cm" },
      { label: "Net depth", value: "90 cm" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "kedi-yakalama-masasi": {
    name: "Cat Capture Tongs",
    shortDescription:
      "Cat capture tongs with orthopedic grip and flashlight. Available in 90 and 160 cm lengths.",
    description:
      "Used to capture and transfer cats. The movable orthopedic grip at the tip allows capture by the neck without approaching the cat or causing harm.\n\nThe flashlight mounted just above the grip makes night use easier.\n\nThe metal body eliminates the risk of breakage.\n\nAvailable in two length options.",
    specs: [{ label: "Length", value: "90 cm – 160 cm" }],
  },
  "yilan-yakalama-masasi": {
    name: "Snake Capture Tongs",
    shortDescription:
      "Snake capture tongs with movable grip and flashlight. Available in 90 and 160 cm lengths.",
    description:
      "Used to capture snakes. The movable grip at the tip allows safe capture without approaching the snake.\n\nThe flashlight mounted just above the grip makes night use easier.\n\nThe metal body eliminates the risk of breakage.\n\nAvailable in two length options.",
    specs: [{ label: "Length", value: "90 cm – 160 cm" }],
  },
  "yilan-tasima-torbasi": {
    name: "Snake Transport Bag",
    shortDescription:
      "Transport bag for safely moving captured snakes, designed for use with capture tongs.",
    description:
      "Designed to transport snakes captured with snake tongs or other methods from one place to another. The bag at the end of the tongs is wide enough for a snake to fit inside and tight enough to prevent escape.\n\nAfter the snake is placed in the bag, the bag is twisted using the cords so escape becomes impossible.",
  },
  "kedi-tutma-eldiveni": {
    name: "Cat Handling Gloves",
    shortDescription:
      "Double-layer safety leather gloves extending to the elbow for cat handling.",
    description:
      "Made for capturing and holding cats. Prevents harmful situations such as scratching and biting during interventions (capture, injection, treatment, etc.).\n\nMade from double-layer safety leather so the cat’s claws and teeth do not reach the hand.\n\nExtends to 3 cm below the elbow, protecting the arms as well.",
  },
  "kopek-yakalama-kafesi": {
    name: "Dog Capture Cage",
    shortDescription:
      "Foldable trap cage for dogs. 4–6 mm stainless wire. Vetelsan manufacture.",
    description:
      "Made for capturing and transporting dogs. Bait is placed inside the cage; when the dog steps on the trigger plate, the rear door closes and the dog cannot escape.\n\nMade from 4 mm and 6 mm stainless wire. The foldable design saves space before and after use and allows easy transport.\n\nFully manufactured by us.\n\nCustom dimensions are available on request.",
    specs: [
      { label: "Width", value: "50 cm" },
      { label: "Height", value: "75 cm" },
      { label: "Length", value: "120 cm" },
      { label: "Wire", value: "4 mm and 6 mm stainless" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "kedi-yakalama-kafesi": {
    name: "Cat Capture Cage",
    shortDescription:
      "Trap cage for cats. 2–4 mm stainless wire. Vetelsan manufacture.",
    description:
      "Made for capturing and transporting cats. Bait is placed inside the cage; when the cat steps on the trigger plate, the rear door closes and the cat cannot escape.\n\nMade from 2 mm and 4 mm stainless wire.\n\nFully manufactured by us.\n\nCustom dimensions are available on request.",
    specs: [
      { label: "Width", value: "30 cm" },
      { label: "Depth", value: "30 cm" },
      { label: "Height", value: "65 cm" },
      { label: "Wire", value: "2 mm and 4 mm stainless" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
  },
  "kedi-enjeksiyon-kafesi": {
    name: "Cat Injection (Squeeze) Cage",
    shortDescription:
      "Squeeze cage for safe injections in cats and similar wild animals.",
    description:
      "Made to administer injections and similar treatments comfortably to cats and similar wild animals (lynx, fox, etc.).\n\nAfter the cat is placed in the tray-like basin inside the cage, the internal wire panel is pushed forward to gently restrain the cat. This allows treatment without harm to the handler in cases where injection is difficult. The wide mesh spacing allows needles and other treatment tools to be applied easily.\n\nFully manufactured by us.\n\nCustom dimensions are available on request.",
    specs: [
      { label: "Width", value: "60 cm" },
      { label: "Depth", value: "30 cm" },
      { label: "Height", value: "50 cm" },
      { label: "Manufacture", value: "Vetelsan" },
    ],
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
