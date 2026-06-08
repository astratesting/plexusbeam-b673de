# PlexusBeam — Marketing Landing Page Build Plan

---

## 1. PRODUCT

A single-page (with a small set of route fragments for legal and a waitlist confirmation) public marketing site for **PlexusBeam**, an AI-powered retail trading intelligence platform. The page exists to convert curious retail investors into waitlist signups by communicating one promise: *explainable, plain-English stock predictions powered by alternative data — not a black box*. It is **not** the product itself; there is no login, no dashboard, no trading UI. The page educates (what "alternative data" + "explainable AI" means in this context), proves credibility through transparent design and concrete product explanation (not invented logos or testimonials), and removes signup friction with a one-field email form that posts to a waitlist endpoint.

---

## 2. WHO IT'S FOR

The ICP is **retail investors who are curious about AI-driven tools but skeptical of black-box stock tips and overwhelmed by terminal-grade platforms** — think: the Robinhood/Seeking Alpha user who has been burned by hype, wants to understand *why* a model is saying what it says, and doesn't have a Bloomberg budget. They are time-poor, mobile-comfortable, and skim before they read.

How that shapes the build:
- **Tone**: plain English, no finance jargon, no "10x alpha" copy.
- **Hierarchy**: one clear promise in the hero, one CTA, scannable sections.
- **Trust without fabrication**: credibility comes from *explaining the methodology visually* (signal cards, "what is alternative data" explainer) — never from fake logos or quote cards.
- **Performance**: fast LCP, no heavy video on first paint, accessible (WCAG AA contrast on the warm off-white base).

---

## 3. LOOK & FEEL

### 3.1 Visual System

- **Positioning / vibe**: warm, optimistic, approachable — the opposite of a cold dark Bloomberg terminal. Friendly, "your smarter friend who happens to be good at markets."
- **Color palette** (Tailwind tokens in `tailwind.config.ts`):
  - `violet` `#7C3AED` — primary brand, used in logo, primary CTA, key accents
  - `coral` `#FB7185` — secondary accent, used in highlights, secondary CTAs, decorative blurs
  - `honey` `#F59E0B` — tertiary accent, used for "positive signal" indicators, dividers, icon strokes
  - `offwhite` `#FFF8F0` — page background (warm, not pure white)
  - `ink` `#1F1B2E` — primary text (deep violet-tinted near-black, not pure black)
  - `mist` `#EFE9FF` — soft surface for cards on the offwhite base
- **Typography**:
  - `font-display: 'Manrope'` — weights 600/700/800, used for H1/H2, section eyebrows, CTA labels. Manrope's geometric warmth matches "Warm Catalyst."
  - `font-sans: 'Source Sans 3'` — weights 400/500/600, used for body, UI, FAQ answers.
  - Type scale: H1 clamp(2.5rem, 5vw, 4.5rem), H2 clamp(1.875rem, 3vw, 2.75rem), body 1.0625rem / 1.65 line-height, eyebrow 0.8125rem uppercase tracking-widest.
- **Spacing & layout**: 12-column responsive grid at md+, single-column stack on mobile. Generous vertical rhythm: sections are `py-20 md:py-28`. Container max-width `max-w-7xl` for the marketing page.
- **Surfaces**: rounded-2xl and rounded-3xl everywhere — cards, buttons, inputs, image frames. No sharp 90° corners on user-facing UI. Subtle `ring-1 ring-violet/10` on cards on top of the offwhite to create depth without harshness.
- **Iconography**: stroke-based Lucide icons, 1.5px stroke, 24px default, colored with `current` so they inherit violet/coral/honey. No filled icons.
- **Imagery & illustration**: optimistic custom **lattice motif** used as a recurring decorative element — a SVG of interconnected dots/nodes in a soft gradient (violet → coral) at low opacity, used as a section background mask and inside the logo. No stock photos of people. No AI-generated faces. Product visuals are abstract: signal cards, ticker chips, "reasoning trace" mockups.
- **Motion** (Framer Motion, reduced-motion safe):
  - Hero: subtle lattice drift on the background lattice (translateY 8px loop, 12s).
  - On scroll into view: cards fade + lift 12px, staggered 60ms.
  - CTA buttons: scale 0.98 on tap, 150ms.
  - All motion respects `prefers-reduced-motion: reduce` and degrades to instant.

