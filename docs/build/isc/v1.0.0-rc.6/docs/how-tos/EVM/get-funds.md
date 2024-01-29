---
description: How to fund your L2 account.
image: /img/logo/WASP_logo_dark.png
keywords:
  - configure
  - using
  - EVM
  - Ethereum
  - Solidity
  - deploy
  - hardhat
  - metamask
  - JSON
  - RPC
  - how to
---
import {AddToMetaMaskButton, EVMNetworks} from '@theme/AddToMetaMaskButton';

# How To Fund Your L2 Account

There are multiple types of assets available on both IOTA L1 and L2, here we discuss a few of them, and how to get them
onto L2.

:::tip Testnet

If you want to fund your Testnet account, please refer to our [Public Testnet Quickstart Guide](../../getting-started/quick-start.mdx)

:::

## Fund an Ethereum Account on a IOTA Smart Contracts Chain

To send EVM transactions, you need to have an Ethereum address that owns tokens on the ISC chain (L2). These tokens will
be used to cover gas fees.

### Firefly Wallet

You can use your [Firefly Wallet](https://firefly.iota.org/) to easily send L1 SMR to your L2 Shimmer EVM account. 

#### Requirements

* [Shimmer Tokens](/get-started/introduction/shimmer/shimmer-token/)
* [Firefly Wallet](https://firefly.iota.org/)
* [Metamask](https://metamask.io/)

1. The first thing you will need to do is add Shimmer EVM to Metamask by hitting the following button.

    <AddToMetaMaskButton cfg={EVMNetworks['shimmerevm']}/>

2. Once you have added Shimmer EVM to Metamask, you can get your address:

   ![Copy your Metamask address](/img/evm/how-tos/get-funds/copy-your-address.png)

3. Next, you will need to open your [Firefly Wallet](https://firefly.iota.org/) and click on `Send Assets`.

   ![Click send assets](/img/evm/how-tos/get-funds/firefly/select-send-assets.png)

4. Select Shimmer EVM in the network dropdown.

   ![Select the Shimmer EVM network](/img/evm/how-tos/get-funds/firefly/select-shimmer-evm.png)

5. Enter the amount of `SMR` tokens you want to transfer, and the Metamask address from step 2, and click on `Next`

   ![Enter the amount of SMR tokens and metamask address](/img/evm/how-tos/get-funds/firefly/enter-your-desired-amount-and-metamask-address.png)
 
6. Review the transaction details and click on `Send`.

   ![Hit Send](/img/evm/how-tos/get-funds/firefly/hit-send.png)

### Bloom Wallet

* [Shimmer Tokens](/get-started/introduction/shimmer/shimmer-token/)
* [Bloom Wallet](https://bloomwallet.io/)
* [Metamask](https://metamask.io/)


You can use your [Bloom Wallet](https://bloomwallet.io/) to easily send L1 SMR to your L2 Shimmer EVM account.

1. The first thing you will need to do is add Shimmer EVM to Metamask by hitting the following button:

   <AddToMetaMaskButton cfg={EVMNetworks['shimmerevm']}/>

2. Once you have added Shimmer EVM to Metamask, you can get your address:

   ![Copy your Metamask address](/img/evm/how-tos/get-funds/copy-your-address.png)

3. Next, you will need to open your [Bloom Wallet](https://firefly.iota.org/) and click on `Send`.

   ![Click send](/img/evm/how-tos/get-funds/bloom/select-send.png)

4. Select an account with `SMR` tokens.

   ![Select an account with SMR tokens](/img/evm/how-tos/get-funds/bloom/select-the-smr-token.png)

5. Enter the address you copied in step 2.

   ![ Enter the address you copied in step 2](/img/evm/how-tos/get-funds/bloom/enter-the-recipient-address.png)

6. Enter the amount of `SMR` tokens you want to transfer.
   
   ![Enter the amount of SMR tokens you want to transfer](/img/evm/how-tos/get-funds/bloom/enter-the-amount.png)

7. Review the transaction details and click on `Confirm`.

   ![Hit Send](/img/evm/how-tos/get-funds/bloom/review-and-confirm-the-transaction.png)
