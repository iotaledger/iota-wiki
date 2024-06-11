---
description: How to Create a Native Token Foundary.
image: /img/logo/WASP_logo_dark.png
tags:
  - EVM
  - how-to
  - native tokens
  - cross-chain
---
import MintNFTAdmonition from '../../../_admonitions/_mint-nft.md';
import ExampleCodeIntro from '../../../_partials/how-tos/token/_example_code_intro.md';

# Send Token Across Chains

This guide will show you (Check dIASTRIX to see about using you) how to send an already minted and registered L1 token from L1 to an L2 EVM account on a destination chain by using the `sendCrossChain` function of the `NativeTokenController.sol` contract.

<MintNFTAdmonition/>

The `sendCrossChain` function calls the `ISC.sandbox.send` function, which actually does the cross-chain sending,
and passing in the liAddress, sendAssets, metadata, and options arguments.

To send native tokens across chains, you need to provide the following arguments to the `sendCrossChain` function. 

* `ChainAddress` - The L1 address of the of the destination chain.
* `Destination` - The address on the destination chain that will receive the tokens.
* `chainID` - The ID of the destination chain.
* `amount` - The amount of native tokens to send.
* `storageDeposit` - The of base tokens to cover storage deposit.

## Example Code
<ExampleCodeIntro/>

### 2. Send Token to Another Chain

Let's create a new Solidity contract called CrossChainMessenger.sol which will interact with the NativeTokenController contract.

```solidity

    function sendCrossChainMessage(
        address destinationChain,
        bytes memory destinationAddress,
        uint256 amount,
        ISCChainID chainID,
        uint64 storageDeposit
    ) external {
        // Ensure the sender has enough tokens (assuming a balanceOf function exists)
        uint256 senderBalance = IERC20(tokenAddress).balanceOf(msg.sender);
        require(senderBalance >= amount, "Insufficient token balance");

        // Call the sendCrossChain function from NativeTokenController
        nativeTokenController.sendCrossChain(destinationChain, destinationAddress, amount, chainID, storageDeposit);
    }

```

# Full Example Code

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract CrossChainMessenger {
    NativeTokenController public nativeTokenController;

    function sendCrossChainMessage(
        address destinationChain,
        bytes memory destinationAddress,
        uint256 amount,
        ISCChainID chainID,
        uint64 storageDeposit
    ) external {
        // Ensure the sender has enough tokens (assuming a balanceOf function exists)
        uint256 senderBalance = IERC20(tokenAddress).balanceOf(msg.sender);
        require(senderBalance >= amount, "Insufficient token balance");

        // Call the sendCrossChain function from NativeTokenController
        nativeTokenController.sendCrossChain(destinationChain, destinationAddress, amount);
    }
}

```