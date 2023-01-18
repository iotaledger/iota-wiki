# Networks

## Shimmer Mainnet

You can access all the stable features of the Stardust protocols by using
the [Shimmer Mainnet](https://wiki.iota.org/shimmer/introduction/reference/networks/shimmer/). Although it is an
innovation network, all the Stardust protocol features have been tested on the [Shimmer Beta network](#shimmer-beta), so
you can rest assured that your experience will be stable and reliable.

### Public APIs

The [IOTA Foundation](https://www.iota.org/) provides the following public
load-balanced [endpoints](https://wiki.iota.org/shimmer/introduction/reference/networks/shimmer/) that have MQTT
exposed  (via WebSockets and raw TCP) and offer
the [HTTP REST API](../start-building/nodes/core-rest-api/iota-core-rest-api.info.mdx)
over [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
according to the specifications provided
in [TIP-25](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml),
[TIP-26](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml),
and [TIP-28](https://github.com/iotaledger/tips/blob/main/tips/TIP-0028/tip-0028.md)

* Node API: https://api.shimmer.network
    * Example info endpoint: https://api.shimmer.network/api/core/v2/info
    * Available routes: https://api.shimmer.network/api/routes
    * Health endpoint: https://api.shimmer.network/health
* MQTT: wss://api.shimmer.network:443/api/mqtt/v1
* Chronicle API: https://chronicle.shimmer.network

## Shimmer Beta

The [Shimmer Beta network](https://wiki.iota.org/shimmer/introduction/reference/networks/betanet/) is the testing
grounds for the Shimmer [Mainnet](#mainnet-1). It's the place where developers
can try out all the latest features that are being tested before being merged into the main Stardust protocol. As it is
a testing ground for new features, you may experience some inconveniences or errors which usually come with beta stage
software.

### The Faucet

As the [Shimmer Beta](#shimmer-beta) network is a testing network, you can request test token from
the [Shimmer Faucet](https://faucet.testnet.shimmer.network/), you only need to enter the desired address  

### Public APIs

load-balanced [endpoints](https://wiki.iota.org/shimmer/introduction/reference/networks/betanet/) that have MQTT
exposed  (via
WebSockets and raw TCP) and offer the HTTP REST API over [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
according to the specifications provided
in [TIP-25](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0025/core-rest-api.yaml)
and [TIP-26](https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml).

* Node API: https://api.testnet.shimmer.network
    * Example info endpoint: https://api.testnet.shimmer.network/api/core/v2/info
    * Available routes: https://api.testnet.shimmer.network/api/routes
    * Health endpoint: https://api.testnet.shimmer.network/health
* MQTT: wss://api.testnet.shimmer.network:443/api/mqtt/v1
* Chronicle API: https://chronicle.testnet.shimmer.network
