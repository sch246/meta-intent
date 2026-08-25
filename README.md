# meta-intent 0.2

`meta-intent` is a self-hosted draft of an Agent-maintained intent-package protocol. An intent package keeps provenance in `logs`, current authority in `state`, and concrete realizations in `locks`; it may contain no target implementation code.

This README is a non-normative entry point. It does not define package meaning. Read the current [state](state/STATE.md), its machine-readable [entry](state/STATE.json), and the adopted [protocol 0.2](locks/protocol-0.2/PROTOCOL.md) for authority and interpretation.

Protocol 0.2 defines standalone/embedded discovery, reference-backed Git realizations, package URI declaration, historical last-good semantics, and mechanical sealing for candidates. It is adopted with explicit open tensions; bounded sidebar lifecycle and live-shell evidence does not imply that every realization or compatibility path is accepted.

## Validate

```bash
node locks/protocol-0.2/bin/validate.mjs . locks/protocol-0.2/templates/intent-package locks/protocol-0.2/examples/dsh-right-sidebar
node --test locks/protocol-0.2/tests/validate.test.mjs
```

Passing these checks proves structural consistency only. It does not approve a future protocol revision or prove that natural-language intent is fulfilled. The accepted 0.2 bundle is immutable; use the reseal tool only while preparing a separate candidate bundle.
