# Authority record: embedded packages and reference locks

Record ID: `SRC-2026-08-25-EMBEDDED-REFERENCE-LOCKS`

Status: user authority record for the next protocol candidate. It does not adopt protocol 0.2 or accept a sidebar realization.

## Source decisions

The user decided that a repository may retain its native package layout while exposing an embedded intent package. A root `AGENTS.md` provides the brief Agent discovery and installation entrypoint, and the concrete protocol may use `.intent/` as the embedded semantic root.

The user clarified that `.intent/`, its discovery rule, and concrete Git reference representation belong to the meta-intent realization lock—the protocol—not to implementation-independent meta state.

The user also decided that a lock may reference implementation resources rather than contain every byte. For Git-backed realizations, the preferred construction is:

1. implement and commit the target as commit `C1`;
2. verify `C1`;
3. create a lock that names repository, `C1`, and the governed paths;
4. commit that lock later as `C2`.

Because `C2` points to the earlier `C1`, the lock does not hash a commit that contains itself. The commit establishes immutable content identity; semantic acceptance remains a separate authority event.

## Scope

The meta-level requirement is deterministic discovery, immutable reference identity, applicability, ownership, drift detection, and cycle avoidance. `.intent/`, `AGENTS.md`, and Git commit/path syntax are the selected protocol candidate's concrete realization. Non-Git targets may provide an equivalent immutable identity without imitating Git.
