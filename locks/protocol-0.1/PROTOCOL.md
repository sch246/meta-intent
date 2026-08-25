# Intent Package Protocol 0.1

Status: candidate protocol realization of the meta-intent state at `../../state/STATE.md`.

This protocol defines what an intent package is and how it operates. It defines the complete architecture: ontology, package topology, information flow, authority, installation, maintenance, composition, conflict handling, uninstall, conformance, governance, and protocol evolution. It intentionally leaves user goals and acceptance semantics in natural language.

## 1. Bootstrap kernel

Before any protocol can interpret a package, a reader needs one protocol-independent entry convention:

1. Ignore dot-prefixed repository metadata such as `.git`.
2. Require exactly three semantic top-level directories: `logs`, `state`, and `locks`. Conventional root presentation or community files may coexist but carry no package authority.
3. Read `state/STATE.json`.
4. Resolve its local `document` and `logs`, then read the owning package, lock path, protocol identity, revision, and artifact digest in `state.protocol`.
5. Resolve that lock inside the named protocol-owning package. When the named package is the current package, resolve it locally; otherwise obtain the named package through available package resources or repository context.
6. Match the selected protocol implementation to the declared identity, revision, and artifact digest, then use it to interpret and validate the rest of the package.

This is the irreducible bootstrap kernel, not a second package model. A revision that changes this kernel is incompatible unless it provides an externally understandable migration entry.

Self-hosting does not require a hash cycle. State identifies its protocol lock by owning package, package-relative path, protocol identity, revision, and protocol-artifact digest rather than by a digest of `LOCK.json` itself. The lock binds the exact state and protocol artifacts by digest. Git history and an external authority event may establish provenance and approval; self-validation alone cannot.

## 2. Ontology

### User

The person or authorized group that owns desired effects, value choices, permissions, acceptable trade-offs, and semantic approval within a declared scope.

### Agent

The investigator and realization operator. The Agent gathers evidence, checks target facts, translates reality constraints into consequences for intent, proposes decisions, synthesizes candidates, and performs authorized verification. It does not silently choose user preferences or expand its authority.

### Target Reality

The current environment in which an intent is to be realized: source tree, runtime, services, data, policies, dependencies, other packages, and observed behavior. Reality supplies evidence and constraints; it is not an intent authority.

### Intent Package

A versioned, three-area body of maintained intent and provenance interpreted by a selected protocol. It may contain no executable target implementation. Its purpose is to cause and maintain a desired contribution in target reality.

### Meta-intent Package

An intent package whose desired contribution is the definition and maintenance of the intent-package system. Its protocol implementation is therefore a concrete realization lock of its own state.

### Log

A selective, fact-aligned record of consequential exchange between intent and investigated reality. It preserves desired effects, checked facts, translated tensions, unresolved branches, and resulting decisions without becoming either a raw chat transcript or disconnected speaker summaries. A log is source history, not current authority.

### State

The current authoritative projection of package identity, intent, acceptance, resources, constraints, permissions, non-goals, decisions, hints, status, and selected protocol. State is maintained from confirmed logs; it does not contain the complete conversation or generated realization merely for convenience.

### Lock

An immutable, purpose-bound record and artifact bundle for one concrete realization of its own package. A lock binds its inputs, outputs, target, evidence, status, and authority by exact identity and digest. Protocol selection is state, not a realization lock. A lock does not redefine the state it realizes.

### Protocol

The shared, versioned definition of this entire architecture and its operating rules, concretely realized by a lock in a meta-intent package. A protocol gives packages a comparable language; it does not prove their intentions compatible or their natural-language acceptance fulfilled.

### Realization

A concrete interpretation of package state for a particular purpose and target. It may consist of source, patches, generated files, configuration, procedures, or target changes, all owned by its lock bundle when stored in the package.

### Evidence

An attributable observation relevant to a fact, acceptance criterion, applicability claim, or decision. Existence of evidence does not imply that it is sufficient; the acceptance rule must say what it demonstrates.

