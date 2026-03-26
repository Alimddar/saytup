# SEO OPTIMIZATION MASTER PROMPT — Saytup.az

> **Instruction to Claude Code**: Read this entire document before making ANY changes. Execute each layer sequentially. After completing each layer, verify your work before moving to the next. Do NOT skip any layer. Every change must be production-ready code.

---

## CONTEXT

**Website**: saytup.az — A web development agency in Baku, Azerbaijan
**Framework**: Next.js 15 (App Router), TypeScript, Tailwind CSS
**Primary Language**: Azerbaijani (az)
**Domain**: saytup.az
**Primary SEO Goal**: Rank on Google page 1 for the keyword **"sayt"** and related queries in Azerbaijan

**Current State Assessment**:
- Homepage metadata is in English (should be Azerbaijani for local ranking)
- JSON-LD schema exists but is minimal (Organization only)
- sitemap.ts and robots.ts exist but need enhancement
- No hreflang tags
- No structured FAQ schema on the FAQ page
- No breadcrumb schema
- No Service schema on services page
- No LocalBusiness schema
- Missing canonical URLs on inner pages
- No dedicated keyword strategy mapped to pages

---

## LAYER 1 — KEYWORD ARCHITECTURE & PAGE-LEVEL TARGETING

Map primary, secondary, and long-tail keywords to every page. Every page must have a unique keyword target — no cannibalization.

### Keyword Map (implement these exactly):

| Page | Primary Keyword | Secondary Keywords | Long-tail Keywords |
|------|----------------|-------------------|-------------------|
| `/` (Homepage) | sayt | sayt hazırlamaq, veb sayt, saytup, sayt sifarişi, sayt yaratmaq | Bakıda sayt hazırlayan şirkət, sayt sifariş etmək Azərbaycan, peşəkar veb sayt hazırlanması, biznes üçün sayt |
| `/services` | sayt hazırlanması xidmətləri | veb dizayn, sayt yaratmaq, veb inkişaf xidmətləri | korporativ sayt hazırlanması, e-ticarət sayt hazırlanması, landing page hazırlanması, sayt yeniləmə xidməti |
| `/portfolio` | portfolio, hazırlanmış saytlar | veb layihələr, sayt nümunələri | Azərbaycanda hazırlanmış veb saytlar, sayt portfolio nümunələri |
| `/plans` | sayt qiymətləri | veb sayt qiyməti, sayt hazırlamaq qiyməti | Azərbaycanda sayt qiyməti nə qədərdir, ucuz sayt hazırlanması, sayt sifarişi qiymət |
| `/about` | saytup haqqında | veb studiya Bakı, veb inkişaf komandası | Bakıda veb inkişaf şirkəti, Azərbaycan veb dizayn agentliyi |
| `/faq` | sayt sualları | veb sayt FAQ, tez-tez verilən suallar | sayt hazırlamaq nə qədər vaxt alır, hansı texnologiyalar istifadə olunur |
| `/contact` | əlaqə, sayt sifarişi | bizimlə əlaqə, müraciət forması | sayt sifariş etmək üçün müraciət, pulsuz konsultasiya |
| `/portfolio/[slug]` | [project name] layihəsi | veb tətbiq nümunəsi, case study | — |

### Implementation Tasks:

1. **Update `app/page.tsx` metadata** — Replace the English title/description with Azerbaijani keyword-rich versions:
   ```typescript
   export const metadata: Metadata = {
     title: 'Sayt Hazırlanması | Saytup.az — Bakıda Peşəkar Veb Sayt Sifarişi',
     description: 'Sayt hazırlamaq istəyirsiniz? Saytup.az Bakıda kiçik və orta bizneslər üçün peşəkar veb sayt hazırlayır. Korporativ saytlar, e-ticarət, landing page və daha çox. Pulsuz konsultasiya üçün müraciət edin.',
     keywords: ['sayt', 'sayt hazırlamaq', 'veb sayt', 'sayt sifarişi', 'sayt yaratmaq', 'Bakıda sayt hazırlayan şirkət', 'veb sayt hazırlanması', 'saytup'],
     alternates: {
       canonical: 'https://saytup.az',
     },
   };
   ```

