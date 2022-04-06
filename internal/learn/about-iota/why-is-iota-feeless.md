---
id: why-is-iota-feeless
title: Why is IOTA Feeless?
description: The unique feature of IOTA is the absence of any Fee's in the
  protocol. Here we explain how this is achieved.
---

# Why is IOTA Feeless?

Most decentralized cryptocurrencies, including all of the best-known ones – Bitcoin, Ethereum, Dogecoin, and many others – require that anyone making a transaction on the network pay a fee for the services provided. This is not merely an add-on feature of those cryptocurrencies that can easily be removed. It is a fundamental aspect of how they work.

IOTA was designed to require no fees to process a transaction. In any transaction, the amount deducted from the sender's wallet is exactly the same as the amount added to the recipient's wallet.

## Blockchains

There are three major types of participants in many blockchain-based cryptocurrencies, including Bitcoin: nodes, miners, and users. To learn more about these participants, we first have to learn a bit more about blockchain itself.

A blockchain is a ledger published to and tracked by any number of independent participants. These participants, who track the current state of the ledger, are called "nodes". The structure of the ledger is a series of blocks of information chained together in chronological order, hence the name "blockchain". Every block of information contains a header and a body.

A **block header** contains: a four-byte version number, a 32-byte double hash of the previous block's header, a 32-byte Merkle root of the transactions in the current block, the four-byte Unix time when the block was mined, a four-byte rounded off version of the target difficulty in mining that block, and finally a four-byte nonce that can be any value set by the miner in order to meet a specific condition we'll discuss more in a moment.

The **block body** contains a protocol-dependent number of bytes, often 1,000,000 or more, of transaction data.

We mentioned mining several times above. Here we look at what that means for cryptocurrencies built on a proof of work model. When a given block has just been added to the blockchain, a race begins. In this race, to mine the next block the participants – most commonly referred to as miners – gather as many open transactions as they can into a new block body and calculate the Merkle root from that, and they calculate other information for their new block header as well, all except the four-byte nonce we mentioned above.

The miner can set this nonce to any value they like, but the goal in doing so is to make the hash of the block header meet the target difficulty. To slightly oversimplify it, the nonce is changed and the header hashed repeatedly until the resulting hash begins with enough zeros. At the current difficulty, approximately one in every 75,000,000,000,000,000,000,000 possible headers will produce a hash with enough leading zeros to be valid. When one is found, the block is mined and can be sent to the nodes where it is added to the blockchain, and the race begins again for the next block.

This race to mine the next block is a key security feature in the blockchain. If one could mine blocks at will, an attacker could make a competing blockchain and, by getting enough nodes to publish it, could create fraudulent transactions, reverse legitimate ones, or any of a number of other actions that would rapidly cause trust in the system and the value of the associated coin to trend to zero.

Because each block in the blockchain contains a double hash of the header of the previous block, any change made earlier in the blockchain requires all subsequent blocks to also be changed, and these changes require the newly-changed blocks to be mined again. It is easy to see that this system provides security not only for new transactions, but that the older a transaction in the blockchain is, the more secure it becomes.

So miners are critical to the blockchain. But mining is expensive work and must be financially compensated.

When a block is mined, the successful miner is allowed to add a number of coins – the **block reward** – to his or her own wallet, the number being set by the protocol. These newly minted coins can be sold by the miner and are currently the primary way the miners are paid for their work. Unfortunately for miners, many crypto protocols reduce the size of the block reward over time. But there is another way miners can still get paid. This is where the user comes in.

The role of users is simple. They buy, sell, and trade the currency native to their chosen blockchain. If blockchain transactions were feeless, the user needs only use their private key to sign a transaction, putting a set value of crypto under the control of the recipient whose public key is included in the transaction.

But there is a problem for the user here. The target difficulty of mining blocks is designed to force new blocks to be mined at a relatively constant rate. And the blocks themselves usually have a fixed size which in turn fixes a limit on the number of transactions that can be included per block. If there are more transactions waiting to be included in a block, the miners will usually select transactions that include payment (a "tip") to whomever mines the block the transaction is included in. The higher the fee, the sooner it is selected.

No solution has been proposed yet that can get miners on blockchain to adequately secure the system but doesn't make users pay for it in some way.
