---
sidebar_label: feature
title: iota_sdk.types.feature
---

## FeatureType Objects

```python
class FeatureType(IntEnum)
```

Types of features.

**Attributes**:

- `Sender` _0_ - The sender feature.
- `Issuer` _1_ - The issuer feature.
- `Metadata` _2_ - The metadata feature.
- `StateMetadata` _3_ - The state metadata feature.
- `Tag` _4_ - The tag feature.
- `NativeToken` _5_ - The native token feature.
- `BlockIssuer` _6_ - The block issuer feature.
- `Staking` _7_ - The staking feature.

## SenderFeature Objects

```python
@json

@dataclass
class SenderFeature()
```

Identifies the validated sender of an output.

**Attributes**:

- `address` - A given sender address.

## IssuerFeature Objects

```python
@json

@dataclass
class IssuerFeature()
```

Identifies the validated issuer of the UTXO state machine.

**Attributes**:

- `address` - A given issuer address.

## MetadataFeature Objects

```python
@json

@dataclass
class MetadataFeature()
```

Defines metadata, arbitrary binary data, that will be stored in the output.

**Attributes**:

- `entries` - A key-value map where the keys are graphic ASCII strings and the values hex-encoded binary data.

## StateMetadataFeature Objects

```python
@json

@dataclass
class StateMetadataFeature()
```

A Metadata Feature that can only be changed by the State Controller.

**Attributes**:

- `entries` - A key-value map where the keys are graphic ASCII strings and the values hex-encoded binary data.

## TagFeature Objects

```python
@json

@dataclass
class TagFeature()
```

Makes it possible to tag outputs with an index, so they can be retrieved through an indexer API.

**Attributes**:

- `tag` - A hex encoded tag used to index the output.

## NativeTokenFeature Objects

```python
@json

@dataclass
class NativeTokenFeature()
```

Contains a native token.
id: The unique identifier of the native token.
amount: The amount of native tokens.

## BlockIssuerFeature Objects

```python
@json

@dataclass
class BlockIssuerFeature()
```

Contains the public keys to verify block signatures and allows for unbonding the issuer deposit.

**Attributes**:

- `expiry_slot` - The slot index at which the Block Issuer Feature expires and can be removed.
- `block_issuer_keys` - The Block Issuer Keys.

## StakingFeature Objects

```python
@json

@dataclass
class StakingFeature()
```

Stakes IOTA coins to become eligible for committee selection, validate the network and receive Mana rewards.

**Attributes**:

- `staked_amount` - The amount of IOTA coins that are locked and staked in the containing account.
- `fixed_cost` - The fixed cost of the validator, which it receives as part of its Mana rewards.
- `start_epoch` - The epoch index in which the staking started.
- `end_epoch` - The epoch index in which the staking ends.

### deserialize\_feature

```python
def deserialize_feature(d: Dict[str, Any]) -> Feature
```

Takes a dictionary as input and returns an instance of a specific class based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `d`: A dictionary that is expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

### deserialize\_features

```python
def deserialize_features(dicts: List[Dict[str, Any]]) -> List[Feature]
```

Takes a list of dictionaries as input and returns a list with specific instances of classes based on the value of the &#x27;type&#x27; key in the dictionary.

**Arguments**:

  * `dicts`: A list of dictionaries that are expected to have a key called &#x27;type&#x27; which specifies the type of the returned value.

