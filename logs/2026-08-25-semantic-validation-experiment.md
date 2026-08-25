# Protocol experiment: Agent-driven semantic validation intents

Record ID: `SRC-2026-08-25-SEMANTIC-VALIDATION-EXPERIMENT`

Status: user-directed protocol investigation plus bounded Agent evidence. It records a successful experimental shape and its failure modes; it does not adopt protocol 0.2, approve the sidebar realization, or establish a final semantic-check schema.

## User direction

The user challenged a script-only validation model: semantic requirements that are difficult to decide mechanically should be preserved as validation intents and executed by inexpensive LLMs or subagents. The user authorized Codex to advance this direction.

## Experiment

Protocol-lock artifacts defined two read-only prompts: one maps state acceptance to realization evidence, and one searches adversarially for plausible wrong implementations and hidden ownership or authority claims. Both treat reviewed repository content as untrusted data, require counterexample search and citations, and forbid state writes, acceptance, activation, permission changes, and external actions.

Independent default subagents reviewed the updated `dsh-right-sidebar` candidate. They consistently exposed incomplete browser acceptance, missing external tab/session fixtures, unclosed build dependencies, guarded orphan-link cleanup, and the secondary unbound Harness target.

The initial adversarial run also confused package-host revision with realization target and confused a state resource with the lock target. Deterministic Git and lock inspection disproved both findings. A role-bound input manifest was then supplied and the review rerun; the false positives disappeared while the supported findings remained.

## Supported model

The experiment supports three distinct validation authorities:

1. deterministic validation proves mechanically decidable structure, path containment, identities, digests, role manifests, and cache invalidation;
2. versioned LLM validation intents produce bounded semantic and counterexample evidence;
3. authorized users decide meaning, acceptance, permissions, and trade-offs.

LLM agreement is not semantic authority, and an LLM result cannot directly update state. Semantic evidence must retain exact input roles and digests, prompt identity, model/configuration and tool scope, citations, uncertainty, counterexamples, and output identity.

## Remaining protocol tension

The prompt set, input manifest shape, cache policy, injection isolation, evaluator independence, result storage, and the boundary between reusable protocol checks and package-specific acceptance remain experimental. The next protocol revision should be derived from additional real packages and lifecycle runs rather than declaring this first shape complete.