### 3.2 Screen-by-screen layout

The page is a **single scrollable route** with anchored sections, plus a sticky top nav. Each section describes what the user sees, top to bottom.

**Top Nav (sticky, `h-16`, backdrop-blur on scroll)**
- Left: PlexusBeam logo (custom SVG mark — a lattice node with a beam of light) + wordmark in Manrope 700.
- Center (md+): anchor links — Features · How it works · Signals · Pricing · FAQ.
- Right: small secondary "Sign in" link (greyed, links to `/#` placeholder for now — the product is invite-only) + primary "Join the waitlist" violet pill button that scrolls to `#waitlist`.

**Hero (`min-h-[88vh]`, offwhite base)**
- Eyebrow chip: pill, `bg-mist text-violet`, "AI-powered retail intelligence".
- H1 (Manrope 800, ink): "Stock insights you can actually understand."
- Subhead (Source Sans 3, `text-ink/70`, max-w-2xl): "PlexusBeam reads between the lines — earnings calls, supply-chain signals, executive speech patterns — and tells you *why* a stock is moving, in plain English."
- Inline lattice SVG behind the headline, low-opacity gradient, `pointer-events-none`.
- Primary CTA: large violet rounded-full button "Join the waitlist →" → scrolls to `#waitlist`.
- Secondary CTA: text link "See how it works" → scrolls to `#how`.
- Below the CTAs: a single-line trust note (honest, no invented stats): "Built for retail investors. No black-box tips. No spam."

**Section: "What you actually get" (4-up feature grid)**
- Section eyebrow: "FEATURES" · H2: "Built for curious investors, not quants."
- 4 cards in a 2×2 (md+) / 1-col (mobile) grid, each `rounded-3xl bg-white ring-1 ring-violet/10 p-8`:
  1. **Explainable predictions** — Every signal comes with a plain-English reasoning trace. *(icon: `MessageSquareText`)*
  2. **Alternative data, demystified** — Earnings-call tone, supply-chain chatter, insider patterns. *(icon: `Radio`)*
  3. **Plain-English summaries** — No finance jargon. The model explains itself like a friend. *(icon: `Sparkles`)*
  4. **Watchlists that think for you** — Add tickers, get daily briefings. *(icon: `BellRing`)*

**Section: "How it works" (`#how`, 3-step horizontal timeline on md+, vertical stack on mobile)**
- H2: "From headline to insight in three steps."
- Step 1: **We listen** — PlexusBeam monitors thousands of sources: earnings transcripts, logistics data, executive interviews.
- Step 2: **We reason** — Our model turns raw signals into a plain-English explanation of *why* a stock may move.
- Step 3: **You decide** — You see the signal, the reasoning, and the confidence. No tips, no pressure.
- Each step has a small numeric badge in honey, a Lucide icon in violet, and a one-sentence body.

**Section: "Signals, in plain English" (a "product preview" mockup)**
- H2: "A peek at the kind of insight you'll get."
- A single large card `rounded-3xl bg-white ring-1 ring-violet/10 p-6 md:p-8` that visually mocks a real product card:
  - Ticker chip: `$NVDA` in a violet pill.
  - Headline: "Unusual logistics activity at Asian suppliers."
  - Reasoning trace (bulleted, with small violet "because" connectors): "Because supplier shipping volumes rose 14% week-over-week" / "Because similar patterns preceded two prior earnings beats."
  - Confidence meter: a thin horizontal bar, honey fill at 72%, with "Why this score?" tooltip.
  - Footer: "Source: aggregated logistics signals · Updated 4 min ago"
- This is presented *clearly as a mockup* via a small "Preview" label on the card, so it isn't mistaken for live data.

**Section: "Why we built this" (a founder-note-style 2-column block)**
- Left: a single decorative lattice illustration (large SVG).
- Right: H2 "We were tired of black boxes." and a ~120-word plain-English paragraph explaining the mission: AI should *explain itself* to retail investors, not hand down verdicts. No founder name, no fake byline — keep it honest.
- Closing line: "If that resonates, we'd love to have you on the waitlist."

