---
sidebar_label: burn
title: iota_sdk.types.burn
---

## Burn Objects

```python
@dataclass
class Burn()
```

A DTO for [`Burn`]

**Arguments**:

  -----------
- `aliases` - Optional[List[str]]
  The aliases (hex encoded) to burn
- `nfts` - Optional[List[str]]
  The NFTs (hex encoded) to burn
- `foundries` - Optional[List[str]]
  The foundries (hex encoded) to burn
- `nativeTokens` - Optional[List[NativeToken]]
  The native tokens to burn

