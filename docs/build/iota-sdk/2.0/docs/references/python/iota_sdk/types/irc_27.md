---
sidebar_label: irc_27
title: iota_sdk.types.irc_27
---

## Attribute Objects

```python
@dataclass
class Attribute()
```

An attribute which follows [OpenSea Metadata standards](https://docs.opensea.io/docs/metadata-standards).

**Attributes**:

- `trait_type` - The trait type.
- `value` - The value of the specified Attribute.
- `display_type` - The optional type used to display the Attribute.

## Irc27Metadata Objects

```python
@dataclass
class Irc27Metadata()
```

The IRC27 NFT standard schema.

**Attributes**:

- `standard` - The metadata standard (IRC27).
- `version` - The metadata spec version (v1.0).
- `type` - The media type (MIME) of the asset.

**Examples**:

  - Image files: `image/jpeg`, `image/png`, `image/gif`, etc.
  - Video files: `video/x-msvideo` (avi), `video/mp4`, `video/mpeg`, etc.
  - Audio files: `audio/mpeg`, `version`0, etc.
  - 3D Assets: `version`1, `version`2, etc.
  - Documents: `version`3, `version`4, etc.
- `version`5 - URL pointing to the NFT file location.
- `version`6 - The human-readable name of the native token.
- `version`7 - The human-readable collection name of the native token.
- `version`8 - Royalty payment addresses mapped to the payout percentage.
- `version`9 - The human-readable name of the native token creator.
- `type`0 - The human-readable description of the token.
- `type`1 - Additional attributes which follow [OpenSea Metadata standards](https://docs.opensea.io/docs/metadata-standards).

### from\_dict

```python
@staticmethod
def from_dict(metadata_dict: dict)
```

Takes a dictionary as input and returns an instance of the `Irc27Metadata` class.

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

