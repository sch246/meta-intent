# Meta-intent state

Status: evolving draft authority interpreted by the adopted protocol 0.2 LOCK. This revision states the core purpose in the user's plain terms, names the installation map as the irreducible core, its reachability razor and the generator the map is maintained from, and marks the remainder as derived; it does not adopt a successor protocol.

## Root intent

`MI-0` — Define and maintain the intent-package system.

`IP-0` — An intent package enables Agents to create and continuously maintain one project from user-owned intent while preventing accumulated implementation debt from becoming the durable basis of maintenance.

### The core, in plain terms

The system exists to solve implementation debt and to survive continuously changing upstream and environment.

STATE is in essence a detailed installation-guide prompt: the materials and the steps by which an Agent, reading the map against the environment actually in front of it, can always install successfully and adapt to different conditions and environments.

The founding assumption is that the user does not know exactly what they want either, so the first installation map is necessarily incomplete. The Agent is the translator between the user and reality; each round of environment change and user feedback makes the intent more precise and the map more operable.

Creating a project is the entry; participating in its continued maintenance is what actually matters. A capability that only helps the first installation, and never the later rounds against a changed environment, serves the lesser half of `IP-0`.

Strip every accumulated setting and idea away and the irreducible core is the installation-map metaphor. Everything below is derived from it. Because it is a map, every capability the package commits to must be reachable by following it: from entry, through the applicable conditions, to installation, the observable effect and its verification. Reachability is the razor, and it follows from the metaphor rather than being an added rule. A capability the map cannot reach is not delivered, however well it is described elsewhere; material that no route through the map has to reach holds no normative authority and may be removed without loss of intent.

The map is generated, not primitive, and maintainability is the question of what generates it. Its generating set is what actually happened and what was learned from it: attributable occurrences, checked reality, the trade-offs actually weighed, and the authority events that turned any of it into meaning. LOG holds that generating set, STATE is its current closure, and a line of the map that traces back to no occurrence and no authority can be preserved but not maintained. Maintaining the map therefore means keeping the "why" and a way to iterate it, not editing its text at will.

This is where the package's own complexity comes from: authority is made explicit instead of being left implicit in a conversation. That choice puts provenance, attribution and derivation basis on the map's own maintenance route, so the razor reaches them rather than cutting them. It is the same problem as creating an agent, and this package does not claim to have bounded it — how much explicit machinery the generator actually requires stays open below.

Intent is the durable asset. Implementation realizations are disposable outputs. The package remains sufficient when all previous implementation changes are discarded, no prior environment can be reused, and the project must be rebuilt on another version, platform, framework or language while preserving the applicable user-owned effects.

STATE is a living, accumulative operating guide expected to become more accurate and more portable through repeated contact with incompatible realities. Its purpose is not to describe one implementation permanently, but to approach intent constraints that continue to produce consistent accepted effects under conditions not known when the project began.

When target reality changes incompatibly, the default is clean reconstruction: stop carrying prior implementation changes forward, establish the latest clean target, inspect its capabilities and conditions, align and refine STATE, then synthesize and apply a fresh realization. Do not merge, rebase, translate or patch old customization into the new target merely because it exists. Historical realization facts remain available for comparison without making old code an input or constraint on the replacement.

## Derived intent

STATE may organize intent to arbitrary depth. A lower-order intent remains traceable to the higher-order intent it serves, its attributable derivation basis and its applicable scope. That basis may be direct user specification, design decomposition, an authority decision or investigated reality feedback; only the last requires a reality-boundary source. Concrete feedback may propagate upward, but only appropriate authority changes normative user meaning.

The usual development path begins with a product direction, develops observable feature commitments, records in LOG the trade-offs by which supporting capabilities were chosen, and adds condition-specific behavior as interaction with reality reveals what must remain. This is derivation, not a one-way freeze: authorized feedback may refine, split, combine, narrow or replace an earlier principle when unforeseen conditions expose that its wording no longer captures the desired product.

