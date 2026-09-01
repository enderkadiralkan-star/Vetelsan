"""Normalize product photos onto a consistent square canvas and sharpen them."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

SIZE = 1200
FILL = 0.78
BG = (255, 255, 255)
ASSETS = Path(
    r"C:\Users\HERKÜL\.cursor\projects\c-Projects-Vetelsan\assets"
)
OUT_CERRAHI = Path(r"c:\Projects\Vetelsan\public\images\products\cerrahi-medikal")
OUT_ATICILAR = Path(r"c:\Projects\Vetelsan\public\images\products\aticilar")
OUT_DIGER = Path(r"c:\Projects\Vetelsan\public\images\products\diger-urunler")
OUT_ENJEKTORLER = Path(r"c:\Projects\Vetelsan\public\images\products\enjektorler")
OUT_ISARETLEME = Path(r"c:\Projects\Vetelsan\public\images\products\isaretleme")
OUT_MAMALAR = Path(r"c:\Projects\Vetelsan\public\images\products\mamalar")
OUT_YAKALAMA = Path(r"c:\Projects\Vetelsan\public\images\products\yakalama-aparatlari")
OUT_KAFESLER = Path(r"c:\Projects\Vetelsan\public\images\products\yakalama-kafesleri")
OUT_MEDICINES = Path(r"c:\Projects\Vetelsan\public\images\medicines\products")


def split_name(path: Path) -> str:
    name = path.name
    marker = "_images_"
    return name.split(marker, 1)[-1] if marker in name else name


def content_bbox(image: Image.Image, delta: int = 14) -> tuple[int, int, int, int] | None:
    rgb = image.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()
    samples = [
        pixels[2, 2],
        pixels[width - 3, 2],
        pixels[2, height - 3],
        pixels[width - 3, height - 3],
        pixels[width // 2, 2],
        pixels[2, height // 2],
    ]
    bg = tuple(sum(c[i] for c in samples) // len(samples) for i in range(3))

    min_x, min_y = width, height
    max_x, max_y = 0, 0
    step = 2 if width * height > 400_000 else 1
    for y in range(0, height, step):
        for x in range(0, width, step):
            r, g, b = pixels[x, y]
            if (
                abs(r - bg[0]) > delta
                or abs(g - bg[1]) > delta
                or abs(b - bg[2]) > delta
            ):
                if x < min_x:
                    min_x = x
                if y < min_y:
                    min_y = y
                if x > max_x:
                    max_x = x
                if y > max_y:
                    max_y = y

    if max_x <= min_x or max_y <= min_y:
        return None

    pad = max(8, int(min(width, height) * 0.02))
    min_x = max(0, min_x - pad)
    min_y = max(0, min_y - pad)
    max_x = min(width - 1, max_x + pad)
    max_y = min(height - 1, max_y + pad)
    area = (max_x - min_x) * (max_y - min_y)
    if area < width * height * 0.04:
        return None
    return (min_x, min_y, max_x + 1, max_y + 1)


def normalize(source: Path, destination: Path) -> None:
    image = Image.open(source)
    image = ImageOps.exif_transpose(image)
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA") if "A" in image.getbands() else image.convert("RGB")

    canvas_bg = Image.new("RGB", (SIZE, SIZE), BG)
    work = image.convert("RGB")
    box = content_bbox(work)
    cropped = work.crop(box) if box else work

    max_side = int(SIZE * FILL)
    ratio = min(max_side / cropped.width, max_side / cropped.height)
    new_size = (
        max(1, int(cropped.width * ratio)),
        max(1, int(cropped.height * ratio)),
    )
    fitted = cropped.resize(new_size, Image.Resampling.LANCZOS)
    fitted = ImageEnhance.Contrast(fitted).enhance(1.08)
    fitted = ImageEnhance.Sharpness(fitted).enhance(1.55)
    fitted = fitted.filter(
        ImageFilter.UnsharpMask(radius=1.6, percent=145, threshold=2)
    )

    left = (SIZE - fitted.width) // 2
    top = (SIZE - fitted.height) // 2
    canvas_bg.paste(fitted, (left, top))
    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas_bg.save(destination, format="PNG", optimize=True)


CERRAHI_MAP = {
    "Muayene-Eldiveni-dd2b174e": "muayene-eldiveni.png",
    "Muayene-Eldiveni-2-f4e79ba0": "muayene-eldiveni-2.png",
    "Steril-Cerrahi-Eldiven-111804f0": "steril-cerrahi-eldiven.png",
    "Steril-Cerrahi-Eldiven-2-311e27ad": "steril-cerrahi-eldiven-2.png",
    "Steril-Gaz-Kompres-2d0ba01e": "steril-gaz-kompres.png",
    "Steril-Gaz-Kompres-2-ececa256": "steril-gaz-kompres-2.png",
    "Spanc-7be2817f": "spanc.png",
    "Spanc-2-c9c5f7a8": "spanc-2.png",
    "Sargi-Bezi-90d42a2e": "sargi-bezi.png",
    "Sargi-Bezi-2-1bdb009f": "sargi-bezi-2.png",
    "Kendinden-Yapiskanli-Bandaj-fcf752bc": "kendinden-yapiskanli-bandaj.png",
    "Kendinden-Yapiskanli-Bandaj-2-a6cff4b2": "kendinden-yapiskanli-bandaj-2.png",
    "Cerrahi-Maske-85723451": "cerrahi-maske.png",
    "Cerrahi-Maske-2-2086a6b4": "cerrahi-maske-2.png",
    "Ameliyat-Onlugu-d2ea9a10": "ameliyat-onlugu.png",
    "Portequ-cff11126": "portegu.png",
    "Portequ-2-909acf88": "portegu-2.png",
    "Veteriner-Makas-675c4bf3": "veteriner-makas.png",
    "Veteriner-Makas-2-d1d37bc7": "veteriner-makas-2.png",
    "Hemostatik-Pens-fdd47a62": "hemostatik-pens.png",
    "Hemostatik-Pens-2-0ab1f5cd": "hemostatik-pens-2.png",
    "Bisturi-Sapi-Ucu-a0773e0e": "bisturi-sapi-ucu.png",
    "Cerrahi-Alet-Kutusu-50e55e96": "cerrahi-alet-kutusu.png",
    "Hayvan-Tasima-Sedyesi-83f219a0": "hayvan-tasima-sedyesi.png",
    "Hayvan-Tasima-Sedyesi-2-af3e14a3": "hayvan-tasima-sedyesi-2.png",
    "Veteriner-Muayene-Masasi-1718e3eb": "veteriner-muayene-masasi.png",
    "Veteriner-Muayene-Masasi-2-482a7f4d": "veteriner-muayene-masasi-2.png",
    "Veteriner-Operasyon-Masasi-39de00dd": "veteriner-operasyon-masasi.png",
    "Veteriner-Operasyon-Masasi-2-86853829": "veteriner-operasyon-masasi-2.png",
}

ATICILAR_MAP = {
    "Enjektor-Atici-Tabanca-300x300-dc649fb6": "enjektor-atici-tabanca.png",
    "Enjektor-Atici-Tabanca-3-300x300-a5999500": "enjektor-atici-tabanca-kit.png",
    "Enjektor-Atici-Tabanca-2-300x300-593b1446": "enjektor-atici-tabanca-enjektor.png",
    "Enjektor-Atici-Tufek-300x300-7944fc91": "enjektor-atici-tufek.png",
    "Enjektor-Atici-Tufek-2-300x300-6f1199d1": "enjektor-atici-tufek-acik.png",
    "Enjektor-Atici-Tufek-4-300x300-ca764441": "enjektor-atici-tufek-kit.png",
    "Enjektor-Atici-Tufek-3-300x300-6634fb10": "enjektor-atici-tufek-enjektor.png",
    "Ufleme-Borusu-2-300x300-0ea0d7ab": "ufleme-borusu.png",
    "Ufleme-Borusu-300x300-60bd65aa": "ufleme-borusu-enjektor.png",
    "Havali-Tufek-300x300-90b45f63": "havali-tufek.png",
    "Havali-Tufek-1-300x300-8d0abb77": "havali-tufek-2.png",
}

DIGER_MAP = {
    "Kopek-Agizligi-3-5451658f": "kopek-agizligi.png",
    "Kopek-Agizligi-2-0541e968": "kopek-agizligi-2.png",
    "Kopek-Agizligi-8aa90f7b": "kopek-agizligi-3.png",
    "Kedi-Kopek-Yakaligi-e9bc4ef0": "kedi-kopek-yakaligi.png",
    "Kedi-Kopek-Yakaligi-2-3405397e": "kedi-kopek-yakaligi-2.png",
    "Kedi-Kopek-Yakaligi-3-696166d9": "kedi-kopek-yakaligi-3.png",
    "Kedi-Kopek-Sulugu-9890f3fb": "kedi-kopek-sulugu.png",
}

ENJEKTORLER_MAP = {
    "Funyeli-Enjektor-3f2c7d0a": "funyeli-enjektor.png",
    "Funyeli-Enjektor1-154c6a67": "funyeli-enjektor-2.png",
    "Uflemeli-Enjektor-54769127": "uflemeli-enjektor.png",
    "Havali-Tufek-Enjektoru-5a3bdb21": "havali-tufek-enjektoru.png",
    "Havali-Tufek-Enjektoru1-86e284f9": "havali-tufek-enjektoru-2.png",
}

ISARETLEME_MAP = {
    "Kulak-Kupesi-be898bda": "kulak-kupesi.png",
    "Kupe-Tatbik-Pensi-670ef1f1": "kupe-tatbik-pensi.png",
    "Mikrocip-4c22b1a7": "mikrocip.png",
    "Mikrocip-Okuyucu-bf37392d": "mikrocip-okuyucu.png",
}

MAMALAR_MAP = {
    "urunlerenj-1-d70a578e": "kedi-mamasi.png",
    "urunlerenj-9cf90533": "kopek-mamasi.png",
}

YAKALAMA_MAP = {
    "Kopek-Yakalama-Aparati-a29127a3": "kopek-yakalama-aparati.png",
    "Kopek-Yakalama-Aparati-1-929f83c3": "kopek-yakalama-aparati-2.png",
    "Kedi-Yakalama-Filesi-3674a632": "kedi-yakalama-filesi.png",
    "Kedi-Yakalama-Filesi-1-86f20697": "kedi-yakalama-filesi-2.png",
    "Kedi-Yakalama-Masasi-4d4ea7aa": "kedi-yakalama-masasi.png",
    "Yilan-Yakalama-Masasi-a6c58576": "yilan-yakalama-masasi.png",
    "Yilan-Tasima-Torbasi-e3b0e9ee": "yilan-tasima-torbasi.png",
    "Kedi-Tutma-Eldiveni-a122fea9": "kedi-tutma-eldiveni.png",
    "Kedi-Tutma-Eldiveni-1-828ec50f": "kedi-tutma-eldiveni-2.png",
    "Kedi-Tutma-Eldiveni-2-7f8e461a": "kedi-tutma-eldiveni-3.png",
}

KAFESLER_MAP = {
    "Kopek-Yakalama-Kafesi-6213ac86": "kopek-yakalama-kafesi.png",
    "Kopek-Yakalama-Kafesi-2-65e4e8b3": "kedi-enjeksiyon-kafesi.png",
    "Kedi-Yakalama-Kafesi-ff74b033": "kedi-yakalama-kafesi.png",
    "kedi-yakalama-kafesi-2-11634177": "kedi-yakalama-kafesi-2.png",
}

MEDICINES_MAP = {
    "keta-control-3d8da836": "keta-control.png",
    "Gentavet-2a0f04a2": "gentavet.png",
    "Clamoxyl_LA-6361ee70": "clamoxyl-la.png",
    "Moksidif_LA-e8b7218b": "moksidif-la.png",
    "Linco-Spectin-b27747c7": "linco-spectin.png",
    "Linpectan-fa3b2fb3": "linpectan.png",
    "Synulox-8b328ea8": "synulox.png",
    "Histavet-582d34e7": "histavet.png",
    "Vilmectin-6e7afe89": "vilmectin.png",
    "Dectomax-02c13e44": "dectomax.png",
    "Teniacid-355f4528": "teniacid.png",
    "Advantage_Multi_Kedi-21cecef3": "advantage-multi-kedi.png",
    "Fiproes_K_pek-712f0f1b": "fiproes-kopek.png",
    "Tenizol_Tablet-865629c7": "tenizol-tablet.png",
    "Prenova_Tablet-84f08dd9": "prenova-tablet.png",
    "Atropin__0_2-11bb52ac": "atropin-02.png",
    "Kafedif-47590785": "kafedif.png",
    "Doxaprol-bc8aaff5": "doxaprol.png",
    "Vetakort_2_mg-37c20cbc": "vetakort-2-mg.png",
    "Meloxicam-5f39e030": "meloxicam.png",
    "Theranekron-71ccc510": "theranekron.png",
    "Neo-Kort-d6bf8b9b": "neo-kort.png",
    "Silvezin_Pomad-08d87651": "silvezin-pomad.png",
    "Promazin_Oral_Jel-93631f70": "promazin-oral-jel.png",
    "Rivanol_Toz-8f2606f1": "rivanol-toz.png",
    "Neocaf_Sprey-c5ebba13": "neocaf-sprey.png",
    "Terramycin_Deri_Spreyi-eabf1b26": "terramycin-deri-spreyi.png",
    "Biocan_R-8f9429bd": "biocan-r.png",
    "Nobivac_Rabies-2fc9414a": "nobivac-rabies.png",
    "Biocan_DHPPI-6407e69e": "biocan-dhppi.png",
    "Fellocell_CVR-f90c6e99": "fellocell-cvr.png",
    "Biocan_M_Plus-fef70621": "biocan-m-plus.png",
    "metabolase-475bccb2": "metabolase.png",
    "nervit-ba0f41b1": "nervit.png",
    "hemadur-k-f87810a6": "hemadur-k.png",
    "ascorvet-b9d0f98b": "ascorvet.png",
    "Berovit_B12-65d848d0": "berovit-b12.png",
    "Duphalyte-fe37d07e": "duphalyte.png",
    "Fitadinon-K-97893c95": "fitadinon-k.png",
    "Bekombin-394a1d1e": "bekombin.png",
    "vital-c-80591b71": "vital-c.png",
    "tekno-c-385f692b": "tekno-c.png",
}


def match_key(filename: str, mapping: dict[str, str]) -> str | None:
    for key, dest in mapping.items():
        if filename.startswith(key):
            return dest
    return None


def run() -> None:
    files = list(ASSETS.glob("*.png"))
    done = 0
    for path in files:
        short = split_name(path)
        dest_name = match_key(short, CERRAHI_MAP)
        if dest_name:
            dest = OUT_CERRAHI / dest_name
            normalize(path, dest)
            print(f"cerrahi  {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, ATICILAR_MAP)
        if dest_name:
            dest = OUT_ATICILAR / dest_name
            normalize(path, dest)
            print(f"aticilar {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, DIGER_MAP)
        if dest_name:
            dest = OUT_DIGER / dest_name
            normalize(path, dest)
            print(f"diger    {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, ENJEKTORLER_MAP)
        if dest_name:
            dest = OUT_ENJEKTORLER / dest_name
            normalize(path, dest)
            print(f"enjektor {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, ISARETLEME_MAP)
        if dest_name:
            dest = OUT_ISARETLEME / dest_name
            normalize(path, dest)
            print(f"isaret   {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, MAMALAR_MAP)
        if dest_name:
            dest = OUT_MAMALAR / dest_name
            normalize(path, dest)
            print(f"mamalar  {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, YAKALAMA_MAP)
        if dest_name:
            dest = OUT_YAKALAMA / dest_name
            normalize(path, dest)
            print(f"yakalama {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, KAFESLER_MAP)
        if dest_name:
            dest = OUT_KAFESLER / dest_name
            normalize(path, dest)
            print(f"kafes    {dest_name}")
            done += 1
            continue
        dest_name = match_key(short, MEDICINES_MAP)
        if dest_name:
            dest = OUT_MEDICINES / dest_name
            normalize(path, dest)
            print(f"medicine {dest_name}")
            done += 1
    print(f"processed {done} images")


if __name__ == "__main__":
    run()
