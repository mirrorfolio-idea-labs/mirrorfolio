import type { ReactNode } from "react";

/** Stamp rail that opens every section — mono index + right-hand note. */
export function SectionRail({
  index,
  label,
  note,
  invert = false,
}: {
  index: string;
  label: string;
  note?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={`mono-label flex items-center justify-between border-b px-5 py-3 md:px-8 ${
        invert
          ? "border-ink-foreground/15 text-ink-foreground/60"
          : "border-border"
      }`}
    >
      <span>
        {index} / {label}
      </span>
      {note && <span className="hidden sm:inline">{note}</span>}
    </div>
  );
}

/** Two-cell headline + body row. */
export function HeadlineRow({
  headline,
  body,
  invert = false,
}: {
  headline: ReactNode;
  body?: ReactNode;
  invert?: boolean;
}) {
  const rule = invert ? "border-ink-foreground/15" : "border-border";
  const muted = invert ? "text-ink-foreground/75" : "text-muted-foreground";
  return (
    <div className="grid md:grid-cols-4">
      <div
        className={`border-b ${rule} p-5 md:col-span-2 md:border-b-0 md:border-r md:p-8`}
      >
        <h2 className="display-caps text-[clamp(1.8rem,3.4vw,3rem)]">
          {headline}
        </h2>
      </div>
      {body && (
        <div className="p-5 md:col-span-2 md:p-8">
          <p
            className={`max-w-[52ch] text-sm leading-relaxed md:text-base ${muted}`}
          >
            {body}
          </p>
        </div>
      )}
    </div>
  );
}

/** Equal bordered cells with mono numbering. */
export function CellGrid({
  items,
  cols = 4,
  invert = false,
}: {
  items: { k: string; t: string; b: string }[];
  cols?: 3 | 4;
  invert?: boolean;
}) {
  const rule = invert ? "border-ink-foreground/15" : "border-border";
  const muted = invert ? "text-ink-foreground/65" : "text-muted-foreground";
  return (
    <div
      className={`grid border-t ${rule} sm:grid-cols-2 ${
        cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {items.map((it) => (
        <div
          key={it.k}
          className={`group flex min-h-[200px] flex-col justify-between border-b ${rule} p-5 sm:border-r md:p-8`}
        >
          <div className="mono-label flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 bg-signal opacity-0 transition-opacity group-hover:opacity-100" />
            {it.k}
          </div>
          <div>
            <div className="display-caps text-lg">{it.t}</div>
            <p className={`mt-3 text-sm leading-relaxed ${muted}`}>{it.b}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Mono metric row — evidence, not claims. */
export function MetricRow({ items }: { items: [string, string][] }) {
  return (
    <dl className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([n, l]) => (
        <div
          key={l}
          className="border-b border-border p-5 sm:border-r md:p-8"
        >
          <dt className="display-caps text-2xl md:text-3xl">{n}</dt>
          <dd className="mono-label mt-2 leading-snug">{l}</dd>
        </div>
      ))}
    </dl>
  );
}

const statusStyle: Record<string, string> = {
  Shipping: "bg-signal text-signal-foreground",
  "In Development": "border border-border bg-background",
  "Coming Soon": "border border-border bg-background text-muted-foreground",
};

export function StatusTag({ status }: { status: string }) {
  return (
    <span className={`mono-label px-2 py-0.5 ${statusStyle[status] ?? ""}`}>
      {status}
    </span>
  );
}
