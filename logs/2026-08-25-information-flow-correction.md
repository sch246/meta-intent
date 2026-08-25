# Source record: investigate before recording a change

Record ID: `SRC-2026-08-25-INFORMATION-FLOW-CORRECTION`

Status: user correction to `SRC-2026-08-25-INFORMATION-FLOW`. The earlier record remains historical provenance; this record supersedes its claim that dissatisfaction should immediately enter the durable dialogue record.

## User correction

The earlier formulation was incomplete. Strict information flow begins with investigation:

1. receive the user's dissatisfaction or proposed change;
2. investigate the target and check the relevant facts;
3. report the reality boundary and its tension with the expressed intent;
4. determine with the user whether a change is actually required;
5. only when a change is required, append the fact-aligned dialogue/decision record;
6. update the intent package description;
7. finally align target code and other realization artifacts.

Unverified feedback must not be promoted directly into durable provenance, normative intent, or target code.

## Agent clarification

“Update the intent package description” has two branches:

- If investigation reveals omitted, mistranslated, or changed desired semantics, revise the normative intent under user authority.
- If the existing intent already states the desired effect and only the realization is wrong, preserve the normative intent and update the package's maintenance/realization state and evidence before repairing code. Do not manufacture a semantic intent change to justify a bug fix.

In both branches, a durable record is written only after the investigation establishes the facts and the change branch is selected. A `no_change` result does not create a normative revision or a false decision record.
