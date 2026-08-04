import type { Metadata } from "next";
import Image from "next/image";

import starterKit from "@/assets/gen8-starter-kit.jpg";

import { HELLO_CSS } from "./hello.css";
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
  "https://docs.google.com/presentation/d/1tyB5COnmmqj7cseXlMZzKWAUgIVkK2Y4BuaYuqFKGAE/preview";
const ONE_PAGER_URL =
  "https://docs.google.com/document/d/1zkNuQWXiUjfTxH9lMRh8doDyd50gy6YIVzyi-6NVEyo/preview";
const SPEC_SHEET_URL =
  "https://docs.google.com/document/d/1yGkK8zBcf_TylWzKr7inMI585PGtnegljllNxpyWH4o/preview";

const EMAIL = "kabeer@mirrorfolio.com";
const PHONE = "+918139851688";
const PHONE_DISPLAY = "+91 81398 51688";

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Hadi;Ahammad Kabeer;;;",
  "FN:Ahammad Kabeer Hadi",
  "ORG:Mirrorfolio Idea Labs",
  "TITLE:Founder",
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
    kind: "Doc",
  },
  {
    url: SPEC_SHEET_URL,
    title: "Technical specification",
    ask: "Request the technical specification",
    desc: "Sensing architecture, on-device intelligence, and how the data is handled.",
    kind: "Doc",
  },
];

const steps: [string, string][] = [
  [
    "Sense",
    "A few quiet devices around the home read movement, rest, routine and medication. No cameras, no microphones, nothing worn.",
  ],
  [
    "Learn",
    "The system builds a picture of what normal looks like for one particular person — not for an average patient.",
  ],
  [
    "Notice",
    "When that pattern drifts — sleep fragmenting, movement falling away, doses missed — the change is surfaced early.",
  ],
  [
    "Act",
    "Family and clinicians get a plain-language signal while it is still a small thing to fix.",
  ],
];

const status: [string, React.ReactNode][] = [
  [
    "Today",
    <>
      Two <b>Gen 8 research prototypes</b> — the Home Hub and the Pill Companion. They exist to
      prove the sensing works in real homes. There is no production app, no finished AI experience
      and no shipped platform yet.
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
      The <b>behavioural intelligence layer for home healthcare</b> — infrastructure other care
      providers build on to see recovery between visits.
    </>,
  ],
];

const proof: [string, string][] = [
  ["350+", "conversations with families, caregivers and clinicians — before we designed anything."],
  ["30+", "prototype deployments in real homes, not on a lab bench."],
  ["54+", "households ready to join the first pilot."],
  ["Gen 8", "hardware generations. Seven earlier ones did not survive contact with a real home."],
];

const title = "Mirrorfolio — Making recovery at home visible";
const description =
  "Mirrorfolio is building the behavioural intelligence layer for home healthcare — making recovery visible after hospital discharge. Pitch deck, one-pager, technical specification and contact.";
