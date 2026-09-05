# Meta-intent installation map

Status: evolving draft under adopted protocol 0.2. Current meaning is maintained here; [STATE.json](STATE.json) selects the unchanged protocol and supporting sources. This revision does not release or adopt a successor protocol.

## Purpose

`MI-0`: maintain the intent-package system. `IP-0`: help Agents create and continuously maintain projects as upstream software, environments and user understanding change, without making accumulated implementation debt the permanent basis of maintenance.

STATE is a detailed installation prompt: a map from desired effects and present conditions to a working realization. “Installation” includes creation, adaptation, repair, composition and removal. Every supported capability must be reachable from this entry. Detail is sufficient when an Agent without the originating conversation can act and verify the applicable effects; neither a short feature list nor exhaustive implementation narration guarantees that.

The user may not initially know what they want. The first map is necessarily incomplete. The Agent translates between user feedback and checked reality, implements within existing authority, and improves the map as meaningful distinctions become known. A complete design is not a prerequisite for beginning authorized development. Ordinary evidence-resolvable implementation choices do not require another user decision.

Intent is the durable asset; realizations are replaceable. The map must remain useful without old implementation bytes or the original environment, including on another platform, framework or language. Concrete appearance, interaction or mechanism remains part of STATE when preserving it matters to the user. An incidental class, file layout or historical workaround does not become a permanent requirement merely because an Agent wrote it.

## Use this map

1. Locate the package through its standalone or embedded bootstrap entry; bootstrap locates current STATE and does not replace its semantic authority. Read the affected package's STATE and the new request. Identify the desired effect, existing authority and uncertainty relevant to this task. Read selected sources when resolving why, attribution, supersession or a missing decision; do not replay all history for routine maintenance.
2. Inspect the actual target: version, available capabilities, installed composition, configuration, data and owned source contributions. Separate repository declarations, historical deployment observations and current observations. None alone proves the others.
3. Follow the applicable installation or maintenance route below. Reuse current working capabilities where they satisfy intent. Report a concrete user-visible trade-off when current authority cannot decide it; do not ask again for an action already authorized within this task's scope.
4. Verify the affected observable effects, including relevant interactions with other packages. Record exactly what was observed and what remains untested. A structural check, successful build or patch application supports only its own claim. Choose verification by the uncertainty it resolves and its cost. When direct human interaction is faster and clearer, provide a short manual scenario instead of building an Agent browser-test workflow; do not report that scenario as passed until it is exercised. Keep automated checks focused on errors they can usefully detect, and respect the user’s requested testing scope.
5. Return useful learning to its owner: correct the implementation for an implementation defect; improve STATE for a missing condition, clarified effect or changed route; preserve a selective source record when its why will matter again. Retain an exact realization only when a handoff, release, recovery or acceptance purpose needs it.

These are the questions an operation must resolve, not mandatory document-production stages or a requirement to interrupt implementation after each edit.

## Write and maintain a package map

A package normally has one `STATE.md`, with direct links to any required supporting material. Semantic derivation may be arbitrarily deep, but required reading should not become a chain of documents. Use existing README sections, scripts, provider documentation or state-owned detail when they already own the needed information. A link must identify what it supplies and when to use it.

Include the information the actual project needs:

- **Desired effects and why:** product direction, retained capabilities, user-visible details that define correctness, acceptance observations, relevant exclusions and unresolved choices. Trace derived capabilities to the higher-order purpose, attribution and applicable scope; reality feedback is one possible basis, not the only one.
- **Present conditions and resources:** how to inspect the target, find necessary inputs and dependencies, and distinguish supported, missing and incompatible capabilities. A historical tested version is evidence, not an implicit permanent version restriction.
- **An executable route:** concrete entry commands or direct procedural references, necessary ordering, configuration inputs, adaptation choices and the relevant verification. Explain conditions that make a step necessary or obsolete. A map cannot delegate all installation knowledge to an absent or unusable LOCK.
- **Composition and removal:** which package supplies each required effect, which shared target changes support it, other current consumers, how installed contributions are recognized, and what removal must preserve. Receipt files and source markers provide evidence with stated scope; they do not independently decide ownership or authorize deletion.
- **Evidence and uncertainty:** where consequential user choices and checked lessons came from, what has actually been installed or observed, and what still needs investigation. Keep historical deployment facts attributable instead of presenting them as timeless current status.

