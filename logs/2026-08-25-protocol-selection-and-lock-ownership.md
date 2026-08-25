# Source record: protocol selection and lock ownership

Record ID: `SRC-2026-08-25-PROTOCOL-SELECTION-AND-LOCK-OWNERSHIP`

Status: confirmed semantic correction to the first three-layer protocol candidate. It removes local protocol-reference locks from ordinary intent packages.

## User restatement

The core model is deliberately small:

- `logs` record the source and development of intent;
- `state` records current authority while remaining as independent as practical from concrete implementation;
- `locks` record current concrete implementations, including code and target-repository bindings where applicable.

The Agent translates between user and reality. It carries user intent into investigation and realization, then translates reality feedback into tensions against that intent for the next decision.

Logs therefore are not chat transcripts or parallel summaries of what each speaker said. They preserve the meaningful exchange between intent and reality: the desired effect, investigated facts, their tension, unresolved branches, and the resulting decision.

## Protocol relationship

The meta-intent package exists to define what an intent package is, how it is written, and how collaboration works. Its concrete protocol is therefore a realization in the meta-intent package's own `locks`.

An ordinary intent package selects one of those meta-intent protocol locks from its `state`. That protocol is not an implementation of the ordinary package and must not be copied into the ordinary package's `locks` merely to represent adoption.

The meta-intent package follows the same rule. Because its purpose is itself the protocol, its state selects a protocol lock in its own `locks`. This is self-hosting, not a separate exception or a second kind of package.

## Investigated mismatch

The previous candidate gave the template and right-sidebar example local `protocol-reference` lock bundles. Those bundles represented protocol selection rather than either package's concrete target realization. They therefore blurred the boundary between state and locks and made a zero-implementation package appear to have an implementation.

The direct correction is:

- protocol identity, revision, owning package, lock location, and protocol-artifact digest live in `state.protocol`;
- an ordinary package may have an empty `locks` directory before any realization exists;
- ordinary package locks contain only that package's target realizations;
- a meta-intent protocol lock remains a normal lock because it concretely realizes meta-intent state;
- the `protocol-reference` lock kind and its validation path are removed rather than retained as compatibility behavior.

## Bootstrap and trust boundary

A reader resolves the package named by `state.protocol.package`, locates the named lock within that package, and checks the selected protocol artifact digest. When the named package is the current package, the path resolves locally and closes the self-hosted loop. Remote location, authorship, and trust still require repository identity and authority mechanisms beyond a content digest.
