# DRAYN Early Access and Partner Programme - Launch Notes

Status: concept / preview. No public signup collection or affiliate payments are enabled by this page.

## Early access

### Minimum capture fields
- Email address (required)
- Name (optional)
- Interest flags: terminal early access, newsletter, partner programme
- Timestamp and source/campaign attribution once a real backend is connected

### Consent
- Keep general marketing consent separate from the early-access request.
- Record the exact consent wording, timestamp and form/source version.
- Provide a clear unsubscribe mechanism for marketing email.
- Publish a privacy notice explaining purpose, lawful basis, retention, processors, rights and contact details before collecting real signups.
- Do not claim the current mailto prototype stores submissions. It opens a draft for the visitor to send.

### Referral attribution
Capture the following query parameters where present:
- `ref`: partner identifier
- `utm_source`: source or partner channel
- `utm_medium`: placement type
- `utm_campaign`: campaign identifier

For production, persist attribution server-side with a timestamp and define a reasonable attribution window. Do not rely only on a URL or browser-local state for commission decisions.

## Partner programme

### Potential partner types
- Agent and developer tool builders
- AI educators and technical creators
- Trading / research agent communities
- Specialist data and infrastructure providers
- Consultants and agencies deploying agents for clients

### Commercial principle
Do not publish a commission rate until pricing, gross margins, refund rules and qualifying events are understood. Start with referrals for paid customer revenue that DRAYN actually receives. Treat free registrations as an acquisition metric, not automatically as a payable event.

### Suggested qualifying events
1. Referral click recorded.
2. Early-access registration attributed.
3. User activates an eligible DRAYN capability or workspace.
4. Customer makes an eligible paid transaction.
5. Commission becomes payable after the refund / reversal window.

The final programme may choose recurring commission, first-payment commission, usage-based commission, or a hybrid. Decide only after measuring the economics of the relevant DRAYN product.

### Rules to settle before launch
- Eligible products and transactions
- Attribution window and conflict / last-click rules
- Self-referrals and related-party exclusions
- Refunds, cancellations, chargebacks and fraud
- Commission rate, cap if any, payout minimum and schedule
- Tax and invoicing responsibilities
- Disclosure requirements for affiliate links
- Brand, advertising and claims guidelines
- Partner reporting and termination rules

### Metrics
- Visits and click-through rate by partner
- Registration conversion rate
- Activation rate
- Paid conversion rate
- Net revenue per referred customer
- Refund / reversal rate
- Partner concentration and customer quality
- Cost of commission relative to gross profit and customer lifetime value

## Next production steps
1. Select a signup provider / CRM and create separate interest fields or lists.
2. Connect the form to that provider using its supported embed or secure endpoint.
3. Add privacy notice and verify consent wording with the existing compliance checklist.
4. Add anti-spam protection and input validation.
5. Persist campaign attribution in a backend or provider fields.
6. Test mobile, validation, confirmation, unsubscribe and data export / deletion.
7. Keep the terminal preview clearly distinguished from live account functionality.
