---
id: shimmer
title: Shimmer
description: Introduction to the emerging incentivized staging network
keywords:
  - Incentivized
  - staking
  - SMR
---

![Shimmer](/img/learn/future/shimmer.svg 'Click to see the full-size image.')

In November 2021, IOTA Foundation [introduced](https://blog.iota.org/introducing-iota-staking/) Shimmer, an incentivized staging network. Shimmer will function as a validation and staging network for upcoming IOTA updates before they arrive on the mainnet. It will also have its own token called [SMR](https://shimmer.network/token). To fairly distribute Shimmer tokens on the new network, you can stake your IOTA tokens before the launch of Shimmer, and will receive Shimmer tokens once the new network starts.

## Pre-launch staking

During 90 days before the launch of the Shimmer network, you will be able to stake your IOTA tokens to receive SMR tokens on the Shimmer network upon launch. The IOTA Foundation will announce the start date 24 hours in advance. During these 90 days, you will earn 1 SMR for every 1Mi IOTA you staked every 10 seconds. There is no risk involved in staking your IOTA tokens. You will remain in control of your tokens and won't have to transfer them to a third party. Let's take a closer (simplified) look at the technology behind the process.

### Technical overview

Staking will happen using the official IOTA [Firefly Wallet](https://firefly.iota.org/). To stake your IOTA tokens in return for SMR tokens, you create a special staking transaction with a specific payload. This declares that you want to stake that amount of IOTA tokens to receive SMR tokens. The Hornet node uses a plugin to register which addresses have staked IOTA and for how long - node owners can opt in to enable this plugin.

Those who are already familiar with the upcoming Build/Burn Vote process will recognize the similarities between that voting process and the Shimmer staking process, as the same Hornet plugin performs it.

Here is **an example** of how this would work: Bob has 1Mi on an address and uses Firefly, the official IOTA wallet. He wants to use his IOTA tokens to stake for some Shimmer tokens (SMR). He clicks the stake button in Firefly, which generates the staking transaction. Hornet sees this message and starts monitoring how long the IOTA tokens are staked on that address. If the tokens are moved from that address, then the staking period for that address ends.

For every milestone, 1 Mi staked returns 1 SMR token. So after the first milestone, the returned amount will be 1 SMR. Ten seconds later, after the second milestone, it will be 2 SMR and so on. As long as his IOTA tokens stay on the address used for staking, the number of SMR tokens will accumulate.

If Bob stakes 1 Mi for the full period of 90 days, he will receive 777,600 SMR tokens. On the Shimmer network, Bob can now claim his real SMR tokens using the Firefly wallet.

The initial token supply of SMR is defined by the amount of IOTA tokens staked, and for how long they were staked, during the 90 day staking period.

![Staking Example](/img/learn/future/staking_example.svg 'Click to see the full-size image.')

## Post-launch staking

Once the Shimmer network is live, you will be able to stake your SMR tokens directly. An initial APY of 8% is planned. This can be changed later by the community. More information on "post-launch" staking will follow.
