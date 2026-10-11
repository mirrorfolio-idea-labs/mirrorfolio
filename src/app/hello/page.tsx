import type { Metadata } from "next";
import Image from "next/image";

import starterKit from "@/assets/gen8-starter-kit.jpg";

import { HELLO_CSS } from "./hello.css";
import { HelloNav } from "./HelloNav";
import { HelloForm } from "./HelloForm";

/**
 * Hosted document URLs. Paste a real URL and the row becomes a link; leave it
 * empty and the row degrades into "request it by email" rather than a dead
 * anchor. This page is printed on a visiting card, so it has to stay useful
 * long after anyone last edited this file.
 *
 * Google links use /preview rather than /edit: it opens a clean read-only
 * viewer on a phone instead of the editor chrome. Each document must be shared
 * as "Anyone with the link — Viewer" or these rows dead-end on a request-access
 * screen.
 */
const PITCH_DECK_URL =
  "https://docs.google.com/presentation/d/1wlWqMJ4zNuNmK4NUm-VZSyS5dEmM_KdH7bHBas4kxCY/preview";
const ONE_PAGER_URL =
  "https://drive.google.com/file/d/1CdAf1M5urpTGoeadD91I6d9-_Yb9S12M/preview";

/** Shown in the footer once set. */
const CIN = "";

const UPDATED = "Updated Oct 2026";

const EMAIL = "kabeer@mirrorfolio.com";
const PHONE = "+918139851688";
const PHONE_DISPLAY = "+91 81398 51688";

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Hadi;Ahammad Kabeer;;;",
  "FN:Ahammad Kabeer Hadi",
  "ORG:Mirrorfolio Idea Labs Pvt. Ltd.",
  "TITLE:Founder & CEO",
  `TEL;TYPE=CELL:${PHONE}`,
  `EMAIL;TYPE=INTERNET:${EMAIL}`,
  "URL:https://mirrorfolio.com",
  "NOTE:Mirrorfolio. Making recovery at home visible.",
  "END:VCARD",
  "",
].join("\r\n");

const VCARD_HREF = `data:text/vcard;charset=utf-8,${encodeURIComponent(VCARD)}`;

