---
sidebar_label: unlock_condition
title: iota_sdk.types.unlock_condition
---

## UnlockConditionType Objects

```python
class UnlockConditionType(IntEnum)
```

Unlock condition variants.

**Attributes**:

- `Address` _0_ - An address unlock condition.
- `StorageDepositReturn` _1_ - A storage deposit return unlock condition.
- `Timelock` _2_ - A timelock unlock condition.
- `Expiration` _3_ - An expiration unlock condition.
- `StateControllerAddress` _4_ - A state controller address unlock condition.
- `GovernorAddress` _5_ - A governor address unlock condition.
- `ImmutableAccountAddress` _6_ - An immutable account address unlock condition.

## AddressUnlockCondition Objects

```python
@json

@dataclass
class AddressUnlockCondition()
```

An address unlock condition.

**Arguments**:

- `address` - An address unlocked with a private key.

## StorageDepositReturnUnlockCondition Objects

```python
@json

@dataclass
class StorageDepositReturnUnlockCondition()
```

A storage-deposit-return unlock condition.

**Arguments**:

- `amount` - The amount of base coins the consuming transaction must deposit to `return_address`.
- `return_address` - The address to return the amount to.

## TimelockUnlockCondition Objects

```python
@json

@dataclass
class TimelockUnlockCondition()
```

Defines a slot index until which the output can not be unlocked.

**Arguments**:

- `slot_index` - Slot index that defines when the output can be consumed.

## ExpirationUnlockCondition Objects

```python
@json

@dataclass
class ExpirationUnlockCondition()
```

Defines a slot index until which only the Address defined in the Address Unlock Condition is allowed to unlock the output. After the slot index is reached/passed, only the Return Address can unlock it.

**Arguments**:

- `slot_index` - Before this slot index, Address Unlock Condition is allowed to unlock the output,
  after that only the address defined in Return Address.
- `return_address` - The return address if the output was not claimed in time.

## StateControllerAddressUnlockCondition Objects

```python
@json

@dataclass
class StateControllerAddressUnlockCondition()
```

A state controller address unlock condition.

**Arguments**:

- `address` - The state controller address that owns the output.

## GovernorAddressUnlockCondition Objects

```python
@json

@dataclass
class GovernorAddressUnlockCondition()
```

A governor address unlock condition.

**Arguments**:

- `address` - The governor address that owns the output.

## ImmutableAccountAddressUnlockCondition Objects

```python
@json

@dataclass
class ImmutableAccountAddressUnlockCondition()
```

An immutable account address unlock condition.

**Arguments**:

- `address` - The permanent account address that owns this output.

### deserialize\_unlock\_condition

```python
def deserialize_unlock_condition(d: Dict[str, Any]) -> UnlockCondition
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_unlock\_conditions

```python
def deserialize_unlock_conditions(
        dicts: List[Dict[str, Any]]) -> List[UnlockCondition]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

