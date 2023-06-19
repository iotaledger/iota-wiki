---
image: /img/integration-services/logo/integration_services.png
description: API Reference documentation Audit Trail Gateway of the the integration Services.
keywords:
- reference
- API Reference
- models
- endpoints
- audit trail
---

# Audit Trail GW API Documentation
This is the API documentation for the Audit Trail Gateway of the [Integration Services](https://github.com/iotaledger/integration-services). For further information have a look at our [Wiki](https://wiki.iota.org/integration-services/services/audit-trail-gateway/introduction).

## Version: v0.1

### /channel-info/search

#### GET
##### Summary:

Search for a channel

##### Description:

Search for a channel. A client can search for a channel which it is interested in.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| author-id | query |  | No | string |
| subscriber-id | query |  | No | string |
| requested-subscription-id | query |  | No | string |
| name | query |  | No | string |
| topic-type | query |  | No | string |
| topic-source | query |  | No | string |
| created | query |  | No | dateTime |
| latest-message | query |  | No | dateTime |
| limit | query |  | No | number |
| index | query |  | No | number |
| asc | query |  | No | boolean |
| hidden | query |  | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns information about searched channels |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channel-info/channel/{channelAddress}

#### GET
##### Summary:

Get information about a channel

##### Description:

Get information about a channel with address channel-address.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns information about the channel |
| 401 | No valid api key provided |
| 5XX | Unexpected error |

#### DELETE
##### Summary:

Delete information of a channel

##### Description:

Delete information of a channel with address channel-address. The author of a channel can delete its entry in the database. In this case all subscriptions will be deleted and the channel won’t be found in the system anymore. The data & channel won’t be deleted from the IOTA Tangle since its data is immutable on the tangle!

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Channel successfully deleted |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channel-info/channel

#### POST
##### Summary:

Add an existing channel into the database

##### Description:

Add an existing channel into the database. Clients are able to add existing channels into the database so others can subscribe to them. This will be automatically called when a channel will be created.

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Channel successfully added |
| 401 | No valid api key provided/ Not authenticated |
| 404 | Channel not found. |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### PUT
##### Summary:

Update channel information

##### Description:

Update channel information. The author of a channel can update topics of a channel.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Channel successfully added |
| 401 | No valid api key provided/ Not authenticated |
| 404 | Channel not found. |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channels/create

#### POST
##### Summary:

Create a new channel

##### Description:

Create a new channel. An author can create a new channel with specific topics where other clients can subscribe to.

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Returns the created channel |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channels/logs/{channelAddress}

#### POST
##### Summary:

Write data to a channel

##### Description:

Write data to a channel with address channel address. Write permission is mandatory. The type and metadata fields are not encrypted to have a possibility to search for events. The payload is stored encrypted for encrypted channels.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns a link to the written data |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### GET
##### Summary:

Get data from the channel

##### Description:

Get data from the channel with address channel address. The first possible message a subscriber can receive is the time the subscription got approved all messages before are not received. Read permission is mandatory.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| limit | query |  | No | number |
| index | query |  | No | number |
| asc | query |  | No | boolean |
| start-date | query |  | No | dateTime |
| end-date | query |  | No | dateTime |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns data from the channel |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channels/history/{channelAddress}

#### GET
##### Summary:

Get the history of a channel.

##### Description:

Get all data of a channel using a shared key (in case of encrypted channels). Mainly used from auditors to evaluate a log stream.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| preshared-key | query | Preshared key defined by the author to encrypt/decrypt data. | No | string |
| type | query | Define whether it is a `public` or `private` channel. You are able to read from public channels without a `preshared-key`. | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Received history. |
| 5XX | Unexpected error |

### /channels/validate/{channelAddress}

#### POST
##### Summary:

Validates channel data by comparing the log of each link with the data on the tangle.

##### Description:

Validates data of a channel.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Returns validated result. |
| 401 | No valid api key provided / Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /channels/re-import/{channelAddress}

#### POST
##### Summary:

Re import the data from the tangle into the database.

##### Description:

The user can decide to re-import the data from the Tangle into the database. A reason for it could be a malicious state of the data.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Reimport successful. |
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

### /subscriptions/state/{channelAddress}

#### GET
##### Summary:

Get a subscription state by identity id.

##### Description:

Get a subscription state of a channel by identity id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscriptions |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### PUT
##### Summary:

Updates an existing subscription

##### Description:

Updates an existing subscription

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscription updated |
| 400 | Missing channelAddress / id |
| 401 | No valid api key provided/ Not authenticated |
| 404 | No subscription found |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /subscriptions/{channelAddress}

#### GET
##### Summary:

Get all subscriptions of a channel.

##### Description:

Get all subscriptions of a channel. Use the is-authorized query parameter to filter for authorized subscriptions.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| is-authorized | query |  | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscriptions |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /subscriptions/{channelAddress}/{id}

#### GET
##### Summary:

Get a subscription by identity id.

##### Description:

Get a subscription of a channel by identity id.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscriptions |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### POST
##### Summary:

Adds an existing subscription

##### Description:

Adds an existing subscription (e.g. the subscription was not created with the api but locally.)

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Subscription added |
| 400 | Subscription already added or params missing |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### PUT
##### Summary:

Updates an existing subscription

##### Description:

Updates an existing subscription

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscription updated |
| 400 | Missing channelAddress / id |
| 401 | No valid api key provided/ Not authenticated |
| 404 | No subscription found |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

#### DELETE
##### Summary:

Deletes subscription

##### Description:

Deletes an existing subscription

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Subscription deleted |
| 400 | Missing channelAddress / id |
| 401 | No valid api key provided/ Not authenticated |
| 404 | No subscription found |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /subscriptions/request/{channelAddress}

#### POST
##### Summary:

Request subscription to a channel

##### Description:

Request subscription to a channel with address channel-address. A client can request a subscription to a channel which it then is able to read/write from.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Link to requested subscription |
| 400 | Subscription already requested |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /subscriptions/authorize/{channelAddress}

#### POST
##### Summary:

Authorize a subscription to a channel

##### Description:

Authorize a subscription to a channel with address channel-address. The author of a channel can authorize a subscriber to read/write from a channel. Eventually after verifying its identity (using the SSI Bridge).

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Link to requested subscription |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### /subscriptions/revoke/{channelAddress}

#### POST
##### Summary:

Revoke subscription to a channel.

##### Description:

Revoke subscription to a channel. Only the author of a channel can revoke a subscription from a channel.

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| channelAddress | path |  | Yes | string |
| asym-shared-key | query |  | No | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Sucessfully revoked the subscription. |
| 401 | No valid api key provided/ Not authenticated |
| 5XX | Unexpected error |

##### Security

| Security Schema | Scopes |
| --- | --- |
| BearerAuth | |
| ApiKey | |

### Models


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

#### SubscriptionStateSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| state | string |  | Yes |

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

#### IdentityIdSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IdentityIdSchema | string |  |  |

#### ChannelAddressSchema

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| ChannelAddressSchema | string |  |  |