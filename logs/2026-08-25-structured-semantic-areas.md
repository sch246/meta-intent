# Structured semantic areas

Record ID: `SRC-2026-08-25-STRUCTURED-SEMANTIC-AREAS`

Status: user design direction. It opens a meta-intent investigation and does not select a concrete protocol topology, schema, index, hierarchy or lock-composition mechanism.

## User direction

The three semantic areas classify information flow and authority; they do not imply that each area is internally flat.

- `logs` gains structure when a linear source history becomes too long to use directly. Index files or derived navigational structures may organize the history without replacing or rewriting its source records.
- `state` concretizes what the user cares about. Because a design has higher- and lower-level concerns, state may need explicit hierarchy rather than one undifferentiated list of claims.
- `locks` may contain or relate distinct design layers whose versions advance independently. For example, an adapter can have a portable protocol or surface design while a target-specific compatibility implementation advances against changing upstream versions.

For now this is a proposal to the meta-intent package. The user does not want the first plausible representation frozen into the protocol before real packages expose the required operations and boundaries.

## Consequences

- The fixed three-area model should constrain semantic ownership, not forbid internal indexes, hierarchy, references or independently versioned realization layers.
- Derived log indexes must not become provenance authority or make uncovered source records disappear.
- Lower-level state must remain traceable to the higher-level user concern it serves; hierarchy must not let implementation detail acquire semantic authority.
- A layered lock model must preserve which state each layer realizes, its version identity, dependencies and ownership. It must not silently collapse portable design evolution and target compatibility evolution into one version number.

## Evidence needed before protocol design

At least one log corpus large enough to require non-trivial retrieval, one state whose top-level intent has multiple independently maintained subdesigns, and one adapter whose portable design and target compatibility actually evolve at different rates. Those cases should be used to compare linked bundles, nested bundles, references and derived indexes before choosing protocol mechanics.
