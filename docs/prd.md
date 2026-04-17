# Product Requirements Document
## Duartes Auto Detailing — Website

**Version:** 1.2  
**Date:** April 2026  
**Status:** Draft  
**Stack:** Astro 6 · Tailwind CSS 4 · Vanilla JS  

---

## 1. Project Overview

### 1.1 Description
Duartes Auto Detailing is a mobile premium auto detailing business serving the Bay Area, California. The website is their primary digital presence, serving as a conversion-focused marketing site — its main goal is to get visitors to book a service via WhatsApp, SMS, Instagram DM, or a contact form.

### 1.2 Goals
- Convert visitors into bookings through clear CTAs throughout every page
- Communicate brand identity: premium, professional, mobile service
- Present services, gallery, and trust signals (testimonials, stats)
- Provide multiple contact channels
- Be fully responsive (mobile-first)

### 1.3 Non-Goals (v1.0)
- Online payment processing
- Customer accounts or login system
- Booking calendar/scheduler
- Blog or content management
- Multi-language support (site is in English)

---

## 2. Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Astro 6 | Static site generation, zero JS by default |
| Styles | Tailwind CSS 4 | `@theme` config for design tokens |
| Interactivity | Vanilla JS | Inline `<script>` in Astro components |
| Font | Google Fonts — Poppins | Weights: 400, 500, 600, 700, 800 |
| Icons | Astro Icons or inline SVG | No icon library dependency |
| Map | Google Maps static embed (v1) | TBD: may migrate to Mapbox |
| Contact Form | TBD | Options: Netlify Forms · Formspree · EmailJS |
| Deployment | TBD | Recommended: Netlify or Vercel |

---

## 3. Design Tokens — Tailwind `@theme`

### 3.1 CSS Configuration (`src/styles/global.css`)

```css
@import "tailwindcss";

@theme {
  /* === COLORS === */

  /* Brand */
  --color-gold:        #D4A843;
  --color-gold-dark:   #C49B36;
  --color-gold-light:  #E8C46A;

  /* Backgrounds */
  --color-black:       #111111;
  --color-surface:     #1C1C1C;
  --color-white:       #FFFFFF;
  --color-off-white:   #F5F5F5;

  /* Text */
  --color-text-primary:    #FFFFFF;
  --color-text-dark:       #111111;
  --color-text-muted:      #888888;

  /* UI */
  --color-border:      #333333;

  /* === TYPOGRAPHY === */
  --font-sans: 'Poppins', sans-serif;

  /* Font Sizes */
  --font-size-display:  clamp(2.5rem, 6vw, 4rem);
  --font-size-h1:       clamp(2rem, 4vw, 3rem);
  --font-size-h2:       clamp(1.5rem, 3vw, 2.25rem);
  --font-size-h3:       clamp(1.25rem, 2.5vw, 1.75rem);
  --font-size-h4:       1.25rem;
  --font-size-body:     1rem;
  --font-size-sm:       0.875rem;
  --font-size-xs:       0.75rem;

  /* === SPACING === */
  --section-padding-y:  5rem;

  /* === BORDER RADIUS === */
  --radius-sm:   0.5rem;
  --radius-md:   0.75rem;
  --radius-lg:   1rem;
  --radius-xl:   1.5rem;
  --radius-full: 9999px;
}
```

### 3.2 Google Fonts Import

```html
<!-- In BaseLayout.astro <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

---

## 4. Project Structure

```
duartes-auto-detailing/
├── public/
│   ├── favicon.ico
│   ├── favicon-96x96.png
│   ├── apple-touch-icon.png        ← 180×180px for iOS
│   ├── icon-192.png                ← Android / PWA
│   ├── icon-512.png                ← Android / PWA splash
│   ├── site.webmanifest
│   ├── robots.txt
│   ├── llms.txt                    ← LLM indexing (see §9)
│   └── images/
│       ├── logo.png
│       ├── logo.svg
│       ├── hero-car.png
│       ├── og-default.jpg          ← 1200×630 Open Graph image
│       ├── og-about.jpg
│       ├── og-contact.jpg
│       ├── gallery/
│       └── team/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── seo/
│   │   │   └── SEOHead.astro       ← Centralizes all SEO meta tags
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── SectionHeader.astro
│   │   │   └── ServiceCard.astro
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.astro
│   │   │   │   ├── WhyDuartes.astro
│   │   │   │   ├── FeaturedPackages.astro
│   │   │   │   ├── Testimonials.astro
│   │   │   │   ├── Gallery.astro
│   │   │   │   └── DiscountBanner.astro
│   │   │   ├── about/
│   │   │   │   ├── StandardSection.astro
│   │   │   │   ├── PillarsSection.astro
│   │   │   │   └── BehindTheShine.astro
│   │   │   ├── services/
│   │   │   │   ├── ServicesCatalogIntro.astro
│   │   │   │   ├── ServicesGrid.astro
│   │   │   │   ├── ServiceDetailHero.astro
│   │   │   │   ├── ServiceGallery.astro
│   │   │   │   ├── ServiceVideoEmbed.astro
│   │   │   │   └── RelatedServices.astro
│   │   │   ├── contact/
│   │   │   │   ├── ContactOptions.astro
│   │   │   │   ├── ContactForm.astro
│   │   │   │   └── ServiceMap.astro
│   │   │   └── shared/
│   │   │       ├── CTABanner.astro
│   │   │       └── PageHero.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── data/
│   │   └── services.ts             ← Service data source (replaces CMS for v1)
│   ├── pages/
│   │   ├── index.astro             → /
│   │   ├── about.astro             → /about
│   │   ├── services/
│   │   │   ├── index.astro         → /services
│   │   │   └── [slug].astro        → /services/[slug]  (dynamic route)
│   │   ├── contact.astro           → /contact
│   │   ├── privacy-policy.astro    → /privacy-policy  (CCPA)
│   │   └── 404.astro               → custom 404 page
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 5. Pages

