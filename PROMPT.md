# PROMPT.md — Claude Code Execution Guide for Saytup.az

> **How to use this file**: Copy the prompts below into Claude Code one at a time, in order. Wait for each step to complete before moving to the next. Read CLAUDE.md first — it contains all brand rules, architecture, and design specs.

---

## Phase 1: Project Setup

### Prompt 1.1 — Scaffold

```
Read CLAUDE.md in this project root. Then scaffold the Next.js project:

1. Initialize with: npx create-next-app@latest saytup-portfolio --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
2. cd into the project
3. Install dependencies:
   - framer-motion
   - lucide-react
   - clsx tailwind-merge (for cn utility)
4. Initialize shadcn/ui: npx shadcn@latest init (use default style, slate base color, CSS variables YES)
5. Add shadcn components: button card input textarea badge separator sheet navigation-menu
6. Set up the font configuration using next/font/google for "Instrument Sans" (weights 400,500,600,700) and "DM Sans" (weights 400,500,600,700)
7. Update tailwind.config.ts with the brand colors and font families from CLAUDE.md
8. Update globals.css with CSS variables for all brand colors, remove any default Next.js styles, set body background to --brand-light (#F5F5F5)

Make sure everything compiles with no errors. Don't build any visible UI yet — just the foundation.
```

### Prompt 1.2 — Utility & Constants Setup

```
Now set up the shared utilities and content data:

1. Create lib/utils.ts with the cn() helper (clsx + tailwind-merge)
2. Create lib/constants.ts with ALL the site content data:
   - SITE_CONFIG: name, tagline, description, contact info (email: hello@saytup.az, phone: +994 XX XXX XX XX, address: Baku, Azerbaijan)
   - NAV_LINKS array
   - SERVICES array (6 services from CLAUDE.md with icons as lucide icon names, titles, descriptions)
   - PROJECTS array (6 sample projects with: id, slug, title, category, description, tags array, gradient colors for placeholder images)
   - TESTIMONIALS array (4 sample client testimonials with name, company, role, quote, rating)
   - PROCESS_STEPS array (4 steps from CLAUDE.md)
   - STATS array (4 stats from CLAUDE.md)
   - SOCIAL_LINKS array (LinkedIn, Instagram, GitHub, Behance with URLs as "#")
   - FOOTER_LINKS organized by columns
   
   Make the sample content realistic for an Azerbaijani web development agency. Use real-sounding project names like "BakuShop E-Commerce Platform", "AzeriTech Corporate Website", etc.

3. Create lib/fonts.ts that exports the configured font objects

All data should be typed with TypeScript interfaces.
```

---

## Phase 2: Layout Components

### Prompt 2.1 — Global Layout

```
Build the root layout and core layout components. Reference CLAUDE.md for all design specs.

1. Create components/layout/Container.tsx — a max-width wrapper (max-w-7xl, centered, px-4 sm:px-6 lg:px-8)

2. Create components/layout/Navbar.tsx:
   - Sticky top-0 with z-50 and backdrop-blur on scroll
   - Logo on left: "saytup" in Instrument Sans bold, with an orange dot after it (like "saytup.")
   - Navigation links in the center from NAV_LINKS constant
   - "Start a Project" CTA button (orange) on right
   - Mobile: hamburger icon that opens a shadcn Sheet (slide-in from right) with all links
   - Active link indicator (blue underline or color change)
   - Background transitions from transparent to white/blur on scroll (use useState + useEffect for scroll detection)

3. Create components/layout/Footer.tsx:
   - Dark background (#0F172A)
   - Top section: Logo + tagline on left, link columns in center, contact info on right
   - Social icons row
   - Bottom bar: copyright "© 2026 Saytup.az" with separator line above
   - Responsive: stack on mobile

4. Update app/layout.tsx to use these components, apply fonts to html/body, include proper metadata for "Saytup.az — Web Development Studio in Baku"

Test that the dev server runs and shows the navbar + footer with empty content area.
```

---

## Phase 3: Shared Components

### Prompt 3.1 — Reusable Building Blocks

