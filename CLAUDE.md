# CLAUDE.md — Saytup.az Portfolio Website

## Project Identity

**Saytup.az** is a small web development agency based in Azerbaijan that builds web applications for small businesses. This is our portfolio website — it must look **premium, confident, and technically sharp** while staying approachable for small business owners who are our target clients.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 14+ (App Router)** | SSR, SEO, performance |
| UI Library | **shadcn/ui** | Composable, unstyled primitives we can brand heavily |
| Styling | **Tailwind CSS v4** | Utility-first, pairs with shadcn |
| Animations | **Framer Motion** | Scroll reveals, page transitions, micro-interactions |
| Icons | **Lucide React** | Clean, consistent icon set (ships with shadcn) |
| Fonts | **Google Fonts: "Instrument Sans" (headings) + "DM Sans" (body)** | Modern, geometric, distinctive — NOT generic |
| Deployment | **Vercel** | Zero-config Next.js hosting |
| Language | **TypeScript** | Type safety throughout |

> **Why shadcn/ui over RetroUI or HeroUI?**
> shadcn gives us unstyled primitives we can fully brand to Saytup's identity. RetroUI is too niche/retro for a professional agency. HeroUI (NextUI) is opinionated and harder to customize deeply. shadcn + Tailwind = maximum control.

---

## Brand System

### Colors

```css
/* Primary palette */
--brand-blue: #1A73E8;        /* Primary — trust, tech, professionalism */
--brand-orange: #FF6D00;      /* Accent — energy, action, CTAs */
--brand-light: #F5F5F5;       /* Background — clean, spacious */

/* Extended palette (derive from primaries) */
--brand-blue-dark: #1557B0;   /* Hover states, dark sections */
--brand-blue-light: #E8F0FE;  /* Light blue tints, badges, tags */
--brand-orange-light: #FFF3E0; /* Warm highlights */
--brand-dark: #0F172A;        /* Text, dark backgrounds (slate-900) */
--brand-gray: #64748B;        /* Secondary text (slate-500) */
--brand-white: #FFFFFF;        /* Cards, surfaces */
```

### Design Rules

