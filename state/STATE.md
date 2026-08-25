# Meta-intent state

Status: draft. This is the current semantic authority for what the meta-intent package is expected to achieve. The selected protocol lock is the candidate concrete realization; its definitions do not silently rewrite this state.

## Intent

Enable a user to express a desired outcome as an Agent-maintained intent package that may contain no implementation code. An Agent uses that package to investigate target reality, translate tensions into consequences for the user's intent, synthesize or maintain a concrete realization, verify it against observable acceptance, and uninstall its contribution safely.

Define the intent-package system itself through a self-hosted meta-intent package. Its concrete realization is a protocol lock that defines the whole package architecture and operating model, not only the syntax of the state document.

## Desired properties

- The package has only three semantic areas: provenance in `logs`, current authority in `state`, and concrete realizations in `locks`.
- Logs preserve the consequential exchange between intent and investigated reality: desired effects, checked facts, translated tensions, unresolved branches, and decisions. They are neither raw chat transcripts nor independent speaker summaries.
- State is the current projection of intent, resources, constraints, permissions, acceptance, non-goals, decisions, hints, and protocol selection. It does not impersonate its own source history.
- A lock is an immutable, purpose-bound realization of its own package. For an ordinary intent package it may contain target source, patches, generated files, target bindings, and evidence. Selecting a protocol belongs to state and does not create a local lock. For this meta-intent package the protocol itself is the realization, so it belongs in this package's locks.
- The selected protocol defines all constitutive concepts, topology, information flow, authority boundaries, lifecycle operations, composition, conflicts, conformance, governance, and evolution.
- Each protocol has one fully centralized canonical meaning and authority. Ecosystem-level decentralization occurs through distinct protocols and forks with their own centers; evidence and proposal forks do not silently acquire authority over the lineage they address.
- The user owns desired effects, value choices, permissions, trade-offs, and semantic approval. The Agent owns investigation, evidence collection, feasibility analysis, tension translation, candidate synthesis, and authorized verification.
- Authority-changing decisions cross an explicit serialization boundary: parallel investigation produces an attributable decision frame, an authorized decision is the semantic linearization point, logs preserve the event, and state projects only conclusions with continuing normative force. Asking or logging alone does not grant authority.
- Target code and runtime behavior provide reality evidence. They cannot silently become the user's intent.
- An intent package can coexist with a host repository or native package format without making host files a fourth semantic area. A cold Agent can deterministically discover the semantic package and distinguish bootstrap guidance from package authority.
- A realization may bind immutable external or host identities instead of copying every implementation byte. References remain reproducible only when their locator, identity, applicable scope, and ownership are explicit and cycle-free.

## Acceptance criteria

- `META-001`: A cold Agent can locate the current state, selected protocol, supporting provenance, and realizations for either a standalone or host-embedded package through a meaningful bootstrap entry, not merely an empty required file; bootstrap and presentation files do not become semantic authority.
- `META-002`: The protocol defines the complete ontology, relationships, topology, information flow, authority, lifecycle, composition, conformance, governance, and evolution without relying on the historical conversation.
- `META-003`: A natural-language package with no target implementation code and an empty `locks` directory can be recognized while its state selects an exact protocol lock owned by the meta-intent package.
- `META-004`: Logs, state, lock artifacts, and acceptance evidence remain separately attributable. Investigations may preserve useful why-not and verified-no-change evidence without pretending that state or implementation changed, and lower layers cannot redefine higher-authority meaning.
- `META-005`: Feedback first causes investigation and a report of the reality boundary. Maintenance distinguishes verified no change, implementation mismatch, intent clarification, intent revision, reality tension, and protocol tension; only semantic or authority changes revise state.
- `META-006`: The protocol states exactly when an Agent may continue autonomously and when an authority decision is required, preserves the investigated decision frame, and can detect decisions based on stale or conflicting authority scope without treating a question or log as approval.
- `META-007`: Failed, incomplete, or stale candidates cannot replace last-good. Advancing current state does not erase a lock's historical acceptance; current applicability and drift are investigated separately from frozen-input integrity.
- `META-008`: Composition, conflict handling, and uninstall preserve separate ownership and unrelated changes; discovery order, hidden last-writer-wins, and blind reversal are not valid decisions.
- `META-009`: Protocol tensions flow to a canonical meta-intent lineage, decentralized proposals do not silently become authority, and self-hosting avoids both a digest cycle and a claim of semantic self-approval.
- `META-010`: The locked protocol implementation, validator, tests, template, and right-sidebar example demonstrate structural invariants and cold-Agent usability while making no claim that structural checks prove natural-language fulfillment.
- `META-011`: A reference-backed realization separates immutable identity, governed source scope, availability assumptions, installed target effects, and removal ownership sufficiently for drift-aware maintenance and safe degradation or uninstall without requiring universal byte duplication.

