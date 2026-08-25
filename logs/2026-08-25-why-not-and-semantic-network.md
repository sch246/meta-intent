# Why-not provenance and deferred semantic-network design

Record ID: `SRC-2026-08-25-WHY-NOT-NETWORK`

Status: confirmed 0.1 corrections plus an advanced discussion deferred beyond 0.1.

This record supersedes the earlier rule that a `no_change` branch cannot append durable provenance. It does not alter the earlier requirement that facts be investigated before a durable conclusion is recorded.

## Concern carried into investigation

The current candidate over-constrained presentation and provenance: it rejected a root `README.md`, prohibited a `no_change` investigation from leaving any durable record, and repeated structural details across too many top-level acceptance criteria. A public repository needs a readable entrance, while a future maintainer often learns more from checked and rejected alternatives than from the chosen path.

The broader discussion also exposed a possible future information structure. Raw or near-raw records could remain linear, while derived nodes cover those records and organize encounters between intent and reality. Higher structures might be built under different query intents, use multiple parents or cycles where useful, and be maintained by an LLM-backed runtime without forcing the primary Agent to load and traverse the whole graph in its working context.

## Checked consequences

- Allowing presentation files does not create a fourth semantic authority layer if the protocol keeps `logs`, `state`, and `locks` as the only semantic top-level areas and explicitly marks presentation as non-authoritative.
- A verified no-change conclusion can have future decision value. Recording what was checked, why a tempting alternative was rejected, and what evidence would reopen it does not imply that state or realization changed.
- The existing acceptance list mixed meta-level outcomes with several validator-level failure cases. Those cases can remain locked protocol tests while the state expresses fewer, broader observable expectations.
- A lightweight package mode is not required for 0.1. The fixed state entry and three semantic areas remain useful bootstrap invariants even for a small package.
- The semantic-network proposal is not yet specified enough to become protocol behavior. Open questions include coverage guarantees, the meaning and validation of a summary, graph identity and mutation, treatment of cycles, intent-dependent views, retrieval cost, and isolation from the primary Agent's context.

## Decision for 0.1

- Permit a root README and a narrow set of conventional presentation or community files; they are not state, provenance, or realization authority.
- Permit and encourage durable why-not or verified-no-change records when they retain evidence or prevent a plausible repeated mistake. Such a record leaves state and locks unchanged unless it also establishes a semantic decision.
- Compress the meta-intent acceptance list to ten outcome-oriented criteria; keep exact structural rejection cases in the protocol realization and its tests.
- Do not add a lightweight mode.

## Deferred advanced discussion

Treat the LLM-driven provenance and semantic network as a future design investigation, not as a 0.1 requirement or implementation hint. A later investigation should begin from retrieval tasks and cost boundaries, then compare whether one graph, several intent-relative projections, or lazily materialized views best preserve coverage without contaminating the primary Agent's context. Any adopted design must explain what a summary is for, how its adequacy is tested, how source records remain completely attributable, and when a negative result should be merged, linked, or reopened.