### `IP-1` — Preserve distinct information authority

`IP-1` derives from `IP-0`: project creation and long-term maintenance require current meaning, causal source history and exact realized facts without conflating them.

- `LOG` preserves selective, fact-aligned causal source records: attributable desired effects and decisions, checked reality, translated tensions, alternatives that were actually considered or rejected, corrections and useful verified no-change findings. It is not raw transcript, Agent reasoning history or current authority.
- `STATE` is the current projection of intent, acceptance, resources, constraints, permissions, decisions, uncertainty and selected protocol.
- `LOCK` is an immutable, purpose-bound cache and record of one exact realization, including retained bytes or references, target identity, digests, evidence, status and authority event.

Normative STATE is established and changed through attributable authority within scope. Reality mismatch may expose implementation error, factual correction, infeasibility or a decision tension, but implementation cannot silently rewrite user intent.

LOG immutability protects truthful evidence of events, not every sentence that an Agent once wrote. A faithfully recorded decision, checked condition or actual trade-off remains historical evidence even when later meaning changes; preserve it and record the later event separately. A false attribution, unsupported inference or unadopted draft never acquires historical authority from being saved or committed and may be corrected or removed. Any hypothesis retained for future investigation states that status and its evidence limits instead of presenting itself as an occurrence or decision.

LOCK makes exact factual claims and binds the evidence used for them. Bound-byte and identity mismatch is mechanically detectable; a digest does not prove that every observation is truthful or sufficient. Target drift may make a LOCK inapplicable without erasing what its frozen evidence established within its original scope. Hierarchy and abstraction are orthogonal to this boundary: a detailed mechanism belongs in STATE when the user makes it part of correctness, while a coarse commit identity belongs in LOCK when it records what existed.

STATE must remain sufficient for an Agent with no old code to synthesize a realization above its acceptance floor on a different implementation stack. Regeneration promises STATE-level acceptance, not byte, design, language or toolchain identity.

STATE is also the package's action prompt or map for an Agent without the originating conversation. At the complexity required by the product, it directs the Agent from product direction through committed capabilities to implementation, installation, relevant verification and the conditions where autonomous execution must stop for a user decision. Action sufficiency, not length or copied code, determines whether it is detailed enough.

STATE distinguishes three operational classes whenever confusing them could change action:

1. effects that must be realized and verified whenever the package applies;
2. problems, regressions or claims that must be avoided when their stated condition holds;
3. conditional desired states that map a stated framework, implementation property or product concept to the effects and verification criteria applicable under that condition.

The third class is a state relation, `C -> E`, not an instruction to act or ask the user. When C holds, the applicable desired state includes E. When C is absent and the target has no equivalent concept, E is absent from the applicable desired state and the Agent does not recreate that concept merely to preserve old wording.

Condition change is a separate feedback action. When target reality moves from C0 to C1, the Agent determines which current STATE branches still apply. A difference may show that an existing branch applies, that a branch has become irrelevant, or that earlier STATE omitted or misstated the user's intent. In the last case, checked reality and user feedback act back on current STATE: LOG records the clarification or decision and STATE is refined before a fresh realization is applied. This feedback loop is distinct from a conditional desired state, and asking the user occurs only when meaning or a value trade-off cannot be recovered from current authority.

A concrete appearance, interaction or mechanism belongs in STATE when the user makes preserving it part of correctness. It remains revisable by later authority; “locked behavior” does not create a fourth artifact. An accepted LOCK binds one exact realization and its evidence against the applicable STATE, while STATE continues to own the behavior that future realizations must preserve.

### `IP-2` — Continue across Agent sessions

`IP-2` derives from `IP-0`: a project outlives any one Agent session.

