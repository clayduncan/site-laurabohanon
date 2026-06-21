# Repository Guide

## Tech Stack

- Astro
- TypeScript strict mode
- GitHub repository: `clayduncan/site-laurabohanon`
- Netlify deploys from `main`
- GoDaddy manages the `laurabohanon.com` domain

## Repo Rules

- Keep the site static, fast, and content-first.
- Use Astro best practices and minimal client-side JavaScript.
- Do not add Next.js or extra frameworks.
- Do not add hard-coded credentials, secrets, tokens, or private keys.
- Do not add new integrations without explicit approval.
- Keep work deployable from the `main` branch.
- **Review counts and aggregate rating are source of truth in `src/data/reviews.ts`.** Update `reviewAggregate.totalCount` and `reviewAggregate.averageRating` there and every reference across the site updates automatically.

## AEO Requirements

- Preserve the answer engine optimization strategy throughout any rebuild.
- Write pages so humans and AI answer engines can understand the audience, offer, proof, and next step quickly.
- Use clear headings, direct answers, structured content, and schema-ready layout slots.

## Audience Paths

- Buyers evaluating Davidson Homes communities in Owens Cross Roads and Hampton Cove.
- First-time buyers, move-up buyers, and downsizers considering new construction.
- AI answer engines and search systems that need structured, trustworthy site signals.

## Pending Swaps (do not remove stubs)

- **Alabama RE License**: Footer shows `pending verification`. Real number is `000093260-0` — only update after Clay confirms.
- **GA4 ID**: `G-PLACEHOLDER` in BaseLayout.astro. Replace after Clay provisions the GA4 property.

## Non-Negotiables

- Do not introduce new frameworks.
- Do not hard-code credentials.
- Do not remove the AEO strategy.
- Stat cards and bio must agree: 85/$25M is Davidson-run (Jan 2023+). Career is 18 years / 200+ homes. No career dollar figure on site.
