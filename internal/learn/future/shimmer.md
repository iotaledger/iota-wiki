---
id: shimmer
title: Shimmer
description: Introduction to the emerging incentivized staging network
keywords:
  - Incentivized
  - staking
  - SMR
---

[![Shimmer](/img/learn/future/shimmer.svg 'Click to see the full-size image.')](/img/learn/future/shimmer.svg)

IOTA Foundation [introduced](https://blog.iota.org/introducing-iota-staking/) Shimmer. An incentivized staging network.
Shimmer will function as a validation and staging network for upcoming IOTA updates before they arrive on the mainnet. It will also have its own token called [SMR](https://shimmer.network/token).
To fairly distribute Shimmer tokens on the new network, you can stake your IOTA tokens before the launch of Shimmer, and will receive Shimmer tokens once the new network starts.

## Pre-launch staking

During 90 days before the launch of the Shimmer network, you will be able to stake your IOTA tokens to receive SMR tokens on the Shimmer network upon launch. The IOTA Foundation will announce the start date 24 hours in advance.
During these 90 days, you will earn 1 SMR for every 1Mi IOTA you staked every 10 seconds.
There is no risk involved in staking your IOTA tokens. You will remain in control of your tokens and won't have to transfer them to a third party.
Let's take a closer (simplified) look at the technology behind the process.

### Technical overview

Staking will happen in the official IOTA [Firefly Wallet](https://firefly.iota.org/). To stake your IOTA tokens for SMR tokens, you will make a transaction to yourself with a specific payload to declare that you want to stake that amount of IOTA tokens to receive SMR tokens. The registration of which addresses have staked IOTA to receive Shimmer happens in a plugin for the Hornet node, one of the node implementations of IOTA, which node operators can enable. Those who are already familiar with the upcoming Build/Burn Vote process will recognize the similarities between that voting process and the Shimmer staking process, as the same Hornet plugin performs it. The Hornet plugin detects these transactions and will accumulate SMR tokens on the corresponding outputs as long as the output is not spent.

Let's see **an example** of how this would work: Bob has 1Mi on an address and uses Firefly, the official IOTA wallet. He wants to use his IOTA tokens to stake for some Shimmer tokens (SMR). He clicks the stake button in Firefly, which generates the transaction to himself with the specific payload. Hornet sees this message and starts accumulating the credit. So after a milestone, the accumulated amount will be 1 SMR. Ten seconds later, after the second milestone, he will have 2 SMR and so on. As long as his IOTA tokens stay on the address he used to stake, he will accumulate SMR tokens.

At the end of the 90 days, Hornet will know how many SMR tokens Bob can receive on the Shimmer network. This information will then be used to bootstrap the Shimmer network. On the Shimmer network, Bob can now claim his real SMR tokens using the Firefly wallet.

So the initial tokens supply of SMR is defined by the amount of IOTA tokens staked and for how long they were staked during the 90 days before launch.

[![Staking Example](/img/learn/future/staking_example.svg 'Click to see the full-size image.')](/img/learn/future/staking_example.svg)

## Post-launch staking

Once the Shimmer network is live, you will be able to stake your SMR tokens directly. An initial APY of 8% is planned. This can be changed later by the community. More information on "post-launch" staking will follow.
