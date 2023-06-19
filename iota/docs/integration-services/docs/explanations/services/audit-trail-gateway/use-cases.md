---
image: /img/integration-services/diagrams/ecommerce-audit-trail-bridge.jpeg
description: In the context of e-commerce and the ENSURESEC project, you can use the Audit Trail Gateway to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.
keywords:
- explanation
- API definition
- auditable data
- immutability
- large data set
- writer subscriber
- commerce infrastructure
- audit trail hash
---

# Use Cases

In the context of e-commerce and the [ENSURESEC](https://www.ensuresec.eu/) project, you can use the Audit Trail Gateway
to share immutable and auditable data and events and guarantee the Immutability of Large Data Sets.

## Sharing Immutable and Auditable Data and Events

This scenario involves a small amount of data that a channel Author and writer subscribers want to share with 
reader subscribers. All the information is stored in the Audit Trail, and channel reader subscribers can verify its
source (identity of the writer subscribers).

One example of this scenario is sharing threat information detected by a sensor on a critical e-commerce
infrastructure to alert all other systems connected to the same infrastructure.

You could implement the following workflow:

1. **Company X** has [registered and verified](../SSI-bridge/API-definition.md) its [Identity](../../identity.md) as
   well as an identity for **employee Y** and **device (sensor) Z**.
2. **Company A** has been registered and verified its identity as well as the identity of an **employee B** and **tool
   C**.
3. The **device Z** uses the [Gateway(GW) APIs](API-definition.md) to [create **
   channel**](API-definition.md#channel-service) **A**.
4. The **tool C** uses the GW APIs to [search for channels](API-definition.md#channel-info-service) based on available
   indexing metadata and [request a subscription](API-definition.md#subscription-service) to the selected **channel A**.
5. The **device Z** uses the GW APIs to authorize **tool C** to access the **channel A** as a reader.
6. The **device Z** uses the GW APIs to add data to **channel A**.
7. **Tool C** is automatically notified of new data coming from **device Z**.

## Assuring the Immutability of Large Data Sets

This scenario includes storing and sharing information across an organizations' data sets maintained in large data lakes while
guaranteeing that the data sets have not been altered over time or passed to unauthorized parties.

In this case, a channel’s Author and writer subscribers first index the data sets, hash them and store the hash in the
Audit Trail (using the GW APIs) on a channel registered with the created index and data set metadata. Authorized reader
subscribers will receive the given data set and its index/metadata and use them to retrieve and subscribe to the
requested channel. Then they can compare the hash stored in the Audit Trail with the one generated from the received
data set.

This process includes storing hashes of data logs collected by e-commerce systems on the Audit Trail, allowing
authorized parties to perform a forensic investigation in case of cyber-physical attacks on e-commerce infrastructure,
and detect any tampering with such logs.

You can implement a similar workflow as
the [Sharing Immutable and Auditable Data and Events scenario](#sharing-immutable-and-auditable-data-and-events). The
client should implement the exchange of data sets, extract their hash, and compare the hashes using the Audit Trail GW
APIs.
