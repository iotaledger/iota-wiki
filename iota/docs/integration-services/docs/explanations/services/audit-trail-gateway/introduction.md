---
image: /img/integration-services/architecture-integration.png
description: The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel’s data on the IOTA Tangle.
keywords:
- explanation
- subscribe to channel
- ecommerce
- immutable data channel
- subscriber
- Identity
---
# Ecommerce-Audit Trail Gateway (GW)

The Ecommerce-Audit Trail Gateway allows you to create and share immutable data channels and store the channel’s data on
the IOTA Tangle. A channel is implemented as an IOTA Stream and can handle multiple different types of **Subscribers**.
When you request `Read`, `Write`or `ReadAndWrite` access to a channel, you become a channel Subscriber. However, it is
up to the channel’s creator (**Author**) to authorize these requests. In addition to authorized subscribers, the author
can always read and write messages in the channel.

:::caution Important 

The Audit Trail GW currently integrates the [SSI Bridge](../SSI-bridge/introduction.md)
to identify and authorize subscribers. This means anyone interacting with the audit trail must create their
own [Identity](../../identity.md) beforehand.

In the future, you will be able to remove this dependency and deploy the Audit Trail and Gateway in the presence of
other (centralized) Accounting, Authentication, and Authorization (AAA) systems.

:::

The figure below shows a logic architecture with the integration of both IOTA Integration Services.

![IOTA-Tools-Architecture](/img/integration-services/architecture-integration.png)


