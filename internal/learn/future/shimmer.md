---
id: shimmer
title: Shimmer
description: Introduction to the emerging incentivized staging network
keywords:
  - Incentivized
  - staking
  - SMR
---

IOTA Foundation [introduced](https://blog.iota.org/introducing-iota-staking/) Shimmer. An incentivized staging network.
It can be used to work with upcoming IOTA updates before they arrive on the mainnet. It will also have its own token called [SMR](https://shimmer.network/token).
To fairly distribute tokens on the new network, you can stake your IOTA tokens before launch.

## Pre-launch staking

Before the Shimmer network goes online, the IOTA Foundation will announce a start date for "pre-launch" staking.
You will be able to make a transaction to yourself with a certain payload to declare that you want to stake that amount of IOTA tokens to receive SMR. Staking will now be possible for 90 days. You will earn 1 SMR for every 1Mi every 10 seconds.
There is no risk in staking your IOTA Tokens.
Let's take a closer (simplified) look at the technology behind the process.

### Technical overview

Those who are already familiar with the Build/Burn Vote process will recognize the similarities between the Vote and Staking, as it is performed by the same Hornet plugin.  
Hornet operators can enable this plugin. Hornet will then (after a certain milestone) start accumulating all outputs that have the specific Staking payload every 10 seconds. Until the 90 days are up.  
Not clear enough? Let's use an example:  
Bob wants to use the 1Mi in his wallet. He clicks the stake button in Firefly, which generates the transaction to himself with the specific payload. Hornet sees this message and starts accumulating the credit. So after a milestone, the value will be 1 SMR (remember that this token doesn't exist yet. It is just a number in a DB), after the second milestone in 10s you will have 2 SMR and so on. As long as your tokens stay where they are, you will accumulate "tokens".
At the end of the 90 days, Hornet will create a file with all the "balances", which will be used to bootstrap the Shimmer network.  
On this network, you can now claim your real SMR tokens, which are stored at the same address as your IOTA tokens on the mainnet.  
So the initial amount of SMR is defined by the amount of IOTA tokens staked.

## Post-launch staking

On the Shimmer network, you can stake your SMR tokens. An initial APY of 8% is planned. This can be changed later by the community. More information on "post-launch" staking will follow.
