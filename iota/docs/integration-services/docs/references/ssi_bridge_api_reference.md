---
image: /img/integration-services/logo/integration_services.png
description: API Reference documentation for the integration Services.
keywords:
- reference
- API Reference
- models
- endpoints
- v1.0.0
---

# SSI Bridge API Documentation
This is the API documentation for the SSI Bridge of the [Integration Services](https://github.com/iotaledger/integration-services). For further information have a look at our [Wiki](https://wiki.iota.org/integration-services/services/ssi-bridge/introduction).

## Version: v0.2

### /authentication/prove-ownership/{id}

#### GET
##### Summary:

Request a nonce which must be signed by the private key

##### Description:

Request a nonce which must be signed by the private key of the client and send it to /prove-ownership/{identity-id} endpoint via POST. This allows a user to prove ownership of its identity public key.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns a nonce. |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

#### POST
##### Summary:

Get an authentication token by signing a nonce

##### Description:

Get an authentication token by signing a nonce using the private key. If signature is verified, a JWT string will be returned in the response. The nonce can be received from GET /prove-ownership/{identity-id} endpoint. The JWT is used for any future API interaction.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns a JSON Web Token (JWT). |
| 400 | No valid body provided |
| 401 | No valid api key provided |
| 500 | No valid signedNonce provided |
| 5XX | Unexpected error |

### /authentication/verify-jwt

#### POST
##### Summary:

Verify a signed jwt

##### Description:

Check if the jwt was signed by the Integration Service.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns if the jwt is valid. |
| 400 | No valid body provided |
| 401 | No valid api key provided |
| 500 | No valid signedNonce provided |
| 5XX | Unexpected error |

### /identities/create

#### POST
##### Summary:

Create a new decentralized digital identity (DID)

##### Description:

Create a new decentralized digital identity (DID). Identity DID document is signed and published to the ledger (IOTA Tangle). A digital identity can represent an individual, an organization or an object. The privateAuthKey controlling the identity is returned. It is recommended to securely (encrypt) store the privateAuthKey locally, since it is not stored on the APIs Bridge.

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Returns the created identity keys |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /identities/key-pair

#### POST
##### Summary:

Create a new keypair.

##### Description:

Create a new keypair.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| key-type | query |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Returns the created key pair without creating or storing it in an identity document. |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /identities/search

#### GET
##### Summary:

Search for identities

##### Description:

Search for identities in the system and returns a list of existing identities.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| type | query |  | No | string |
| username | query |  | No | string |
| creator | query |  | No | string |
| registration-date | query |  | No | dateTime |
| limit | query |  | No | number |
| index | query |  | No | number |
| asc | query |  | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Return list of existing entities. |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /identities/identity/{id}

#### GET
##### Summary:

Get information about a specific identity

##### Description:

Get information (including attached credentials) about a specific identity using the identity-id (DID identifier).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Return a specific identity / none if no identity exits with given identity-id |
| 401 | No valid api key |
| 5XX | Unexpected error |

#### DELETE
##### Summary:

Removes an identity from the Bridge

##### Description:

Removes an identity from the Bridge. An identity can only delete itself and is not able to delete other identities. Administrators are able to remove other identities. The identity cannot be removed from the immutable IOTA Tangle but only at the Bridge. Also the identity credentials will remain and the identity is still able to interact with other bridges.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| revoke-credentials | query | If true all credentials will be revoked and deleted. | No | boolean |
| revoke-subscriptions | query | If true all subscriptions will be revoked and deleted. | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Deleted Identity. |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /identities/identity

#### POST
##### Summary:

Register an existing identity into the Bridge

##### Description:

Register an existing identity into the Bridge. This can be used if the identity already exists or it was only created locally. Registering an identity in the Bridge makes it possible to search for it by using some of the identity attributes, i.e., the username.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | The registered entity. |
| 401 | No valid api key |
| 5XX | Unexpected error |

#### PUT
##### Summary:

Update claim of a registered identity

##### Description:

Update claim of a registered identity.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | The registered entity. |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /info

#### GET
##### Summary:

Get information about the server

##### Description:

Get information about the server like commitHash, server identity id and api version

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns information about the server |
| 5XX | Unexpected error |

### /verification/latest-document/{id}

#### GET
##### Summary:

Get the latest version of an identity document (DID)

##### Description:

Get the latest version of an identity document (DID) from the IOTA Tangle.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Latest Identity document (DID) |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

### /verification/trusted-roots

#### POST
##### Summary:

Adds Trusted Root identity identifiers (DIDs)

##### Description:

Adds Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Successful added trusted Root identity identifier. |
| 401 | No valid api key provided / Not authenticated / Not authorized |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### GET
##### Summary:

Returns a list of Trusted Root identity identifiers (DIDs)

##### Description:

Returns a list of Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | List of Trusted Root identity identifiers (DIDs). |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

### /verification/trusted-roots/{trustedRootId}

#### DELETE
##### Summary:

Remove Trusted Root identity identifiers (DIDs)

##### Description:

Remove Trusted Root identity identifiers (DIDs). Trusted roots are DIDs of identities which are trusted by the Bridge. This identity DIDs can be DIDs of other organizations. By adding them to the list Trusted Roots their Verifiable Credentials (VCs) are automatically trusted when checking at the Bridge.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| trustedRootId | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Successful removed trusted Root identity identifier. |
| 401 | No valid api key provided / Not authenticated / Not authorized |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /verification/create-credential

#### POST
##### Summary:

Verify the authenticity of an identity and issue a credential

##### Description:

Verify the authenticity of an identity (of an individual, organization or object) and issue a credential stating the identity verification status. Only previously verified identities (based on a network of trust) with assigned privileges can verify other identities. Having a verified identity provides the opportunity for other identities to identify and verify a the entity they interact to.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | The created credential. |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /verification/check-credential

#### POST
##### Summary:

Check the verifiable credential of an identity

##### Description:

Check the verifiable credential of an identity. Validates the signed verifiable credential against the Issuer information stored onto the IOTA Tangle and checks if the issuer identity (DID) contained in the credential is from a trusted root.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | The registered entity. |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

### /verification/check-presentation

#### POST
##### Summary:

Check the verifiable presentation of an identity

##### Description:

Check the verifiable presentation of an identity.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | The registered entity. |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

### /verification/revoke-credential

#### POST
##### Summary:

Revoke one specific verifiable credential of an identity

##### Description:

Revoke one specific verifiable credential of an identity. In the case of individual and organization identities the reason could be that the user has left the organization. Only organization admins (with verified identities) or the identity owner itself can do that.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Revoke successful |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### Models


#### ProveOwnershipPostBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| signedNonce | string |  | Yes |

#### CreateChannelBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | A channel can be searched by its name. | No |
| description | string | An optional description for a channel. | No |
| type |  | Channel type used to differ between public and private channels. | No |
| hidden | boolean | If set to true the channel can not be found by others. It will be still possible to give specific users access to the channel. | No |
| visibilityList | [ object ] |  | No |
| topics | [ object ] |  | Yes |
| hasPresharedKey | boolean | If the channel has a preshared key (hasPresharedKey=true) but non is set in the presharedKey property it will be generated by the api. | No |
| seed | string | If left empty the api will generate a seed automatically. Always store your seed otherwise the data can not be reimported. | No |
| presharedKey | string | If the channel has a preshared key (hasPresharedKey=true) but non is defined here the presharedKey will be generated by the api. | No |

#### AddChannelLogBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string | Public available type. | No |
| created | dateTime | Public available date. | No |
| metadata |  | Public available metadata. | No |
| publicPayload |  | Public available payload. | No |
| payload |  | Payload is stored encrypted in the channel. | No |

#### ChannelDataSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| link | string |  | Yes |
| imported | dateTime | Date when the data was imported from the tangle into the cached database. | No |
| messageId | string | Message id can be used to search for the message in an IOTA explorer. | No |
| source | object |  | No |
| log | object |  | Yes |

#### ValidateBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ValidateBodySchema | array |  |  |

#### AuthorizeSubscriptionBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| subscriptionLink | string |  | No |
| id | string |  | No |

#### RequestSubscriptionBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| seed | string | If left empty the api will generate a seed. Make sure you store the seed since the API will not store it. You can reuse your seed for different channels. | No |
| accessRights |  |  | No |
| presharedKey | string |  | No |

#### RevokeSubscriptionBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| subscriptionLink | string |  | No |
| id | string |  | No |

#### RevokeVerificationBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| signatureValue | string |  | Yes |

#### CreateCredentialBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| subject | object |  | Yes |
| initiatorVC | object |  | No |

#### TrustedRootBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| trustedRootId | string |  | Yes |

#### SubjectBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| credentialType | string |  | Yes |
| claim | object |  | Yes |

#### CreateIdentityBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| storeIdentity | boolean |  | No |
| username | string |  | Yes |
| registrationDate | dateTime |  | No |
| creator | string |  | No |
| role | string |  | No |
| claim | object |  | No |
| hidden | boolean |  | No |
| isServerIdentity | boolean |  | No |
| verifiableCredentials | [ object ] |  | No |

#### UpdateIdentityBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |

#### CreateChannelResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| seed | string |  | No |
| channelAddress | string |  | Yes |
| presharedKey | string |  | No |

#### AuthorizeSubscriptionResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| keyloadLink | string |  | Yes |

#### RequestSubscriptionResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| seed | string | Auto generated seed. Make sure you store the seed since the API will not store it. You can reuse your seed for different channels. | Yes |
| subscriptionLink | string |  | Yes |

#### ValidateResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ValidateResponseSchema | array |  |  |

#### ErrorResponseSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| error | string |  | Yes |

#### ChannelInfoSearchSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| authorId | string |  | No |
| subscriberId | string |  | No |
| requestedSubscriptionId | string |  | No |
| name | string | Optional channel name. A channel can be searched by its name. | No |
| hidden | boolean | Channels which are hidden to others. | No |
| channelType |  | Channel type used to differ between public and private channels. | No |
| topicType | string |  | No |
| topicSource | string |  | No |
| created | dateTime |  | No |
| latestMessage | dateTime |  | No |
| limit | number |  | No |
| index | number |  | No |
| ascending | boolean | Sorting the channels by creation date ascending or descending | No |

#### SubscriptionSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type |  |  | Yes |
| channelAddress | string |  | Yes |
| id | string |  | Yes |
| subscriptionLink | string |  | No |
| isAuthorized | boolean |  | Yes |
| accessRights |  |  | Yes |
| publicKey | string |  | No |
| keyloadLink | string |  | No |
| sequenceLink | string |  | No |
| pskId | string |  | No |

#### SubscriptionUpdateSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type |  |  | No |
| channelAddress | string |  | No |
| id | string |  | No |
| subscriptionLink | string |  | No |
| isAuthorized | boolean |  | No |
| accessRights |  |  | No |
| publicKey | string |  | No |
| keyloadLink | string |  | No |
| sequenceLink | string |  | No |
| pskId | string |  | No |

#### ClaimSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type |  |  | Yes |

#### ChannelInfoSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| channelAddress | string |  | Yes |
| name | string | A channel can be searched by its name. | Yes |
| description | string | An optional description of the channel. | No |
| hidden | boolean | If set to true the channel can not be found by others. It will be still possible to give specific users access to the channel. | No |
| visibilityList | [ object ] |  | No |
| type |  | Channel type used to differ between public and private channels. | No |
| authorId | string |  | Yes |
| subscriberIds | [ string ] |  | No |
| requestedSubscriptionIds | [ string ] |  | No |
| topics | [ object ] |  | Yes |
| created | dateTime |  | No |
| latestMessage | dateTime |  | No |
| peerPublicKey | string | Public key used for privatePlus channels to encrypt channel data and state asymmetrically. | No |

#### TopicSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string |  | Yes |
| source | string |  | Yes |

#### VerifiableCredentialSubjectSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| type | string |  | No |
| initiator | string |  | No |

#### VerifiableCredentialSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | Yes |
| id | string |  | Yes |
| type | [ string ] |  | Yes |
| credentialSubject | object |  | Yes |
| issuer | string |  | Yes |
| issuanceDate | dateTime |  | Yes |
| credentialStatus | object |  | No |
| proof | object |  | Yes |

#### VerifiablePresentationSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | Yes |
| type | string |  | Yes |
| verifiableCredential |  |  | Yes |
| holder | string |  | Yes |
| proof | object |  | Yes |

#### IdentitySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| username | string |  | Yes |
| registrationDate | dateTime |  | No |
| creator | string |  | No |
| role | string |  | No |
| claim | object |  | No |
| hidden | boolean |  | No |
| isServerIdentity | boolean |  | No |
| verifiableCredentials | [ object ] |  | No |

#### IdentityKeyPairSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| type | string |  | Yes |
| public | string |  | Yes |
| private | string |  | Yes |
| encoding |  |  | Yes |

#### KeysSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| sign | object |  | Yes |
| encrypt | object |  | No |

#### IdentityKeysSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| keys | object |  | Yes |

#### IdentityDocumentSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| doc | object |  | Yes |
| meta | object |  | Yes |
| proof | object |  | Yes |
| integrationMessageId | string |  | No |

#### LatestIdentityDocSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| document | object |  | Yes |
| messageId | string |  | Yes |

#### DeviceSchema

Device schema, see the specification at: https://github.com/smart-data-models/dataModel.Device/blob/master/Device/doc/spec.md or https://github.com/smart-data-models/dataModel.Device/blob/master/DeviceModel/doc/spec.md or https://petstore.swagger.io/?url=https://smart-data-models.github.io/dataModel.Device/Device/swagger.yaml#/ngsi-ld/get_ngsi_ld_v1_entities

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | No |
| type | string |  | No |
| alternateName | string |  | No |
| name | string |  | No |
| description | string |  | No |
| url | string |  | No |
| image |  |  | No |
| sameAs |  |  | No |
| category | [  ] |  | Yes |
| controlledProperty | [  ] |  | Yes |
| address | object | PostalAddress schema, see the specification at: https://schema.org/PostalAddress | No |
| batteryLevel | number |  | No |
| configuration |  |  | No |
| controlledAsset |  |  | No |
| dataProvider |  |  | No |
| dateFirstUsed | dateTime |  | No |
| dateInstalled | dateTime |  | No |
| dateLastCalibration | dateTime |  | No |
| dateLastValueReported | dateTime |  | No |
| dateManufacured | dateTime |  | No |
| deviceState | string |  | No |
| direction |  |  | No |
| distance | number |  | No |
| dstAware | boolean |  | No |
| depth | number |  | No |
| firmwareVersion | string |  | No |
| hardwareVersion | string |  | No |
| ipAddress | [ string ] |  | No |
| location |  |  | No |
| macAddress | [ string ] |  | No |
| mcc | string |  | No |
| mnc | string |  | No |
| osVersion | string |  | No |
| owner |  |  | No |
| provider |  |  | No |
| refDeviceModel |  |  | No |
| relativePosition | string |  | No |
| rssi |  |  | No |
| serialNumber | string |  | No |
| softwareVersion | string |  | No |
| source |  |  | No |
| supportedProtocol |  |  | No |
| value |  |  | No |

#### OrganizationSchema

Organization schema, see the specification at: https://schema.org/Organization

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | No |
| type | string |  | No |
| alternateName | string |  | No |
| name | string |  | No |
| description | string |  | No |
| url | string |  | No |
| image |  |  | No |
| sameAs |  |  | No |
| brand |  |  | No |
| address |  |  | No |
| email | string |  | No |
| faxNumber | string |  | No |
| location | string |  | No |
| slogan | string |  | No |
| taxID | string |  | No |
| telephone | string |  | No |
| vatID | string |  | No |

#### PersonSchema

Person schema, see the specification at: https://schema.org/Person

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | No |
| type | string |  | No |
| alternateName | string |  | No |
| name | string |  | No |
| description | string |  | No |
| url | string |  | No |
| image |  |  | No |
| sameAs |  |  | No |
| familyName | string |  | No |
| givenName | string |  | No |
| memberOf |  |  | No |
| worksFor |  |  | No |
| address |  |  | No |
| colleague |  |  | No |
| email | string |  | No |
| jobTitle | string |  | No |
| birthDate | date |  | No |
| height |  |  | No |
| weight |  |  | No |
| gender | string |  | No |
| nationality | string |  | No |
| telephone | string |  | No |

#### ProductSchema

Product schema, see the specification at: https://schema.org/Product

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | No |
| type | string |  | No |
| alternateName | string |  | No |
| name | string |  | No |
| description | string |  | No |
| url | string |  | No |
| image |  |  | No |
| sameAs |  |  | No |
| aggregateRating | object | AggregateRating schema, see the specification at: https://schema.org/AggregateRating | No |
| award | string |  | No |
| brand |  |  | No |
| category | [ string ] |  | No |
| color | string |  | No |
| gtin | string |  | No |
| height |  |  | No |
| logo | string |  | No |
| manufacturer | object | Organization schema, see the specification at: https://schema.org/Organization | No |
| material |  |  | No |
| model | string |  | No |
| mpn | string |  | No |
| nsn | string |  | No |
| offers |  |  | No |
| pattern | string |  | No |
| productID | string |  | No |
| productionDate | dateTime |  | No |
| purchaseDate | dateTime |  | No |
| releaseDate | dateTime |  | No |
| review | object | Review schema, see the specification at: https://schema.org/Review | No |
| size |  |  | No |
| sku | string |  | No |
| slogan | string |  | No |
| weight |  |  | No |
| width |  |  | No |

#### ServiceSchema

Service schema, see the specification at: https://schema.org/Service

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| @context | string |  | No |
| type | string |  | No |
| alternateName | string |  | No |
| name | string |  | No |
| description | string |  | No |
| url | string |  | No |
| image |  |  | No |
| sameAs |  |  | No |
| aggregateRating | object | AggregateRating schema, see the specification at: https://schema.org/AggregateRating | No |
| availableChannel | object |  | No |
| brand |  |  | No |
| category | string |  | No |
| offers |  |  | No |
| provider |  |  | No |
| review |  |  | No |
| serviceOutput |  |  | No |
| serviceType | string |  | No |
| termsOfService | string |  | No |

#### IdentitySearchBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| numberOfCredentials | integer | Number of credentials connected to this identity | Yes |
| username | string |  | Yes |
| registrationDate | dateTime |  | No |
| creator | string |  | No |
| role | string |  | No |
| claim | object |  | No |
| hidden | boolean |  | No |
| isServerIdentity | boolean |  | No |

#### IdentityIdSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IdentityIdSchema | string |  |  |

#### NonceSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| nonce | string |  | Yes |

#### ChannelAddressSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ChannelAddressSchema | string |  |  |

#### VerifyJwtBodySchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| jwt | string |  | Yes |