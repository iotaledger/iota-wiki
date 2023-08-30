---
description: Networks and endpoints in the IOTA ecosystem.
keywords:
  - mainnet
  - shimmer
  - devnet
  - public testnet
  - MQTT
  - REST API
  - HTTP
  - Explorer
  - reference
  - Endpoints
---

# Networks & Endpoints

This pages gives an overview around the different networks available in the IOTA ecosystem.

In general, all endpoints are load balanced but are also subject to rate limiting.
If you are developing a production level application for IOTA, consider setting up your own infrastructure in order to
have more control and to not run into any limits.

## IOTA Mainnet

[The IOTA Mainnet](https://explorer.iota.org/mainnet) is the production network within the IOTA ecosystem using the IOTA
token.

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>HTTP REST API</th>
      <th>Event API</th>
      <th>Permanode API</th>
      <th>Faucet</th>
    </tr>
    <tr>
      <td>IOTA Token</td>
      <td><a href="/learn/protocols/chrysalis/introduction/">Chrysalis</a></td>
      <td>
          <a href="https://chrysalis-nodes.iota.org/api/v1/info">https://chrysalis-nodes.iota.org</a>
          , <a href="https://chrysalis-nodes.iota.cafe/api/v1/info">https://chrysalis-nodes.iota.cafe</a>
      </td>
      <td>
        wss://chrysalis-nodes.iota.org:443 (MQTT 3.1, /mqtt)
      </td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Shimmer

[Shimmer](https://explorer.iota.org/shimmer) is the staging network for new protocol versions before they hit IOTA
Mainnet.

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>HTTP REST API</th>
      <th>Event API</th>
      <th>Permanode API</th>
      <th>Faucet</th>
    </tr>
    <tr>
      <td>Shimmer Token</td>
      <td><a href="/learn/protocols/stardust/introduction/">Stardust</a></td>
      <td>
          <a href="https://api.shimmer.network/api/core/v2/info">https://api.shimmer.network</a>
      </td>
      <td>
          wss://api.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)
      </td>
      <td>https://chronicle.shimmer.network</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Public Testnet

[The Public Testnet](https://explorer.iota.org/testnet) acts as a test bed for builders without any real world value.

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>HTTP REST API</th>
      <th>Event API</th>
      <th>Permanode API</th>
      <th>Faucet</th>
    </tr>
    <tr>
      <td>Testnet Tokens (no value)</td>
      <td><a href="/learn/protocols/stardust/introduction/">Stardust</a></td>
      <td>
        <a href="https://api.testnet.shimmer.network/api/core/v2/info">https://api.testnet.shimmer.network</a>
      </td>
      <td>
        wss://api.testnet.shimmer.network:443/api/mqtt/v1 (MQTT 3.1)
      </td>
      <td>https://chronicle.testnet.shimmer.network</td>
      <td>
        <a href="https://faucet.testnet.shimmer.network/api/info">https://faucet.testnet.shimmer.network</a>
      </td>
    </tr>
  </tbody>
</table>

### Testnet EVM

[The Testnet EVM](https://explorer.evm.testnet.shimmer.network/) (also called ShimmerEVM Beta) runs as a layer 2 on top
of the Public Testnet. This network does not run
any IOTA protocol but instead uses ISC to facilitate an Ethereum Virtual Machine and has an enshrined bridge from to
layer 1.

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>RPC URL</th>
      <th>Chain ID</th>
      <th>Faucet</th>
    </tr>
    <tr>
      <td>Testnet Tokens (no value)</td>
      <td>ISC / EVM</td>
      <td>
        <a href="https://json-rpc.evm.testnet.shimmer.network">https://json-rpc.evm.testnet.shimmer.network</a>
      </td>
      <td>1072</td>
      <td><a href="https://evm-faucet.testnet.shimmer.network">https://evm-faucet.testnet.shimmer.network</a></td>
    </tr>
  </tbody>
</table>

## DevNet

[The DevNet](https://explorer.iota.org/legacy-mainnet) is a legacy network running the Chrysalis protocol and is to be
decommissioned once IOTA Mainnet runs under Stardust.

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>HTTP REST API</th>
      <th>Event API</th>
      <th>Permanode API</th>
      <th>Faucet</th>
    </tr>
    <tr>
      <td>Testnet Tokens (no value)</td>
      <td><a href="/learn/protocols/chrysalis/introduction/">Chrysalis</a></td>
      <td>
        <a href="https://api.lb-0.h.chrysalis-devnet.iota.cafe/api/v1/info">https://api.lb-0.h.chrysalis-devnet.iota.cafe</a>
        , <a href="https://api.lb-1.h.chrysalis-devnet.iota.cafe/api/v1/info">https://https://api.lb-1.h.chrysalis-devnet.iota.cafe</a>
      </td>
      <td>wss://api.lb-0.h.chrysalis-devnet.iota.cafe:443 (MQTT 3.1, /mqtt)</td>
      <td>https://chronicle.testnet.shimmer.network</td>
      <td>
        <a href="https://faucet.testnet.shimmer.network/api/info">https://faucet.testnet.shimmer.network</a>
      </td>
    </tr>
  </tbody>
</table>

## Legacy

The legacy IOTA Mainnet still running for the sole purpose to facilitate token migrations into the IOTA Mainnet.
See following [page](https://chrysalis.iota.org/status) for a status on the token migration.

:::info Migration Only
The legacy IOTA Mainnet only allows the creation of migration transactions and can only be used via FireFly.
:::

<table>
  <tbody>
    <tr>
      <th>Base Token</th>
      <th>Protocol</th>
      <th>HTTP REST API</th>
    </tr>
    <tr>
      <td>IOTA Token (Unmigrated)</td>
      <td>Legacy Trinary Protocol</td>
      <td>https://api-legacy.iotaledger.net</td>
    </tr>
  </tbody>
</table>
