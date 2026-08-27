# Meta-intent state

Status: evolving draft authority interpreted by the adopted protocol 0.2 LOCK. This revision reorganizes current intent; it does not adopt a successor protocol.

## Root intent

`MI-0` — Define and maintain the intent-package system.

`IP-0` — An intent package enables Agents to create and continuously maintain one project from user-owned intent while preserving causal history and exact realization evidence.

The package may contain no project implementation code. It remains meaningful when no previous implementation or environment can be reused.

## Derived intent

STATE may organize intent to arbitrary depth. A lower-order intent remains traceable to the higher-order intent it serves, its attributable derivation basis and its applicable scope. That basis may be direct user specification, design decomposition, an authority decision or investigated reality feedback; only the last requires a reality-boundary source. Concrete feedback may propagate upward, but only appropriate authority changes normative user meaning.

### `IP-1` — Preserve distinct information authority

`IP-1` derives from `IP-0`: project creation and long-term maintenance require current meaning, causal source history and exact realized facts without conflating them.

- `LOG` preserves selective, fact-aligned causal source records: desired effects, checked reality, translated tensions, decisions, corrections, rejected alternatives and useful verified no-change findings. It is not raw transcript or current authority.
- `STATE` is the current projection of intent, acceptance, resources, constraints, permissions, decisions, uncertainty and selected protocol.
- `LOCK` is an immutable, purpose-bound cache and record of one exact realization, including retained bytes or references, target identity, digests, evidence, status and authority event.

Normative STATE is established and changed through attributable authority within scope. Reality mismatch may expose implementation error, factual correction, infeasibility or a decision tension, but implementation cannot silently rewrite user intent.

LOCK makes exact factual claims and binds the evidence used for them. Bound-byte and identity mismatch is mechanically detectable; a digest does not prove that every observation is truthful or sufficient. Target drift may make a LOCK inapplicable without erasing what its frozen evidence established within its original scope. Hierarchy and abstraction are orthogonal to this boundary: a detailed mechanism belongs in STATE when the user makes it part of correctness, while a coarse commit identity belongs in LOCK when it records what existed.

STATE must remain sufficient for an Agent to synthesize a realization above its acceptance floor when no usable realization LOCK exists. Regeneration promises STATE-level acceptance, not byte, design, language or toolchain identity.

### `IP-2` — Continue across Agent sessions

`IP-2` derives from `IP-0`: a project outlives any one Agent session.

- A cold Agent can deterministically discover the package, its current STATE, selected protocol, causal sources and relevant realizations.
- STATE exposes current meaning before historical detail.
- Logs, STATE and LOCKs may gain internal indexes or hierarchy suited to their information without creating a fourth semantic authority.
- Derived summaries and retrieval views remain replaceable and traceable to their covered source records.

The appropriate retrieval structure and context budget remain an experiment. Full-history replay is available for audit; this STATE does not claim that bounded cold-session recovery has already been demonstrated.

### `IP-3` — Translate between intent and reality

`IP-3` derives from `IP-0`: continuous maintenance requires checked feedback to reach the narrowest responsible layer.

- The user owns desired effects, values, permissions, trade-offs, protocol adoption and semantic approval.
- The Agent owns investigation, evidence collection, feasibility analysis, tension translation, candidate synthesis and authorized verification.
- Target reality supplies facts and constraints but cannot silently become user intent.
- Feedback is distinguished as verified no change, implementation mismatch, intent clarification, intent revision, reality tension or protocol tension before mutation.
- Authority-changing decisions preserve actor, scope, relevant base STATE and the investigated decision frame; asking or logging alone does not grant authority.

### `IP-4` — Create and maintain realizations safely

`IP-4` derives from `IP-0`: project intent must survive installation, change, composition and removal.