### Authority Event

An attributable decision by a party authorized for the affected scope, such as approval, retirement, permission grant, or semantic revision. A digest proves content identity, not that the actor was authorized.

### Tension

A checked mismatch or trade-off between desired effects, protocol expressiveness, permissions, target reality, package composition, or available evidence. Tensions are translated into consequences at the narrowest responsible layer.

## 3. Package topology

Every package has only these semantic top-level areas:

```text
logs/                       provenance: why
state/                      current authority: what
  STATE.json                bootstrap identity and references
  STATE.md                  normative natural-language state
  ...                       declared state-owned resources
locks/                      zero or more realizations of this package
  <lock-id>/
    LOCK.json               lock identity, bindings, evidence, lifecycle
    inputs/state/           frozen state snapshot used by this realization
    ...                     lock-owned implementation and evidence artifacts
```

Dot-prefixed repository metadata is outside the semantic package. Conventional root presentation and community files, such as `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md`, may coexist but are non-normative: they cannot define or override logs, state, locks, or protocol selection. Other top-level directories, manifests, scripts, protocol directories, and target implementations are outside this protocol topology.

### 3.1 State entry

`state/STATE.json` contains:

```json
{
  "$schema": "meta-intent/0.1/state",
  "id": "example.package",
  "revision": "0.1.0-draft.1",
  "status": "draft",
  "document": "STATE.md",
  "logs": ["../logs/initial.md"],
  "protocol": {
    "id": "meta-intent",
    "revision": "0.1",
    "package": "meta-intent",
    "lock": "locks/protocol-0.1/LOCK.json",
    "artifactDigest": "sha256:..."
  },
  "resources": [],
  "activeLocks": [],
  "candidateLocks": []
}
```

`status` is `draft`, `approved`, or `retired`. Approval is an authority event, not a validator inference. File resources are stored under `state`; external resources use attributable URI objects. The state document should make goals, observable acceptance, resources and lifecycle, constraints, permissions, non-goals, optional hints, decisions, and tensions discoverable. Hints remain advisory unless explicitly promoted to a requirement.

### 3.2 Logs

`STATE.json.logs` selects the records that support the current projection. Selected logs are immutable once committed or bound by a lock. Corrections and changed decisions append a new log that names what it supersedes; they do not rewrite source history. Raw transcripts may be resources, but logs preserve only the detail needed to align facts, authority, decisions, and future maintenance. Useful negative provenance belongs here too: a verified no-change conclusion or rejected alternative should preserve its investigated scope, evidence, reason, and condition for reopening when that record can prevent repeated work or a plausible future mistake. Recording it does not imply that state or a realization changed.

### 3.3 Lock bundles

Each immediate non-dot child of `locks` is a bundle containing one `LOCK.json`. The directory may be empty when this package has no realization yet. Stored implementation and evidence artifacts remain inside their bundle. Inputs may reference selected state and logs; target identities may reference external reality. A lock never treats an external mutable path as a package-owned artifact.

Lock kinds are:

- `protocol`: a concrete local protocol implementation;
- `realization`: a target-specific implementation of package state.

Every lock binds package identity, contains frozen byte snapshots of both `state/STATE.json` and its normative document, names its selected source logs with digests, and lists every produced bundle artifact with a digest. Snapshots preserve the exact input after current state advances; they are evidence about an older state, not a competing current authority. An active or candidate lock must have snapshots equal to current state. An unreferenced historical lock may retain an older package revision and protocol while remaining independently verifiable.

Protocol selection is state, not a local lock. `state.protocol` points directly to the lock owned by the meta-intent package. The protocol validator checks that its implementation digest equals the digest selected by state, but this alone does not prove remote repository identity, authorship, or trust. For a meta-intent package, the owning package may be itself and the selected protocol lock is also a candidate or active realization because producing that protocol is the package's purpose.

