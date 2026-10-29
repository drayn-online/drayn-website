# DRAYN launch signup: consent and privacy requirements

Status: implementation note, not a published privacy notice. Do not enable public collection until the final privacy notice is reviewed and published.

## Consent version

The Worker currently records the identifier `drayn-launch-form-v1`. Keep the wording associated with a consent version unchanged once used. If wording changes materially, increment the version and retain the old wording for audit purposes.

Suggested form language for review:

- Early access: "Contact me about DRAYN early access and launch availability." This is a request for information related to the service, not consent to a general marketing newsletter.
- Newsletter: "Email me occasional DRAYN news and product updates." This must be optional, unticked by default, and separately recorded.
- Partner programme: "Contact me about the DRAYN referral and partner programme." This is a specific enquiry, not blanket marketing consent.
- Privacy acknowledgement: "I have read the DRAYN Privacy Notice." Link this to the published notice and record the notice version. Acknowledgement does not itself create newsletter consent.

The final wording should be reviewed for the actual purposes and lawful bases before public launch. Do not treat clicking a general early-access checkbox as permission for unrelated promotional email.

## Minimum notice content

The public notice must identify the responsible entity and contact details, describe each purpose and lawful basis, state recipients/processors and any transfers, set retention periods, explain access/correction/deletion/objection/withdrawal rights and complaint routes, and explain how to unsubscribe from marketing. Confirm the correct legal entity and contact before publishing; do not invent them in the notice.

## Operations

- Restrict access to the D1 database and keep credentials out of Git.
- Establish a retention and deletion process before collection begins.
- Support newsletter opt-out and retain a minimal suppression record so an unsubscribed address is not re-added accidentally.
- Do not send marketing email automatically until the relevant consent and unsubscribe flow are implemented and tested.
- The initial mail agent should classify and draft only. Human approval is required before messages are sent.