- A cold Agent can deterministically discover the package, its current STATE, selected protocol, causal sources and relevant realizations.
- STATE exposes current meaning before historical detail.
- Logs, STATE and LOCKs may gain internal indexes or hierarchy suited to their information without creating a fourth semantic authority.
- Derived summaries and retrieval views remain replaceable and traceable to their covered source records.
- The normal normative entry is one `STATE.md`. When supporting state-owned material is necessary, that entry links to it directly; required normative reading does not become a chain of documents. This physical one-jump preference does not limit semantic derivation depth.

The appropriate retrieval structure and context budget remain an experiment. Full-history replay is available for audit; this STATE does not claim that bounded cold-session recovery has already been demonstrated.

#### `IP-2.1` — Carry maintenance operations across sessions

`IP-2.1` derives from `IP-2` and `IP-3`: locating package artifacts is insufficient when the next Agent still needs the originating conversation or user instructions about which history to inspect.

- A cold Agent receiving new feedback can query current intent and source history, recover relevant prior occurrences and interventions, and produce durable results that a later cold Agent actually consumes.
- The cycle distinguishes another description of one occurrence from a new recurrence using attributable evidence. Unexpected recurrence investigates both the prior intervention and the maintained route that failed to prevent or expose it; the resulting repair becomes available to the next recurrence.
- Stable handling may leave the LLM path when it is mechanical within existing authority. Bypassing a user-owned decision boundary for a named future event class requires explicit delegation and returns to investigation when its assumptions fail.
- The capability does not depend on the originating conversation, a user instruction to inspect particular LOGs, or one predetermined runtime, index or storage structure.

No accepted operator or experiment currently demonstrates this capability.

### `IP-3` — Translate between intent and reality

`IP-3` derives from `IP-0`: continuous maintenance requires checked feedback to reach the narrowest responsible layer.

- The user owns desired effects, values, permissions, trade-offs, protocol adoption and semantic approval.
- The Agent owns investigation, evidence collection, feasibility analysis, tension translation, candidate synthesis and authorized verification.
- Target reality supplies facts and constraints but cannot silently become user intent.
- Feedback is distinguished as verified no change, implementation mismatch, intent clarification, intent revision, reality tension or protocol tension before mutation.
- Authority-changing decisions preserve actor, scope, relevant base STATE and the investigated decision frame; asking or logging alone does not grant authority.
- Classification determines which artifacts change. An implementation mismatch under already selected intent may change only the realization and focused evidence; LOG, STATE and LOCK are independent authorities rather than mandatory workflow stages.
- During destructive migration or decomposition, the Agent presents each affected package's discovered features for user classification as retained, retired or undecided. Code, runtime state, previous installation and Agent reconstruction can discover candidates but cannot decide which features the user values or which implementation details should become normative.
- Post-change feedback sharpens intent when the user identifies a behavior that should remain. The owning package records that confirmed behavior at the appropriate abstraction level; silence or overall satisfaction does not lock every unmentioned realization detail.
- The Agent is the translator between the user and reality. The alignment loop keeps intent growing more precise: reality changes → behavior differences become visible against retained LOCK facts → the Agent presents the concrete differences in the user's terms and lowers the expression barrier, never requiring the user to pre-enumerate requirements → the user marks which differences have meaning → LOG records the occurrence, the user's actual words and the applicable conditions → STATE is refined → a fresh realization is synthesized on the clean latest target → user acceptance binds a new LOCK; the previous LOCK remains the difference surface.
- A refined STATE must run on the new version and must remain runnable on the previously accepted version. The two realizations need not be identical; every difference must follow from clarifying or optimizing the original intent and must be better, not an obvious regression. Version- and API-specific accidentals sink into the realization, never into STATE.

### `IP-4` — Create and maintain realizations safely

`IP-4` derives from `IP-0`: project intent must survive installation, change, composition and removal.

