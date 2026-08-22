# Fox Clear Waste Clearance — Website

Marketing site for Fox Clear Waste Clearance, built as a single-page React app with
anchor navigation (Home, About, Services, Gallery, Reviews, FAQs, Contact).

Built with **React 19**, **Vite** and **Tailwind CSS v4**. No UI library — the components,
icons and animations are all local, so the whole thing ships as one small bundle.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Editing the content

Nearly all copy lives in one file: `src/data/site.js`.

| Export         | What it controls                                                     |
| -------------- | -------------------------------------------------------------------- |
| `business`     | Phone, email, address, socials, area served, opening hours, taglines |
| `navLinks`     | Header and footer navigation                                 |
| `services`     | The six service cards and the contact form dropdown          |
| `promises`     | The four trust badges under the About section                |
| `stats`        | The orange stats bar (jobs, rating, recycled, turnaround)    |
| `process`      | The four "how it works" steps                                |
| `reviews`      | Customer testimonials                                        |
| `faqs`         | The accordion questions and answers                          |
| `serviceAreas` | The bulleted list of clearance types in the About section    |

Change the phone number in **two** places — `business.phone` (displayed) and
`business.phoneHref` (the `tel:` link) — plus the `LocalBusiness` structured data block in
`index.html`. The same applies to the address: `business.address` drives the site, and the
`PostalAddress` in `index.html` drives search results.

### Placeholder content to replace before launch

- Email address and the Facebook / Instagram URLs in `src/data/site.js`
- Testimonials in `reviews` are written as examples; swap in real ones
- Stats (`100+`, `5★`, `48 reviews`) are from the brand artwork; confirm before going live
- Opening hours are a sensible default for the trade; confirm the real ones

## Project structure

```
public/favicon.png          Logo mark, generated from the brand artwork
public/og-image.jpg         Social share card, rendered from the live hero section
scripts/extract_assets.py   Slices the supplied brand sheets into web assets
scripts/capture_og_image.py Re-renders public/og-image.jpg from a running server
src/
  assets/                   Generated images (logo, van, truck, workwear photography)
  components/               One file per section, plus Icon / Reveal / SectionHeading
  data/site.js              All site content
  index.css                 Tailwind theme tokens, base styles, component classes
  App.jsx                   Section order
```

## Brand theme

Theme tokens are defined with Tailwind v4's `@theme` block in `src/index.css`:

- `fox-*` — the orange scale, with `fox-500` (`#f2661f`) as the primary brand colour
- `ink-*` — the black/grey scale used for backgrounds and body text
- `leaf` — the green used for recycling and eco messaging
- `font-display` — Barlow Condensed, for all headings and buttons
- `font-sans` — Inter, for body copy

## Images

`src/assets/` is generated from the supplied brand sheets (banners, van wrap mockups,
workwear mockups and the logo). To regenerate after updating the source artwork, edit the
crop boxes in `scripts/extract_assets.py` and run:

```bash
python3 -m venv .venv
.venv/bin/pip install pillow
.venv/bin/python scripts/extract_assets.py
```

Replace these with real job photography when it is available — the layout expects roughly
landscape images in the gallery and a portrait image in the About section.

The hero is served as two crops: the landscape `hero-collection.jpg` and, under 768px, a
portrait `hero-collection-tall.jpg` chosen by a `<picture>` element, so the van branding
stays visible in the narrow strip beside the headline on phones.

## Social share image

`public/og-image.jpg` is a 1200×630 render of the hero section, referenced by the Open Graph
and Twitter card tags in `index.html`. Regenerate it whenever the hero changes — start a
server, then:

```bash
npm run dev
.venv/bin/python scripts/capture_og_image.py --url http://localhost:5173/
```

The script drives headless Chrome, so it currently expects Chrome at the standard macOS
path; pass `--chrome` to point at another binary.

## Wiring up the contact form

`src/components/Contact.jsx` validates on the client and then simulates a send. Replace the
`window.setTimeout` in `handleSubmit` with a real request to your form endpoint (Formspree,
Netlify Forms, Web3Forms, or your own API route) and keep the `sending` / `sent` states.

## Deploying

The build output in `dist/` is static, so it works on Netlify, Vercel, Cloudflare Pages or
any host that serves files.

```bash
npm run build
```

Set the site's canonical domain in `index.html` (`<link rel="canonical">` and the Open Graph
`og:url`) before deploying.
