# Source marker locator simplification

Record ID: `SRC-2026-08-26-MARKER-LOCATOR-SIMPLIFICATION`

Status: user-authorized correction to the provisional source-marker practice. Protocol 0.2 remains unchanged and active.

## User correction

The user judged the first JSON-heavy representation too detailed for its actual job. An intrusive marker usually helps an Agent locate foreign semantics; the Agent must still inspect code, Git history, state, locks, receipts, and current drift before deciding what the region means or how it may be changed.

The user proposed one-line package boundaries that can overlap:

```text
// @meta-intent:begin dsh-right-sidebar (purpose: ...)
// @meta-intent:begin another-package (purpose: ...)
...shared source...
// @meta-intent:end dsh-right-sidebar
// @meta-intent:end another-package
```

The user also observed that JSON remains useful for mechanical validation.

## Revised provisional practice

Use the package id as the first human-visible token, retain only a small JSON locator on `begin`, and keep `end` minimal:

```text
@meta-intent:begin <package-id> {"region":"<stable-id>","purpose":"<short locator text>"}
...managed or shared source...
@meta-intent:end <package-id>
```

- The host language supplies the native comment wrapper.
- `region` and `purpose` help an unfamiliar Agent navigate. They do not encode authority or a complete uninstall algorithm.
- Realization ids, ownership mode, distributed-part ids, baselines, digests, generated mappings, and removal provenance belong in state, locks, and installation receipts instead of being repeated beside every hunk.
- Boundaries pair per package, not through one global nesting stack. Therefore packages may overlap in the order `begin A`, `begin B`, `end A`, `end B`.
- Mechanical validation may parse the JSON and check package-relative boundary balance. It must not infer that a balanced marker authorizes mutation or removal.
- A missing, malformed, or contradictory marker is a reason for Agent investigation. A present marker is only a locator and evidence lead.

## Consequence

The two current invasive package realizations should practice this lighter form. Generated aggregation remains source-derived rather than statically owned. True shared-region removal still requires Agent re-synthesis from the remaining packages; crossing marker boundaries merely make the overlap visible.
