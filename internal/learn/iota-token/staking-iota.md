---
id: staking-iota
title: Staking IOTA
description: Everything you need to know about all the different upcoming staking opportunities in IOTA, Assembly and Shimmer network.
---

# Staking in the IOTA network ecosystem

The introduction of the new Shimmer (SMR) and Assembly (ASMB) networks marks a historical event and a vast increase of utility for the IOTA token. 

With those two new networks launching and the newly introduced tokenomics and incentive structure around those networks, it is now possible to stake IOTA tokens.
- Find an introduction into IOTA staking here in the [blog](https://blog.iota.org/introducing-iota-staking/)
- And read the announcement of the staking start [here](https://blog.iota.org/iota-staking-start/)

### Currently, there are several different staking scenarios planned:
1. Staking IOTA to bootstrap the Shimmer and Assembly networks, creating the initial token supply for those two networks.
2. Staking IOTA to secure the Tangle as the base layer for the Assembly network and further distribute Assembly tokens to IOTA stakers. 
3. Staking Assembly tokens to secure the Assembly network and reward Assembly token stakers.
4. Staking Shimmer tokens to help testing and support the Shimmer network.


## 1.) 90 days staking period to create ASMB and SMR tokens

This staking period aims to reward IOTA token holders for their participation and distribute the new network tokens to them. In the case of Shimmer, it also creates the total initial supply of the network.

Starting from 28th December 2021, 3 pm CET, IOTA holders that possess IOTA tokens in the Firefly wallet and have chosen to participate in the staking period will generate Assembly and Shimmer tokens.

### Reward structure:
#### Staking IOTA for Assembly ASMB:

It is planned that IOTA token holders will receive 20% of the total initial Assembly supply of 100 Billion tokens. Read more about the Assembly token launch and distribution [in this blog.](https://blog.assembly.sc/assembly-fair-launch-token-distribution/)
- To distribute the first batch of those Assembly tokens to IOTA holders, the staking functionality in the Firefly wallet has been developed. 
- In the initial 90 days staking period, a total of 8% of the Assembly supply can be distributed to IOTA token holders. 
- This happens at a fixed rate for every IOTA token staked.
- This rate has been set to `0,000004 ASMB tokens per 1 Miota per milestone`. That means for every 1 Miota that you hold in Firefly, you will receive 0,000004 ASMB tokens every 10 seconds (the interval of milestones issued in the IOTA tangle)

![assembly staking](/img/learn/iota-token/assembly-staking.png)

You can read how to stake and calculate the rewards you can earn [here](https://assembly.sc/stake).
- After the 90 days have passed, the total amount of IOTA tokens that have participated in the staking event for Assembly will have created a set amount of Assembly tokens (maximum 8 Billion if 100% of the IOTA supply has been staked for Assembly)
- With the launch of the Assembly network, these generated Assembly tokens will be distributed to the IOTA stakers. This distribution will be implemented as a functionality within the Firefly wallet. As long as the Assembly network is not yet launched, Firefly will hold the record of rewards for the IOTA token holder. 

#### Staking IOTA for Shimmer SMR:

Shimmer, the incentivized Testnet and battlefield for IOTA's core technology innovations, will be bootstrapped purely from IOTA token stakers. The initial token supply of the Shimmer network will only rely on the amount of IOTA tokens staked for Shimmer in the 90-day staking period, and 100% of the initial supply will be distributed to IOTA token holders.

- The same functionality that is used for Assembly in the Firefly Wallet will also be used for Shimmer
- Shimmer tokens will be distributed at a fixed rate of `1 Shimmer per 1 Mioat per milestone`.

![shimmer staking](/img/learn/iota-token/shimmer-staking.png)

You can read how to stake and calculate the rewards you can earn [here](https://shimmer.network/claim).
- With the launch of the Shimmer network, these generated Shimmer tokens will be distributed to the IOTA stakers. This distribution will be implemented as a functionality within the Firefly wallet. As long as the Shimmer network is not yet launched, Firefly will hold the record of rewards for the IOTA token holder. 

## 2.) Staking IOTA tokens to secure the Assembly network

Assembly, the Smart contract implementation connecting and governing thousands of independent Smart contract blockchains on top of IOTA's Tangle will have a deep connection with the IOTA tangle. The security of the Assembly network relies on the underlying security of the IOTA tangle as it solves the interconnection and exchange layer between different chains in Assembly and provides a secure anchor and immutable audit trail for state updates of IOTA smart contracts chains in Assembly.

Also, the Tangle, with its newly implemented tokenization abilities and multi-asset functionalities, will be the home of all kinds of interoperable tokens, able to be freely exchanged between accounts on smart contract chains and the Tangle.

In Assembly [token launch and fair distribution sheme](https://blog.assembly.sc/assembly-fair-launch-token-distribution/) it is planned to distribute a total of 20% of the Assembly supply to IOTA token holders. 
The first distribution phase happens in the 90 days as described above.
To further incentivize IOTA token owners to secure the IOTA network and help Assembly in its start phase, another ASMB distribution will happen during the first 21 months of the newly launched Assembly network.

![assembly supply](/img/learn/iota-token/assembly-supply.png)

- the amount of ASMB tokens that can be distributed during these 21 months depends totally on the number of tokens that are still undistributed after the initial 90 days of staking. 
- If less than 100% of IOTA tokens have been staked for Assembly (which would distribute 8 Billion ASMB tokens to IOTA stakers), the remaining ASMB tokens will be distributed together with the planned 12 Billion ASMB tokens to IOTA stakers.
If only 6 Billion ASMB tokens could be distributed in the first 90 days, 14 Billion ASMB tokens will be available during the second 21 month staking period.
- the ASMB distribution during the second staking period will happen on a **daily fixed rate**
- assuming 14 Billion ASMB tokens will be available to distribute, this would lead to a daily payout of 
    - 21.909.233 ASMB tokens to the IOTA stakers over 639 days
    - the amount of individual received ASMB tokens per day depends on the total percentual part an IOTA staker holds of the total daily staked amount of IOTA tokens.
    - the fewer total IOTA tokens are staked, the higher the individual payout of theis 21.909.233 ASMB tokens per day for an IOTA staker.

![assembly token release](/img/learn/iota-token/assembly-token-release.png)

## 3.) Stake Assembly tokens to secure and validate the Assembly network

Assembly will have two different ways to reward Assembly token stakers.
1. Reward Assembly stakers for holding ASMB tokens and distributing newly minted ASMB tokens as part of the inflationary token distribution.
    - The yearly inflation of the Assembly supply is set to 8%. This inflation rate is planned to be reduced over the years by community governance decisions.
    - The final mechanism of how this distribution will happen is not yet published

2. Reward Assembly stakers to secure the Assembly chains by staking their ASMB tokens with a Validator.
    - This mechanism is crucial to the security and functionality of the Assembly smart contract chains. Validators in the IOTA smart contract chains deployed in Assembly need to deposit Assembly tokens as a security bond in the Assembly Root chain contract. This stake deposited by validators decides in which chains they can participate as validators. The higher the stake a validator can offer as a security deposit, the more likely this validator will be chosen to secure high-value smart contract chains. Those chains will likely be more profitable for the validator, so the incentive to deposit more stakes as a security deposit in Assembly is very high. You can read details of that mechanism [here.](https://blog.assembly.sc/meet-assembly-2-validators-and-committees/)
    - A Validator must deposit some amount of tokens that he owns himself and can also deposit tokens that Assembly tokens holders deposited to the validator.
    - For this delegated stake from usual Assembly holders, the validators will most likely be willing to pay a part of the gained profits from validating smart contracts to the Assembly holders that deposited their tokens to the validator.
    - This involves a potential risk, as a deposited stake in the Assembly root chain contract can be partially or fully slashed if the validator acts maliciously. But, besides this small theoretical risk, delegating stake to a validator will also offer higher rewards for Assembly stakers, as a share of the validators profit will be distributed to the stakers that delegate the stake to the validator.

## 4.) Stake Shimmer tokens to help testing and support the Shimmer network

The Shimmer network has a planned yearly inflation of 8%. These new minted Shimmer tokens will be distributed to Shimmer stakers. 
By staking your Shimmer tokens you will help the network to fullfill it's pupose of being an incentivised playground for applications to test new IOTA technology features in a real network with real value.

Read some more info about the Shimmer network here in the [FAQ.](https://shimmer.network/faqs)


---