const social = "The behavioural intelligence layer for home healthcare.";

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
        {/* The elevator pitch. Everything below only elaborates on this. */}
        <header>
          <p className="h-mark">Mirrorfolio</p>
          <h1 className="h-h1">Making recovery at home visible.</h1>
          <p className="h-sub">The behavioural intelligence layer for home healthcare.</p>
          <p className="h-lead">
            Hospitals can see everything. Homes see almost nothing. The day a patient is discharged,
            recovery becomes invisible — families guess, and clinicians wait until the next
            appointment.
          </p>
          <p className="h-lead">
            Mirrorfolio reads the behaviour of an ordinary day — sleep, movement, meals, medication
            — and notices when recovery starts to drift. No cameras. No microphones. Nothing worn,
            nothing charged.
          </p>
          <p className="h-stamp">Kerala, India · Pre-market · Gen 8 research prototypes</p>
        </header>

        <hr className="h-rule" />

        {/* Resources first: give something before asking for anything. */}
        <section aria-labelledby="h-resources">
          <p className="h-label" id="h-resources">
            Everything in one place
          </p>
          <p className="h-p">Whatever brought you here, it is probably one of these.</p>
          <ul className="h-list">
            {documents.map((doc, i) => {
              const hosted = Boolean(doc.url);
              return (
                <li key={doc.title}>
                  <a
                    // The deck is what most visitors came for — give it the one
                    // inked border, so the hierarchy reads without any colour.
                    className={i === 0 ? "h-row h-strong" : "h-row"}
                    href={hosted ? doc.url : askHref(`Mirrorfolio — ${doc.title}`)}
                    {...(hosted ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="h-b">
                      <span className="h-t">{hosted ? doc.title : doc.ask}</span>
                      <span className="h-d">
                        {hosted
                          ? doc.desc
                          : "Not published here yet. This opens an email to Kabeer, who will send it across."}
                      </span>
                    </span>
                    <span className="h-k">{hosted ? doc.kind : "Email"}</span>
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

        {/* 01 — why any of this matters. */}
        <section>
          <p className="h-label">01 / The gap</p>
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

        {/* 02 — the insight the whole company rests on, then the mechanism. */}
        <section>
          <p className="h-label">02 / The belief</p>
          <h2 className="h-h2">Recovery is behaviour before it is a vital sign.</h2>
          <p className="h-p">
            Heart rate, blood pressure, SpO₂ and temperature describe a body at a moment. Recovery
            is a pattern across weeks — when someone sleeps, how far they move, whether they eat,
            whether the medication is actually taken.
          </p>
          <p className="h-p">
            Decline shows up there first, usually days before it reaches a number a hospital would
            recognise.
          </p>

          <p className="h-label h-mid">Routine Stability Intelligence</p>
          <ul className="h-rsi">
            {steps.map(([step, body]) => (
              <li key={step}>
                <b>{step}</b> {body}
              </li>
            ))}
          </ul>
        </section>

        <hr className="h-rule" />

        {/* 03 — what we actually are, said before anyone mis-files us. */}
        <section>
          <p className="h-label">03 / The product</p>
          <h2 className="h-h2">The hardware is only the sensing layer.</h2>
          <p className="h-p">
            It would be easy to file us under IoT, wearables, smart home or connected pillboxes. We
            are none of those. The devices exist to sense an ordinary home honestly, cheaply and
            invisibly — nothing more.
          </p>
          <p className="h-p">
            The product is the intelligence layer above them: the part that learns one particular
            person, understands what a meaningful change looks like, and puts it in front of the
            right human in time.{" "}
            <b>Sensors are how we see. The intelligence is what makes seeing useful.</b>
          </p>
          <p className="h-quiet">
            Not a smart-home product. Not a wearable. Not a pillbox. Not a camera in someone&apos;s
            living room.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 04 — the honesty section. The most persuasive part of the page. */}
        <section>
          <p className="h-label">04 / Where we are</p>
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

        <hr className="h-rule" />

        {/* 05 — the constraint that makes the product adoptable. */}
        <section>
          <p className="h-label">05 / Privacy</p>
          <h2 className="h-h2">It should never feel like being watched.</h2>
          <p className="h-p">
            We deliberately gave up the easiest data. No cameras. No microphones. No wearables. No
            continuous recording.
          </p>
          <p className="h-p">
            An older adult should not have to change how they live to be understood, and should
            never feel observed inside their own home. If the technology is noticed at all, we have
            built it wrong.
          </p>
        </section>

        <hr className="h-rule" />

        {/* 06 — proof, with the meaning attached to each number. */}
        <section>
          <p className="h-label">06 / What we have done so far</p>
          <h2 className="h-h2">We would rather show you the work than a forecast.</h2>
          <ul className="h-proof">
            {proof.map(([figure, meaning]) => (
              <li key={figure}>
                <span className="h-num">{figure}</span>
                <p>{meaning}</p>
              </li>
            ))}
          </ul>
        </section>

        <hr className="h-rule" />

        {/* 07 — people back founders before products. */}
        <section>
          <p className="h-label">07 / Founder</p>
          <div className="h-founder">
            <p>
              I&apos;m Kabeer. I build Mirrorfolio&apos;s hardware, its firmware and its platform.
            </p>
            <p>
              Most of the 350+ conversations behind this company were mine, and most of the
              prototypes were installed in person, in the homes they had to work in. That is also
              why this page is careful about what exists and what does not.
            </p>
            <p>If anything here interests you, you will be talking to me — not to a sales team.</p>
            <p className="h-sig">
              <b>Ahammad Kabeer Hadi</b>
              Founder, Mirrorfolio
            </p>
          </div>
        </section>

        <hr className="h-rule" />

        {/* The ask. */}
        <section id="details">
          <h2 className="h-h2">Mirrorfolio is still early.</h2>
          <p className="h-p">
            We are looking for thoughtful investors, hospitals, clinicians and partners who believe
            recovery should not end at discharge. If today&apos;s ideas resonate with you, we would
            love to continue the conversation.
          </p>
          <p className="h-label h-mid">Leave your details</p>
          <HelloForm source={source} />
        </section>

        <footer className="h-foot">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <br />
          <a href="https://mirrorfolio.com" target="_blank" rel="noreferrer">
            mirrorfolio.com
          </a>
          <span className="h-fine">Mirrorfolio Idea Labs · Kerala, India</span>
        </footer>
      </div>
    </div>
  );
}
