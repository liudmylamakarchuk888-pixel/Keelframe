# Keelframe — company website

React 18 + TypeScript + Vite. No UI framework, no CSS framework — one global stylesheet with design tokens, and all content in plain data files so the site can be edited without touching components.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

## Where things live

```
index.html                 page shell, Google Fonts links, meta description
public/img/                portfolio screenshots (.webp) and team photos
public/logo/               logo files (mark, mono mark, lockup)
reference/                 source material for portfolio entries (screenshots, write-ups) — not shipped
src/
  main.tsx                 entry point
  App.tsx                  routing (HashRouter — see "URLs" below)
  styles/global.css        ALL styles: design tokens at the top, then one block per section
  data/
    site.ts                brand, contact details, hours, legal entity, form/booking config, navigation, footer links
    services.ts            the 11 services (title, who it's for, intro, "where it breaks", 4 points, stack, CTA)
    projects.ts            portfolio / case studies (18 projects, each with a tech stack)
    content.ts             Explore AI cards, chooser table, process steps, engagement models, testimonials, FAQ
    about.ts               everything on the About page
    trust.ts               client wordmarks and accreditations (home trust strip + About page)
    careers.ts             culture, benefits and open roles
  components/              one component per section (Hero, Trust, Services, Portfolio, Contact, …)
    CtaLink.tsx            button-styled link that handles router paths and external URLs alike
  pages/
    Home.tsx               the one-page home (all sections, ending with the contact form)
    About.tsx              the About page
    Careers.tsx            the Careers page
    Privacy.tsx            the privacy policy (linked from the footer)
    Terms.tsx              the terms of service (linked from the footer)
```

## How the call-to-action buttons work

Every "Book a call", "Discuss a … build", "Request a written estimate", "Discuss a similar build" and Explore AI button leads to the **contact form** at the bottom of the home page, with the form pre-filled from the URL:

```
/#/contact?intent=call&service=ai-development&re=Something%20like%20Beretta%20Configurator
```

- `intent` — `call`, `estimate` or `question` (selects the "I would like to" toggle)
- `service` — a service id from `services.ts` (pre-selects "What do you need?")
- `re` — free text, shown as a "Regarding" chip and added to the subject line

Build these links with `contactLink({ intent, service, re })` from `src/data/site.ts`.

**Delivery.** With `site.formEndpoint` empty (the default) the form opens the visitor's email app with the message filled in, and tells them so. Set `formEndpoint` to a Formspree / Basin / Netlify Forms / your-own-API URL and the form posts the fields as JSON instead (fields: `name`, `email`, `company`, `service`, `budget`, `timeline`, `message`, `intent`, `regarding`, `page`, `_subject`). A honeypot field (`website`) is included; drop submissions where it is filled.

**Booking tool.** Set `site.bookingUrl` (Calendly, Cal.com, …) and every "Book a discovery call" button opens it in a new tab instead of the form. The other buttons still go to the form.

## Editing content

- **Contact details** — `src/data/site.ts`: email, phone, WhatsApp link, address, hours, response time, social handles.
- **Legal entity** — `src/data/site.ts → legal`: company name, registration number, VAT number, ICO registration and registered office. Shown in the footer and on the Privacy and Terms pages.
- **Add a portfolio project** — add an object to `src/data/projects.ts` and drop its image into `public/img/`. Set `kind` to `app`, `web`, `shopify` or `betting` and it appears under the right filter; add `tags` (any of `ai`, `3d`, `web3`, `marketplace`) to list it under those topic filters as well. Give it a `stack` (shown in the case study) and, if the closest service is not the one implied by its kind, a `service` id so "Discuss a similar build" pre-selects the right service. Projects without an `img` get a branded placeholder tile (add `tint` colours). Sites with a `url` show a "Visit site" button.
- **Portfolio images** — 1600×1067 (3:2) `.webp`. For a plain browser screenshot, frame it the way the Rejuve.AI, Beretta, Bay Smokes and Petify tiles were made: a brand-tinted background with the screenshot in a browser window.
- **Add / edit a service** — `src/data/services.ts`. `who` is the "For" line under the intro. The jump-to chips, the footer list, the contact form's "What do you need?" list and the chooser table columns all follow this file (`short` is the column label; match it in `content.ts → chooserColumns`).
- **Engagement models** — `src/data/content.ts → engagementModels` (shown under the process steps).
- **Trust strip** — `src/data/trust.ts` (client names and accreditations). The numbers come from `site.founded` and the project count.
- **Testimonials** — `src/data/content.ts → testimonials`. Set `placeholder: true` on a quote to show it with a dashed border and a "replace me" label.
- **Team** — `src/data/about.ts → team`. Add `photo: 'name.jpg'` (file in `public/img/`) to replace the initials avatar.
- **Careers** — `src/data/careers.ts`. Roles apply by email (subject line is set automatically). Empty the `roles` array to show "0 open positions".
- **Privacy policy / Terms** — `src/pages/Privacy.tsx` and `src/pages/Terms.tsx` (the text is a plain array at the top of each file).