### 5.1 Shared Layout — `BaseLayout.astro`

**Inputs (props):** `title`, `description`

**Contains:**
- `<head>` with meta tags, Open Graph, Google Fonts link
- `<Navbar />`
- `<slot />` (page content)
- `<Footer />`

---

### 5.2 Shared Components

#### Navbar (`Navbar.astro`)
- **Background:** `bg-black`
- **Logo:** SVG/PNG asset — diamond gem icon + "DUARTES" text + "AUTO DETAILING" subtitle — top left
- **Nav links:** `Inicio · Nosotros · Servicios · Contacto` — desktop: horizontal right. Mobile: hamburger menu → fullscreen overlay or slide-in drawer
- **Active state:** current page link highlighted in `text-gold`
- **Sticky:** `position: sticky; top: 0; z-index: 50`
- **Interactivity:** Mobile hamburger toggle — vanilla JS `classList.toggle('open')`

#### Footer (`Footer.astro`)
- **Background:** `bg-black`
- **Content:** Logo centered + 4 social icons (Phone/WhatsApp, Instagram, TikTok, Facebook)
- **No interactivity**

#### Button (`Button.astro`)
**Props:** `variant` (`primary` | `outline` | `white`), `href`, `icon`

| Variant | Style |
|---|---|
| primary | `bg-gold text-black font-semibold hover:bg-gold-dark` |
| outline | `border border-white text-white hover:bg-white/10` |
| white | `bg-white text-black font-semibold hover:bg-off-white` |

#### PageHero (`PageHero.astro`)
Reusable hero banner used on Nosotros, Servicios, and Contacto pages.

**Props:** `title`, `backgroundImage`

- Dark overlay on background image
- Title: large white bold text bottom-left
- Height: ~220px

#### CTABanner (`CTABanner.astro`)
Reusable split CTA used on Nosotros and potentially other pages.

**Props:** `image`, `eyebrow`, `title`, `buttonText`, `buttonHref`

- Left: image (e.g., wheel/detailing photo)
- Right: gold background with text + white button

---

### 5.3 Page: Home (`/`)

#### Section 1 — Hero
- **Background:** Dark (`bg-black`) with subtle overlay or gradient
- **Layout:** Two-column on desktop (text left, car image right), single column on mobile
- **Content:**
  - Tag line badge (optional small text above heading)
  - H1: "Diamond-Level Shine Wherever You Are" *(translated)*
  - Subtitle: "Premium mobile auto detailing across the Bay Area..."
  - CTA Button (primary): "Book Your Service"
  - Right side: PNG/WebP of black SUV car
  - Top-right decorative: 3 overlapping circular images of detailing work
  - Right edge: vertical social icons strip (WhatsApp, TikTok, Instagram, Facebook) — desktop only
- **No interactivity**

#### Section 2 — Why Duartes
- **Background:** `bg-black`
- **Layout:** Two-column
- **Left:** H2 "Why Duartes Auto Detailing?" — large, white, bold
- **Right:** Subheading "Not just a wash, it's a transformation." + paragraph with stats (5,000+ vehicles, 3 years, 1,000+ locations)
- **Accent:** Gold organic shape/blob behind the left column text (CSS `clip-path` or SVG background)
- **No interactivity**

#### Section 3 — Featured Packages
- **Background:** `bg-white` / `bg-off-white`
- **Layout:** H2 centered, 3 cards in a row (responsive: 1 col mobile, 3 col desktop)
- **Card anatomy:**
  - Image (top, full width of card)
  - Title (bold)
  - Short description
  - No individual CTA per card
- **Packages:**
  1. Premium Package — full interior & exterior renovation
  2. Ceramic Coating — UV protection, long-lasting shine
  3. Paint Correction — eliminates swirl marks and micro-scratches
- **Below cards:** Outline button "View All Services" → `/services`
- **No interactivity**

#### Section 4 — Testimonials
- **Background:** `bg-black` or `bg-surface`
- **Layout:** H2 centered + carousel of review cards
- **Card anatomy:** Name, city/state, star rating (5 gold stars), review text
- **Interactivity:** Simple JS carousel
  - Previous / Next arrow buttons
  - Dot indicators below
  - Auto-play optional (pause on hover)
  - **Implementation:** Vanilla JS in a `<script>` tag within `Testimonials.astro`
  - **No React needed**

#### Section 5 — Gallery
- **Background:** `bg-white`
- **Layout:** H2 + CSS Grid (4 columns desktop, 2 mobile) — 8 photos total
- **One item** has a play button overlay (links to video — YouTube/TikTok)
- **No interactivity** beyond the video link click

#### Section 6 — Discount CTA Banner
- **Background:** Dark left side (with car image), gold right side
- **Content:** "20% off your first service" + primary button "Book Your Service"
- **Layout:** Split — image takes ~40%, gold section ~60%

---

### 5.4 Page: About (`/about`)

#### Section 1 — Page Hero
- Uses `<PageHero />` component
- Title: "About Us"
- Background image: car detailing photo

#### Section 2 — The Duartes Standard
- **Background:** `bg-white`
- **Layout:** Two-column (image left, text right)
- **Left:** Photo of gloved hand using applicator on car hood
- **Right:**
  - H2: "The Duartes Standard."
  - Subtitle (muted gray): "More than a service, an automotive restoration experience."
  - Paragraph: 3 years · 5,000+ vehicles · 1,000+ locations across Bay Area
- **No interactivity**

#### Section 3 — Our Pillars
- **Background:** `bg-off-white` or `bg-white`
- **Layout:** H2 centered + 3 dark cards in a row
- **Card anatomy:**
  - Gold circle icon at top (checkmark / target / star)
  - Title
  - Description text
