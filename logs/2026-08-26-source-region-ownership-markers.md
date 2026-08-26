# Source-region ownership markers

Record ID: `SRC-2026-08-26-SOURCE-REGION-OWNERSHIP-MARKERS`

Status: user-authorized intent revision and protocol-tension record. It updates the desired lifecycle semantics of meta-intent but does not modify or adopt a protocol realization.

## Trigger and authority

The user observed that intent-package realizations which intrude into shared host source should leave locally visible ownership information beside the modified code. A future Agent unfamiliar with the installation must be able to discover what the change is, why it exists, which realization owns it, and where its removal boundary lies.

The user then made two scope corrections:

1. A marker must be placed as close as practicable to the managed modification. A file-header declaration is sufficient only when the entire file is realization-owned intrusion.
2. Multiple packages may modify one file or one jointly determined region, so the representation needs explicit composition rather than one implicit owner or install-order precedence.

## Checked counterexample

The `dsh-warm-minimal` migration exposed both false-negative and false-positive risks:

- Five paths bound by candidate.4's manifest and target-side ownership receipt could be removed and verified cleanly.
- Six other Harness core/session hunks mention a preset bootstrap and duplicate turn repair, but they never appeared in the warm package's patch, lock target paths, or receipt. One comment even describes an `agent/created` listener while the evidenced warm implementation used `agent/inbox/inserted`.
- Therefore proximity and suggestive prose are not enough to prove ownership, while a path-level manifest alone is too coarse to explain regions in a shared file. Guessing that those six hunks belong to warm would risk deleting an independent repair.

This is evidence for a two-part contract: a locally discoverable region marker plus lock/receipt evidence that binds the marker and installed effect. Neither alone is sufficient authority for removal.

## Revised desired semantics

When a realization modifies source it does not exclusively own:

- every managed region has a stable, machine-recognizable marker at the nearest maintainable source location;
- the marker identifies a stable region, its owning package realization or composed owner set, and a concise purpose;
- separated modifications in one file use separated markers; a file-header marker covers the file only when the whole file is governed by that declaration;
- generated output is marked in the nearest maintained source and the realization records the source-to-output mapping;
- non-overlapping regions compose independently;
- a jointly determined region has one deterministic composed-owner representation rather than nested ambiguity or discovery-order precedence;
- uninstalling one owner of a composed region re-synthesizes the region for the remaining owners and never blindly deletes the whole region;
- missing, malformed, drifted, or contradictory markers trigger ownership investigation rather than automatic repair or removal.

Markers are target-side evidence and discovery aids. State remains semantic authority; locks and installation receipts bind concrete ownership, baselines, and effects.

## Candidate representation, not yet protocol authority

A concrete experiment should use native source comments containing delimited records such as:

```text
@meta-intent:begin {"region":"<stable-id>","mode":"exclusive|composed","owners":[{"package":"<id>","realization":"<lock-id>"}],"purpose":"<short text>"}
...managed source region...
@meta-intent:end {"region":"<stable-id>"}
```

The comment syntax is language-specific; the payload and merge semantics are not. Owner arrays are sorted and deduplicated. Exact overlapping contributions require `mode: "composed"`; removing one owner invokes recomposition from remaining realizations. Independent nested subregions may remain separate only when their byte and lifecycle boundaries do not overlap.

The exact encoding remains provisional until an isolated multi-package lifecycle experiment demonstrates:

1. two packages installing non-overlapping regions in one file;
2. two packages composing one shared region without last-writer-wins;
3. an unrelated later edit surviving maintenance and uninstall;
4. one owner being removed while the remaining owner is correctly re-synthesized;
5. missing or edited markers producing a safe decision boundary;
6. generated-source mapping remaining discoverable.

## Classification and consequence

This is an `intent_revision`: local source-region attribution and proximity are now desired meta-intent lifecycle properties. It is also a `protocol_tension`: protocol 0.2 requires ownership-preserving uninstall but defines neither a source-region marker nor composed installed-effect representation. Accepted protocol 0.2 remains immutable and active last-good. A successor candidate must retain this record, test the provisional representation, and define how region markers, locks, receipts, drift, composition, and removal interact before requesting adoption.
