import type { Metadata } from "next";

import { HELLO_CSS } from "./hello.css";
import { HelloForm } from "./HelloForm";

// Swap these for the real hosted document URLs.
const PITCH_DECK_URL = "#";
const ONE_PAGER_URL = "#";
const SPEC_SHEET_URL = "#";

const EMAIL = "kabeer@mirrorfolio.com";
const PHONE = "+918139851688";

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Hadi;Ahammad Kabeer;;;",
  "FN:Ahammad Kabeer Hadi",
  "ORG:Mirrorfolio Idea Labs",
  "TITLE:Founder & CEO",
  `TEL;TYPE=CELL:${PHONE}`,
  `EMAIL;TYPE=INTERNET:${EMAIL}`,
  "URL:https://mirrorfolio.com",
  "END:VCARD",
  "",
].join("\r\n");

const VCARD_HREF = `data:text/vcard;charset=utf-8,${encodeURIComponent(VCARD)}`;

const title = "Mirrorfolio — Making recovery at home visible";
const description =
  "Ambient sensing that shows how recovery is really going after hospital discharge. Nothing worn, nothing charged, nothing to remember.";
const social = "Ambient sensing for recovery at home. Leave your details.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { type: "website", title, description: social },
  twitter: { card: "summary", title, description: social },
};

export default async function HelloPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const raw = (await searchParams).s;
  const source = typeof raw === "string" && raw ? raw : "card";

  return (
    <div className="h-page">
      <style dangerouslySetInnerHTML={{ __html: HELLO_CSS }} />
      <div className="h-wrap">
        <header>
          <p className="h-mark">Mirrorfolio</p>
          <h1 className="h-h1">Making recovery at home visible.</h1>
          <p className="h-lead">
            Ambient sensing that shows how recovery is really going after hospital discharge.
          </p>
          <p className="h-lead">Nothing worn. Nothing charged. Nothing to remember.</p>
          <p className="h-lead">
            When an older adult comes home from hospital, nobody can see how the recovery is really
            going.
          </p>
          <p className="h-lead">
            We put a few quiet devices around the home. No cameras. No wearables.
          </p>
          <p className="h-lead">
            They learn what a normal day looks like — sleeping, moving, eating, taking medicine.
          </p>
          <p className="h-lead">
            When that changes, family and doctors hear about it early, while it is still a small
            thing.
          </p>
          <a className="h-cta" href="#details">
            Leave your details
          </a>
          <p className="h-note">Takes 20 seconds. Four fields.</p>
        </header>

        <hr className="h-rule" />

        <a className="h-row" href={PITCH_DECK_URL}>
          Download the pitch deck
        </a>
        <a className="h-row" href={VCARD_HREF} download="ahammad-kabeer-hadi.vcf">
          Save my contact
        </a>
        <a className="h-row quiet" href={ONE_PAGER_URL}>
          One-pager (PDF)
        </a>
        <a className="h-row quiet" href={SPEC_SHEET_URL}>
          Spec sheet (PDF)
        </a>

        <hr className="h-rule" />

        <section>
          <p className="h-label">Routine Stability Intelligence</p>
          <ul className="h-rsi">
            <li>
              <b>Sense</b> Small ambient devices around the home read movement, rest and routine — no
              cameras, no wearables.
            </li>
            <li>
              <b>Learn</b> On-device intelligence builds a picture of what normal looks like for that
              one person.
            </li>
            <li>
              <b>Notice</b> When the pattern drifts — sleep, mobility, medication — the change is
              flagged early.
            </li>
            <li>
              <b>Act</b> Family and clinicians get a plain-language signal in time to do something
              about it.
            </li>
          </ul>
          <p className="h-facts">
            350+ family conversations · 30+ real-home validations · 54+ households waiting · Gen 8
            hardware
          </p>
        </section>

        <hr className="h-rule" />

        <section id="details">
          <p className="h-label">Leave your details</p>
          <HelloForm source={source} />
        </section>
      </div>
    </div>
  );
}
