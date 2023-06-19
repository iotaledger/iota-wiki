---
keywords:
- Stardust
- Shimmer
- Upgrades
- Dynamic POW
- Proof-of-work
- Congestion control
- Protocol Improvements
- explanation
description: Stardust prepares the protocol for the support of dynamic proof-of-work.
image: /img/logo/preview.png
---

# Dynamic Proof of Work

Proof of Work (PoW) is currently employed in IOTA  for congestion control. Every block must include a small amount of
computational work if it is to be considered valid. Note that, while in blockchain networks miners compete to solve the
cryptographic puzzle of PoW first and hence wasting a huge amount of energy in the process, IOTA users who submit
blocks to the network take part in a cooperative effort.

Chrysalis has a fixed PoW difficulty factor for a unit of data submitted to the network. Therefore, the actual
complexity of the challenge for a block is dependent on its length only.

Stardust protocol design incorporates a dynamic PoW difficulty factor based on the congestion of the network. The added
utility of the protocol upgrade could result in higher network activity. If this load reaches a certain threshold near
the limit of the network throughput capabilities, the protocol self-adjusts the PoW difficulty factor.
When the load is reduced, the process reverses to lower the difficulty until the threshold is reached again.

This mechanism will be supported by the network after the first ever fluid protocol upgrade, meaning the feature will
be activated in the already running, live network without any downtime. The node software is being refactored to
handle many more of such future protocol upgrades.
