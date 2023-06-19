---
sidebar_label: unlock_condition
title: iota_sdk.types.unlock_condition
---

## UnlockCondition Objects

```python
class UnlockCondition()
```

### \_\_init\_\_

```python
def __init__(type=None,
             address=None,
             amount=None,
             unix_time=None,
             return_address=None)
```

Initialize an UnlockCondition

Parameters
----------
type : UnlockConditionType
    The type of unlock condition
address : Address
    Address for unlock condition
amount : int
    Amount for storage deposit unlock condition
unix_time : int
    Unix timestamp for timelock and expiration unlock condition
return_address : Address
    Return address for expiration and storage deposit unlock condition

## AddressUnlockCondition Objects

```python
class AddressUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(address)
```

Initialize an AddressUnlockCondition

Parameters
----------
address : Address
    Address

## StorageDepositReturnUnlockCondition Objects

```python
class StorageDepositReturnUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(amount, return_address)
```

Initialize a StorageDepositReturnUnlockCondition

Parameters
----------
amount : int
    Amount
return_address : Address
    Return address

## TimelockUnlockCondition Objects

```python
class TimelockUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(unix_time)
```

Initialize a TimelockUnlockCondition

Parameters
----------
unix_time : int
    Unix timestamp at which to unlock output

## ExpirationUnlockCondition Objects

```python
class ExpirationUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(unix_time, return_address)
```

Initialize an ExpirationUnlockCondition

Parameters
----------
unix_time : int
    Unix timestamp
return_address : Address
    Return address

## StateControllerAddressUnlockCondition Objects

```python
class StateControllerAddressUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(address)
```

Initialize a StateControllerAddressUnlockCondition

Parameters
----------
address : Address
    Address for unlock condition

## GovernorAddressUnlockCondition Objects

```python
class GovernorAddressUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(address)
```

Initialize a GovernorAddressUnlockCondition

Parameters
----------
address : Address
    Address for unlock condition

## ImmutableAliasAddressUnlockCondition Objects

```python
class ImmutableAliasAddressUnlockCondition(UnlockCondition)
```

### \_\_init\_\_

```python
def __init__(address)
```

Initialize an ImmutableAliasAddressUnlockCondition

Parameters
----------
address : Address
    Address for unlock condition

