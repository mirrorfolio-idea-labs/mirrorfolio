# Ecosystem revision: plant pot, honest statuses, full family on the homepage

## Drawings

- **Replace the Vitals Mug with a Vitals Planter** — an artisanal ceramic pot with artificial plants sitting in the top, drawn in the same blueprint hand: side elevation with the foliage as light hairline silhouettes, plan view of the rim, thin construction geometry through the base where the sensing sits. Non-contact vitals from an object that reads as decor, not hardware.
- **Redraw the Home Hub with far more depth.** Two-part read: the upper lamp shade/diffuser drawn simply (it exists only to fit a home), and the lower base drawn as a proper technical assembly — stacked internal layers, compute board plane, thermal/vent path, base collar, centre-line, section ticks and mono callouts. The complexity lives in the base because that is where the intelligence lives.
- New file `blueprint-vitals-planter.png` replaces `blueprint-vitals-mug.png`; `blueprint-hub.png` is regenerated in place. Same paper ground, true-black hairlines, single orange signal accent.

## Status and copy

```text
Home Hub          In Development    Intelligence · Routine
Pill Companion    In Development    Medication
Nutrition Box     Coming Soon       Hydration · Meals
Vitals Planter    Coming Soon       Vitals
Presence Sensor   Coming Soon       Safety
More Add-ons      Coming Soon       Expanding        (no image)
```

- Nothing is described as Shipping anymore; "Gen 10" labels are dropped and replaced with honest expectation lines.
- **Home Hub becomes the brain of the system** — copy reframed around it being where the intelligence lives: on-device reasoning, the point every other module reports into. The lamp form is framed as the enclosure, not the product.
- **More Add-ons** is the final tile: no drawing, teasing that the family keeps growing as new everyday objects join the system. It uses the existing "Undisclosed" placeholder cell on the ecosystem page.

## Homepage carousel

The homepage ecosystem section currently shows only the first three products in a static 3-up grid. It becomes a horizontal carousel showing the **full family including the new entries** — scroll-snap track, hairline cell dividers matching the grid language, prev/next mono controls plus keyboard and drag scrolling, no auto-advance (calm pacing). On mobile it's a single-card swipe. The imageless Add-ons card renders as a grid-mesh cell with its label.

## Technical detail

- Generate the two images with the premium model into `src/assets/`; delete `blueprint-vitals-mug.png`.
- `src/components/site/products.data.ts`: new imports, statuses, `when` values, reordered array, Home Hub body rewritten, `More Add-ons` entry with no `img`.
- `src/components/site/Ecosystem.tsx`: replace the `slice(0, 3)` grid with the snap carousel over all products; keep `StatusTag`, `dimension` label, grid-mesh overlay and `mix-blend-multiply`.
- `src/components/site/Section.tsx`: add a `Coming Soon` entry to `statusStyle`; the `Shipping` style stays defined but unused.
- `src/components/site/Hero.tsx`: hub caption changes from `Shipping · Gen 10` to the in-development framing, and alt text updated for the richer drawing.
- `src/routes/ecosystem.tsx`: rail note and page description updated to the new counts and names.
- Verified afterwards with a headless pass over the homepage carousel and the ecosystem grid at desktop and mobile widths.
