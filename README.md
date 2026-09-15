# Telephant

The Telephant Webflow export rebuilt as a Next.js app, with Sanity as the CMS
for products and product detail pages.

The original Webflow export is not part of this repository.

## Getting started (new developers)

**Requires Node.js 22.12 or newer** (Sanity's minimum; Next.js alone would accept 20.9).

```bash
git clone https://github.com/Chiragparmar2309/Telephant-Stag.git
cd Telephant-Stag
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The site reads live content from the team's Sanity
project straight away — `.env.example` already holds the project ID, which is
public by design. No token is needed to run or develop the site.

**To edit content at http://localhost:3000/studio** you need two things from a
project admin, otherwise the Studio shows *Not authorized* or a CORS screen:

1. An invite to the Sanity project (sanity.io/manage → project → Members).
2. `http://localhost:3000` listed under API → CORS origins, with credentials.
   This is per project, not per developer — it only has to be added once.

If `.env.local` is missing or the project ID is blank, the site still runs on
the built-in placeholder content from `src/lib/fallback.js`.

> On Windows use `copy .env.example .env.local` in Command Prompt.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run seed` | Import the fallback content into Sanity (see below) |

## Working on animations

Animation work needs **no Sanity access**. Every CMS request happens on the
server, so the browser never calls Sanity's API and CORS never comes into it.
Clone, copy the env file, `npm run dev`.

### Where each animation lives

| Animation | Behaviour | Code |
| --- | --- | --- |
| Hero word flip ("Agencies") | AOS `flip-left` on scroll | `data-aos` in `components/sections/Hero.jsx`; AOS set up in `components/ui/AosProvider.jsx` |
| Trust logos, product tag pills | Continuous scroll | Splide AutoScroll in `components/ui/Marquee.jsx` |
| "View" pill on product cards | Follows the cursor, fades in | JS in `components/ui/TemplateCard.jsx`; `.view_btn` in `styles/globals.css` |
| Product page FAQ | Height 0 → content → `auto` | JS in `components/product/ProductFaq.jsx`; `.navigation` in `styles/globals.css` |
| Mobile nav drawer | Slide + staggered links | Class toggle in `components/layout/Navbar.jsx`; `.nav_menu*` in `styles/globals.css` |
| Contact button arrow | Nudges right on hover | `.get_in_touch-btn svg` in `styles/globals.css` |
| Form controls | Focus and checked states | `styles/form.css` |

### Rules that will save you time

**Don't put animation CSS in `src/styles/css/telephant.webflow.css`.** That file
is the Webflow export, and re-exporting from Webflow overwrites it. Anything
added there is lost. Use `src/styles/globals.css`, or a new stylesheet imported
in `src/app/(site)/layout.jsx` after `telephant.webflow.css`.

**AOS keeps working after client-side navigation** — nothing to wire up. It
watches the DOM and picks up `data-aos` elements that Next adds when you move
between pages, so `data-aos="..."` works on any element. `once: false` in
`AosProvider.jsx` makes animations replay each time an element scrolls into
view.

**The `trustMarquee` keyframe in `globals.css` does nothing.** No component
renders `.trust_logo_track`. The trust strip is Splide — edit `Marquee.jsx`.
(The `.trust_logo_img` height rules next to it *are* live.)

**`prefers-reduced-motion` is not handled anywhere yet.** AOS and Splide
AutoScroll both animate for users who have turned motion off in their OS. The
comments in `AosProvider.jsx` and `Marquee.jsx` show the option to use in each.
Worth doing before adding more motion.

## Connecting Sanity

1. Create a project at [sanity.io/manage](https://sanity.io/manage).
2. Copy `.env.example` to `.env.local` and fill in the project ID:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. In that project's **API → CORS origins**, add `http://localhost:3000`
   with credentials allowed.
4. Restart `npm run dev` and open http://localhost:3000/studio.

### Getting content in

Rather than starting from an empty CMS, `npm run seed` uploads every image from
`public/images` and creates the products, testimonials, trust logos and site
settings that the site currently shows. It needs a write token:

1. Sanity Manage → your project → **API → Tokens** → create one with **Editor**
   permission.
2. Add it to `.env.local` as `SANITY_WRITE_TOKEN=...`
3. `npm run seed`

The script is safe to re-run: documents use fixed IDs and are written with
`createOrReplace`, and Sanity de-duplicates uploaded images by content hash.

Once documents exist, Sanity takes over and `src/lib/fallback.js` is no longer
used. You can delete it and the fallbacks in `src/lib/content.js` if you would
rather the site fail loudly when the CMS is empty.

### Publishing changes without a redeploy

Product pages are statically generated. To make an edit in the Studio appear on
the live site immediately, add a webhook in Sanity Manage → **API → Webhooks**:

- **URL** — `https://your-site.com/api/revalidate`
- **Trigger on** — create, update, delete
- **Secret** — the same value as `SANITY_REVALIDATE_SECRET` in your env

Without the webhook, pages still refresh on their own within 60 seconds
(`revalidate` in `src/sanity/client.js`).

## Deploying to Vercel

Deploy the folder directly with the Vercel CLI. (The code lives on GitHub, but
the Vercel project is not connected to the repository, so a push does not
trigger a deploy.)

```bash
npx vercel login     # once
npx vercel           # preview deployment, creates + links the project
npx vercel --prod    # promote to production
```

Vercel auto-detects Next.js; no build settings need changing. `.vercelignore`
keeps `node_modules`, `.next` and env files out of the upload.

The site deploys and runs with **no environment variables set** — it renders the
baked-in content from `src/lib/fallback.js`. Add these in Vercel → Settings →
Environment Variables when you connect the CMS:

| Variable | Needed for |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | reading content from Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | defaults to `production` |
| `SANITY_REVALIDATE_SECRET` | the publish webhook |

`metadataBase` resolves itself on Vercel from `VERCEL_PROJECT_PRODUCTION_URL`,
so Open Graph URLs are correct without any configuration. Set
`NEXT_PUBLIC_SITE_URL` only once a custom domain is attached.

Two things to do after the first deploy, if you are using Sanity:

1. Add the deployed origin to Sanity → **API → CORS origins** (with
   credentials), or `/studio` will not be able to authenticate.
2. Point the publish webhook at `https://<your-domain>/api/revalidate`.

## How it is organised

```
src/
  app/
    layout.jsx              root: <html>/<body> only
    not-found.jsx           404 (also catches notFound() from product pages)
    (site)/                 route group: everything with the nav + footer
      layout.jsx            imports the Webflow CSS, renders nav/footer
      page.jsx              home
      products/page.jsx     all templates
      products/[slug]/      product detail (statically generated)
      style-guide/          all 14 sections of style-guide.html
    studio/[[...tool]]/     embedded Sanity Studio, no site chrome
    api/revalidate/         webhook target for cache busting
  components/
    layout/                 Navbar, Footer, NewsletterForm
    sections/               Hero, ProductGrid, Testimonials, TrustMarquee, ...
    product/                Gallery, Purchase panel, FAQ accordion
    styleguide/             one component per style guide section
    ui/                     Button, TemplateCard, Marquee, Icons, AosProvider,
                            Form.jsx (Client-First classes, no Webflow CSS)
  lib/
    content.js              every data getter, Sanity first with fallbacks
    fallback.js             the original export's copy and images
  sanity/
    schemas/                product, category, testimonial, trustLogo, siteSettings
    queries.js              GROQ
    client.js, image.js, env.js, structure.js
  styles/
    css/                    Webflow's three stylesheets, byte-for-byte
    form.css                form controls, replaces webflow.css's form rules
    globals.css             the export's inline <style> blocks + port additions
public/images/              all 53 images from the export
```

### Styling

`src/styles/css/` holds Webflow's `normalize.css`, `webflow.css` and
`telephant.webflow.css` exactly as exported, so a future re-export can overwrite
that folder wholesale. Anything added by hand goes in `globals.css`, which also
holds the CSS that was inline in the export's `<style>` tags.

Class names are unchanged from the export, so the Webflow CSS applies without
modification.

Two `input` `name` attributes on the product page are load-bearing: the export
styles those controls via `input[name="Licence Type"]` and
`input[name="Add ons Plan"]`. Renaming them silently drops the styling.

### Style guide

`/style-guide` is a full port of `style-guide.html` - all 14 sections in the
export's order: structure classes, headings, HTML tags, text classes, buttons,
colors, max widths, spacing, grid utilities, spacers, icons, utility classes,
form elements and rich text.

The export wrote its 374 demo cells out by hand. Here the regular ones are
generated from the scale they describe (`SIZES` and `SPACING_STEPS` in
`components/styleguide/Primitives.jsx`), so the 227-cell spacing section is a
few loops rather than 625 lines of markup. Verified by parsing the rendered
page and diffing every label against the export: all 374 present.

Two deliberate differences:

- The last section, "Webflow elements", is split into **Form elements** and
  **Rich text** and rebuilt without Webflow (see below). Its `form_component`
  label becomes `Form`, plus new cells for states and messages.
- `main-wrapper` and the max-width demos use `<div>` where the export used
  `<main>`, which would otherwise nest a second `<main>` inside the site
  layout's.

Webflow's `w-node-*` ids are dropped throughout: they carried per-element grid
placement from the Designer and no CSS in the export references them.

### Form controls

The form uses the project's own Client-First classes — `form_component`,
`form_form`, `form_field-wrapper`, `form_label`, `form_input`, `is-text-area`,
`is-select-input`, `form_checkbox`, `form_checkbox-icon`, `form_checkbox-label`,
`form_radio`, `form_radio-icon`, `form_radio-label`, `form_message-success`,
`form_message-error`, `button is-form-submit`. See `/style-guide`.

What is gone is Webflow's own component CSS. `telephant.webflow.css` styles
`.form_input`, `.form_checkbox*`, `.form_radio*` and the message blocks, but
several things were only ever supplied by `webflow.css`:

| Was | Now |
| --- | --- |
| `.w-input` / `.w-select` | `display`, `width`, font, focus/disabled/readonly on `.form_input` |
| `.w-select` grey box + OS arrow | `appearance: none` + an inline `data:` SVG arrow |
| `.w-checkbox-input` + `webflow.js` | `.form_checkbox-icon` on the real input, `:checked` |
| `.w-form-formradioinput` + `webflow.js` | `.form_radio-icon` on the real input, `:checked` |
| `.w-form-label` | `.form_checkbox-label` / `.form_radio-label` |
| `.w-button` | `display: inline-block` on `.button.is-form-submit` |

`.form_form`, `.form_field-wrapper`, `.form_label`, the two choice labels and
`.button.is-form-submit` have no rules in either stylesheet — they were carried
entirely by the `w-` classes. `src/styles/form.css` fills exactly those gaps
against the Client-First names, and is imported after `telephant.webflow.css`.

The export's checkbox and radio were a hidden real input
(`opacity:0;position:absolute;z-index:-1`) beside a decorative `<div>` that
`webflow.js` toggled `w--redirected-checked` on. Removing `webflow.js` left them
permanently unchecked and unreachable by keyboard. They are now real inputs
carrying the `*-icon` classes, so state needs no JavaScript and `Tab` works.

Three other fixes carried over from the export:

- The published page used `<input type="select">`, which is not a valid input
  type and renders as a text box. It is a real `<select>`.
- Both choice groups were captioned `<label for="email">`, pointing at an input
  that does not exist. They are `<fieldset>` / `<legend>`.
- The checkmark and select arrow came from Webflow's CDN; both are inline
  `data:` SVGs. The stray `#3898ec` (Webflow's default blue, which had leaked
  into the radio and focus styles) is now the project's `--brand--blue`.

`width: 100%` on `.form_input` is stated in `form.css` on purpose: the published
stylesheet has it, the local export in `src/styles/css/` does not, so there it
came from `.w-input`. Without it the control collapses to ~202px.

### What was dropped

The export loaded jQuery and `js/webflow.js` (42KB). Neither is used — the site
has no Webflow interactions (`data-w-id` count is zero) and no Webflow widgets,
so both were removed. The remaining behaviour is five small scripts, now
components:

| Export script | Now |
| --- | --- |
| Mobile nav toggle | `components/layout/Navbar.jsx` |
| Splide marquees | `components/ui/Marquee.jsx` |
| Cursor-following "View" pill | `components/ui/TemplateCard.jsx` |
| FAQ accordion | `components/product/ProductFaq.jsx` |
| AOS init | `components/ui/AosProvider.jsx` |

### Known gaps

- **Checkout is a stub.** The licence radios, add-on checkboxes and the running
  total all work; "Buy now" logs the selection and stops. The handoff point is
  `handleBuy` in `components/product/ProductPurchase.jsx`.
- **The newsletter form does not send anywhere.** Webflow's form endpoint only
  exists on Webflow hosting. `components/layout/NewsletterForm.jsx` validates
  and clears; wire it to your provider.
- Some product-card images in `public/images` are mirrored. That is how the
  export ships them, not something the port introduced.
