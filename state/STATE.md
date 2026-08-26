# Meta-intent state

Status: draft state interpreted by the adopted protocol 0.2 lock. This is the current semantic authority for what the meta-intent package is expected to achieve. Adoption makes the selected protocol realization active; its definitions still do not silently rewrite this evolving state.

## Intent

Enable a user to express a desired outcome as an Agent-maintained intent package that may contain no implementation code. An Agent uses that package to investigate target reality, translate tensions into consequences for the user's intent, synthesize or maintain a concrete realization, verify it against observable acceptance, and uninstall its contribution safely.

Define the intent-package system itself through a self-hosted meta-intent package. Its concrete realization is a protocol lock that defines the whole package architecture and operating model, not only the syntax of the state document.

## Desired properties

- The package has only three semantic areas: provenance in `logs`, current authority in `state`, and concrete realizations in `locks`.
- The three areas define semantic ownership, not internal flatness. Each may acquire structure appropriate to its information: navigational indexes over source logs, hierarchy among user concerns in state, and independently versioned design or target-compatibility layers among realizations.
- Logs preserve the consequential exchange between intent and investigated reality: desired effects, checked facts, translated tensions, unresolved branches, and decisions. They are neither raw chat transcripts nor independent speaker summaries.
- State is the current projection of intent, resources, constraints, permissions, acceptance, non-goals, decisions, hints, and protocol selection. It does not impersonate its own source history.
- Any user-cared observable effect that regeneration must preserve belongs in state, even when the current realization expresses it through CSS, numeric geometry, a framework hook, or another concrete mechanism. The chosen mechanism and incidental measurements remain lock-level facts unless the user explicitly makes them normative.
- A lock is an immutable, purpose-bound cache of one concrete realization of its own package. It may contain or reference target source, patches, generated files, target bindings, ownership and evidence, but it is not the durable source of desired meaning or a mandatory archive of the build environment. Selecting a protocol belongs to state and does not create a local lock. For this meta-intent package the protocol itself is the realization, so it belongs in this package's locks.
- State must be semantically sufficient for an Agent to synthesize a realization above its acceptance floor when no usable lock exists. Reusing a lock may preserve one exact implementation; regeneration promises state-level acceptance, not byte, design or toolchain identity.
- The selected protocol defines all constitutive concepts, topology, information flow, authority boundaries, lifecycle operations, composition, conflicts, conformance, governance, and evolution.
- Each protocol identity and immutable revision has one canonical meaning. Ecosystem-level decentralization occurs through distinct protocol lineages and semantic forks; evidence and proposal forks do not silently acquire authority over the lineage they address.
- Authority to choose a canonical successor within one lineage is established by an external authority event and projected by its meta-intent state.
- Each intent-package user owns that package's desired effects, protocol adoption, value choices, permissions, trade-offs, and semantic approval. The Agent owns investigation, evidence collection, feasibility analysis, tension translation, candidate synthesis, and authorized verification.
- Authority-changing decisions cross an explicit serialization boundary: parallel investigation produces an attributable decision frame, an authorized decision is the semantic linearization point, logs preserve the event, and state projects only conclusions with continuing normative force. Asking or logging alone does not grant authority.
- Target code and runtime behavior provide reality evidence. They cannot silently become the user's intent.
- An intent package can coexist with a host repository or native package format without making host files a fourth semantic area. A cold Agent can deterministically discover the semantic package and distinguish bootstrap guidance from package authority.
- A realization may bind immutable external or host identities instead of copying every implementation byte. References remain reproducible only when their locator, identity, applicable scope, and ownership are explicit and cycle-free.
- A realization that intrudes into shared target source leaves machine-recognizable package markers at the nearest maintainable location to each managed region. File-level declarations are valid only for wholly governed files. Markers are compact locators and evidence leads for Agent investigation; state, locks, installation receipts, Git evidence, and current drift remain the ownership and removal authority.
- Validation is layered by what can actually be established: deterministic checks prove structural and identity invariants, versioned Agent validation intents produce bounded semantic evidence, and authorized users decide meaning, acceptance, permissions, and trade-offs. No layer may borrow the authority of the next.

## Acceptance criteria