These are content needs, not a fixed heading schema or a requirement for duplicated fields. Natural-language STATE owns product meaning. Machine-readable fields should serve a real discovery or validation consumer; do not maintain a second hand-written copy of revision, acceptance or deployment facts without a reason and a synchronization method.

When wording admits materially different observable outcomes, use a small distinguishing scenario before treating one interpretation as confirmed. For persistent UI state, identify whose state it is and which transitions preserve it: “keep the sidebar open across sessions” leaves global persistence and per-session restoration unresolved. Investigate repository facts directly and recover existing user decisions before asking. A focused [grill-me interview](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md), with one consequential question and a recommendation at a time, can help; neither an installed skill nor an exhaustive interview is required. Continue independent authorized work. Put the confirmed behavior and distinguishing acceptance in the owning map, with attribution when it matters again.

Conditional meaning is `C -> E`: when condition C applies, effect E belongs to the desired state. If the target has no equivalent concept, do not recreate C merely to satisfy old wording. Changing conditions is a separate feedback event: investigate whether an existing branch applies, becomes irrelevant, or exposes an omission in the map. Refine that meaning within authority rather than recording each new environment as another unconditional rule.

## Installation, adaptation and removal

For a new installation, discover the package, inspect the target and composition, and synthesize a realization from applicable STATE. A usable LOCK may accelerate this but is optional. Prepare and verify changes in an isolated or reversible scope appropriate to the operation before an authorized activation.

For an implementation defect under materially unchanged conditions and intent, repair the realization and perform focused verification. Several defects may form one logical repair episode. A LOG, STATE revision, LOCK or separate commit per diagnostic step is not required.

For a materially incompatible target, follow the user's clean-reconstruction policy: preserve needed data and comparison evidence, establish the clean latest target, inspect its capabilities, align applicable STATE, then synthesize fresh changes. Do not merge, rebase, translate or patch forward old customization merely because it exists. Historical realizations explain prior effects without becoming implementation inputs or constraints on the replacement.

Refinement must remain usable on both the new target and the previously accepted version. The realizations need not be identical; each difference must follow clarification or improvement of the original intent and make the result better without an obvious regression. Version-specific routes may differ while preserving the applicable effect. Report unsupported or untested branches honestly.

For composition or responsibility transfer, identify the retained effect, its new owner, retired or remaining contributions, current consumers and installed state. A feature's owner, the author of a historical Host patch and the holder of its installation receipt can differ. Moving a Chat policy between plugins does not automatically transfer a shared Host extension or its removal authority. Regenerate shared derived artifacts from current contributors rather than claiming their aggregate bytes as one plugin's property.

Before destructive migration, decomposition or aggregate retirement, inventory discovered capabilities and their proposed owners. Recover existing user decisions; ask the user to classify genuinely undecided effects as retained, retired or undecided before removal. Every retained effect must reach its owner's STATE. Code and prior use discover candidates; they do not decide what the user values. Overall satisfaction does not approve every unmentioned implementation detail.

Uninstall realizes the current target without one package's contribution while preserving unrelated later changes and remaining consumers. Inspect actual ownership and drift, including shared-source changes, profile membership and generated outputs. A reverse-applicable patch proves textual reversibility, not that removal is appropriate for the current composition. Intrusive source contributions need locally discoverable ownership evidence; markers alone never authorize removal. Resolve ambiguous shared ownership before the affected removal.

Failed, incomplete or stale candidates do not silently replace accepted last-good. Keep applicability separate from historical integrity: an old LOCK can remain truthful while no longer matching the target. Activation, external publication and destructive actions use the authorization already granted for their scope; missing authority still requires a user decision.

## Sources, current meaning and exact realizations

`IP-1` preserves three distinct information roles:

- **LOG** records selected actual occurrences, attributable user decisions, checked conditions, consequential alternatives and useful negative findings. It explains why; it is neither a raw transcript nor current authority.
- **STATE** carries current meaning and the operational map: intent, acceptance, resources, permissions, constraints, decisions and uncertainty. Implementation or test success cannot silently redefine it.
- **LOCK** retains one exact purpose-bound realization, its input and output identities, target, evidence and authority. It makes factual claims about that realization, not permanent design requirements.