**Section: Pricing teaser (`#pricing`)**
- H2: "Simple, fair, and coming soon."
- 2-card layout (not 3 — no fake "Enterprise" tier):
  - **Free** — `rounded-3xl ring-1 ring-violet/10`: $0, "5 watchlist tickers, daily briefings, plain-English reasoning."
  - **PlexusBeam Pro** — `rounded-3xl bg-gradient-to-br from-violet to-coral text-white`: $14/mo (introductory, lock-in for waitlist members), "Unlimited tickers, real-time alerts, full reasoning traces, custom signal sources."
- Both cards have a "Join the waitlist" button (the same waitlist endpoint, so waitlist members get a launch discount code).

**FAQ (`#faq`, accordion, 6 items)**
- H2: "Questions, answered straight."
- Accordion (Radix UI), 6 items, each with a `+`/`−` toggle:
  1. "Is this financial advice?" — No. PlexusBeam is an information tool; you make the calls.
  2. "Where does the data come from?" — Public filings, earnings transcripts, anonymized logistics signals, and licensed alternative-data providers.
  3. "Do I need a brokerage account?" — No. PlexusBeam is an analysis layer, not an execution platform.
  4. "What does 'explainable' actually mean?" — Every prediction is paired with a plain-English reasoning trace and the sources behind it.
  5. "When will it launch?" — We're onboarding waitlist members in cohorts. Joining the list gets you early access.
  6. "How much will it cost?" — A free tier and a paid Pro tier at $14/month for waitlist members.

**Final CTA band (full-bleed, violet → coral gradient, white text)**
- H2 (white): "Be on the list when we open the doors."
- Waitlist form (see §4 for the flow).
- Small note: "We'll only email you about the launch. Unsubscribe in one click."

**Footer (`bg-ink text-offwhite/80`)**
- 3 columns on md+, stacked on mobile:
  - Col 1: Logo (white version) + one-line tagline.
  - Col 2: Product — Features · How it works · Pricing · FAQ.
  - Col 3: Company — About · Privacy · Terms · Contact.
- Bottom bar: "© {currentYear} PlexusBeam. Not financial advice." (auto-updated year via a tiny `new Date().getFullYear()` — no fake company address, no fake registration number).

**Mobile-specific behavior**
- Nav collapses to a hamburger that opens a full-height sheet with the same links + CTA.
- All grids collapse to single column.
- Hero lattice illustration hides on `<sm` for performance.
- Sticky CTA bar appears at the bottom of the viewport on mobile after the user scrolls past the hero (`#waitlist` button).

---

## 4. USER FLOWS

### Flow A — Waitlist signup (the only conversion)

1. User arrives (direct, social, search) → lands on `/`.
2. User scrolls (or clicks nav "Join the waitlist") → smooth-scrolls to `#waitlist`.
3. Form state: a single email field + a checkbox "I agree to receive launch updates" (required, links to /privacy). No name field — lower friction.
4. On submit:
   - Client-side: validate email regex + checkbox, disable button, show inline spinner.
   - POST `/api/waitlist` with `{ email, consent: true, referrer, utm }`.
   - Server: dedupe by email (case-insensitive), insert into `waitlist_signups` (Supabase), enqueue a confirmation email (Resend, optional — only if `RESEND_API_KEY` is set; otherwise the endpoint still returns success and logs).
   - On success: replace the form with a success card — "You're on the list. We'll email you when it's your turn." with a small lattice illustration and a "Tweet this" share button (optional, non-blocking).
   - On duplicate: show a friendly message — "Looks like you're already on the list — you're all set."
   - On error: show inline error with a retry button; do not toast.

### Flow B — Anchor navigation

1. User clicks a nav link (Features / How it works / Signals / Pricing / FAQ).
2. Page smooth-scrolls to the section id, accounting for the 64px sticky nav (`scroll-margin-top` on each section).
3. URL hash updates without a full page jump.

### Flow C — FAQ accordion

1. User clicks a question row.
2. Row expands (Radix Collapsible), `+` rotates to `−`, body slides down over 200ms.
3. Only one item open at a time (single-collapsible mode) to keep the section compact.

### States

- **Loading**: never applicable for the marketing page itself; the waitlist submit has a button spinner + disabled state.
- **Empty / 404**: a custom `not-found.tsx` matching the brand (lattice illustration + "This page doesn't exist — but our waitlist does." + back-to-home CTA).
- **Error**: a custom `error.tsx` with a retry button and a "Report this" mailto.

