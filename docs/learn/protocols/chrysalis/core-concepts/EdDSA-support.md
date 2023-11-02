---
description: This article provides an overview of EdDSA and Ed25519 signature schemes, along with the benefits they bring to users, such as reusable addresses and reduced transaction size.
keywords:
  [
    'EdDSA',
    'Ed25519',
    'Reusable addresses',
    'Reduced transaction size',
    'Signature scheme',
    'Private keys',
  ]
---

# EdDSA Support

## What is EdDSA?

The [EdDSA (Edwards-curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/EdDSA) is a modern and secure
signature scheme that uses operations on an Edwards curve, a special type of elliptic curve,
to provide robust cryptographic security.

### Ed25519 Signatures

Ed25519 is a specific instance of the EdDSA designed to offer a careful balance of performance, security, and practical
considerations.
Named after its use of a 255-bit Edwards curve, Ed25519 is one of the most popular choices for ensuring
message security in modern networking and storage applications.

### Reusable Addresses

One of the major benefits of supporting Ed25519 in a protocol is the introduction of _reusable addresses_. Unlike some
cryptographic systems that mandate a new address for every transaction, Ed25519 allows for re-using private keys.
This means that users can use the same address across multiple transactions, greatly simplifying the process of managing
transactions.

### Reduced Transaction Size

Additionally, Ed25519 helps in reducing the transaction size. Compared to other signature schemes, Ed25519 signatures
require significantly less data. This smaller transaction size translates directly into savings in network bandwidth
and faster processing times. This efficiency makes IOTA more scalable and accessible,
benefiting users who have network usage constraints or wish to minimize data transmission.

:::tip Learn More

You can learn more about the [Ed25519 signature in IOTA](/tips/tips/TIP-0014) in the [TIPS section](../tips.md).

:::
