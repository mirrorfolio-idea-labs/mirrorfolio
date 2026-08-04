# Mirrorfolio — Ambient Care Intelligence

Marketing site for Mirrorfolio, built on the Next.js App Router.

## Built with

- Next.js 16.2 (App Router, Turbopack)
- TypeScript
- React 19
- Tailwind CSS 4
- shadcn/ui (Radix primitives)
- MongoDB (lead capture)

## Development

Requires [Bun](https://bun.sh) (or Node 20+ with npm).

```sh
bun install
bun run dev
```

The site runs at http://localhost:3000 with no further setup — lead capture
falls back to a local dead-letter file when MongoDB is not reachable.

| Script              | What it does                       |
| ------------------- | ---------------------------------- |
| `bun run dev`       | Dev server with Turbopack          |
| `bun run build`     | Production build                   |
| `bun run start`     | Serve the production build         |
| `bun run lint`      | ESLint (`eslint-config-next`)      |
| `bun run typecheck` | `tsc --noEmit`                     |
| `bun run format`    | Prettier                           |

## Structure

```
src/
  app/                 App Router routes
    (site)/            Pages sharing the site chrome (nav, footer, rails)
    api/leads/         Lead capture endpoint
    hello/             Standalone conference landing page
  components/
    site/              Site-specific sections and forms
    ui/                Vendored shadcn/ui primitives
  lib/
    leads/             Validation, persistence, notification, rate limiting
```

`src/components/ui/**` is vendored shadcn/ui, managed through the shadcn CLI.
It is kept verbatim so CLI updates apply cleanly — two upstream primitives trip
React 19's compiler lint rules, which `eslint.config.mjs` relaxes for that path
only.

## Lead capture

`POST /api/leads` accepts the four contact-page flows (`waitlist`, `hospital`,
`investor`, `careers`) plus `hello`, validated as a zod discriminated union.

- **Storage** — MongoDB is the system of record. If the write fails, the lead is
  appended to a dead-letter file (mode `0600`) so an outage never costs a lead.
  The response carries `degraded: true` in that case.
- **Spam guards** — a `company_website` honeypot and a minimum time-on-form.
  Both respond exactly like the success path, so a bot learns nothing.
- **Rate limiting** — fixed window per IP, 429 with `Retry-After` past the limit.
- **Notification** — optional Resend email on each lead; a mail failure never
  fails the request.

### Configuration

Set these in `.env.local`. Every value is optional — the defaults let the site
run unconfigured — but anything set must be valid, or the server throws on first
request rather than silently dropping leads. Schema: `src/lib/env.ts`.

| Variable                   | Default                                | Purpose                                  |
| -------------------------- | -------------------------------------- | ---------------------------------------- |
| `MONGODB_URI`              | `mongodb://127.0.0.1:27017`            | Atlas connection string in production    |
| `MONGODB_DB`               | `mirrorfolio`                          | Database name                            |
| `MONGODB_LEADS_COLLECTION` | `leads`                                | Collection name                          |
| `LEADS_DEAD_LETTER_FILE`   | `.data/leads-dead-letter.jsonl`        | Fallback sink; holds personal data       |
| `RESEND_API_KEY`           | _unset_                                | With `LEAD_NOTIFY_TO`, enables email     |
| `LEAD_NOTIFY_TO`           | _unset_                                | Where lead alerts are sent               |
| `LEAD_NOTIFY_FROM`         | `Mirrorfolio <onboarding@resend.dev>`  | Sender for lead alerts                   |
| `LEAD_RATE_LIMIT`          | `5`                                    | Requests per window, per IP              |
| `LEAD_RATE_WINDOW_MS`      | `60000`                                | Window length in milliseconds            |

The rate limiter is in-process, which is correct for a single instance. Behind
more than one instance it becomes per-instance and should move to a shared
store.
