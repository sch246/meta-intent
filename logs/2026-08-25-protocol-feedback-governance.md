# Source record: protocol feedback and decentralized collaboration

Record ID: `SRC-2026-08-25-PROTOCOL-FEEDBACK-GOVERNANCE`

Status: source provenance extending the corrected information-flow model.

## User intent

- Some user dissatisfaction cannot be resolved only by repairing realization code or revising one intent package. It may reveal that the intent-package protocol itself cannot express or maintain what is needed.
- Such a case should be translated into a reality tension against the meta-intent package and considered as a protocol update candidate.
- GitHub-style decentralized collaboration matters because many users and package repositories can observe different reality boundaries, while compatible intent packages still need a common protocol maintenance center.
- Feedback collected from users is evidence about reality boundaries. It should be used to align intent and, where repeated or structurally relevant, evolve the protocol.

## Agent interpretation

The information flow gains an explicit escalation branch:

```text
realization mismatch -> repair one realization
intent mismatch      -> revise one intent package
protocol mismatch    -> report tension to the meta-intent package
```

An edge report does not automatically change the common protocol. It contributes situated evidence and a proposed consequence. The canonical meta-intent authority evaluates whether the issue is local, whether the protocol can already express it, or whether a new protocol candidate and migration are required.

Git and GitHub permit decentralized observation, forks, issues, pull requests, and experiments. Convergence still requires an explicit canonical protocol lineage. Protocol locks let packages remain reproducible on older revisions while a new candidate is reviewed; they also prevent a fork's private semantics from silently masquerading as the same protocol revision.

## Governance boundary

- Users own their local desired effects and provide dissatisfaction/feedback.
- Package maintainers investigate and classify local facts, then escalate protocol-level tensions with evidence.
- Contributors may propose protocol realizations and migrations in forks or pull requests.
- The canonical meta-intent maintainers decide which protocol realization is published under the canonical lineage, subject to the meta-intent and its user-authorized governance.
- Adoption remains explicit through protocol-lock updates; publishing a new protocol does not rewrite every package automatically.

## Unresolved

- Who initially holds canonical maintainer authority and how it can be transferred.
- Required issue/record format for cross-repository protocol tension reports.
- Compatibility, migration, and deprecation policy across protocol revisions.
- Whether governance decisions require one maintainer, quorum, signed releases, or another authority mechanism.
