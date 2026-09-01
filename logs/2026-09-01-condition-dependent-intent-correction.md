# Condition-dependent intent correction

Date: 2026-09-01

## Conditional STATE

The user corrected the third operational STATE class recorded in `2026-09-01-state-as-conditional-action-map.md`. It does not mean “a condition that requires investigation or a user decision.” It is a state relation: under condition C, the desired product state includes E. The condition may be a concrete framework, implementation property or product concept.

For example, a user may require behavior X when the product uses framework Y because Y exposes the concept to which X applies. If a later target does not use Y and has no equivalent concept, X is inapplicable; the Agent must not recreate Y's concept merely to satisfy the words of an old STATE. If the condition is present, the desired effect remains mandatory.

## Condition-change action

Changing conditions are a separate maintenance input, not another kind of STATE. When target reality moves from C0 to C1, the Agent reprojects current STATE from the higher-order product direction, selected LOG decisions and checked new reality. If existing conditional branches already express C1, their applicability changes while their meaning need not be rewritten. If C1 was not anticipated, or evidence shows the old derivation was inaccurate, the Agent appends a fact-aligned LOG and revises STATE with the new or corrected conditional relation.

Only after that state projection does realization maintenance decide whether an existing LOCK remains applicable, whether a replacement is needed and what can be verified. A user decision is one possible branch when the new derivation contains a value trade-off; it is not the definition of conditional STATE or of condition-change handling.

This record supersedes only the third-class wording in `2026-09-01-state-as-conditional-action-map.md` and distinguishes the state relation from the maintenance action triggered by changed conditions. Its product-map, derivation, locked-behavior, one-document and action-sufficiency decisions remain selected.