- `META-001`: A cold Agent can locate the current state, selected protocol, supporting provenance, and realizations for either a standalone or host-embedded package through a meaningful bootstrap entry, not merely an empty required file; bootstrap and presentation files do not become semantic authority.
- `META-002`: The protocol defines the complete ontology, relationships, topology, information flow, authority, lifecycle, composition, conformance, governance, and evolution without relying on the historical conversation.
- `META-003`: A natural-language package with no target implementation code and an empty `locks` directory can be recognized and used as sufficient semantic input for candidate synthesis while its state selects an exact protocol lock owned by the meta-intent package.
- `META-004`: Logs, state, lock artifacts, and acceptance evidence remain separately attributable. Investigations may preserve useful why-not and verified-no-change evidence without pretending that state or implementation changed, and lower layers cannot redefine higher-authority meaning.
- `META-005`: Feedback first causes investigation and a report of the reality boundary. Maintenance distinguishes verified no change, implementation mismatch, intent clarification, intent revision, reality tension, and protocol tension; only semantic or authority changes revise state.
- `META-006`: The protocol states exactly when an Agent may continue autonomously and when an authority decision is required, preserves the investigated decision frame, and can detect decisions based on stale or conflicting authority scope without treating a question or log as approval.
- `META-007`: Failed, incomplete, or stale candidates cannot replace last-good. Advancing current state does not erase a lock's historical acceptance; current applicability and drift are investigated separately from frozen-input integrity.
- `META-008`: Composition, conflict handling, and uninstall preserve separate ownership and unrelated changes; discovery order, hidden last-writer-wins, and blind reversal are not valid decisions.
- `META-009`: Protocol tensions flow to a canonical meta-intent lineage, decentralized proposals do not silently become authority, and self-hosting avoids both a digest cycle and a claim of semantic self-approval.
- `META-010`: The locked protocol implementation, deterministic validator, semantic-validation intents, tests, template, and right-sidebar example demonstrate structural invariants plus bounded semantic review while making no claim that either structural checks or LLM agreement prove natural-language fulfillment.
- `META-011`: A reference-backed realization separates immutable identity, governed source scope, installed target effects, and removal ownership without turning reference or environment availability into semantic authority; when the cache cannot be used, an Agent can regenerate from state and current reality without requiring byte-identical output.
- `META-012`: Intrusive shared-source changes are locally and compositionally discoverable. Each managed region has the closest practicable package-delimited locator; separated regions remain separately marked; whole-file markers are limited to wholly governed files; package-relative boundaries may overlap to expose shared source. An Agent binds those locators to realization and installation evidence before changing or removing anything; removing one owner re-synthesizes remaining contributions, and missing or drifted markers stop blind mutation.

## Resources

- The fact-aligned records listed by `STATE.json` are the provenance for this state.
- The current public repository is `https://github.com/sch246/meta-intent`.
- The bundled `dsh-right-sidebar` package is the first zero-code reference case.
- The public `sch246/dsh-right-sidebar` package is the first embedded reference-backed realization experiment. Repository commit `d9bcfa3746b952f30ca4a6ffb05218309e8e15a6` selects incomplete C6 over implementation commit `aa4baa3660f0ab7a06793baf576166340343bd09`; it carries bounded lifecycle evidence plus the user's live confirmation that the deployed shell runs and its reported visual/layout defects are resolved. Two-way feature synchronization, current-source drift/uninstall, portable loading and complete adapter migration remain unaccepted.
- Public `Yan-Zero/dsh-std` commit `bb194ad53a72f4fa7da1286c88dcebb488b43eb9` is bounded evidence for a product-adapter responsibility boundary; it is not part of this protocol implementation and does not yet provide the required right-sidebar surface.
- The local `dsh-std` adapter experiment at `f9f359fd163ac843faf1cf570acbd25840f46934` contains separate C3 locks for the portable sidebar-view contract and the DSH-specific mapping, both referencing source commit `580b330323c13ec568adab2c35fabf8f8fa6b194`. This is structured-lock evidence, not a portable public realization or an adopted universal layering model.
- `/root/dsh-right-sidebar` and `/root/deepseek-harness` are bootstrap reality resources for that example, not portable requirements of the protocol.

## Current decisions

- Within this protocol lineage, successor-governance authority remains fully centralized in the user who created it until an explicit authority event delegates or transfers a defined scope.
- Someone who rejects this canonical meaning may create or fork a distinct protocol with its own center. A fork can instead be a proposal when its author explicitly seeks adoption by this lineage; the two roles must not be conflated.
- The current repository is public so external reviewers can inspect candidates and provenance. Repository publication does not adopt protocol 0.2 and does not choose a license.
- The user explicitly adopted protocol 0.2. Its accepted active lock is the canonical interpreter for this lineage until a later candidate receives a separate adoption decision; structural validation and publication alone remain insufficient for such a decision.
- Questions, logs, and Agent agreement are not authority events by themselves. An authority-changing decision must be attributable to its actor and scope; future protocol work must also preserve the decision frame and base state needed to detect concurrent stale decisions.
- A Git reference's governed paths establish immutable source scope, not automatically the ownership of every installed effect. Path overlap may trigger investigation but cannot silently decide semantic incompatibility or removal ownership.
- A nearby source marker is required discovery and drift evidence for intrusive shared-source realizations, but mention of a package or scenario does not prove ownership. Removal requires agreement between the marked region, the realization lock, target-side installation evidence, and current drift investigation.
- Source-region composition remains an Agent decision. Non-overlapping packages keep independent nearby regions; packages sharing bytes may use independently paired, overlapping boundaries. A balanced marker is not a deletion instruction: uninstalling one owner requires recomposition from the remaining state, locks, receipts, Git evidence, and current source rather than trusting markers or installation order alone.
- Deterministic validation retains mechanically decidable safety and identity checks. LLM validation is a versioned, read-only evidence procedure: it cannot directly write state, accept or activate locks, grant permissions, or turn reviewer agreement into authority.
- A semantic reviewer receives a deterministically resolved role manifest for package host, state, selected locks, realization targets, state resources, secondary effects, observations, prompts, and permissions. Ambient checkout layout must not silently define those roles.
- Realization locks are dispensable caches of concrete implementations. Their identities, evidence and ownership records remain valuable, but unavailable bytes or build environments cause re-investigation and synthesis rather than changing intent or invalidating a package whose state remains actionable.
- Internal structure for logs, state and locks remains a design investigation. Protocol 0.2's concrete files and bundles are a candidate representation, not evidence that one flat document or one version axis is universally sufficient.
- The user-tested sidebar shell closes the current experiment milestone and authorizes publication of this state update. The subsequent protocol 0.2 adoption is a separate authority event and does not erase sidebar acceptance that has not been executed.

