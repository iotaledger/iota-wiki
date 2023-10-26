import ManaCalculator from '@site/src/components/ManaCalculator';

# Mana Calculator 

Mana is a scarce resource used to access the IOTA ledger and update its state through block creation. It is a spendable asset tracked in the ledger state, powering smart contracts, DeFi applications, block creation, and various other services. Our incentives scheme allows you to stake or delegate IOTA tokens to receive Mana rewards, in addition to the Mana generation your IOTA holdings grant you without having to participate in any consensus-related activity.

In this article, we introduce the Mana Calculator: a tool to help you make decisions about the type of participation that will suit you the most, to help you predict the Mana generation you’ll be granted, and to decide the number of IOTA tokens you should hold to have a particular desired level of access guaranteed in the future.

## How to use the Calculator: Step-by-step instructions

- **Choose the network you want to estimate the Mana Generation:** this calculator works for both Shimmer and the future IOTA 2.0 network. Those two networks will have their own type of Mana (IOTA Mana and Shimmer Mana), with their own parameters and, consequently, their own behavior. Be sure you select the correct scenario you want to simulate! 

- **Choose your role:** are you going to delegate to a validator, be a validator yourself or just hold tokens? To be a validator, you must run a node and lock your tokens while you are performing such validation services, but this will give you higher rewards. If you wish to delegate to a validator, your tokens will not be locked and you won’t need to run a node, but this will give you less rewards than validating. Finally, just holding tokens grants you a certain Mana generation, but it will be less than the validating or delegating.

- **Input the number of tokens you own:** no matter which network and role you choose, your Mana generation will depend on how many available tokens you have. Pay attention to the units! The input should be done in IOTA or Shimmer (not microIota or Glow).

Now you are mostly done! With the inputs above, you can already estimate how much Mana you’ll be granted per epoch. But what does it mean in tps? How many blocks per second this Mana grants you? The answer to this question depends on the size of your block and the network congestion levels. However, we can use a default block size, which will be enough for most applications, and assume certain levels of congestion. This takes us to the very last step to be taken in this calculator:

- **Choose a congestion level:** given a certain Mana generation per epoch, this can be translated into a number of blocks issued per seconds that depends on the congestion level. Choose one of the given congestion levels (low, stable, or extreme) to estimate how many blocks per second your tokens and participation grants you! This metric is also showed in a alternative way: time until block issuance, which tells you in which periodicity you’ll be able to issue a block.

<ManaCalculator/>


## Advanced settings

The steps shown above are enough to roughly estimate your Mana generation and granted tps; however, if you wish, you can play with the advanced settings to have more precise results. 

- **Change the state of the system:** the default settings assume a certain level of participation in the consensus (i.e., locked stake, delegated stake and performance factor of validators). Those settings can be changed unter the “Advanced settings - State of the System” tab. You can also add or delete validators and change their fixed costs. 

- If you choose to delegate:
   - **Change the validator you delegate to:** by the default settings, you'll be delegating to Validator 1 (which is  pool that, technically speaking, is under the "equilibrium state", see the WP for more details). However, you can change this setting and know your rewards if you participate in other pools, with different share of delegated to locked stake, and different performance factors.

- If you choose to validate:
   - **Change the amount of stake is delegated to you:** by the default settings of the calculator, you'll be assigned a certain share of the delegated stake automatically when you start validating. However, you can change this setting and know your rewards if you manage to atract more (or less) delegated stake than the default setting.
   - **Change your performance factor:** by the default settings of the calculator, your performance factor is 0.95. However, you can change this to simulate larger or smaller shares of online time. 
   - **Change your fixed costs:** by the default settings of the calculator, your fixed costs are zero. This setting can be changed so you spare part of the pool rowards just for yourself. However, notice that the fixed cost is a public parameter, that you define during registration. This means that the delegator know how you set this value and might consider it when choosing a validator to delegate. Furthermore, is you set this value too high, you'll be punished and won't get rewards at all.

- **Simulate your Mana accumulation**: the default setting of the calculator assumes a stationary regime and calculates the block creation rate you guarantee depending on your stake and level of participation. However, specially in the early stages of the network you might want to save your mana to sell later. This tab simulates how much Mana you will accumulate in a certain time period. For that (besides the other already defined inputs), you just need to choose a initial and final epochs, and the tool will plot a graph of your accumulation during that period. In the same graph, you can also have an idea of how many blocks can be issued with this accumulated amount of Mana, for the different congestion levels (already defined in the non-advanced settings).


