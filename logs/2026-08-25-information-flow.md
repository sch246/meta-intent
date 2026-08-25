# Source record: intent information flow

Record ID: `SRC-2026-08-25-INFORMATION-FLOW`

Status: source provenance for the draft meta-intent. This is a fact-aligned selective record, not a verbatim transcript and not an independent architecture authority.

## User intent

The user identified the direction of information flow and the roles of user and Agent as load-bearing parts of the design.

- An intent package's intent is state: a maintained content realization of earlier dialogue.
- Its source is the dialogue in which the user expresses intent and the Agent reports tensions between that intent and observed reality.
- The record need not preserve every word, but it must remain aligned with what the user said, what the Agent actually observed, and what remains unresolved.
- When the user is dissatisfied with an effect, the default maintenance path should not begin by editing target code. The dissatisfaction should first enter the dialogue record, then update the intent description when it changes or clarifies the intended effect, and only then drive realization changes.

## Agent interpretation and reality boundary

The strict direction is accepted with one distinction: dissatisfaction does not always imply that normative intent changed.

1. The current realization may violate an already explicit acceptance criterion. This is an implementation mismatch: append the observation, keep the intent unchanged, invalidate or repair the realization.
2. The intent may have omitted or mistranslated what the user expected. This is an intent clarification: append the dialogue decision, revise the intent projection, then synthesize a new realization.
3. The user's desired outcome may have changed. This is an intent revision under user authority.
4. Reality may make the current requirements jointly infeasible or introduce a meaningful cost, permission, or value trade-off. The Agent translates that tension into effects on the intent and requests a user decision before revising it.

In all four cases, target code is downstream. A complaint must not jump directly from user feedback to an unexplained patch.

## Role boundary

- The user owns desired effects, value choices, acceptable trade-offs, and approval of normative intent changes.
- The Agent owns investigation, fact/evidence collection, feasibility analysis, tension translation, candidate synthesis, and authorized verification. It does not silently decide user preferences.
- Target code and runtime behavior provide reality evidence. They do not define the user's intent.
- The intent document is the current normative projection, not the complete source history.
- Dialogue records preserve the provenance needed to challenge or revise that projection.

## Unresolved

- How finely dialogue should be split into records.
- Whether every user complaint requires explicit reproduction before classification when reproduction is costly or subjective.
- How approval of a revised intent is represented before the protocol has a signing/trust model.
