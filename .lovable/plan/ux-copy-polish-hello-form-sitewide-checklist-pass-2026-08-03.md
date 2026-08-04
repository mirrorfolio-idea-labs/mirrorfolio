# UX copy polish: /hello form + sitewide checklist pass

Two connected pieces of work: tighten the microcopy of the conference lead form on `/hello`, then run every section of the main site against the Premium Web Design Checklist for hierarchy, CTA placement, proof placement and figure consistency. Copy and presentation only — no new features, no backend, no layout rebuilds.

## Part 1 — `/hello` lead form microcopy

The page currently works but the form reads like a generic contact form, and the elevator pitch is one long paragraph that a standing visitor won't finish. Fixes, all inside `src/routes/hello.tsx`:

- **Pitch above the button**: split the long single paragraph into two short lines a visitor can absorb in one glance, keeping the plain-language "learns what's normal, notices when it changes" idea. No new words about features.
- **Form heading and intro**: replace the bare "Leave your details" label with a heading plus one line of reassurance that says what happens next and that nothing is shared — the point of hesitation is right here, so the reassurance belongs here.
- **Labels**: keep them short and human — Name, Email, Organisation, "You are…" for the role selector, "Anything you want us to know (optional)" for the message.
- **Role selector**: add a neutral "Select one" default so the first option isn't silently submitted as "Investor" when the visitor never touches the field.
- **Helper text**: one line under Email explaining it is only used to reply. Nothing else — every extra line costs seconds.
- **Button**: "Send my details" instead of "Send"; sending state reads "Sending…"; on a slow connection the button stays disabled so a second tap can't double-submit.
- **Success confirmation**: name the person who will reply and the expected timeframe, and offer the two useful next actions (save contact, pitch deck) so the page still has value after submitting.
- **Mailto fallback**: reword to explain plainly that the connection dropped, that their answers are already inside the draft email, and that all they need to do is press send. Also surface the direct email address and phone as a last resort.
- **Accessibility/mobile**: keep every tap target at the existing 48–54px, keep font-size 16px on inputs (prevents iOS zoom), and add `inputMode`/`autoCapitalize` hints so typing is faster one-handed. No new fonts, scripts or assets — the page stays inside its weight budget.

## Part 2 — sitewide copy audit against the checklist

Checked against the checklist's seven items, these are the gaps worth fixing:

**Inconsistent proof figures.** The same evidence is worded three different ways: "350+ family conversations" (Hero, Validation), "350+ customer discovery interviews" (`/hello`), "30+ homes" / "30+ real-home validations" / "30+ prototype deployments". Settle on one phrasing per figure and use it everywhere: 350+ family conversations · 30+ real-home validations · 54+ households waiting · Gen 8 hardware. Files: `Hero.tsx`, `Validation.tsx`, `CTA.tsx`, `hello.tsx`, `company.tsx`, `contact.tsx`.

**Interior pages have no proof or action on the first screen.** Every interior route (`/platform`, `/ecosystem`, `/families`, `/hospitals`, `/company`, `/careers`) opens with a headline and lede only — no proof line, no call to action until the visitor scrolls to the bottom. Extend the shared `PageHeader` with optional proof and action slots, then pass the page-appropriate proof line and primary CTA on each route. The homepage hero already does this correctly and stays as the model.

**Section ledes carry too much at once.** `Reality`, `HowItLearns`, `ForHospitals` and `Vision` each use one dense 45–60 word paragraph. Cut each to a lead sentence plus supporting sentence so the eye has somewhere to land, keeping the existing meaning and voice.

**CTA wording drift.** The primary action is "Join the waitlist" in the hero and closing CTA, but interior pages use varied secondary phrasings. Standardise: primary is always "Join the waitlist", hospital path is always "Partner your hospital", investor path is always "Investor enquiries". Only one high-contrast orange CTA per screen; the rest stay bordered or quiet.

**Proof at the point of doubt.** Move or add a short proof line directly next to each decision point — beside the waitlist CTA, on the hospital page near the partnership ask, and on the contact form intros — rather than only in the Validation section.

## Technical notes

- All edits are in `src/routes/hello.tsx`, `src/components/site/` (`Hero`, `Reality`, `HowItLearns`, `ForHospitals`, `Vision`, `Validation`, `CTA`, `PageHeader`) and the interior route files.
- `validationMetrics` in `Validation.tsx` is already the shared source for the figures and stays the single source of truth; the prose lines will be derived from the same wording.
- `PageHeader` gains two optional props (`proof`, `action`) so existing calls keep working.
- `/hello` keeps its inlined CSS, system font stack, no animation library and no imagery — the budget is unchanged.
- After the edits, verify the homepage, one interior page and `/hello` at mobile width with a screenshot pass, and confirm the primary CTA is reachable without scrolling on a phone.

## Out of scope

No changes to visual language, colour, typography, imagery, routes or backend behaviour. The lead form still posts to the same placeholder endpoint with the same mailto fallback.
