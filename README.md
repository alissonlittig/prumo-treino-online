# Prumo — online personal trainer landing page

A single-page landing site for a fictional online personal trainer with three subscription plans. Portfolio demo: brand, people, testimonials, prices and numbers are all made up.

**Live:** https://alissonlittig.github.io/prumo-treino-online/

![Desktop](docs/desktop.png)
![Mobile](docs/mobile.png)

## Features
- Hero with an app-style "today's workout" mock built in pure CSS/SVG (no stock photos)
- Interactive week-type tabs (keyboard accessible, arrow keys)
- Plans with monthly / quarterly toggle (15% off, prices recalculated client-side)
- FAQ with native `<details>`, demo-only lead form (nothing is sent)
- Responsive down to 390px, no horizontal scroll; respects `prefers-reduced-motion`

## Stack
Astro 5 (static output), plain CSS, ~40 lines of vanilla JS, self-hosted variable fonts (Bricolage Grotesque, Inter). Deployed with GitHub Actions to GitHub Pages.

Lighthouse (mobile preset, local): Performance 96 · Accessibility 95 · Best Practices 100 · SEO 100.

## Run
```
npm ci
npm run dev      # local dev
npm run build    # static site in dist/
npm test         # sanity tests against the build output
```
Content is in Portuguese (pt-BR).
