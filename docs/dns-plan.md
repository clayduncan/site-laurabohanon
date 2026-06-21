# DNS Plan — laurabohanon.com

**Registrar:** GoDaddy (matches other Team Duncan domains)
**Hosting:** Netlify

## Records to set when domain is ready

### Primary records (Netlify)
| Type  | Name | Value                | TTL  |
|-------|------|----------------------|------|
| A     | @    | 75.2.60.5            | 3600 |
| CNAME | www  | <netlify-site>.netlify.app | 3600 |

Netlify's load balancer IP: 75.2.60.5 (current as of 2026; confirm at Netlify before cutting over)

### Alternative: CNAME flattening (if registrar supports)
Some DNS providers support CNAME flattening at root. If GoDaddy supports it, you can point @ directly to the Netlify custom domain value.

## Steps at launch time
1. Buy laurabohanon.com at GoDaddy if not already owned.
2. In Netlify, add custom domain `laurabohanon.com` and `www.laurabohanon.com`.
3. Set A record @ → 75.2.60.5 at GoDaddy.
4. Set CNAME www → <netlify-site>.netlify.app at GoDaddy.
5. Netlify will auto-provision Let's Encrypt TLS once DNS propagates (usually <1 hour).
6. In Netlify site settings, set primary domain to `www.laurabohanon.com` and add redirect from root to www.

## GA4 swap (when ready)
Replace `G-PLACEHOLDER` in src/layouts/BaseLayout.astro line with the real measurement ID.
Commit and push — Netlify auto-deploys.

## License swap (after Clay confirms)
Replace `pending verification` in src/data/compliance.ts with `000093260-0` (AREC number found — awaiting Clay's confirmation).
Commit and push.
