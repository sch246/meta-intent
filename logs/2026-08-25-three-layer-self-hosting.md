# Source record: three-layer self-hosting architecture

Record ID: `SRC-2026-08-25-THREE-LAYER-SELF-HOSTING`

Status: confirmed architecture correction. It supersedes the earlier candidate's separate root manifest, normative intent, protocol, records, scripts, templates, and examples layout.

## User decisions

The durable package architecture has exactly three semantic areas:

- `logs`: fact-aligned provenance explaining why the current state exists;
- `state`: the current authority, including intent, resources, constraints, acceptance, permissions, decisions, and the protocol selected to interpret the package;
- `locks`: concrete, purpose-bound realizations.

An intent package exists to realize its state in a target, so target-specific implementation source, patches, generated files, and evidence belong to a realization lock. A meta-intent package exists to define what an intent package is, so its concrete realization is the intent-package protocol lock itself.

The meta-intent state therefore points to a protocol lock inside its own `locks` directory. This self-reference is intentional.

## User correction about protocol scope

The protocol is not merely a schema for the state document. Because the meta-intent package's purpose is to define what an intent package is, its protocol must define the entire architecture, including:

- what users, Agents, target reality, intent packages, meta-intent packages, logs, state, locks, protocols, realizations, evidence, authority, and tensions mean;
- how the three areas relate and where each kind of information belongs;
- how information flows from conversation and investigated reality into logs, state, locks, and target code;
- how installation, maintenance, composition, conflict handling, uninstall, protocol feedback, governance, conformance, and evolution work.

Placing those constitutive definitions in meta-intent state would confuse the desired properties of the protocol with the protocol implementation that realizes them. The state should say what the intent-package system must achieve; the protocol lock says concretely what that system is and how it operates.

## Agent interpretation and bootstrap boundary

A minimal pre-protocol bootstrap convention is unavoidable: a reader must know how to find the three directories, open the state entry, and resolve its protocol-lock pointer. After that fixed entry step, the selected protocol interprets and validates the package.

The digest graph avoids infinite recursion by not storing a digest of the protocol lock inside the state that the lock itself binds. The state identifies the lock by path and protocol identity/revision; the lock binds the exact state and protocol artifacts by digest. Git history and an external user authority event are needed for approval and trust. Structural self-validation alone cannot approve the protocol's semantics.

## Reality boundary and current decision

The earlier repository candidate had several competing authorities and a validator tied to that layout. Because no published or approved revision depends on it, a direct cutover is safer than a compatibility layer. Historical source records remain unchanged under `logs`; this record explains the replacement. The new protocol remains a candidate until user approval and does not claim that structural validation proves semantic fulfillment or trust.

## Unresolved

- The signing and portable trust model for authority events.
- Canonical maintainer succession and protocol publication governance.
- Compatibility and migration policy between immutable protocol revisions.
- How independent semantic evaluators reduce self-confirmation by protocol-owned tests.