- Installation is synthesis from STATE and current reality, optionally accelerated by a usable LOCK.
- Failed, incomplete or stale candidates cannot silently replace accepted last-good.
- Current applicability and drift are investigated separately from frozen historical integrity.
- Composition and conflict handling preserve package identity and do not use discovery order or hidden last-writer-wins as semantic decisions.
- Uninstall realizes current reality without one package's contribution, preserving unrelated later changes rather than blindly reversing historical diffs.
- Intrusive shared-source realizations leave nearby, compositionally discoverable ownership evidence; comments alone never authorize deletion.

### `IP-5` — Keep protocol meaning versioned and referencable

`IP-5` derives from `IP-0`: packages need one comparable operating model and an exact immutable revision they can select.

- Meta-intent STATE carries the current desired semantics of the intent-package system.
- A protocol LOCK is the concrete immutable release of one adopted protocol revision. It binds the exact protocol text or frozen projection, STATE and source inputs, validator or other artifacts, evidence and adoption decision.
- Other packages select the protocol owner, revision, LOCK location and protocol-artifact digest from STATE; they do not copy a protocol-reference LOCK into their own realization area.
- Current meta-intent STATE may continue to evolve after adoption. The accepted protocol LOCK remains externally referencable historical last-good and is never resealed.
- A successor requires investigated tension, candidate LOCK, migration and conformance evidence, and a separate explicit adoption event. Structural self-validation cannot approve its own semantics.

### `IP-6` — Separate validation authorities

`IP-6` derives from `IP-0`: different claims require different evidence and authority.

- Deterministic validation proves mechanically decidable structure, containment, identities, digests and lifecycle invariants.
- Versioned read-only Agent validation intents may provide bounded semantic and counterexample evidence.
- Authorized users decide meaning, acceptance, permissions and trade-offs.
- Any semantic review used to support a strong alignment or successor claim searches for counterexamples before returning support and reports inaccessible evidence and uncovered scope.
- No validation layer borrows the authority of the next.

## Observable acceptance

- `META-001`: A cold Agent can locate current STATE, the selected protocol LOCK, supporting provenance and package realizations in either standalone or embedded form; bootstrap guidance does not become semantic authority.
- `META-002`: Protocol 0.2 defines the ontology, topology, information flow, authority, lifecycle, composition, conformance, governance and evolution needed to operate a package without the historical conversation.
- `META-003`: A natural-language package with no project implementation and an empty realization-LOCK set remains sufficient semantic input for candidate synthesis while selecting an exact adopted protocol LOCK.
- `META-004`: LOG, STATE, LOCK artifacts and acceptance evidence remain separately attributable; lower layers cannot redefine higher-authority meaning.
- `META-005`: Feedback is investigated and classified before state or realization mutation; only semantic or authority changes revise normative STATE.
- `META-006`: Agent autonomy ends when alternatives change user-visible meaning, acceptance, permissions, persistent cost, authority, destructive/external action or unresolved shared ownership.
- `META-007`: Failed, incomplete or stale candidates cannot replace accepted last-good; STATE advance does not erase frozen historical evidence.
- `META-008`: Composition, conflict handling and uninstall preserve unrelated current effects and reject hidden precedence and blind reversal.
- `META-009`: Protocol tension flows to this canonical lineage; a successor cannot approve itself and does not replace 0.2 without explicit adoption.
- `META-010`: Structural checks, semantic counterexample evidence and user acceptance remain distinct and make no claim beyond their observed scope.
- `META-011`: Reference-backed realizations separate immutable source identity, governed scope, installed effects and removal ownership without treating availability as semantic authority.
- `META-012`: Intrusive shared-source changes remain locally discoverable and safe to recompose or remove only after current ownership and drift investigation.
- `META-013`: Evidence claiming hierarchical-intent coverage names the concrete lower-order instances it tested and, for each, recovers the higher-order intent served, attributable derivation basis and applicable scope. An empty covered set does not pass.
- `META-014`: An adopted protocol release remains byte-identifiable through its LOCK after current meta-intent STATE advances, and external package references continue to resolve to the same artifact digest.

## Current decisions and resources

