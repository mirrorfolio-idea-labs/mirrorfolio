# UX copy pass against the premium design checklist

A copy-and-hierarchy pass across the site, run against the seven checklist decisions. Design language (paper grid, mono type, orange signal, hairline cells) stays exactly as is — this changes wording, ordering, and type scale only.

## What the checklist flags today

Hero (01, 02, 04): the headline renders small (capped at ~2.1rem), the product image occupies the loudest slot, and the lede plus "Join the waitlist" sit in a third row — on both a 375px phone and a 1280px desktop the visitor must scroll before they see what to do. There is no proof anywhere in the first screen.

Social proof (05): the validation figures live in section 08, far from the two moments of hesitation (the hero and the final CTA).

Numbers are inconsistent: the homepage says 21 pilot-ready households and 9 hardware iterations, while /hello says 54+ households waiting and Gen 8 hardware.

## Changes

### Hero — make the first screen a complete pitch
- Promote the headline to the loudest element on the page (larger clamp, tightened to three lines) and demote the image to a quieter supporting slot so the eye lands on words first.
- Move the lede and the primary "Join the waitlist" button up so they sit with the headline, above the fold at 375px and on desktop.
- Add one line of proof beside the CTA, drawn from the real figures: `350+ family conversations · 30+ homes · Kerala, India`.
- Sharpen the lede to lead with the outcome rather than the mechanism: what a family gets to know, then "No cameras. No wearables. Nothing to charge."

### Proof at the point of doubt
- Repeat a compact two-figure proof line inside the final CTA section, immediately next to the waitlist button.
- Keep the full metric row in section 08 as the detailed version.

### One number set everywhere
Pick the accurate figures and use the same ones on the homepage, /hello, /company, /families, and /hospitals. Confirm which is current: households waiting (21 or 54+) and hardware generation (9 iterations or Gen 8).

### Copy tightening, section by section
- Trim headlines that run past three lines so the size order stays readable.
- Cut hedging and internal framing ("we're preparing", "reflects manufacturing readiness") in favour of plain statements a family or a clinician would say back to you.
- Make every secondary link say where it goes and what happens ("See how it learns", "Partner your hospital").
- Keep one action per section, and keep it the highest-contrast element there.

### Contrast, type, mobile (04, 06, 07)
- Raise small muted text that currently sits at `text-xs` in the dark cells to a comfortable reading size.
- Confirm one action per screen is unmistakably the loudest.
- Verify at 375px in a phone-held check: headline, lede, proof, and the waitlist button all readable and tappable without scrolling; all tap targets 44px or more.

## Technical notes
- Files touched: `Hero.tsx`, `CTA.tsx`, `Validation.tsx`, `Gap.tsx`, `Reality.tsx`, `Solution.tsx`, `HowItLearns.tsx`, `Ecosystem.tsx`, `ForFamilies.tsx`, `ForHospitals.tsx`, `Vision.tsx`, plus copy in `routes/hello.tsx`, `families`, `hospitals`, `company`, `ecosystem`, `platform`, `contact`.
- No new dependencies, no token changes, no layout system changes — grid cells, rails, and stamps keep their current structure; only cell contents and a few type-scale clamps move.
- Verified after with Playwright screenshots at 375px and 1280px.

## One question before building
The households and hardware-generation figures disagree between the homepage and /hello — which pair is current?
