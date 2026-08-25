# Deterministic runner preflight

The first manual run showed that a semantic reviewer can confuse the package host revision, the realization's governed source target, a state resource, and a second target described only by evidence. Before invoking an LLM, a deterministic orchestrator should resolve and digest an input-role manifest.

Minimum roles:

- package host: where the semantic package is currently stored;
- semantic root and exact state entry/document bytes;
- selected lock and its exact bytes;
- realization target: the immutable identity and governed paths named by the lock;
- state resources: observations or dependencies that are not automatically realization targets;
- secondary target effects: effects described by evidence but not mechanically bound as primary targets;
- executed observations: who ran them, against which identities, with which inaccessible scope;
- reviewer permissions and unavailable inputs.

The preflight should mechanically verify digests, target-path existence, and whether governed paths differ between the target commit and host revision. An LLM may interpret the resulting roles but must not infer them from ambient checkout layout when the manifest decides them.

Changing any state, lock, target, prompt, or relevant observation identity invalidates cached review evidence. A preflight manifest narrows role confusion; it does not prove evidence sufficiency or semantic alignment.
