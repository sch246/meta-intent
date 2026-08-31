# Artifact proportionality correction

Date: 2026-08-31

## Authority

The user reviewed a destructive Harness migration and rejected an operational reading in which every implementation adjustment must advance `LOG → STATE → code → LOCK`. That reading spent most of the migration maintaining semantic artifacts, split one repair into excessive commits and encouraged broad verification unrelated to the changed behavior.

## Correction

LOG, STATE and LOCK are separate information authorities, not mandatory stages of one transaction.

- An implementation mismatch under already selected intent may be repaired without adding a LOG, revising STATE or creating a LOCK.
- A LOG is added only when the source record has continuing decision value, such as changed intent, a consequential checked tension, an authority event or a reusable negative conclusion.
- STATE changes only when current meaning, authority, acceptance, resources, constraints, permissions or a selected lifecycle status changes. It does not mirror debugging progress.
- A LOCK is optional retained realization evidence. It is created at an explicit retention, handoff, release, acceptance or recovery boundary, not after every code change.
- Verification is scoped to the claim and affected surface. More unrelated tests or documentation gates do not strengthen the relevant evidence.

Several defects discovered while repairing one realization may remain one implementation episode under one STATE revision. Git history should preserve useful logical changes rather than the incidental order in which diagnostics were discovered.

This correction supersedes any reading of protocol 0.2's strict change-flow diagram that forces every confirmed target change through all three artifact types. Protocol 0.2 remains immutable; a future successor should remove that ambiguity if one is prepared.
