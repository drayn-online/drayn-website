# DRAYN terminal shell reference

Card 70 shell preview in terminal-shell.html. The page uses local demo fixtures and has no backend connection.

## Visual system

- Reuse the public site's deep navy canvas, restrained blue-green surfaces, mint accent, system sans-serif typography, and compact mono metadata.
- Primary text is high contrast; secondary text uses the existing muted blue-gray palette. Mint indicates the active area and positive context; amber signals a pending step. Color is paired with text labels.
- Use 8px spacing increments, 8–11px control/panel radii, thin borders, and restrained glow. The desktop frame has a persistent 232px navigation rail and a 59px context header.
- Tablet layouts reduce the rail and stack context panels; mobile layouts use an off-canvas navigation drawer and two-column summary cards. Small screens collapse these cards into one column.

## Shared interaction patterns

- Five agreed areas remain visible in the global navigation. My DRAYN, My Agents, Intelligence, and My Network have local fixture previews; Agent Studio remains a clearly marked planned area.
- The home workspace follows the approved dependency order: Card 70 shell, Card 71 graph/activity after the shell, Card 74 contracts in parallel with 70/71, then T1 → T2 → T3. These fixture views are a local preview and do not claim the API contracts are implemented. Card 73 remains later; Card 75 waits on Neil's agreed auth/API contract.
- Chain-aware context supports Base, Robinhood Chain, and Solana. It belongs to the selected agent or job rather than a single shell-wide chain selection.
- The account entry point shows the signed-out demo state. Authentication and account persistence remain behind Neil's agreed contract.
- Card 75's UI states (signed out, signing in, signed in, account loading/error, expired session, access denied) are prepared as illustrative reference only; authentication integration stays gated on Neil's contract.
- Keyboard focus has a visible mint outline; buttons and links expose accessible labels and current page state. Reduced-motion preferences are respected.
- Page changes are announced through the live breadcrumb instead of marking the full page as a live region, to avoid re-reading the entire view on navigation.
- T3 uses a perspective WebGL topology with raised agent endpoints, DRAYN coordination at mid-level, and provider nodes below. Scene routes are static conceptual fixtures with no animated traffic; keyboard-accessible node controls expose the same details as canvas selection.
- The mobile navigation can be closed with Escape.
- Shared state patterns include loading, empty, stale, partial evidence, provider failure, error, disconnected account, unsupported chain, access denied, and session expired. Status labels pair text with color.
- Example messages for each state are available in a collapsed reference panel. These are illustrative copy; account and permission semantics remain pending the agreed API contract.

## Shared component conventions

- **Cards and tables:** use consistent spacing, readable labels, clear status text, and explicit empty/loading/error treatment. Tables keep column labels visible and avoid color-only status cues.
- **Graphs and charts:** label the time range and measure; keep agent/job identity, provenance, and any chain identifiers attached to the relevant item. Do not infer a single global chain.
- **Forms and dialogs:** pair every field with a label and validation message. Dialogs have a clear title, keyboard focus handling, and an explicit close/cancel path.
- **Feedback:** use concise inline messages for errors that need a next step. Avoid implying an operation succeeded when the preview has no backend.

## Backend contracts still needed

- Neil's authentication and account-state contract, including identity, session behavior, persistence, and user-scoped resource access (Card 75).
- Card 74 typed UI view models and replaceable fixtures for all five terminal areas: user-owned agent/network summaries; agent identity, context, history and capabilities; network relationships; jobs, results, evidence and provenance; opportunities, market snapshots, paper portfolio/risk; and account/chain context.
- Card 74's market-scan route is marked under development, not a stable production API. Confirm route prefix, auth expectations, frontend API base, response/error shapes, timestamps, freshness and provenance before integrating it.
- Keep sources, freshness timestamps and provenance explicit. Missing, malformed, stale or partial values remain unavailable/partial rather than being presented as zero or fabricated data.
- Replaceable adapters that map agreed API responses to presentation view models without coupling UI components to backend internals.
- Card 74 UI-facing model draft and event fixture fields are documented in [terminal-ui-contracts.md](terminal-ui-contracts.md).

No API routes, authentication behavior, agent ownership rules, permissions, or persistence semantics are invented here.
