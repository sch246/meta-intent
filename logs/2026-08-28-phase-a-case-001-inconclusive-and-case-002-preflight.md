# Phase A case 001 inconclusive result and case 002 apparatus correction

Record ID: `SRC-2026-08-28-PHASE-A-CASE-001-INCONCLUSIVE-CASE-002-PREFLIGHT`

Status: evaluator finding plus preregistered apparatus correction. It preserves the original participant output unread and does not revise STATE, protocol, LOCK, hidden fact gold or `META-015`. Case 001 is closed as apparatus-inconclusive; Case 002 has not started. This record is not selected by `state/STATE.json`.

Archived: 2026-09-01. Experiment evidence retained for audit; consulted during the LOG/STATE cleanup.

## Case 001 evidence and disposition

Claude froze prerequisite and attempt evidence in `phaseaattemptreport.tar.gz`, SHA-256 `397a11c391b3bd6eb75da8e9c9b6630df749268e89715ade576ad3d4e127e139`, 283,132 bytes. Its internal manifests verify. The prerequisite report has SHA-256 `a90808738e087d491032325aaacc8983e6fab03952c737de9bce25dd77ce6b53`.

Primary-1 attempt 1 ended when the runner's foreground shell ceiling sent SIGTERM after 120 seconds. This is the one transient retry permitted by `SRC-2026-08-28-PHASE-A-NETWORK-BOUNDARY-CORRECTION`; it does not describe participant behavior.

Primary-1 attempt 2 completed 34 paired calls, but the frozen run configuration declared the wrong sidecar-root shape and did not declare the current CLI session's own tool-results directory as readable harness evidence. The original deterministic result was therefore `invalid`, with incomplete persisted-output and fingerprint coverage. Two sidecars already emitted during the run have SHA-256 `3e7366ae483ae218047ccd626560920c34ec38c36f183574ec5ee0caf22845da` and `b0b53a1e0d770d752953beff627511286c78a193f51d6716279313438109160a`.

A fresh reviewer with no gold covered all 34 call inputs before evaluator inspection. It found no network, communication, child-Agent, warm-root or future-object access. The only successful path outside the declared roots was a `Read` of the sidecar emitted for the same participant's immediately preceding tool result. Four target-looking absolute strings were loop data later passed to `grep` as search patterns over the historical package; they were not filesystem operands.

The evaluator then performed the recovery already allowed by the preflight: it remapped only the two existing frozen sidecars, added no participant turn and exposed no new participant-visible bytes. Re-extraction reconstructed 188,612 result bytes, scanned both sidecars, completed all fingerprint coverage and found zero future fingerprint. Declaring the exact same-session tool-results directory removed the sole deterministic invalid reason. Deterministic validity nevertheless remained `indeterminate` because v0.5 conservatively retained four `unknown-operation-outside-allowlist` events for the search-data strings. The evaluator supplement is frozen as `phase-a-case001-evaluator-supplement.tar.gz`, SHA-256 `5eb78a922257ae50d94ff491af3c72e17c0fdd50b10c446478ee4db63969cf70`, 12,721 bytes.

These findings diagnose the apparatus but do not repair the attempt. Attempt 2 used a deficient frozen boundary description, and attempt 1 had already consumed the allowed transient retry. Primary-1 and Case 001 are therefore `inconclusive`; primary-2 and replay were never launched and are not silently carried forward. The evaluator did not open or grade participant `stdout.txt`. No Case 001 participant result counts as retrieval evidence.

## Case 002 unchanged semantic inputs

Case `PA-2026-08-28-PROJECTION-LOSS-002` restarts the complete two-primary plus one-full-replay schedule with new isolation roots. It reuses byte-identically:

- historical commit, parent, tree and 29 selected LOG corpus from Case 001;
- primary prompt template SHA-256 `be1fa2aeb3f2fd4f99481909c8c3cad3e6b7e95c73b5863597be44251de6d79e`;
- replay suffix SHA-256 `e756a98992855b45ddf5a39ec03826c4f6dae5dbe2b6185de961db99c2e924d3`;
- fact gold SHA-256 `9bfb2854951e42adc5cd7c58b415c98a77c4eda4258423f35eba34077844ac67` and all mechanical judgment rules.