- **Pillars:**
  1. Our Mission — Clean, restore, and protect every vehicle with excellence
  2. Our Vision — Be the leading mobile detailing brand in the Bay Area
  3. Our Values — Professionalism, trust, and consistency at your door
- **No interactivity**

#### Section 4 — Behind the Shine
- **Background:** `bg-white`
- **Content:** H2 "Behind the Shine." + paragraph + large full-width photo of technician with GR Corolla
- **No interactivity**

#### Section 5 — CTA Banner
- Uses `<CTABanner />` shared component
- Image: wheel/tire detailing photo
- Text: "Ready to experience the difference?" + "Book Your Appointment Today"
- Button: "Book Your Service" → `/contact`

---

### 5.5 Page: Services — Index (`/services`)

#### Section 1 — Page Hero
- Uses `<PageHero />` shared component
- Title: "Services"
- Background: dark image of detailing work (engine bay / close-up tools)

#### Section 2 — Catalog Intro (Split Layout)
- **Background:** `bg-white`
- **Layout:** Two-column — 60/40 split, text left, image right
- **Left:**
  - H2: "Our Excellence Catalog."
  - Subtitle paragraph: "Mobile detailing solutions tailored to your vehicle's needs. Select a service below to see specifications, process, and results gallery."
- **Right:** Photo of rim/wheel being cleaned with spray bottle
- **No interactivity**

#### Section 3 — Services Grid
- **Background:** `bg-off-white`
- **Header:** H2 centered "Service List"
- **Layout:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- **Grid arrangement:** 3 + 3 + 2 (8 cards total)
- **Card anatomy:**
  - Image (top, full width, fixed aspect ratio ~4:3)
  - Service name (bold)
  - Short description (2–3 lines max)
  - Outline button: "View Details" → `/services/[slug]`
- **Services and their slugs:**

| # | Name | Slug | Short Description |
|---|---|---|---|
| 1 | Premium Package | `premium-package` | Deep full renovation. Meticulous interior and exterior detailing in one session. |
| 2 | Ceramic Coating | `ceramic-coating` | Advanced UV and contaminant protection. Extreme and long-lasting shine. |
| 3 | Paint Correction & Polish | `paint-correction` | We eliminate imperfections and micro-scratches to restore color clarity and depth. |
| 4 | Exterior Detailing | `exterior-detailing` | Deep and safe cleaning. Includes hand wash and rims. Protection for shine. |
| 5 | Interior Detailing | `interior-detailing` | Hygiene and comfort. Interior cleaning. UV protection. |
| 6 | Paint Decontamination | `paint-decontamination` | Pure surfaces. We eliminate iron, sap, and contamination. Beyond a normal wash. |
| 7 | Deep Upholstery Wash | `upholstery-wash` | Extraction and revitalization. We eliminate dirt and odors. Freshness in seats and textiles. |
| 8 | Headlight Restoration | `headlight-restoration` | Aesthetics and night safety. Clarity restored in cloudy headlights. |

- Card data is sourced from `src/data/services.ts` — see §5.7
- **No interactivity** (all navigation via anchor links)

#### Section 4 — Discount CTA Banner
- Reuses the same `<DiscountBanner />` component from the homepage
- "20% off your first service" + "Book Your Service" button → `/contact`
- Dark left side with black SUV image, gold right side

---

### 5.6 Page: Service Detail (`/services/[slug]`)

This is a **dynamic route** in Astro. All 8 services share the same layout template, with content injected from `src/data/services.ts` via `getStaticPaths()`.

#### Section 1 — Detail Hero (Split Layout)
- **Background:** `bg-surface` (dark) on the left side, white on the right
- **Layout:** Two-column, roughly 50/50, full viewport height on desktop
- **Left column (dark bg):**
  - H1: Service name (e.g., "Premium Package (Interior + Exterior)")
  - Subtitle: one-line tagline (e.g., "A 360-degree transformation for your vehicle.")
  - H3: "What does the service include?"
  - Subsections, each with a bold label and bullet list:
    - Subsection title (e.g., "Exterior Wash:") — `font-bold text-gold`
    - Bullet list items
  - *(repeat for each subsection — e.g., Interior Wash)*
  - Small italic CTA line (e.g., "Does your car need this level of detail?")
  - Gold primary button: "Book This Service" → WhatsApp/contact
- **Right column (white bg):**
  - Label above gallery: "Real Results. Zero Filters."
  - **Image gallery component** (`<ServiceGallery />`):
    - Main large image displayed prominently
    - Row of thumbnail images below (3–5 thumbnails)
    - Click thumbnail → updates main image
    - Arrow navigation left/right
    - **Interactivity:** Vanilla JS in `ServiceGallery.astro` — swap `src` of main image on thumbnail click
- **No React needed**

#### Section 2 — Video Embed
- **Background:** `bg-white`
- **Header:** H2 centered "Watch a detailed video of this service in action"
- **Content:** YouTube embed (`<iframe>`) centered, max-width ~640px, 16:9 aspect ratio
- Aspect ratio wrapper: `padding-top: 56.25%` technique or CSS `aspect-ratio: 16/9`
- **No interactivity** (native YouTube controls)

#### Section 3 — CTA Banner
- Reuses `<CTABanner />` shared component
- Image: circular photo of person cleaning a wheel (left side)
- Text: "Ready to experience the difference?" + bold "Book Your Appointment Today"
- Button: "Book This Service" → WhatsApp link or `/contact`
- Gold right side background

#### Section 4 — Related Services
- **Background:** `bg-off-white`
- **Header:** H2 centered "You might also be interested in these services"
- **Layout:** 3 cards in a row (same card component as ServicesGrid, minus the service being currently viewed)
- Related services are defined per service in `services.ts` (array of 3 slugs)
- Button per card: "View Details" → `/services/[slug]`
- **No interactivity**

---

### 5.7 Data Layer — `src/data/services.ts`

