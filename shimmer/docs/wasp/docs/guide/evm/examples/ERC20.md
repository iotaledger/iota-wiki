---
description: Solidity smart contract ERC20.
image: /img/logo/WASP_logo_dark.png
keywords:

- smart contracts
- EVM
- Solidity
- ERC20
- eip-20
- token creation
- mint tokens
- how to

---

# ERC20 Example

## Prerequisites

- [Remix IDE](https://remix.ethereum.org/).
- [A Metamask Wallet](https://metamask.io/).
- [Connect your MetaMask with the public Testnet](../../chains_and_nodes/testnet#interact-with-evm).

### Required Prior Knowledge

This guide assumes you are familiar with [tokens](https://en.wikipedia.org/wiki/Cryptocurrency#Crypto_token)
in [blockchain](https://en.wikipedia.org/wiki/Blockchain),
[Ethereum Request for Comments (ERCs)](https://eips.ethereum.org/erc)(also known as Ethereum Improvement Proposals (EIP))
, [NFTs](https://wiki.iota.org/learn/future/nfts), [Smart Contracts](../../core_concepts/smart-contracts) and have
already tinkered with [Solidity](https://docs.soliditylang.org/en/v0.8.16/).
ERC20 is a standard for fungible tokens and is defined in
the [EIP-20 Token Standard](https://eips.ethereum.org/EIPS/eip-20) by Ethereum.

## About ERC20

With the ERC20 standard, you can create your own tokens and transfer them to the EVM on IOTA Smart Contracts without
fees.

You can use the [Remix IDE](https://remix.ethereum.org/) to deploy any regular Solidity Smart Contract.

Set the environment to `Injected Web3` and connect Remix with your MetaMask wallet.
If you haven’t already, please follow the instructions
on [how to connect your MetaMask with the public Testnet.](../../chains_and_nodes/testnet#interact-with-evm).

## 1. Create a Smart Contract

Create a new Solidity file, for example, `ERC20.sol` in the contracts folder of
your [Remix IDE](https://remix.ethereum.org/) and add this code snippet:

```solidity
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleERC20Token is ERC20 {
    constructor() ERC20("ExampleERC20Token", "EET") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
```

This imports all functions from the OpenZeppelin smart contract and creates a new ERC20 token with your name and Symbol.
OpenZeppelin provides many audited smart contracts and is a good point to start and learn.

You can change the token name `ExampleERC20Token` and the token symbol `EET`.

## 2. Compile Your Smart Contract

Go to the second tab and compile your smart contract with the **Compile ERC20.sol** button.

![Compile ERC20.sol](/img/evm/examples/compile.png)

## 3. Deploy Your Smart Contract

1. Go to the next tab and select `Injected Web3` as your environment. Ensure that your MetaMask is installed and set up
   correctly.

2. Choose your ´ExampleERC20Token´ smart contract in the contract dropdown.

3. Press the "Deploy" button. Your MetaMask wallet will pop up, and you will need to accept the deployment.

![Deploy ERC20.sol](/img/evm/examples/deploy.png)

4. Your MetaMask browser extension will open automatically - press **confirm**.

![Confirm in MetaMask](/img/evm/examples/deploy-metamask.png)

## 4. Add Your Token to MetaMask

1. Get the `contract address` from the transaction after the successful deployment. You can click on the latest
   transaction in your MetaMask Activity tab. If you have configured your MetaMask correctly,
   the [IOTA EVM Explorer](https://explorer.wasp.sc.iota.org/) will open the transaction.
2. Copy the contract address and import your token into MetaMask.

![Copy contract address](/img/evm/examples/explorer-contract-address.png)

## 5. Have some Fun!

Now you should see your token in MetaMask. You can send them to your friends without any fees or gas costs.

![Copy contract address](/img/evm/examples/erc20-balance.png)

You also can ask in the [Discord Chat Server](https://discord.iota.org) to send them around and discover what the
community is building on IOTA Smart Contracts.

