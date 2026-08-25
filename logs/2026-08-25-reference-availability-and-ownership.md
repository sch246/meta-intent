# Protocol tension: reference availability, reconstruction, and ownership scope

Record ID: `SRC-2026-08-25-REFERENCE-AVAILABILITY-OWNERSHIP`

Status: Agent investigation based on a relayed independent Claude audit, direct protocol inspection, and the first public sidebar realization. It records checked limits and candidate consequences, not a protocol revision or realization acceptance.

## Investigation scope

Claude reported static and executable review of public meta-intent commit `6dbb0ab1f4ff2c0ccf783ee051ace8e736998685` in an isolated container without access to the local sidebar or Harness checkouts. Codex directly inspected the current protocol and `/root/dsh-right-sidebar` candidate, including its selected reference-backed lock and realization manifest. The two access scopes are not interchangeable.

## Availability tension

Protocol 0.2 correctly states that a commit identifies content but not availability. Its uninstall operation nevertheless assumes that the Agent can inspect sufficient historical ownership and target evidence to synthesize the current world without the contribution. A repository may be deleted, made private, garbage-collect a force-pushed object, become unreachable from the execution environment, or lose every configured resolver. The lock can remain internally well-formed while its referenced bytes are no longer retrievable.

Identity, availability, reconstruction, and removal evidence are separate:

- immutable commit or digest answers what bytes were named;
- resolver, mirror, cache, or escrow information answers where those bytes may still be obtained;
- stored byte or delta evidence answers whether a missing reference can be reconstructed;
- installation ownership and target-baseline evidence answers how to remove the contribution while preserving later unrelated changes.

A governed-path digest list can help detect drift and confirm exact surviving bytes. It cannot by itself reconstruct a deleted reference, identify semantic ownership inside a shared modified file, or preserve unrelated target drift during uninstall.

## Evidence from the first sidebar realization

The public `dsh-right-sidebar` candidate binds plugin source commit `6b2b58863f0c6d5c94000a0e3be54f23227ce2dc` and governed source paths. Its actual realization also contributes a profile dependency and a patch to a separate Harness repository. Those installed effects are described in `REALIZATION.json`, but protocol 0.2 mechanically validates only the primary Git reference.

This disproves the stronger interpretation that `(target.uri, target.paths)` is already a general ownership model. Path overlap can be a useful conflict-investigation signal only after the compared paths are known to describe the same kind of target surface. Source identity, installed target effects, and removal ownership must not be silently conflated. Repository URI aliases and multi-target contributions add further ambiguity.

## Candidate directions

A future revision may allow explicit availability assumptions and degradation paths, optional mirrors or byte escrow, target-side installation receipts, and multiple typed target effects. Cross-package path overlap may then trigger investigation without deciding semantic incompatibility. None of these mechanisms is selected by this record.

## Current consequence

Reference-backed lifecycle acceptance remains incomplete until a real install, reference or target drift, maintenance, and ownership-preserving uninstall experiment distinguishes which evidence is actually necessary.