function askHref(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

type Document = {
  url: string;
  /** Shown when the document is hosted. */
  title: string;
  /** Shown when it is not — the row becomes an email instead. */
  ask: string;
  desc: string;
  kind: string;
  /** Not published openly: the row points at the contact form instead. */
  gated?: boolean;
};

const documents: Document[] = [
  {
    url: PITCH_DECK_URL,
    title: "Investor pitch deck",
    ask: "Request the pitch deck",
    desc: "Why now, what we are building, how it reaches homes, and what we are raising for.",
    kind: "Slides",
  },
  {
    url: ONE_PAGER_URL,
    title: "One-pager",
    ask: "Request the one-pager",
    desc: "Mirrorfolio on a single page. The one to forward to a colleague.",
    kind: "PDF",
  },
  {
    url: "",
    title: "Technical specification, shared after a first conversation",
    ask: "Technical specification, shared after a first conversation",
    desc: "Leave your details and Kabeer will send it across.",
    kind: "On request",
    gated: true,
  },
];

const steps: [string, string][] = [
  [
    "Discharge",
    "The hospital recommends the kit at discharge, and the family sets it up at home. Nothing to wear, charge or press.",
  ],
  [
    "Sense",
    "A few quiet devices read breathing, heart rhythm, movement, sleep, meals and medication from across the room. No cameras, no microphones, nothing worn.",
  ],
  [
    "Learn",
    "The hub inside the home builds a picture of what normal looks like for one particular person over the first weeks — not for an average patient.",
  ],
  [
    "Notice",
    "When that pattern drifts — breathing and rest changing, movement falling away, doses missed — the change is surfaced early.",
  ],
  [
    "Act",
    "Family and clinicians get a plain-language signal while it is still a small thing to fix: call, visit, or ask a nurse to come.",
  ],
];

const devices: [name: string, does: string, stage: string][] = [
  [
    "Room sensor",
    "Reads breathing, heart rhythm, movement and sleep from across the room. Contactless: nothing to wear, charge or press.",
    "Gen 9 · in development",
  ],
  ["Home Hub", "Runs the intelligence inside the home and learns one person's normal.", "Gen 8 prototype"],
  ["Pill Companion", "Knows when medicines are taken.", "Gen 8 prototype"],
  ["Nutrition Box", "Knows when meals are eaten.", "Gen 8 prototype"],
];

type Visual = "home" | "talks" | "gens" | "homes" | "shift" | "wave" | "none";

const frames: [label: string, figure: string, text: string, visual: Visual][] = [
  ["Where it began", "One recovery", "My grandfather's recovery at home, and a family that could not see how it was going.", "home"],
  ["After the second", "A rough pill box", "No intelligence, only a way to know his blood thinners were taken on time.", "none"],
  ["Sep 2024", "First home visits", "Out of guilt and love for my grandfather, not to validate an idea. 500 home visits as a Swiggy and Zomato delivery partner across cities, and as an Uber driver.", "none"],
  ["350+ families", "Stories heard", "More than 350 families, and about 280 of them had faced the same problem in their own way. Each dot is ten families; the orange ones shared the problem.", "talks"],
  ["Mar 2025", "From personal to a company", "I saw it was a bigger problem, worth solving, and became a founder. Mirrorfolio was incorporated.", "none"],
  ["Gen 1 → 8", "Eight generations", "Seven did not survive contact with a real home. Every failed pilot taught us what works in a real home and what does not.", "gens"],
  ["30+", "Real-home deployments", "Prototypes installed in person, in the homes they had to work in. Each square is one home.", "homes"],
  ["Aug 2026", "Gen 8", "Shown at CIIC Demo Day: the routine devices, the Home Hub, the Pill Companion and the Nutrition Box.", "none"],
  ["After Gen 8", "The shift", "We always knew routine is wider than pills and meals, and planned contactless physiology for a later phase. Field response and care professionals' feedback moved it to the front, and we reorganised around it.", "shift"],
  ["Now", "Building Gen 9", "Contactless sensing of breathing and heart rhythm joins the routine devices.", "none"],
  ["Now", "54 households", "signed up for the first pilot wave, which is gated at 50.", "wave"],
];



function FrameVisual({ kind }: { kind: Visual }) {
  const n = (count: number, cls?: (i: number) => string | undefined) =>
    Array.from({ length: count }, (_, i) => <i key={i} className={cls?.(i)} />);
  switch (kind) {
    case "home":
      return (
        <span className="h-vis" role="img" aria-label="A house with one lit window">
          <svg width="72" height="64" viewBox="0 0 72 64" fill="none" aria-hidden="true">
            <path d="M4 30 36 4l32 26M10 26v34h52V26" stroke="currentColor" strokeWidth="1.5" />
            <rect x="29" y="34" width="14" height="14" fill="var(--signal)" />
          </svg>
        </span>
      );
    case "talks":
      return (
        <span className="h-vis h-v-dots" aria-hidden="true">
          {n(35, (i) => (i < 28 ? "on" : undefined))}
        </span>
      );
    case "gens":
      return (
        <span className="h-vis h-v-gens" role="img" aria-label="Eight hardware generations; seven did not survive, the eighth is current">
          {n(8, (i) => (i === 7 ? "on" : "x"))}
        </span>
      );
    case "homes":
      return <span className="h-vis h-v-sq" aria-hidden="true">{n(30)}</span>;
    case "shift":
      return (
        <span className="h-vis h-v-shift" role="img" aria-label="Routine first, then physiology brought forward to sit beside it">
          <b>Routine</b>
          <em>+</em>
          <b className="on">Physiology</b>
        </span>
      );
    case "wave":
      return (
        <span className="h-vis h-v-wave" role="img" aria-label="54 signed up against a first wave of 50">
          <i className="w50">50</i>
          <i className="w4">+4</i>
        </span>
      );
    default:
      return null;
  }
}

const askTerms: [string, string][] = [
  ["Instrument", "CCPS or CCD"],
  ["Cap", "₹35 Cr · 10% discount"],
  ["Converts", "Next priced round"],
  ["Raised to date", "No external capital"],
  ["Beyond money", "Hospital intros; advisors"],
];

const useOfFunds: [string, number, string][] = [
  ["Product & sensing R&D", 25, "₹84.0L"],
  ["Validation, lab + homes", 18, "₹60.5L"],
  ["Edge AI, fusion & RSI", 17, "₹57.1L"],
  ["Pilot hardware & working capital", 12, "₹40.3L"],
  ["Team & specialists", 10, "₹33.6L"],
  ["Clinical & regulatory", 5, "₹16.8L"],
  ["Hospital GTM & pilots", 5, "₹16.8L"],
  ["Ops, legal & admin", 5, "₹16.8L"],
  ["Contingency", 3, "₹10.1L"],
];

const terms: [string, string][] = [
  ["Routine Stability Intelligence", "Our name for the approach: learn one person's normal, then watch for the drift that matters."],
  ["Contactless sensing", "Breathing, heart rhythm and movement read from across the room. No contact, no wearable."],
  ["Sensor fusion", "Physiology and routine read together, because neither tells the full story alone."],
  ["Personal baseline", "A model of normal for one person, learned over the first weeks at home, not a population threshold."],
  ["Drift detection", "We look for sustained change against that baseline, not single readings, so one bad night is not an alarm."],
  ["On-device intelligence", "Learning and inference run on the hub inside the home."],
];

const APP_ALT =
  "Concept design of the family app. Routine has changed: sleep restless three nights in a row, evening medicines late twice, breathing at rest within their usual range. Buttons: call now, ask a nurse to visit.";

const appRows: [string, string, boolean][] = [
  ["Sleep", "Restless 3 nights in a row", true],
  ["Medicines", "Evening dose late twice", true],
  ["Breathing at rest", "Within their usual range", false],
];

const sleepBars = [78, 80, 74, 76, 48, 42, 46];

const status: [string, React.ReactNode][] = [
  [
    "Today",
    <>
      Three <b>Gen 8 research prototypes</b> — the Home Hub, the Pill Companion and the Nutrition
      Box — and we are now building <b>Gen 9</b>, which adds the contactless room sensor for
      breathing and heart rhythm. The prototypes exist to
      prove the sensing works in real homes. There is no production app, no finished AI experience and
      no shipped platform yet.
    </>,
  ],
  [
    "Next",
    <>
      A <b>pilot-grade system</b>: dependable sensing, a first clinical-facing view of a
      person&apos;s routine, and structured deployments with hospitals and discharge programmes.
    </>,
  ],
  [
    "Later",
    <>
      <b>Families and clinicians see recovery at home</b> between visits, with hospitals as the
      route in: they refer at discharge, and the family buys the kit.
    </>,
  ],
];

const team: [string, string][] = [
  ["Vinu Antony", "Founding Hardware Engineer"],
  ["Sai Chiranjeeve", "ML Engineer"],
  ["Anil Balan", "Advisor. President, KSN Global; Founder & COO, Splendre"],
  ["Aravind Saji", "Advisor. Incubation Manager, AIC IIIT Kottayam"],
];

const title = "Mirrorfolio — Post-discharge recovery monitoring for people over 65";
const description =
  "Mirrorfolio monitors recovery at home after hospital discharge for people over 65, without cameras, wearables or any effort from the patient. Pitch deck, one-pager and contact.";
const social = "Post-discharge recovery monitoring for people over 65. No cameras, no wearables, no patient effort.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://mirrorfolio.com/hello" },
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
        {/* The hook. Everything below only elaborates on this. */}
        <header>
          <p className="h-mark">Mirrorfolio</p>
          <h1 className="h-h1">Post-discharge recovery monitoring for people over 65.</h1>
          <p className="h-sub">No cameras. No wearables. No effort from the patient.</p>
          <p className="h-lead">
            Mirrorfolio senses vital signs and daily routine from across the room, learns what
            normal looks like for one person, and tells the family when recovery starts to drift.
          </p>
          <p className="h-stamp">Kerala, India · Pre-market · Gen 8 prototypes built, Gen 9 in development</p>
        </header>

        <HelloNav />

        <hr className="h-rule" />

        {/* 01 — the problem. */}
        <section id="h-gap">
          <p className="h-label">01 / The problem</p>
          <h2 className="h-h2">Recovery does not end at discharge. Visibility does.</h2>
          <p className="h-p">
            Inside a hospital a patient is watched continuously — observations, rounds, notes,
            escalation. At home, all of that disappears overnight.
          </p>
          <p className="h-p">
            Families are left asking <b>&ldquo;how are you feeling?&rdquo;</b> and hearing{" "}
            <b>&ldquo;fine.&rdquo;</b> Clinicians find out at the next appointment, or in an
            emergency. The weeks that decide whether someone recovers or is readmitted are the weeks
            nobody can see.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 02 — the solution, and the belief that separates us. */}
        <section id="h-belief">
          <p className="h-label">02 / The solution</p>
          <h2 className="h-h2">Understanding recovery is our job, not the patient&apos;s.</h2>
          <p className="h-p">
            Most monitoring asks something of the patient. Wear this. Charge that. Press the button.
            Accept a camera in the room. For an older adult that effort wears thin, and the
            monitoring is slowly abandoned.
          </p>
          <p className="h-p">
            We think that is backwards. How a recovery is going is the caretaker&apos;s question.
            So Mirrorfolio asks nothing of the patient: <b>no cameras, nothing worn, nothing to
            remember.</b>
          </p>
          <p className="h-p">
            Recovery shows up in routine and physiology together. Vital signs describe a body at a
            moment; routine shows the pattern across weeks. Mirrorfolio reads both, contactlessly,
            and learns what normal looks like for one person.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 03 — the ask, and why. */}
        <section id="h-ask">
          <p className="h-label">03 / The ask</p>
          <h2 className="h-h2">Help us prove it in real homes.</h2>
          <p className="h-ask-amt">
            USD 350k <span>≈ ₹3.36 Cr · pre-seed</span>
          </p>
          <p className="h-p">
            For one thing: <b>18 months to supervised real-world validation</b>, in gated pilot
            waves of 50 households, each released only when the last one meets its technical and
            data gates.
          </p>
          <ul className="h-proof h-terms">
            {askTerms.map(([k, v]) => (
              <li key={k}>
                <span className="h-num">{k}</span>
                <p>{v}</p>
              </li>
            ))}
          </ul>
          <p className="h-label h-mid">Where it goes</p>
          <ul className="h-funds">
            {useOfFunds.map(([name, pct, amt]) => (
              <li key={name}>
                <span className="h-fn">{name}</span>
                <span className="h-fv">
                  {pct}% · {amt}
                </span>
                <span className="h-fbar" aria-hidden="true">
                  <i style={{ width: `${(pct / 25) * 100}%` }} />
                </span>
              </li>
            ))}
          </ul>
          <p className="h-p">
            <b>Why it matters:</b> the weeks after discharge are when recovery most often slips,
            and the proof has to come from real homes, not a lab. Hospitals refer at discharge and
            the family buys the kit; we are in discussion with hospital chains in Kerala.
          </p>
          <p className="h-p">
            We are looking for thoughtful investors, hospitals, clinicians and partners who believe
            recovery should not end at discharge.
          </p>
        </section>

        <hr className="h-rule" />

        {/* Resources first: give something before asking for anything. */}
        <section id="h-resources" aria-labelledby="h-resources-label">
          <p className="h-label" id="h-resources-label">
            Everything in one place
          </p>
          <p className="h-p">Whatever brought you here, it is probably one of these.</p>
          <ul className="h-list">
            {documents.map((doc, i) => {
              const hosted = Boolean(doc.url);
              const gated = Boolean(doc.gated);
              return (
                <li key={doc.title}>
                  <a
                    // The deck is what most visitors came for — give it the one
                    // inked border, so the hierarchy reads without any colour.
                    className={i === 0 ? "h-row h-strong" : "h-row"}
                    href={gated ? "#details" : hosted ? doc.url : askHref(`Mirrorfolio — ${doc.title}`)}
                    {...(hosted && !gated ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="h-b">
                      <span className="h-t">{hosted || gated ? doc.title : doc.ask}</span>
                      <span className="h-d">
                        {hosted || gated
                          ? doc.desc
                          : "Not published here yet. This opens an email to Kabeer, who will send it across."}
                      </span>
                      {hosted && <span className="h-up">{UPDATED}</span>}
                    </span>
                    <span className="h-k">{hosted || gated ? doc.kind : "Email"}</span>
                  </a>
                </li>
              );
            })}
            <li>
              <a className="h-row" href={VCARD_HREF} download="ahammad-kabeer-hadi.vcf">
                <span className="h-b">
                  <span className="h-t">Save Kabeer&apos;s contact</span>
                  <span className="h-d">
                    Adds his number and email to your phone. Works without signal.
                  </span>
                </span>
                <span className="h-k">vCard</span>
              </a>
            </li>
            <li>
              <a className="h-row h-fill" href="#details">
                <span className="h-b">
                  <span className="h-t">Leave your details</span>
                  <span className="h-d">
                    Tell us who you are and what you would like to talk about. Kabeer replies
                    himself.
                  </span>
                </span>
                <span className="h-k">20 sec</span>
              </a>
            </li>
          </ul>
        </section>

        <hr className="h-rule" />

        {/* Leave your details — after the documents, in the same plain voice. */}
        <section id="h-contact">
          <p className="h-label">Leave your details</p>
          <p className="h-p">
            Whatever brought you here, tell us a little about it. Kabeer replies himself.
          </p>
          <div id="details">
            <HelloForm source={source} />
          </div>
        </section>

        <hr className="h-rule" />

        {/* 04 — people back founders before products. */}
        <section id="h-team">
          <p className="h-label">04 / Founder and team</p>
          <div className="h-founder">
            <p>
              I&apos;m Kabeer. I lead Mirrorfolio&apos;s hardware, firmware and platform, with a
              small team.
            </p>
            <p>If anything here interests you, you will be talking to me — not to a sales team.</p>
            <p className="h-sig">
              <b>Ahammad Kabeer Hadi</b>
              Founder &amp; CEO, Mirrorfolio
            </p>
          </div>
          <ul className="h-proof h-team">
            {team.map(([name, role]) => (
              <li key={name}>
                <span className="h-num">{name}</span>
                <p>{role}</p>
              </li>
            ))}
          </ul>
          <p className="h-quiet">Incubated at AIC IIIT Kottayam.</p>
        </section>

        <hr className="h-rule" />

        {/* 05 — why us, as a reel of frames. */}
        <section id="h-why">
          <p className="h-label">05 / Why us</p>
          <h2 className="h-h2">It started with my grandfather.</h2>
          <div className="h-founder h-story">
            <p>
              My grandfather was my closest friend. After his first heart attack he came home from
              hospital on blood thinners. We celebrated, because he never wanted us to be sad
              around him, and we believed he was well again.
            </p>
            <p>
              A few months later, a second heart attack. Looking back, I could trace the small
              signs that had come before it, because I had been that close to him. I built a crude
              pill box with no intelligence in it, only to see whether his blood thinners were taken
              on time, and I would nag him when they were not. It was our way of staying close.
            </p>
            <p>
              Then, one day, he called me at work and asked me to come back and go with him to see
              his doctor. It was a third heart attack, and we lost him that day. I was not okay for
              weeks.
            </p>
            <p>
              Afterwards I could not stop thinking that there are people like me, and they should
              not have to live through this. So I went looking. I made 500 home visits as a
              food-delivery partner on Swiggy and Zomato across cities, and as an Uber driver. I met
              more than 350 families, and about 280 of them had faced the same problem in their own
              way. I was not a founder validating an idea. It was guilt, and love for my
              grandfather. I now carry a lot of stories, full of joy and of sorrow.
            </p>
            <p>
              Later I saw that this was a bigger problem, worth solving, and I became a founder.
              Mirrorfolio began as something personal and is now a company. The pilots that failed
              taught us what works in a real home and what does not, and that is how we learned.
            </p>
          </div>
          <ol className="h-reel">
            {frames.map(([label, figure, text, visual]) => (
              <li key={`${label}-${figure}`} className="h-frame">
                <span className="h-fk">{label}</span>
                <span className="h-ff">{figure}</span>
                <FrameVisual kind={visual} />
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <hr className="h-rule" />

        {/* 06 — the technology, in principles. No parts, no build detail. */}
        <section id="h-tech">
          <p className="h-label">06 / The technology</p>
          <h2 className="h-h2">The ideas underneath, in plain terms.</h2>
          <ul className="h-proof h-terms">
            {terms.map(([term, meaning]) => (
              <li key={term}>
                <span className="h-num">{term}</span>
                <p>{meaning}</p>
              </li>
            ))}
          </ul>
          <p className="h-quiet">
            Awareness, not diagnosis. Families and clinicians stay in charge. More detail is shared
            after a first conversation.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 07 — the product: what is in the home. */}
        <section id="h-product">
          <p className="h-label">07 / The product</p>
          <h2 className="h-h2">The hardware is only the sensing layer.</h2>
          <p className="h-p">
            It would be easy to file us under IoT, wearables or smart home. We are none of those.
            The devices exist to sense an ordinary home honestly, cheaply and invisibly — nothing
            more. The Pill Companion is a sensor that knows whether a dose was taken. The product
            is what we learn from it.
          </p>
          <p className="h-p">
            The product is the intelligence layer above them: the part that learns one particular
            person, understands what a meaningful change looks like, and puts it in front of the
            right human in time.{" "}
            <b>Sensors are how we see. The intelligence is what makes seeing useful.</b>
          </p>
          <p className="h-label h-mid">What is in the home</p>
          <ul className="h-proof h-devices">
            {devices.map(([name, does, stage]) => (
              <li key={name}>
                <span className="h-num">{name}</span>
                <p>
                  {does} <span className="h-stage">{stage}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="h-rule" />

        {/* 08 — how it works. */}
        <section id="h-how">
          <p className="h-label">08 / How it works</p>
          <h2 className="h-h2">From discharge day to a signal the family can act on.</h2>
          <ul className="h-rsi">
            {steps.map(([step, body]) => (
              <li key={step}>
                <b>{step}</b> {body}
              </li>
            ))}
          </ul>
          <p className="h-label h-mid">What the family sees</p>
          <figure className="h-appfig">
            <div className="h-app" role="img" aria-label={APP_ALT}>
              <div className="h-app-notch" />
              <div className="h-app-status">
                <span>9:41</span>
                <span>5G</span>
              </div>
              <div className="h-app-body" aria-hidden="true">
                <div className="h-app-top">
                  <span className="h-app-brand">Mirrorfolio</span>
                  <span className="h-app-dim">This week</span>
                </div>
                <p className="h-app-title">Your parent</p>
                <p className="h-app-sub">Updated 8 min ago · week 3</p>
                <div className="h-app-alert">Routine has changed.</div>
                <div className="h-app-rows">
                  {appRows.map(([name, note, changed]) => (
                    <div className="h-app-row" key={name}>
                      <div>
                        {name}
                        <small>{note}</small>
                      </div>
                      <span className={changed ? "h-app-tag h-app-warn" : "h-app-tag"}>
                        {changed ? "Changed" : "Usual"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-app-chart">
                  <div className="h-app-cap">
                    <span>Sleep, last 7 nights</span>
                    <span>- - their normal</span>
                  </div>
                  <div className="h-app-bars">
                    {sleepBars.map((h, i) => (
                      <i key={i} className={i >= 4 ? "lo" : undefined} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="h-app-days">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i}>{d}</span>
                    ))}
                  </div>
                </div>
                <div className="h-app-btn">Call now</div>
                <div className="h-app-btn h-app-out">Ask a nurse to visit</div>
                <p className="h-app-foot">Awareness, not diagnosis.</p>
              </div>
              <div className="h-app-home" />
            </div>
            <figcaption className="h-cap h-app-cap-text">
              Concept design. This is how we expect the family view to look, not a shipped screen.
              The data shown is illustrative.
            </figcaption>
          </figure>
        </section>

        <hr className="h-rule" />

        {/* 09 — the constraint that makes the product adoptable. */}
        <section id="h-privacy">
          <p className="h-label">09 / Privacy</p>
          <h2 className="h-h2">It should never feel like being watched.</h2>
          <p className="h-p">
            We deliberately gave up the easiest data. No cameras. No microphones. No wearables. No
            audio or video, ever. The intelligence runs on the hub inside the home.
          </p>
          <p className="h-p">
            An older adult should not have to change how they live to be understood, and should
            never feel observed inside their own home. If the technology is noticed at all, we have
            built it wrong.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 10 — the honesty section. */}
        <section id="h-where">
          <p className="h-label">10 / Where we are</p>
          <h2 className="h-h2">Early — and specific about it.</h2>
          {/* The object itself, before the claims about it. Lazy by default —
              nothing above the fold waits on 200KB. */}
          <figure className="h-figure">
            <Image
              src={starterKit}
              alt="The Gen 8 starter kit on a workbench. Left: the Home Hub, a small square unit with a lit LED matrix and a stub antenna, held in one hand. Right: the Pill Companion, a sectioned white tray with softly lit compartments."
              placeholder="blur"
              sizes="(min-width: 768px) 36rem, 100vw"
            />
            <figcaption className="h-cap">
              Photographed on the bench it was built on. This is what exists today — not a render.
            </figcaption>
          </figure>
          <ul className="h-ladder">
            {status.map(([when, body]) => (
              <li key={when}>
                <span className="h-when">{when}</span>
                <p>{body}</p>
              </li>
            ))}
          </ul>
          <p className="h-quiet">We would rather be trusted on this than impressive about it.</p>
        </section>

        <footer className="h-foot">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <br />
          <a href="https://mirrorfolio.com" target="_blank" rel="noreferrer">
            mirrorfolio.com
          </a>
          <span className="h-fine">
            Mirrorfolio Idea Labs Pvt. Ltd.
            {CIN ? ` · CIN ${CIN}` : ""} · Kerala, India
          </span>
        </footer>
      </div>
    </div>
  );
}
