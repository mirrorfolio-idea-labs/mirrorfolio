# /hello — conference QR landing page

A standalone, ultra-light page for stall visitors: thirty seconds, one hand, bad mobile data. It shares nothing with the main site chrome and links nowhere else.

## Above the fold (375px, no scroll)

- Mirrorfolio wordmark, small (inline SVG already in the project — no image request)
- Headline: "Making recovery at home visible."
- Two lines: "Ambient sensing that shows how recovery is really going after hospital discharge." / "Nothing worn. Nothing charged. Nothing to remember."
- Full-width, highest-contrast button: "Leave your details" — plain anchor to `#details`

## Below

1. **Download the pitch deck** — direct external link, no gate
2. **Save my contact** — downloads a `.vcf` for Ahammad Kabeer Hadi, Founder & CEO, Mirrorfolio Idea Labs, +91 8139851688, kabeer@mirrorfolio.com, mirrorfolio.com
3. Quieter secondary links: one-pager, spec sheet
4. Routine Stability Intelligence, four lines — Sense / Learn / Notice / Act, one sentence each
5. Validation as inline text: 350+ customer discovery interviews · 30+ prototype deployments · 54+ households waiting on launch · Gen 8 current hardware
6. **Form** at `#details`: Name (required), Email (required), Organisation, Role select (Investor / Hospital or clinician / Founder or partner / Other), Message (optional, 3 rows), submit "Send". Success swaps the form for a one-line confirmation in place, no navigation. Failure shows a `mailto:kabeer@mirrorfolio.com` fallback with the entered details prefilled — never a red error.

## Behaviour

- `?s=` is read from the URL and sent with the submission; defaults to `card`. Also rendered as a hidden field so it survives a no-JS post.
- Every tap target ≥ 44px; all text ≥ 16px so iOS never zooms on focus.
- No storage, no cookies, no analytics, no animation library, no images, no video.
- Renders fully and reads correctly with JavaScript off; only the form needs JS.

## Performance approach

- The page is served with its own minimal HTML shell: no site nav, side rails, footer, React Query provider, Google Fonts link, or the main `styles.css`.
- Critical CSS is inlined in the page head as a small hand-written block (~2KB) — system font stack first (`-apple-system, Segoe UI, Roboto, sans-serif`), plus a single JetBrains Mono 400 weight loaded async with `font-display: swap` for the wordmark area only. If that font measures as a risk to the budget, it is dropped and the page runs pure system fonts.
- No Tailwind on this route; no component library imports (nothing from `components/ui`, no lucide, no sonner).
- Target: well under 200KB total, meaningful render under 2s on throttled 3G. Verified with a build-size check and a throttled render pass before delivery.

## Things I need from you

- **Download URLs**: you chose external links, but I don't have them yet. I'll wire three named constants at the top of the file (`PITCH_DECK_URL`, `ONE_PAGER_URL`, `SPEC_SHEET_URL`) pointing at `#` placeholders, and swap in your Drive/DocSend links the moment you paste them.
- **Form endpoint**: since the backend is coming separately, the submit posts JSON to a single constant `LEAD_ENDPOINT`. Until that exists, submissions fall through to the mailto path, which is the designed failure state — so no lead is lost. Point the constant at your endpoint later and it starts posting.

## Technical detail

- New route `src/routes/hello.tsx` with `validateSearch` for `s`, own `head()` (title, description, og/twitter, `robots: noindex` since it's a scan target), and inlined `<style>` via head `styles`/`scripts` so no extra CSS request is made.
- Root chrome exclusion: `__root.tsx`'s `RootComponent` renders Nav/SideRails/Footer for all routes, so it gets a check on the matched pathname to render a bare `<Outlet />` for `/hello` only. This is the one edit outside the new file.
- vCard is generated as a `data:text/vcard` href with a `download` attribute — no server round trip, no file to host.
- Form is a real `<form method="post">` with `onSubmit` intercepted by JS; local `useState` for idle/sending/sent/failed. No react-hook-form, no zod on this route — `required`/`type=email` handle validation natively.
