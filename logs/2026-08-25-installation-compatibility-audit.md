# Protocol audit: installation and compatibility boundary

Record ID: `SRC-2026-08-25-INSTALLATION-COMPATIBILITY-AUDIT`

Status: Agent investigation based on an independent Claude review and local verification. It records protocol tensions and bounded conclusions, not user adoption or automatic state semantics.

## Positioning

Protocol 0.1 provides an auditable framework for Agent judgment: provenance, current authority, concrete realizations, investigation flow, decision boundaries, and structural integrity. It does not yet demonstrate reproducible installation, target compatibility, maintenance, or uninstall. Those lifecycle claims remain incomplete rather than disproved.

## Verified defects

1. Package resolution is underspecified. `state.protocol.package` is a bare owner name, and bootstrap delegates acquisition to unspecified resources or repository context. The bundled validator succeeds because it already owns the protocol artifact; a cold third party lacks a deterministic locator.
2. There is no persistent positive `kind: realization` instance. Installation, drift maintenance, composition, last-good behavior, and uninstall therefore lack end-to-end evidence.
3. Active last-good semantics contradict structural validation. Protocol 0.1 validates active, candidate, and selected local locks as exactly equal to current state and selected logs. Adding a confirmed log and advancing state makes an accepted active lock hard-invalid, although maintenance says last-good remains active until an accepted replacement exists. Historical acceptance and current applicability must be separated.
4. Digest propagation has no reseal tool, so correct but mechanical state, log, snapshot, and artifact updates are manual and noisy.
5. Root presentation validation is a closed filename allowlist although protocol prose gives examples. Ordinary files such as `NOTICE`, `AUTHORS`, and `CHANGELOG.md` are rejected without a semantic reason.

## Proposals that remain unadopted

Machine-readable `provides`, `requires`, and exclusive-surface ownership could expose some exact conflicts, but their vocabulary and false-confidence boundary have not been tested by real packages. Semantic compatibility remains Agent judgment constrained by evidence and authority. These fields are a candidate experiment, not a 0.2 state requirement.

Cross-revision migration, portable trust, and a real sidebar install-maintain-uninstall cycle remain open. Protocol 0.2 may fix the verified structural contradictions while honestly retaining incomplete lifecycle acceptance.
