# DaMontana Design + Code — Design System

Reference for the visual system used across the site. Built on Astro 5 + Tailwind CSS v4. All tokens live in `src/assets/styles/global.css` under `@theme`; component patterns live under `src/components/`.

---

## 1. Colour

### Brand colours

| Name | Token / value | Usage |
|---|---|---|
| Brand magenta | `#EA2295` (`magenta-400` / `magenta-500`) | Primary accent — icons, links, highlights |
| Button magenta | `#E90E8C` (hardcoded in `PrimaryCTA.astro`) | "Book a call" style buttons only |
| Brand blue (primary) | `#2198F9` (`blue-primary`) | Logo accent, hero `+`/`{code}` highlight |
| Brand blue (darkest) | `#1A468E` (`blue-darkest`) | CTA module icon, pricing-card icons background gradient, tab icons on hover context |
| Button blue | `#2A4C9C` (hardcoded in `SecondaryCTA.astro`) | Outline "See my work" style buttons only |
| Logo gradient | `#2A3A8F` → `#2198F9` | Logo mark only |

### Text & heading colour

| Name | Token | Usage |
|---|---|---|
| Heading grey | `text-gray-700` (`oklch(0.373 0.034 259.733)` / `#374151`) | **Standard colour for all section/page headings** (h1–h3) sitewide |
| Body copy | `text-neutral-600` / `text-neutral-700` | Paragraph text |
| Muted/meta | `text-neutral-500` | Dates, captions, secondary meta |

> **Do not** treat `gray-700` as a brand accent — it is purely the standardized heading-text colour, not a background/button colour.

### Icon colour rules

Icons default to inheriting the heading's colour (`currentColor`), except these deliberate overrides:

