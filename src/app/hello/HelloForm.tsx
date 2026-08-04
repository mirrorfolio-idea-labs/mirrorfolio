"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "kabeer@mirrorfolio.com";

const ROLES = ["Investor", "Hospital or clinician", "Family member", "Founder or partner", "Other"];

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

    const body = `Name: ${data.name ?? ""}\nEmail: ${data.email ?? ""}\nOrganisation: ${data.organisation ?? ""}\nRole: ${data.role ?? ""}\nSource: ${data.s ?? source}\n\n${data.message ?? ""}`;
    const fallback = `mailto:${EMAIL}?subject=${encodeURIComponent("Mirrorfolio — from the stall")}&body=${encodeURIComponent(body)}`;

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
        Got it — thank you. Kabeer will write to you within two working days, from {EMAIL}. Nothing
        else, ever.
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
      <label htmlFor="he">Email we should reply to</label>
      <input id="he" name="email" type="email" required autoComplete="email" />
      <label htmlFor="ho">Company or hospital (optional)</label>
      <input id="ho" name="organisation" autoComplete="organization" />
      <label htmlFor="hr">You are…</label>
      <select id="hr" name="role" defaultValue="">
        <option value="" disabled>
          Select one
        </option>
        {ROLES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <label htmlFor="hm">Anything you&apos;d like us to know (optional)</label>
      <textarea id="hm" name="message" rows={3} />
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send my details"}
      </button>
      <p className="h-note">
        We reply within two working days. No newsletter, no sharing your details.
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
