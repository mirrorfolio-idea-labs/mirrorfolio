"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { flows, type Field } from "@/components/site/contact-flows";
import { PageHeader } from "@/components/site/PageHeader";
import {
  FieldError,
  FieldLabel,
  SelectField,
  SpamGuard,
  TextAreaField,
  TextField,
} from "@/components/site/FormFields";
import { SectionRail } from "@/components/site/Section";
import { intents, type Intent } from "@/lib/leads/intents";

// Every enquiry lands in one inbox; the per-flow addresses are display labels only.
const INBOX = "kabeer@mirrorfolio.com";
const mailtoInbox = (subject: string) =>
  `mailto:${INBOX}?subject=${encodeURIComponent(`Mirrorfolio — ${subject}`)}`;

type Status = "idle" | "sending" | "sent";

export function ContactForm({ initialIntent }: { initialIntent: Intent }) {
  const [intent, setIntent] = useState<Intent>(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [sent, setSent] = useState<Intent | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const startedAt = useRef(0);

  const flow = flows[intent];
  const sentFlow = sent ? flows[sent] : null;

  // Restart the timing guard on mount and whenever the visitor switches flow.
  // Reading the clock during render would be impure, so the stamp lands here.
  useEffect(() => {
    startedAt.current = Date.now();
  }, [intent]);

  /**
   * Switching flow is instant local state, and the choice is mirrored into the
   * URL so it stays shareable — via replaceState rather than router.replace, so
   * the tab click doesn't pay for a server round trip the way the original
   * client-rendered route never did.
   */
  function selectIntent(next: Intent) {
    setSent(null);
    setStatus("idle");
    setIntent(next);
    // Switching flow swaps the whole field set, so stale errors go with it.
    setErrors({});

    const url = new URL(window.location.href);
    url.searchParams.set("intent", next);
    window.history.replaceState(null, "", url);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    setStatus("sending");
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          intent,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });

      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !body.ok) {
        if (body.fieldErrors) setErrors(body.fieldErrors);
        setStatus("idle");
        toast.error(body.error ?? "That didn't send. Please try again.", {
          action: {
            label: "Email instead",
            onClick: () => window.open(mailtoInbox(flow.eyebrow), "_blank"),
          },
        });
        return;
      }

      form.reset();
      setSent(intent);
      setStatus("sent");
    } catch {
      setStatus("idle");
      toast.error("The connection dropped before that could send.", {
        action: {
          label: "Email instead",
          onClick: () => window.open(mailtoInbox(flow.eyebrow), "_blank"),
        },
      });
    }
  }

  return (
    <>
      <PageHeader index="C" eyebrow={flow.eyebrow} title={flow.headline} lede={flow.lede} />

      <section className="border-b border-border">
        <SectionRail index="C.1" label="Choose your flow" note="Reply within a working week" />

        {/* Flow switcher — writes the choice into the URL so it is shareable. */}
        <div className="flex flex-wrap border-b border-border">
          {intents.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => selectIntent(i)}
              aria-current={intent === i ? "true" : undefined}
              className={`mono-label border-b border-r border-border px-5 py-4 transition-colors ${
                intent === i ? "bg-secondary text-foreground" : "hover:bg-secondary"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`inline-block h-1.5 w-1.5 ${
                    intent === i ? "bg-signal" : "bg-transparent"
                  }`}
                />
                {flows[i].tab}
              </span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3">
          <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-8">
            <div className="mono-label">Routed to</div>
            <a
              href={mailtoInbox(flow.eyebrow)}
              className="mt-3 block text-sm hover:text-muted-foreground"
            >
              {flow.routedTo}
            </a>

            <div className="mt-10 space-y-6">
              <div>
                <div className="mono-label">Office</div>
                <p className="mt-2 text-sm">
                  Mirrorfolio Idea Labs
                  <br />
                  Kerala, India
                </p>
              </div>
              <div>
                <div className="mono-label">Press</div>
                <a
                  href={mailtoInbox("Press")}
                  className="mt-2 block text-sm hover:text-muted-foreground"
                >
                  press@mirrorfolio.com
                </a>
              </div>
            </div>

            {intent === "careers" && (
              <div className="mt-10 border-t border-border pt-6">
                <Link href="/careers" className="mono-label hover:text-foreground">
                  See where we need help ↗
                </Link>
              </div>
            )}
            {intent === "hospital" && (
              <div className="mt-10 border-t border-border pt-6">
                <Link href="/hospitals" className="mono-label hover:text-foreground">
                  Read the deployment model ↗
                </Link>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            {sentFlow ? (
              <div className="p-5 md:p-8">
                <div className="mono-label">Received</div>
                <h2 className="display-caps mt-4 text-2xl">{sentFlow.eyebrow}</h2>
                <p className="mt-4 max-w-[50ch] text-sm leading-relaxed text-muted-foreground">
                  {sentFlow.confirmation}
                </p>
                <p className="mono-label mt-8">Routed to {sentFlow.routedTo}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(null);
                    setStatus("idle");
                    startedAt.current = Date.now();
                  }}
                  className="mono-label mt-8 border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form key={intent} onSubmit={onSubmit} noValidate className="grid gap-8 p-5 md:p-8">
                <SpamGuard />

                {flow.fields.map((f: Field) => {
                  const error = errors[f.id];
                  const errorId = `${f.id}-error`;
                  return (
                    <div key={f.id} className="grid gap-2">
                      <FieldLabel htmlFor={f.id} optional={!f.required}>
                        {f.label}
                      </FieldLabel>

                      {f.options ? (
                        <SelectField
                          id={f.id}
                          name={f.id}
                          required={f.required}
                          defaultValue=""
                          options={f.options}
                          invalid={Boolean(error)}
                          aria-describedby={error ? errorId : undefined}
                        />
                      ) : f.textarea ? (
                        <TextAreaField
                          id={f.id}
                          name={f.id}
                          rows={5}
                          required={f.required}
                          invalid={Boolean(error)}
                          aria-describedby={error ? errorId : undefined}
                        />
                      ) : (
                        <TextField
                          id={f.id}
                          name={f.id}
                          type={f.type ?? "text"}
                          required={f.required}
                          autoComplete={f.autoComplete}
                          invalid={Boolean(error)}
                          aria-describedby={error ? errorId : undefined}
                        />
                      )}

                      <FieldError id={errorId} message={error} />
                    </div>
                  );
                })}

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="mono-label max-w-[36ch] leading-relaxed">{flow.note}</p>
                  <Button
                    type="submit"
                    variant="signal"
                    size="form"
                    disabled={status === "sending"}
                    className="disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : flow.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
