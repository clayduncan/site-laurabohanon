# clayduncan.com

Astro rebuild for `clayduncan.com`, deployed from the `main` branch of `clayduncan/site-clayduncan` to Netlify. The public brand system now includes `Clay Duncan` and the affiliated `Team Duncan, powered by Princeton Mortgage` header treatment.

## Local Development

- Use Node 22.
- Install dependencies with `npm install`.
- Start the dev server with `npm run dev`.
- Build the static site with `npm run build`.

This project is intentionally static, fast, and content-first.

MDX and sitemap support are active. Blog content ships through the Astro content collection, and sitemap output is generated during the production build. The site also includes GA4, Bing verification, and IndexNow deploy pings.

See `SETUP.md` for local setup and `docs/phase-3-architecture.md` for Phase Three architecture decisions.
