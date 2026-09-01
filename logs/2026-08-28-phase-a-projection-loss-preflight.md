# Phase A projection-loss retrieval preflight

Record ID: `SRC-2026-08-28-PHASE-A-PROJECTION-LOSS-PREFLIGHT`

Status: preregistered read-only experiment plan. No participant has run, no result is claimed, and this record is not selected by `state/STATE.json`. It changes no STATE, protocol, LOCK, acceptance status or authority. Raw transcripts and hidden gold remain outside the package.

Archived: 2026-09-01. Experiment evidence retained for audit; consulted during the LOG/STATE cleanup.

## Question and permitted conclusion

Case `PA-2026-08-28-PROJECTION-LOSS-001` asks whether a cold Agent at the historical boundary `a192ea1d9f1c26ddfd071bebbff4bbeb7e8fdca1` can investigate a STATE contraction, recover the relevant causal facts from evidence it chooses, and state what the current selected source history cannot recover.

This is a bounded Phase A retrieval experiment responding to `SRC-2026-08-27-STATE-PROJECTION-QUERY-RETRIEVAL`. It is not a recurrence experiment, has no S1-to-S2 durable consumer and cannot satisfy `META-015`. It does not qualify the routing/surprise candidate described by `SRC-2026-08-27-STATE-LOG-SHARED-ROUTING-SURPRISE`: it covers one historical case shape and none of that record's four input classes or two adversarial controls.

Any result is licensed only for this case, historical corpus size, participant model/configuration, runner boundary and run date. A pass cannot establish complete projection, general cold-session retrieval, an index requirement, a STATE partition, an operation schema or a successor protocol.

## Frozen historical boundary

- participant commit: `a192ea1d9f1c26ddfd071bebbff4bbeb7e8fdca1`
- participant tree: `87f1381bb147a71933a8682861b233318c798ea8`
- visible parent: `d286682d6516a7dbd68e5f0d46023d3f6afe576a`
- selected source corpus: 29 LOG records named by the participant STATE
- participant `state/STATE.json` SHA-256: `1a6db2c81a8d6dac1a350736d4163da1ba1407cc6328d1cc6657f5a423718d19`
- parent `state/STATE.json` SHA-256: `7cacce4d4b58d8cf0f9ee3df2ff406880f7d84a0516d44a3c940bcb8a716b877`

The participant may read this commit and its ancestors. The runner builds an independent object database containing only objects reachable from that boundary: no alternates, remotes, reflogs, extra refs, unreachable objects, inherited Git configuration, hooks or object-directory environment variables. Before and after the run it records refs, visible commits, object closure, `git fsck`, tree identity and worktree cleanliness. Any accessible descendant object or bytes invalidate the run.

Future-only forbidden fingerprints include `7263e55360a997ed8db80649da2b6fd3235d65f4`, `64b0314e8ac68339c3625303a25479ef978e7aaa`, `9e8f6148258d05bffa299d0d547bbbd83725e97c`, `4ca7752025368da7e1ef2b5ecfc9a33562eeedf5`, the record ID `SRC-2026-08-27-ATTENTION-PROJECTION-CORRECTION`, and the strings `IP-2.1`, `META-015`, `0.2.0-draft.22` and this preflight record ID. Fingerprints are an additional leak detector, not an absence proof.

Each participant starts in a new C3 container or equivalent fresh process whose initial cwd is a randomized semantically neutral isolated root before its first token. The runner supplies a minimal allowlisted environment, disables network access and records the effective environment and Git configuration. A warm cwd, a shared object store, or an unobservable inherited checkout path is not accepted as a mere limitation; if the harness cannot establish this boundary and retain the required transcript, Phase A does not start.

## Participant prompt

The template is the UTF-8 text inside the following fence, with LF line endings and one final LF. The runner substitutes one absolute isolated path for `{{PARTICIPANT_ROOT}}`, freezes the rendered prompt and its digest, and makes no other wording change:

