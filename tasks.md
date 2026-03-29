# Landing page implementation

Check off tasks as you complete them.

- [ ] **Tokens, fonts, and layout metadata** — Map Stitch palette to Tailwind/CSS tokens; switch `layout.tsx` to Noto Serif + Plus Jakarta Sans; set site metadata; align light theme with Final Polish (drop or scope dark mode if needed).

- [ ] **Section components** — Build hero, modalities, about/practitioner, and contact shell in `src/components/`; compose them in `src/app/page.tsx` in Stitch order with anchor IDs for in-page navigation.

- [ ] **Contact form, server action, and SES** — Add `contact-form.tsx` (client, `useActionState`), `actions/contact.ts` (validate + SES), wired to architecture/SST as in `docs/architecture.md`.

- [ ] **Responsive pass and Stitch QA** — Tune breakpoints against the Final Polish screenshot; stack layouts on small screens; verify typography, spacing, and touch targets.

- [ ] **Polish** — Motion, hover states, and chip/button micro-interactions per Stitch `designMd` (gradients, soft inputs, tonal surfaces—no harsh borders).
