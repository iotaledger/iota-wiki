---
id: coordinator
title: The Coordinator
description: What is the Coordinator in the IOTA network.
image: /img/iota-wiki.png
keywords:
  - explanation
---

# The Coordinator

:::note

The Coordinator is a temporary solution. IOTA will remove the Coordinator in the future [IOTA 2.0 update](./roadmap-to-decentralization.md).

:::

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all IOTA nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check if they are synchronized with the rest of the network.

![An artist's depiction of Coordinator.](/img/learn/milestones.gif 'Click to see the full-sized image.')

_The Coordinator_