```text
工作目录：{{PARTICIPANT_ROOT}}
所有仓库读取必须在该目录内进行。不要访问其他 checkout、网络或其他 Agent。不要修改仓库；本次只调查并报告。

你正在接手这个仓库的维护。用户反馈：

我担心刚完成的 STATE 重组，在把目标细节移出当前投影时，也把未来维护仍需的因果事实一起丢掉了。请基于你现在能看到的仓库继续调查：这次收缩具体改变了什么，哪些旧事实仍能从当前 source history 恢复，哪些不能。不要把字符串、文件或 Git 对象仍然存在，直接当作当前适用、已接受或仍归本包所有。请给出你的结论、理由、实际读取过的来源和仍未覆盖的范围。
```

Template SHA-256: `be1fa2aeb3f2fd4f99481909c8c3cad3e6b7e95c73b5863597be44251de6d79e`.

This is intentionally an unstructured elicitation form. It is not a proposed maintenance-operation schema and output formatting is not a pass criterion.

## Arms and failure probes

1. Run two independent primary participants with the exact prompt above in independently rebuilt isolation roots. They choose their own retrieval routes.
2. Run one independent full-history replay control. Append one LF followed by the UTF-8 fenced line below and one final LF to the rendered primary prompt:

   ```text
   这是 full-history replay 对照臂，不计作自主路由证据。在回答前，完整读取当前 `state/STATE.json.logs` 选择的每一条 source LOG；仍可读取该历史边界以内的其他仓库证据。其余问题和边界不变。
   ```

   Suffix-file SHA-256, excluding the preceding concatenation LF: `e756a98992855b45ddf5a39ec03826c4f6dae5dbe2b6185de961db99c2e924d3`.

3. When a valid primary run fails or only partially recovers the frozen fact layer, run one new cold direct-evidence probe for that primary. Supply the exact before/after `state/STATE.json` bytes whose digests are above. The probe uses the same UTF-8/LF/final-LF and path-substitution rules as the primary template:

   ```text
   工作目录：{{PARTICIPANT_ROOT}}
   所有仓库读取必须在该目录内进行。不要访问其他 checkout、网络或其他 Agent。不要修改仓库；本次只调查并报告。

   这是失败归因探针，不计入 primary retrieval 结果。请比较随 prompt 一并提供的 `state/STATE.json` before/after 字节，判断收缩删除了哪些事实、当前选择的 source LOG 是否足以恢复它们，并区分事实身份仍存在与当前适用、接受或所有权。请给出结论、理由和未覆盖范围。
   ```

   Probe-template SHA-256: `67fa248f7921ee6906e303fea637f45b971d3730f1d204118ac0f146d0124bff`. The probe diagnoses routing versus interpretation/recording failure and never repairs the primary result. Its output is labelled `diagnostic-only`, is excluded from primary retrieval statistics and cannot change the primary classification.

The two primary runs show within-configuration variation; the replay arm supplies a full-selected-LOG cost and coverage baseline. Neither converts a one-case result into general evidence.

## Runner and trace validity

Claude is the isolation runner. It creates the historical roots, launches participants, injects only the frozen prompt, captures raw JSONL and sidecars, and freezes pre/post snapshots. Before semantically reviewing participant output, it runs the frozen extractor and validity evaluator unchanged. Claude receives neither the hidden gold nor its salt.

The trace tool is `meta-intent-trace-tools-v0.5.tar.gz`, SHA-256 `0009cf14d999425d61b15f36e38c0b8a996bd6e0335ab4813f6a03d65b13a884`, 32,216 bytes. Each run uses a separate empty scratch write root and a policy with `requireCommandReview: true`. Network tools, session communication, untracked child Agents, successful reads from warm/future roots, future fingerprints, snapshot drift and writes outside the declared run scratch root invalidate the run. Missing coverage, unresolved relative-cwd reads, unknown external operations or an incomplete command review make it indeterminate.