2. **Update every inner page metadata** to include:
   - A unique `title` using the primary keyword from the map above (keep under 60 characters)
   - A unique `description` using primary + secondary keywords (keep between 150–160 characters)
   - `keywords` array with all mapped keywords for that page
   - `alternates.canonical` pointing to the full URL of that page
   - **Title format**: `[Primary Keyword] | Saytup.az`
   - **Description formula**: [Action verb] + [Primary keyword] + [Value proposition] + [Location/brand] + [CTA phrase]

3. **Create `/lib/seo.ts`** — A centralized SEO helper:
   ```typescript
   export const SITE_URL = 'https://saytup.az';

   export function generatePageMetadata({
     title,
     description,
     keywords,
     path,
     ogImage,
   }: {
     title: string;
     description: string;
     keywords: string[];
     path: string;
     ogImage?: string;
   }): Metadata {
     const url = `${SITE_URL}${path}`;
     return {
       title,
       description,
       keywords,
       alternates: { canonical: url },
       openGraph: {
         title,
         description,
         url,
         siteName: 'Saytup.az',
         locale: 'az_AZ',
         type: 'website',
         images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: title }] : [],
       },
       twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: ogImage ? [ogImage] : [],
       },
     };
   }
   ```

4. **Use `generatePageMetadata()` on every page** to ensure consistent metadata output.

---

## LAYER 2 — STRUCTURED DATA (JSON-LD SCHEMA MARKUP)

Add rich structured data to every page. This is critical for rich snippets, knowledge panels, and SERP features.

### 2.1 — Homepage: Enhance existing Organization + add WebSite + LocalBusiness

Replace the current basic Organization schema in `app/page.tsx` with a comprehensive multi-schema setup:

```typescript
const schemas = [
  // Organization
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://saytup.az/#organization',
    name: 'Saytup.az',
    alternateName: 'Saytup',
    url: 'https://saytup.az',
    logo: {
      '@type': 'ImageObject',
      url: 'https://saytup.az/logo.png',
      width: 512,
      height: 512,
    },
    description: 'Bakıda kiçik bizneslər üçün peşəkar veb sayt hazırlayan studiya.',
    foundingDate: '2023',
    founders: [{ '@type': 'Person', name: 'Saytup Team' }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bakı',
      addressRegion: 'Bakı',
      addressCountry: 'AZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+994-51-665-81-43',
      contactType: 'customer service',
      email: 'contact@saytup.digital',
      areaServed: 'AZ',
      availableLanguage: ['Azerbaijani', 'English', 'Russian'],
    },
    sameAs: [
      // Add real social media URLs when available
    ],
  },
  // WebSite with SearchAction (enables sitelinks search box)
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://saytup.az/#website',
    name: 'Saytup.az',
    url: 'https://saytup.az',
    description: 'Bakıda veb sayt hazırlayan peşəkar studiya',
    publisher: { '@id': 'https://saytup.az/#organization' },
    inLanguage: 'az',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://saytup.az/portfolio?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  // LocalBusiness (critical for "sayt" + location queries)
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://saytup.az/#localbusiness',
    name: 'Saytup.az — Veb İnkişaf Studiyası',
    image: 'https://saytup.az/og-image.jpg',
    url: 'https://saytup.az',
    telephone: '+994-51-665-81-43',
    email: 'contact@saytup.digital',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bakı',
      addressRegion: 'Bakı',
      addressCountry: 'AZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4093,
      longitude: 49.8671,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '₼₼',
    areaServed: {
      '@type': 'Country',
      name: 'Azerbaijan',
    },
    serviceType: ['Web Development', 'Web Design', 'E-Commerce Development', 'SEO'],
    description: 'Bakıda kiçik və orta bizneslər üçün peşəkar veb sayt hazırlayan studiya. Korporativ saytlar, e-ticarət, landing page, SEO və texniki dəstək.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15',
      bestRating: '5',
    },
  },
];
```

### 2.2 — Services Page: Add Service schema for each service

