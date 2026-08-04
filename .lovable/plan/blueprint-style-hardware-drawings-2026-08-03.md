## Blueprint-style hardware drawings

Replace the photoreal product renders with technical blueprint drawings — the right register for a pre-market company, and a much better fit for the hairline-grid, mono-label, orange-signal design language already in place.

### Form factors (from the references)

- **Home Hub** — upright cylinder, softly domed diffuser top, matte body with a distinct base collar in the lower third. Roughly 1:1.6 diameter-to-height. Sits on a surface, no visible controls.
- **Pill Companion** — flat rectangular tray, 326 × 184 × 60 mm, 21 compartments in a 7 × 3 grid (7 days × Morning / Afternoon / Night), separate lid that lifts off, small indicator dot on the front edge.

### What gets made

Four new drawings, generated as images and swapped into the existing asset slots:

1. `hero-hub` — Home Hub, three-quarter orthographic view with the cylinder's diffuser/base split called out, centre-line, and dimension ticks. This is the large homepage hero image.
2. `product-pill` — Pill Companion, top plan view showing the full 7 × 3 compartment grid plus a thin side elevation beneath it.
3. `product-nutrition` — Nutrition Box, drawn in the same blueprint hand so the family reads as one system (it's in-development, so an outline-only treatment is honest) the form factor is like a food container .
4. A cross-section / exploded variant of the Home Hub for the Platform page's ambient-observation section, if it reads well there.

### Drawing style (consistent across all four)

- Warm paper ground matching the site canvas (~#f4f3f1), true-black hairline linework, no shading, no gloss, no drop shadows.
- Thin construction lines: centre-lines, extension and dimension lines with arrow ticks, leader lines to small mono callouts.
- A single orange accent used sparingly — one indicator dot, one highlighted axis — mirroring the site's signal colour.
- Uniform line weight hierarchy: heavier outline, lighter interior, lightest construction. Nothing rendered, nothing photographic.

### Wiring

- Each image is generated to `src/assets/` and referenced through the existing imports in `products.data.ts` and `Hero.tsx`, so no layout changes are needed.
- `mix-blend-multiply` on the product images already suits line drawings on the paper canvas; it stays.
- Alt text updated to describe each as a technical drawing rather than a product photo.
- The retired photo files are deleted so the repo doesn't carry both.

### Notes

- The uploaded lamp photo and the pill-box viewer screenshot are used as form-factor reference only — neither is embedded on the site.
- The physical Pill Companion figures (326 × 184 × 60 mm, 21 compartments) are drawn onto the plan view as real dimension callouts, since those numbers came from you.
- Home Hub dimensions aren't known; its drawing carries proportion and part callouts but no fabricated millimetre figures. Tell me the real dimensions and I'll add them.
- Verified afterwards by loading the homepage, Ecosystem and Platform pages and checking the drawings read cleanly at both desktop and mobile widths.