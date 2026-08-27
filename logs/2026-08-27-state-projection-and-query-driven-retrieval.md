# STATE projection reliability and query-driven retrieval

Record ID: `SRC-2026-08-27-STATE-PROJECTION-QUERY-RETRIEVAL`

Status: investigation record with one rejected alternative. It revises no normative STATE, adopts no protocol change, accepts no realization, and claims no passed experiment. It refines how earlier records should be read; it does not supersede them.

## Concern investigated

STATE must remain trustworthy enough that a reader who consults it believes they understand the situation, while not collapsing as the package grows. STATE is in part a projection of LOG, yet STATE itself is beginning to need navigation. Cold-session retrieval faces the same problem: establishing sufficient trust within a bounded reading budget.

Even under an ideal constant compression ratio, where the number of index layers grows only logarithmically with the number of records, projection faithfulness remains an independent problem. Confidence in a top layer depends on the faithfulness of the layers beneath it, and faithfulness is exactly the property `PROTOCOL.md` section 11 states no structural check can decide. Controlling depth alone therefore cannot solve projection trust.

## Distinctions checked

An earlier formulation in this exchange claimed that authority decisions are new information absent from LOG and recoverable only from STATE. That is wrong and inverts the established information flow. A user decision is itself a consequential exchange and belongs in a source record; the accepted-lock and approved-state rules already bind an authority decision log by digest. STATE projects only the conclusion that still carries normative force.

The corrected distinction is:

- **Authority event** — originates in LOG as source provenance; STATE projects its currently effective conclusion.
- **Semantic projection** — an Agent organizes source material under the current scope and question. It is not a mechanical function of LOG and cannot be recomputed by rule; regenerating it requires judgment about what currently matters.
- **Navigation view** — derived for a query, freely regenerable, carrying no authority.

Only the third is safely disposable. The second is lossy on both sides: it can neither be trusted as complete nor discarded as recoverable, which is why its maintenance remains a genuine cost rather than a caching problem.

## Sufficiency has a scope

Treating STATE as sufficient for knowledge cannot scale, because that requirement grows with everything the project has ever established. Replacing sufficiency with boundary-marking alone is also wrong, because it would license a STATE that no longer says what to build.

The usable formulation is that **STATE is sufficient for action, not sufficient for knowledge**. It must let an Agent determine what is to be realized, what may not be sacrificed, how acceptance is observed, and when investigation is required. It need not carry every fact or its history. Knowing what one does not yet know is part of that action sufficiency, not a substitute for it.

## Inclusion criterion

An earlier proposal in this exchange held that only counter-intuitive content earns a place in STATE. That criterion is too strong: it optimizes for novelty rather than for the failure it should prevent.

The criterion that matches the failure is: **if this were omitted, could an implementation the user would reject still be claimed to satisfy acceptance?** An obvious-sounding user floor can qualify. In the bundled sidebar example, a requirement that the surface present contributed content reads as trivial, yet without it an empty shell could still satisfy the layout, action, and lifecycle criteria and be reported as passing.

This is the same family as the recorded `META-013` weakness, where zero tested instances can satisfy a universally quantified claim. Both are cases of an absence being reported as success. Naming the family does not resolve it here.

## Bounded value of spot-checking

Item-level traceability from a STATE claim to its source lowers the cost of taking over a package and makes disagreement locatable. It produces confidence, not completeness: verifying several entries does not license an inference that nothing is missing, and it confers no authority. It is a handover aid, not evidence of a complete projection.

## Rejected alternative: string-reachability check on STATE contraction

A mechanical check was proposed and is rejected. It would have required that any named identifier removed from STATE — commit id, path, resource id — remain textually present somewhere in the selected LOG set, failing the validator otherwise.

Checked reasons for rejection:

- Textual presence establishes only that characters persist. It cannot establish that the identifier names a current fact rather than a repudiated one, what role a referenced candidate lock played, whether it has been superseded, or whether its surrounding context is still interpretable. A single occurrence inside a record stating that a commit was wrong would satisfy it.
- Its false-pass rate rises as history grows, because any given string becomes more likely to appear somewhere in an append-only corpus. The check therefore weakens precisely as the projection-loss risk it addresses grows. A guarantee that decays with scale is worse than no guarantee, because its name suggests otherwise.
- It would manufacture structural assurance for a property that is semantic, which is the failure mode this repository already guards against elsewhere.

Reopening condition: a concrete projection-loss instance that adversarial review demonstrably fails to catch, together with evidence that a mechanical property would have caught it without the above defects.

## Bounded defence already available

The existing `counterexample-review` lens can provide a bounded defence without new machinery. When STATE contracts, the before/after diff can be supplied as review input with the question: which content no longer appears in the current projection, and for each, was it explicitly cancelled, is it still recoverable from source records, or is it being silently deleted?

This is not speculative: the resource loss recorded in `SRC-2026-08-27-ATTENTION-PROJECTION-CORRECTION` was found through a fresh session reading under a specific question while structural validation passed throughout. One successful discovery does not establish complete future coverage, and the discovery path need not be frozen into a rule to be reused.

## Next step

Run a query-driven cold-session experiment. Several cold Agents begin with only the bootstrap entry and current STATE in their initial context, retain read-only access to the repository, and decide which source records to retrieve. Observe for each:

- which source records it chooses to read;
- whether it recovers the causal chain relevant to its question;
- what it omits;
- whether it can state what it has not yet covered;
- how its result compares with full-history replay.

The object of study is how a question travels through STATE and LOG, not how many layers a structure should have. Observed omissions decide whether any persistent structure is warranted.

Until that evidence exists, do not presuppose a STATE partition format, a string invariant, or a new index layer. No such structure is introduced by this record.