User meaning and scope govern Agent interpretation. Distinguish the user's own words from an assistant proposal pasted in a user message, an inferred design choice and an observed behavior. Later explicit corrections supersede earlier proposals within their scope. Preserve a short faithful quotation when wording matters; do not publish complete conversations, credentials or private environment details merely to establish provenance.

Truthful event evidence remains history after meaning changes. False attribution, unsupported inference and an unadopted Agent draft do not acquire authority from being committed; they may be corrected or removed as evidence repair. Label retained hypotheses and their limits. Protocol 0.2's file-level selected-LOG immutability does not yet express this distinction fully; retain existing bound bytes and report that protocol tension rather than resealing accepted history.

LOCK digests prove identity, not truth, sufficiency, authorship or authority. Reference-backed realizations distinguish immutable source identity, governed paths, installed effects and removal ownership. Unavailable bytes do not erase intent or prevent fresh synthesis; they may limit exact recovery or removal evidence.

## Continuity and feedback

`IP-2` requires a cold Agent to discover current meaning, relevant reasons and realizations without the originating conversation. Indexes, summaries and retrieval views may help, but remain replaceable routes to their sources rather than another semantic authority.

`IP-2.1` carries maintenance learning across sessions: recover a prior occurrence and intervention, distinguish a duplicate report from recurrence, investigate an unexpected recurrence, and preserve a result that a later Agent actually uses. Stable mechanical handling may leave the LLM path within existing authority. A future class of user-owned decisions requires explicit delegation before automation may bypass that decision.

`IP-3` is the translation loop: visible differences and user feedback expose missing meaning; the Agent expresses the consequences in the user's terms, recovers or obtains the relevant decision, updates the owning map, and tests the applicable effect. The user does not need to pre-enumerate all requirements. Asking and logging alone grant no authority.

Historical Phase A case 002 was partial. Neither that old result nor present documentation demonstrates current cross-session learning. `META-015` remains unproved until a named, non-empty set of cold-session recurrence cases shows attributable recovery, correct duplicate/recurrence classification and actual later consumption without user-directed LOG selection. Do not infer a universal model limitation from one historical experiment.

## Protocol and verification

`IP-4` covers realization lifecycle above. `IP-5` keeps protocol meaning versioned and referencable. `IP-6` keeps structural evidence, semantic review and user acceptance distinct.

Protocol 0.2 remains the adopted interpreter. Its [protocol text](../locks/protocol-0.2/PROTOCOL.md) defines the selected ontology, authority, lifecycle, composition, conformance and governance as well as concrete topology and serialization; its [LOCK](../locks/protocol-0.2/LOCK.json) retains exact bytes and adoption evidence. Existing conforming packages continue selecting that identity and digest. Local installation maps can be useful without claiming 0.2 conformance; completing their content does not silently migrate their format.

Current meta-intent STATE may evolve while accepted protocol bundles remain immutable. A successor needs investigated tension, a separate candidate bundle, migration and conformance evidence, and an explicit adoption decision. No successor is created or adopted here. The 0.2 change-flow diagram must not be read as requiring LOG → STATE → LOCK for every repair; the [artifact proportionality decision](../logs/2026-08-31-artifact-proportionality-correction.md) explains the current correction.

For changes to current maps, verify references, consistency, authority attribution and action sufficiency. For 0.2 structure or bindings, use the existing validator from this repository:

```sh
node locks/protocol-0.2/bin/validate.mjs .
```

When working on validator behavior, run its focused suite:

```sh
node --test locks/protocol-0.2/tests/validate.test.mjs
```

For a strong semantic alignment or successor claim, use the existing read-only [counterexample review](../locks/protocol-0.2/experiments/semantic-checks/counterexample-review.md), including inaccessible evidence and uncovered cases. It supplies evidence only. A practical map trial names a package and target, starts a cold Agent at STATE, observes its installation or adaptation route and relevant product effects, and repairs places where it needed to guess or recover the originating conversation. A documentation review alone is not such a trial.

## Maintain meta-intent itself

This repository supplies the map and protocol artifacts; it has no application service to deploy. A fresh operator can obtain it with `git clone https://github.com/sch246/meta-intent.git <destination>` and enter `state/STATE.md`. Inspect the checkout, branch, local changes and selected protocol before editing.

