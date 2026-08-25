# Sidebar experiment closure and state boundary

Record ID: `SRC-2026-08-26-SIDEBAR-EXPERIMENT-CLOSURE`

Status: user-observed experiment evidence, user authority to close and push the current sidebar and meta-intent milestones, and a clarification of the state/lock boundary. It does not adopt protocol 0.2 or approve unobserved sidebar acceptance.

## User observation and authority

The user tested the deployed right sidebar, confirmed that it runs, and authorized closing and pushing the current `dsh-right-sidebar` and `meta-intent` milestones.

The resulting embedded intent-package candidate is repository commit `d9bcfa3746b952f30ca4a6ffb05218309e8e15a6`, with concrete sidebar source realization `aa4baa3660f0ab7a06793baf576166340343bd09` and selected lock `.intent/locks/right-sidebar-candidate-006/LOCK.json`.

This is live evidence that the current sidebar shell, its layout participation, persisted width path, visual cleanup and navbar alignment can be synthesized, installed and served through the Agent-driven workflow. It does not claim that the unexecuted two-way feature synchronization, session isolation, current-source drift/uninstall cycle, independently packaged loading, or complete adapter migration has passed.

## State and lock clarification

The user identified vertical center alignment as a case that can look like a concrete lock detail while actually belonging in state: the effect is part of what the user cares about and therefore must survive regeneration as a minimum result.

The resulting boundary is:

- if a user-cared observable effect must survive replacement or regeneration of the current realization, it belongs in state even when the present implementation is CSS, a numeric offset, a framework hook or another concrete mechanism;
- the particular mechanism and incidental measurements used by one realization belong in its lock unless the user explicitly makes those exact details normative;
- evidence that one lock achieves the effect does not move the effect down into the lock.

For the current sidebar, vertical alignment with the host Session log control and the absence of a standalone resting edge or shadow are state-level floors. The current `32px` size and `12px` top inset remain lock-level facts.

## Structured realization evidence

The experiment also supplies a live example of internally structured locks. The portable sidebar-view contract and the DSH-specific mapping are separate candidate realizations in the local `dsh-std` adapter experiment, both currently based on source commit `580b330323c13ec568adab2c35fabf8f8fa6b194`. Their independent identities preserve the distinction between portable surface design and target compatibility while the direct Harness patch remains transitional.

This supports continued investigation of layered locks; it does not yet select a universal composition representation for protocol 0.2.

## Resulting action

Advance the meta-intent state and its experiment resources, reseal the candidate protocol lock, and push the repository. Keep protocol 0.2 candidate and incomplete: milestone closure is not protocol adoption, and the remaining lifecycle, composition, semantic-validation and governance tensions stay visible.
