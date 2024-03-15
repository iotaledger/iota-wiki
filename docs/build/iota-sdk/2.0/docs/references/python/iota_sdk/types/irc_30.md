---
sidebar_label: irc_30
title: iota_sdk.types.irc_30
---

## Irc30Metadata Objects

```python
@dataclass
class Irc30Metadata()
```

The IRC30 native token metadata standard schema.

**Attributes**:

- `standard` - The metadata standard (IRC30).
- `name` - The human-readable name of the native token.
- `symbol` - The symbol/ticker of the token.
- `decimals` - Number of decimals the token uses (divide the token amount by 10^decimals to get its user representation).
- `description` - The human-readable description of the token.
- `url` - URL pointing to more resources about the token.
- `logoUrl` - URL pointing to an image resource of the token logo.
- `logo` - The svg logo of the token encoded as a byte string.

### from\_dict

```python
@staticmethod
def from_dict(metadata_dict: dict)
```

Takes a dictionary as input and returns an instance of the `Irc30Metadata` class.

### as\_hex

```python
def as_hex()
```

Turns this schema into a hex encoded string

### as\_feature

```python
def as_feature()
```

Turns this schema into a MetadataFeature type