- Installation is synthesis from STATE and current reality, optionally accelerated by a usable LOCK.
- For a materially incompatible target, the Agent discards prior implementation changes as candidate inputs, starts from the clean latest target, checks current capabilities and conditions, aligns and where authorized refines STATE, and only then applies a fresh realization. A focused repair remains appropriate when target conditions and intent are materially unchanged.
- Failed, incomplete or stale candidates cannot silently replace accepted last-good.
- Current applicability and drift are investigated separately from frozen historical integrity.
- Composition and conflict handling preserve package identity and do not use discovery order or hidden last-writer-wins as semantic decisions.
- Uninstall realizes current reality without one package's contribution, preserving unrelated later changes rather than blindly reversing historical diffs.
- Intrusive shared-source realizations leave nearby, compositionally discoverable ownership evidence; comments alone never authorize deletion.
- Several defects in one realization may be repaired as one logical implementation episode under one STATE revision. Git history preserves meaningful changes rather than diagnostic chronology.
- Before replacing or retiring an aggregate package, the Agent inventories its responsibilities, proposed successor owner, overlap and current deployment status. Every retained desired effect is traced to an owning package STATE; unowned, duplicated or ambiguous effects remain a user decision rather than disappearing with the aggregate.

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
- Verification is proportional to the claim and affected surface. Unrelated tests, generated documents or broad gates do not strengthen relevant evidence merely by increasing their volume.

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
- `META-015`: For a named non-empty set of recurrence cases, a cold Agent starting without the originating conversation and without procedural user directions discovers relevant current intent, prior occurrence and intervention, classifies duplicate report versus expected or unexpected recurrence from checked target evidence, preserves the result, and changes a later cold Agent's maintenance path. Evidence names every tested case and external observation; zero cases, user-directed LOG selection or an unconsumed result does not pass.
- `META-016`: Given multiple implementation defects under unchanged intent, an Agent can repair and verify the affected realization without manufacturing a LOG, STATE revision or candidate LOCK; each semantic artifact added names its independent continuing purpose.
- `META-017`: Before an aggregate package is replaced, decomposed or retired, evidence enumerates its discovered user-facing capabilities, proposed owning packages, overlap and deployment status; the user classifies each capability as retained, retired or undecided, and every retained effect is traceable to the STATE of its owner before removal proceeds.
- `META-018`: Given a package with no usable realization LOCK, a cold Agent using its STATE and selected protocol can identify the product direction, committed capabilities, applicable conditions, an implementation and installation route, relevant behavioral observations, prohibited shortcuts, and every point that requires a user decision; following that map produces a candidate whose claimed acceptance does not depend on the originating conversation.
- `META-019`: Given a conditional STATE relation `C -> E`, a candidate realizes and verifies E when C applies and does not manufacture C's missing concept when it does not. When reality changes from C0 to C1, the Agent checks applicable STATE against the clean target; observed differences and authorized feedback either leave STATE unchanged, change branch applicability, or refine STATE by adding, generalizing, narrowing or removing meaning before a fresh realization is applied.
- `META-020`: Given a materially incompatible target update, the candidate starts from the clean latest target without merging, rebasing, translating or patching forward prior implementation changes. An Agent uses current STATE to reconstruct the applicable effects; prior realization LOCKs may provide comparison evidence without making old implementation an input to the candidate.
- `META-021`: Given no previous implementation and a target using a different language, platform or framework, a cold Agent can use STATE to identify the applicable product effects and observable criteria and produce a realization without copying old structure.
- `META-022`: Every capability STATE commits to is reachable by following STATE alone — entry, applicable conditions, installation route, observable effect, verification and the points that require a user decision — without the originating conversation. A committed capability with no such route is unfulfilled rather than merely undocumented, and normative material that no route has to reach is identified as removable; evidence names the capabilities traced and the unreached material found.

## Current decisions and resources