All service content lives in a single TypeScript data file. This avoids a CMS in v1 while keeping content easy to update. Each service is a typed object:

```typescript
// src/data/services.ts

export interface ServiceIncludesItem {
  label: string;       // e.g. "Exterior Wash:"
  items: string[];     // bullet list items
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;   // used on index grid card
  includes: ServiceIncludesItem[];
  ctaLine?: string;            // small italic line above button
  images: string[];            // paths to gallery images (first = main)
  videoUrl?: string;           // YouTube embed URL (optional)
  relatedSlugs: string[];      // exactly 3 slugs for related services
  ogImage?: string;            // OG image override for this service page
}

export const services: Service[] = [
  {
    slug: 'premium-package',
    name: 'Premium Package (Interior + Exterior)',
    tagline: 'A 360-degree transformation for your vehicle.',
    shortDescription:
      'Deep full renovation. Meticulous interior and exterior detailing in one session.',
    includes: [
      {
        label: 'Exterior Wash:',
        items: [
          'Contactless pre-wash',
          'Safe two-bucket wash',
          'Deep rim cleaning',
          'Tire conditioning',
          'Application of protective sealant',
        ],
      },
      {
        label: 'Interior Detailing:',
        items: [
          'Deep vacuuming',
          'Detailed cleaning of dashboard, console, vents, door panels, light stain removal on upholstery, and plastic/leather conditioner with UV filter',
        ],
      },
    ],
    ctaLine: 'Does your car need this level of detail?',
    images: [
      '/images/services/premium-1.jpg',
      '/images/services/premium-2.jpg',
      '/images/services/premium-3.jpg',
      '/images/services/premium-4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    relatedSlugs: ['exterior-detailing', 'interior-detailing', 'paint-decontamination'],
  },
  // ... remaining 7 services follow same structure
];

// Helper to get a service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Helper to get related services
export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
}
```

**`[slug].astro` — Dynamic route pattern:**

```astro
---
// src/pages/services/[slug].astro
import { services, getServiceBySlug, getRelatedServices } from '../../data/services';
import type { Service } from '../../data/services';

export function getStaticPaths() {
  return services.map((service) => ({
    params: { slug: service.slug },
    props: { service },
  }));
}

const { service } = Astro.props as { service: Service };
const related = getRelatedServices(service.relatedSlugs);
---
```

This pattern generates all 8 service pages at build time with zero runtime JS, keeping Astro's static output intact.

---


### 5.6 Page: Contact (`/contact`)

#### Section 1 — Page Hero
- Uses `<PageHero />` component
- Title: "Contact"
- Background image: hand holding iPhone

#### Section 2 — Quick Contact Options
- **Background:** `bg-white`
- **Header:** H2 "Ready to Elevate Your Car's Standard?" + subtitle
- **Layout:** 3 gold cards in a row
- **Card anatomy:** Icon + title + contact info (phone or handle)
- **Cards:**
  1. **WhatsApp** — "Book via WhatsApp" · (669) 28-8649 → `wa.me/` link
  2. **SMS** — "Send a Quick Text" · (669) 28-8649 → `sms:` link
  3. **Instagram** — "DM on Instagram" · @duartes_detailing → Instagram link
- Cards are clickable links — open on tap
- **No JS needed** (native `<a>` tags)

#### Section 3 — Email Contact Form
- **Background:** `bg-black` or `bg-surface`
- **Header:** H2 "Send Us a Message via Email"
- **Fields:**
  - `Name*` — text input
  - `Email*` — email input
  - `Phone*` — tel input
  - `Message*` — textarea (~4 rows)
- **Submit:** Gold button "Send"
- **Validation:** Vanilla JS
  - Required field check on submit
  - Email format validation
  - Visual error states (red border + error message below field)
  - Success state (confirmation message, no page reload)
- **Backend:** TBD — integrate with chosen form service (Netlify Forms / Formspree / EmailJS)
- **Accessibility:** Labels linked via `for`/`id`, `aria-required`, error `role="alert"`

#### Section 4 — Service Area Map
- **Background:** `bg-white`
- **Header:** H2 "100% Mobile Service"
- **Subtext:** "Proudly serving the entire Bay Area, California."
- **Map:** Google Maps iframe embed (static, no API key required for basic embed)
  - Shows LA / Bay Area with highlighted service zone
  - **v1:** Static `<iframe>` embed
  - **Future:** Consider Mapbox GL JS for custom styled map matching brand colors
- **No interactivity** (v1)

---

## 6. Interactivity Summary

| Feature | Implementation | Location |
|---|---|---|
| Mobile nav toggle | Vanilla JS `classList.toggle` | `Navbar.astro` `<script>` |
| Testimonials carousel | Vanilla JS slide logic | `Testimonials.astro` `<script>` |
| Contact form validation | Vanilla JS on `submit` event | `ContactForm.astro` `<script>` |
| Service image gallery | Vanilla JS thumbnail → main image swap | `ServiceGallery.astro` `<script>` |
| Gallery video play | Native `<a>` → external link | `Gallery.astro` |
| Contact card links | Native `<a>` tags | `ContactOptions.astro` |

**No Astro islands / React components required in v1.0.**

---

## 7. Responsive Behavior

| Breakpoint | Tailwind | Notes |
|---|---|---|
| Mobile | default (< 768px) | Single column, hamburger nav, reduced font sizes |
| Tablet | `md:` (≥ 768px) | 2-column layouts begin |
| Desktop | `lg:` (≥ 1024px) | Full 3-column grids, side social icons visible |
| Wide | `xl:` (≥ 1280px) | Max content width: 1280px, centered |

- Max content container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- All images use `width` + `height` attributes to prevent layout shift (CLS)
- Images optimized via Astro's built-in `<Image />` component (`@astrojs/image`)

---

## 8. SEO & Discoverability

