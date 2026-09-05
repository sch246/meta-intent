# meta-intent

Maintain an executable installation map as user needs, upstream software and environments change. The map helps an Agent create, adapt, repair and remove a project's contribution without depending on the originating conversation or carrying old implementation debt forward.

Start with [STATE.md](state/STATE.md). It explains what a useful map contains, how to act on current conditions, how feedback improves it, and which decisions belong to the user. The first map can be incomplete: authorized development and user feedback supply the conditions and details needed for the next operation.

## Information to keep

- **STATE:** the current map, desired effects, applicable conditions, installation and maintenance routes, and meaningful verification.
- **LOG:** selected actual decisions and observations that explain why the map says what it says.
- **LOCK:** an optional retained exact realization for recovery, handoff or another continuing purpose.

These are different information roles, not a required three-document transaction for every code change. Keep one authoritative home for each fact. Link working commands and supporting material directly from STATE; do not hide the route exclusively inside a historical LOCK.

## Use and maintain this repository

Read [STATE.md](state/STATE.md) to improve a project's installation map or investigate a maintenance lesson. [STATE.json](state/STATE.json) selects the source records and the adopted protocol identity. Read the relevant source when a decision, attribution or historical condition needs clarification.

For protocol serialization, package topology or LOCK bindings, use the immutable [protocol 0.2](locks/protocol-0.2/PROTOCOL.md). Existing adopters keep its exact identity and digest. Current STATE can advance without rewriting that bundle or implicitly adopting a successor. A local installation map does not claim protocol conformance merely by using a file named STATE.

From the repository root, check current structural consistency with:

```sh
node locks/protocol-0.2/bin/validate.mjs .
```

When changing validator behavior, its focused tests are:

```sh
node --test locks/protocol-0.2/tests/validate.test.mjs
```

Neither command proves that a map can install a product. That needs an observed installation or adaptation on a named target, followed by verification of the relevant effects. The [current feedback record](logs/2026-09-06-installation-map-maintenance.md) explains the map-first organization and its evidence limits.
