# Connect to Shimmer EVM Testnet and deploy a Solidity Smart Contract

:::info

In this tutorial, we will connect to Shimmer EVM Testnet, connect Metamask to it, get funded and deploy a smart contract in Solidity.

:::

## Prerequisites

- [Metamask](https://metamask.io/) or any other wallet of your choice.
- [Remix](https://remix-project.org/) or any other development environment of your choice.

## Connect to Shimmer EVM Testnet

First, let's setup our Metamask with the EVM. For this exercise, we will use the testnet EVM chain. You can find all endpoints [here](https://wiki.iota.org/shimmer/smart-contracts/guide/chains_and_nodes/testnet).

Add a new network on your Metamask, as shown below:

- Network Name: `Shimmer EVM Testnet`
- New RPC URL: `https://api.sc.testnet.shimmer.network/evm/jsonrpc`
- Chain ID: `1076`
- Currency Symbol: `RMS` (Can be anything you wish)

![Metamask Adding New Network](https://i.imgur.com/6pa6DcN.png "Metamask Adding New Network")

Alternatively, you can setup your own EVM Smart Contract Chain on top of the Shimmer network and provide a custom URL, which might look something like: `https://api.sc.testnet.shimmer.network/chain/rms1prr4r7az8e46qhagz5atugjm6x0xrg27d84677e3lurg0s6s76jr59dw4ls/evm/jsonrpc` as well as your own custom Chain ID.

Hit `Save` and wait for Metamask to connect to the network.

At this point, our Metamask wallet is connected to the Shimmer EVM Testnet, but we don't have any funds in it. So, let's try to get some.

## Get ShimmerEVM Account Funded
Open [Wasp EVM Toolkit](https://toolkit.sc.testnet.shimmer.network/) and enter the chain address and your EVM address as shown below:
![Wasm EVM Toolkit](https://i.imgur.com/fb2Ugfd.png "Wasm EVM Toolkit")

In case, you've setup a custom EVM chain, you'd need to edit the Chain Address as well. Please add your own chain address and select the relevant network.

Once you're done, click on `Send funds` and wait for a few minutes for the faucet to process. You should start seeing some funds on your Metamask wallet soon.

Now, open [Remix ide](https://remix.ethereum.org/) or your favourite IDE and let's try to deploy a solidity smart contract.

## Deploy Solidity Smart Contract
Here's a sample solidity smart contract that we will be deploying:
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Storage {
    uint256 number;
    function store(uint256 num) public {
        number = num;
    }
    function retrieve() public view returns (uint256){
        return number;
    }
}
```

If you've a different smart contract that you wish to deploy, feel free to.

Go to the Run tab and Select `Injected Provider - Metamask` as your enviroment as shown below:
![Injected Provider - MetaMask](https://i.imgur.com/0Ot1ije.png "Injected Provider - MetaMask")

Then, click on Deploy and confirm the Metamask transaction as shown below:
![Metamask Confirm](https://i.imgur.com/Ma9Ds8H.png "Metamask Confirm")

And voila—it's done!
:::info

Feel free to play around and reach out to us on [discord](https://discord.shimmer.network/) on `#evm-contracts-dev` in case you're facing any issues.

:::
