---
sidebar_label: output
title: iota_sdk.types.output
---

## OutputType Objects

```python
class OutputType(IntEnum)
```

Output types.

**Attributes**:

- `Basic` _0_ - A basic output.
- `Account` _1_ - An account output.
- `Anchor` _2_ - An anchor output.
- `Foundry` _3_ - A foundry output.
- `Nft` _4_ - An NFT output.
- `Delegation` _5_ - A delegation output.

## BasicOutput Objects

```python
@json

@dataclass
class BasicOutput()
```

Describes a basic output.

**Attributes**:

  amount :
  The base coin amount of the output.
  mana :
  Amount of stored Mana held by this output.
  unlock_conditions :
  The conditions to unlock the output.
  features :
  Features that add utility to the output but do not impose unlocking conditions.
  type :
  The type of output.

## AccountOutput Objects

```python
@json

@dataclass
class AccountOutput()
```

Describes an account output.

**Attributes**:

  amount :
  The base coin amount of the output.
  mana :
  Amount of stored Mana held by this output.
  unlock_conditions:
  The conditions to unlock the output.
  account_id :
  The account ID if it&#x27;s an account output.
  foundry_counter :
  A counter that denotes the number of foundries created by this account output.
  features :
  Features that add utility to the output but do not impose unlocking conditions.
  immutable_features :
  Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  type :
  The type of output.

## AnchorOutput Objects

```python
@json

@dataclass
class AnchorOutput()
```

Describes an anchor output.

**Attributes**:

  amount :
  The base coin amount of the output.
  mana :
  Amount of stored Mana held by this output.
  anchor_id :
  The anchor ID if it&#x27;s an anchor output.
  state_index :
  A counter that must increase by 1 every time the anchor is state transitioned.
  unlock_conditions:
  The conditions to unlock the output.
  features :
  Features that add utility to the output but do not impose unlocking conditions.
  immutable_features :
  Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  type :
  The type of output.

## FoundryOutput Objects

```python
@json

@dataclass
class FoundryOutput()
```

Describes a foundry output.

**Attributes**:

  amount :
  The base coin amount of the output.
  unlock_conditions :
  The conditions to unlock the output.
  features :
  Features that add utility to the output but do not impose unlocking conditions.
  immutable_features :
  Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  serial_number :
  The serial number of the foundry with respect to the controlling account.
  token_scheme :
  Defines the supply control scheme of the tokens controlled by the foundry. Currently only a simple scheme is supported.
  type :
  The type of output.

## NftOutput Objects

```python
@json

@dataclass
class NftOutput()
```

Describes an NFT output.

**Attributes**:

  amount :
  The base coin amount of the output.
  mana :
  Amount of stored Mana held by this output.
  unlock_conditions :
  The conditions to unlock the output.
  nft_id :
  The NFT ID if it&#x27;s an NFT output.
  features :
  Features that add utility to the output but do not impose unlocking conditions.
  immutable_features :
  Features that add utility to the output but do not impose unlocking conditions. These features need to be kept in future transitions of the UTXO state machine.
  type :
  The type of output.

## DelegationOutput Objects

```python
@json

@dataclass
class DelegationOutput()
```

An output which delegates its contained IOTA coins as voting power to a validator.

**Attributes**:

- `amount` - The amount of IOTA coins held by the output.
- `delegated_amount` - The amount of delegated IOTA coins.
- `delegation_id` - Unique identifier of the Delegation Output
- `validator_address` - The Account Address of the validator to which this output is delegating.
- `start_epoch` - The index of the first epoch for which this output delegates.
- `end_epoch` - The index of the last epoch for which this output delegates.
- `unlock_conditions` - Define how the output can be unlocked in a transaction.
- `type` - The type of output.

### deserialize\_output

```python
def deserialize_output(d: Dict[str, Any]) -> Output
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_outputs

```python
def deserialize_outputs(dicts: List[Dict[str, Any]]) -> List[Output]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