## Design tokens

Colours, fonts and radii are CSS custom properties at the top of `src/styles/global.css`:

- `:root` — the dark theme (default)
- `@media (prefers-color-scheme: light)` and `:root[data-theme="light"]` — the light theme

Change `--violet`, `--cyan`, `--pink` and `--grad` to re-colour the whole site. Fonts are Bricolage Grotesque (display), Onest (body) and DM Mono (labels), loaded from Google Fonts in `index.html`.

## URLs

The app uses `HashRouter`, so it works on any static host with no server configuration:

- `/#/` home · `/#/about` · `/#/careers` · `/#/work` · `/#/contact` · `/#/privacy` · `/#/terms` · `/#/services/ai-development` (scrolls to that service)

If your host supports single-page-app fallbacks (Vercel, Netlify and Cloudflare Pages do by default), change `HashRouter` to `BrowserRouter` in `src/App.tsx` for clean URLs (`/about`, `/services/ai-development`). Nothing else needs to change.

## Deploying

`npm run build` produces a static `dist/` folder. Upload it anywhere: Vercel / Netlify (connect the repo, build command `npm run build`, output `dist`), Cloudflare Pages, S3 + CloudFront, or any web server.

## Demo content — replace before going live

The site is filled in so it can be shown to clients. The following is demo content, each marked with a `DEMO` comment in the data file:

- [ ] **Team** (`src/data/about.ts`) — Kaito Takahashi and Li Wei come from the project write-ups in `reference/`; the other four names and bios are invented. No photos yet (initials are shown).
- [ ] **Two testimonials** (`src/data/content.ts`) — the Loom and Sinq quotes are written for the demo and attributed to invented people. The Gather quote is real.
- [ ] **Accreditations** (`src/data/trust.ts`) — Shopify Partner, AWS Partner, Cyber Essentials and ICO registration are assumed. Confirm or delete each one.
- [ ] **Company registration details** (`src/data/site.ts → legal`) — company number, VAT number and ICO number are invented placeholders.
- [ ] **WhatsApp number** (`src/data/site.ts`) — assumed to be the office line.
- [ ] **Careers** (`src/data/careers.ts`) — the three open roles and the benefits are invented.
- [ ] **Social links** (`src/data/site.ts`) — assumed handles (`/keelframe`); confirm or replace.
- [ ] **Privacy policy and Terms** (`src/pages/Privacy.tsx`, `src/pages/Terms.tsx`) — generic UK wording; have both reviewed.
- [ ] **Tech stacks in the case studies** (`src/data/projects.ts → stack`) — Beretta and Bay Smokes come from the write-ups in `reference/`; the other sixteen are inferred from the scope text. Confirm each.

## Before going live — checklist

- [ ] Replace `hello@keelframe.com` in `src/data/site.ts`
- [ ] Decide how the contact form is delivered (`formEndpoint`) and whether to use a booking tool (`bookingUrl`)
- [ ] Work through the demo-content list above
- [ ] Check the FAQ answers and engagement models match how you actually work (pricing, minimums, support period)
- [ ] Confirm the Mosaic and Lost and Found Crew case-study descriptions
- [ ] Confirm the Rejuve.AI, Beretta, Bay Smokes and Petify.gg case studies describe the studio's actual role on each project
- [ ] Optional: add a blog. There is deliberately none yet — invented articles would hurt more than help. When there is real writing to publish, add a `posts.ts` data file and a `Blog` page following the pattern of `Careers`.

## Single-file build (optional)

`npm run build:single` bundles everything into one `dist-single/index.html` (images stay in `public/img`). Useful for previews or emailing a static copy.
