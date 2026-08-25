# Sidebar candidate semantic-review experiment

Observed on 2026-08-25 with read-only default Codex subagents. The reviewed package is `sch246/dsh-right-sidebar` host commit `e1412695af3b35f3c10fed619cf4d31f26ef546b`; exact state, lock, target, prompt, and resource roles are bound by `sidebar-candidate-inputs.json`.

## Runs

1. `alignment-review/0.1` mapped all seven sidebar acceptance criteria. It judged `SIDEBAR-005` unsupported and the other six partial or uncertain, primarily because browser layout, external registration, cross-surface session isolation, reproducible build closure, and mechanically bound multi-target ownership remain missing.
2. `counterexample-review/0.1` independently found the build-closure gap, stale/unbound browser claims, missing external fixture, orphan symlink, and secondary Harness-target limit.
3. The first adversarial run also produced two false positives: it treated the host's later `.intent` commits as implementation-target drift and treated a dirty Harness state resource as the lock's primary target.
4. A deterministic check showed no governed-path difference between implementation target C1 and the package host, and showed that the lock target is the sidebar repository while Harness is a state resource plus manifest-described secondary effect.
5. The adversarial check was rerun with `sidebar-candidate-inputs.json` as the role authority. Both false positives disappeared while the real build, uninstall, browser, fixture, and multi-target findings remained.

## Decision-relevant result

The LLM checks found consequential semantic gaps that structural validation deliberately cannot decide. They also demonstrated that an unconstrained reviewer can confidently confuse repository roles. A deterministic input-role preflight materially improved the result without granting the reviewer authority.

The experiment therefore supports a hybrid candidate model:

- deterministic code resolves paths, roles, identities, digests, and cache invalidation;
- versioned prompts request alignment and counterexample evidence;
- independent inexpensive reviewers improve coverage but do not vote truth into existence;
- review output may support a log, tension, or acceptance observation, but cannot write state, activate a lock, grant permission, or perform external actions.

## Remaining limits

- The result is a bounded experiment with one package and one reviewer configuration, not evidence that the prompt set is generally sufficient.
- Raw model sampling is not reproducible from prompt digest alone; model identity, configuration, tool access, input manifest, and output digest are needed for cache attribution.
- Repository text remains prompt-injection input and must never expand reviewer permissions.
- No user-visible sidebar semantics were accepted by this experiment.
