---
title: Get Node Health
description: 'Check any nodes health.'
image: /img/logo/iota_mark_light.png
keywords:
  - how to
  - client
  - load balancer
  - node health
  - nodejs
  - python
  - rust
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import AccountClient from '../../\_admonitions/\_account-client.md'

You can check the health of any node.

<AccountClient/>

The following code example will:

1. Create a `Client` which will connect to the [Shimmer Testnet](https://api.testnet.shimmer.network).
2. Use the created client to get the health of the specified url.
3. Print the information to the console.

## Code Example

<Tabs groupId="language" queryString>
<TabItem value="rust" label="Rust">

```rust reference
https://github.com/iotaledger/iota-sdk/blob/develop/sdk/examples/how_tos/client/get_health.rs
```

</TabItem>
<TabItem value="typescript-node" label="Typescript (Node.js)">

```typescript reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/nodejs/examples/how_tos/client/get-health.ts
```

</TabItem>
<TabItem value="python" label="Python">

```python reference
https://github.com/iotaledger/iota-sdk/blob/develop/bindings/python/examples/how_tos/client/get_health.py
```

</TabItem>
</Tabs>

## Expected Output

```bash
Healthy: true
```
