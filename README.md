# Gents Of Lagos — Premium Barbershop Website

A dark/gold premium website for Gents Of Lagos, a 5-star barbershop in Surulere, Lagos.

## Files

| File | Purpose |
|---|---|
| `index.html` | Full one-pager — hero, services, features, pricing, gallery, reviews, location, FAQ, CTA, footer |
| `assets/css/style.css` | Dark/gold design system, responsive, lightbox, animations |
| `assets/js/main.js` | Nav, scroll reveal, FAQ accordion, image lightbox, hours highlight, smooth scroll |

## Design System

- **Colors:** Black (`#0a0a0a`), carbon, graphite, gold (`#c9a96e`), cream
- **Fonts:** Poppins (headings) + Inter (body)
- **Aesthetic:** Dark, masculine, premium — gold accents on black
- **Responsive:** Mobile-first, breakpoints at 1024px, 768px, 480px

## Sections

1. **Hero** — Full-screen dark with gold grid pattern, animated entrance, WhatsApp CTA
2. **Services** — 6 service cards with pricing, duration, icons
3. **Why Us** — 4 feature cards with SVG icons (5-star rated, 7 days, experienced, atmosphere)
4. **Pricing** — 3-tier pricing (Essential ₦3k, Full Groom ₦7k, Young Gent ₦2.5k)
5. **Gallery** — 6-photo grid with lightbox (uses Unsplash placeholders — swap with real photos)
6. **Reviews** — 3 testimonials (5-star)
7. **Visit** — Address, hours (auto-highlights today), WhatsApp, map
8. **FAQ** — 5-question accordion
9. **CTA** — Final conversion banner
10. **Footer** — 4-column with social links

## How to Update

### Change phone number
Search for `2348059753372` in `index.html` and replace. It appears in nav, hero, pricing, FAQ, CTA, and footer.

### Change address
Edit the **Visit** section in `index.html`.

### Change hours
Edit the `.hours-list` items in the Visit section. The JS auto-highlights today's row.

### Change prices
Edit the `.service-card__price` and `.pricing-card__price` values.

### Swap gallery photos
Replace the `<img src="...">` URLs in the gallery section with local images. Place photos in `assets/img/` and reference as `assets/img/your-photo.jpg`.

### Change colors
Edit CSS variables in `:root` at the top of `assets/css/style.css` — especially `--gold` and `--black`.

### Add Instagram link
Replace the `href="#"` on the Instagram social link in the footer with the actual profile URL.

## Deploy

### Netlify
1. Push files to a GitHub repo
2. Connect in Netlify — no build step needed
3. Publish directory: `.` (root)

### Or just open locally
Double-click `index.html` — it works fully offline (except Google Fonts and gallery images).

## Quality Checklist

- ✅ Mobile-first responsive (480/768/1024 breakpoints)
- ✅ Semantic HTML5
- ✅ ARIA labels on interactive elements
- ✅ Keyboard-navigable lightbox (ESC to close)
- ✅ Reduced-motion support
- ✅ Lazy-loaded images
- ✅ Auto-highlighting today's hours
- ✅ WhatsApp pre-filled message booking
- ✅ Smooth scroll navigation
- ✅ IntersectionObserver scroll reveals
- ✅ Dark theme with gold accent system
- ✅ No external dependencies (except Google Fonts + Unsplash gallery images)

## Notes

- Gallery uses Unsplash placeholder photos. Replace with real photos of the barbershop's work.
- Reviews are based on the business's 5-star africabz rating. Replace with real client quotes when available.
- Instagram handle not yet confirmed for this business — update the footer link once found.
