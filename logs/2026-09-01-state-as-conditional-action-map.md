# STATE as a conditional action map

Date: 2026-09-01

## User correction

The user rejected a STATE that is only a minimal capability list. STATE is a complex and sufficiently detailed prompt or map for a future Agent: like an installation guide, it must direct implementation and relevant verification without relying on the original conversation.

Intent begins with the expected product direction, comparable to a README promise. That direction develops into committed features. LOG preserves the trade-offs and decisions by which capabilities were selected. Interaction with concrete reality then produces condition-specific detail, including forms and behavior that the user decides must remain even when they are secondary to the product direction.

The user emphasized that early intent is necessarily incomplete and may be coupled to the situation in which it was expressed. Deployment and feedback should make it more precise. If target conditions make a retained realization or behavior infeasible, the Agent asks the user to choose among consequences. If an unforeseen condition exposes a defect in an earlier principle, authorized refinement may split, combine, narrow, or replace that principle rather than treating the first wording as infallible.

## Required STATE semantics

STATE remains one current authority, but its contents distinguish three operational classes:

1. effects that must be realized and verified whenever the package applies;
2. problems or claims that must be avoided when their stated condition holds;
3. conditions that require investigation and a context-specific decision rather than a fixed universal action.

Every lower-order commitment remains traceable to the higher-order product direction it serves and to the decision or investigated condition that derived it. User-locked behavior belongs in STATE even when it describes concrete appearance or interaction. An accepted LOCK binds one exact realization and its evidence against that STATE; it does not move desired behavior out of STATE.

## Navigation

The normal presentation is one `STATE.md`. When a large product needs state-owned supporting material, `STATE.md` links directly to it; normative reading does not require a chain of documents. This one-jump preference limits physical navigation, not the semantic depth of derived intent.

## Scope boundary

“Sufficiently detailed” is action sufficiency, not a required word count or a license to copy implementation. STATE includes the distinctions, conditions and observable criteria a cold Agent needs to implement, install, verify and identify user-owned decisions. Exact bytes, commands and algorithms remain in a realization unless the user makes them part of correctness.
