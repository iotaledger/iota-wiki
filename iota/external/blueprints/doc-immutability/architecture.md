# Application Architecture

**The Document immutability application is simply a graphical user interface (GUI), written in React with some additional functionality provided by the poex-tool**

:::warning:Disclaimer
Running an open source project, like any human endeavor, involves uncertainty and trade-offs. We hope the architecture described below helps you to deploy similar systems, but it may include mistakes, and can’t address every situation. If you have any questions about your project, we encourage you to do your own research, seek out experts, and discuss them with the IOTA community.
:::

This blueprint uses the following architecture whereby the application takes file data from a client, saves it to a database, and attaches it to the Tangle through a node.

![Document immutability architecture](/img/blueprints/document-immutability-architecture.png)

## Building Blocks

The application uses the [Proof of Existence Library](https://www.npmjs.com/package/@iota/poex-tool), a basic library that enables users to publish and verify Proof of Existences. With a valid Proof of Existence, users can be certain that the given document has not been changed since the Proof of Existence has been published on the IOTA Tangle, thereby ensuring data integrity.

## Legacy Network Backwards-Compatibility

As this is one of the earlier projects, it has been up and running long before the Chrysalis network. While new PoEs are published to Chrysalis, proofs issued on the Legacy network are still verifiable in the application, as the underlying Proof of Existence library provides methods for both networks.
The application automatically detects if the provided message-id is from the Legacy or the Chrysalis network and adjusts its procedure accordingly.

### Uploading a Proof of Existence of a Document

When a user wants to create a Proof of Existence for a document, the application process is the following:

1. The user provides the document.
2. The document is hashed
3. The application includes the hash of the document in a message and attaches it to the Tangle.
4. Return the message-id to the user

[![Document hashing](/img/blueprints/document-immutability-signing.png)](/img/blueprints/document-immutability-signing.png)

The document is hashed, using the SHA256-hash function. We recommend using at least a 128-bit hashing algorithm.
The hash is inserted into an `IndexationPayload` message that is sent to the selected IOTA node, which proceeds to attach it to the Tangle. Once the node has attached the message, it returns the message-id, which the user can then store.

### Verifying a Document

When a user wants to verify the integrity of a document, the process in the web application is the following:

1. The user provides the document and the message-id referencing the Proof of Existence
2. The web application fetches the Proof of Existence from the message of the Tangle by querying the selected node
3. The document is hashed 
4. The result is compared to the fetched Proof of Existence
5. The verification result is returned to the user

In order to access the Proof of Existence, the message-id, which references the message in the Tangle, has to be provided.
An IOTA node is then queried to return the message, which contains the document hash in its `data` field of the `IndexationPayload` of the message.
Now, the document is simply hashed and compared with the Proof of Existence-hash.

If the two hashes match, the file is unchanged.
if the hashes do not match, we know that the file has been changed between now and the time its Proof of Existence was attached to the Tangle.

![Document verification](/img/blueprints/document-immutability-verification.png)
