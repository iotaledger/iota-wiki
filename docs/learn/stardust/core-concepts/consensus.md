---
description: What is the Coordinator in the Shimmer network?
image: /img/iota-wiki.png
keywords:
  - explanation
  - shimmer
---

# Consensus

## The Coordinator

:::note

The Coordinator is a temporary feature and will be removed with the
upcoming [IOTA 2.0 update](../../iota2.0/core-concepts/consensus.md).

:::

The Coordinator is the central node that sends signed blocks called milestones that nodes trust and use to confirm
blocks and reach a consensus.
Blocks in the Tangle are considered for confirmation only when a milestone directly or indirectly references them
that nodes have validated.

To allow the nodes to recognize valid milestones, all Shimmer nodes on the same network are configured with the
signatures of a coordinator node that they trust.
By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted
Coordinator did sign them.

To ensure that new blocks always have a chance of being confirmed fast, the Coordinator regularly sends milestones (
every 5 seconds).
And for the nodes to check if they are synchronized with the rest of the network, they can compare the milestones they
know.

![An artist's depiction of Coordinator.](/img/learn/milestones.gif 'Click to see the full-sized image.')

_The Coordinator_

### White Flag Consensus

The ["White Flag" consensus](../../chrysalis/core-concepts/white-flag-consensus.md) approach complements the
Coordinator's efforts.
As a deterministic and conflict-agnostic method, White Flag eliminates the need for a voting or weight calculation for
transaction validation.
Instead, once a milestone approves conflicting transactions,
the protocol accepts all of them but refrains from rewarding any.
This methodology ensures rapid transaction validation,
enhances scalability, and reduces the computational burden on nodes.

:::tip Learn More

You can learn more about [milestone payloads](https://wiki.iota.org/tips/tips/TIP-0029) in the
[TIPS section](../tips.md).

:::