1. **Blue is dominant** — used for headers, navigation, key UI elements
2. **Orange is accent only** — CTAs, highlights, hover effects, badges. Never large surfaces.
3. **Light gray (#F5F5F5)** is the page background — gives depth without pure white flatness
4. **Dark sections** use `--brand-dark` (#0F172A) for contrast blocks (e.g., footer, testimonial section)
5. **White cards** float on the light gray background with subtle shadows
6. Minimum contrast ratio: 4.5:1 for all text

### Typography Scale

- **Hero heading**: 4rem/64px, Instrument Sans, font-weight 700
- **Section heading**: 2.5rem/40px, Instrument Sans, font-weight 600
- **Subheading**: 1.25rem/20px, DM Sans, font-weight 500
- **Body**: 1rem/16px, DM Sans, font-weight 400
- **Small/Caption**: 0.875rem/14px, DM Sans, font-weight 400

---

## Site Architecture

```
app/
├── layout.tsx              # Root layout: fonts, metadata, navbar, footer
├── page.tsx                # Homepage (all sections below)
├── about/
│   └── page.tsx            # About us / team page
├── services/
│   └── page.tsx            # Services detail page
├── portfolio/
│   ├── page.tsx            # Portfolio grid
│   └── [slug]/
│       └── page.tsx        # Individual project case study
├── contact/
│   └── page.tsx            # Contact form page
├── components/
│   ├── ui/                 # shadcn components (button, card, input, etc.)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Process.tsx
│   │   ├── CTA.tsx
│   │   └── Stats.tsx
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── ProjectCard.tsx
│       ├── ServiceCard.tsx
│       ├── AnimatedCounter.tsx
│       └── ScrollReveal.tsx
├── lib/
│   ├── utils.ts            # cn() helper, shared utilities
│   ├── constants.ts        # Site data: services, projects, testimonials
│   └── fonts.ts            # Font configuration
└── styles/
    └── globals.css         # Tailwind directives, CSS variables, custom styles
```

---

## Homepage Sections (in order)

### 1. Navbar
- Logo (text: "saytup" lowercase, bold, blue + orange dot) on left
- Links: Home, Services, Portfolio, About, Contact
- CTA button: "Start a Project" (orange)
- Sticky on scroll with backdrop blur
- Mobile: hamburger → slide-in drawer

### 2. Hero Section
- **Layout**: Split — left text, right abstract graphic/illustration
- **Headline**: "We Build Web Apps That Grow Your Business"
- **Subline**: "Saytup.az is a web development studio in Baku helping small businesses launch beautiful, fast, and effective web applications."
- **CTAs**: "See Our Work" (blue, primary) + "Get a Free Quote" (orange, outline)
- **Background**: Light gray with subtle grid pattern or dots
- **Animation**: Staggered text reveal + floating graphic on right

### 3. Stats Bar
- Horizontal strip with animated counters
- "15+ Projects Delivered" | "98% Client Satisfaction" | "3 Years Experience" | "24h Response Time"
- Blue background, white text, separated by subtle dividers

### 4. Services Section
- Section heading: "What We Do"
- **Cards** (3-column grid on desktop):
  - 🌐 **Custom Web Applications** — React, Next.js, full-stack solutions
  - 🛒 **E-Commerce Solutions** — Online stores, payment integration
  - 📱 **Responsive Websites** — Mobile-first, fast-loading sites
  - 🔧 **Website Maintenance** — Updates, hosting, ongoing support
  - 🎨 **UI/UX Design** — User research, wireframes, prototypes
  - 🚀 **SEO & Performance** — Speed optimization, search visibility
- Each card: icon, title, short description, subtle hover lift

### 5. Portfolio Section
- Section heading: "Our Recent Work"
- **Grid**: 2-column masonry-style on desktop
- Each project card: screenshot image, project name, category tag, brief description
- Hover: overlay with "View Case Study →"
- "View All Projects →" link at bottom
- Use placeholder images (gradient backgrounds with project names for now)

### 6. Process Section
- Section heading: "How We Work"
- **4 steps** displayed as a horizontal timeline (vertical on mobile):
  1. **Discovery** — We learn about your business and goals
  2. **Design** — Wireframes and visual design you'll love
  3. **Develop** — Clean code, tested thoroughly
  4. **Launch & Support** — Go live and grow together
- Numbered steps with connecting line, icons, blue accent

### 7. Testimonials Section
- Dark background (#0F172A)
- Carousel/slider with client quotes
- Client name, company, avatar placeholder
- Star ratings
- Use sample/placeholder testimonials

### 8. CTA Section
- Large centered block
- "Ready to Build Something Great?"
- "Get a free consultation and project estimate within 24 hours."
- Two buttons: "Start a Project" (orange) + "View Our Work" (blue outline)
- Subtle gradient or pattern background

### 9. Footer
- Dark background
- Logo + tagline
- Quick links: Services, Portfolio, About, Contact
- Contact info: email, phone, Baku address
- Social links: LinkedIn, Instagram, GitHub, Behance
- "© 2026 Saytup.az — All rights reserved"

---

## Component Guidelines

### Animations (Framer Motion)
- **Page load**: Staggered fade-up for hero content (delay: 0, 0.1, 0.2, 0.3)
- **Scroll reveal**: `whileInView` with `once: true`, fade up 30px, 0.6s duration
- **Hover**: Cards lift 4px with shadow increase, buttons scale 1.02
- **Counters**: Animate from 0 to target number on scroll into view
- **NO excessive animation** — subtle and professional, not playful

### shadcn Components to Install
```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea badge separator sheet navigation-menu
```

### Tailwind Config Customization
Extend theme with brand colors, fonts, and custom shadows:
```js
theme: {
  extend: {
    colors: {
      brand: {
        blue: '#1A73E8',
        'blue-dark': '#1557B0',
        'blue-light': '#E8F0FE',
        orange: '#FF6D00',
        'orange-light': '#FFF3E0',
        light: '#F5F5F5',
        dark: '#0F172A',
        gray: '#64748B',
      }
    },
    fontFamily: {
      heading: ['Instrument Sans', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
    }
  }
}
```

---

## Content & Copy Tone

- **Professional but warm** — not corporate, not casual
- **Confident** — "We build" not "We can help build"
- **Client-focused** — talk about THEIR business growth, not our tech
- **Short sentences** — scannable, no walls of text
- **Azerbaijani context** — mention Baku, local businesses, .az domain pride

---

## SEO & Metadata

Every page needs:
- Unique `<title>` and `<meta description>`
- Open Graph tags (og:title, og:description, og:image)
- Structured data (Organization schema on homepage)
- Semantic HTML (proper heading hierarchy, landmarks)
- `next/image` for all images with alt text
- Sitemap at `/sitemap.xml`

---

## Performance Targets

- Lighthouse: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- CLS: < 0.1
- Use `next/font` for font loading (no layout shift)
- Lazy load below-fold images and sections

---

## What to Build First (Priority Order)

1. Project scaffold: `create-next-app`, install dependencies, configure Tailwind + shadcn
2. Global layout: fonts, colors, CSS variables, Navbar, Footer
3. Homepage: Hero → Stats → Services → Portfolio → Process → Testimonials → CTA
4. Inner pages: Services, Portfolio grid, Contact form
5. Individual project case study template
6. About page
7. Animations and polish
8. SEO, metadata, performance audit

---

## File Naming Conventions

- Components: PascalCase (`ProjectCard.tsx`)
- Pages: lowercase (`page.tsx` — Next.js convention)
- Utilities: camelCase (`utils.ts`)
- Constants: camelCase file, UPPER_SNAKE for exported constants
- CSS: kebab-case if standalone files

---

## Do NOT

- ❌ Use default shadcn colors without branding
- ❌ Use generic stock photos (use gradients/patterns as placeholders)
- ❌ Make it look like a template — it must feel custom-built
- ❌ Over-animate — keep it professional
- ❌ Use Inter, Roboto, or Arial fonts
- ❌ Put orange on large surfaces — it's accent only
- ❌ Forget mobile responsiveness on any component
- ❌ Skip loading states and error handling on the contact form
