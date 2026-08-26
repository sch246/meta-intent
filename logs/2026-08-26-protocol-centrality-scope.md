# Protocol centrality scope clarification

Record ID: `SRC-2026-08-26-PROTOCOL-CENTRALITY-SCOPE`

Status: user-authorized intent clarification. It supersedes only the unscoped reading of “canonical meaning and authority” in `SRC-2026-08-25-PUBLICATION-CENTRALITY` and `SRC-2026-08-25-CENTRALITY-CLARIFICATION`; their source statements and decisions otherwise remain in force. It does not adopt a protocol revision, transfer authority, publish changes, or authorize external Git actions.

## Trigger

The user asked whether protocol centrality is actually part of meta-intent, then clarified the design style: keep an extremely small core and derive other conclusions from it. The user delegated improvement of meta-intent according to that model.

## Investigated distinction

The earlier statement that each protocol has one fully centralized canonical meaning and authority compressed several scopes:

- immutable protocol identity and revision meaning;
- authority to choose a successor within one canonical lineage;
- each downstream package user's authority over that package;
- runtime and authority-holder availability.

Protocol 0.2 already supplies the required derivation rules: authority is scoped, lower layers cannot manufacture higher authority, each package user owns that package's desired effects and approval, protocol adoption is explicit, and immutable accepted locks remain usable last-good. Therefore the availability consequences do not require a new protocol mechanism.

## Clarified core

1. Each immutable protocol identity and revision has one canonical meaning. A fork with different meaning is a distinct lineage unless the existing canonical authority adopts it as a successor.
2. Within `sch246/meta-intent`, authority to choose a canonical successor remains with the user who created this lineage until that user explicitly delegates or transfers a defined scope.
3. Each intent-package user owns that package's intent, protocol adoption, permissions, value decisions and realization approval. Lineage authority does not approve those decisions on the package user's behalf.

The following are derived rather than additional protocol primitives:

- existing revisions remain interpretable when the lineage authority is unavailable;
- ordinary package work does not depend on the protocol author being online;
- only a decision inside the unavailable authority's scope becomes `blocked`;
- silence, timeout, conformance, signatures, implementation access, contributor agreement and fork existence cannot create delegation or approval.

## Resulting action

Clarify the current meta-intent state and preserve protocol 0.2 as accepted active interpreter. Do not create a protocol successor merely to restate these consequences. Criterion-coverage formats, bootstrap markers, transactional CAS, signing and semantic-review storage remain separate investigations; they should enter the core only if evidence shows that the existing derivation rules cannot express a required outcome.
