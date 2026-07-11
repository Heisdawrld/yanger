# Yanga Boss Beaute — website

Static, mobile-first one-page site for Yanga Boss Beaute (beauty salon, Yaba, Lagos).

## Structure
- `index.html` — the page
- `assets/css/style.css` — styles
- `assets/img/yanga-1..6.jpg` — gallery / hero photos (owner's own work)

## Deploy (Netlify)
Push to GitHub, then connect the repo in Netlify. `netlify.toml` handles config — no build step.

## To update
- **Photos**: swap files in `assets/img/`, keep the same names.
- **Hours / address / phone**: edit the matching text in `index.html`.
- **Services**: edit the `.card` blocks in the `#services` section.