For each service in the services page, add `Service` schema:

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  provider: { '@id': 'https://saytup.az/#organization' },
  areaServed: { '@type': 'Country', name: 'Azerbaijan' },
  description: service.description,
  url: `https://saytup.az/services#${service.id}`,
}
```

### 2.3 — FAQ Page: Add FAQPage schema

This is CRITICAL for rich snippets. Wrap all FAQ items in FAQPage schema:

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}
```

### 2.4 — Portfolio Case Study Pages: Add CreativeWork schema

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  creator: { '@id': 'https://saytup.az/#organization' },
  image: project.image,
  url: `https://saytup.az/portfolio/${project.slug}`,
  keywords: project.tags.join(', '),
}
```

### 2.5 — Plans Page: Add Product/Offer schema for each plan

```typescript
{
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${plan.name} Paket — Saytup.az`,
  description: plan.subtitle,
  brand: { '@id': 'https://saytup.az/#organization' },
  offers: {
    '@type': 'Offer',
    price: plan.price,
    priceCurrency: 'AZN',
    availability: 'https://schema.org/InStock',
    url: 'https://saytup.az/plans',
  },
}
```

### 2.6 — Create a reusable `JsonLd` component

Create `components/shared/JsonLd.tsx`:
```typescript
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
```

---

## LAYER 3 — TECHNICAL SEO INFRASTRUCTURE

### 3.1 — Enhanced Sitemap

Update `app/sitemap.ts` to include:
- All pages with accurate `lastModified` dates (not `new Date()` — use actual dates)
- Proper `changeFrequency` values
- Add `images` field for portfolio pages (Google image sitemap extension)
- Add the FAQ page and Plans page if missing

```typescript
import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saytup.az';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date('2026-03-26'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
```

### 3.2 — Enhanced Robots.txt

Update `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://saytup.az/sitemap.xml',
    host: 'https://saytup.az',
  };
}
```

### 3.3 — Add `<link rel="canonical">` to every page

Already handled by `alternates.canonical` in metadata. Verify it renders in `<head>` on every page.

### 3.4 — Add hreflang (even for single language, declare it)

In `app/layout.tsx`, add to metadata:
```typescript
alternates: {
  canonical: 'https://saytup.az',
  languages: {
    'az': 'https://saytup.az',
    'x-default': 'https://saytup.az',
  },
},
```

### 3.5 — Create `app/manifest.ts` (Web App Manifest for PWA signals)

```typescript
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saytup.az — Veb İnkişaf Studiyası',
    short_name: 'Saytup',
    description: 'Bakıda peşəkar veb sayt hazırlayan studiya',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5F5',
    theme_color: '#1A73E8',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
```

---

## LAYER 4 — ON-PAGE SEO & SEMANTIC HTML

### 4.1 — Heading Hierarchy Audit

Every page MUST follow a strict heading hierarchy. Audit and fix:
- Each page has exactly ONE `<h1>` tag
- `<h1>` must contain the primary keyword for that page
- `<h2>` tags for major sections, must include secondary keywords naturally
- `<h3>` for sub-sections
- NO heading level skips (h1 → h3 without h2)

**Homepage `<h1>` must be keyword-rich** (currently may be generic). Change to something like:
```
Bakıda Peşəkar Sayt Hazırlanması
```
Or:
```
Biznesiniz Üçün Sayt Hazırlayırıq
```

**Important**: The h1 should look natural and not be keyword-stuffed. It must work visually as a headline AND contain the target keyword "sayt".

### 4.2 — Image SEO

For every image on the site:
- Use `next/image` with proper `width`, `height`, and `alt` attributes
- `alt` text must be descriptive AND include relevant keywords naturally
- Example: `alt="Travelia turizm veb sayt layihəsi — Saytup.az portfolio"` instead of `alt="project screenshot"`
- Add `title` attribute to key images
- Ensure images are served in WebP/AVIF format (Next.js does this automatically with `next/image`)

### 4.3 — Internal Linking Strategy

Add contextual internal links throughout the site:
- Services page should link to relevant portfolio case studies
- Portfolio items should link back to the relevant service
- Every page should have a CTA that links to `/contact`
- Footer should have all important page links (already exists, verify)
- Add breadcrumb navigation to inner pages (Services, Portfolio items, About, FAQ, Plans, Contact)

Create `components/shared/Breadcrumbs.tsx`:
```typescript
// Renders breadcrumb navigation with BreadcrumbList schema markup
// Example: Ana Səhifə > Xidmətlər > Korporativ Vebsaytlar
// Must include JSON-LD BreadcrumbList schema
```

Add breadcrumbs to: `/services`, `/portfolio`, `/portfolio/[slug]`, `/about`, `/plans`, `/faq`, `/contact`

### 4.4 — Semantic HTML Landmarks

Ensure proper use of:
- `<header>` for Navbar
- `<main>` for page content (already in layout.tsx ✓)
- `<footer>` for Footer
- `<nav>` for navigation elements
- `<article>` for portfolio case studies
- `<section>` with `aria-labelledby` for each homepage section
- `<aside>` where appropriate

### 4.5 — Anchor Text Optimization

All internal links should have descriptive anchor text, NOT "Click here" or "Learn more". Use keyword-rich text:
- ❌ "Ətraflı" / "Daha çox"
- ✅ "Veb sayt xidmətlərimizə baxın" / "Portfolio layihələrimizi görün"

---

## LAYER 5 — PERFORMANCE SEO (Core Web Vitals)

### 5.1 — Font Loading Optimization

Ensure fonts are loaded via `next/font` (not external Google Fonts link). Check `lib/fonts.ts` and update if needed:
```typescript
import { DM_Sans, Instrument_Sans } from 'next/font/google';

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});
```

Remove any `<link>` tags pointing to fonts.googleapis.com or fonts.gstatic.com from `layout.tsx` — `next/font` handles everything.

### 5.2 — Lazy Loading & Code Splitting

- Below-fold sections should use `dynamic()` imports with `ssr: false` where appropriate
- Heavy components (Testimonials carousel, animated counters) should be lazy loaded
- Use `loading="lazy"` for images below the fold (next/image does this by default, but verify `priority` is set for above-fold images)

### 5.3 — Preload Critical Assets

In layout.tsx, preload the hero image or critical CSS:
```typescript
<link rel="preload" href="/hero-image.webp" as="image" />
```

### 5.4 — Bundle Size Audit

- Check if `lucide-react` imports are tree-shaken (import individual icons, not the entire library)
- Verify `framer-motion` is imported efficiently (use `LazyMotion` + `domAnimation` feature bundle)
- Consider using `next/dynamic` for heavy sections

### 5.5 — Add `loading.tsx` for each route

Ensure each route group has a `loading.tsx` for better perceived performance and Largest Contentful Paint optimization.

---

## LAYER 6 — CONTENT SEO & LOCAL SEO STRATEGY

### 6.1 — Homepage Content Enhancement

The homepage needs more crawlable text content. Google can't rank what it can't read. Add:

1. **A text-rich section below the hero** — 2-3 paragraphs explaining what Saytup does, naturally including keywords like "sayt hazırlamaq", "veb sayt", "Bakıda veb inkişaf". This should NOT be inside an image or animation-only element. Wrap in proper `<section>` with `<h2>`.

2. **Expand service descriptions on the homepage** — Each service card should have at least 2-3 sentences visible (not hidden behind a hover or click).

3. **Add a "Why Choose Us" section** or similar text block with natural keyword usage.

### 6.2 — FAQ Page Content Expansion

The FAQ page is a goldmine for long-tail SEO. Add more questions that target real search queries:

```
- Sayt hazırlamaq nə qədərə başa gəlir?
- Sayt hazırlamaq üçün nə lazımdır?
- Veb sayt neçə günə hazır olur?
- E-ticarət saytı hazırlatmaq istəyirəm, nə etməliyəm?
- SEO nədir və niyə vacibdir?
- Saytı özüm idarə edə bilərəm?
- Hosting və domain nədir?
- Sayt mobil telefonda düzgün görünəcəkmi?
- Sayt hazırlandıqdan sonra dəstək verirsizmi?
- Hansı ödəniş üsulları qəbul edilir?
- WordPress yoxsa xüsusi kod — hansı daha yaxşıdır?
- Saytımın Google-da görünməsi üçün nə etməliyəm?
- Rəqiblərdən nə ilə fərqlənirsiniz?
```

Each answer should be comprehensive (100-200 words), naturally include keywords, and link to relevant pages internally.

### 6.3 — Local SEO Signals

1. **Google Business Profile** — Ensure saytup.az has a verified Google Business Profile (this is external, but add a reminder/note)

2. **NAP Consistency** — Name, Address, Phone must be IDENTICAL everywhere:
   - Website footer
   - Contact page
   - JSON-LD schema
   - Google Business Profile
   - Any directory listings

3. **Add an embedded Google Map** on the contact page showing Baku location

4. **Local keywords** — Ensure "Bakı" and "Azərbaycan" appear naturally in content across the site

### 6.4 — Create an OG Image

Create `app/opengraph-image.tsx` or a static `public/og-image.jpg` (1200x630px) that includes:
- Saytup.az logo
- Tagline: "Bakıda Peşəkar Sayt Hazırlanması"
- Brand colors (blue + orange accent)
- Professional look

If creating dynamically with Next.js OG image generation:
```typescript
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Saytup.az — Bakıda Veb Sayt Hazırlanması';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Generate branded OG image
}
```

### 6.5 — URL Structure (already good, verify)

- URLs are clean and descriptive ✓
- No query parameters for main pages ✓
- Azerbaijani content at root (no /az/ prefix needed since it's the only language) ✓

---

## VERIFICATION CHECKLIST

After completing all 6 layers, run these checks:

### Technical Verification
- [ ] Run `npm run build` — must build without errors
- [ ] Every page has unique `<title>` and `<meta name="description">`
- [ ] Every page has `<link rel="canonical">`
- [ ] Every page has Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Every page has Twitter card tags
- [ ] JSON-LD schemas are valid (test at https://validator.schema.org/)
- [ ] `sitemap.xml` includes all pages
- [ ] `robots.txt` allows all important pages
- [ ] Only ONE `<h1>` per page
- [ ] Heading hierarchy has no skips
- [ ] All images have descriptive `alt` text
- [ ] No `<link>` tags pointing to external font CDNs (use next/font only)
- [ ] Breadcrumbs are present on all inner pages
- [ ] Internal links use descriptive anchor text

### Keyword Verification
- [ ] "sayt" appears in homepage `<h1>`, `<title>`, `<meta description>`, and body content
- [ ] "sayt hazırlamaq" appears naturally on the homepage
- [ ] "Bakı" / "Azərbaycan" appears on every page
- [ ] Each page targets a UNIQUE primary keyword (no cannibalization)

### Schema Verification
- [ ] Homepage: Organization + WebSite + ProfessionalService schemas
- [ ] Services page: Service schemas for each service
- [ ] FAQ page: FAQPage schema
- [ ] Portfolio pages: CreativeWork schema
- [ ] Plans page: Product/Offer schemas
- [ ] Inner pages: BreadcrumbList schema

### Performance Verification
- [ ] Fonts loaded via `next/font` with `display: 'swap'`
- [ ] Above-fold images have `priority={true}`
- [ ] Below-fold content is lazy loaded where appropriate
- [ ] No unused CSS/JS in the critical path
- [ ] Bundle size is reasonable (check with `next build` output)

---

## EXECUTION ORDER

1. Start with Layer 1 (Keyword Architecture) — update all metadata
2. Layer 2 (Structured Data) — add all JSON-LD schemas
3. Layer 3 (Technical SEO) — sitemap, robots, manifest, canonical URLs
4. Layer 4 (On-Page SEO) — headings, images, links, breadcrumbs, semantic HTML
5. Layer 5 (Performance) — fonts, lazy loading, bundle optimization
6. Layer 6 (Content & Local SEO) — content expansion, FAQ additions, OG images
7. Run the verification checklist
8. Run `npm run build` to confirm everything compiles

**Do NOT skip any layer. Do NOT leave any TODO comments. Every change must be complete, production-ready code.**