---

## 5. PAGES / ROUTES

| Route | Purpose | Layout & main elements |
|---|---|---|
| `app/page.tsx` | The single-page marketing site (home). | Sticky nav + 8 anchored sections (Hero, Features, How it works, Signal preview, Why we built this, Pricing, FAQ, Final CTA) + Footer. |
| `app/privacy/page.tsx` | Privacy policy. | Centered `prose` container, offwhite background, same nav + footer. |
| `app/terms/page.tsx` | Terms of service. | Same layout as privacy. |
| `app/not-found.tsx` | 404. | Brand-styled empty state with lattice illustration + CTA home. |
| `app/error.tsx` | Runtime error boundary. | Brand-styled error card with "Try again" + report link. |
| `app/sitemap.ts` | Dynamic sitemap. | Returns the 3 public routes. |
| `app/robots.ts` | robots.txt. | Allows all, points to sitemap. |
| `app/api/waitlist/route.ts` | POST endpoint for the waitlist form. | Validates body, upserts to Supabase, returns JSON `{ ok: true, status: "new" \| "duplicate" }`. |
| `app/api/health/route.ts` | GET healthcheck. | Returns `{ ok: true, ts }` — used by uptime monitors and for the page to optionally verify env on mount (no UI dependency). |

No `/dashboard`, `/login`, `/app` routes — this is explicitly the public marketing site only.

---

## 6. CORE FEATURES

Each feature is implemented and behaves as described. No placeholders, no "coming soon" stubs beyond the legitimate "launching soon" status of the product itself.

### 6.1 Waitlist form (`components/WaitlistForm.tsx`)
- **What**: a single-email, single-checkbox form that posts to `/api/waitlist` and renders a success / duplicate / error state inline.
- **How it works**:
  - React `useState` for `email`, `consent`, `status` (`'idle' | 'submitting' | 'success' | 'duplicate' | 'error'`), and `errorMessage`.
  - `react-hook-form` + `zod` schema (`email().email()`, `consent.literal(true)`) for validation.
  - On submit: `fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email, consent: true, referrer: document.referrer, utm: parseUtm() }) })`.
  - On `'new'` or `'duplicate'`: render the success card.
  - On network / 5xx error: render the inline error with a retry button.
  - Honeypot field `company` (hidden, `tabIndex=-1`, `autoComplete="off"`); if filled, the request is silently treated as success to avoid bot detection revealing the trap.
  - Server-side rate limit: 5 POSTs per IP per 10 minutes (in-memory `Map` keyed by IP, with a TODO comment noting it should move to Upstash Redis in production — but functional for launch).

### 6.2 FAQ accordion (`components/Faq.tsx`)
- **What**: a single-open accordion with 6 Q&A items.
- **How it works**: Radix `Accordion` (type="single", collapsible), animated via `data-state` + Tailwind. Each item is a `<AccordionItem>` with a `<AccordionTrigger>` and `<AccordionContent>`. Icons rotate via `data-state` attribute selector.

### 6.3 Signal preview card (`components/SignalPreviewCard.tsx`)
- **What**: a static, clearly-labeled mockup of what a PlexusBeam insight looks like.
- **How it works**: a presentational React component with hardcoded example data (`{ ticker, headline, reasoning, confidence, source, updatedAt }`) and a small "Preview · illustrative" label in the corner. No API call, no props from outside — it's a *visual demonstration*, not a live data widget. The confidence bar is a styled `<div>` with a width set by the `confidence` prop.

### 6.4 Pricing teaser (`components/PricingTeaser.tsx`)
- **What**: 2 cards (Free + Pro) with feature lists and a "Join the waitlist" CTA per card.
- **How it works**: presentational; the Pro card's CTA is a button that scrolls to `#waitlist` and the Free card's CTA is the same. The Pro card has a small honey "Waitlist price — locks in at signup" badge to honestly signal the price is for waitlist members.

### 6.5 Sticky nav with scroll-aware active section (`components/Nav.tsx`)
- **What**: highlights the nav link of the section currently in view, applies a backdrop-blur after the user scrolls past 16px.
- **How it works**: an `IntersectionObserver` watches each section element; the link whose `id` matches the topmost intersecting entry gets `text-violet font-semibold`. `useEffect` adds a scroll listener that toggles a `scrolled` class once `window.scrollY > 16`. Mobile: same component, but renders a hamburger that toggles a Radix `Dialog` (or `Sheet`) with the links stacked.

