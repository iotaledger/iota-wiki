---
description: 'Learn about the role of in oracles in blockchain,their role in providing external data to smart contracts and the available oracles in Shimmer EVM.'
image: /img/logo/WASP_logo_dark.png
tags:
- Blockchain Oracles
- Smart Contracts
- IOTA EVM
- Shimmer EVM
- Pyth Network
- Supra Oracles
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import OraclesContractData from '../_partials/_oracles_contract_data.mdx'


# Introduction to Oracles in Blockchain

Smart contracts are powerful tools in the blockchain ecosystem, enabling automated, self-executing agreements based on
predefined conditions. However, one of their fundamental limitations is that they operate in a sandboxed environment.
This isolation ensures that smart contracts produce the same results every time they run, maintaining the deterministic
nature essential for blockchain's integrity and trust. But this also means smart contracts cannot directly access
or interact with external data or systems.

## Bridging the Gap with Oracles

Oracles serve as a critical bridge in this scenario, connecting the isolated world of smart contracts with external data
sources. They play a pivotal role in expanding the functionality of smart contracts by providing them
with real-world information. Oracles fetch data from various external sources, like internet APIs, real-world sensors,
and other data feeds, and then relay this information to the smart contracts on the blockchain.

### Ensuring Idempotent Results

The key challenge for oracles in the blockchain context is to provide data with enough specificity and reliability to
guarantee idempotent results - the property that a smart contract will produce the same outcome every time it's executed
under the same conditions. This consistency is crucial for maintaining trust and predictability in the blockchain
environment.

Oracles achieve this by sourcing data from reliable and verified external sources and using consensus mechanisms or
multiple data points to validate the information's accuracy. This process ensures that the data provided to the smart
contracts is relevant and timely, maintaining the integrity and deterministic nature of the blockchain
operations.

## Oracle Providers in IOTA Ecosystem

### Pyth

The Pyth Network delivers real-time financial market data across multiple blockchains and can be used in off-chain applications.
Pyth gets contributions from over 90 publishers, including several exchanges. It offers comprehensive and accurate price
feeds for asset classes such as US equities, commodities, and cryptocurrencies. Its price feeds get updates
multiple times per second, ensuring they are current and reliable.

:::tip

You can learn more about Pyth Oracles in their [official documentation](https://docs.pyth.network/documentation).

:::

### Supra

Supra Oracles validate and report prices derived from up to 21 data sources with Byzantine Fault Tolerant algorithms
for a wide array of assets and commodities using its own Distributed Oracle Agreement (DORA) to provide data for crypto
prices, forex, equities, and even Web3 data from other blockchains. Its feed gets updated from a minimum of 3 to 8 sources; if a data pair fails to meet this criterion, it gets deprecated to ensure data reliability.

:::tip

You can learn more about Supra Oracles in their [official documentation](https://supraoracles.com/docs/overview).

:::

<OraclesContractData/>

#### Example Code

<Tabs groupId="language" queryString>
<TabItem value="Pyth" label="Pyth">

You can use the following example code to get data from Pyth Oracles in IOTA EVM:

```typescript
import {ethers} from "ethers";
import fetch from "node-fetch";

// Provider
const providerURL = "https://json-rpc.evm.iota.network"
const provider = new ethers.JsonRpcProvider(providerURL);

//  Pyth Oracle contract on IOTA EVM Mainnet
const contractAddress = '0x8D254a21b3C86D32F7179855531CE99164721933';

// Add Price Feed Ids obtained from https://pyth.network/developers/price-feed-ids#pyth-evm-stable
const priceFeedIds = [
    //IOTA/USD
    '0xaf5b9ac426ae79591fde6816bc3f043b5e06d5e442f52112f76249320df22449',
    //BTC/USD
    '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43'
]

async function getPrice() {
  // Replace 'IPythJSONURL' with the actual URL where the IPyth ABI JSON is hosted
  const pythAbiUrl = 'https://raw.githubusercontent.com/pyth-network/pyth-sdk-solidity/main/abis/IPyth.json';
  const pythAbi = await fetch(pythAbiUrl).then((response) => response.json());

  const pythContract = new ethers.Contract(contractAddress, pythAbi, provider);

   try {
    for (const priceFeedId of priceFeedIds) {
      const priceData = await pythContract.getPrice(priceFeedId);
      const price = Number(priceData.price) * 10 ** (Number(priceData.expo));

      console.log(`Price for ${priceFeedId}:`);
      console.log('Price:', price);
      console.log('Confidence Interval:', priceData.conf.toString());
      // Convert publishTime to a formatted date
      const publishTimeDate = new Date(Number(priceData.publishTime) * 1000);
      console.log('Publish Time:', publishTimeDate.toUTCString());
      console.log('\n');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function main() {
  try {
    await getPrice();
  } catch (error) {
    console.error('Main Error:', error.message);
  }
}

main();
```

</TabItem>
</Tabs>