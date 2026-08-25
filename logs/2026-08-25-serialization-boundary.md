# Protocol tension: authority serialization and concurrent decision frames

Record ID: `SRC-2026-08-25-SERIALIZATION-BOUNDARY`

Status: user-originated conceptual direction plus Agent investigation. It records a desired protocol property and unresolved representation; it does not adopt protocol 0.2 or prescribe a final authority-event schema.

## User-originated direction

The user proposed that conscious attention makes necessary content serial and that asking the user is an explicit serial node. After reviewing the refined model, the user approved landing and advancing it.

## Refined model

Agent investigation may proceed in parallel. When alternatives require global semantic or authority consistency, the Agent constructs a decision frame and crosses an explicit synchronization boundary. Asking is the synchronization barrier; the attributable authority event is the semantic linearization point. The log preserves the durable event and its input provenance, state is the current authoritative projection, and locks remain downstream realizations.

Three operations must remain distinct:

1. authority serialization, where an authorized actor chooses semantics, permissions, costs, or destructive/external effects;
2. causal serialization, where an Agent appends attributable investigation and useful negative provenance without obtaining new authority;
3. authority projection, where conclusions with continuing normative force are reconciled into current state.

Logging, asking, and authority are therefore not interchangeable.

## Checked concurrency tension

The current protocol requires an exact authority-decision log for accepted locks and approved state, but it does not structurally bind an authority event to an actor identity, authority scope, decision frame, or base state revision. Multiple Agents can investigate and ask from different state revisions. Even when every answer is genuine, two stale or overlapping decisions may be individually valid and jointly inconsistent.

A future candidate should preserve enough information to detect that situation. Candidate fields include actor, authority scope, the state identity on which the question was based, the checked constraints, feasible alternatives found, alternatives actually excluded and why, known investigation blind spots, and the resulting decision. This list states required information, not an adopted JSON shape.

## Boundary on option provenance

The protocol cannot require an Agent to enumerate every imaginable alternative. It can require attribution of the search and framing that actually occurred: investigated scope, evidence, feasible alternatives found, rejected candidates considered, reasons, and known blind spots. This makes framing auditable without pretending the option set is complete.

## Current consequence

State should require an explicit, attributable serialization boundary for authority-changing decisions. Exact event syntax, identity, delegation, succession, quorum, and concurrent merge behavior remain protocol-design tensions.