For a current-meaning change, edit this STATE and any directly affected entry guidance. Preserve the actual source in `logs/` only when it has continuing decision value; select that record in `state/STATE.json.logs`, advance the STATE revision and keep status honest. Existing protocol identity, digest and accepted bundles remain unchanged unless a separate protocol adoption is the authorized task. A factual or procedural correction need not manufacture a new realization.

Run the structural validator above, check changed references and `git diff --check`, and review the diff against the source decision. Commit the intended files together when committing is authorized. Before an authorized push, inspect the configured remote and upstream movement; publish reviewed commits without overwriting unrelated changes. A rejected non-fast-forward push requires investigation, not forced replacement. Publication preserves the documentation and does not establish runtime or user acceptance.

## Observable acceptance

These retained identifiers express obligations, not a compulsory checklist for every operation.

- `META-001`: discover current STATE, protocol, provenance and realizations in standalone or embedded form; bootstrap only locates them.
- `META-002`: the selected protocol supplies a complete operating model without the historical conversation.
- `META-003`: a package with no project implementation and no realization LOCK remains sufficient input for synthesis; a conforming package selects its adopted protocol.
- `META-004`: sources, current meaning, exact realizations and acceptance evidence remain separately attributable; lower layers cannot redefine higher authority.
- `META-005`: investigate and distinguish defects, clarification, revision, reality/protocol tension and useful no-change findings before relevant mutation.
- `META-006`: continue within existing authority and obtain only missing user-owned decisions; when wording permits different observable outcomes, resolve the consequential distinction with a concrete scenario before treating an interpretation as confirmed.
- `META-007`: preserve accepted last-good on incomplete replacement and frozen history after STATE advances.
- `META-008`: compose and remove contributions without hidden precedence, unrelated damage or blind reversal.
- `META-009`: route protocol tension to the canonical lineage; no self-adoption or implicit successor.
- `META-010`: keep structural, semantic and user evidence distinct; claims do not exceed observations.
- `META-011`: distinguish reference identity, governed scope, installed effects and current removal ownership.
- `META-012`: intrusive contributions remain discoverable and removable only after current ownership and drift investigation.
- `META-013`: hierarchical-coverage evidence names a non-empty set of derived intents and recovers each purpose, derivation basis and condition.
- `META-014`: accepted protocol bytes and external digest references remain stable after current STATE advances.
- `META-015`: demonstrate the cold-session recurrence and consumption cycle described above, not a zero-case or unconsumed report.
- `META-016`: repair multiple defects under unchanged intent without mandatory semantic artifacts.
- `META-017`: before aggregate retirement, account for discovered capabilities, existing or new user classifications, successor ownership, overlap and deployment status.
- `META-018`: from STATE and its applicable interpreter, a cold Agent finds direction, effects, conditions, resources, installation steps, meaningful observations and user decision points, then produces a candidate without originating chat or a usable realization LOCK.
- `META-019`: apply conditional effects without manufacturing absent concepts; refine the map as conditions change.
- `META-020`: reconstruct on a clean incompatible target without carrying old customization forward as implementation inputs.
- `META-021`: realize applicable effects on another platform, framework or language without copying old implementation structure.

## Remaining boundaries

The canonical public lineage is [sch246/meta-intent](https://github.com/sch246/meta-intent). The user retains semantic authority unless explicitly delegating scope. Do not infer preference from code, telemetry, frequency or model agreement. Do not silently weaken acceptance to make an implementation pass, claim unexecuted tests or deployment, choose a license, publish or perform destructive/external actions beyond existing authorization.

This system is not a universal package registry, dependency solver, deployment platform, global personal memory or transcript archive. It does not promise byte-identical regeneration or automatic resolution of user-owned semantic conflicts.

Open work includes demonstrated cold-session retrieval and learning, usable growing provenance, minimum evidence for shared-source removal without historical bytes, positive multi-package composition trials, successor migration, authentication and maintainer succession, and licensing. No persistent index, graph, special learning schema or management operator is selected. Historical hypotheses about surprise and attention remain in their source logs as investigation ideas; they do not govern installation or establish success, failure or user preference.
