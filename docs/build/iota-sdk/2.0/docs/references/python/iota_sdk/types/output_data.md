---
sidebar_label: output_data
title: iota_sdk.types.output_data
---

## OutputData Objects

```python
@json

@dataclass
class OutputData()
```

Output data.

**Attributes**:

- `output_id` - With the output data corresponding output ID.
- `metadata` - With the output corresponding metadata.
- `output` - The output object itself.
- `address` - The address associated with the output.
- `network_id` - The network ID the output belongs to.
- `remainder` - Whether the output represents a remainder amount.
- `chain` - A list of chain state indexes.

