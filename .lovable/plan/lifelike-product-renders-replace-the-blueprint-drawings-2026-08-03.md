# Lifelike product renders replace the blueprint drawings

The blueprint linework exposes internal construction. Swap all five hardware images for photoreal studio renders that keep the exact same form factors, and show only the outside of each object.

## What gets generated

Five new renders, one per product, on the warm paper ground (#f4f3f1) so they sit inside the hairline grid without a visible box:

- **Home Hub** — bedside table lamp: softly glowing white diffuser shade on a machined graphite base. Solid, seamless, no vents, no seams, no ports, no labels. The base reads as a plain cylinder — nothing hints at compute inside.
- **Pill Companion** — matte ceramic-white 7x3 tray, gentle radius, closed lid detail, no electronics visible.
- **Nutrition Box** — quiet countertop container in white and pale oak, plain exterior.
- **Vitals Planter** — artisanal glazed ceramic pot with an artificial plant on top. Reads purely as decor.
- **Presence Sensor** — flush ceiling disc, smoke-detector scale, plain white face, no grille pattern or lens.

Style is consistent across the set: soft diffuse studio light, low contrast, warm-neutral, a single soft floor shadow, three-quarter product view, no dimension callouts, no annotation, no exploded parts, no cutaways.

## Code changes

- `products.data.ts`: imports point at the new `render-*.jpg` files; copy stays as-is except the Home Hub body loses the sentence describing the base as where reasoning happens, so the page doesn't narrate internals the image no longer shows.
- `Hero.tsx`: uses the new hub render; alt text becomes a plain product description.
- `Ecosystem.tsx` and `ecosystem.tsx`: alt text changes from "Technical blueprint drawing of..." to "Mirrorfolio <name>".
- `mix-blend-multiply` is dropped for the renders (it muddies photographic tone) in favour of the paper-matched background; `object-contain` and padding stay.
- Old `blueprint-*.png` assets are deleted.
- "More Add-ons" stays imageless with its mesh placeholder.

## Notes

- Statuses, ordering, carousel behaviour, and all other copy are untouched.
- Verified afterwards with rendered checks of the homepage hero, the homepage carousel, and the ecosystem grid at mobile and desktop widths.