### 8.1 Meta Tags per Page (`SEOHead.astro`)

All pages share a centralized `<SEOHead />` component that receives props and renders the full `<head>` block. This avoids duplication and ensures consistency.

```astro
---
// src/components/seo/SEOHead.astro
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonicalURL?: string;
}
const {
  title,
  description,
  ogImage = '/images/og-default.jpg',
  canonicalURL = Astro.url.href,
} = Astro.props;
---
<title>{title} | Duartes Auto Detailing</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Duartes Auto Detailing" />

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

<!-- Favicon set -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

**Meta content per page:**

| Page | Title | Description |
|---|---|---|
| Home | Diamond-Level Auto Detailing | Premium mobile auto detailing across the Bay Area. We come to your home or office. Book now. |
| About | About Us | Learn about Duartes Auto Detailing — 3 years, 5,000+ vehicles detailed across the Bay Area. |
| Services | Our Services | Explore our premium detailing packages: Full Detail, Ceramic Coating, Paint Correction & more. |
| Services / Premium Package | Premium Package — Interior + Exterior | Full interior and exterior vehicle renovation. We come to your location in the Bay Area. |
| Services / Ceramic Coating | Ceramic Coating | Advanced UV protection and long-lasting shine. Mobile ceramic coating service in the Bay Area. |
| Services / Paint Correction | Paint Correction & Polish | Eliminate swirl marks and micro-scratches. Restore your paint's clarity and depth. |
| Services / Exterior Detailing | Exterior Detailing | Deep hand wash, rim cleaning, and protective sealant. Mobile exterior detailing in the Bay Area. |
| Services / Interior Detailing | Interior Detailing | Deep vacuuming, dashboard, upholstery, and UV protection for your interior. |
| Services / Paint Decontamination | Paint Decontamination | Remove iron, sap, and environmental contamination. Pure surfaces beyond a normal wash. |
| Services / Upholstery Wash | Deep Upholstery Wash | Extraction and revitalization. Eliminate dirt and odors from seats and textiles. |
| Services / Headlight Restoration | Headlight Restoration | Restore clarity to cloudy headlights. Improved aesthetics and night safety. |
| Contact | Contact Us | Book your premium mobile detailing service. Reach us via WhatsApp, SMS, Instagram, or email. |
| Privacy Policy | Privacy Policy | How Duartes Auto Detailing collects and uses your personal information. |

---

### 8.2 Open Graph Images

Each page needs a custom OG image (1200×630px) to control the preview card when shared on social media or messaging apps. For a business like this, WhatsApp is the primary sharing channel — OG images matter.

| File | Page | Content suggestion |
|---|---|---|
| `og-default.jpg` | Home / fallback | Hero car + logo + tagline on dark/gold background |
| `og-about.jpg` | About | Team photo or technician at work |
| `og-contact.jpg` | Contact | Phone + gold card mockup with business number |
| `og-services.jpg` | Services | Collage of service types |

---

### 8.3 Schema.org — Structured Data (JSON-LD)

Structured data is the most impactful SEO item for a local business. It directly feeds Google's Knowledge Panel, rich results, and AI Overviews. Inject via a `<script type="application/ld+json">` in `BaseLayout.astro`.

#### Primary Schema — `LocalBusiness` / `AutoRepair`

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  "name": "Duartes Auto Detailing",
  "description": "Premium mobile auto detailing serving the Bay Area, California. Interior and exterior detailing, ceramic coating, and paint correction — we come to you.",
  "url": "https://www.duartesautodetailing.com",
  "logo": "https://www.duartesautodetailing.com/images/logo.png",
  "image": "https://www.duartesautodetailing.com/images/og-default.jpg",
  "telephone": "+16692882864",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Zelle, Venmo",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 37.3382,
      "longitude": -121.8863
    },
    "geoRadius": "80000"
  },
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Bay Area, California"
  },
  "sameAs": [
    "https://www.instagram.com/duartes_detailing",
    "https://www.tiktok.com/@duartes_detailing",
    "https://www.facebook.com/duartesdetailing"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Auto Detailing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Package",
          "url": "https://www.duartesautodetailing.com/services/premium-package",
          "description": "Full interior and exterior detailing in one comprehensive process."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating",
          "url": "https://www.duartesautodetailing.com/services/ceramic-coating",
          "description": "Advanced UV and contaminant protection with long-lasting shine."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Correction & Polish",
          "url": "https://www.duartesautodetailing.com/services/paint-correction",
          "description": "Elimination of swirl marks and micro-scratches to restore color depth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Detailing",
          "url": "https://www.duartesautodetailing.com/services/exterior-detailing",
          "description": "Deep hand wash, rim cleaning, tire conditioning, and protective sealant."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior Detailing",
          "url": "https://www.duartesautodetailing.com/services/interior-detailing",
          "description": "Deep vacuuming, dashboard, upholstery cleaning, and UV protection."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Paint Decontamination",
          "url": "https://www.duartesautodetailing.com/services/paint-decontamination",
          "description": "Removal of iron deposits, sap, and environmental contamination from paint."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deep Upholstery Wash",
          "url": "https://www.duartesautodetailing.com/services/upholstery-wash",
          "description": "Extraction and revitalization of seats and textiles. Eliminates dirt and odors."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Headlight Restoration",
          "url": "https://www.duartesautodetailing.com/services/headlight-restoration",
          "description": "Restoration of clarity in cloudy headlights for improved aesthetics and night safety."
        }
      }
    ]
  }
}
```

#### FAQ Schema (inject on Home page)

