---
sidebar_label: unlock
title: iota_sdk.types.unlock
---

## UnlockType Objects

```python
class UnlockType(IntEnum)
```

Unlock variants.

**Attributes**:

- `Signature` _0_ - An unlock holding a signature unlocking one or more inputs.
- `Reference` _1_ - An unlock which must reference a previous unlock which unlocks also the input at the same index as this Reference Unlock.
- `Account` _2_ - An unlock which must reference a previous unlock which unlocks the account that the input is locked to.
- `Anchor` _3_ - An unlock which must reference a previous unlock which unlocks the anchor that the input is locked to.
- `Nft` _4_ - An unlock which must reference a previous unlock which unlocks the NFT that the input is locked to.
- `Multi` _5_ - Unlocks a MultiAddress with a list of other unlocks.
- `Empty` _6_ - Used to maintain correct index relationship between addresses and signatures when unlocking a MultiUnlock where not all addresses are unlocked.

## SignatureUnlock Objects

```python
@json

@dataclass
class SignatureUnlock()
```

An unlock holding a signature unlocking one or more inputs.

## ReferenceUnlock Objects

```python
@json

@dataclass
class ReferenceUnlock()
```

An unlock which must reference a previous unlock which unlocks also the input at the same index as this Reference Unlock.

## AccountUnlock Objects

```python
@json

@dataclass
class AccountUnlock()
```

An unlock which must reference a previous unlock which unlocks the account that the input is locked to.

## AnchorUnlock Objects

```python
@json

@dataclass
class AnchorUnlock()
```

An unlock which must reference a previous unlock which unlocks the anchor that the input is locked to.

## NftUnlock Objects

```python
@json

@dataclass
class NftUnlock()
```

An unlock which must reference a previous unlock which unlocks the NFT that the input is locked to.

## MultiUnlock Objects

```python
@json

@dataclass
class MultiUnlock()
```

Unlocks a MultiAddress with a list of other unlocks.

## EmptyUnlock Objects

```python
@json

@dataclass
class EmptyUnlock()
```

Used to maintain correct index relationship between addresses and signatures when unlocking a MultiUnlock where not all addresses are unlocked.

### deserialize\_unlock

```python
def deserialize_unlock(d: Dict[str, Any]) -> Unlock
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_unlocks

```python
def deserialize_unlocks(dicts: List[Dict[str, Any]]) -> List[Unlock]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

