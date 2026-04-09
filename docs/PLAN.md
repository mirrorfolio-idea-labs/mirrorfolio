# Orchestration Plan: Backend, Payment & Email Management

## Task Definition
Rebuild the database schema, integrate Razorpay for one-time pre-booking payments, and implement an email management system (Nodemailer) for confirmation and welcome emails. Delivery is entirely within Next.js App Router API routes, followed by Vercel deployment.

## Sub-Agents Involved (Phase 2 - Execution)

| Agent | Focus Area | Responsibilities |
|-------|------------|------------------|
| `database-architect` | Database Structure | Redesign Prisma schema to support `User`, `BookingFormSubmission`, `Payment/Order`, and `EmailLog`. |
| `backend-specialist` | App/API Routes | Create Razorpay order endpoints, webhook listeners, signature verification, and Nodemailer utilities for auto-responders. |
| `frontend-specialist` | UI/UX | Build the Pre-book Form, integrate the Razorpay checkout widget, and connect to Next.js API boundaries. |
| `test-engineer` | Verification | Validate payment flows, webhook handling, email firing, and execute system verification checks (e.g., `security_scan.py`). |

## Planned Steps

### Step 1: Database Redesign (`database-architect`)
- **Schema Overhaul:** Replace the current schema in `prisma/schema.prisma`.
  - `User`: Basic customer identity and tracking.
  - `PreBooking`: Captures all details submitted from the UI form.
  - `Payment`: Tied to `PreBooking`, captures Razorpay attributes (`razorpay_order_id`, `razorpay_payment_id`, `razorpay_signature`, `status`).
  - `EmailLog`: Keep track of welcome mails, newsletters, and confirmation mails for customer service logic.
- **Migration:** Run `npx prisma db push` or `prisma migrate dev` (Neon DP requires special handling depending on dev environment).

### Step 2: Next.js API Routes & Payment (`backend-specialist`)
- **Order Generation:** `/api/razorpay/create-order` - Accepts pre-booking details, creates a DB record (Pending), and fetches a Razorpay Order ID.
- **Webhook Listener:** `/api/webhooks/razorpay` - Listens to `payment.captured` or `order.paid` events.
  - Verifies signature.
  - Updates DB payment status to `PAID`.
  - Triggers the Email dispatch.
- **Email Management System:** Setup `src/lib/email.ts` utilizing `nodemailer`.
  - **Welcome & Confirmation Email**: Sent automatically when payment clears.
  - Include templates for transactional and newsletter usage.

### Step 3: Frontend Integration (`frontend-specialist`)
- **Pre-Booking Form:** UI component to capture user input securely.
- **Razorpay Checkout:** Embed the Razorpay client SDK.
- Connect form submission -> `create-order` API -> Razorpay Popup popup -> `verify-payment` endpoint / generic success redirect.

### Step 4: Verification & Vercel Prep (`test-engineer` & `orchestrator`)
- Comprehensive error boundary testing so fake payments fail safely.
- Run `lint_runner.py` and `security_scan.py`.
- **Note:** Vercel deployment will be managed by the user manually, but we will ensure `.env.example` has all vars clearly defined (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `DATABASE_URL`).