### 6.6 Lattice motif (`components/Lattice.tsx`)
- **What**: a reusable decorative SVG of a connected-node lattice in a violet→coral gradient.
- **How it works**: an inline SVG (`viewBox="0 0 400 400"`) of ~14 circles connected by thin lines, wrapped in a `<div>` with `pointer-events-none` and configurable `opacity` / `animate` props. Used in 3 places: hero (animated, opacity 0.18), "Why we built this" (static, opacity 0.5, 320px square), and the 404 page (large, opacity 0.3).

### 6.7 Logo (`components/Logo.tsx`)
- **What**: a self-contained SVG logo + wordmark that adapts color via a `tone` prop (`'violet' | 'white'`).
- **How it works**: the mark is a single lattice node with a coral "beam" line; the wordmark is "PlexusBeam" in Manrope 800. No external image files.

### 6.8 SEO / metadata
- **What**: per-route `metadata` and `openGraph` images.
- **How it works**: `app/layout.tsx` exports a `metadata` object with title template `"%s · PlexusBeam"`, description from the hero subhead, OG image generated via `app/opengraph-image.tsx` (Next.js `ImageResponse`) — a 1200×630 card with the lattice motif and the H1.

---

## 7. DATA MODEL

Only one entity is stored. All other content is static.

**`waitlist_signups`** (Supabase / Postgres)

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` PK, default `gen_random_uuid()` | |
| `email` | `citext` NOT NULL UNIQUE | Case-insensitive dedupe. |
| `consent` | `boolean` NOT NULL | Must be `true` to accept the insert. |
| `referrer` | `text` NULL | `document.referrer` at submit time. |
| `utm_source` | `text` NULL | Parsed from `?utm_source=` on landing. |
| `utm_medium` | `text` NULL | |
| `utm_campaign` | `text` NULL | |
| `ip_hash` | `text` NULL | SHA-256 of IP + a server-side salt, for soft rate-limit and uniqueness heuristics; never stored in plaintext. |
| `user_agent` | `text` NULL | |
| `created_at` | `timestamptz` NOT NULL DEFAULT `now()` | |
| `updated_at` | `timestamptz` NOT NULL DEFAULT `now()` | Triggered on update. |

**Indexes**: unique on `email`; btree on `created_at` (for cohort queries later).

**RLS**: enabled. Only the `service_role` key (used server-side in the API route) can read/insert; the `anon` key has no access. No public Supabase client is shipped to the browser.

**No other tables.** The FAQ, pricing tiers, feature copy, etc. live in `lib/content.ts` as typed constants — no CMS, no DB calls on the marketing page.

---

## 8. AUTH

**No auth on this site.** The marketing page is fully public and anonymous. There is no `/login`, no `/dashboard`, no session, no user object.

The future product app (out of scope for this build) will use **NextAuth.js v5 with an Email (magic link) provider backed by Supabase** — but that's deliberately not built here. The marketing site must not include Clerk, must not include a `/login` route, and must not pretend to have user accounts.

The `/api/waitlist` endpoint uses the Supabase **service role** key (server-only, via `SUPABASE_SERVICE_ROLE_KEY` env var) to insert into `waitlist_signups`. The browser never sees a Supabase key.

---

## 9. FILES

The concrete file tree. Each line is a file to create; each has a one-line purpose.

```
app/
  layout.tsx                          Root layout: Manrope + Source Sans 3 fonts, offwhite background, Nav + Footer, global metadata.
  page.tsx                            Home: composes all marketing sections in scroll order.
  globals.css                         Tailwind directives, CSS variables for brand tokens, base typography.
  not-found.tsx                       Brand-styled 404 with lattice illustration.
  error.tsx                           Runtime error boundary with retry.
  sitemap.ts                          Generates sitemap.xml for the 3 public routes.
  robots.ts                           Generates robots.txt.
  opengraph-image.tsx                 Dynamic 1200x630 OG image (ImageResponse with lattice + H1).
  icon.tsx                            Dynamic favicon (the logo mark as a 32x32 SVG via ImageResponse).
  privacy/
    page.tsx                          Privacy policy content (Markdown rendered to HTML).
  terms/
    page.tsx                          Terms of service content.
  api/
    waitlist/
      route.ts                        POST handler: validates, dedupes, inserts into Supabase waitlist_signups.
    health/
      route.ts                        GET healthcheck returning {ok:true, ts}.

