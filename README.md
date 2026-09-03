# DRAYN Website v0.1

A complete static landing page.

## Recommended hosting
Cloudflare is my preferred long-term choice for DRAYN because the project can begin as a static site and later grow into server-side services, storage, databases, vector search and AI/agent infrastructure without necessarily moving platforms.

## Deploy today
1. Create a GitHub repository called `drayn-site`.
2. Upload these files.
3. In Cloudflare, create a new Workers/Pages application and connect the GitHub repository.
4. Deploy the static site.
5. Attach the custom domain `drayn.online`.

For this version, no build process is required.

## Alternative
Vercel is an excellent option if the future application is likely to become a React/Next.js-heavy AI application. Its Git-based deployment and preview environments are particularly straightforward.

## Project philosophy
Keep the public site simple. Add product, agent and memory functionality only when DRAYN is ready for it.
