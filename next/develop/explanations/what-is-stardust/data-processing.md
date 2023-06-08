---
keywords:
  - Stardust
  - Shimmer
  - Upgrades
  - Data transactions
  - Data processing
  - Protocol Improvements
  - explanation
description: Data transactions are supported in Stardust, but application specific data processing is off-loaded to external applications.
image: /img/logo/preview.png
---

# Offloading Data Processing

IOTA is unique in that it provides data-only transactions in the Tangle. However, use-cases that build on this feature
face two major problems:

- The Tangle is permissionless, therefore anyone can send data blocks with any content and the blocks are not
  authenticated with signatures like value transactions. The source of the data published through the Tangle is not
  identifiable by the core protocol.
- Data use-case applications often rely on structured, filtered and processed application-specific data. Such
  functionality puts unnecessary load on network nodes running the core protocol.

Stardust removes any data processing from the core protocol, as supporting use-case specific processing requirements
in the core protocol is unfeasible – and anyway, it would jeopardize node performance and hence transaction throughput
in the network.

You can add additional data to outputs that can be used by dApps built on the Tangle. The protocol will treat this
metadata as pure binary data, it has no effect on the validity of an output, but it will increase the required
[storage deposit](storage-deposit.md).

## Tagged Data Payloads

Data in Stardust is published via [Tagged Data Payloads](https://wiki.iota.org/shimmer/tips/tips/TIP-0023), which are
treated
as binary data by the protocol. It is recommended that processing and exposure of application-specific data published
through these payloads is implemented by second layer protocols. One major benefit of this approach is its flexibility:
each application can define and implement their own requirements, for example to authenticate data payloads based on
digital signatures, indexing by custom fields or validating payloads against expected data structures.

The re-engineered node software provides a Remote Procedure Call (gRPC) interface, called IOTA Node
Extension ([INX](https://github.com/iotaledger/inx/blob/develop/proto/inx.proto)) to external applications to interact
with nodes for example to
listen to all network activity. Data use-cases are encouraged to build their custom data processing applications and
connect them to the Tangle via INX.

To stay consistent with this new architecture, Stardust also removes
the [ledger indexing](https://github.com/iotaledger/tips/discussions/53)
from the core protocol and implements a [ledger indexer application](https://github.com/gohornet/inx-indexer) via an INX
module.

:::warning Impermanence

Since the tag serves as a marker for second layer dApps, it is not actually considered by the Stardust protocol. This
means that it could be removed completely.

:::