components/
  Nav.tsx                             Sticky top nav with scroll-aware active section + mobile sheet.
  Logo.tsx                            SVG logo + wordmark with tone="violet"|"white".
  Lattice.tsx                         Reusable decorative lattice SVG with opacity/animate props.
  Hero.tsx                            Hero section: eyebrow, H1, subhead, CTAs, lattice background.
  Features.tsx                        4-up feature grid.
  HowItWorks.tsx                      3-step horizontal timeline.
  SignalPreviewCard.tsx               Static, clearly-labeled mockup of a PlexusBeam insight.
  WhyWeBuiltThis.tsx                  Founder-note-style 2-column block with lattice illustration.
  PricingTeaser.tsx                   2-card pricing layout (Free + Pro).
  Faq.tsx                             Radix accordion with 6 Q&A items.
  FinalCta.tsx                        Full-bleed gradient CTA band wrapping WaitlistForm.
  Footer.tsx                          3-column footer with auto-updated year.
  WaitlistForm.tsx                    The email + consent form, client component, posts to /api/waitlist.
  Section.tsx                         Shared <section> wrapper with id, scroll-margin-top, max-w container, vertical rhythm.
  Eyebrow.tsx                         Shared uppercase tracking-widest small-label component.
  icons.ts                            Centralized Lucide icon re-exports used across the page.

lib/
  content.ts                          Typed static content (features[], howItWorks[], pricingTiers[], faq[]) — single source of truth.
  supabaseAdmin.ts                    Server-only Supabase client using SUPABASE_SERVICE_ROLE_KEY; throws if env missing.
  rateLimit.ts                        In-memory IP rate limiter (5/10min) for /api/waitlist.
  utm.ts                              parseUtm(): reads window.location.search and returns {utm_source, utm_medium, utm_campaign}.
  seo.ts                              Default metadata (title, description, OG, Twitter card) reused by layout and per-route metadata.

public/
  lattice-pattern.svg                 Static decorative lattice (used as a CSS background in rare cases).
  favicon.ico                         Fallback favicon if icon.tsx is bypassed.

tailwind.config.ts                    Extends theme: brand colors (violet/coral/honey/offwhite/ink/mist), fonts (display=Manrope, sans=Source Sans 3), borderRadius additions.
postcss.config.js                     Tailwind + autoprefixer.
next.config.mjs                       Next config: reactStrictMode, images config.
.env.example                          PUBLIC_SITE_URL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, IP_HASH_SALT, RESEND_API_KEY (optional), CONTACT_EMAIL.
package.json                          Scripts: dev, build, start, lint, typecheck.
tsconfig.json                         Strict TypeScript.
```

**Supabase SQL (one-time, applied via dashboard or migration):**

```
supabase/
  migrations/
    0001_waitlist.sql                 CREATE TABLE waitlist_signups + indexes + updated_at trigger; ALTER TABLE ENABLE ROW LEVEL SECURITY; no policies (service role only).
```

---

## 10. ACCEPTANCE — "Done and working" checklist

- [ ] `pnpm dev` starts the site at `http://localhost:3000` with zero runtime errors and zero TypeScript errors.
- [ ] Lighthouse on `/`: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 100.
- [ ] The page renders correctly at 360px, 768px, 1024px, and 1440px widths (manual check + a Playwright visual smoke test at 2 widths).
- [ ] All 8 sections (Hero, Features, How it works, Signal preview, Why we built this, Pricing, FAQ, Final CTA) are present, in order, with the copy and layout described in §3.2.
- [ ] No invented testimonials, customer quotes, customer logos, user counts, ratings, revenue figures, or press mentions anywhere on the site (grep for "users", "trusted by", "★★★★★", company names — all should be 0 hits).
- [ ] The signal preview card is visibly labeled "Preview · illustrative" so it cannot be mistaken for live data.
- [ ] Nav anchor links smooth-scroll to the correct sections, accounting for the 64px sticky nav height.
- [ ] The active nav link updates as the user scrolls between sections.
- [ ] The mobile hamburger opens a full-height sheet with the same links + CTA, and closes on link tap or backdrop tap.
- [ ] The waitlist form:
  - [ ] Rejects invalid emails inline (Zod message under the field).
  - [ ] Rejects submission when the consent checkbox is unchecked.
  - [ ] On valid submit, POSTs to `/api/waitlist`, shows a button spinner, and replaces the form with the success card on success.
  - [ ] Shows a friendly "already on the list" message when the API returns `status: "duplicate"`.
  - [ ] Shows a retryable inline error on network / 5xx failure (no full-page reload).
  - [ ] Honeypot field `company` is present in the DOM but hidden from sighted users and `tabIndex=-1`; filling it results in a silent success without a DB insert.
