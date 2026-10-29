# DRAYN signup backend

A separate Cloudflare Worker for the GitHub Pages-hosted DRAYN website. It does not change website hosting and is not live until explicitly deployed and configured.

## Current status

- Source code and D1 schema are prepared for review.
- The Worker requires a real D1 database ID before deployment.
- Do not connect the public form until a privacy notice is published and consent language is reviewed.
- No mailing list, automatic email, or DRAYN mail agent is connected yet.
- This Worker stores signup requests only. It does not send email or use an AI model.

## Setup

Run these commands from this directory with Wrangler installed and authenticated:

1. Create the D1 database: `npx wrangler d1 create drayn-signups`
2. Copy the returned database ID into `wrangler.toml`.
3. Apply the schema: `npx wrangler d1 execute drayn-signups --file=./schema.sql`
4. Set allowed website origins in the Worker configuration, using exact origins without trailing slashes.
5. Deploy to a temporary Worker name first and test before connecting the form.
6. Verify health, valid and invalid submissions, missing-consent submissions, and requests from an unapproved origin.

## API

- `GET /health`: non-sensitive health response.
- `POST /api/signup`: accepts `email`, optional `name`, booleans `earlyAccess`, `newsletter`, `partnerInterest`, required `privacyAcknowledged` and `privacyNoticeVersion`, optional `ref`, `utmSource`, `utmMedium`, `utmCampaign`, and optional honeypot `website`.
- `OPTIONS /api/signup`: restricted CORS preflight.

Newsletter permission is recorded separately and is never inferred from early-access or partner interest.

## Before public collection

- Publish an accurate privacy notice covering purposes, lawful basis, retention, rights, contact details and processors.
- Finalise consent wording and record the version shown to visitors.
- Add a visible privacy-notice link and an unticked newsletter checkbox to the form.
- Add bot protection and rate limiting, then test.
- Set an approved retention and deletion process.
- Restrict D1 access and document who can export or delete records.
- Test the Worker from GitHub Pages and from an unapproved origin.
- Confirm the API URL and configure it in the launch page.
- Review applicable EU/Portugal privacy and electronic marketing requirements before enabling collection.

## Mail-agent follow-up

Once submissions can be safely stored, the DRAYN mail agent can read approved records, classify interest, draft replies and prepare a digest. Start in human-approval mode. Do not give the agent unrestricted database access or permission to send marketing messages automatically.
