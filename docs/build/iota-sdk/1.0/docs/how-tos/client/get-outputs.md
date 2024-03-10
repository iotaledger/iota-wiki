---
title: Get Outputs
description: 'Find outputs specifying certain search criteria'
image: /img/logo/iota_mark_light.png
tags:
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

Querying outputs allows you to retrieve specific information about transactions or assets on
the [Tangle](/get-started/introduction/iota/introduction#the-tangle). You can verify the status of transactions, track the movement
of assets, and gather relevant details such as transaction history, ownership, or other metadata. You can query for any
output type using the following functions:

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

- [`Client.basic_output_ids()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.ClientInner.html#method.basic_output_ids)
- [`Client.alias_output_ids()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.ClientInner.html#method.alias_output_ids)
- [`Client.foundry_output_ids()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.ClientInner.html#method.foundry_output_ids)
- [`Client.nft_output_ids()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.ClientInner.html#method.nft_output_ids)

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

- [`Client.basicOutputIds()`](../../references/nodejs/classes/Client.md#basicoutputids)
- [`Client.aliasOutputIds()`](../../references/nodejs/classes/Client.md#aliasoutputids)
- [`Client.nftOutputIds()`](../../references/nodejs/classes/Client.md#nftoutputids)
- [`Client.foundryOutputIds()`](../../references/nodejs/classes/Client.md#foundryoutputids)

</TabItem>
<TabItem value="python" label="Python">

- [`Client.basic_output_ids()`](../../references/python/iota_sdk/client/_node_indexer_api.md#basic_output_ids)
- [`Client.alias_output_ids()`](../../references/python/iota_sdk/client/_node_indexer_api.md#alias_output_ids)
- [`Client.foundry_output_ids()`](../../references/python/iota_sdk/client/_node_indexer_api.md#foundry_output_ids)
- [`Client.nft_output_ids()`](../../references/python/iota_sdk/client/_node_indexer_api.md#nft_output_ids)

</TabItem>
</Tabs>

<AccountClient/>

## Example Code

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

The following code example will:

1. Create a [`Client`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.Client.html) that will connect to the
   node defined in your `.env` file's `NODE_URL` variable.

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_outputs.rs#L26-L31
```

</div>

2. Query the node for basic outputs with the specified
   [`QueryParameters`](https://docs.rs/iota-sdk/latest/iota_sdk/client/node_api/indexer/query_parameters/enum.QueryParameter.html)
   using the [`Client.basic_output_ids()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.ClientInner.html#method.basic_output_ids)
   function.

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_outputs.rs#L42-L49
```

</div>

3. Get the outputs retrieved in the previous step using the
   [`Client.get_outputs()`](https://docs.rs/iota-sdk/latest/iota_sdk/client/core/struct.Client.html#method.get_outputs)
   function.

<div className={'hide-code-block-extras'}>

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_outputs.rs#L55
```

</div>

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

The following code example will:

1. Create a [`Client`](../../references/nodejs/classes/Client.md) that will connect to the
   node defined in your `.env` file's `NODE_URL` variable.

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-outputs.ts#L13-L22
```

</div>

2. Query the node for basic outputs with the specified
   [`QueryParameters`](../../references/nodejs/api_ref.md#queryparameter)
   using the [`Client.basicOutputIds()`](../../references/nodejs/classes/Client.md#basicoutputids)
   function.

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-outputs.ts#L26-L34
```

</div>

3. Get the outputs retrieved in the previous step using the
   [`Client.getOutputs()`](../../references/nodejs/classes/Client.md#getoutputs)
   function.

<div className={'hide-code-block-extras'}>

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-outputs.ts#L38
```

</div>

</TabItem>
<TabItem value="python" label="Python">

The following code example will:

1. Create a [`Client`](../../references/python/iota_sdk/client/client.md) that will connect to the
   node defined in your `.env` file's `NODE_URL` variable.

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_outputs.py#L10-13
```

</div>

2. Query the node for basic outputs with the specified `QueryParameters` using the [`Client.basic_output_ids()`](../../references/python/iota_sdk/client/_node_indexer_api.md#basic_output_ids)
   function.

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_outputs.py#L15-L24
```

</div>

3. Get the outputs retrieved in the previous step using the
   [`Client.get_outputs()`](../../references/python/iota_sdk/client/_high_level_api.md#get_outputs)
   function.

<div className={'hide-code-block-extras'}>

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_outputs.py#L29
```

</div>

</TabItem>
</Tabs>

## Full Example Code

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_outputs.rs
```

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

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

### Expected Output

<Tabs groupId="language" queryString>
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
<TabItem value="typescript-node" label="Typescript (Node.js)">

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