Lifecycle status is `candidate`, `accepted`, `failed`, `stale`, or `retired`. `accepted` requires passed acceptance evidence and an exact authority-decision log. Candidate or failed locks cannot appear in `activeLocks`.

## 4. Authority and information flow

Authority descends in this order within its scope:

1. explicit user authority events and approved desired effects;
2. current approved or draft state;
3. the protocol selected by state as interpreter of package structure and operations;
4. active and candidate realization locks with their evidence;
5. generated artifacts, patches, reports, implementation hints, and runtime observations.

Lower layers may reveal tension but cannot silently redefine higher layers.

The strict change flow is:

```text
user feedback or proposed change
              |
              v
 investigate target and check facts
              |
              v
 report reality boundary and intent impact
              |
              v
 classify: verified no change / implementation / intent / reality / protocol
        |                                      |
        | verified no change                   | confirmed change
        v                                      v
 append useful why-not provenance    append fact-aligned log
        |                                      |
        v                                      v
 state and locks unchanged            update state or realization status
                                      |
                                      v
                         synthesize candidate lock
                                      |
                                      v
                        acceptance + authority event
                                      |
                                      v
                                activate
```

Unverified feedback and runtime observation remain provisional. A completed investigation may append durable provenance when its positive or negative conclusion has future decision value. Duplicate or trivial observations may point to an existing record instead of creating noise. Logging a conclusion does not itself authorize a state or realization change. Target code is downstream of checked facts, classification, and any required state or realization update.

### 4.1 Classification

- `verified_no_change`: evidence does not justify package, state, or realization change. Preserve a why-not record when its checked evidence, rejected alternative, or reopening condition has future value; otherwise link to an existing record or stop without manufacturing a semantic decision.
- `implementation_mismatch`: realization violates already explicit state; keep semantic state unchanged and repair or replace the realization.
- `intent_clarification`: desired semantics were omitted or mistranslated; obtain user confirmation, append a log, then revise state.
- `intent_revision`: the authorized user now wants a different effect; append the authority decision and revise state.
- `reality_tension`: requirements conflict with target facts, permissions, costs, or value trade-offs; explain intent consequences and request a user decision.
- `protocol_tension`: the selected protocol cannot faithfully express, compose, validate, or maintain the intent; preserve local state and escalate evidence to the canonical meta-intent lineage.

### 4.2 Decision boundary

An Agent may continue autonomously when investigation and reversible implementation stay within approved effects, permissions, cost, and acceptance. It requests a user decision when alternatives change user-visible semantics, weaken acceptance, require new permissions or persistent cost, expand authority, perform destructive or external actions, choose hidden precedence, or affect ambiguous shared ownership.

The Agent reports the checked constraint, feasible alternatives, and the effect of each on intent. It does not delegate ordinary evidence-resolvable implementation details to the user.

## 5. Installation

Installation is synthesis, not archive extraction:

1. apply the bootstrap kernel and structurally validate state and selected protocol;
2. inspect the target and establish an exact revision or equivalent fingerprint;
3. compare desired capabilities, resources, constraints, permissions, composition, and current locks with reality;
4. surface and classify tensions, obtaining user decisions where required;
5. append confirmed findings, including useful negative conclusions, and update state only when semantics or authority changed;
6. prepare a realization candidate in an isolated or reversible scope;
7. execute authorized acceptance observations;
8. retain last-good on failure or incomplete evidence;
9. on acceptance and required authority, activate the new lock and record its target, artifacts, evidence, limits, and predecessor.

An accepted lock is reusable only while every bound input and relevant target fact still matches.

## 6. Maintenance

Maintenance may be triggered by feedback or changes to state, protocol, target, resources, permissions, composition, artifacts, or evidence. The Agent re-investigates current reality and chooses one branch:

