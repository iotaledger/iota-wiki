---
id: staking-iota
title: Staking IOTA
description: Everything you need to know about all the different upcoming staking opportunities in IOTA, Assembly, and Shimmer network.
---

# Staking in the IOTA network ecosystem

The introduction of the new Shimmer (SMR) and Assembly (ASMB) networks marks a historical event and a vast increase of utility for the IOTA token. 

With those two new networks launching and the newly introduced tokenomics and incentive structure around those networks, it is now possible to stake IOTA tokens.
- Find an introduction into IOTA staking here in the [blog](https://blog.iota.org/introducing-iota-staking/)
- And read the announcement of the staking start [here](https://blog.iota.org/iota-staking-start/)

### Currently, there are several different staking scenarios implemented or planned:
1. Staking IOTA to bootstrap the Shimmer and Assembly networks, creating the initial token supply (Shimmer) or a part of the initial token supply (Assembly) for those two networks.
2. Staking IOTA to secure the Tangle as the base layer for the Assembly network and further distribute Assembly tokens to IOTA stakers (planned). 
3. Staking Assembly tokens to secure the Assembly network and reward Assembly token stakers (planned).
4. Staking Shimmer tokens to help to test and support the Shimmer network (planned).


## 1.) 90 days staking period to create ASMB and SMR tokens

This staking period aims to reward IOTA token holders for their participation and distribute tokens of the two new networks to them. In the case of Shimmer, it also creates the total initial supply of the network. In the case of Assembly, it can produce up to 8% of the total initial supply.

Starting from 28th December 2021, 3 pm CET, IOTA holders that possess IOTA tokens in the Firefly wallet and have chosen to participate in the staking period will generate Assembly and Shimmer tokens for 90 days.

### Reward structure:
#### Staking IOTA for Assembly ASMB:

It is planned that IOTA token holders will receive 20% (20 billion tokens) of the total initial Assembly supply of 100 billion tokens. Read more about the Assembly token launch and distribution [in this blog.](https://blog.assembly.sc/assembly-fair-launch-token-distribution/)
- To distribute the first batch of those Assembly tokens to IOTA holders, the staking functionality in the Firefly wallet has been developed. 
- In the initial 90 days staking period, a maximum of 8% of the Assembly supply can be distributed to IOTA token stakers. 
- This happens at a fixed rate for every IOTA token staked.
- This rate has been set to `0,000004 ASMB tokens per 1 MIOTA per milestone`. That means for every 1 MIOTA that you hold and stake in Firefly, you will receive 0,000004 ASMB tokens every 10 seconds (the interval of milestones issued in the IOTA tangle)

![assembly staking](/img/learn/iota-token/assembly-staking.png)

 [here](https://assembly.sc/stake).
- After the 90 days have passed, the total amount of IOTA tokens that have participated in the staking event for Assembly will have created a set amount of Assembly tokens (maximum 8 Billion if 100% if the IOTA supply has been staked for Assembly)
- With the launch of the Assembly network, these generated Assembly tokens will be distributed to the IOTA stakers. This distribution will be implemented as a functionality within the Firefly wallet. As long as the Assembly network is not yet launched, Firefly will hold the record of rewards for the IOTA token holder. 

#### Staking IOTA for Shimmer SMR:

Shimmer, the incentivized Testnet and battlefield for IOTA's core technology innovations, will be bootstrapped purely from IOTA token stakers. The initial token supply of the Shimmer network will only rely on the amount of IOTA tokens staked for Shimmer in the 90-day staking period, and 100% of the initial supply will be distributed to IOTA token holders.

- The same staking functionality used for Assembly in the Firefly Wallet will also be used for Shimmer
- Shimmer tokens will be distributed at a fixed rate of `1 Shimmer per 1 MIOTA per milestone`.

![shimmer staking](/img/learn/iota-token/shimmer-staking.png)

You can read how to stake and calculate the possible rewards [here](https://shimmer.network/claim).
- With the launch of the Shimmer network, these generated Shimmer tokens will be distributed to the IOTA stakers. This distribution will be implemented as a functionality within the Firefly wallet. As long as the Shimmer network is not yet launched, Firefly will hold the record of rewards for the IOTA token holder. 

## 2.) Staking IOTA tokens to bootstrap the Assembly network further.

Assembly, the Smart contract implementation connecting and governing thousands of independent Smart contract blockchains on top of IOTA's Tangle will have a deep connection with the IOTA tangle. The security of the Assembly network relies on the underlying security of the IOTA tangle as it solves the interconnection and exchange layer between different chains in Assembly and provides a secure anchor and immutable audit trail for state updates of IOTA smart contracts chains in Assembly.

Also, the Tangle, with its newly implemented tokenization abilities and multi-asset functionalities, will be the home of all kinds of interoperable tokens. Those will be freely exchanged between accounts on different smart contract chains and accounts on the Tangle.

To further reward IOTA token stakers and give them a fair share in the new Assembly network, IOTA token holders can continue to stake their IOTA tokens in order to receive Assembly tokens for 21 months after the Assembly mainnet launch.

As described in the Assembly [token launch and fair distribution sheme](https://blog.assembly.sc/assembly-fair-launch-token-distribution/), a total of 20% of the Assembly supply is given to IOTA token stakers. 
The first distribution phase happens in the 90 days as described above.
The second ASMB distribution will happen during the first 21 months of the newly launched Assembly network.

![assembly supply](/img/learn/iota-token/assembly-supply.png)

- the amount of ASMB tokens that can be distributed during these 21 months depends totally on the number of tokens that are still undistributed after the initial 90 days of staking. 
- If less than 100% of IOTA tokens have been staked for Assembly (which would distribute 8 Billion ASMB tokens to IOTA stakers), the remaining ASMB tokens will be distributed in addition to the already planned 12 Billion ASMB tokens to IOTA stakers.
If only 6 Billion ASMB tokens had been distributed in the first 90 days, 14 Billion ASMB tokens would still be available during the second 21 month staking period.
- the ASMB distribution during the second staking period will happen on a **daily fixed rate**
- assuming 14 Billion ASMB tokens will be available to distribute, this would lead to a daily payout of: 
    - 21.909.233 ASMB tokens to the IOTA stakers over 639 days
    - the amount of individual received ASMB tokens per day depends on the total percentual part an IOTA staker holds of the total daily staked amount of IOTA tokens.
    - the fewer total IOTA tokens are staked, the higher the individual payout of those 21.909.233 ASMB tokens per day for an individual IOTA staker.

![assembly token release](/img/learn/iota-token/assembly-token-release.png)

## 3.) Stake Assembly tokens to secure and validate the Assembly network

Assembly will implement two different mechanisms to reward Assembly token stakers.
1. Reward Assembly stakers for holding ASMB tokens and distributing newly minted ASMB tokens as part of the inflationary token distribution.
    - The yearly inflation of the Assembly supply is set to 8%. This inflation rate is planned to be reduced over the years by community governance decisions.
    - The final mechanism of how this distribution will happen is not yet published.

2. Reward Assembly stakers to secure the Assembly chains by staking their ASMB tokens with a Validator.
    - This mechanism is crucial to the security and functionality of the Assembly smart contract chains. Validators processing the code executed in the IOTA smart contract chains deployed in Assembly are required to deposit Assembly tokens as a security bond in the Assembly Root chain smart contract. This stake deposited by validators is used as a security bond to grant a validator access to a smart contract chains validator committee. The higher the stake a validator can offer as a security deposit, the more likely this validator will be chosen to secure high-value smart contract chains. Those chains will likely be more profitable for the validator, so the incentive to deposit more stakes as a security deposit in Assembly is very high. You can read details of that mechanism [here.](https://blog.assembly.sc/meet-assembly-2-validators-and-committees/)
    - A Validator must always deposit a certain amount of tokens that he owns himself but can additionally use tokens that Assembly tokens holders deposited to the validator.
    - As this described mechanism of using delegated stake increases the total security bond a validator can offer, the validators will most likely be willing to pay a part of their earned profits to the Assembly holders who deposited their tokens to the validator.
    - This involves a potential risk, as a deposited stake in the Assembly root chain contract can be partially or fully slashed if the validator acts maliciously. But, besides this small theoretical risk, delegating stake to a validator will also offer higher rewards for Assembly stakers, as a share of the validators profit will be distributed to the stakers that delegate the stake to the validator.

## 4.) Stake Shimmer tokens to help to test and support the Shimmer network

The Shimmer network has yearly inflation of 8% planned. These newly minted Shimmer tokens will be distributed to Shimmer stakers. 
By staking your Shimmer tokens, you will help the network fulfill its purpose of being an incentivized playground for applications to test new IOTA technology features in a real network with real value.

Read some more info about the Shimmer network here in the [FAQ.](https://shimmer.network/faqs)


---
