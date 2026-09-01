# Vetelsan SEO Documentation

This document describes the SEO architecture of the Vetelsan Next.js site and the manual steps required after deployment.

## Architecture overview

| Layer | Location | Purpose |
|-------|----------|---------|
| Canonical URL | `lib/seo/url.ts` | `getSiteUrl()`, `absoluteUrl()`, `absoluteImageUrl()` |
| Metadata | `lib/metadata.ts` | Page titles, descriptions, OG/Twitter, robots |
| Keywords / intent | `lib/seo/keywords.ts` | Primary search intent per hub and category |
| SEO content | `lib/seo/content.ts` | Category editorial blocks and FAQ (visible on page) |
| Structured data | `lib/seo/schema.ts` | JSON-LD builders |
| JSON-LD component | `components/seo/JsonLd.tsx` | Renders `<script type="application/ld+json">` |
| Category SEO UI | `components/seo/CategorySeoBlock.tsx` | Premium editorial section at page bottom |
| Sitemap | `app/sitemap.ts` | All indexable catalog URLs |
| Robots | `app/robots.ts` | Crawl rules + sitemap reference |

## Production domain

Set in Vercel (or `.env.local`):

```env
NEXT_PUBLIC_SITE_URL=https://www.vetelsan.com.tr
```

All canonical URLs, sitemap entries, Open Graph URLs, and JSON-LD `@id` values derive from this variable.

Development falls back to `https://www.vetelsan.com.tr` when unset.

## Metadata system

- **Global defaults:** `defaultMetadata()` in root layout
- **Page metadata:** `pageMetadata()`, `intentMetadata()`, `categoryMetadata()`, `productMetadata()`
- **Noindex:** `notFoundMetadata()`, `legalMetadata()` (KVKK)
- **Per-page OG images:** product/category/hub pages pass `ogImage` from real catalog images

## Structured data (JSON-LD)

| Page type | Schema types |
|-----------|--------------|
| All pages (layout) | Organization, WebSite |
| Contact | LocalBusiness, BreadcrumbList |
| Product category | CollectionPage, ItemList, BreadcrumbList, FAQPage (if FAQ visible) |
| Product detail | Product, BreadcrumbList |
| Medicine detail | Product (+ activeIngredient as PropertyValue), BreadcrumbList |
| Medicine hub/category | Same pattern as products |

**Rules enforced in code:**

- No fake price, availability, rating, or review
- Brand/manufacturer only for Vetelsan-manufactured product categories
- FAQ schema only when FAQ is visible in `CategorySeoBlock`
- No SearchAction on WebSite (site has no public search)

## Sitemap

Included:

- `/`, `/urunler`, `/ilaclar-asilar`, `/hakkimizda`, `/iletisim`
- All product and medicine categories and detail pages

Excluded:

- `/kvkk` (legal page, `noindex`)
- `/api/*` (disallowed in robots)

`lastModified` is omitted to avoid fake freshness signals on static catalog data.

## Robots.txt

- Allow: `/`
- Disallow: `/api/`
- Sitemap: `{NEXT_PUBLIC_SITE_URL}/sitemap.xml`

## International SEO

TR/EN share the same URLs (cookie-based locale). Google indexes TR content by default. EN is a UX layer; hreflang is not implemented to avoid incorrect signals. A future `/en/` migration would be a separate project.

## Local SEO

NAP consistency sources:

- `lib/site.ts` → `contact`, `mapLocation`
- Footer, Contact page, Home location section, LocalBusiness schema

Coordinates: `38.3387614, 38.3160209` (Malatya).

## Google Search Console checklist

- [ ] Production domain verified
- [ ] Canonical domain verified (`NEXT_PUBLIC_SITE_URL`)
- [ ] Sitemap submitted: `https://www.vetelsan.com.tr/sitemap.xml`
- [ ] Robots.txt checked
- [ ] URL Inspection on homepage
- [ ] Homepage indexed
- [ ] `/urunler` hub indexed
- [ ] `/ilaclar-asilar` hub indexed
- [ ] Category pages indexed
- [ ] Product pages indexed
- [ ] 404 returns `noindex` (test a random invalid URL)
- [ ] Structured data validated (Rich Results Test)
- [ ] Mobile usability checked
- [ ] Core Web Vitals reviewed

## Google Business Profile (manual)

Code cannot create or manage GBP. After launch:

- [ ] Claim or verify Vetelsan business listing in Malatya
- [ ] Use exact NAP from `lib/site.ts`
- [ ] Category: veterinary pharmacy / medical supply (most accurate available)
- [ ] Add business hours matching site copy
- [ ] Link website: production domain
- [ ] Upload real facility and product photos
- [ ] Add service descriptions (no medical claims beyond real offerings)
- [ ] Encourage genuine customer reviews (never fabricate)

## Production deployment checklist

1. Set `NEXT_PUBLIC_SITE_URL` to production domain
2. Point DNS to Vercel
3. Run `npm run build` locally or verify CI build
4. Submit sitemap in Search Console
5. Test Rich Results on homepage, one product, one category, contact
6. Test 404 page returns noindex
7. Verify canonical tags in page source

## Keyword map

See `lib/seo/keywords.ts` for primary/secondary intent per URL.

## Future opportunities (not implemented)

- URL-based `/en/` locale + hreflang
- Dedicated SEO landing pages (evaluate cannibalization first)
- Content hub / blog (medical accuracy required)
- `sameAs` social profiles when real URLs are available
