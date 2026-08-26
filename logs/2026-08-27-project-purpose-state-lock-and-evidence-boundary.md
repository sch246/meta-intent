# Project purpose, STATE/LOCK truth, and evidence boundary

Record ID: `SRC-2026-08-27-PROJECT-PURPOSE-STATE-LOCK-EVIDENCE`

Status: user-authorized clarification of current meta-intent STATE under adopted protocol 0.2. It does not adopt a successor protocol or claim that the proposed cold-session and surprise experiments have run.

## Root clarification

The purpose of meta-intent is to define what an intent package is. An intent package exists to create and continuously maintain one project. Cross-session recovery is a consequence of that purpose because a project outlives an Agent session; it is not the terminal purpose by itself.

STATE may organize intent to arbitrary depth. Lower-order intent derives from higher-order intent where abstract purpose meets concrete reality, and hard lower-level feedback can propagate upward. Depth does not decide whether information belongs in STATE or LOCK.

## STATE and LOCK truth boundary

The operative distinction is what makes a claim true:

- Normative STATE is true within its authority scope because an attributable user decision makes it the current standard. A mismatch with reality creates an implementation mismatch, factual correction, feasibility tension, or need for a new authority decision; implementation cannot silently rewrite normative intent.
- LOCK makes exact factual claims about one realized version and binds their evidence: retained bytes or immutable references, target identity, digests, status and authority event. Bound-byte and identity mismatch is mechanically detectable, but a digest does not prove every observation truthful or sufficient. Target drift can make the LOCK inapplicable without making evidence valid in its original scope disappear.

Hierarchy, natural language and programming language are orthogonal to this boundary. An exact CSS name belongs in STATE when the user makes that name part of correctness. A coarse commit identity belongs in LOCK when it records which implementation actually existed.

STATE remains sufficient to synthesize an implementation above its acceptance floor without an applicable realization LOCK. Regeneration promises STATE-level acceptance, not the same bytes or design.

## Meta-intent protocol consequence

Meta-intent STATE carries the current desired semantics of the intent-package system. Each adopted protocol revision is nevertheless a concrete, immutable and externally referencable release, so it is sealed as a protocol LOCK together with its exact text or frozen projection, validator, schema, templates and bounded evidence.

This is not a second semantic authority. STATE can continue to evolve; the accepted protocol LOCK remains the exact historical interpreter selected by other packages. Multiple packages currently select protocol 0.2 by its `PROTOCOL.md` digest, which is factual evidence that version identity cannot be replaced with an unsealed mutable STATE reference.

The rejected alternative treated an accepted STATE snapshot or Git revision as sufficient while declaring a protocol LOCK unnecessary. Within the three-role model that only renamed the same immutable, externally referenced realization and obscured its evidence lifecycle.

## Surprise remains an experiment

The user proposed:

- first-order surprise: an observation is not predicted by current STATE;
- second-order surprise: prediction error decreases after STATE correction;
- higher orders estimate change in the preceding-order quantity, with successively broader uncertainty at fixed evidence and more interaction needed for comparable precision;
- zero observed surprise can be produced by excluding changing reality and therefore does not establish a good model.

These ideas are promising LOG-retention and compression heuristics, not current protocol primitives. The repository has no version-bound prediction record, corresponding observation record, error series, or later operation that consumes the computed value. A single project may also provide too little interaction for a useful higher-order estimate.

Promotion requires a falsifiable experiment that records predictions, observations and STATE identities, then demonstrates that a later retention or retrieval decision consumes the resulting value. Until then the definitions remain source material and an open investigation rather than normative acceptance.

## Evidence gate for structural revision

Protocol 0.2 was explicitly adopted with known open tensions. The repository contains an adversarial `counterexample-review` intent and requires counterexample search before returning support. A successor architecture should not replace current protocol responsibilities merely because a coherent alternative can be written.

Before a cold-session or compression-driven successor is proposed, an unfamiliar Agent experiment must record at least the task, context loaded, recovered intent and causal citations, omissions, incorrect alternatives, and full-replay comparison. Structural validator success and author confidence are not that evidence.

## Resulting decision

- Keep protocol 0.2 adopted and active; do not create or adopt protocol 0.3 in this change.
- Reorganize current meta-intent STATE hierarchically only where the user's clarified purpose and existing 0.2 semantics support it.
- Preserve adopted protocol revisions as immutable protocol LOCKs.
- Keep surprise and higher-order learning progress outside normative STATE until the evidence gate is met.
- Keep target-specific DSH chronology in LOG and realization evidence rather than hot meta-intent STATE unless it establishes a continuing general requirement.
