# Phase A case 002 terminal result

Record ID: `SRC-2026-08-28-PHASE-A-CASE-002-TERMINAL-RESULT`

Status: final bounded experiment result. Case `PA-2026-08-28-PROJECTION-LOSS-002` ends as `partial`. This record executes the stop required by `SRC-2026-08-28-PHASE-A-CASE-002-TERMINATION-BOUNDARY`; no further retry, probe, apparatus revision, Case 003 or Phase B run follows from it. It changes no STATE, protocol, LOCK, acceptance status or `META-015`, and it is not selected by `state/STATE.json`.

Archived: 2026-09-01. Experiment evidence retained for audit; consulted during the LOG/STATE cleanup.

## Evidence and released commitments

Claude's terminal runner archive `case002-final-evidence.tar.gz` is 826,563 bytes, SHA-256 `27bc0693f926334b37b9dc7338e30b63a6f10627a30c30faaf672cb9b4b0102c`; all 84 manifest payloads verify. The evaluator release archive `case002-final-evaluation-release.tar.gz` is 22,759 bytes, SHA-256 `9555c886c8ee23eeefbe4c2378ac4c408fb734cc992c9f9686bb51a5a9db4e84`; it contains the released gold and salts, independent command reviews, independent validity outputs, probe adjudication and terminal evaluation, with its payload manifest.

The released original fact gold has SHA-256 `9bfb2854951e42adc5cd7c58b415c98a77c4eda4258423f35eba34077844ac67`. Its salt recomputes the preregistered commitment `ef96075b8a74a906c02a01e3adbddaa4e3e280959e48372d592111b540d7648b` under the frozen `salt || 0x00 || exact bytes` rule. The active v0.6 envelope has SHA-256 `3448de43d203c1286998e90795ef2a01659f7ffc63abee5be9ca36573e79361f`; its salt recomputes commitment `87471e1a732ee396c91574bbf92b4cf875aa30e270aab78d7580f450b21074dd`. The earlier v0.5 envelope remains superseded apparatus history and is not substituted for the active commitment.

Five of the absolute ceiling of eight participant launches were used: primary-1, primary-2, replay attempt 1, replay attempt 2 and one diagnostic probe for primary-2. Replay attempt 1 ended at the model API session limit without a final answer; its one frozen transient retry produced attempt 2. Unused launch capacity has no evidentiary or reopening meaning.

## Mechanical outcomes

| Arm | Boundary result | Mechanical outcome |
|---|---|---|
| primary-1 | deterministic `invalid`; 39/39 calls independently reviewed | `inconclusive` |
| primary-2 | deterministic `valid`; 42/42 calls independently reviewed | `partial` |
| full-history replay attempt 2 | deterministic `valid`; 53/53 calls independently reviewed | `partial` |
| direct-evidence probe for primary-2 | deterministic `indeterminate`; 18/18 calls independently reviewed; sole event blind-labelled `non-access-data` | `review-resolved-usable`, diagnostic-only |

Primary-1 wrote package-derived `git show` results to `/tmp/new_state.md` and `/tmp/old_state.md` and reread them outside its declared scratch root. Automatic `invalid` is not overridden. The isolation, future-fingerprint and network observations found no future or external fact ingress, but that separate observation does not rescue the arm.

Primary-2 named all seven removed resource IDs, recovered multiple exact atoms without contradiction and stated that selected source LOGs cannot recover every removed identity. It did not reproduce every parent-state identity field exactly: several full Git identities appeared only as shortened prefixes, while some kind, URI and candidate-lock mappings were omitted or paraphrased. Under the frozen literal rule, that is `partial`, not `pass`.

Replay read all 29 selected LOGs, recovered multiple removed facts without contradiction and reported the same selected-LOG coverage boundary. It omitted more required exact resource mappings and is also `partial`. A full replay therefore did not improve the mechanical classification over autonomous primary-2.

The aggregate `partial` retains primary-1 as inconclusive rather than averaging it away: it names the bounded evidence established independently by the valid primary and replay, both of which reached the same mechanical class. It is weaker than a replicated pass and does not claim that every primary route is usable.

The diagnostic probe received exact before/after `state/STATE.json` bytes. Its rendered prompt preserved the frozen template as an exact prefix and appended the two frozen byte sequences under neutral before/after labels. The preflight did not freeze that separator format, so this remains a reproducibility limitation; because the probe is diagnostic-only and cannot alter primary-2, it is not used to reclassify the primary.

The probe's deterministic `indeterminate` came only from `/root/deepseek-harness` appearing in a loop word list. A fresh blind reviewer bound all 18 calls and found that the string was grep pattern data while the filesystem operands stayed inside the isolated checkout. The experiment-local combined label is `review-resolved-usable`; deterministic validity remains reported as `indeterminate`.

With the direct before/after bytes available, the probe identified the contraction and found that the selected 2026-08-27 source record contains none of the deleted fact bytes. It also found that the full selected LOG corpus lacks multiple exact realization identities and candidate-lock paths. The primary shortfall is therefore not merely routing: some reconstructive identity content was not carried by the selected source records after contraction.

## Route, cost and comparison

Primary-2's first action was `ls` plus `git log --oneline -20`, not a STATE/LOG routing declaration. It then read current STATE, the contraction diff, eight selected LOGs in full, accepted-lock inputs and targeted repository searches. Its 42 tool calls reconstructed 184,178 result bytes; captured participant telemetry reported 66,828 output tokens over 443 seconds.

Replay also opened Git history first, then completely read all 29 selected LOGs before using the contraction diff, accepted-lock inputs and targeted searches. Its 53 tool calls reconstructed 211,084 result bytes; captured participant telemetry reported 77,470 output tokens over 361 seconds. Full replay consumed more result bytes and output tokens but remained `partial`.

This case therefore does not show efficient routing through the current STATE/LOG projection. It shows more narrowly that, at this historical boundary, an autonomous cold participant using Git history plus selected evidence could recover much of a contraction, while the selected LOG content did not preserve every exact identity mapping needed for complete reconstruction.

## Judgment boundary and result license

Participant claims about whether removed facts should return to STATE, whether the contraction was wise, whether identities remain applicable or accepted, and whether an index or new schema is warranted were not in fact gold. They are recorded only as semantic differences and are not hindsight-graded or adopted here.

The result license is one historical contraction, 29 selected LOGs, Claude Opus 5 under the frozen CLI/configuration, the C2.5 observed-network boundary and the 2026-08-28 run date. `partial` does not satisfy `META-015`, establish general cold-session retrieval, qualify the broader routing/surprise experiment, prescribe a STATE partition, index or operation schema, authorize a STATE/protocol/LOCK change, or start Phase B.

Case 002 is closed. Any future experiment or semantic change requires a new explicit user authority event.
