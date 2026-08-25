# Realization cache semantics and adapter boundary

Record ID: `SRC-2026-08-25-LOCK-CACHE-AND-ADAPTER-BOUNDARY`

Status: user authority plus bounded repository investigation. This record revises the intended meaning of realization locks; it does not adopt protocol 0.2 or approve any realization.

## User decisions

The user clarified that a lock locks one concrete version of an implementation and is approximately a cache. The state, not the lock, must carry enough semantic authority for an Agent to produce an implementation above the required acceptance floor. Regeneration from the same state need not reproduce the same implementation. If a build environment or referenced implementation is unavailable, the Agent investigates current reality and finds another realization; the lock is not required to archive a universal environment.

For target-specific integration, long-lived modification of DeepSeek Harness is allowed. A shared adapter may own those changes, and an intent package may maintain that adapter by regenerating its realization lock when Harness changes.

## Checked current tension

Protocol 0.2 correctly says installation is synthesis, permits an empty `locks/` directory, and states that a Git commit does not establish availability or dependency resolution. However, its Lock definition and reference-backed realization section also require a reference identity and ownership shape sufficient to retrieve, maintain, and uninstall the contribution. Together with the meta-state emphasis on reference reconstruction, this can be read as making retained implementation availability or environment closure a package-level promise.

That reading damages the user's intended information flow: an unavailable cache becomes a blocker even though state still says what must be achieved, and incidental build machinery can be promoted into permanent semantic requirements merely to preserve byte-identical regeneration.

## Resulting projection

- State is the durable semantic source for regeneration and defines the minimum acceptable effect.
- A lock is an immutable, attributable cache of one concrete realization, including useful identity, evidence, target and ownership facts.
- Selecting an available lock can preserve implementation sameness; regenerating without it promises state-level acceptance, not byte or design equivalence.
- Missing implementation bytes, unavailable references, and absent prepared environments trigger investigation and synthesis. They do not by themselves invalidate the intent package.
- Safe maintenance and uninstall still require current ownership and drift evidence. Cache semantics do not authorize blind deletion when historical bytes are unavailable.

## Adapter observation

At public `Yan-Zero/dsh-std` commit `bb194ad53a72f4fa7da1286c88dcebb488b43eb9`, the repository describes `@dsh-std/adapter-dsh` as the DeepSeek Harness product adapter and a single shock absorber for upstream breaking changes. Its browser half already maps standard UI contributions onto native DSH slots with activation-scoped ownership and cleanup. A right-sidebar surface is not currently present, so using this boundary requires a new portable surface plus a DSH mapping; the repository evidence supports the responsibility boundary, not a claim that the needed sidebar adapter already exists.
