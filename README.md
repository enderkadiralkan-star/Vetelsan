# Vetelsan

Vetelsan kurumsal web sitesi. Next.js (App Router) + TypeScript + Tailwind CSS.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## İçerik

Sayfa metinleri ve ürünler mock data üzerinden yönetilir:

- `lib/site.ts` — iletişim, navigasyon, şirket bilgisi
- `lib/hero.ts` — anasayfa slider (video yolu dahil)
- `lib/categories.ts` — ürün kategorileri
- `lib/products.ts` — ürünler
- `lib/medicines.ts` — ilaç ve aşılar

Logo: `public/logo/vetelsan-logo.png`  
Hero videosu ekleneceği yer: `public/videos/hero.mp4` (`lib/hero.ts` içinde `videoSrc`)
