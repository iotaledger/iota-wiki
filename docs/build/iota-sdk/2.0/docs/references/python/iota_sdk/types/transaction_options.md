---
sidebar_label: transaction_options
title: iota_sdk.types.transaction_options
---

## RemainderValueStrategyCustomAddress Objects

```python
@json

@dataclass
class RemainderValueStrategyCustomAddress()
```

Remainder value strategy for custom addresses.

**Attributes**:

- `value` - An address to move the remainder value to.

## RemainderValueStrategy Objects

```python
class RemainderValueStrategy(Enum)
```

Remainder value strategy variants.

**Attributes**:

- `ReuseAddress` - Allows to keep the remainder value on the source address.

### to\_dict

```python
def to_dict() -> dict
```

Custom dict conversion.

## TransactionOptions Objects

```python
@json

@dataclass
class TransactionOptions()
```

Transaction options.

**Attributes**:

- `remainder_value_strategy` - The strategy applied for base coin remainders.
- `tagged_data_payload` - An optional tagged data payload.
- `context_inputs` - Transaction context inputs to include.
- `required_inputs` - Inputs that must be used for the transaction.
- `burn` - Specifies what needs to be burned during input selection.
- `note` - A string attached to the transaction.
- `allow_micro_amount` - Whether to allow sending a micro amount.
- `allow_additional_input_selection` - Whether to allow the selection of additional inputs for this transaction.
- `capabilities` - Transaction capabilities.
- `mana_allotments` - Mana allotments for the transaction.
- `tagged_data_payload`0 - Optional block issuer to which the transaction will have required mana allotted.

