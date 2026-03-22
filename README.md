# Saytup.az Portfolio Website

> A Next.js portfolio website for Saytup.az — a web development studio in Baku, Azerbaijan.

## Project Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | **Master project guide** — brand system, architecture, design specs, component guidelines. Claude Code reads this as its source of truth. |
| `PROMPT.md` | **Step-by-step prompts** — copy these into Claude Code in order (Phase 1 → 6) to build the entire site incrementally. |
| `README.md` | This file. Quick start and overview. |

## How to Build

1. Open your project directory in Claude Code
2. Place `CLAUDE.md` and `PROMPT.md` in the root
3. Follow the prompts in `PROMPT.md` one by one — each phase builds on the previous
4. Start with Phase 1 (project setup) and work through to Phase 6 (polish)

## Tech Stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** for animations
- **Lucide React** for icons
- **Instrument Sans + DM Sans** fonts

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Blue | `#1A73E8` | Primary — headers, links, UI elements |
| Orange | `#FF6D00` | Accent — CTAs, highlights (never large surfaces) |
| Light | `#F5F5F5` | Page background |

## Pages

- `/` — Homepage (Hero, Stats, Services, Portfolio, Process, Testimonials, CTA)
- `/services` — Detailed services page
- `/portfolio` — Project grid with category filtering
- `/portfolio/[slug]` — Individual project case study
- `/about` — Team and company story
- `/contact` — Contact form with validation
