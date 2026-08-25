# Protocol tension: minimum AGENTS.md bootstrap contract

Record ID: `SRC-2026-08-25-AGENT-BOOTSTRAP-CONTRACT`

Status: Agent investigation of protocol 0.2 and its validator. It records a mismatch between the stated bootstrap role and mechanical conformance; it does not select directive syntax or revise the bootstrap kernel.

## Checked facts

Protocol 0.2 makes host-root `AGENTS.md` part of the fixed bootstrap kernel. It says the file may locate the semantic root and summarize safe entry commands while remaining non-authoritative. The validator's `requireHostAgentEntry` check proves only that `AGENTS.md` is a regular file. It does not check that the file identifies `state/STATE.json` or `.intent/state/STATE.json`, distinguishes bootstrap guidance from semantic authority, or directs the Agent to the selected lock before lifecycle work.

Repository shape lets the validator find standalone state or `.intent` positionally even when the bootstrap file is empty. Therefore current structural conformance proves file presence, not the cold-Agent guidance promised by the bootstrap kernel.

## Desired boundary

The user previously required root `AGENTS.md` as a concise installation and discovery entrypoint. Removing it is not a neutral simplification. At the same time, linting arbitrary prose would create brittle false assurance.

The smallest machine-checkable contract is likely a stable locator for the semantic root or state entry, plus a statement that state and its selected realization govern lifecycle operations. Human-readable safe commands may remain semantically reviewed rather than fully parsed. The exact marker, directive, or canonical block remains undecided because changing the fixed bootstrap surface has migration consequences.

## Current consequence

Cold-Agent bootstrap acceptance must not be claimed solely from existence of `AGENTS.md`. A future protocol candidate should either define and test a minimal content contract or explicitly narrow what structural conformance claims to prove.
