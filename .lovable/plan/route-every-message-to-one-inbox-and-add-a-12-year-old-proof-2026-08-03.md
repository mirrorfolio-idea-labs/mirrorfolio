# Route every message to one inbox, and add a 12-year-old-proof pitch

## 1. All mail lands in one inbox

The site currently shows four different addresses on `/contact` (`hello@`, `partners@`, `invest@`, `careers@`) plus `press@` in the sidebar, and `privacy@` is mentioned on the privacy page. Visually those stay exactly as they are — they read as a real, departmentalised company — but every actual send target becomes `kabeer@mirrorfolio.com`.

- Keep the displayed per-flow label (`Routed to partners@mirrorfolio.com`, etc.) unchanged.
- Make the clickable `mailto:` on that label, the press link, and the privacy mention all open `kabeer@mirrorfolio.com`, with a subject line carrying the flow name so the inbox stays sortable (e.g. `Mirrorfolio — Hospital partnership`).
- `/hello`'s existing fallback already goes to `kabeer@mirrorfolio.com`; leave it.

Note: the `/contact` form itself does not send anything yet — it shows a confirmation only. This change makes every email link point to one inbox; wiring real form delivery would be a separate step if you want it.

## 2. Elevator pitch on `/hello`

Add a short pitch block directly under the two existing lead lines, above the "Leave your details" button — plain sentences, under 50 words, no jargon. Draft:

> When an older adult returns home from the hospital, **families and clinicians have little visibility into how their recovery is progressing between visits.** Mirrorfolio quietly learns daily routines—sleep, movement, nutrition, and key health indicators—using discreet ambient sensors placed around the home, with no cameras, microphones, wearables, or lifestyle changes required. By learning what's normal for each individual, Mirrorfolio detects subtle changes early and alerts families and care teams before small issues become serious ones.

(44 words. Styled with the existing `.h-lead` type, no new CSS weight, no impact on the 200KB budget.)

## Technical notes

- `src/routes/contact.tsx`: add a single `INBOX` constant; keep `routedTo` as display text and add the mailto target/subject separately.
- `src/routes/privacy.tsx`: swap the `privacy@` prose mention for the shared inbox.
- `src/routes/hello.tsx`: insert the pitch paragraph in the header block.