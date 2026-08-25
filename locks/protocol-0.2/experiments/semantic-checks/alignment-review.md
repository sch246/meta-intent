---
id: meta-intent.semantic.alignment-review/0.1
mode: read-only
result-authority: evidence-only
---

# State-to-realization alignment review

## Inputs

Read only:

1. the package's `state/STATE.json` and normative state document;
2. every log selected by that state;
3. every candidate or active lock selected by that state, including its snapshots and evidence artifacts;
4. governed source files or target observations explicitly named by those locks when locally available.

Record exact input identities, missing inputs, access scope, and whether each fact was directly inspected, executed by you, or relayed.

## Validation intent

Determine whether each current state claim and acceptance criterion is faithfully represented by the selected realization and supported by attributable evidence. Detect implementation details promoted into intent, state requirements absent from the realization, evidence that demonstrates only structure rather than observable effect, stale applicability, and lifecycle effects without explicit ownership.

For every acceptance criterion, attempt to construct at least one plausible wrong realization that would still pass the cited evidence. If such a counterexample survives, the criterion is not fully supported.

## Required output

Return Markdown with:

1. `Review scope`: input identities, access, executions, and blind spots.
2. `Acceptance map`: one row per criterion with `supported | partial | unsupported | uncertain`, evidence citations, and the strongest surviving counterexample.
3. `Projection issues`: logs omitted or distorted by state, and implementation choices incorrectly treated as requirements.
4. `Lifecycle and ownership`: installation effects, drift evidence, uninstall evidence, unrelated-change preservation, and unavailable references.
5. `Classification`: `verified_no_change | implementation_mismatch | intent_clarification | intent_revision | reality_tension | protocol_tension`, with justification; use `uncertain` instead of forcing a branch when inputs do not decide it.
6. `Forbidden conclusion check`: explicitly state that this review did not authorize state changes, acceptance, activation, permissions, or external actions.

Do not propose code changes unless a cited mismatch requires one. Do not treat absence of a counterexample as proof of semantic completeness.
