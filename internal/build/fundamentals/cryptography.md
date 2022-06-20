---
title: Cryptography
description: An introduction to the cryptographic methods used within IOTA for
  the protection of information and communications.
---

# Cryptography and IOTA

## Cryptography as a Whole

So, cryptography. Numbers, codes, complex algorithms, “hacking”, bitcoin. A screen with Matrix text. Cryptography is none of those things: cryptography is about sharing secret messages while verifying and validating the sender. Just like the old codemakers and codebreakers across the centuries who created or deciphered coded messages.

The act of coding those messages, in present terms, can be thought of as creating encryptions, the act of concealing data or preventing unauthorized access. On the other side are the codebreakers who tried hard to decipher those messages, presently known as decryptions. And part of the solution to encrypting and decrypting those messages would be to use a cipher. [**Ciphers**](https://www.etymonline.com/word/cipher) were and are basically secret ways of writing or understanding messages. And _that_ is more or less the sum of cryptography: making messages, or, in the case of cryptocurrency, “transactions” secure from intrusion.

Now the _goal_ of cryptography and cryptocurrency is to scale, how to send and share those secret messages and its key between two people, those messages and make them as complex as possible, or unbreakable.

In the present, we have proven [**algorithms**](https://en.wikipedia.org/wiki/Algorithm) that make those operations and sophisticated codes. Those same algorithms are very much known within the cryptocommunity since we are all seeking the most secure way to handle everyone’s investments. How exactly do we/ciphers protect cryptocurrency? Along with those algorithms are tools called keys and _those_ are the heart of keeping everything secure.

Back in the earlier comparison, those codebreakers needed to use ciphers to decipher messages. But they would also need to use keys in combination with those ciphers How? A few different ways, but for the sake of time, they kept notice of what letters or numbers were used most frequently in messages. Yes, it did appear as nonsense to the codebreakers until they figured out the key: it basically amounted to shifting letters around on a sliding scale and noting the [**frequency**](https://en.wikipedia.org/wiki/Frequency_analysis) and patterns in the messages, a technique that had been used for centuries. The same applies to the present, where the now codebreakers are attempting to find the pattern in the cryptocurrency algorithms.

From a security standpoint, we can now say that these algorithms need to be complex but not _so_ much that the people using it can’t share the key (otherwise, they couldn’t conduct transactions between each other!). But from a usability standpoint, it still needs to be complex enough that finding a pattern is nearly impossible.

Just like any other cryptocurrency, IOTA wants a way to send complex, scalable, and unbreakable messages repeatedly and successfully. There are several ways to cumulatively achieve this, and IOTA uses many. For now, we will focus on our digital signatures and addresses.

## Digital Signatures

Say two people in the IOTA community want to conduct a transaction from different parts of the world. How do they make sure their transaction is legitimate and secure? Not all of what goes into that decision is in their hands but one very prominent one is a [**digital signature**](https://academy.binance.com/en/articles/what-is-a-digital-signature). There has been a rise in digital signatures in recent years to the point where the only time you may need to provide your handwritten one is for signing a receipt, legal contract, or wherever they issue driver’s licenses.

Nowadays, a digital signature is more or less the authenticator and validator of a transaction. Taking the legal contract example a step further, a digital signature is _stronger_ than the old way of a legally binding agreement. It guarantees that nothing can change once a contract (in this case, your transaction) is signed. The signature in your transaction proves that you hold the [**private key**](/identity.rs/specs/did/iota_did_method_spec#private-key-management) that controls the funds. And the transfer being made is held under a derived account, like a sub-account in your bank account.

IOTA decided to use the [**Ed25519**](https://en.wikipedia.org/wiki/Curve25519) signature scheme, based on the popular [**EdDSA**](https://en.wikipedia.org/wiki/EdDSA) scheme. Using both of these schemes in collaboration makes the signature reusable! The Ed25519 can verify single signatures and batches of transactions very quickly which means those two IOTA users in different parts of the world can stagger big and small transactions between or with others _at the same time_ if they want. They can even do this with little delay in sending and receiving. And their transactions are even _more_ secure as this signature generates keys faster. In this case, that means a whole brand new, complex string of numbers and letters is created specifically for each of their transactions as security. [**This helps keep out malicious actors trying to get your money**](/learn/wallets/firefly-wallet/#what-are-spent-addresses-and-why-are-they-dangerous).

## Addresses

Speaking of reusability, complex strings, and keys, there are [**addresses**](/introduction/guides/developer/#iota-15-address-anatomy) which we talked about briefly before. Again, addresses in this case are like a personal account, something viewable and sendable to people you want to do business with. They are also linked closely to the digital signature as a [**keypair**](https://en.wikipedia.org/wiki/Public-key_cryptography) but that’s a concept for another time!

This personal account belongs to a seed. In the world of cryptography, a seed refers to a “private key”. Simply put, you have the seed (your private key) keeping your address (your account) safe. In fact, [**the seed** **generates** **the address**](/introduction/guides/developer#addresskey-space)! For now, we’ll keep out of the more technical concepts and explain what addresses can do inside IOTA.

Within IOTA, our [**new reusable addresses are “human readable**”](/introduction/guides/developer#seed-and-addresses), meaning that addresses are entirely lower case, rather than mixed case. In this way, you will have an easier time sharing the address and typing one in. There is a lot to break down here but it’s not too difficult to grasp! Those old codemakers may have come up with coded messages that used upper and lowercase letters to make the messages even more complex. This would have been good for security but a pain to write, share, and receive amongst themselves.

IOTA’s addresses are none of those things which makes it easy on you and the people you share transactions with to send and receive tokens! And to make things even simpler, addresses are always 64 characters long, start with the prefix iota1(to distinguish IOTA addresses from other similar looking addresses of other cryptocurrencies),and contain a checksum (an automated function that verifies a word has the expected number of letters) to prevent accidental typos.

But what about that reusability bit that was mentioned before? Well in IOTA, when you send funds from an address (remember, the personal account), you are publishing a transaction with the correct digital signature to the [**Tangle**](/goshimmer/protocol_specification/components/tangle#general-concept), the network IOTA runs on. Simply put, when those two users from across the world push their shared transaction to the Tangle, the sending addresser signs the transaction confirming everything is okay for the receiver to receive. But, this does not reveal any information about the sender’s underlying private key (the seed). Because if it did reveal the private key, they wouldn’t be able to use that key again, nor the address. This way makes it possible to re-use addresses, i.e. spend from them multiple times! **But it is not recommended you share your address, seed, ledger, recovery phrases etc. with** **anyone** **due to privacy reasons.**

There are, of course, a lot more details and concepts to explore within the world of cryptography and cryptocurrency. And that does not even include what IOTA has done in those worlds! For more information, check out our [**IOTA blog**](https://blog.iota.org/) and the rest of our [**IOTA wiki**](https://wiki.iota.org/) to discover even more.

---

## Useful Links

- [**IOTA's Chrysalis**](/introduction/welcome) - Our current, multiple project effort for the future of IOTA
- [**Introduction to IOTA**](/learn/about-iota/an-introduction-to-iota) - The basics of how IOTA works and what it does
