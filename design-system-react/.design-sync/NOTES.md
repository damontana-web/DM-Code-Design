# design-sync notes — design-system-react

## Known render warns

- `[RENDER_THIN]` on `StarRating` ("mounts have no text and paint nothing") — false positive. StarRating is a pure-SVG component (star icons, no text nodes), so the text-based heuristic always trips here. Confirmed via `_screenshots/general__StarRating.png`: all three cells (FiveFull, ThreeAndHalf, TwoOfFive) render correctly with proportional full/half/empty stars. Re-syncs should expect this warn on every run — not a new issue to chase.

## Re-sync risks

- `design-system-react/` is a hand-authored package (not derived from a Storybook or existing published library) — there is no upstream source to diff against if the Astro `.astro` components change. If the Astro site's design changes, someone needs to manually port the change into the relevant `src/components/*.tsx` file and re-run this sync; nothing will flag drift automatically.
- Card, Avatar, and StarRating each consolidate multiple distinct Astro components (see the design-sync report exchanged with the user before this sync) into one component with a discriminated-union `variant`/`style` prop. A future person adding a new Astro card/avatar variant needs to know to extend the React union too — there's no structural link enforcing this.
- Preview images use inline `data:image/svg+xml` placeholders (solid-color rectangles), not real project photography — swap these for real asset URLs in `.design-sync/previews/Card.tsx` and `Avatar.tsx` if the design agent's outputs should reflect actual portfolio imagery rather than color blocks.
- `AnnouncementBanner`'s preview wraps the component in a `transform: scale(1)` container so its `position: fixed` renders inside the card (fixed positioning is otherwise viewport-relative and would screenshot blank). This is a preview-only concession — the shipped component itself is untouched.
- No `docsDir`/per-component docs exist — every `.prompt.md` is synthesized from the `.d.ts` + authored preview. If real usage docs get written later, point `cfg.docsDir` at them.
- Chromium/Playwright were installed fresh into `.ds-sync/node_modules` for this run (not previously cached on this machine) — a re-sync on a different machine will need the same install-or-skip decision again.
