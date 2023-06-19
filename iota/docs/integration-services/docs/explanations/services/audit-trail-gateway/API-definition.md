---
image: /img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg
description: The Audit Trail GW implementation provides a Channel Service, a Channel Info Service, and a Subscription Service.
keywords:
- explanation
- API definition
- Architecture overview
- Channel Service
- Channel Info Service
- Subscription Service
---
# Software Architecture and APIs Definition

![ecommerce-audit-trail-bridge](/img/integration-services/diagrams/ecommerce-audit-trail-bridge.png)
**List of provided APIs.**

The Audit Trail GW implementation provides the following services:

## Channel Service

You can use this service to create new channels in the Tangle. The identity creating the channel becomes the channel’s
author. The author can read all messages and write data into the channel. Authorized subscribers can also use this
service to read and write from/to the channel (see [Subscription Service](#subscription-service)).

__Prefix:__ `/api/{{version}}/channels`

## Channel Info Service

You can use this service to search for one or more channels stored by the API. It can query for all the channels created
by a specific identity or topic. It also allows you to keep or remove any channel from the database.

__Prefix:__ `/api/{{version}}/channel-info`

:::info 

When you remove a channel from your database, it **will not be removed from the ledger** since data on the
Tangle is immutable. The service will only remove the index from your database.

:::


## Subscription Service

You can use this service to manage subscriptions to a specific channel. Identities can subscribe to a specific channel
identified by a unique channel address. The channel's author can then decide whether to authorize the identity to read from the channel
or write to it. The channel’s author can still revoke access to the channel at any time. This service can
also list all authorized subscriptions to a channel.

__Prefix:__ `/api/{{version}}/subscription`

