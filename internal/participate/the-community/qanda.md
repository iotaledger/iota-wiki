---
title: Q&A
description: A collection of questions and assumptions with answers.
---

# Q: The IF is trying to make the network not be controlled by one node and are trying to figure out a cool-sounding consensus algorithm to solve it.  (Source: https://twitter.com/ercwl/status/1527071088676577282?s=20&t=ZQHUVw3vvgxxv4hfKTfPqA)
# A:
Look at the state of blockchain ATM. Most now aim to scale through L2 bc L1 just sucks for most. In addition they reduce the number of validators (Solana is extreme here, but you see it also at Eth2.0, BSC etc.), to achieve speed. (Fewer validators can form a consensus quicker.)  
Also a blockchain is a linear list of tx in a block. If one conflicts you have to reroll the good ones as well. IOTA essentially says: you don't need a serial list, but 1) we see a way how tx can be executed  in parallel ("blocksize=1tx") and avoid serial dependency, and 2) we extend Nakamoto consensus to have thousands/millions of validators in parallel (the initial spirit of blockchain) without compromising security.  
All of this with subsecond finality, security and high scalability as "blocksize=1" can then be executed on multiple CPU cores (not possible with blocks) to scale TPS and thus take "blockchain" to the next level.
Next level meaning:
- no uncalculatable tx fees (fee=0)
- super green, as there are no miners etc.
- very robust & scalable infrastructure
- all with EVM (more down the road).

The 0 fee also enables 1000s of SC chains to easy exchange L1 assets (tokens, NFT's...) for free across chains w/o hackable bridges. 
Fundamentally(!) change how we see DLT and how it can scale, to finally mitigate the limits of blockchain and serve real use-cases/requirements of industry/crypto/web3 better than anything built on blockchain.

(Source: https://threadreaderapp.com/thread/1527201480574480385.html)

## 
