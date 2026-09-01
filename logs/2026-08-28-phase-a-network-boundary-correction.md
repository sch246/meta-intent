# Phase A participant-network boundary correction

Record ID: `SRC-2026-08-28-PHASE-A-NETWORK-BOUNDARY-CORRECTION`

Status: preregistered correction after runner precondition evidence and before any participant launch. It supersedes only the physical-network-disable requirement in `SRC-2026-08-28-PHASE-A-PROJECTION-LOSS-PREFLIGHT`. The case, historical boundary, prompts, arms, attempt limits, hidden gold and commitment remain unchanged. No participant has run, no result is claimed, and this record is not selected by `state/STATE.json`.

Archived: 2026-09-01. Experiment evidence retained for audit; consulted during the LOG/STATE cleanup.

## Checked obstruction

The Claude runner reported that this harness routes both public network access and the model API through one local proxy. A fresh network namespace blocks that proxy, which blocks both GitHub and the model operation needed to run a participant. The original requirement to disable all network transport is therefore incompatible with running the real LLM participant in this harness.

The same runner verified a narrower CLI route before seeing any case result: the participant process can start with a randomized isolated cwd, a minimal `env -i` environment, no warm-checkout path in observable transcript metadata, an independent historical object database and complete tool-call inputs compatible with trace tool v0.5. This removes the warm cwd, inherited Git environment and shared-object paths rather than merely detecting them.

## Corrected evidence boundary

The experiment needs to prevent future repository evidence from entering participant reasoning; it does not need to pretend that model API transport is itself repository evidence. Values available before participant execution are the frozen historical repository, prompt, generic model service and declared tool surface. External repository bytes, search results or other-session messages can arise only if a participant-visible operation obtains them.

The run class is therefore `C2.5`, not `C3`:

- the model control channel remains reachable because it is required to produce participant tokens;
- provider-side browsing, retrieval, remote connectors, MCP inputs and dynamic project context are disabled in the effective CLI configuration; if the runner cannot freeze evidence of that configuration, the attempt is indeterminate before semantic evaluation;
- participant tools do not receive `WebFetch`, `WebSearch`, `Agent` or `SendMessage`;
- the runner starts the CLI from the neutral isolated cwd with a minimal environment and an explicit read-oriented tool allowlist;
- every tool call and result must be present in the frozen transcript, processed by trace tool v0.5 and read by the blind command reviewer;
- any participant-initiated network operation, attempted external fetch, other-session communication, successful warm/future read, future fingerprint, or unexplained future-only content invalidates the attempt, even if the operation would otherwise be permitted or returned an error;
- incomplete tool-call coverage, an unknown possible information channel or inability to distinguish model transport from participant-visible evidence makes the attempt indeterminate;
- a valid result establishes only that no participant-visible external evidence ingress was observed under this instrumented CLI route. It does not prove kernel-level network isolation or that text-level detection is complete.

This classification relies on a bounded execution invariant: participant-controlled file, process and network operations occur only through frozen tool calls. CLI telemetry or model transport may exist outside those calls but cannot supply participant-visible repository evidence; provider-side retrieval is disabled above. If the runner cannot support that invariant, or unexplained external content appears without a corresponding frozen call, the attempt is indeterminate. Independent socket tracing is not claimed by this experiment.

The runner must freeze the CLI executable realpath and SHA-256, package/build version, complete argv, model/config identity, effective tool definitions, available-tool list, allowed-tools and permission-policy bytes plus digest, environment-key names, cwd, transcript location and the pre/post isolation snapshots. Secret values and credentials are not recorded. A case-blind smoke run must demonstrate before launch that the exact frozen policy permits repository read, search and bounded Git-history inspection without interactive permission prompts. The smoke and case runs use byte-identical CLI, tool and permission-policy identities. A prompt or tool denial during a case run is bound to its call identity and recorded as experimental interference, making that attempt indeterminate; the runner cannot widen permissions after seeing participant behavior.

## Unchanged validity and evaluation rules

The original two-primary plus one-full-replay schedule, retention of every invalid attempt, conditional diagnostic-only probe, fact/judgment split and result license remain in force. One retry is permitted only for a transient process or launch failure while preserving the frozen CLI/model/config/policy identities and root-construction recipe; only the randomized root and run identity may differ. An evidence-boundary, permission-policy, transcript-coverage or isolation failure makes the arm inconclusive and requires a separately preregistered case to change the apparatus. Automated absence of a network event is not sufficient: a valid attempt also requires the independent command-review artifact covering every frozen call input.

The original rendered-system-prompt limitation also remains. The runner freezes every exposed system and harness field; unexposed generic system text limits the conclusion to this harness. Any observed case-specific, gold-specific, warm-path or future content in those fields invalidates the attempt.

The gold commitment remains:

`ef96075b8a74a906c02a01e3adbddaa4e3e280959e48372d592111b540d7648b`

This correction must itself be present in an origin witness commit before the runner performs the case-blind permission smoke or launches a participant. The runner first freezes its already completed prerequisite report and digest. If the CLI route cannot satisfy the corrected boundary, it reports the remaining blocker and Phase A remains unstarted.

For the original preflight start condition, `network boundary` now means this corrected C2.5 participant-visible evidence boundary, not physical transport disablement. All other original start conditions retain their prior meaning.
