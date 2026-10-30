# DRAYN terminal UI contract draft

Card 74 frontend reference for the local terminal preview. These are presentation-facing shapes, not claims about an agreed API or runtime schema. No routes, authentication rules, ownership semantics, or persistence behavior are defined here.

## Shared metadata

Every resource may carry `sourceLabel`, `observedAt`, `freshness` (`fresh`, `stale`, `unknown`), and `completeness` (`complete`, `partial`, `unknown`). Missing values remain absent or explicitly unavailable; the UI must not substitute zero, current time, or a guessed status.

## View models

- **Agent summary:** stable UI identity, display name, purpose, declared capabilities, and an explicit status value (`available`, `unavailable`, `unknown`). Ownership/authorization is supplied by the account contract, never inferred by the UI.
- **Agent detail:** summary plus context/memory state, working-history references, connected-provider references, portability/continuity state, and related job IDs. Unsupported detail fields are `unavailable`, not fabricated.
- **Provider capability:** provider/node reference, declared capability, relation to an agent or job, and explicitly sourced availability/status. The UI displays this information but does not decide eligibility or routing.
- **Job event:** event ID, job/request ID, event type, timestamp, status, selected provider, capability, result reference, refusal/failure reason, optional provenance references, optional measured timing, and source/freshness metadata. Timing is rendered only when actually measured.
- **Workflow graph:** ordered job/request, capability/routing, selected provider, result/evidence, and provenance/accounting references. Missing stages stay missing or explicitly blocked; the client does not manufacture events.
- **Network relationship:** source node ID, target node ID, relation kind, grounded capability/context, status, and source/freshness metadata. A graph edge cannot imply provider eligibility or routing behavior.
- **Evidence reference:** evidence ID, originating job/result ID, provenance/source label, observed timestamp, freshness, and completeness.
- **Opportunity / market snapshot:** display-safe summary, source, observed timestamp, freshness, and completeness. The `GET /v1/trading/market-scan` route is known to be under development and is not wired into this preview.
- **Paper portfolio / risk:** portfolio and risk summaries with explicit source/freshness/completeness metadata. No trading or portfolio data is connected here.
- **Account / chain context:** account connection state and chain label attach to an agent, job, or account resource only when the agreed contract provides it. There is no global chain selector.

## Adapter and state behavior

Area components consume normalized view models from a replaceable adapter. Local fixtures implement the same UI shape and are labelled `DEMO / ILLUSTRATIVE DATA`. Loading, empty, stale, partial evidence, provider failure, disconnected account, unsupported chain, access denied, and session expiry remain distinct UI states. Account access and user-scoped resources require Neil's agreed auth/API contract before integration.

## Card 71 event fixture

The local Intelligence examples cover accepted → routed → started → completed → evidence-recorded, accepted → refused, and accepted → routed → started → failed. Static fixture timestamps determine display order. The preview does not infer elapsed time, live throughput, provider health, retry success, payments, or real provenance.