```
Create the shared/reusable components. Reference CLAUDE.md for animation specs.

1. components/shared/ScrollReveal.tsx
   - Framer Motion wrapper component
   - Props: children, direction ('up' | 'down' | 'left' | 'right'), delay (number), className
   - Uses whileInView, viewport once: true, margin: "-100px"
   - Fade in + translate based on direction, duration 0.6s, ease out

2. components/shared/SectionHeading.tsx
   - Props: title, subtitle (optional), centered (boolean, default true)
   - Renders h2 in Instrument Sans with blue accent line or element
   - Optional paragraph subtitle below in gray
   - Wrapped in ScrollReveal

3. components/shared/ProjectCard.tsx
   - Props: project data from constants type
   - Gradient placeholder image area (using the project's gradient colors)
   - Project title, category badge (blue-light background), short description
   - Hover: overlay appears with "View Case Study →" text and slight lift
   - Framer Motion hover animation (y: -4, shadow increase)

4. components/shared/ServiceCard.tsx
   - Props: service data from constants type
   - Icon from lucide-react (render dynamically or use a mapping)
   - Title, description
   - Subtle border card with hover: border-brand-blue transition, slight lift
   - Blue icon circle/background

5. components/shared/AnimatedCounter.tsx
   - Props: target (number), suffix (string like "+" or "%"), label (string)
   - Animates from 0 to target when scrolled into view
   - Uses framer motion useInView + animate
   - Large number display + label below
```

---

## Phase 4: Homepage Sections

### Prompt 4.1 — Hero + Stats

```
Build the Hero and Stats sections for the homepage. Follow CLAUDE.md specs exactly.

1. components/sections/Hero.tsx:
   - Split layout: text content (60%) on left, decorative graphic on right
   - Headline: "We Build Web Apps That Grow Your Business" — large, Instrument Sans 700
   - Subline: the text from CLAUDE.md — DM Sans, gray color
   - Two CTA buttons: "See Our Work" (blue filled) + "Get a Free Quote" (orange outline)
   - Right side: Create an abstract SVG or CSS graphic — think floating geometric shapes (circles, rectangles, code brackets) in blue and orange tones. NOT a stock image placeholder. Make it feel techy and dynamic.
   - Background: subtle dot grid pattern using CSS (radial-gradient dots)
   - Staggered animation: headline (0s) → subline (0.1s) → buttons (0.2s) → graphic (0.3s)
   - Responsive: stack vertically on mobile, graphic goes below or hides

2. components/sections/Stats.tsx:
   - Full-width blue (#1A73E8) background strip
   - 4 stats in a row from STATS constant
   - Each stat uses AnimatedCounter component
   - White text, subtle vertical dividers between stats
   - Responsive: 2x2 grid on tablet, stack on mobile

3. Wire both into app/page.tsx in order: Hero → Stats

Make sure the page looks polished and the animations fire correctly on scroll.
```

### Prompt 4.2 — Services + Portfolio

```
Build the Services and Portfolio homepage sections.

1. components/sections/Services.tsx:
   - SectionHeading: "What We Do" with subtitle "End-to-end web development services tailored for small businesses"
   - 3-column grid (responsive: 2 col tablet, 1 col mobile)
   - Uses ServiceCard for each item from SERVICES constant
   - Cards wrapped in ScrollReveal with staggered delays (0, 0.1, 0.2 per row)
   - Light section background (white or brand-light)

2. components/sections/Portfolio.tsx:
   - SectionHeading: "Our Recent Work" with subtitle "Projects we're proud of"
   - Show only first 4 projects from PROJECTS constant on homepage
   - 2-column grid, cards have varying heights for masonry-like feel (alternate tall/short)
   - Uses ProjectCard component
   - Bottom: "View All Projects →" link styled as text button with arrow, blue color
   - ScrollReveal on each card

3. Add both to app/page.tsx after Stats in order: Services → Portfolio
```

### Prompt 4.3 — Process + Testimonials + CTA

