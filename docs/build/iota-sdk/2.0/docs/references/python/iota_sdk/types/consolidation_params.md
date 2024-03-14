---
sidebar_label: consolidation_params
title: iota_sdk.types.consolidation_params
---

## ConsolidationParams Objects

```python
@json

@dataclass
class ConsolidationParams()
```

Parameters for consolidation.

**Attributes**:

  force (bool):
  Ignores the output_threshold if set to `true`.
  output_threshold (Optional[int]):
  Consolidates if the output number is &gt;= the output_threshold.
  target_address (Optional[str]):
  Address to which the consolidated output should be sent.

