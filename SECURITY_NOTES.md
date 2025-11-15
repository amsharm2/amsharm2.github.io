Security recommendations for this static site

1) Content-Security-Policy (CSP)
- A site-wide CSP reduces XSS risk. Because the original site used inline scripts, I moved those into `assets/js/site.js` so we can adopt a restrictive CSP.
- Example meta tag added to `_layouts/default.html` (adjust if you add more external resources):

  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; font-src 'self' data:;">

2) Rel for external links
- All `target="_blank"` links should include `rel="noopener noreferrer"` to mitigate reverse tabnabbing. Updated in `_layouts/default.html`.

3) HTTP Security Headers (set by host)
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-Frame-Options: DENY (or use frame-ancestors in CSP)
- Strict-Transport-Security: max-age=63072000; includeSubDomains; preload (only if serving over HTTPS)
- Permissions-Policy: camera=(), microphone=(), geolocation=()

Note: These MUST be set by your hosting provider or CDN (GitHub Pages doesn't let you set arbitrary headers). See notes below for common hosts.

4) External resources and Subresource Integrity (SRI)
- If you keep using CDN-hosted scripts/styles (e.g., Font Awesome, html5shiv), consider using SRI hashes and an explicit allowed origin in CSP.

5) Secrets
- No obvious API keys or secrets were found in the repository. Continue to avoid committing private keys or tokens.

6) Further steps
- If you want stricter CSP (no `'unsafe-inline'` for styles), remove inline `style="..."` attributes and move them into CSS files.
- Consider serving assets via a CDN with TLS and HSTS enabled, and put security headers on the CDN or web-server.

Host-specific notes
- GitHub Pages: You cannot set arbitrary HTTP headers. Consider using Cloudflare in front to add headers, or deploy to Netlify/Vercel where you can add `_headers` or platform headers.
- Netlify: add a `_headers` file with the headers above.
- Cloudflare: use Transform Rules or Page Rules to add headers.

If you'd like, I can:
- Add a `_headers` file for Netlify
- Remove remaining inline `style="..."` attributes
- Add SRI to CDN includes

