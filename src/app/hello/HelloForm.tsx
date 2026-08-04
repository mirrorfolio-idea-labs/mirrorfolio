"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "kabeer@mirrorfolio.com";

/**
 * One question instead of two. For almost everyone who scans this card, who
 * they are and why they are writing are the same answer — asking twice adds
 * friction without adding signal.
 */
const REASONS = [
  "Investment",
  "Hospital or clinical pilot",
  "Doctor or clinician",
  "Someone in my family",
  "Research or academia",
  "Partnership or manufacturing",
  "Press or media",
  "Curious, no agenda",
];

type State = "idle" | "sending" | "sent" | "failed";

export function HelloForm({ source }: { source: string }) {
  const [state, setState] = useState<State>("idle");
  const [mailto, setMailto] = useState("");
  const startedAt = useRef(0);

  // Reading the clock during render would be impure, so stamp on mount.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setState("sending");

    const body = `Name: ${data.name ?? ""}\nEmail: ${data.email ?? ""}\nOrganisation: ${data.organisation ?? ""}\nAbout: ${data.role ?? ""}\nSource: ${data.s ?? source}\n\n${data.message ?? ""}`;
    const fallback = `mailto:${EMAIL}?subject=${encodeURIComponent("Mirrorfolio — leaving my details")}&body=${encodeURIComponent(body)}`;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          intent: "hello",
          s: data.s || source,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setState("sent");
    } catch {
      // Conference wifi is unreliable by nature — hand the visitor a prefilled
      // email rather than losing what they typed.
      setMailto(fallback);
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div className="h-done">
        <p>
          Thank you — this is with Kabeer now. He will write to you within two working days, from{" "}
          {EMAIL}.
        </p>
        <p>No newsletter, no list, no sharing your details. Nothing else, ever.</p>
      </div>
    );
  }

  return (
    <form className="h-form" method="post" onSubmit={onSubmit}>
      <input type="hidden" name="s" value={source} />
      <div aria-hidden style={{ display: "none" }}>
        <label htmlFor="h_company_website">Company website</label>
        <input
          id="h_company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <label htmlFor="hn">Your name</label>
      <input id="hn" name="name" required autoComplete="name" />

      <label htmlFor="he">Email</label>
      <input id="he" name="email" type="email" required autoComplete="email" />

      <label htmlFor="hr">
        What brings you here?
        <span className="h-hint">So the reply is about the right thing.</span>
      </label>
      <select id="hr" name="role" defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        {REASONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <label htmlFor="ho">
        Organisation
        <span className="h-hint">Optional — company, hospital, fund or university.</span>
      </label>
      <input id="ho" name="organisation" autoComplete="organization" />

      <label htmlFor="hm">
        Anything you&apos;d like us to know
        <span className="h-hint">Optional — a question, a context, a next step.</span>
      </label>
      <textarea id="hm" name="message" rows={3} />

      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send this to Kabeer"}
      </button>
      <p className="h-note">
        A person replies within two working days. No newsletter, no sharing your details.
      </p>
      {state === "failed" && (
        <p className="h-note">
          The signal here is too weak to send it.{" "}
          <a href={mailto}>Tap to send it as an email instead</a> — everything you typed is already
          written in, just press send.
        </p>
      )}
    </form>
  );
}