- Protocol 0.2 remains adopted and active. Its accepted LOCK is the canonical interpreter and immutable historical last-good for this lineage.
- The canonical public repository is `https://github.com/sch246/meta-intent`; the user retains semantic authority until explicitly delegating a scope.
- External packages and targets may provide bounded evidence without becoming current meta-intent meaning. Exact identities and target chronology remain recoverable through selected LOGs, frozen LOCK evidence or the owning package; hot STATE names a resource only while its role remains currently relevant.
- No protocol 0.3 candidate is created or adopted by this revision.
- The repository's existing semantic `counterexample-review` is the required adversarial evidence procedure for future strong alignment or successor claims; its result remains evidence-only.
- No accepted management operator currently performs the cross-session assimilation cycle. The present workflow still relies on conversation continuity and user-triggered retrieval, so `META-015` is not satisfied. The only qualifying experiment to date, Phase A case 002, ended `partial`; its six records are retained as archived experiment evidence and are not selected by `STATE.json.logs`.
- LOG, STATE and LOCK are not a completion checklist. A realization LOCK is created only when retaining an exact implementation serves an explicit handoff, release, acceptance, recovery or other continuing purpose.
- Candidate migration is an intent-refinement window, not silent acceptance. Explicit reports that a behavior must remain update the owning package's STATE; overall approval does not promote every observed implementation detail into intent.
- STATE presentation defaults to one normative document with at most one direct jump to required supporting material. Package complexity may increase semantic detail and derivation depth without forcing chained navigation or a fixed schema for every project.

## Constraints and permissions

- Do not publish, push, choose a license, adopt a successor, change remote state or perform destructive/external migration without explicit user authority.
- Do not rewrite accepted protocol bundles or truthful source evidence to make later conclusions appear inevitable. Correcting or removing a false attribution, unsupported inference or unadopted draft is evidence repair, not historical rewriting.
- Authenticity comes first in LOG. Record what actually happened and the user's actual words; do not fabricate or embellish emotional content, and do not present an Agent paraphrase as a user quotation.
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

- The minimum explicit-authority machinery under which the map stays regenerable from its generator. Making authority explicit is what produces this package's own complexity; no current evidence fixes how little of it would still keep occurrences, learning and authority traceable.
- Cold-session retrieval accuracy, context cost and causal trace quality compared with full replay. Phase A case 002 ended `partial`: selected-LOG reading recovered facts without contradiction but omitted exact realization identities, and full replay did not beat the autonomous arm. No experiment has yet produced a passing result.
- The smallest execution carrier for cross-session assimilation and recurrence review: natural-language bootstrap, Agent skill, CLI, persistent index or another mechanism; none is selected before the cold-session experiment.
- How growing source LOGs remain usable and completely attributable without presuming that an index or graph is required.
- How arbitrary-depth intent derivation remains traceable in practice without preselecting a mechanical representation or letting a derived view become semantic authority.
- Whether query-driven reading and continuation of ordinary provenance naturally preserve attention loss, difficulty generalization and context-sensitive reopening across cold sessions without a special schema or metric.
- Evidence coverage that prevents zero observations, zero tested instances or an unscoped `passed` claim from becoming vacuous success.
- How a current projection can shed target-specific facts only after their continuing explanatory or recovery value remains available in source provenance or immutable realization evidence.
- Protocol 0.2 makes selected LOG files immutable once committed or bound. A successor must distinguish truthful event evidence from unconfirmed Agent drafts so that file-level immutability does not preserve false attribution or speculative reasoning as history.
- Portable signing, authentication, maintainer succession and concurrent authority decisions.
- Compatibility, migration and deprecation across immutable protocol revisions.
- Minimum current ownership and drift evidence for safe maintenance or uninstall when historical realization bytes are unavailable.
- Positive multi-package composition evidence beyond disjoint source regions and shared generated aggregation.
- Protocol 0.2's strict change-flow diagram can be misread as requiring LOG, STATE and LOCK churn for an implementation-only repair; current STATE rejects that reading, and a successor should make the classification branch explicit.
- Public repository license.