## Constraints and permissions

- Do not publish, push, create a remote, choose a license, or change GitHub state without explicit user authorization.
- Do not store credentials or secrets in logs, state, locks, examples, or acceptance evidence.
- Do not rewrite old logs to make a later interpretation look inevitable; append a correction or superseding decision.
- Do not revise approved intent merely to make a candidate pass.
- Do not describe unexecuted acceptance as passed or equate successful patching, compilation, clean merge, or Agent confidence with user-visible acceptance.
- Do not require package-provided executable code. Executable realization artifacts are allowed only when the package's purpose and granted permissions require them.
- Do not treat a file-header ownership declaration as covering local shared-source edits unless the realization governs the entire file, and do not treat source comments alone as authority to remove code.
- Keep the fixed pre-protocol bootstrap surface minimal and make any incompatible change to it explicit.
- In the current collaboration, Codex is the only Agent with technical repository write and push access. The user retains semantic authority; write capability does not authorize protocol adoption or unrelated changes. Revisit this constraint when another trusted write path exists.

## Non-goals

- A general package registry, dependency solver, event bus, deployment platform, or universal intent DSL.
- Automatic semantic conflict resolution or automatic derivation of user preferences from frequency, code, telemetry, or generated artifacts.
- Model, vendor, programming-language, target-framework, or runtime lock-in.
- A bootstrap claim that signing, portable trust, governance succession, or cross-version migration is already solved.
- Universal environment capture, byte-identical regeneration, or treating a previously selected implementation as the only valid realization unless state explicitly requires one of those effects.

## Implementation hints

- Natural-language Markdown plus a small JSON bootstrap state is an appropriate initial representation.
- Content digests are useful for immutable lock inputs and artifacts, but cannot establish user authority by themselves.
- A future runtime may use Effect or Factor Runtime for transactional candidate preparation, activation, and retirement. This remains advisory.
- Inexpensive independent subagents may run semantic alignment and counterexample checks in parallel. Cache reuse must bind input, prompt, model/configuration, and tool-scope identities; a cache hit remains evidence rather than current truth.
- A grill-style interview can resolve one user-owned tension at a time while explaining consequences rather than implementation trivia.

## Open tensions

- Portable signing and trust for authority events.
- Authentication, adoption mechanics, maintainer succession, and any future delegation or quorum rules for this protocol center; none currently dilute the user's semantic authority.
- Compatibility, migration, and deprecation across immutable protocol revisions.
- Structured authority-event attribution, decision-frame provenance, base-state binding, and concurrent decision reconciliation without pretending that feasible alternatives are mechanically complete.
- Positive multi-package composition and intent-managed multi-target adapter evidence beyond the sidebar experiment's direct-shell milestone, earlier isolated lifecycle run, and local split contract/mapping candidates.
- The minimum current-reality and ownership evidence needed for safe maintenance or uninstall when a realization cache and its historical bytes are unavailable.
- Separation of source identity, multi-target installed effects, and removal ownership; the smallest useful machine-readable composition surface must report conflict candidates without pretending to decide semantics.
- The provisional cross-language locator uses a plain package token plus small `region`/`purpose` JSON on `begin` and a package-only `end`, paired independently per package. Remaining protocol tensions are the receipt model, generated-source mapping, and isolated install/overlap/drift/recomposition/uninstall evidence required before any successor adoption.
- A minimal machine-checkable `AGENTS.md` bootstrap locator and lifecycle pointer that remains human-usable without turning prose lint into semantic proof.
- Semantic-check prompt scope, input-role schema, prompt-injection isolation, model evidence identity, cache policy, independent evaluator strategy, result storage, and the boundary with executable acceptance probes.
- Independent cold-regeneration evidence for `META-003`, including at least two isolated syntheses from the same zero-code state and immutable target baseline, compared by state acceptance rather than implementation identity.
- Internal structure of all three semantic areas: complete and authority-safe indexes over growing linear logs; higher- and lower-level state that keeps concrete design traceable to user concerns; and layered or related locks whose portable design and target-compatibility versions can evolve independently without ambiguous ownership or selection.
- An isolated LLM-driven provenance or semantic-network index, including coverage, summary validation, cycles, intent-relative views, and retrieval cost, as one candidate response to log growth rather than a predetermined universal representation.
- Public repository license.
