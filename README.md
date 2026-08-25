# meta-intent 0.2 candidate

`meta-intent` is a self-hosted draft of an Agent-maintained intent-package protocol. An intent package keeps provenance in `logs`, current authority in `state`, and concrete realizations in `locks`; it may contain no target implementation code.

This README is a non-normative entry point. It does not define package meaning. Read the current [state](state/STATE.md), its machine-readable [entry](state/STATE.json), and the selected [protocol candidate](locks/protocol-0.2/PROTOCOL.md) for authority and interpretation.

The 0.2 candidate adds standalone/embedded discovery, reference-backed Git realizations, package URI declaration, historical last-good semantics, and mechanical resealing. It still has no accepted real realization lifecycle; passing structural checks does not close that gap.

## Validate

```bash
node locks/protocol-0.2/bin/reseal.mjs
node locks/protocol-0.2/bin/validate.mjs . locks/protocol-0.2/templates/intent-package locks/protocol-0.2/examples/dsh-right-sidebar
node --test locks/protocol-0.2/tests/validate.test.mjs
```

Passing these checks proves structural consistency only. It does not approve the protocol or prove that its natural-language intent is fulfilled.
