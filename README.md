# meta-intent

`meta-intent` defines what an intent package is. An intent package is maintained with Agents to create and continuously maintain one project. Causal sources live in `logs`, current semantic authority lives in hierarchical `state`, and immutable `locks` retain exact realized versions and evidence.

In plain terms: this project exists to solve implementation debt and to survive continuously changing upstream and environment. `STATE` is a detailed installation-guide prompt — the materials and steps by which an Agent, reading the map against the environment actually in front of it, can always install successfully and adapt to different conditions. Because the user does not know exactly what they want either, the first installation map is necessarily incomplete: the Agent works as the translator between the user and reality, and each round of environment change and user feedback makes the intent more precise and the map more operable. Everything else is derived from that.

This README is a non-normative entry point. It does not define package meaning. Read the current [state](state/STATE.md), its machine-readable [entry](state/STATE.json), and the adopted [protocol 0.2](locks/protocol-0.2/PROTOCOL.md) for authority and interpretation.

Current STATE may evolve under the adopted protocol. Each adopted protocol revision remains an immutable protocol LOCK because other packages select its exact identity and digest. Passing validation proves structural consistency only; it does not adopt a successor or prove semantic fulfillment.

## Validate

```bash
node locks/protocol-0.2/bin/validate.mjs . locks/protocol-0.2/templates/intent-package locks/protocol-0.2/examples/dsh-right-sidebar
node --test locks/protocol-0.2/tests/validate.test.mjs
```

Passing these checks proves structural consistency only. It does not approve a future protocol revision or prove that natural-language intent is fulfilled. The accepted 0.2 bundle is immutable; use the reseal tool only while preparing a separate candidate bundle.
