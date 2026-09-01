# Phase A case 002 structured-tool boundary correction

Record ID: `SRC-2026-08-28-PHASE-A-CASE-002-STRUCTURED-TOOL-BOUNDARY-CORRECTION`

Status: preregistered apparatus correction before participant launch. It supersedes only the Case 002 trace-tool identity and corresponding smoke expectation in `SRC-2026-08-28-PHASE-A-CASE-001-INCONCLUSIVE-CASE-002-PREFLIGHT`. It does not revise semantic input, fact gold, prompt, judgment rules, STATE, protocol, LOCK or `META-015`. Case 002 remains unstarted, and this record is not selected by `state/STATE.json`.

Archived: 2026-09-01. Experiment evidence retained for audit; consulted during the LOG/STATE cleanup.

## Smoke blocker and diagnosis

Claude froze the case-blind smoke and counterexamples as `case002smokeblocker.tar.gz`, SHA-256 `99cf3bb791521f90160efab421a3fb79679b7d13d89084d18e6bee41015574b9`. Every payload digest in its manifest verifies except the manifest's self-entry, which incorrectly names the empty-file digest; the outer archive digest and individually verified payload digests are the integrity evidence used here.

The same-session tool-results control succeeded: six paired calls reconstructed 138,458 result bytes from 74,558 captured bytes, resolved one 66,093-byte sidecar, completed fingerprint scanning and produced no external-path event for three reads of that exact same-session directory. A real structured `Read` of `/etc/os-release` remained automatic `invalid`.

The remaining blocker was a v0.5 classification defect. v0.5 recursively discovered absolute-path-shaped strings in structured inputs and then assigned one operation from the whole tool. Consequently:

- `Grep {pattern:"/root/absent-target-xyz", path:"<allowed-root>"}` classified both fields as `read/structured` and became automatic `invalid`;
- shell `grep -rn "/root/absent-target-xyz" .` classified the same search string as `literal/program-or-pattern` and remained `valid`;
- `Read {file_path:"/etc/os-release"}` correctly remained an external read and automatic `invalid`.

The differing verdict depended only on participant tool choice, not information flow. This falsified the Case 002 smoke requirement under v0.5. No Case 002 participant was launched and no attempt was consumed.

## Trace contract 0.6

`meta-intent-trace-tools-v0.6.tar.gz`, SHA-256 `b0608388095b498a76be8947b9785e1d14ca29c154cbb11d1c68da4509c666dd`, 34,153 bytes, replaces v0.5 for Case 002 only. Its internal ten-entry manifest verifies and its test suite passes 44 of 44 tests.

v0.6 retains recursive string discovery but classifies each structured candidate by field role:

- bounded path fields such as `file_path`, `path`, `notebook_path` and directory/path lists inherit a recognized tool's read or write operation;
- bounded search/program fields such as `pattern`, `query`, `glob` and `regex` are `literal/program-or-pattern`;
- bounded prose and replacement fields are literal data;
- an absolute-path-shaped string in any unrecognized structured field is preserved as `unknown/structured-unknown-field`, so a new field cannot silently produce automatic `valid`.

Extraction, run-config, validity-policy, command-review and validity-output schemas advance from 0.5 to 0.6. Isolation snapshots remain at schema 0.2. v0.5 bytes and Case 001 evidence remain unchanged.

The original G1/G2/G3 fixtures were replayed under v0.6. G1 and G2 both became `valid`; G1's real `path` operand remained `read/structured-path-field`; G3 remained automatic `invalid` with `successful-read-outside-allowlist`. The original oversized-output smoke reconstructed the same 138,458 bytes with complete fingerprint coverage and became `valid` under diagnostic policy. The original real-outside-read smoke remained automatic `invalid`.

## Revised Case 002 commitment and start condition

Because the prior Case 002 envelope committed to unchanged v0.5 automatic classification, it cannot witness this apparatus revision. Its envelope, salt and manifest are retained as pre-v0.6 history. A new envelope keeps the Case 001 fact gold, prompt, replay suffix and mechanical judgment rules byte-identical, records that the evaluator still has not read Case 001 semantic output, and binds v0.6 plus the corrected smoke boundary.

The revised gold envelope has SHA-256 `3448de43d203c1286998e90795ef2a01659f7ffc63abee5be9ca36573e79361f`. Its public commitment is:

`sha256(64-lowercase-ASCII-hex-salt || 0x00 || exact-gold-envelope-bytes) = 87471e1a732ee396c91574bbf92b4cf875aa30e270aab78d7580f450b21074dd`

The new salt and envelope remain evaluator-side until all Case 002 attempts and blind reviews are frozen. The prior commitment remains historical evidence and must not be used as the active Case 002 commitment.

Before any participant launch, Claude must independently verify the v0.6 archive digest and manifest, migrate only apparatus schemas from 0.5 to 0.6, and rerun both neutral controls with the deterministic config generator already frozen by the runner. The structured search-pattern control must have no automatic invalid reason, complete sidecar and fingerprint coverage, and a complete independent command review; the real outside-root `Read` must remain automatic `invalid`. Any mismatch keeps Case 002 unstarted. If both pass, Claude rebuilds all three historical roots and starts the separately preregistered Case 002 schedule; no Case 001 root, attempt or statistic is reused.
