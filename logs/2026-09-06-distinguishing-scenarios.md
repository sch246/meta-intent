# Clarify intent through distinguishing scenarios

Date: 2026-09-06

## Source

In task “阅读并优化相关内容”, the user suggested pairing feature generation with [mattpocock/skills grill-me](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md). Their example was sidebar persistence: they intended each session to retain its own open/fullscreen state, while the implementation and installation map described shared state. A session whose sidebar was closed should be closed when selected.

Two focused questions established the remaining user choices: refresh must restore each session’s state, and ordinary width must also be saved per session. These answers refine the sidebar map; no exhaustive feature interview was needed before independent diagnosis could proceed.

## Evidence and learning

Inspection found one global open value and global persisted width/maximization in the Host layout store. A test explicitly expected a newly selected session to inherit maximization. The preceding map maintenance preserved that model-generated interpretation without resolving its observable difference from the user’s intended A → B → A behavior. Code, tests and STATE agreed with each other, but that agreement did not establish user meaning.

A useful clarification presents a case on which plausible interpretations disagree. Here, open and maximize A, select untouched B, return to A, then reload. Asking only whether to “keep state” would preserve the ambiguity. The owning sidebar map now specifies per-session visibility, width and maximization, with the explicit switching and reload scenario and attributable source.

Meta-intent incorporates this technique into ordinary translation and semantic review: investigate repository facts directly, ask one consequential user-owned question at a time with a recommendation, and record the confirmed behavior where future installation and testing can reach it. Use grill-me when available and useful; its installation or a complete interview is not a prerequisite for authorized development. Do not convert this lesson into a new required artifact or protocol stage.

This record demonstrates a specific recovered ambiguity and map correction. It does not prove cold-session learning, a successful browser deployment, or universal prevention of misunderstanding. Adopted protocol 0.2 remains unchanged.
