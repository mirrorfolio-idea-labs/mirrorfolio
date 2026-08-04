import type { ReactNode } from "react";

import type { Intent } from "@/lib/leads/intents";

export type Field = {
  id: string;
  label: string;
  type?: "text" | "email" | "url";
  required?: boolean;
  options?: string[];
  textarea?: boolean;
  autoComplete?: string;
};

export type Flow = {
  tab: string;
  eyebrow: string;
  headline: ReactNode;
  lede: string;
  fields: Field[];
  note: string;
  submit: string;
  confirmation: string;
  routedTo: string;
};

const nameField: Field = {
  id: "name",
  label: "Name",
  type: "text",
  required: true,
  autoComplete: "name",
};
const emailField: Field = {
  id: "email",
  label: "Email",
  type: "email",
  required: true,
  autoComplete: "email",
};

export const flows: Record<Intent, Flow> = {
  waitlist: {
    tab: "Join the waitlist",
    eyebrow: "Waitlist",
    headline: (
      <>
        Bring Mirrorfolio
        <br />
        <span className="text-muted-foreground">home.</span>
      </>
    ),
    lede: "We're preparing our first deployments with hospital partners and pilot families. Tell us a little about the household and we'll write when Mirrorfolio reaches your area.",
    fields: [
      nameField,
      emailField,
      {
        id: "city",
        label: "City or area",
        type: "text",
        required: true,
        autoComplete: "address-level2",
      },
      {
        id: "relationship",
        label: "Who would this be for",
        options: ["A parent", "A grandparent", "A partner or spouse", "Myself", "Someone else"],
        required: true,
      },
      { id: "note", label: "Anything you'd like us to know", textarea: true },
    ],
    note: "No newsletters. No automated sequences.",
    submit: "Join the waitlist",
    confirmation:
      "You're on the waitlist. We'll write when Mirrorfolio reaches your area — no sequences in between.",
    routedTo: "hello@mirrorfolio.com",
  },

  hospital: {
    tab: "Hospital partnership",
    eyebrow: "Hospital partnership",
    headline: (
      <>
        Extend care
        <br />
        <span className="text-muted-foreground">past discharge.</span>
      </>
    ),
    lede: "We work with discharge teams to fit Mirrorfolio into existing workflow — enrolment at discharge, a cohort-level read on which recoveries are holding.",
    fields: [
      nameField,
      emailField,
      {
        id: "organisation",
        label: "Hospital or network",
        type: "text",
        required: true,
        autoComplete: "organization",
      },
      {
        id: "role",
        label: "Your role",
        type: "text",
        required: true,
        autoComplete: "organization-title",
      },
      {
        id: "volume",
        label: "Annual discharge volume",
        options: ["Under 5,000", "5,000 — 20,000", "20,000 — 50,000", "Over 50,000", "Not sure yet"],
      },
      { id: "note", label: "Which pathway are you thinking about", textarea: true },
    ],
    note: "We'll suggest a call with our clinical partnerships lead.",
    submit: "Start the conversation",
    confirmation:
      "Received. Our clinical partnerships lead will follow up to talk through the discharge pathway.",
    routedTo: "partners@mirrorfolio.com",
  },

  investor: {
    tab: "Investor enquiry",
    eyebrow: "Investors",
    headline: (
      <>
        Ambient care,
        <br />
        <span className="text-muted-foreground">built patiently.</span>
      </>
    ),
    lede: "Eight hardware generations, 30+ real-home validations, first hospital deployments in 2026. Happy to share the detail behind that with investors who work on long horizons.",
    fields: [
      nameField,
      emailField,
      {
        id: "firm",
        label: "Firm",
        type: "text",
        required: true,
        autoComplete: "organization",
      },
      {
        id: "stage",
        label: "Stage focus",
        options: ["Pre-seed", "Seed", "Series A", "Later", "Generalist"],
      },
      { id: "note", label: "What would you like to see", textarea: true },
    ],
    note: "We share materials directly, not through a data room drip.",
    submit: "Request materials",
    confirmation: "Thank you. We'll be in touch directly with materials and a time to talk.",
    routedTo: "invest@mirrorfolio.com",
  },

  careers: {
    tab: "Working with us",
    eyebrow: "Careers",
    headline: (
      <>
        Introduce
        <br />
        <span className="text-muted-foreground">yourself.</span>
      </>
    ),
    lede: "We hire slowly and carefully, for hardware, on-device intelligence and clinical partnerships. Tell us what you'd want to work on.",
    fields: [
      nameField,
      emailField,
      {
        id: "role",
        label: "Role of interest",
        options: [
          "Embedded engineer",
          "On-device ML",
          "Industrial design",
          "Clinical partnerships",
          "Something else",
        ],
        required: true,
      },
      { id: "link", label: "Portfolio, GitHub or profile", type: "url", autoComplete: "url" },
      {
        id: "note",
        label: "What would you want to build here",
        textarea: true,
        required: true,
      },
    ],
    note: "Every introduction is read by a person on the team.",
    submit: "Send introduction",
    confirmation:
      "Thank you — your introduction is with the team. We read every one, and reply even when the answer is not yet.",
    routedTo: "careers@mirrorfolio.com",
  },
};
