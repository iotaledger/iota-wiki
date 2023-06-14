---
image: /img/integration-services/arch/network-of-trust.jpeg
description: The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create decentralized identities (DIDs), verify them, attach verifiable credentials and verify them.
keywords:
- explanation
- ecommerce
- ssi bridge
- abstraction layer
- decentralized identity
- verifiable credentials
---
# SSI Bridge

## Concept and Logic Architecture

The SSI Bridge allows you to create [self-sovereign identities](../../identity.md), linking
decentralized identifiers (DIDs) to their specification ([DID Documents](https://www.w3.org/TR/did-core/)).

DIDs are public/private key pairs that can be created for organizations, individuals, and objects. Each identity is
represented by a unique public key immutably stored onto the ledger (in our case, the IOTA Tangle). Identities and
public keys are used to anchor off-chain verifiable credentials ([VCs](https://www.w3.org/TR/vc-data-model/)),
certificates containing identity attributes and signed by an Issuer identity using its private key.

The Issuer itself is an entity with its own decentralized identity. The SSI Bridge allows an identified trust root to
verify users' identities. Verified identities can then propagate this verification to organizations,
individuals, or objects identities using a network of trust approach.

![network-of-trust](/img/integration-services/arch/network-of-trust.png)

The Bridge also allows Issuers to issue verifiable credentials for selected Identity Owners identified by a
decentralized identity, and said Owners to present them to Verifiers. Verifiers can use
the [SSI Bridge APIs](API-definition.md) to verify a credential's authenticity. This requires verifying that a
credential contains the identifier (DID) of the Owner presenting it and that an authorized Issuer signs it. This process
requires access to information stored on a ledger.

The following image illustrates the interaction between the Issuer, Owner, Verifier, and the ledger to manage the
lifecycle of decentralized identities and verifiable credentials.

![Interaction between Issuer, Owner, Verifier, and the ledger](/img/integration-services/issuer-owner-verifier-interaction.png)

The IOTA SSI Bridge provides an abstraction layer through REST APIs that allows entities to create
decentralized identities (DIDs), verify them, attach verifiable credentials and verify those credentials.

The figure below shows the envisioned system architecture within the full set of IOTA Integration Services developed for
the ENSURESEC project.

![IOTA-Tools-Architecture](/img/integration-services/architecture-integration.png)

You can find examples of how the Bridge could be used in the context of e-commerce ecosystems
to [secure goods distribution](use-cases.md#secure-goods-distribution)
and [secure sales](use-cases.md#secure-e-commerce-sales) in the [Use Cases](use-cases.md) section.




