# Architecture

This document describes the technical architecture for this project.

## Product scope

**Single-page site** for a massage business. Visitors complete a **contact or booking-style form**; submissions are delivered to the owner by **email**. There is no user accounts, no dashboard, and no database-backed content in scope for the initial version.

## Technology stack

| Layer | Choice | Role |
|--------|--------|------|
| **Infrastructure & deployment** | [SST](https://sst.dev) (4.x; use **`npx sst@latest init`** so new projects track current major version) | AWS resources, linking, secrets, and deploy workflow defined in code at the repo root. |
| **Framework** | [Next.js](https://nextjs.org) with the **App Router** | Routing, rendering, and server-side execution for form handling. |
| **UI** | [React](https://react.dev) | Components (Server and Client as appropriate). |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | Layout, typography, and responsive styling. |

**Cloud:** All runtime and managed services are on **AWS** (no Vercel-hosted production stack, etc.).

## What we are not building (initially)

- **Database** — not required; form payloads are not persisted in app storage.
- **Authentication** — site is public; no sign-in.
- **Separate HTTP API product** — no standalone REST/GraphQL service. Form handling uses **Next.js server-side mechanisms** (e.g. Server Actions or Route Handlers) only.
- **Extra integrations** — no payments, CMS, analytics, or third-party backends in v1.
- **Compliance programs** — no special regulatory requirements documented yet.

## Repository and code layout

- **Single Next.js application** at the repository root (no `apps/web` or monorepo packages for other clients).
- Use a **`src` directory** for application code as supported by Next.js, for example:
  - `src/app/` — App Router routes, layouts, and pages (including the main landing page).
  - `src/components/` — shared UI (form fields, layout sections).
  - Other `src/*` folders as needed (e.g. `lib/` for small helpers).

SST configuration and project-level files (`sst.config.ts`, `package.json`, etc.) live at the **root** alongside `src/`.

## Bootstrapping

Recommended starting point:

1. Create the Next.js app (TypeScript, Tailwind, App Router, **`src/`** layout).
2. From the project root, run **`npx sst@latest init`**, choose **AWS**, and install dependencies.

Exact prompts and filenames follow the current SST docs; pinning `sst` to a specific 4.x release in `package.json` is optional once the template is stable.

## Runtime architecture (proposed)

1. **Static and server-rendered UI** — Next.js serves the single (or primary) page via SST’s AWS deployment for Next.js (per SST’s `Nextjs`-style component for the version in use).
2. **Form submission** — Browser posts to a **server action or route handler** in Next.js. That code uses **Amazon SES** (via AWS SDK) to send email to the owner.
3. **SST `Email` component** — Configure `sst.aws.Email` (or equivalent) for a verified sender in SES, and **link** it to the Next/server runtime so the app can send mail with minimal secret wiring. Recipient is the business owner’s inbox.

Details (verified domain vs single address, sandbox vs production SES, spam protection) are implementation tasks, not fixed here.

## Project layout (implemented)

| Path | Purpose |
|------|---------|
| `sst.config.ts` | `sst.aws.Email` (`OutboundEmail`), `sst.Secret` (`ContactInbox`), `sst.aws.Nextjs` (`MyWeb`) with `link`. |
| `src/app/page.tsx` | Single landing page and contact section. |
| `src/app/actions/contact.ts` | Server action: validates input, sends mail via SES (`@aws-sdk/client-sesv2`). |
| `src/components/contact-form.tsx` | Client form using `useActionState`. |
| `src/sst-resource.d.ts` | TypeScript augmentation for `Resource.OutboundEmail` / `Resource.ContactInbox`. |

## Setup before deploy

1. **SES sender** — In `sst.config.ts`, set `sender` on `OutboundEmail` to an identity you will verify in Amazon SES (single address or domain).
2. **Inbox secret** — Set the address that receives form submissions (can match the sender or be different):

   ```bash
   npx sst secret set ContactInbox "you@yourdomain.com"
   ```

3. **AWS credentials** — Configure the AWS CLI or environment so `sst deploy` can run in your account/region.
4. **Development** — Run `npm run dev` (wraps `sst dev`) so linked resources resolve locally; plain `next dev` will not load SST links.

## Future extensions (out of scope until needed)

- Additional pages, CMS, or booking calendar integrations.
- Observability dashboards, E2E test stack, CI/CD provider choice.
- Legal pages (privacy policy), cookie consent, or region-specific compliance.

---

*Last updated: implementation notes and setup steps added.*
