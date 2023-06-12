# Tangle data storage

**Data boosts innovation for public and private sector organisations, and can be used to create new revenue streams. However, without a vendor-neutral way of verifying data, it can't be trusted. This blueprint uses the IOTA Tangle as an immutable data structure to verify the contents of a file in a third-party storage solution.**



## Business Case

Storing, sharing and trading data is a cornerstone of business in the connected world and boosts innovation for public and private sector organisations. However, if you can't trust that the data has not been altered, then the data becomes nearly useless. By using the IOTA Tangle, businesses and connected machines can trust in the security and privacy of the data they share.

## Challenges

A common requirement for nearly all use cases or applications is that data must be stored for later use, for example:

- **Supply chain:** Shipping documents or images must be stored to form a permanent record of events
- **Digital twin of a vehicle:** All data such as the odometer readings, maintenance record, and ownership change should be stored to form a permanent record of the entire lifecycle of the vehicle

However, the Tangle is not a database. The Tangle is an immutable, distributed ledger which allows you to store a hash of data and a pointer to its location in third-party data storage.

:::info:
Storing and retrieving messages in the Tangle indefinitely is ideally done with [Chronicle](https://wiki.iota.org/chronicle.rs/welcome).
:::

## Solution

By creating a cryptographic hash of the document at the source and storing the hash in the Tangle, you have a method of proving that the data is unchanged. In addition, you may also want the data to remain private and allow only authorized users to view it as well as be able to revoke this authorization when needed. By using any standard encryption method, the data can be secured and only visible to those with the corresponding decryption key.

When you use the Tangle with a third-party data storage solution as described in this blueprint, your data is immutably secured and timestamped, without having to attach all of it to the Tangle.

## Demo

See this website for a [demonstration of the application](https://ipfs.iota.org/).

## Additional Resources


### [GitHub repository](https://github.com/iotaledger/poc-ipfs)

Read the code and some quickstart instructions to test this blueprint.

### [Client WASM library](https://wiki.iota.org/iota.rs/libraries/nodejs/getting_started)

Learn how to use the JavaScript client library to create, send, and receive transactions.

### [IPFS](https://ipfs.io/)

This blueprint stores files on IPFS, then attaches the immutable, permanent IPFS links to the Tangle. This secures your content, without having to put the whole file in the Tangle.
