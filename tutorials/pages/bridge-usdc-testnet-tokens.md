# Bridge USDC Testnet Tokens using Multichain

:::info

This tutorial provides a step-by-step guide on how to use the Multichain testnet token bridge to bridge USDC Testnet tokens between the blockchains Goerli (Ethereum Testnetwork) and ShimmerEVM Testnet.

:::

## Prerequisites

- [Metamask](https://metamask.io/) browser wallet with account

## Networks and Tokens

Before looking into the bridging process, we will make sure everything is set up so you can move USDC tokens between Goerli and ShimmerEVM Testnet in both directions. For this purpose you will need to add both networks to your Metamask wallet and fund your account with their respective base tokens to cover the gas fees that will occur. Last but not least you will get USDC Tokens on Goerli and add the USDC token contract for both Goerli and ShimmerEVM Testnet to your Metamask wallet.

### Add networks to your Metamask wallet

In order to get the needed networks to your Metamask wallet, you can use [Chainlist](https://chainlist.org/?testnets=true). Chainlist provides a comprehensive list of EVM networks, and easy to use shortcuts to add them to Metamask. Make sure the the box to _Include Testnets_ is checked, filter for `Goerli` and add the network to Metmask. Repeat this step for `ShimmerEVM Testnet`.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/x3ZgPH0.png"  width="500">
    </kbd>
</p>

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/8aCjoT8.png"  width="400">
    </kbd>
</p>

### Get Testnet SMR

You can find the faucet for the ShimmerEVM Testnet in the [ShimmerEVM Toolkit](https://evm-toolkit.evm.testnet.shimmer.network/). Just connect your Metmask wallet, enter your address and request funds. The testnet Shimmer Tokens should quickly appear in your wallet.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/CrGHufp.png"  width="500
                                                           ">
    </kbd>
</p>

### Get GoerliETH

The faucet that proved to be most reliable for GoerliETH, is the Proof-of-Work (PoW) based faucet [goerli-faucet.pk910.de](https://goerli-faucet.pk910.de/). Just enter your Metamask address and start mining. The amount of GoerliETH tokens you will need heavily depends on the current congestion on the Goerli network and the resulting gas fees, but most of the times 0.03 GoerliETH should be enough for this purpose. If your Metmask wallet is connected to the Goerli network, the tokens should automatically appear in your wallet, after claiming them.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/udXYVnV.png"  width="300">
    </kbd>
</p>

### Get USDC Tokens on Goerli

Visit the [USDC Faucet](https://usdcfaucet.com/), select Ethereum (ETH), enter your MetaMask address and submit the request.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/PSPV4nW.png"  width="400">
    </kbd>
</p>

### Add USDC token contracts to Metamask

Since USDC is not the native token of Goerli or the ShimmerEVM Testnet, you will have to add the token to your Metamask wallet before its balance can be displayed. All tokens that can be bridged via our [Token Bridge](https://iota-bridge.vercel.app/) frontend, can easily be added to Metamask via a shortcut.

Connect your Metmask wallet to the site and select Goerli as the source network. Now when you open the token selector you can add the desired token, in this case USDC, to your wallet by clicking the Metamask fox logo. Make sure to repeat this step for the ShimmerEVM Testnet as the source network.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/sK4HcIV.png"  width="400">
    </kbd>
</p>

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/v4zmdkI.png"  width="400">
    </kbd>
</p>

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/6BTq0HU.png"  width="300
                                                           ">
    </kbd>
</p>

If the previous steps were successful, your wallet should show balances for GoerliETH and USDC when connected to the Goerli network and SMR when connected to ShimmerEVM Testnet.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/wuyV98k.png"  width="300">
    </kbd>
    <kbd>
        <img src="https://i.imgur.com/w7saYQ9.png"  width="300">
    </kbd>
</p>

Now you're ready to bridge USDC tokens over to ShimmerEVM.

## Bridge USDC from Goerli to ShimmerEVM Testnet

Go to our [Token Bridge](https://iota-bridge.vercel.app/) and connect your Metmask wallet to the site. Select `Goerli` as the source network, `USDC` as the token and `ShimmerEVM Testnet` as the target network. Then you can enter the amount of USDC tokens you want to bridge. When all parmameters have been set, you're ready to `Transfer`.

**_NOTE:_** The difference between the `Send` and `Receive` amounts are the fees you will pay to the bridge operator, in this case Multichain.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/ljk4Rk4.png"  width="500">
    </kbd>
</p>

The page will summarize your selections and ask you to confirm the transaction.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/zdPVSst.png"  width="500">
    </kbd>
</p>

Metamask will ask you to set, review and confirm the max amount of USDC token that may be processed by the bridge contract. This is a safety measure for users of a particular contract and puts a cap on the max amount of tokens the contract gains control over. This will pop up again whenever your set spending cap was reached. Afterwards you can confirm the actual transaction.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/L6Q2ejA.png"  height="350">
    </kbd>
    <kbd>
        <img src="https://i.imgur.com/3mmFZIV.png"  height="350">
    </kbd>
    <kbd>
        <img src="https://i.imgur.com/UgVCQTm.png"  height="350">
    </kbd>
</p>

After the transaction was confirmed on Metamask, you can follow the status of the bridge transfers on the Token Bridge page. The USDC tokens will be sent to a Multichain contract on Goerli, routed towards a Multichain contract on ShimmerEVM Testnet and then sent to your target address there.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/hx5rVYU.png"  width="300">
    </kbd>
    <kbd>
        <img src="https://i.imgur.com/jJvIqF5.png"  width="300">
    </kbd>
</p>

## Check USDC balance on ShimmerEVM Testnet

Now you can connect your Metmask wallet to the ShimmerEVM Testnet and check if the USDC tokens have arrived successfully. Since you have already added the USDC token contract on ShimmerEVM Testnet to your Metamask wallet, you should now see the USDC token balance there.

<p style="text-align: center">
    <kbd>
        <img src="https://i.imgur.com/2JML0O8.png"  width="300">
    </kbd>
</p>

## Bridge USDC from ShimmerEVM Testnet to Goerli

As soon as you have USDC Tokens on ShimmerEVM Testnet you can also use the bridge the other way around. Just go back to the [Token Bridge](https://iota-bridge.vercel.app/), connect your Metmask wallet to the site, select `ShimmerEVM Testnet` as the source network, `USDC` as the token, `Goerli` as the target network and go for it.

**Happy Bridging!!!**
