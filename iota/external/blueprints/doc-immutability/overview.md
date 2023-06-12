# Document Immutability

**Documents are an important means of transporting information and contracts. Being able to reliably prove that a document has not been tampered from an established state helps ensure trust between the parties envolved. This blueprint describes a solution that enables users to verify data integrity of a document using the IOTA Tangle, while remaining in complete control of the data.**

## Business Case

In digitized settings, contracts and documents can be easily altered. In a world of digital trade and service, a decentralized trust anchor for contractual agreements or other important documents can be highly useful in order to enhance trust between multiple parties.

## Challenges

Ensuring the integrity of digital documents is currently mostly done by storing them in some trusted database or by physically printing the documents. However, in a trustless and efficient environment, this is far from optimal.
A step in the right direction is e.g. displaying data fingerprints, so called hashes, on a website from which a file is being downloaded, which can then manually be compared to the local copy's fingerprint by a technically versed user. 
However, this procedure is too technically challenging and time consuming for most users. Additionaly, displaying a hash on some website is far from fully secure, as the centralized database of that website is also subject to change. For example, in 2016, hackers [successfully put a backdoor](https://blog.linuxmint.com/?p=2994) into an ISO file of a Linux distribution called Mint. As they also managed to get access to the website, they were able to adjust the hashes being displayed on the website too, thereby completely bypassing this security mechanism.

Also, in a scenario not containing some centralized server, but two parties agreeing on a contract, a simple tool should exist that anchors the integrity of a document in a distributed storage. 


## Solution

In this blueprint, we leverage the distributed ledger of the IOTA Tangle to immutably store data fingerprints of files, thereby providing a way to verify the integrity of a document by not relying on a centralized instance. 
This enables users to prove that a document has not been tampered with since the data fingerprint ("Proof of Existence") has been stored on the Tangle.
To verify a document in our web application, users can provide a file and a message-id, used to locate the data fingerprint embedded in a message of the Tangle. The provided file is locally hashed and compared with the fetched fingerprint stored on the Tangle.
Users can also publish new data fingerprints of a file and receive a message-id that references the Proof of Existence in the Tangle.
Additionally, as the Tangle never exposes the document to the public, the users remain in complete control of the document. An application can use the hash stored on the Tangle to verify the document's integrity, but the underlying document can not be derived from it. 


## Demo

See this website for a [demonstration of a Proof of Existence application](https://iota-poex.dag.sh/).

You can find instructions on how to set up a local version of this blueprint in the [official GitHub repository](https://github.com/iotaledger/poc-document-immutable-blueprint).

## Additional Resources

---------------
### [GitHub Repository](https://github.com/iotaledger/poc-document-immutable-blueprint)

Access the code base and quickstart instructions to test this blueprint.

---

### [Proof of Existence Library](https://www.npmjs.com/package/@iota/poex-tool)

A library you can use for Proof of Existence scenarios that is also used in this blueprint.

---------------
