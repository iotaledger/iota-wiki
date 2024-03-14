---
sidebar_label: mana
title: iota_sdk.types.mana
---

## ManaAllotment Objects

```python
@json

@dataclass
class ManaAllotment()
```

An allotment of Mana which will be added upon commitment of the slot in which the containing transaction was issued,
in the form of Block Issuance Credits to the account.

**Attributes**:

- `account_id` - The unique identifier of the account.
- `mana` - The alloted amount of mana.