| Context | Colour |
|---|---|
| Standard heading icons (About, Services, Work, FAQ, feature cards, etc.) | `gray-700` (inherits from heading) |
| "How I Work" tab icons | Brand magenta `#EA2295` |
| Pricing-card icons ("How We Can Work Together") | White `#fff` |
| CTA module icon ("Got a project in mind?" etc.) | `blue-darkest` `#1A468E` (pinned, matches heading grey visually but explicitly set since icon sits outside the heading's DOM) |
| Recognition award icons (About page) | Brand magenta `#EA2295` |
| Contact page icon-block icons | `#404040` (matches `text-neutral-700` heading colour) |

### Neutral / semantic scale

Standard Tailwind `neutral`, `gray`, `zinc` scales are defined in the theme (`--color-*: initial` reset means **only** explicitly-declared scales exist — don't assume default Tailwind colours are available beyond what's in `global.css`).

---

## 2. Typography

**Headings:** `'Bricolage Grotesque'` — loaded via Google Fonts `@import` in `global.css`, applied to `h1`–`h6` in `@layer base`. `h1`, `h5`, `h6` default to weight `500`; `h2`, `h3`, `h4` default to weight `400`.

**Body:** `'Plus Jakarta Sans', sans-serif` (variable, weights 100–900), self-hosted via `@font-face`. Default weight 400.

### Standard page/section title recipe

The canonical heading size — used on Contact, Blog (listing + post), Work, Portfolio items, Services, About, FAQ, etc:

```html
<h1 class="text-balance text-2xl tracking-tight text-gray-700 md:text-4xl md:leading-tight">
  Title
</h1>
<p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400">
  Description
</p>
```

- Mobile: 24px (`text-2xl`)
- Desktop (`md:` 768px+): 36px (`text-4xl`), tighter leading

### Other established sizes

| Context | Classes |
|---|---|
| Homepage hero `<h1>` | `text-3xl sm:text-4xl lg:text-6xl` |
| Card/feature sub-headings | `text-xl font-bold` |
| CTA module heading (reduced from original) | `text-2xl md:text-4xl md:leading-tight` |
| "How We Can Work Together" heading | `text-2xl md:text-4xl md:leading-tight` (matches "Recent Work") |

---

## 3. Spacing

### Page-title block (reference: Services page `MainSection.astro`)

```html
<div class="mx-auto mt-10 max-w-3xl text-center">
  <h1 class="mb-4 ...">Title</h1>
  <p class="mb-8 mt-1 ...">Description</p>
</div>
```

- `mt-10` (40px) above the block
- `mb-4` (16px) between heading and description
- `mb-8` (32px) after the description before whatever follows

This exact recipe is replicated on: Contact, Blog listing, Blog post, Insights post, Work, Portfolio item pages.

### Standard section padding

```
px-4 sm:px-6 lg:px-8   (horizontal, all sections)
py-10 sm:py-... lg:py-14   (vertical, content sections)
```

Homepage sections typically use more generous `py-30` (larger, more breathing room, homepage only).

---

## 4. Icons

**Icon source:** [Pixelarticons](https://pixelarticons.com/) — pixelated-art style icon set. SVG paths are copied into components directly (no external runtime dependency).

All custom inline icons use a single shared component: **`src/components/ui/icons/HeadingIcon.astro`**

```astro
<HeadingIcon
  d="M2 8h2v12H2z..."      // SVG path (string or array of path strings)
  size="1.5em"               // height AND width — always square, 24×24 viewBox
  color="#1A468E"            // optional; omit to inherit currentColor
  flexAlign                  // icon sits left of text in a flex row (no shrink)
  centered                   // icon renders as its own centered block above the text
/>
```

**Rules:**
- viewBox is always `0 0 24 24` — every icon in the system shares this canvas.
- `width` and `height` must both be set to `size` explicitly (never `width: auto`) and `flex-shrink: 0` must always be set — omitting either causes icons to render inconsistently sized when placed next to text of varying length inside a flex row (this was a real bug, fixed sitewide).
- Default pattern (`flexAlign`): icon inline, left of heading text, `1.5em` size — used for most section headings.
- `centered` pattern: icon as its own row, centered, `margin: 0 auto 0.5rem` — used for pricing cards and the CTA module.
- Registry-based icons (`Icon.astro` + `icons.ts`) still exist for a handful of legacy/generic icons (checkmarks, arrows, social icons) — `HeadingIcon` is for brand-drawn heading icons specifically.

---

## 5. Buttons

### Primary CTA (`PrimaryCTA.astro`)
Solid magenta pill, white text, trailing arrow icon.
```
bg-[#E90E8C] hover:bg-[#E90E8C]/90 text-neutral-50
rounded-lg px-4 py-3 text-sm font-bold
```
Used for: "Book a call" (primary action, fixed label sitewide).

### Secondary CTA (`SecondaryCTA.astro`)
Outline button, transparent background, blue border/text.
```
border-2 border-[#2A4C9C] text-[#2A4C9C] bg-transparent
rounded-lg px-4 py-3 text-sm font-medium
```
Used for: "See my work" / "Get in touch" (secondary action).

**Copy convention:** every CTA button sitewide uses one of exactly two fixed labels — **"Book a call"** (primary) or **"Get in touch"**/**"See my work"** (secondary) — never bespoke button copy.

---

## 6. Cards

`CardSmall.astro` / `CardWide.astro` (portfolio/work grid cards):

```
group relative flex h-48 md:h-80 items-end overflow-hidden rounded-xl
ring-1 ring-inset ring-blue-primary/20
shadow-lg transition-all duration-300
hover:-translate-y-1 hover:shadow-xl
focus-visible:ring-3 focus-visible:ring-blue-primary
```

Image overlay (bottom-to-top gradient, brand blue):
```
pointer-events-none absolute inset-0 bg-linear-to-t
from-blue-darkest via-transparent to-transparent opacity-70
```

Label text: `text-neutral-50 font-bold`, scales up slightly on hover (`group-hover:scale-110`).

---

## 7. Cards & panels — elevated surface

"Glass card" style used for the About page Recognition panel:

```
rounded-xl border border-white/80
bg-gradient-to-br from-white to-gray-100
shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]
p-8
```

CTA module decorative background (blurred colour blobs behind a frosted glass layer) — see `HeroSectionAlt.astro` for the full pattern; uses:
```
shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
bg-white/5 backdrop-blur-2xl
```

---

## 8. Layout patterns

### Two-column detail page (Blog post, Insights post, Portfolio item)

1. Title + description block: full-width, centered, spans both columns (uses the standard page-title recipe above).
2. Below that, a 2-column grid (`grid gap-8 md:grid-cols-2 lg:gap-12`):
   - Left: image / gallery / TOC + meta panel
   - Right: main content
   - Both columns share `md:pt-8` so their content starts at the same height on desktop (no extra offset on mobile).

### Centered intro + content sections (About, Services, Work)

`MainSection.astro` (page intro) → alternating `RightSection.astro` / `LeftSection.astro` (image + text blocks, image side alternates) → closing `HeroSectionAlt.astro` (CTA module).

---

## 9. Key reusable components

| Component | Purpose |
|---|---|
| `MainSection.astro` | Page intro (title + description + optional button), icon-ready |
| `RightSection.astro` / `LeftSection.astro` | Alternating image/text content blocks |
| `HeroSectionAlt.astro` | The "CTA module" — closing call-to-action, used on Home/Services/Portfolio/About |
| `CTASection.astro` | "How We Can Work Together" — three-plan pricing-style cards (renamed from `PricingSection.astro`; site has no literal pricing) |
| `FeaturesGeneral.astro` / `IconBlock.astro` | "What I Do" feature grid |
| `FeaturesNavs.astro` / `TabNav.astro` | "How I Work" tabbed section |
| `FeaturesStatsAlt.astro` | "How these get built" (Work page) |
| `FAQ.astro` / `AccordionItem.astro` | FAQ accordion |
| `ContactSection.astro` / `ContactIconBlock.astro` | Contact page layout + icon rows |
| `CardSmall.astro` / `CardWide.astro` | Portfolio/work grid cards |
| `AnnouncementBanner.astro` | Dismissible bottom banner (dark glass pill, avatar, text, single CTA) |
| `HeadingIcon.astro` | Shared inline/centered icon renderer (see §4) |

---

## 10. Brand voice notes

- Contractions used throughout body copy ("I'll", "you're") **except** closing-CTA-adjacent copy on About/Services, which was deliberately shifted to formal, contraction-free phrasing ("I will", "you are").
- Copy is short, plain-English, no jargon — a recurring explicit direction across content passes.