```
Build the remaining homepage sections.

1. components/sections/Process.tsx:
   - SectionHeading: "How We Work" with subtitle "A simple, transparent process from idea to launch"
   - Horizontal 4-step timeline on desktop:
     - Each step: circled number (blue), title (bold), description, icon
     - Connecting line between circles (dashed or solid, light blue/gray)
   - Vertical timeline on mobile
   - Steps from PROCESS_STEPS constant
   - Light background section

2. components/sections/Testimonials.tsx:
   - Dark section (#0F172A background)
   - SectionHeading: "What Our Clients Say" (white text variant)
   - Horizontal scrollable row or simple grid of testimonial cards
   - Each card: quote text in white, client name, role, company, star rating (orange stars)
   - Cards have a subtle dark border or slightly lighter bg (#1E293B)
   - Don't use a complex carousel library — a simple CSS scroll-snap or just a grid works fine

3. components/sections/CTA.tsx:
   - Centered content block
   - Heading: "Ready to Build Something Great?"
   - Subtext: "Get a free consultation and project estimate within 24 hours."
   - Two buttons: "Start a Project" (orange filled, large) + "View Our Work" (blue outline)
   - Background: white card on the light gray page bg, with subtle blue gradient accent or pattern
   - Generous padding, prominent feel

4. Add all three to app/page.tsx in order: Process → Testimonials → CTA

The homepage should now be complete with all sections. Review the full page flow and make sure spacing between sections is consistent (py-20 or py-24).
```

---

## Phase 5: Inner Pages

### Prompt 5.1 — Services Page

```
Build the Services detail page at app/services/page.tsx:

1. Hero banner at top: "Our Services" heading with subtle blue gradient background
2. Full listing of all 6 services in a more detailed format than the homepage cards:
   - Each service gets a larger block: icon, title, detailed description (2-3 sentences), list of specific deliverables/features (3-4 bullet points styled as check marks)
   - Alternate layout: odd services have icon-left, even have icon-right
3. Bottom CTA: "Have a project in mind? Let's talk." with contact button
4. Proper page metadata and title
5. ScrollReveal animations on each service block
```

### Prompt 5.2 — Portfolio Page

```
Build the Portfolio page at app/portfolio/page.tsx:

1. Hero banner: "Our Portfolio" heading
2. Filter bar: category buttons (All, Web App, E-Commerce, Corporate, UI/UX) — client-side filtering using useState
3. Grid of ALL projects from PROJECTS constant (6 projects)
4. Uses ProjectCard components
5. Smooth filter transition (framer motion AnimatePresence + layout animation)
6. Each card links to /portfolio/[slug] (just set up the links, we'll build the page next)
7. Responsive grid: 3 columns desktop, 2 tablet, 1 mobile

Then create app/portfolio/[slug]/page.tsx:
1. generateStaticParams from PROJECTS slugs
2. Project hero: large gradient image area, project title, category, tags
3. Project details section: "About This Project" description (use a longer description — add a 'fullDescription' field to the project data if needed)
4. Tech stack used: display tags as badges
5. "Challenge → Solution → Result" three-block layout
6. Navigation: "← Previous Project" / "Next Project →" links at bottom
7. CTA: "Like what you see? Start your project."

Add longer descriptions and challenge/solution/result content to the PROJECTS data in constants.ts.
```

### Prompt 5.3 — Contact Page

```
Build the Contact page at app/contact/page.tsx:

1. Split layout: contact form on left (60%), contact info on right (40%)
2. Form fields (use shadcn input/textarea):
   - Full Name (input, required)
   - Email (input, email type, required)  
   - Phone (input, optional)
   - Service Interested In (select/dropdown from services list)
   - Project Budget (select: "Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+")
   - Message (textarea, required)
   - Submit button: "Send Message" (blue, full width)
3. Form validation: client-side with useState, show inline error messages in red
4. On submit: show a success state (checkmark icon + "Thank you! We'll get back within 24 hours." message). No actual backend needed — just the UI state change.
5. Right side contact info:
   - Email with mail icon
   - Phone with phone icon
   - Address with map pin icon
   - Working hours: "Mon-Fri, 10:00 - 19:00 (Baku time)"
   - Social media links
6. Responsive: stack on mobile (info moves above form)
7. Page metadata
```

### Prompt 5.4 — About Page

