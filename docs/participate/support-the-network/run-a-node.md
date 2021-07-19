---
title: Run a Node
description: Everything you need to know and learn to setup an IOTA Mainnet or DevNet Node and take actively part in the IOTA Network.
---


# Run a Node

One way to support the IOTA project and community is to run your own IOTA node. This is also an excellent way to get into the basic concepts of IOTA (and to a certain degree of Distributed Ledger Technologies in general).


## What is a node?

Nodes are the backbone of distributed networks. In the IOTA case nodes specifically accept requests from participants (e.g. transactions from wallets), verify transactions and communicate among each other in case of unclear situations. This ultimately leads to a consensus and thus to a consistent ledger state for all nodes in the network. 

By having more active nodes in the network it grows more robust and less centralised. On the personal side you may feel more secure when sending transaction-requests to your own node. Keep in mind that - in contrast to other DLT - there is no direct or indirect financial incentive to run your own node. (Hint at Mana?)


## What kinds of node-software is currently available for IOTA?

On the one hand there are currently different IOTA networks active: 

- The primary `Mainnet` (you might have heard the term "Chrysalis" or "IOTA 1.5") where for example the real tradeable IOTA-token belong to
- The `DevNet` on which new and not fully tested features are developed and tested. This is intended to ultimately lead the way to "IOTA 2.0"
- There are further internal and community-driven networks for more specific test-runs, but those are out of scope for now ;)

On the other hand there different implementations of the IOTA node software:

- `Bee`: This software is mainly developed by the IOTA Foundation developers and is written in Rust. It is currently available for the `Mainnet`.
- `Hornet`: This software is a mainly community-driven implementation written in Go and is primarily meant to work with the `Mainnet`.
- `GoShimmer`: This software is currently the only node-software available for participating in the 'IOTA DevNet 2.0'. It is also not able to use goShimmer for the Mainnet

Thus if you want to run a Mainnet-node you can chose between `Bee` and `Hornet`


## How to setup an IOTA node?

There are different approaches to install and start IOTA nodes. The most common ones are as follows:

- Install the software via APT as in `apt install xyz` (Easiest approach, but not available for all node software variants)
- Download pre-compiled binary files and start the node (Easy to start with but might require more steps later on for configuration. Good for learning the linux basics.)
- Rund the node-software as a docker-container (Easy for users who know docker)
- Clone the corresponding git repository, build the software yourself and start the node (Slightly more complex, might require intense copy-pasting of commands from guides ;))


## Detailed Setup Guides

(Placeholder for table with links to detailed guides?)




<br/>

----

<br/>

**need to add a footer section for further content - (three cards)**

## Useful Links
- **[a link](https://linkgoes.here)** - A description for the link
- **[a link](https://linkgoes.here)** - A description for the link
- **[a link](https://linkgoes.here)** - A description for the link

