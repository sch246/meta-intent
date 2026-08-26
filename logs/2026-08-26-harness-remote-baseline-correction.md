# Harness remote baseline correction

Record ID: `SRC-2026-08-26-HARNESS-REMOTE-BASELINE-CORRECTION`

Status: checked correction to current resource and practice evidence; no protocol adoption.

The user clarified that the official DeepSeek Harness remote is at `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`. The previously recorded `b642a10626a950cc95c2d6f839810cb01fe599fe` is a local branch five commits ahead, containing independent skill-enablement work.

A detached clean worktree at `b150a551` established that the current purpose-comment right-sidebar and preset-manager patches each apply forward, and preset-manager remains applicable after right-sidebar. Both patches also reverse cleanly from the dirty local combined assembly at `b642a106`.

The reproducible target binding is therefore `b150a551`. Local `b642a106` remains current assembly evidence only, not remote authority. Right-sidebar candidate 9 is recorded at package commit `7a25573`; preset-manager candidate 3 is recorded at package commit `5699609`.