- [ ] `POST /api/waitlist`:
  - [ ] Returns `400` with a JSON error for invalid body.
  - [ ] Returns `429` after 5 POSTs from the same IP within 10 minutes.
  - [ ] Upserts a row into `waitlist_signups` (case-insensitive email) and returns `{ ok: true, status: "new" | "duplicate" }`.
  - [ ] Stores `ip_hash` (SHA-256 of IP + salt), `referrer`, `utm_*`, and `user_agent` when present.
  - [ ] Never returns a Supabase key, never reflects untrusted HTML.
- [ ] Supabase RLS is enabled on `waitlist_signups` with no policies accessible to `anon`; inserts only work via the service role key.
- [ ] `/privacy` and `/terms` render with the same nav/footer, are reachable from the footer links, and contain real, non-placeholder legal copy (not lorem).
- [ ] `/not-found` and `/error` match the brand (lattice illustration + on-brand CTA) and reset on retry.
- [ ] `app/sitemap.ts` produces a valid `sitemap.xml` listing `/`, `/privacy`, `/terms`.
- [ ] `app/robots.ts` produces a `robots.txt` allowing all and pointing to the sitemap.
- [ ] `app/opengraph-image.tsx` produces a 1200×630 PNG; sharing a link to `/` on Slack/Twitter shows the correct title, description, and image.
- [ ] All motion respects `prefers-reduced-motion: reduce` (verified by toggling the OS setting and reloading).
- [ ] Color contrast: every text/background pair meets WCAG AA (≥ 4.5:1 for body, ≥ 3:1 for large text) — verified with axe DevTools, zero violations.
- [ ] Keyboard-only navigation: every interactive element is reachable, has a visible focus ring (violet, 2px, offset 2px), and the FAQ accordion is operable with Enter/Space.
- [ ] No use of Clerk anywhere in `package.json` or imports. (Grep `clerk` → 0 matches.)
- [ ] No login route, no dashboard route, no `/app` segment exists.
- [ ] Footer year is dynamic (`new Date().getFullYear()`), not a hardcoded string.
- [ ] `pnpm build` completes with no warnings about missing env vars (env vars are only read at request time, not at build time).
- [ ] `.env.example` documents every required and optional env var, with no real secrets.

---

**FILES:**
["app/layout.tsx", "app/page.tsx", "app/globals.css", "app/not-found.tsx", "app/error.tsx", "app/sitemap.ts", "app/robots.ts", "app/opengraph-image.tsx", "app/icon.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/api/waitlist/route.ts", "app/api/health/route.ts", "components/Nav.tsx", "components/Logo.tsx", "components/Lattice.tsx", "components/Hero.tsx", "components/Features.tsx", "components/HowItWorks.tsx", "components/SignalPreviewCard.tsx", "components/WhyWeBuiltThis.tsx", "components/PricingTeaser.tsx", "components/Faq.tsx", "components/FinalCta.tsx", "components/Footer.tsx", "components/WaitlistForm.tsx", "components/Section.tsx", "components/Eyebrow.tsx", "components/icons.ts", "lib/content.ts", "lib/supabaseAdmin.ts", "lib/rateLimit.ts", "lib/utm.ts", "lib/seo.ts", "public/lattice-pattern.svg", "tailwind.config.ts", "postcss.config.js", "next.config.mjs", ".env.example", "package.json", "tsconfig.json", "supabase/migrations/0001_waitlist.sql"]