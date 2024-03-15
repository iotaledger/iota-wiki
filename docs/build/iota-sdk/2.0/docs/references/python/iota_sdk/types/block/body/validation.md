---
sidebar_label: validation
title: iota_sdk.types.block.body.validation
---

## ValidationBlockBody Objects

```python
@json

@dataclass
class ValidationBlockBody()
```

A Validation Block Body is a special type of block body used by validators to secure the network. It is recognized by the
Congestion Control of the IOTA 2.0 protocol and can be issued without burning Mana within the constraints of the
allowed validator throughput. It is allowed to reference more parent blocks than a normal Basic Block.

**Attributes**:

- `strong_parents` - Blocks that are strongly directly approved.
- `weak_parents` - Blocks that are weakly directly approved.
- `shallow_like_parents` - Blocks that are directly referenced to adjust opinion.
- `highest_supported_version` - The highest supported protocol version the issuer of this block supports.
- `protocol_parameters_hash` - The hash of the protocol parameters for the Highest Supported Version.

