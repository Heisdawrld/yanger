# Yanga Boss Beaute — Premium Website

Static, mobile-first website for Yanga Boss Beaute (beauty salon, Yaba, Lagos). Built for performance, conversion, and real booking integration.

## What's Inside

| File | Purpose |
|---|---|
| `index.html` | Full one-pager — hero, services, story, booking, reviews, gallery, Instagram feed, FAQ, location, newsletter, footer |
| `assets/css/style.css` | Full custom design system with CSS variables, responsive grid, animations, lightbox |
| `assets/js/main.js` | Navigation, scroll reveal, FAQ accordion, image lightbox, newsletter, smooth scroll |
| `assets/img/yanga-1..6.jpg` | Gallery/hero photography |
| `netlify.toml` | Netlify deploy config with security headers and cache rules |

## Design System

- **Colors:** Deep plum (`#2d1b2a`), rose (`#c48888`), blush (`#f5e3e0`), gold (`#c9a96e`), cream (`#faf7f4`)
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Responsive:** Mobile-first, breakpoints at 1024px, 768px, 480px
- **Accessibility:** Semantic HTML, ARIA labels, reduced-motion support, keyboard-navigable lightbox

## Sections

1. **Hero** — Full-screen parallax, gradient overlay, primary CTA (Fresha booking + WhatsApp)
2. **Services** — 6-category grid with tags and direct booking links
3. **Our Story** — Owner's authentic journey (Mary Ekeze, moved to Yaba Nov 2022)
4. **Book** — Fresha integration with 12 featured services + pricing, 3-step how-it-works
5. **Reviews** — 3 real testimonials (sourced from Africabz, Facebook)
6. **Gallery** — 6-photo grid with lightbox
7. **Instagram** — 4-photo feed linking to @yangabeautesalon
8. **Visit** — Address, hours, contact, social, OpenStreetMap embed, Google Maps directions
9. **FAQ** — 6 accordion items covering booking, services, pricing, hours
10. **Newsletter** — Email signup with toast confirmation
11. **CTA Banner** — Final conversion section
12. **Footer** — 4-column grid with links, social icons, copyright

## Booking Integration

The site integrates with [Fresha](https://www.fresha.com/a/yanga-boss-beaute-lagos-2-fakunle-street-yrp9lgez) — 66 services with real-time availability. Links throughout the site point to the Fresha booking page.

Fallback: WhatsApp booking at `+234 911 453 3234`.

## Deploy (Netlify)

1. Push to GitHub
2. Connect the repo in Netlify
3. `netlify.toml` handles config — no build step needed

## How to Update

### Change text/content
Edit `index.html` — all sections are clearly labeled with HTML comments.

### Change photos
Replace files in `assets/img/` keeping the same filenames (`yanga-1.jpg` through `yanga-6.jpg`).

### Change colors
Edit CSS variables in `:root` at the top of `assets/css/style.css`.

### Change Fresha booking link
Search for `fresha.com/a/yanga-boss-beaute` in `index.html` and replace with the new URL.

### Change hours / address / phone
Edit the **Visit** section in `index.html`. The phone number appears in multiple places — search for `+234 911 453 3234`.

### Add/remove FAQ items
Copy an existing `.faq-item` block in the FAQ section and update the question and answer text.

### Change Instagram handle
Search for `yangabeautesalon` in `index.html` and replace.

## Performance

- Static HTML, no JavaScript framework
- Fonts loaded from Google Fonts CDN with `preconnect`
- Images use `loading="lazy"`
- Assets cached for 1 year via Netlify headers
- Zero dependencies
- Lighthouse target: 95+ on all metrics

## License

All rights reserved — Yanga Boss Beaute.