Boosts visibility in Google's FAQ rich results. Use real questions customers ask:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you come to my home or office?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Duartes Auto Detailing is 100% mobile. We bring all equipment and water to your location anywhere in the Bay Area."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a full detail take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full premium detail typically takes between 3 to 5 hours depending on the vehicle size and condition."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve the entire Bay Area, California, including San Jose, Santa Clara, Sunnyvale, Fremont, and surrounding cities."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book by sending a WhatsApp or text message to (669) 28-8649, or by sending a DM on Instagram @duartes_detailing."
      }
    }
  ]
}
```

> **Note:** The FAQ questions do not need a visible FAQ section on the page — the schema can be injected as a hidden `<script>` tag. However, adding a visible FAQ section (even minimal) strengthens the E-E-A-T signal and helps conversions.

---

### 8.4 Sitemap & robots.txt

Use the official Astro integration — zero manual work needed.

**`astro.config.mjs`:**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.duartesautodetailing.com',
  integrations: [sitemap()],
});
```
This auto-generates `/sitemap-index.xml` and `/sitemap-0.xml` on every build.

**`public/robots.txt`:**
```
User-agent: *
Allow: /

# Allow AI crawlers explicitly
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

Sitemap: https://www.duartesautodetailing.com/sitemap-index.xml
```

---

### 8.5 Core Web Vitals Strategy

Astro's static output already handles most of this, but these items need deliberate attention:

| Metric | Target | Implementation |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.5s | `<link rel="preload">` for hero image; use `<Image />` from `@astrojs/image` |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | Always set explicit `width` + `height` on all `<img>` tags |
| INP (Interaction to Next Paint) | ≤ 200ms | Minimal JS; no heavy libraries |
| TTFB (Time to First Byte) | ≤ 600ms | CDN deployment (Netlify/Vercel/Cloudflare Pages) |

Hero image preload (in `BaseLayout.astro`, conditionally on home page):
```html
<link rel="preload" as="image" href="/images/hero-car.webp" />
```

---

### 8.6 Local SEO

The site is one piece of a broader local SEO strategy. The following external items are **not part of the website** but are critical and must be aligned with it:

**NAP Consistency (Name · Address · Phone)**  
The exact same business name, phone number, and service area description must appear identically across:
- This website
- Google Business Profile
- Yelp
- Apple Maps (via Apple Business Connect)
- Bing Places
- Facebook Business page

Any inconsistency signals distrust to Google's local ranking algorithm.

