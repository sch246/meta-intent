# State map evidence and the alignment loop

Date: 2026-09-01

Record ID: `SRC-2026-09-01-STATE-MAP-EVIDENCE-AND-ALIGNMENT-LOOP`

Status: user-attributed evidence record for current STATE. It repairs the provenance gap left by the deletion of three Agent paraphrase records on 2026-09-01, and it records the user's rulings on the alignment loop, the refinement criterion and LOG authenticity.

## Cleanup finding

During the LOG/STATE cleanup, repository-wide search showed that three normative claims in `state/STATE.md` — the derivation-path paragraph (product direction → committed features → LOG trade-offs → condition-specific detail), the one-jump navigation bullet under `IP-2`, and the META-018 detail enumeration — no longer had any surviving source record. Their only direct support had been three Agent paraphrase records that were written, selected and deleted the same day (`2026-09-01-condition-dependent-intent-correction.md`, `2026-09-01-state-as-conditional-action-map.md`, `2026-09-01-disposable-realizations-and-antifragile-state.md`). The deletion was evidence repair under the evidence-level immutability rule; what it left behind was the absence of the user's actual words for these claims. This record restores them from the user's own messages.

## The user's words, verbatim

The derivation path, from product direction to condition-specific detail:

> 你可以想象用户的意图是如何延伸的，它基本上可以看作从一段关于产品期望功能的README开始，承诺需要实现的功能
> 随后通过权衡和抉择，发展出为此而选择的能力，在与现实的交互中得到在具体情形下的细节
> 因此核心是产品的期望方向，发展出承诺的功能，为了实现功能而依靠权衡和抉择（LOG）的能力，以及以具体情形为条件的细节（LOCKED STATE）

Detail sufficiency and antifragility of STATE:

> 因此它需要是反脆弱化的，它需要是能包含足够细节判据的

Navigation form:

> 为了方便读取一般是只有一个STATE.md，最多一次跳转到具体文件目标

Decoupling as dual-version compatibility:

> 好的意图应该能在兼容之前版本的同时也能兼容新版本，在不同api和版本变更的情况下不断修正，在保持之前能力的情况下不断兼容更多版本，才是在变得越来越解耦

The refinement criterion:

> 新表述必须在能运行新版的基础上，能运行旧版——并不要求一样，但改变应该基于对原有意图的澄清和优化，应该实现得更好而不是显然的退化

The core of the alignment loop:

> 需要的迭代循环其实一点就是，用各种手段从用户这里获取意图进行对齐，用用户好理解的方式降低表达门槛——agent的职责就是成为用户与现实的翻译器

LOG authenticity:

> 情感如果捏造倒不如不写情感了
> 真实性还是第一位的

## Support mapping

- `STATE.md` derivation-path paragraph ← the first quotation.
- `STATE.md` action-prompt paragraph and META-018 detail enumeration ← the antifragility quotation.
- `STATE.md` `IP-2` one-jump navigation bullet ← the navigation quotation.
- `STATE.md` `IP-3` alignment loop and refinement criterion ← the loop and dual-version quotations.
- `STATE.md` constraints, LOG authenticity ← the authenticity quotation.

The quotations above are the user's own messages. This record does not paraphrase them into conclusions.
