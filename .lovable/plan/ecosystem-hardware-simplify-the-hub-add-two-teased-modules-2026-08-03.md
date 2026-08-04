# Ecosystem hardware: simplify the Hub, add two teased modules

Bring the drawings and the product family in line with what the hardware actually is today: a lamp-like Home Hub with no visible sensing, a pill organiser, and everything else clearly teased as upcoming.

## Home Hub — remove the sensor language

- Redraw the Home Hub blueprint as a plain bedside-lamp form: upright cylinder, softly domed diffuser top, body, base collar. No aperture, no sensor window, no lens callout — the drawing should read as a lamp, because that is the point.
- Callouts limited to neutral construction labels (diffuser, body, base collar) plus dimension ticks.
- Same paper ground, hairline black linework, single orange signal dot as the existing set, so it drops straight into the grid canvas.

## Two new blueprint modules

- **Vitals Mug** — an artisanal ceramic mug: side elevation with handle, plan view of the rim, thin construction geometry through the base where the sensing lives. Non-contact vitals read while someone holds their morning drink. Teased, not shipping.
- **Presence Sensor** — a ceiling-mounted disc in the visual language of a smoke detector: plan view (circular, concentric hairlines, mounting bosses) plus a shallow side elevation showing ceiling standoff. Covers fall and emergency signalling. Teased, not shipping.

Both drawn outline-only in the same blueprint style as the in-development pieces, so status reads visually as well as in text.

## Product family and status

Reordered so the two real products lead and everything else is honestly future-facing:

```text
Home Hub          Shipping          Movement · Rest
Pill Companion    Shipping          Medication
Nutrition Box     In Development    Hydration · Meals
Vitals Mug        Coming Soon       Vitals
Presence Sensor   Coming Soon       Safety
```

- The old text-only "Physiological Module" and "Emergency Response" entries are replaced by the Vitals Mug and Presence Sensor, now with drawings.
- Nutrition Box stays In Development, expected 2027.
- Coming Soon copy keeps the teasing register — what the module will observe, not a spec sheet, no dates promised beyond the existing expectation years.

## Copy touched

- Ecosystem page description updated to name the mug and presence sensor instead of the generic "physiological and emergency modules".
- Hub copy on the homepage and ecosystem page loses any phrasing that implies a visible sensing surface; the "no cameras, no wearables" privacy line stays exactly as-is since it still holds.

## Technical detail
- Generate `src/assets/blueprint-hub.png` (replacing the current one), `blueprint-vitals-mug.png`, `blueprint-presence.png` with the premium image model, matching the existing blueprint style prompt (paper `#f4f3f1`, true-black hairlines, mono labels, one `#FF5C00` accent).
- Update `src/components/site/products.data.ts` entries, imports and order; `img` now set on all five.
- Update the description constant in `src/routes/ecosystem.tsx` and the Hero image reference if the regenerated hub file name changes (it does not).
- Verify the rendered ecosystem grid and hero with a headless browser pass so the new drawings sit correctly under `object-contain` and `mix-blend-multiply`.
