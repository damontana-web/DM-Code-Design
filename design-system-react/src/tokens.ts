/**
 * Design tokens mirrored from the Astro site's source of truth:
 * - src/assets/styles/global.css (`@theme` block — exact oklch values)
 * - DESIGN_SYSTEM.md (named brand colours, typography, spacing recipes)
 *
 * Keep these two in sync by hand; there is no automated extraction step.
 */

export const brand = {
  magenta: "#EA2295", // magenta-400 / magenta-500 — primary accent (icons, links, highlights)
  magentaButton: "#E90E8C", // PrimaryCTA ("Book a call") background only
  bluePrimary: "#2198F9", // logo accent, hero highlight
  blueDarkest: "#1A468E", // CTA module icon, pricing-card icon bg
  blueButton: "#2A4C9C", // SecondaryCTA ("See my work") border/text only
} as const;

export const text = {
  heading: "var(--color-gray-700)", // #374151 — standard colour for all h1-h3 sitewide
  body: "var(--color-neutral-600)",
  bodyDark: "var(--color-neutral-700)",
  muted: "var(--color-neutral-500)", // dates, captions, secondary meta
} as const;

/** Full palette scales, verbatim from global.css `@theme`. */
export const palette = {
  gray: {
    50: "oklch(0.985 0.002 247.839)",
    100: "oklch(0.967 0.003 264.542)",
    200: "oklch(0.928 0.006 264.531)",
    300: "oklch(0.872 0.01 258.338)",
    400: "oklch(0.707 0.022 261.325)",
    500: "oklch(0.551 0.027 264.364)",
    600: "oklch(0.446 0.03 256.802)",
    700: "oklch(0.373 0.034 259.733)",
    800: "oklch(0.278 0.033 256.848)",
    900: "oklch(0.21 0.034 264.665)",
    950: "oklch(0.13 0.028 261.692)",
  },
  neutral: {
    50: "oklch(0.985 0 0)",
    100: "oklch(0.97 0 0)",
    200: "oklch(0.922 0 0)",
    300: "oklch(0.87 0 0)",
    400: "oklch(0.708 0 0)",
    500: "oklch(0.556 0 0)",
    600: "oklch(0.439 0 0)",
    700: "oklch(0.371 0 0)",
    800: "oklch(0.269 0 0)",
    900: "oklch(0.205 0 0)",
    950: "oklch(0.145 0 0)",
  },
  zinc: {
    50: "oklch(0.985 0 0)",
    100: "oklch(0.967 0.001 286.375)",
    200: "oklch(0.92 0.004 286.32)",
    300: "oklch(0.871 0.006 286.286)",
    400: "oklch(0.705 0.015 286.067)",
    500: "oklch(0.552 0.016 285.938)",
    600: "oklch(0.442 0.017 285.786)",
    700: "oklch(0.37 0.013 285.805)",
    800: "oklch(0.274 0.006 286.033)",
    900: "oklch(0.21 0.006 285.885)",
    950: "oklch(0.141 0.005 285.823)",
  },
  yellow: {
    400: "oklch(0.852 0.199 91.936)",
    500: "oklch(0.795 0.184 86.047)",
  },
  red: {
    500: "oklch(0.637 0.237 25.331)",
    600: "oklch(0.577 0.245 27.325)",
  },
  magenta: {
    300: "oklch(0.75 0.18 340)",
    400: brand.magenta,
    500: brand.magenta,
    600: "oklch(0.55 0.2 340)",
  },
} as const;

export const typography = {
  fontFamily: {
    heading: "'Bricolage Grotesque', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },
  headings: {
    h1: { fontSize: "2.5em", lineHeight: 1.2, fontWeight: 500 },
    h2: { fontSize: "2em", lineHeight: 1.3, fontWeight: 400 },
    h3: { fontSize: "1.75em", lineHeight: 1.4, fontWeight: 400 },
    h4: { fontSize: "1.5em", lineHeight: 1.4, fontWeight: 400 },
    h5: { fontSize: "1.25em", lineHeight: 1.5, fontWeight: 500 },
    h6: { fontSize: "1.1em", lineHeight: 1.5, fontWeight: 500 },
  },
  /** The canonical page/section title recipe (Contact, Blog, Work, Portfolio, Services, About, FAQ…). */
  pageTitle: {
    heading: "text-balance text-2xl tracking-tight text-gray-700 md:text-4xl md:leading-tight",
    description: "mt-1 text-pretty text-neutral-600 dark:text-neutral-400",
  },
} as const;

export const spacing = {
  /** mt-10 above the title block, mb-4 between heading/description, mb-8 after description. */
  pageTitleBlock: { marginTop: "2.5rem", headingGap: "1rem", descriptionGap: "2rem" },
  sectionPaddingX: "px-4 sm:px-6 lg:px-8",
  sectionPaddingY: "py-10 sm:py-12 lg:py-14",
  homepageSectionPaddingY: "py-30",
} as const;

export const radii = {
  lg: "0.5rem", // rounded-lg — buttons, inputs, portfolio "wide" cards
  xl: "0.75rem", // rounded-xl — portfolio "small" cards, blog cards, glass panels
  full: "9999px", // rounded-full — avatars, pills, announcement banner
} as const;

/** HeadingIcon / pixel-icon canvas — every icon in the system shares this viewBox. */
export const icon = {
  viewBox: "0 0 24 24",
  defaultSize: "1em",
  headingSize: "1.5em",
} as const;