- `verified_no_change`: state and locks remain unchanged; useful negative provenance may be appended;
- `repair`: implementation changes preserve state and authority;
- `decision_required`: a user-owned tension blocks the next semantic step;
- `replace`: an accepted candidate becomes last-good;
- `retire`: the user withdraws the intent or realization;
- `blocked`: required evidence or authority is unavailable.

Last-good remains active until an accepted replacement exists, unless continued operation itself violates an explicit safety constraint. A patch that still applies is stale when its locked meaning, target, permissions, inputs, or evidence no longer match.

## 7. Composition and conflict

Packages compose through declared desired capabilities, claims, resources, ownership, constraints, and acceptance effects. Protocol compatibility only makes these declarations comparable.

Conflicts are never resolved by discovery order, filesystem order, or silent last-writer-wins. The Agent reports the packages and shared surface involved, why both cannot currently hold, feasible decomposition or precedence choices, and the user-visible consequence of each. Any acceptance criterion affected by another package is re-observed after composition.

## 8. Uninstall

Uninstall realizes the current target world without one package's desired contribution. The Agent inspects current ownership and drift, preserves unrelated later changes, synthesizes a removal candidate, and verifies that owned effects are gone. Ambiguous shared ownership or destructive removal becomes a translated user decision; uninstall never blindly reverses an obsolete historical diff.

## 9. Protocol feedback and governance

Verified problems are routed to the narrowest layer:

- realization issue: repair or replace one target realization;
- package-state issue: clarify or revise one package under its user's authority;
- protocol issue: submit a protocol-tension log to the canonical meta-intent lineage.

A protocol-tension report identifies package and protocol revisions, checked target facts, unrepresentable or unmaintainable intent, insufficiency of current protocol semantics, and consequences of candidate changes. It need not contain a full protocol implementation.

Repositories, forks, issues, pull requests, and experiments are decentralized evidence and proposal channels. They do not each become canonical meaning. Canonical maintainers evaluate evidence against approved meta-intent state, publish new immutable protocol identities or revisions, and state compatibility and migration consequences. Packages adopt a revision only by changing `state.protocol` and revalidating affected acceptance.

A protocol cannot approve its own semantic change. The trust root is an external authority event governed by meta-intent state. Signing, maintainer succession, and quorum remain protocol-governance tensions until specified by an approved revision.

## 10. Protocol evolution and self-hosting

A protocol candidate is a realization of meta-intent state. Evolution follows the normal information flow: investigated protocol tension, fact-aligned log, authorized meta-state revision when needed, candidate protocol lock, migration and conformance evidence, then explicit adoption.

For a self-hosted update from state `S0` and protocol `P0` to `S1` and `P1`, `P0` can interpret the existing package and assist migration; the new state points to `P1`, and `P1` binds `S1`. The switch is reviewed as one coherent revision. Old immutable revisions remain interpretable and are not silently rewritten.

The recursion terminates at user authority over desired meta-state and the fixed bootstrap kernel. Structural closure proves that references and bytes agree; it does not prove natural-language fulfillment, safety, authorship, authorization, or governance legitimacy.

## 11. Structural conformance

The bundled validator checks only mechanically decidable invariants:

- exact three semantic areas, allowed non-normative root presentation files, and required entry files;
- path containment, including resolved symbolic-link containment;
- state field shape, unique references, and area ownership;
- selected protocol owner, lock location, identity, revision, and artifact digest;
- concrete state, log, and artifact digests;
- current-lock equality with current state and historical-lock self-containment;
- lock bundle completeness for stored snapshots and artifacts;
- active/candidate lifecycle consistency;
- evidence required for `passed` acceptance;
- authority-log binding required for accepted locks and approved state.

It cannot decide whether prose expresses the user's real intent, evidence is truthful or sufficient, acceptance observations demonstrate the promised effect, an actor was genuinely authorized, code is safe, or packages are semantically compatible. Those claims require investigation, appropriate acceptance, and external authority.

Conformance tests are evidence about this validator implementation, not self-approval of the protocol. Independent evaluators should be used when semantic or supply-chain risk warrants them.
