# Mirrorfolio

**Early visibility for caregivers, without surveillance.**

---

## What is Mirrorfolio?

Mirrorfolio is a non-intrusive remote care system designed for adult children who worry about aging parents living alone. It provides awareness of daily patterns without cameras, microphones, or location tracking.

### The Problem

Millions of adult children live in different cities from their aging parents. They worry constantly:

- Is mom eating regularly?
- Did dad get up this morning?
- Is everything okay, or should I call?

Existing solutions force a terrible choice: invasive surveillance (cameras, trackers) or constant anxiety.

### Our Approach

Mirrorfolio detects **routine activity patterns**, not activities themselves.

- **What we track:** Movement patterns, kitchen activity, general presence
- **What we don't track:** Video, audio, location, conversations, biometrics
- **How it works:** Passive sensors learn what's normal, alert only when patterns break unexpectedly

The parent's home remains their private space. Caregivers get awareness, not surveillance footage.

---

## Core Principles

1. **Dignity over surveillance** — We never compromise on privacy for awareness
2. **Awareness, not monitoring** — You see patterns, not activities
3. **Parent-first design** — The home is their space, not a monitored facility
4. **India-first** — Built in India for Indian families, with global vision

---

## Current Status

**Pilot phase** — We're working with founding families in India to refine the system before wider release.

- Pilot duration: 6 months
- Pilot price: ₹8,499 (one-time)
- Direct access to founder for feedback

---

## Website

This repository contains the public website for Mirrorfolio, built with:

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Database:** NeonDB (PostgreSQL)
- **Email:** Nodemailer
- **Payments:** Razorpay (for pilot booking)

### Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Fill in your .env values, then:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

See `.env.example` for required configuration:

- `DATABASE_URL` — NeonDB PostgreSQL connection string
- `SMTP_*` — Email configuration (Gmail recommended)
- `RAZORPAY_*` — Payment gateway keys

---

## Contact

**Kabeer Hadi** — Founder  
📧 kabeer@mirrorfolio.com  
🌐 [mirrorfolio.com](https://mirrorfolio.com)

---

## License

Copyright © 2025-2026 Mirrorfolio. All rights reserved.
