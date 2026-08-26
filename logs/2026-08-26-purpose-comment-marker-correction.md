# Purpose-comment marker correction

Record ID: `SRC-2026-08-26-PURPOSE-COMMENT-MARKER-CORRECTION`

Status: user-authorized correction superseding the JSON payload proposed in the preceding locator simplification record. Protocol 0.2 remains unchanged.

## Correction

After comparing human and machine needs, the user clarified that everything after the package locator should read like an ordinary comment. The preferred minimal form is Lisp-like, without quoted keys or values:

```text
@meta-intent:begin dsh-right-sidebar (purpose: verify transient details visibility across session transitions)
...source...
@meta-intent:end dsh-right-sidebar
```

If a future region genuinely needs another navigation hint, it may append another parenthesized clause such as `(key: value)`. No key should be added merely because a schema can represent it. Current practice needs only `purpose`.

## Machine boundary

Mechanical tooling recognizes only the `begin`/`end` token and package id as the stable boundary contract, then checks package-relative balance. The parenthesized purpose may be retained and displayed as human/Agent guidance, but it is ordinary comment text rather than ownership authority or a general data language.

State, locks, receipts, Git evidence, and current drift carry the structured facts needed for realization binding and safe removal. The Agent, not the comment parser, decides what the code means and how overlapping packages should be maintained or re-synthesized.
