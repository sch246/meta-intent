# Agent entry

This repository is the canonical meta-intent package.

- Read `state/STATE.json` and its selected protocol before changing package semantics or realizations.
- `logs/` preserves sources and investigated tensions; `state/` is current semantic authority; `locks/` contains concrete protocol realizations.
- Protocol 0.2 is adopted. Validator success is evidence, not authority to adopt a future revision.
- Do not reseal or mutate an accepted protocol bundle. Prepare state or protocol changes in a separate candidate bundle and use its reseal command before adoption.
- Protocol adoption, publication changes, licensing, destructive migration, and external Git actions require explicit user authority.
