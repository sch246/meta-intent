# meta-intent 0.1

`meta-intent` is a self-hosted draft of an Agent-maintained intent-package protocol. An intent package keeps provenance in `logs`, current authority in `state`, and concrete realizations in `locks`; it may contain no target implementation code.

This README is a non-normative entry point. It does not define package meaning. Read the current [state](state/STATE.md), its machine-readable [entry](state/STATE.json), and the selected [protocol candidate](locks/protocol-0.1/PROTOCOL.md) for authority and interpretation.

The 0.1 candidate deliberately stays small: no lightweight package mode, no package registry, and no LLM semantic-network runtime. The latter is preserved as an advanced design discussion in the selected logs rather than implied as settled protocol behavior.

## Validate

```bash
node locks/protocol-0.1/bin/validate.mjs . locks/protocol-0.1/templates/intent-package locks/protocol-0.1/examples/dsh-right-sidebar
node --test locks/protocol-0.1/tests/validate.test.mjs
```

Passing these checks proves structural consistency only. It does not approve the protocol or prove that its natural-language intent is fulfilled.
