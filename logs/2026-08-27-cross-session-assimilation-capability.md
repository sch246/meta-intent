# Cross-session assimilation capability and recurrence correction

Record ID: `SRC-2026-08-27-CROSS-SESSION-ASSIMILATION-CAPABILITY`

Status: user-authorized intent clarification plus investigated reality tension. It revises current STATE to make an operational meaning of continuous cross-session maintenance explicit. It corrects the recurrence scope in `SRC-2026-08-27-STATE-LOG-SHARED-ROUTING-SURPRISE`; it does not rewrite that source, choose a runtime or index, change protocol 0.2 or claim that the new acceptance has passed.

## Observed missing capability

The repository preserves current meaning and source history, but this investigation still depended on the originating conversation and repeated user instructions to inspect related LOGs before continuing. The same failure pattern appeared when projection loss, ContextOS source overlap and recurrence semantics were investigated: the repository did not itself cause a cold Agent to query, assimilate and improve the next retrieval path.

This does not show that protocol 0.2 violated an adopted operational guarantee. `IP-0` already requires continuous maintenance and `IP-2` already requires continuation across Agent sessions, but current acceptance proves discovery rather than executable continuation, and STATE explicitly says bounded cold recovery is unproved. The missing part is a load-bearing operational interpretation and non-vacuous acceptance, not a previously rejected feature or proof that the adopted protocol is invalid.

## Clarified maintenance cycle

A later cold Agent must be able to receive new feedback, recover the relevant current intent, prior occurrences and prior interventions, and continue maintenance without the original conversation or a user instruction such as "check LOG first".

Recurrence reviews both the event and the maintained network:

- another description of the same occurrence should reuse its source and avoid repeating the investigation;
- a new occurrence with similar wording remains a new source event and may show that a prior intervention did not work;
- if recurrence was not expected, the Agent investigates the target intervention and the route or representation that failed to expose it, then preserves that repair so a later recurrence reaches both the event and repair history;
- if recurrence is expected and its handling is stable, the route may fast-fail or use an authorized mechanical path while retaining the new occurrence evidence.

If a repair is followed by the same unexpected failure, the next question moves to the repair itself. This recursion does not create predetermined meta-level files: repair provenance enters the same queryable history. When another pass exposes no new actionable distinction, the result is an explicit unresolved boundary or decision tension rather than unbounded self-repair narration.

## Correction to the compression tension

Two bounds were previously conflated. Keeping the hot retrieval representation bounded can retain immutable source LOGs and compress only replaceable navigation; protocol 0.2 already permits that. Bounding the total source retained for one logical subject would require a successor rule and acceptance of irreversible loss. No total-source bound is adopted.

Compression and fast-fail also apply to repeated interpretation, not automatically to repeated events. A user reaffirmation, a repaired bug recurring or a constraint being violated again may have high causal or authority value even when its wording is familiar. Frequency may reduce navigation cost but cannot suppress source attribution or become inferred user preference.

## Automation and authority

A mechanical cache or handler may operate autonomously when every effect remains inside existing authority, permissions and acceptance and no alternative reaches a user-owned semantic boundary. Compiling a whole class of future events so that they no longer receive the decision-boundary review is different: it requires an attributable delegation with a named scope, assumptions and revocation condition. When an assumption fails, the event leaves that delegated path and returns to investigation.

No automation scope is delegated by this record. It only states the distinction that a later candidate and acceptance must preserve.

## Non-vacuous experiment

The experiment cannot use the originating conversation or procedural user prompts as hidden inputs. A cold Agent starts with package bootstrap guidance, current package and target reality, and a new feedback event. It must discover the related intent and provenance itself. A later cold Agent must consume the durable result.

The truth source for recurrence classification is external evidence, not an experiment label:

- in an unexpected-recurrence case, the prior intervention is observably absent or ineffective in target reality;
- in an expected-recurrence case, the prior intervention is observably effective and the new occurrence is normal under its stated scope;
- in a duplicate-report case, both descriptions identify the same occurrence rather than merely sharing wording.

Evidence names every tested case, the checked target observation, sources selected, prior intervention recovered, classification, resulting provenance or navigation change, and the later operation that consumed it. Zero tested cases, continuation in the originating conversation, a user telling the Agent which LOG to read or an answer with no downstream consumer cannot pass.

The experiment remains representation-neutral. Its result decides whether natural-language bootstrap guidance is sufficient, whether an Agent skill or CLI is needed, or whether a persistent index or service has earned implementation. Current evidence selects none of them.

## Result

Current STATE gains the missing operational clarification and an acceptance criterion that is explicitly not satisfied. Protocol 0.2 remains adopted. The next authorized work is a minimal cold-session vertical experiment, not a permanent graph, mutable source format or general ContextOS runtime.
