# Core purpose and the installation map

Date: 2026-09-03

Record ID: `SRC-2026-09-03-CORE-PURPOSE-AND-INSTALLATION-MAP`

Status: user-attributed evidence record. The user judged an external model's description of this repository too complicated and restated the project's core in plain terms.

## Occurrence

The user read a quoted external-model description of this repository and rejected it as over-complicated. Nothing about that description is retained here as authority; only the user's own restatement is.

## The user's words, verbatim

> 我感觉gpt把这个仓库描述的太复杂了……
> 它的目的就是解决代码债务问题并应对不断变化的上游和环境
> STATE本质上就是一份详细的安装指导的prompt，提供资料和步骤让模型根据地图和当前环境总能成功安装，并适配不同条件和环境
> 基本假设就是用户也不知道自己想要什么，因此第一次的安装地图必然不完善，需要在环境不断变更的过程中，充当用户和现实之间的翻译器，在与用户的反馈中让这个意图越来越精确，安装地图越来越有可操作性
> 其它的本质上都是衍生而已

## What this decides

1. Purpose. The system exists to solve implementation debt and to survive continuously changing upstream and environment. That is the whole goal statement; other framings are secondary.
2. STATE. STATE is in essence a detailed installation-guide prompt: the materials and the steps by which an Agent, reading the map against the environment actually present, can always install successfully and adapt across different conditions and environments.
3. Founding assumption. The user does not know exactly what they want either, so the first installation map is necessarily incomplete. The Agent is the translator between the user and reality; through repeated environment change and user feedback the intent becomes more precise and the map more operable.
4. Derivation. Everything else in this package is derived from the three points above.

## Scope of this record

This is an intent clarification, not an intent revision. It does not retire an existing `IP-*` intent, `META-*` acceptance criterion, constraint or open tension, and it does not adopt a protocol successor. Its effect on STATE is to state the core in the user's plain terms and to make the derived status of the remainder explicit, so that a reader meets the simple purpose before the derived detail.
