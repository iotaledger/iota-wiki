---
image: /img/integration-services/diagrams/ecommerce-ssi-bridge.jpeg
description: The SSI Bridge Service API implementation provides an Identity Service, Authentication Service, and Verification Service to integrate IOTA Identity seamlessly.
keywords:
- explanation
- API definition
- Architecture overview
- identity services
- Authentication Services
- verification services
---

# Software Architecture and APIs Definition

The following diagram describes the software and services architecture and the list of provided APIs.

![ecommerce-ssi-bridge](/img/integration-services/diagrams/ecommerce-ssi-bridge.png)

## Identity Service

This service creates a decentralized identity on the IOTA Tangle and locally manages information for their indexing and
search function. This service is provided centrally for ease of use, but we recommend installing it locally in a production-ready
scenario.

**Prefix:** `/api/{{version}}/identities`

## Authentication Service

You can use this service to allow previously created identities to be authenticated and authorized to use the Bridge.
This service is required to maintain the security of the Bridge and audit its use, but you can remove it if the Bridge
is deployed locally to each party.

**Prefix:** `/api/{{version}}/authentication`

## Verification Service

You can use this service to verify identities and create and verify credentials. This abstraction layer allows every
entity to seamlessly deal with [IOTA decentralized (SSI) identity](https://wiki.iota.org/identity.rs/introduction)
implementation.

**Prefix:** `/api/{{version}}/verification`
