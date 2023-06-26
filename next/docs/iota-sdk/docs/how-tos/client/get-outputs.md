---
title: Get Outputs
description: 'Find outputs specifying certain search criteria'
image: /img/logo/iota_mark_light.png
keywords:
  - how to
  - client
  - outputs
  - nodejs
  - python
  - rust
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import AccountClient from '../../\_admonitions/\_account-client.md'

You can use the indexer to query for specific outputs. You can query for any output type, just change the function to the output type you need

<AccountClient/>

The following code example will:

1. Create a `Client` which will connect to the [Shimmer Testnet](https://api.testnet.shimmer.network).
2. Use the created client to query for outputs with the specified parameters.
3. Print the first output found.

## Code Example

<Tabs groupId="language">
<TabItem value="rust" label="Rust">

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_outputs.rs
```

</TabItem>
<TabItem value="nodejs" label="Nodejs">

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-outputs.ts
```

</TabItem>
<TabItem value="python" label="Python">

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_outputs.py
```

</TabItem>
</Tabs>

## Expected Output

<Tabs groupId="language">
<TabItem value="rust" label="Rust">

```bash
First output of query:
ID: OutputId(0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c0000)
OutputWithMetadata {
    output: BasicOutput {
        amount: 12310426,
        native_tokens: NativeTokens(
            [],
        ),
        unlock_conditions: UnlockConditions(
            [
                AddressUnlockCondition(
                    Ed25519Address(0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3),
                ),
            ],
        ),
        features: Features(
            [],
        ),
    },
    metadata: OutputMetadata {
        block_id: BlockId(0x2a006e26f54f1221b4fa5738bf2b3501a0a2e7085ff8dcc03d0700f75bbcc43c),
        output_id: OutputId(0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c0000),
        is_spent: false,
        milestone_index_spent: None,
        milestone_timestamp_spent: None,
        transaction_id_spent: None,
        milestone_index_booked: 5300818,
        milestone_timestamp_booked: 1684939216,
        ledger_index: 5794425,
    },
}
```

</TabItem>
<TabItem value="nodejs" label="Nodejs">

```bash
First output of query:
ID:  0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c0000
OutputResponse {
  metadata: {
    blockId: '0x2a006e26f54f1221b4fa5738bf2b3501a0a2e7085ff8dcc03d0700f75bbcc43c',
    transactionId: '0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c',
    outputIndex: 0,
    isSpent: false,
    milestoneIndexBooked: 5300818,
    milestoneTimestampBooked: 1684939216,
    ledgerIndex: 5794505
  },
  output: BasicOutput {
    type: 3,
    amount: '12310426',
    unlockConditions: [ [AddressUnlockCondition] ]
  }
}
```

</TabItem>
<TabItem value="python" label="Python">

```bash
First output of query:
ID: 0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c0000
{
    "metadata": {
        "blockId": "0x2a006e26f54f1221b4fa5738bf2b3501a0a2e7085ff8dcc03d0700f75bbcc43c",
        "transactionId": "0x57a796e9b8c5fc96c330fa45c2658f37d04f631eedc85d8e1e23434ca599eb8c",
        "outputIndex": 0,
        "isSpent": false,
        "milestoneIndexBooked": 5300818,
        "milestoneTimestampBooked": 1684939216,
        "ledgerIndex": 5794538
    },
    "output": {
        "type": 3,
        "amount": "12310426",
        "unlockConditions": [
            {
                "type": 0,
                "address": {
                    "type": 0,
                    "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"
                }
            }
        ]
    }
}
```

</TabItem>
</Tabs>