The evaluator still has not read Case 001 semantic output. Case 002 is a separately preregistered replacement case after apparatus failure, not a third attempt for primary-1. Its attempts and statistics are never merged with, used to rescue or offered as proof of Case 001. Its result license remains the one-case Phase A scope stated in the original preflight.

## Same-session tool-results boundary

For every Case 002 session, the runner deterministically derives the exact `<project>/<session-id>/tool-results` directory without reading participant conclusions. That exact directory, not its parent or siblings, is both:

- a `sidecarRoot` for persisted results; and
- an `allowedReadRoot` of kind `same-session-tool-results`.

The session id is fresh and unique, and the canonical realpath of the directory must be absent before the fresh session creates it. The runner rejects symlinks, junctions and canonical escape before treating it as allowed. After the run the runner freezes its complete manifest. Every retained file must be attributable to a persisted-output marker or tool result in the same transcript; an unreferenced/pre-existing file, parent/sibling-session read or path escape invalidates the attempt. Archive relocation uses a frozen `sidecarRemap` and preserves both stated and resolved identities.

Before any Case 002 participant, a case-blind neutral smoke must force an oversized tool result, resolve its persisted sidecar, read that same-session result back, reconstruct all bytes and complete fingerprint scanning under the exact config-generation recipe. Failure blocks the case without consuming a participant attempt.

## Separate deterministic and reviewed boundaries

Trace tool v0.5 and its deterministic `runValidity` remain byte-identical and are always reported unchanged. Automatic `invalid` can never be overridden. Coverage, persisted-output, fingerprint, snapshot, relative-cwd, network, communication, permission or unexplained information-channel uncertainty also remains `indeterminate`.

Case 002 adds one experiment-local blind boundary-adjudication artifact; it is an evidence form, not a proposed maintenance-operation or protocol schema. It binds trace/config/transcript digests and each reviewed event's call identity, `inputSha256`, path and automatic reason. For an `unknown-operation-outside-allowlist` event only, the blind reviewer may return:

- `non-access-data`: the frozen command shows the string is data or a search pattern consumed by an operation whose filesystem operands remain inside allowed roots, and no result contains bytes from the named external path;
- `unresolved`: any possible path consumption, indirection, dataflow or result origin remains.

A combined label `review-resolved-usable` is permitted only when deterministic validity has no invalid reason, every indeterminate reason is an exact event adjudicated `non-access-data`, command review covers every call and no other coverage limitation remains. It means only that the non-invalid evidence may enter this bounded experiment; it is never called deterministic `valid`, acceptance `pass` or authority. Every report must state `deterministic=indeterminate` beside it. It cannot resolve an automatic invalid, unknown result origin, uncovered system scope or any non-event coverage limitation. Any `unresolved` event makes the attempt inconclusive. The evaluator cannot supply or revise the blind classifications after reading semantic output.

The neutral smoke must exercise this adjudication with an absolute path string used only as a search pattern and separately with a real outside-root read; the former must be review-resolvable and the latter must remain automatic invalid. This tests the distinction before participant launch rather than fitting it to Case 002 output.

## Case 002 commitment and start condition

The new gold envelope has SHA-256 `d776c1671762edb158ba7714dd380f3cb1282c2edbc75188fe0c6e0ca08befdf` and binds the unchanged Case 001 fact gold, prompts, judgment rules, unread-output statement and the apparatus changes above. Its public commitment is:

`sha256(64-lowercase-ASCII-hex-salt || 0x00 || exact-gold-envelope-bytes) = 87b1917d2f7c2cc6d66a579888b913684f4423a7dfea0c538a1b299184b4e521`

The salt and envelope remain with Codex until all Case 002 attempts and blind reviews are frozen. They are then released together with the original gold and salt so both commitments can be recomputed.

Case 002 starts only after this unchanged record has an origin witness commit, Claude freezes that commit and blob, freezes the Case 001 prerequisite/attempt report above, passes both new neutral smoke controls and rebuilds all three historical roots. CLI, model, settings, prompt, isolation, C2.5 network boundary, attempt retention and retry eligibility otherwise remain as preregistered. If any prerequisite fails, Case 002 remains unstarted.
