---
id: coordinator
title: The Coordinator
description: What is the Coordinator in the Shimmer network.
image: /img/iota-wiki.png
keywords:
  - explanation
  - shimmer
---

# The Coordinator

:::note

The Coordinator is a temporary feature and will be removed with the upcoming IOTA 2.0 update.

:::

The Coordinator is the central node that sends signed blocks called milestones that nodes trust and use to confirm blocks. Blocks in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all Shimmer nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new blocks always have a chance of being confirmed fast, the Coordinator regularly sends milestones (every 5 seconds). And for the nodes to check if they are synchronized with the rest of the network, they can compare the milestones they know.
![An artist's depiction of Coordinator.](/img/learn/milestones.gif 'Click to see the full-sized image.')

_The Coordinator_
