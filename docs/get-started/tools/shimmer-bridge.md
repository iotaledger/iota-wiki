# ShimmerBridge User Guide

## Introduction

[ShimmerBridge](https://shimmerbridge.org/) is a web application that allows you to transfer wrapped tokens between different networks by interacting with the decentralized smart contracts of [LayerZero](https://layerzero.network/). ShimmerBridge supports the **Ethereum, Avalanche C-Chain, Polygon, Arbitrum One, Optimism, Base, Fantom, and Binance Smart Chain** 
networks. You can transfer several wrapped tokens, including **ETH, USDT, USDC, WBTC, AVAX, MATIC, FTM, and BNB.** 

This guide explains how to bridge tokens with ShimmerBridge, including selecting the source chain, choosing the token to transfer, entering the number of tokens and transferring the tokens. It also covers troubleshooting issues that may arise during the transfer process.

The token addresses on each network are listed [at the end of this guide](#shimmerbridge-token-addresses) for your reference.

## Bridge Assets with ShimmerBridge

### 1. Accept the Terms and Conditions

Go to **https://shimmerbridge.org/terms** and read the terms and conditions carefully before using ShimmerBridge. Once you understand the terms and conditions, enter the ShimmerBridge User Interface and connect your Web3 Wallet.


![Layer Zero UI1](/img/introduction/Layer_Zero_Ui.png)

### 2. Select the Source Chain

You should select the source chain from which you want to bridge a token into [Shimmer EVM](https://shimmer.network/evm). To send tokens out of Shimmer EVM, select Shimmer EVM as the source chain.

### 3. Select the Token to Transfer

Click "**Select Token**" to choose a token to transfer from the source chain. The Interface will display all bridgeable tokens and your token balance in the selection dropdown. Also all other bridgeable tokens you hold in one of the other available networks are displayed. 

### 4. Enter the Number of Tokens You Want to Bridge From the Source Chain

- The app will display:
    - The amount of bridged tokens you will receive on the destination chain. 
    - The necessary fees for the token transfer in the native gas token of the source chain. Ensure you have enough gas tokens on the source chain to pay the fees.

:::info Gas on Destination

If you do not own any gas token on the destination chain (in this case, SMR on Shimmer EVM), you can arrange an airdrop of native gas tokens to your wallet as part of your transfer. This will increase your fee but enable you to have the necessary amount of gas in the destination chain for further activities.
Either use "Max", which gives you 0.25 SMR, or specify a custom amount.

:::

### 5. Transfer the Tokens

- Click "**Transfer**". Your wallet will ask you to approve the token spending and confirm the transaction
- After your confirmation, a popup will occur; if you click on the link, you will be forwarded to [LayerZero Scan](https://layerzeroscan.com/) to observe the detailed progress of your bridge interaction.
- The ShimmerBridge app will also display the progress of your transaction, including an estimated period till the bridging is completed in the "transactions" box that appears after confirmation.
- Once the status changes to "completed", your tokens have arrived in your wallet.
- Please make sure you have imported the correct token into your wallet on the destination chain to see it.

## Troubleshooting

Conditions that will hinder your transfer will be indicated in the "Action button" as follows:

### Insufficient Balance

- You entered a higher amount of tokens than you hold in your account.
    -  Reduce the amount you want to transfer or add more tokens to your wallet.

### Not Enough Native for Gas

 - You must own more gas on the source chain to pay the required fees.
    -  You need to send more of the source chain's native gas token to your wallet to resolve this.
  
### Select Different Chain

- You have selected an incompatible selection of source and destination chain. It is only possible to bridge in and out of Shimmer EVM with ShimmerBridge; you cannot send from ETH to Avalanche, for example.
    - Send either tokens into Shimmer EVM or send them from Shimmer EVM out to another chain.

### Limit Exceeded

- This can occur for bridgeable tokens that exist on several networks (ETH/WETH, USDT and USDC).
- These tokens can enter Shimmer EVM from different source chains but are represented as one token on Shimmer EVM. 
If you aim to send these tokens out of Shimmer EVM, the LayerZero contracts on each chain can only payout the amount of these tokens that are currently locked in the contract, so you cannot send more assets back than currently are available to release. This would otherwise exceed the limits of that contract.
 
#### Example

- On Ethereum, 100 USDT are locked in the Bridge contract (from users that did send this USDT from ETH to Shimmer EVM)
- On Avalanche, also 100 USDT are locked in the Bridge contract (from users that did send this USDT from Avalanche to Shimmer EVM)
- You hold 150 USDT in your Wallet on Shimmer EVM
- If you try to send this 150 USDT to Avalanche, it will exceed the amount currently locked in the Avalanche USDT Bridge contract; therefore, you can't execute such a transfer.
- Reduce the amount you attempt to send until it is below the Limit.

For any further questions or support, please visit the [LayerZero Discord](https://discord-layerzero.netlify.app/discord).

## ShimmerBridge Token Addresses

### LayerZero ShimmerBridge Wrapped Tokens on Shimmer Evm

:::info

- [USDT](https://explorer.evm.shimmer.network/address/0xa4f8C7C1018b9dD3be5835bF00f335D9910aF6Bd?tab=contract) - Tether USD
Address:

```plaintext
0xa4f8C7C1018b9dD3be5835bF00f335D9910aF6Bd
```

- [USDC](https://explorer.evm.shimmer.network/address/0xeCE555d37C37D55a6341b80cF35ef3BC57401d1A?tab=contract) - USD Coin
Address:

```plaintext
0xeCE555d37C37D55a6341b80cF35ef3BC57401d1A
```

- [ETH](https://explorer.evm.shimmer.network/address/0x4638C9fb4eFFe36C49d8931BB713126063BF38f9?tab=contract) - Ethereum
Address:

```plaintext
0x4638C9fb4eFFe36C49d8931BB713126063BF38f9
```

- [WBTC](https://explorer.evm.shimmer.network/address/0xb0119035d08CB5f467F9ed8Eae4E5f9626Aa7402?tab=contract) - Wrapped Bitcoin
Address:

```plaintext
0xb0119035d08CB5f467F9ed8Eae4E5f9626Aa7402
```

- [MATIC](https://explorer.evm.shimmer.network/address/0xE6373A7Bb9B5a3e71D1761a6Cb4992AD8537Bf28?tab=contract) - Matic
Address:

```plaintext
0xE6373A7Bb9B5a3e71D1761a6Cb4992AD8537Bf28
```

- [AVAX](https://explorer.evm.shimmer.network/address/0xEAf8553fD72417C994525178fC917882d5AEc725?tab=contract) - Avalanche
Address:

```plaintext
0xEAf8553fD72417C994525178fC917882d5AEc725
```

- [FTM](https://explorer.evm.shimmer.network/address/0x8C96Dd1A8B1952Ce6F3a582170bb173eD591D40D?tab=internal_txns) - Fantom 
Address:`0x8C96Dd1A8B1952Ce6F3a582170bb173eD591D40D`

- [BNB](https://explorer.evm.shimmer.network/address/0x2A6F394085B8E33fbD9dcFc776BCE4ed95F1900D?tab=contract) - Binance Coin
Address:

```plaintext
0x2A6F394085B8E33fbD9dcFc776BCE4ed95F1900D
```

:::

### LayerZero ShimmerBridge Wrapped Tokens on Connected Networks

:::info Ethereum

- USDC - USD Coin
Address:

```plaintext
0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48
```

- USDT - Tether USD
Address:

```plaintext
0xdAC17F958D2ee523a2206206994597C13D831ec7
``` 

- WBTC - Wrapped Bitcoin
Address:

```plaintext
0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
```

:::

:::info Arbitrum

- USDC - USD Coin
Address:

```plaintext
0xaf88d065e77c8cC2239327C5EDb3A432268e5831
```

- USDT - Tether USD
Address:

```plaintext
0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9
```

- WBTC - Wrapped Bitcoin
Address:

```plaintext
0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f
```

- WETH - Wrapped Ether
Address:

```plaintext
0x82af49447d8a07e3bd95bd0d56f35241523fbab1
```

:::

:::info Polygon

- USDC - USD Coin
Address:

```plaintext
0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359
```

- USDT - Tether USD
Address:

```plaintext
0xc2132D05D31c914a87C6611C10748AEb04B58e8F
```

- WBTC - Wrapped Bitcoin
Address:

```plaintext
0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6
```

- WETH - Wrapped Ether
Address:

```plaintext
0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619
```

:::

:::info Optimism

- USDC - USD Coin
Address:

```plaintext
0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85
```

- USDT - Tether USD
Address:

```plaintext
0x94b008aA00579c1307B0EF2c499aD98a8ce58e58
```

- WBTC - Wrapped Bitcoin
Address:

```plaintext
0x68f180fcCe6836688e9084f035309E29Bf0A2095
```

- WETH - Wrapped Ether
Address:

```plaintext
0x4200000000000000000000000000000000000006
```

:::

:::info Binance Smart Chain

- BNB - Binance Coin
Native Gas Token

- USDC - USD Coin
Address:

```plaintext
0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
```

- USDT - Tether USD
Address:

```plaintext
0x55d398326f99059fF775485246999027B3197955
```

:::

:::info Base

- USDC - USD Coin
Address:

```plaintext
0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
```

- WETH - Wrapped Ether
Address:

```plaintext
0x4200000000000000000000000000000000000006
```

:::

:::info Fantom

- FTM - Fantom
Native Gas Token

- USDC - LayerZero USD Coin
Address:

```plaintext
0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf
```

:::

:::info Avalanche C-Chain

- AVAX - Avalanche
Native Gas Token

- USDC - USD Coin
Address:

```plaintext
0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E
```

- USDT - Tether USD
Address:

```plaintext
0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7
```

:::

## Useful Links

More Information about the LayerZero protocol is available in their [official documentation](https://docs.layerzero.network/)

Visit [Github](https://github.com/iotaledger) to review the Open Source code of the ShimmerBridge Web Application.

The Audit Report of the ShimmerBridge Web Application is available on the [Zokyo Security Github Repository](https://github.com/zokyo-sec/audit-reports)

The Audit Reports of the LayerZero protocol are available in this [LayerZero GitHub Repository](https://github.com/LayerZero-Labs/LayerZero/tree/main/audit)
