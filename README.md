# Sideby website

Static site built with Astro, in 11 languages (English at `/`, others at `/fr/`, `/de/`, ...).

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Change the domain
One line in `astro.config.mjs`: `export const SITE = 'https://sideby.app';`
Canonical URLs, hreflang tags, sitemap and robots.txt all follow it.

## Edit text
One file per language in `src/i18n/` (`en.ts`, `fr.ts`, ...). Prices are in `src/i18n/index.ts` (`PRICES`).

## Deploy on Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, pick the repo.
3. Framework preset: Astro. Build command: `npm run build`. Output directory: `dist`.
4. After the first deploy: Custom domains > Set up a custom domain > your domain.
5. Google Search Console: add the domain, then submit `https://YOURDOMAIN/sitemap-index.xml`.
