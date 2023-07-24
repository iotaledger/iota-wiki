---
title: Get Node Information
description: Sometimes it's needed to get certain info from the Node to determine for example if the node is synced or which features it has enabled. You can get this info from a Client instance.
image: /img/logo/iota_mark_light.png
keywords:
  - how to
  - client
  - load balancer
  - node info
  - nodejs
  - python
  - rust
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import AccountClient from '../../\_admonitions/\_account-client.md'

Sometimes it's needed to get certain info from the Node to determine for example if the node is synced or which features it has enabled. You can get this info from a Client instance.

<AccountClient/>

The following code example will:

1. Create a `Client` which will connect to the [Shimmer Testnet](https://api.testnet.shimmer.network).
2. Use the created client to get information about the node.
3. Print the information to the console.

## Code Example

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_info.rs
```

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-info.ts
```

</TabItem>
<TabItem value="python" label="Python">

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_info.py
```

</TabItem>
</Tabs>

## Expected Output

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

```bash
{
  "name": "HORNET",
  "version": "2.0.0-rc.6",
  "status": {
    "isHealthy": true,
    "latestMilestone": {
      "index": 5857259,
      "timestamp": 1687786864,
      "milestoneId": "0x4acfdc55bf4d7eab9e947cda3f6c4c88578c3fd59e44d3b461b706ef73186622"
    },
    "confirmedMilestone": {
      "index": 5857259,
      "timestamp": 1687786864,
      "milestoneId": "0x4acfdc55bf4d7eab9e947cda3f6c4c88578c3fd59e44d3b461b706ef73186622"
    },
    "pruningIndex": 4749782
  },
  "supportedProtocolVersions": [
    2
  ],
  "protocol": {
    "version": 2,
    "networkName": "testnet-1",
    "bech32Hrp": "rms",
    "minPowScore": 1500,
    "belowMaxDepth": 15,
    "rentStructure": {
      "vByteCost": 100,
      "vByteFactorKey": 10,
      "vByteFactorData": 1
    },
    "tokenSupply": "1450896407249092"
  },
  "pendingProtocolParameters": [],
  "baseToken": {
    "name": "Shimmer",
    "tickerSymbol": "SMR",
    "unit": "SMR",
    "subunit": "glow",
    "decimals": 6,
    "useMetricPrefix": false
  },
  "metrics": {
    "blocksPerSecond": 1.2,
    "referencedBlocksPerSecond": 0.6,
    "referencedRate": 50.0
  },
  "features": []
}
```

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

```bash
{
  name: 'HORNET',
  version: '2.0.0-rc.6',
  status: {
    isHealthy: true,
    latestMilestone: {
      index: 5792633,
      timestamp: 1687456380,
      milestoneId: '0x5d554e0c20779dae25288efefb33c385b11c2dc6088f9418d3a1fececa1385fc'
    },
    confirmedMilestone: {
      index: 5792633,
      timestamp: 1687456380,
      milestoneId: '0x5d554e0c20779dae25288efefb33c385b11c2dc6088f9418d3a1fececa1385fc'
    },
    pruningIndex: 4750998
  },
  supportedProtocolVersions: [ 2 ],
  protocol: {
    version: 2,
    networkName: 'testnet-1',
    bech32Hrp: 'rms',
    minPowScore: 1500,
    belowMaxDepth: 15,
    rentStructure: { vByteCost: 100, vByteFactorKey: 10, vByteFactorData: 1 },
    tokenSupply: '1450896407249092'
  },
  pendingProtocolParameters: [],
  baseToken: {
    name: 'Shimmer',
    tickerSymbol: 'SMR',
    unit: 'SMR',
    subunit: 'glow',
    decimals: 6,
    useMetricPrefix: false
  },
  metrics: {
    blocksPerSecond: 1.4,
    referencedBlocksPerSecond: 0.2,
    referencedRate: 14.285714285714285
  },
  features: []
}
```

</TabItem>
<TabItem value="python" label="Python">

```bash
{
    "name": "HORNET",
    "version": "2.0.0-rc.6",
    "status": {
        "isHealthy": true,
        "latestMilestone": {
            "index": 5792633,
            "timestamp": 1687456380,
            "milestoneId": "0x5d554e0c20779dae25288efefb33c385b11c2dc6088f9418d3a1fececa1385fc"
        },
        "confirmedMilestone": {
            "index": 5792633,
            "timestamp": 1687456380,
            "milestoneId": "0x5d554e0c20779dae25288efefb33c385b11c2dc6088f9418d3a1fececa1385fc"
        },
        "pruningIndex": 4750998
    },
    "supportedProtocolVersions": [
        2
    ],
    "protocol": {
        "version": 2,
        "networkName": "testnet-1",
        "bech32Hrp": "rms",
        "minPowScore": 1500,
        "belowMaxDepth": 15,
        "rentStructure": {
            "vByteCost": 100,
            "vByteFactorKey": 10,
            "vByteFactorData": 1
        },
        "tokenSupply": "1450896407249092"
    },
    "pendingProtocolParameters": [],
    "baseToken": {
        "name": "Shimmer",
        "tickerSymbol": "SMR",
        "unit": "SMR",
        "subunit": "glow",
        "decimals": 6,
        "useMetricPrefix": false
    },
    "metrics": {
        "blocksPerSecond": 1.4,
        "referencedBlocksPerSecond": 0.2,
        "referencedRate": 14.285714285714285
    },
    "features": []
}
```

</TabItem>
</Tabs>
