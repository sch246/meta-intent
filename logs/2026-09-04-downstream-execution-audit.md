# Downstream execution audit

Date: 2026-09-04

Record ID: `SRC-2026-09-04-DOWNSTREAM-EXECUTION-AUDIT`

Status: Agent-collected reality evidence, plus one attributable user statement about its cause. It is the checked-reality input for a pruning decision that has not yet been made.

## Occasion

The Agent had inferred, from this repository holding no realization LOCK, that the installation map had never been executed. That inference was wrong. The user named eleven downstream repositories and asked for them to be examined.

## Method and observation limits

Shallow clone (`--depth 1`) of each repository's default branch on 2026-09-04, read from disk. Not observed: other branches, unpushed local work, the execution transcripts themselves, and the behavior of the Agent that performed the installations. Counts below are of files present in those checkouts. Anything about why an executor stopped is reported by the user, not observed here.

## What exists downstream

Ten of the eleven repositories carry an intent package selecting protocol 0.2, all in embedded `.intent/` form. Zero use the standalone form.

`dsh-reply-model-hint` has `.intent/logs/` and `.intent/state/STATE.md` but no `.intent/state/STATE.json`. Under protocol 0.2 section 1 it therefore has no resolvable semantic root. Its logs are dated 2026-09-01 and 2026-09-02, the most recent downstream activity observed.

Map sizes, `STATE.md` bytes:

```
dsh-weather-tool          3760     dsh-agent-games           5393
dsh-tool-model-catalog    3935     dsh-skill-manager         5549
dsh-spawn-agent           4436     dsh-reply-model-hint      6078
dsh-trusted-network-web   4516     dsh-right-sidebar        15702
dsh-shared-room           5310     dsh-preset-manager       17664
                                   dsh-warm-minimal         18611
meta-intent              33508
```

Seven of eleven have no `###` level at all; six contain no identifier tokens of the
`XX-0` form. Arbitrary-depth derived intent with attributable derivation basis, which
current meta-intent STATE develops at length and `META-013` requires evidence for, has
close to no downstream instance.

## Realization lifecycle

Twenty-one realization LOCKs across four packages:

```
candidate 15    failed 5    stale 1    accepted 0
```

All twenty-one bind a `git` target. All ten `STATE.json` files report `status: draft`,
`activeLocks: []` and `candidateLocks: []`.

`dsh-warm-minimal` holds five `failed` and one `stale`, with no surviving candidate.
`dsh-right-sidebar` holds nine, whose identifiers break from `right-sidebar-candidate-001..006`
to `right-sidebar-linux-web-0.3.0-candidate.7..9`, consistent with a target re-versioning
between them.

No LOCK in any package has ever reached `accepted`. The acceptance machinery — accepted
last-good, `activeLocks`, candidates not silently replacing last-good, drift investigation
against an accepted realization — has zero instances after eleven projects.

## Reported cause of zero acceptance

The user states:

> 因为执行实际操作的往往是gpt，而gpt的保守程度决定了0个通过（）

This attributes the zero count to the executing Agent declining to take a step reserved for
user authority, not to the acceptance rule being unnecessary. The Agent did not observe those
executions and does not confirm the mechanism. Taken with the map's own text, the checkable
part is that no step in the current map instructs an executor to present a realization for
acceptance and record the answer; every executor stopped before it. What follows from this
is not decided by this record.

## Which vocabulary survived execution

Section headings across the ten downstream maps, by number of packages using each:

```
Non-goals 10   Intent 7   Constraints and permissions 6
Product direction 4   Required capabilities and verification 4
Target-dependent commitments 4   Conditional avoidance 4   Implementation hints 4
```

`Target-dependent commitments` and `Conditional avoidance` are the executed names for the
conditional relation `C -> E` and for condition-scoped avoidance. The three operational
classes reached execution; the wording current meta-intent STATE uses for them did not.

Term presence in downstream maps, out of ten, with hits across all downstream logs:

```
composition  9 maps / 35 log hits      precedence      0 / 2
compose      8 maps / 20               counterexample  0 / 3
accepted     8 maps / 14               assimilation    0 / 0
uninstall    6 maps / 30               successor       0 / 0
                                       protocol 0.3    0 / 0
```

## Where feedback stopped

Thirteen meta-intent LOGs cite downstream packages by name. Every one is dated 2026-08-25,
08-26 or 08-27. Downstream execution continued through 2026-09-02, including every observed
failure, the `dsh-warm-minimal` outcome and the `dsh-right-sidebar` re-versioning. Meta-intent
LOGs from 2026-08-31 onward, including all four written on 2026-09-03, cite no downstream
package and derive from conversation.

The alignment loop this package specifies did run at the meta level for its first three days.
It has not run since, while the execution that would feed it continued.

## Scope of this record

Evidence only. It revises no `IP-*`, `META-*`, constraint, non-goal or open tension, adds no
acceptance criterion, and decides no removal. Its purpose is to make the pending pruning
decisions answerable from checked reality rather than from judgement about which parts read
as excessive.