- Protocol 0.2 remains adopted and active. Its accepted LOCK is the canonical interpreter and immutable historical last-good for this lineage.
- The canonical public repository is `https://github.com/sch246/meta-intent`; the user retains semantic authority until explicitly delegating a scope.
- External packages and targets may provide bounded evidence without becoming current meta-intent meaning. Exact identities and target chronology remain recoverable through selected LOGs, frozen LOCK evidence or the owning package; hot STATE names a resource only while its role remains currently relevant.
- No protocol 0.3 candidate is created or adopted by this revision.
- The repository's existing semantic `counterexample-review` is the required adversarial evidence procedure for future strong alignment or successor claims; its result remains evidence-only.

## Constraints and permissions

- Do not publish, push, choose a license, adopt a successor, change remote state or perform destructive/external migration without explicit user authority.
- Do not rewrite accepted protocol bundles or committed source LOGs to make later conclusions appear inevitable.
- Do not revise STATE merely to make a candidate pass or describe unexecuted acceptance as passed.
- Do not infer user preference from code, telemetry, frequency, surprise, generated artifacts or model agreement.
- Do not store credentials or secrets in LOG, STATE, LOCK, examples or evidence.
- Do not require package-provided executable project code, universal environment capture or byte-identical regeneration unless STATE explicitly makes one of those effects normative.
- Keep the fixed pre-protocol bootstrap surface minimal and make incompatible change explicit.

## Non-goals

- Global personal memory across unrelated projects.
- Raw transcript archival or deterministic reconstruction of natural-language meaning from complete history.
- A package registry, dependency solver, deployment platform or universal target ABI.
- Automatic semantic conflict resolution, automatic user-preference inference or automatic governance succession.
- Guaranteed sustained attention or progress on arbitrarily difficult learning. Loss of attention may suspend investigation, but does not establish falsity, resolution or permanent exclusion.
- Model, vendor, programming-language, target-framework or runtime lock-in.

## Investigation hints

Surprise is a candidate explanation for how attention, learning and growing provenance may organize themselves; it is not current protocol machinery or semantic authority.

- Reality that defeats current expectation can supply attention.
- Learning can sustain attention by producing further distinctions and expectations through which further surprise becomes possible. Second-order surprise refers to this endogenous continuation, not to a second evaluator scoring whether the first learning was good.
- When learning ceases to produce enough surprise to hold attention, the attempted path, encountered boundary and situated loss of novelty may still inform later reading. Similar histories can naturally become less informative and be generalized without a mandated counter, score, node type or graph.
- A changed environment reopens an old difficulty only when the change can bear on the earlier obstruction; unrelated drift does not reset its history.
- Zero observed surprise is inconclusive when changing reality was excluded from observation, and surprise does not distinguish useful learning from noise by itself.

These are investigation lenses over preserved provenance. They do not automatically revise STATE, infer user preference or require a predetermined retrieval structure.

## Open tensions

- Cold-session retrieval accuracy, context cost and causal trace quality compared with full replay; no qualifying experiment has run yet.
- How growing source LOGs remain usable and completely attributable without presuming that an index or graph is required.
- How arbitrary-depth intent derivation remains traceable in practice without preselecting a mechanical representation or letting a derived view become semantic authority.
- Whether query-driven reading and continuation of ordinary provenance naturally preserve attention loss, difficulty generalization and context-sensitive reopening across cold sessions without a special schema or metric.
- Evidence coverage that prevents zero observations, zero tested instances or an unscoped `passed` claim from becoming vacuous success.
- How a current projection can shed target-specific facts only after their continuing explanatory or recovery value remains available in source provenance or immutable realization evidence.
- Portable signing, authentication, maintainer succession and concurrent authority decisions.
- Compatibility, migration and deprecation across immutable protocol revisions.
- Minimum current ownership and drift evidence for safe maintenance or uninstall when historical realization bytes are unavailable.
- Positive multi-package composition evidence beyond disjoint source regions and shared generated aggregation.
- Public repository license.