## Resources

- The fact-aligned records listed by `STATE.json` are the provenance for this state.
- The current public repository is `https://github.com/sch246/meta-intent`.
- The bundled `dsh-right-sidebar` package is the first zero-code reference case.
- The public `sch246/dsh-right-sidebar` package is the first embedded reference-backed realization experiment. It selects an incomplete candidate lock that binds implementation commit `6b2b58863f0c6d5c94000a0e3be54f23227ce2dc`; it is not accepted lifecycle evidence.
- `/root/dsh-right-sidebar` and `/root/deepseek-harness` are bootstrap reality resources for that example, not portable requirements of the protocol.

## Current decisions

- Within this protocol lineage, canonical semantic authority is fully centralized in the user who created it. This is constitutive of the protocol, not a compromise that implementation evidence can reopen.
- Someone who rejects this canonical meaning may create or fork a distinct protocol with its own center. A fork can instead be a proposal when its author explicitly seeks adoption by this lineage; the two roles must not be conflated.
- The current repository is public so external reviewers can inspect candidates and provenance. Repository publication does not adopt protocol 0.2 and does not choose a license.
- Protocol 0.2 is a candidate realization that may change the bootstrap kernel. Structural validation and publication do not adopt it.
- Questions, logs, and Agent agreement are not authority events by themselves. An authority-changing decision must be attributable to its actor and scope; future protocol work must also preserve the decision frame and base state needed to detect concurrent stale decisions.
- A Git reference's governed paths establish immutable source scope, not automatically the ownership of every installed effect. Path overlap may trigger investigation but cannot silently decide semantic incompatibility or removal ownership.

## Constraints and permissions

- Do not publish, push, create a remote, choose a license, or change GitHub state without explicit user authorization.
- Do not store credentials or secrets in logs, state, locks, examples, or acceptance evidence.
- Do not rewrite old logs to make a later interpretation look inevitable; append a correction or superseding decision.
- Do not revise approved intent merely to make a candidate pass.
- Do not describe unexecuted acceptance as passed or equate successful patching, compilation, clean merge, or Agent confidence with user-visible acceptance.
- Do not require package-provided executable code. Executable realization artifacts are allowed only when the package's purpose and granted permissions require them.
- Keep the fixed pre-protocol bootstrap surface minimal and make any incompatible change to it explicit.
- In the current collaboration, Codex is the only Agent with technical repository write and push access. The user retains semantic authority; write capability does not authorize protocol adoption or unrelated changes. Revisit this constraint when another trusted write path exists.

## Non-goals

- A general package registry, dependency solver, event bus, deployment platform, or universal intent DSL.
- Automatic semantic conflict resolution or automatic derivation of user preferences from frequency, code, telemetry, or generated artifacts.
- Model, vendor, programming-language, target-framework, or runtime lock-in.
- A bootstrap claim that signing, portable trust, governance succession, or cross-version migration is already solved.

## Implementation hints

- Natural-language Markdown plus a small JSON bootstrap state is an appropriate initial representation.
- Content digests are useful for immutable lock inputs and artifacts, but cannot establish user authority by themselves.
- A future runtime may use Effect or Factor Runtime for transactional candidate preparation, activation, and retirement. This remains advisory.
- A grill-style interview can resolve one user-owned tension at a time while explaining consequences rather than implementation trivia.

## Open tensions

- Portable signing and trust for authority events.
- Authentication, adoption mechanics, maintainer succession, and any future delegation or quorum rules for this protocol center; none currently dilute the user's semantic authority.
- Compatibility, migration, and deprecation across immutable protocol revisions.
- Structured authority-event attribution, decision-frame provenance, base-state binding, and concurrent decision reconciliation without pretending that feasible alternatives are mechanically complete.
- Positive install, drift-maintenance, composition, and uninstall evidence from a real reference-backed realization.
- Reference availability, reconstruction and safe degradation when an immutable identity remains valid but every resolver or required historical byte is unavailable.
- Separation of source identity, multi-target installed effects, and removal ownership; the smallest useful machine-readable composition surface must report conflict candidates without pretending to decide semantics.
- A minimal machine-checkable `AGENTS.md` bootstrap locator and lifecycle pointer that remains human-usable without turning prose lint into semantic proof.
- The role of independent semantic evaluators and executable acceptance probes.
- Scalable intent hierarchy and an isolated LLM-driven provenance or semantic-network index, including coverage, summary validation, cycles, intent-relative views, and retrieval cost.
- Public repository license.