The runner freezes every recoverable user/system attachment and reports every system field the harness does not expose. An unavailable rendered generic system prompt remains named uncovered scope and limits conclusions to this harness; it does not alone change trace validity. Any observed case-specific, gold-specific, future-repository or warm-path content in system or harness input invalidates the run. The fresh isolated cwd and environment above must hold before launch rather than relying on the participant to `cd` away from a warm cwd.

Codex main is the gold custodian and evaluator; it does not operate participants and does not receive participant output before the raw evidence, automated trace and blind command review are frozen. After the runner freezes raw evidence, a fresh Codex subagent created with no inherited conversation and no gold acts as command reviewer. It reads every tool call and produces the artifact bound to every call's `inputSha256`. Completion proves that the calls were read, not that they were safe or semantically correct. The evaluator remains responsible for the fact/judgment separation and reads only digest-bound artifacts.

Each of the two primary arms and the replay arm permits at most two launch attempts. Every attempt, including invalid ones, is retained in the attempt manifest with its raw digest and validity reason. One invalid first attempt may be rebuilt from a new root; a second invalid attempt makes that arm inconclusive. A later probe cannot rescue it. An indeterminate run remains inconclusive unless an already-emitted sidecar or transcript artifact can be recovered and digest-bound without another participant turn or any new participant-visible bytes; otherwise no post-hoc completion is allowed.

## Gold and evaluation commitment

The fact gold, classification boundaries and salt are frozen outside the repository under the custody of Codex main. The salt is exactly 64 lowercase ASCII hexadecimal bytes with no terminator in the commitment input. The public commitment is:

`sha256(UTF8(lowercase-salt-without-newline) || 0x00 || exact-gold.json-bytes) = ef96075b8a74a906c02a01e3adbddaa4e3e280959e48372d592111b540d7648b`

The gold itself has SHA-256 `9bfb2854951e42adc5cd7c58b415c98a77c4eda4258423f35eba34077844ac67`. The origin commit that first contains this record is the pre-run public witness: the runner records its full identity before launch, and any rewrite or changed commitment cancels this case ID rather than silently replacing the preflight. The salt is withheld until all attempts, raw runs, automated validity outputs and blind command reviews are frozen; it and the exact gold bytes are then released with the evaluation so the commitment can be recomputed.

Mechanical facts cover the before/after resource count and identities, exact identity fields retained in the parent STATE, and literal presence or absence in the 29 selected LOG bytes. They are compared against those frozen bytes, not against later conclusions. `pass` requires every frozen fact atom without contradiction plus recognition that selected LOGs do not recover every removed identity; `partial` recovers at least one removed resource without contradiction but omits a required mapping or coverage boundary; `fail` recovers none or contradicts a frozen identity; invalid, indeterminate or mechanically undecidable evidence is `inconclusive`. Recommendations about whether the old facts should return to current STATE, whether the contraction was wise, whether an identity remains applicable or accepted, and whether a persistent retrieval structure is warranted belong to the judgment layer. Later history is not an answer key for those judgments.

For every valid run the result reports sources and Git routes read, their order, files and bytes, context/token measures available from the harness, source coverage, recovered and omitted fact atoms, unsupported claims, unknown scope, use of Git history versus STATE/LOG routing, forbidden-boundary attempts and differences from full-history replay. A mechanically unlisted semantic judgment is recorded as a difference or escalated; it is not silently turned into fail.

## Storage and start condition

Before evaluation, per-participant transcript, sidecars, rendered prompts, run configuration, snapshots, trace, validity output and command review stay outside the repository and are frozen by digest. Do not add participant prose to `logs/` or `state/STATE.json.logs`.

Phase A starts only after the runner fetches the origin commit that first contains this unchanged record, records that full commit and blob identity, and verifies the tool digest, historical object closure, clean C3 start, sanitized environment, network boundary, non-empty forbidden fingerprints, separate scratch roots, fixed attempt schedule and reviewer separation. If any prerequisite is unavailable, the runner reports the blocker without launching a participant. This preflight commit alone is not an experiment result.
