---
sidebar_label: basic
title: iota_sdk.types.block.body.basic
---

## BasicBlockBody Objects

```python
@json

@dataclass
class BasicBlockBody()
```

A Basic Block Body is the most common type of block body used to issue various kinds of payloads such as transactions
at the cost of burning Mana.

**Attributes**:

- `strong_parents` - Blocks that are strongly directly approved.
- `weak_parents` - Blocks that are weakly directly approved.
- `shallow_like_parents` - Blocks that are directly referenced to adjust opinion.
- `max_burned_mana` - The amount of Mana the Account identified by the AccountId is at most willing to burn for this block.
- `payload` - The optional payload of this block.