```
Build the About page at app/about/page.tsx:

1. Hero section: "About Saytup" with a brief company story paragraph
   - "Founded in Baku, Azerbaijan, Saytup.az is a small but passionate web development studio. We believe every small business deserves a great online presence — one that's fast, beautiful, and actually helps grow the business."
   
2. Our Values section — 3 cards:
   - "Quality Over Quantity" — We take on fewer projects to deliver better results
   - "Transparency" — Clear communication, no surprises, honest timelines
   - "Long-Term Partnership" — We don't just build and leave, we grow with you

3. Team section (placeholder):
   - 2-3 team member cards with avatar circles (use gradient placeholders with initials)
   - Name, role, short bio
   - Sample: "Elvin Mammadov — Founder & Lead Developer", "Nigar Hasanova — UI/UX Designer", "Rashad Aliyev — Full-Stack Developer"

4. "Why Choose Us" section with 4 key differentiators in a 2x2 grid:
   - Local understanding of Azerbaijani businesses
   - Modern tech stack (React, Next.js)
   - Fixed-price projects, no surprises  
   - Free 1 year of support after launch

5. Bottom CTA section

6. Page metadata and animations
```

---

## Phase 6: Polish & Optimization

### Prompt 6.1 — Animations & Micro-interactions

```
Review the entire site and add polish:

1. Page transitions: Add a subtle fade transition between pages using Framer Motion and Next.js template.tsx
2. Navbar: Ensure scroll behavior is smooth — background opacity transition, maybe slight shadow appears on scroll
3. Button hover states: All buttons should have smooth transition (0.2s). Blue buttons: darken on hover. Orange buttons: slight darken. Outline buttons: fill on hover.
4. Link hover states: Blue color shift, underline animation (expand from left)
5. Card interactions: Consistent hover lift (translateY -4px) and shadow increase across all cards
6. Focus states: Visible focus rings using brand-blue for keyboard accessibility
7. Loading state: Add a simple page loading indicator or skeleton shimmer for the portfolio page
8. Smooth scroll: Enable smooth scrolling for anchor links (html scroll-behavior: smooth)
9. Back to top button: Appears after scrolling down 500px, smooth scrolls to top, blue circle with arrow

Review spacing, typography, and color consistency across ALL pages. Fix any inconsistencies.
```

### Prompt 6.2 — SEO & Performance

```
Optimize for SEO and performance:

1. Update app/layout.tsx metadata:
   - Title template: "%s | Saytup.az — Web Development Studio"
   - Default description for the site
   - Open Graph image (create a simple OG image component or use a gradient placeholder)
   - Twitter card meta tags
   - Favicon setup (just set up the references, we'll add actual files later)

2. Add metadata to EVERY page (services, portfolio, contact, about, each project page)

3. Create app/sitemap.ts — dynamic sitemap generation including all portfolio project pages

4. Create app/robots.ts — standard robots.txt

5. Semantic HTML audit:
   - Ensure proper heading hierarchy (h1 only once per page)
   - Use <main>, <nav>, <footer>, <section>, <article> landmarks
   - All images (when added) use next/image with proper alt text
   - Form labels properly associated with inputs

6. Performance:
   - Ensure fonts use next/font (no layout shift)
   - Add loading="lazy" behavior to below-fold content
   - Check that Framer Motion components use the 'use client' directive only where needed
   - Minimize client components — keep server components where possible

7. Add structured data (JSON-LD) to the homepage:
   - Organization schema with name, url, logo reference, contact info
```

### Prompt 6.3 — Final Review

```
Do a final review of the entire project:

1. Run the dev server and check every page compiles without errors or warnings
2. Check responsive design at: mobile (375px), tablet (768px), desktop (1280px), wide (1536px)
3. Verify all navigation links work correctly
4. Ensure consistent spacing between all sections (should be py-20 or py-24)
5. Check color contrast meets WCAG AA standards (4.5:1 ratio minimum)
6. Make sure no section uses orange as a large background surface
7. Verify all animations are smooth and not janky
8. Test mobile hamburger menu opens/closes correctly
9. Test contact form validation and success state
10. Check portfolio filtering works smoothly
11. Ensure TypeScript has no type errors: run npx tsc --noEmit
12. Check for any console errors or warnings

Fix everything you find. The site should feel polished and professional — like a real agency built it for themselves.
```

---

## Quick Reference: Key Commands

```bash
# Start dev server
npm run dev

# Type check
npx tsc --noEmit

# Build for production
npm run build

# Add a shadcn component
npx shadcn@latest add [component-name]
```

---

## Notes

- If Claude Code asks about any design decisions, always reference CLAUDE.md
- For any content questions, keep the tone professional but warm, focused on client value
- When in doubt about spacing: more whitespace is better than less
- Every component should be a separate file — no god components
- Keep the project structure clean and follow Next.js App Router conventions