**Google Business Profile (GBP)** — Highest-priority item outside the site:
- Select category: "Auto Detailing" + "Car Wash"
- Add service area cities (not a physical address since it's mobile)
- Upload 10+ real job photos
- Enable messaging and booking link (link to `/contact`)
- Actively collect and respond to Google reviews

**Review strategy:**  
Star ratings in Schema.org + visible testimonials on the site are strong E-E-A-T signals. After GBP is active, a short follow-up message to customers asking for a Google review (linked directly to the review form) can significantly boost local ranking within 60–90 days.

---

### 8.7 Page Speed — Image Optimization

All images must be converted to WebP and served at the correct display size. Use Astro's `<Image />` component which handles this automatically:

```astro
---
import { Image } from 'astro:assets';
import heroCar from '../images/hero-car.jpg';
---
<Image
  src={heroCar}
  alt="Black SUV receiving premium mobile detailing service in the Bay Area"
  width={800}
  height={600}
  format="webp"
  loading="eager"   <!-- hero images: eager. All others: lazy -->
  quality={85}
/>
```

---

## 9. LLM Discoverability

### 9.1 `llms.txt` — AI Crawler Standard

`llms.txt` is an emerging standard (proposed 2024) that gives LLMs a structured, human-readable summary of a website. When AI systems like ChatGPT Search, Perplexity, or Claude browse the web, this file helps them understand the business accurately and cite it correctly.

**`public/llms.txt`:**

```markdown
# Duartes Auto Detailing

> Premium mobile auto detailing service serving the Bay Area, California.
> We bring showroom-quality detailing directly to your home or office.

## About

Duartes Auto Detailing is a mobile auto care business with 3+ years of
experience and 5,000+ vehicles detailed across 1,000+ Bay Area locations.
We specialize in elevating vehicle aesthetics through professional-grade
products and techniques — without the customer needing to leave their home.

## Services

- **Premium Package**: Full interior and exterior renovation in one session.
- **Ceramic Coating**: Advanced UV and contaminant protection; long-lasting shine.
- **Paint Correction**: Removes swirl marks and micro-scratches to restore depth and clarity.
- Additional services available on request.

## Service Area

Bay Area, California — including San Jose, Santa Clara, Sunnyvale, Fremont,
Oakland, San Francisco, Daly City, South Bay, East Bay, and Peninsula.
100% mobile — we travel to the customer's location.

## Contact

- Phone / WhatsApp / SMS: (669) 28-8649
- Instagram: @duartes_detailing
- Website contact form: https://www.duartesautodetailing.com/contact

## Pages

- Home: https://www.duartesautodetailing.com
- About: https://www.duartesautodetailing.com/about
- Services: https://www.duartesautodetailing.com/services
- Contact: https://www.duartesautodetailing.com/contact
```

### 9.2 AI Overviews (Google SGE) — E-E-A-T Signals

Google's AI-generated summaries at the top of search results pull from pages with strong **E-E-A-T** (Experience · Expertise · Authoritativeness · Trustworthiness) signals. Concrete actions:

| Signal | How to strengthen it on this site |
|---|---|
| Experience | Real photos of completed work, before/after images, years in business prominently stated |
| Expertise | Specific service descriptions with technical terminology (swirl marks, paint correction, nano-ceramic) |
| Authoritativeness | Consistent NAP across all platforms, GBP with 10+ reviews |
| Trustworthiness | Privacy Policy page, HTTPS enforced, phone number as `tel:` link, no broken links |

### 9.3 AI Crawler Permissions

The `robots.txt` already includes explicit `Allow` rules for major AI crawlers (see §8.4). Additionally, confirm the deployment platform does not block these bots via server-level config (some Vercel/Netlify templates add `X-Robots-Tag: noindex` headers by default — verify after deployment).

---

## 10. Legal & Compliance

### 10.1 Privacy Policy Page (`/privacy-policy`)

**Required under CCPA** (California Consumer Privacy Act) because:
- The contact form collects name, email, and phone number
- If analytics (Google Analytics, Plausible, etc.) are added, user data is processed

The page should cover:
- What data is collected (name, email, phone from contact form)
- How it's used (to respond to service inquiries only)
- Whether data is shared with third parties (form service provider)
- How users can request deletion
- Contact email for privacy requests

This can be a simple static page — no interactive elements needed. A privacy policy generator (TermsFeed, Iubenda) can produce the initial draft for a lawyer to review.

### 10.2 HTTPS

Enforced automatically by all recommended deployment platforms (Netlify, Vercel, Cloudflare Pages). No additional configuration needed, but verify after first deploy that `http://` redirects to `https://`.

### 10.3 Cookie / Analytics Policy

If **Plausible or Umami** are used (recommended — see §11.3):
- No cookie banner required — these tools are cookieless
- A one-line note in the Privacy Policy is sufficient: "We use privacy-friendly, cookieless analytics that do not identify individual users."

If **Google Analytics 4** is used instead:
- A cookie consent banner is technically required under California law
- Recommended library for the banner: `cookieconsent` (vanilla JS, ~8KB)

---

## 11. Security & Anti-Spam

### 11.1 Contact Form — Honeypot

A honeypot is a hidden form field that bots fill in automatically but humans never see. If the field has a value on submission, discard the form silently.

```html
<!-- Hidden from real users via CSS, not display:none (bots see through that) -->
<div style="position: absolute; left: -9999px;" aria-hidden="true">
  <label for="website">Leave this blank</label>
  <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
</div>
```

```javascript
// In form submit handler
const honeypot = document.getElementById('website');
if (honeypot.value !== '') {
  return; // Silently reject — don't show error to bot
}
```

### 11.2 Cloudflare Turnstile (Recommended)

For stronger protection without UX friction, Cloudflare Turnstile is the best option:
- Free, no usage limits for standard use
- No visual puzzle — transparent to the user
- Works as a drop-in replacement for reCAPTCHA
- Fully compatible with all form backends

```html
<!-- Add to contact form -->
<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

Verify the token server-side (or via the chosen form backend if it supports it).

### 11.3 Security Headers

Add via `public/_headers` (Netlify) or `vercel.json` (Vercel):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 12. Analytics

**Recommended: Umami (free, self-hosted or cloud)**

| | Umami | Plausible | Google Analytics 4 |
|---|---|---|---|
| Cookie-free | ✅ | ✅ | ❌ |
| CCPA compliant | ✅ | ✅ | ⚠️ (needs banner) |
| Free tier | ✅ (unlimited, self-host) | ❌ ($9/mo) | ✅ |
| Dashboard | Simple | Simple | Complex |
| Data ownership | ✅ | ❌ | ❌ |

**Umami Cloud** has a free tier with up to 3 websites and 10k monthly events — sufficient for this project at launch.

Add tracking script to `BaseLayout.astro`:
```html
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id="YOUR-WEBSITE-ID"
></script>
```

**Key events to track:**
- CTA button clicks ("Book Your Service")
- WhatsApp / SMS / Instagram card clicks
- Contact form submissions (success)
- "View All Services" button clicks

---

## 13. Additional Pages

### 13.1 Page: 404 (`/404`)

- Full Navbar + Footer (user should not feel lost)
- Centered content: large "404" numeral in gold, short message, CTA button back to Home
- Optional: a subtle car-related illustration or the logo large
- **No hero banner needed**

```astro
---
// src/pages/404.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Not Found" description="This page does not exist.">
  <main class="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
    <p class="text-gold text-8xl font-bold">404</p>
    <h1 class="text-2xl font-semibold mt-4 mb-2">Page Not Found</h1>
    <p class="text-text-muted mb-8">The page you're looking for doesn't exist or has been moved.</p>
    <a href="/" class="btn-primary">Back to Home</a>
  </main>
</BaseLayout>
```

### 13.2 Page: Privacy Policy (`/privacy-policy`)

- Full Navbar + Footer
- Simple `bg-white` single-column layout with `max-w-3xl mx-auto`
- Content: plain text / Markdown rendered as HTML
- No hero banner, no images
- Link from Footer (add small "Privacy Policy" text link)

---


## 14. Accessibility

- Minimum color contrast ratio: 4.5:1 for body text, 3:1 for large text
- All interactive elements reachable via keyboard (`Tab`, `Enter`, `Space`)
- Skip-to-content link at top of page
- All images have meaningful `alt` text
- Form fields have visible `<label>` elements
- Error messages use `role="alert"` for screen readers
- Focus rings visible on all interactive elements

---

## 15. Assets Needed

| Asset | Description | Used In |
|---|---|---|
| `logo.svg` / `logo.png` | Full logo with gem + text | Navbar, Footer |
| `favicon.ico` | 32×32 favicon | Browser tab |
| `favicon-96x96.png` | 96×96 PNG favicon | Browser tab (high DPI) |
| `apple-touch-icon.png` | 180×180 iOS home screen icon | iOS |
| `icon-192.png` | 192×192 Android icon | Android / PWA |
| `icon-512.png` | 512×512 Android splash icon | Android / PWA |
| `og-default.jpg` | 1200×630 Open Graph image — home | Social / WhatsApp sharing |
| `og-about.jpg` | 1200×630 Open Graph image — about | Social sharing |
| `og-contact.jpg` | 1200×630 Open Graph image — contact | Social sharing |
| `og-services.jpg` | 1200×630 Open Graph image — services index | Social sharing |
| `hero-car.png` | Black SUV (transparent bg preferred) | Home Hero |
| `hero-circles-*.jpg` | 3 small circular decorative photos | Home Hero |
| `package-premium.jpg` | White car for package card | Home Packages, Services Grid |
| `package-ceramic.jpg` | Dark interior/ceramic for package card | Home Packages, Services Grid |
| `package-paint.jpg` | Paint correction for package card | Home Packages, Services Grid |
| `services-intro-rim.jpg` | Rim being cleaned with spray | Services Catalog Intro |
| `services/premium-*.jpg` | 4+ gallery photos for Premium Package | Service Detail |
| `services/ceramic-*.jpg` | 4+ gallery photos for Ceramic Coating | Service Detail |
| `services/paint-correction-*.jpg` | 4+ gallery photos for Paint Correction | Service Detail |
| `services/exterior-*.jpg` | 4+ gallery photos for Exterior Detailing | Service Detail |
| `services/interior-*.jpg` | 4+ gallery photos for Interior Detailing | Service Detail |
| `services/decontamination-*.jpg` | 4+ gallery photos for Paint Decontamination | Service Detail |
| `services/upholstery-*.jpg` | 4+ gallery photos for Upholstery Wash | Service Detail |
| `services/headlights-*.jpg` | 4+ gallery photos for Headlight Restoration | Service Detail |
| `about-detailing-hand.jpg` | Gloved hand with applicator | About Standard |
| `about-team.jpg` | Technician + GR Corolla | About Behind the Shine |
| `contact-phone.jpg` | Hand holding iPhone | Contact Hero |
| `gallery-01` to `gallery-08` | Detailing work photos + 1 video thumbnail | Home Gallery |
| `cta-suv.jpg` | Black SUV for discount banner | Home CTA, Services CTA |
| `cta-wheel.jpg` | Wheel/tire detail for CTA | About CTA, Service Detail CTA |

---

## 16. Open Decisions

| # | Decision | Options | Notes |
|---|---|---|---|
| 1 | Contact form backend | Netlify Forms · Formspree · EmailJS | EmailJS: no backend, free tier 200/mo. Netlify Forms: easiest if deploying to Netlify |
| 2 | Map provider | Google Maps embed · Mapbox GL JS | Mapbox allows brand-color custom styling |
| 3 | Deployment | Netlify · Vercel · Cloudflare Pages | All support Astro static; Cloudflare Pages has best global CDN |
| 4 | Analytics tool | Umami · Plausible · GA4 | Umami recommended (free, cookieless, CCPA-safe) |
| 5 | Anti-spam | Honeypot (basic) · Cloudflare Turnstile (robust) | Start with honeypot; upgrade to Turnstile if spam increases |
| 6 | Domain name | — | NAP must match across GBP and all platforms once set |
| 7 | Business hours | — | Needed for Schema.org and GBP |
| 8 | Payment methods accepted | — | Needed for Schema.org |
| 9 | Service video IDs | — | YouTube embed URL per service — confirm with client |
| 10 | Service gallery photos | — | Minimum 4 real result photos per service (8 services × 4 = 32 photos minimum) |

---

## 17. Launch Checklist

Before going live, verify all of the following:

**Development**
- [ ] All 6 pages render correctly on mobile, tablet, and desktop (home, about, services index, 8 service detail pages, contact, privacy policy)
- [ ] Navbar active state works on all pages, including `/services/*` routes
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Testimonials carousel auto-plays and manual navigation works
- [ ] Service detail image gallery thumbnail switching works correctly
- [ ] Service detail YouTube embed displays at correct 16:9 aspect ratio
- [ ] Related services section shows 3 correct cards (not the current service)
- [ ] All 8 service slugs resolve to correct pages (`getStaticPaths` verified)
- [ ] "View Details" buttons on Services Grid link to correct slugs
- [ ] Contact form validates all fields and shows success/error states
- [ ] Honeypot or Turnstile active on contact form
- [ ] All phone numbers are `tel:` links
- [ ] WhatsApp card links to correct `wa.me/` URL
- [ ] All images have `alt` text
- [ ] 404 page renders correctly
- [ ] Privacy Policy page is live and linked from footer

**SEO & Discoverability**
- [ ] Schema.org JSON-LD is present and valid (test at schema.org/validator)
- [ ] FAQ Schema is injected on homepage
- [ ] sitemap.xml is generated and accessible at `/sitemap-index.xml`
- [ ] robots.txt is at `/robots.txt` and includes AI crawlers
- [ ] `llms.txt` is at `/llms.txt`
- [ ] Each page has unique title and meta description
- [ ] Open Graph images are correct (test at opengraph.xyz)
- [ ] Canonical URLs are set on all pages
- [ ] Google Search Console: site submitted and sitemap registered

**Performance**
- [ ] Lighthouse score ≥ 90 on all 4 pages (Performance, Accessibility, SEO)
- [ ] Hero image preloaded with `<link rel="preload">`
- [ ] All images are WebP format
- [ ] No layout shift on load (CLS ≤ 0.1)
- [ ] Google Fonts load with `display=swap`

**Legal & Security**
- [ ] HTTPS enforced (verify `http://` redirects to `https://`)
- [ ] Security headers configured (`X-Frame-Options`, `X-Content-Type-Options`)
- [ ] Privacy Policy is live
- [ ] Analytics tool is active and receiving data

**External (Off-site)**
- [ ] Google Business Profile created and service area configured
- [ ] NAP is consistent: site, GBP, Instagram bio, Facebook page
- [ ] GBP booking link points to `/contact`

---

## 18. Out of Scope (Future Phases)

- Online booking calendar
- Customer review submission form
- Instagram feed integration (live)
- Scroll-based animations (can be added with CSS `@keyframes` or AOS library post-launch)
- Service pricing table
- Multi-language support (ES/EN)
- Blog or content marketing section
- Dark/light mode toggle

---

*End of Document — PRD v1.2*