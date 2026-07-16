## Setup

No provider or theme wrapper — every component is a plain function of its props, no context required. Just import and render:

```tsx
import { Button, Card } from "@damontana/design-system-react";
```

Fonts load via a remote Google Fonts `@import` already baked into `styles.css` ('Bricolage Grotesque' for headings, 'Plus Jakarta Sans' for body) — nothing else to wire up.

## Styling idiom

Tailwind CSS v4 utility classes, not props or CSS-in-JS — compose layout with the same utility vocabulary the components themselves use, don't invent prop-based styling APIs.

Real brand classes/values (from `styles.css`'s `@theme`):

| Purpose | Class / value | Notes |
|---|---|---|
| Primary accent | `text-magenta-500` / `text-magenta-400` (`#EA2295`) | icons, links, highlights — NOT buttons |
| Primary button fill | `bg-[#E90E8C]` | hardcoded on `Button` `variant="primary"` only; never used elsewhere |
| Secondary button border/text | `border-[#2A4C9C]` / `text-[#2A4C9C]` | `Button` `variant="secondary"` only |
| Brand blue | `text-blue-primary` (`#2198F9`) | logo/accent contexts |
| Heading text colour | `text-gray-700` | the ONLY colour for h1-h3 sitewide — never use `gray-700` as a background/button colour |
| Body copy | `text-neutral-600` / `text-neutral-700` | |
| Muted/meta text | `text-neutral-500` | dates, captions |
| Corners | `rounded-lg` (buttons, inputs, wide cards) / `rounded-xl` (small cards, blog cards) / `rounded-full` (avatars, pills) | |

Two CTA copy conventions carried over from the source site: primary buttons always read "Book a call"; secondary buttons read "Get in touch" or "See my work". Not enforced by the component — a content decision each time you place one.

Note: the `@theme` block defines more tokens (e.g. `blue-darkest`, `#1A468E`) than are used as Tailwind classes anywhere in the shipped components — those are only ever passed as raw hex values to props like `HeadingIcon`'s `color`, never as `bg-*`/`text-*` classes. Don't invent a class for them.

## Where the truth lives

- `styles.css` (and its `@import` closure) — the compiled stylesheet; read it before styling anything, it's the actual token source.
- Each component's `<Name>.d.ts` and `<Name>.prompt.md` — the API contract and usage reference.
- `tokens.ts` (bundled in the JS, not a separate stylesheet) exports the same palette as plain JS constants (`tokens.brand`, `tokens.palette`, `tokens.typography`, `tokens.spacing`, `tokens.radii`) for anywhere a hex/value is needed outside a className.

## Example composition

```tsx
import { Card, Button, Stat } from "@damontana/design-system-react";

function FeaturedWork() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
        <Card
          variant="portfolioWide"
          href="/portfolio/acme"
          imageSrc="/images/acme-cover.jpg"
          imageAlt="Acme dashboard"
          description="SaaS dashboard overhaul"
        />
        <div className="flex flex-col justify-center gap-6">
          <Stat size="lg" title="98%" subtitle="Client satisfaction rate" />
          <Button href="/contact">Book a call</Button>
        </div>
      </div>
    </section>
  );
}
```
