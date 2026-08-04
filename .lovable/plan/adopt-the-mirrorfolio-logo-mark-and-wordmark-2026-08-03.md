# Adopt the Mirrorfolio logo mark and wordmark

Replace every place the brand is currently drawn as text (or the orange square placeholder) with the supplied SVG artwork, kept as real SVG so it stays crisp at any size and inherits our ink colour.

## What changes

**Logo components (new)**
- A `Logo` component with two parts: `LogoMark` (the 103×103 square glyph) and `LogoWordmark` (the 383×50 "Mirrorfolio" lettering), plus a combined lockup used in the header.
- Both are inline SVG React components with `currentColor` fills instead of the hardcoded `#0D0D0D`, so they read as ink on the paper canvas and flip to light automatically inside dark cells (footer ink block).
- The mask in the mark gets a unique id per instance to avoid id collisions when the mark renders more than once on a page.

**Header (Nav)**
- The orange pulsing dot + "Mirrorfolio" text is replaced by the mark + wordmark lockup, sized to the 64px header (mark ~22px, wordmark height matched optically).
- Mobile drawer header gets the same lockup.
- Accessible name preserved via `aria-label` / visually hidden text so screen readers still hear "Mirrorfolio".

**Side rails**
- The "MF" text cell becomes the logo mark, centred in the 56×56 bordered cell.

**Footer**
- The wordmark replaces the text treatment in the brand block, with the mark alongside; legal line and copy stay as-is.

**Favicon / social**
- Add an SVG favicon generated from the mark (paper background, ink glyph) and keep the existing `.ico` as fallback.

## Notes
- No copy, layout, route or content changes — this is purely swapping text for artwork.
- Both SVGs live in one component file so sizing and colour behaviour stay consistent; nothing is duplicated per page.
- Verified afterwards with a rendered check of the header, rails, footer, and mobile drawer.

## Technical detail
- New `src/components/site/Logo.tsx` exporting `LogoMark`, `LogoWordmark`, `LogoLockup`; paths copied verbatim from the supplied SVGs with `fill="currentColor"`, `focusable="false"`, `aria-hidden` when a text label is present.
- Mark mask id via `useId()`.
- Edits to `src/components/site/Nav.tsx`, `src/components/site/SideRails.tsx`, `src/components/site/Footer.tsx`, and `src/routes/__root.tsx` (favicon link + `public/favicon.svg`).
