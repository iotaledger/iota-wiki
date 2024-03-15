# Class: Client

The Client to interact with nodes.

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Methods

- [create](Client.md#create)
- [destroy](Client.md#destroy)
- [getInfo](Client.md#getinfo)
- [getNetworkInfo](Client.md#getnetworkinfo)
- [getAccountCongestion](Client.md#getaccountcongestion)
- [getRewards](Client.md#getrewards)
- [getValidators](Client.md#getvalidators)
- [getValidator](Client.md#getvalidator)
- [getOutput](Client.md#getoutput)
- [getOutputs](Client.md#getoutputs)
- [getTips](Client.md#gettips)
- [postBlock](Client.md#postblock)
- [getBlock](Client.md#getblock)
- [getBlockMetadata](Client.md#getblockmetadata)
- [getBlockWithMetadata](Client.md#getblockwithmetadata)
- [findInputs](Client.md#findinputs)
- [signTransaction](Client.md#signtransaction)
- [signatureUnlock](Client.md#signatureunlock)
- [buildBasicBlock](Client.md#buildbasicblock)
- [getNode](Client.md#getnode)
- [getNetworkId](Client.md#getnetworkid)
- [getBech32Hrp](Client.md#getbech32hrp)
- [getTokenSupply](Client.md#gettokensupply)
- [getProtocolParameters](Client.md#getprotocolparameters)
- [getHealth](Client.md#gethealth)
- [getNodeInfo](Client.md#getnodeinfo)
- [postBlockRaw](Client.md#postblockraw)
- [getBlockRaw](Client.md#getblockraw)
- [getIncludedBlock](Client.md#getincludedblock)
- [getIncludedBlockMetadata](Client.md#getincludedblockmetadata)
- [getTransactionMetadata](Client.md#gettransactionmetadata)
- [getCommitment](Client.md#getcommitment)
- [getUtxoChanges](Client.md#getutxochanges)
- [getUtxoChangesFull](Client.md#getutxochangesfull)
- [getCommitmentByIndex](Client.md#getcommitmentbyindex)
- [getUtxoChangesByIndex](Client.md#getutxochangesbyindex)
- [getUtxoChangesFullByIndex](Client.md#getutxochangesfullbyindex)
- [hexToBech32](Client.md#hextobech32)
- [accountIdToBech32](Client.md#accountidtobech32)
- [anchorIdToBech32](Client.md#anchoridtobech32)
- [nftIdToBech32](Client.md#nftidtobech32)
- [hexPublicKeyToBech32Address](Client.md#hexpublickeytobech32address)
- [getOutputsIgnoreErrors](Client.md#getoutputsignoreerrors)
- [findBlocks](Client.md#findblocks)
- [unhealthyNodes](Client.md#unhealthynodes)
- [buildBasicOutput](Client.md#buildbasicoutput)
- [buildAccountOutput](Client.md#buildaccountoutput)
- [buildFoundryOutput](Client.md#buildfoundryoutput)
- [buildNftOutput](Client.md#buildnftoutput)
- [listenMqtt](Client.md#listenmqtt)
- [clearMqttListeners](Client.md#clearmqttlisteners)
- [computeMinimumOutputAmount](Client.md#computeminimumoutputamount)
- [requestFundsFromFaucet](Client.md#requestfundsfromfaucet)
- [callPluginRoute](Client.md#callpluginroute)
- [outputIds](Client.md#outputids)
- [basicOutputIds](Client.md#basicoutputids)
- [accountOutputIds](Client.md#accountoutputids)
- [accountOutputId](Client.md#accountoutputid)
- [anchorOutputIds](Client.md#anchoroutputids)
- [anchorOutputId](Client.md#anchoroutputid)
- [delegationOutputIds](Client.md#delegationoutputids)
- [delegationOutputId](Client.md#delegationoutputid)
- [foundryOutputIds](Client.md#foundryoutputids)
- [foundryOutputId](Client.md#foundryoutputid)
- [nftOutputIds](Client.md#nftoutputids)
- [nftOutputId](Client.md#nftoutputid)
- [blockId](Client.md#blockid)

## Constructors

### constructor

• **new Client**(`methodHandler`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methodHandler` | [`ClientMethodHandler`](ClientMethodHandler.md) | The Rust method handler created in `ClientMethodHandler.create()`. |

## Methods

### create

▸ `Static` **create**(`options`): `Promise`\<[`Client`](Client.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IClientOptions`](../interfaces/IClientOptions.md) | The client options. |

#### Returns

`Promise`\<[`Client`](Client.md)\>

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

___

### getInfo

▸ **getInfo**(): `Promise`\<[`INodeInfoWrapper`](../interfaces/INodeInfoWrapper.md)\>

Get the node information together with the url of the used node.

#### Returns

`Promise`\<[`INodeInfoWrapper`](../interfaces/INodeInfoWrapper.md)\>

___

### getNetworkInfo

▸ **getNetworkInfo**(): `Promise`\<[`INetworkInfo`](../interfaces/INetworkInfo.md)\>

Get the network related information such as network_id.

#### Returns

`Promise`\<[`INetworkInfo`](../interfaces/INetworkInfo.md)\>

___

### getAccountCongestion

▸ **getAccountCongestion**(`accountId`, `workScore?`): `Promise`\<[`CongestionResponse`](CongestionResponse.md)\>

Check the readiness of the node to issue a new block, the reference mana cost based on the rate setter and
current network congestion, and the block issuance credits of the requested account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |
| `workScore?` | `number` |

#### Returns

`Promise`\<[`CongestionResponse`](CongestionResponse.md)\>

___

### getRewards

▸ **getRewards**(`outputId`, `slotIndex?`): `Promise`\<[`ManaRewardsResponse`](ManaRewardsResponse.md)\>

Returns the totally available Mana rewards of an account or delegation output decayed up to endEpoch index
provided in the response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputId` | `string` |
| `slotIndex?` | `number` |

#### Returns

`Promise`\<[`ManaRewardsResponse`](ManaRewardsResponse.md)\>

___

### getValidators

▸ **getValidators**(`pageSize?`, `cursor?`): `Promise`\<[`ValidatorsResponse`](../interfaces/ValidatorsResponse.md)\>

Returns information of all registered validators and if they are active, ordered by their holding stake.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pageSize?` | `number` |
| `cursor?` | `string` |

#### Returns

`Promise`\<[`ValidatorsResponse`](../interfaces/ValidatorsResponse.md)\>

___

### getValidator

▸ **getValidator**(`accountId`): `Promise`\<[`ValidatorsResponse`](../interfaces/ValidatorsResponse.md)\>

Return information about a validator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`\<[`ValidatorsResponse`](../interfaces/ValidatorsResponse.md)\>

___

### getOutput

▸ **getOutput**(`outputId`): `Promise`\<[`OutputResponse`](OutputResponse.md)\>

Get output from a given output ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputId` | `string` |

#### Returns

`Promise`\<[`OutputResponse`](OutputResponse.md)\>

___

### getOutputs

▸ **getOutputs**(`outputIds`): `Promise`\<[`OutputResponse`](OutputResponse.md)[]\>

Fetch OutputResponse from given output IDs. Requests are sent in parallel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIds` | `string`[] |

#### Returns

`Promise`\<[`OutputResponse`](OutputResponse.md)[]\>

___

### getTips

▸ **getTips**(): `Promise`\<`string`[]\>

Request tips from the node.
The tips can be considered as non-lazy and are therefore ideal for attaching a block to the Tangle.

#### Returns

`Promise`\<`string`[]\>

An array of tips represented by their block IDs.

___

### postBlock

▸ **postBlock**(`block`): `Promise`\<`string`\>

Post a block in JSON format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Block`](Block.md) | The block to post. |

#### Returns

`Promise`\<`string`\>

The block ID once the block has been posted.

___

### getBlock

▸ **getBlock**(`blockId`): `Promise`\<[`Block`](Block.md)\>

Get a block in JSON format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockId` | `string` | The corresponding block ID of the requested block. |

#### Returns

`Promise`\<[`Block`](Block.md)\>

The requested block.

___

### getBlockMetadata

▸ **getBlockMetadata**(`blockId`): `Promise`\<[`IBlockMetadata`](../interfaces/IBlockMetadata.md)\>

Get the metadata of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockId` | `string` | The corresponding block ID of the requested block metadata. |

#### Returns

`Promise`\<[`IBlockMetadata`](../interfaces/IBlockMetadata.md)\>

The requested block metadata.

___

### getBlockWithMetadata

▸ **getBlockWithMetadata**(`blockId`): `Promise`\<[`IBlockWithMetadata`](../interfaces/IBlockWithMetadata.md)\>

Get a block with its metadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockId` | `string` | The corresponding block ID of the requested block. |

#### Returns

`Promise`\<[`IBlockWithMetadata`](../interfaces/IBlockWithMetadata.md)\>

The requested block with its metadata.

___

### findInputs

▸ **findInputs**(`addresses`, `amount`): `Promise`\<[`UTXOInput`](UTXOInput.md)[]\>

Find inputs from addresses for a given amount (useful for offline signing).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `addresses` | `string`[] | A list of included addresses. |
| `amount` | `bigint` | The amount to find inputs for. |

#### Returns

`Promise`\<[`UTXOInput`](UTXOInput.md)[]\>

An array of UTXO inputs.

___

### signTransaction

▸ **signTransaction**(`secretManager`, `preparedTransactionData`): `Promise`\<[`SignedTransactionPayload`](SignedTransactionPayload.md)\>

Sign a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretManager` | [`SecretManagerType`](../api_ref.md#secretmanagertype) | One of the supported secret managers. |
| `preparedTransactionData` | [`PreparedTransactionData`](PreparedTransactionData.md) | An instance of `PreparedTransactionData`. |

#### Returns

`Promise`\<[`SignedTransactionPayload`](SignedTransactionPayload.md)\>

The corresponding signed transaction payload.

___

### signatureUnlock

▸ **signatureUnlock**(`secretManager`, `transactionSigningHash`, `chain`): `Promise`\<[`UnlockCondition`](UnlockCondition.md)\>

Create a signature unlock using the given secret manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `secretManager` | [`SecretManagerType`](../api_ref.md#secretmanagertype) | One of the supported secret managers. |
| `transactionSigningHash` | `string` | The signing hash of the transaction. |
| `chain` | [`Bip44`](../interfaces/Bip44.md) | A BIP44 chain |

#### Returns

`Promise`\<[`UnlockCondition`](UnlockCondition.md)\>

The corresponding unlock condition.

___

### buildBasicBlock

▸ **buildBasicBlock**(`issuerId`, `payload?`): `Promise`\<[`UnsignedBlock`](UnsignedBlock.md)\>

Build an unsigned block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerId` | `string` | The identifier of the block issuer account. |
| `payload?` | [`Payload`](Payload.md) | The payload to post. |

#### Returns

`Promise`\<[`UnsignedBlock`](UnsignedBlock.md)\>

The block ID followed by the block containing the payload.

___

### getNode

▸ **getNode**(): `Promise`\<[`INode`](../interfaces/INode.md)\>

Get a node candidate from the healthy node pool.

#### Returns

`Promise`\<[`INode`](../interfaces/INode.md)\>

___

### getNetworkId

▸ **getNetworkId**(): `Promise`\<`string`\>

Get the ID of the network the node is connected to.

#### Returns

`Promise`\<`string`\>

___

### getBech32Hrp

▸ **getBech32Hrp**(): `Promise`\<`string`\>

Get the Bech32 HRP (human readable part) of the network the node is connected to.

#### Returns

`Promise`\<`string`\>

___

### getTokenSupply

▸ **getTokenSupply**(): `Promise`\<`bigint`\>

Get the token supply.

#### Returns

`Promise`\<`bigint`\>

___

### getProtocolParameters

▸ **getProtocolParameters**(): `Promise`\<[`ProtocolParameters`](../interfaces/ProtocolParameters.md)\>

Get the protocol parameters.

#### Returns

`Promise`\<[`ProtocolParameters`](../interfaces/ProtocolParameters.md)\>

___

### getHealth

▸ **getHealth**(`url`): `Promise`\<`boolean`\>

Get the health of a node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`\<`boolean`\>

___

### getNodeInfo

▸ **getNodeInfo**(`url`, `auth?`): `Promise`\<[`INodeInfo`](../interfaces/INodeInfo.md)\>

Get the info about the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the node. |
| `auth?` | [`IAuth`](../interfaces/IAuth.md) | An authentication object (e.g. JWT). |

#### Returns

`Promise`\<[`INodeInfo`](../interfaces/INodeInfo.md)\>

___

### postBlockRaw

▸ **postBlockRaw**(`block`): `Promise`\<`string`\>

Post block as raw bytes, returns the block ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Block`](Block.md) | The block. |

#### Returns

`Promise`\<`string`\>

The ID of the posted block.

___

### getBlockRaw

▸ **getBlockRaw**(`blockId`): `Promise`\<`Uint8Array`\>

Get block as raw bytes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockId` | `string` | The block ID of the requested block. |

#### Returns

`Promise`\<`Uint8Array`\>

The raw bytes of the requested block.

___

### getIncludedBlock

▸ **getIncludedBlock**(`transactionId`): `Promise`\<[`Block`](Block.md)\>

Get the included block of a given transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction. |

#### Returns

`Promise`\<[`Block`](Block.md)\>

The included block that contained the transaction.

___

### getIncludedBlockMetadata

▸ **getIncludedBlockMetadata**(`transactionId`): `Promise`\<[`IBlockMetadata`](../interfaces/IBlockMetadata.md)\>

Get the metadata of the included block of a given transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction. |

#### Returns

`Promise`\<[`IBlockMetadata`](../interfaces/IBlockMetadata.md)\>

The included block that contained the transaction.

___

### getTransactionMetadata

▸ **getTransactionMetadata**(`transactionId`): `Promise`\<[`TransactionMetadata`](../interfaces/TransactionMetadata.md)\>

Find the metadata of a transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction. |

#### Returns

`Promise`\<[`TransactionMetadata`](../interfaces/TransactionMetadata.md)\>

The transaction metadata.

___

### getCommitment

▸ **getCommitment**(`commitmentId`): `Promise`\<[`SlotCommitment`](SlotCommitment.md)\>

Look up a commitment by a given commitment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commitmentId` | `string` | Commitment ID of the commitment to look up. |

#### Returns

`Promise`\<[`SlotCommitment`](SlotCommitment.md)\>

The commitment.

___

### getUtxoChanges

▸ **getUtxoChanges**(`commitmentId`): `Promise`\<[`UtxoChangesResponse`](UtxoChangesResponse.md)\>

Get all UTXO changes of a given slot by Commitment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commitmentId` | `string` | Commitment ID of the commitment to look up. |

#### Returns

`Promise`\<[`UtxoChangesResponse`](UtxoChangesResponse.md)\>

The UTXO changes.

___

### getUtxoChangesFull

▸ **getUtxoChangesFull**(`commitmentId`): `Promise`\<[`UtxoChangesFullResponse`](UtxoChangesFullResponse.md)\>

Get all full UTXO changes of a given slot by Commitment ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commitmentId` | `string` | Commitment ID of the commitment to look up. |

#### Returns

`Promise`\<[`UtxoChangesFullResponse`](UtxoChangesFullResponse.md)\>

The UTXO changes.

___

### getCommitmentByIndex

▸ **getCommitmentByIndex**(`slot`): `Promise`\<[`SlotCommitment`](SlotCommitment.md)\>

Look up a commitment by a given commitment index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `number` | Index of the commitment to look up. |

#### Returns

`Promise`\<[`SlotCommitment`](SlotCommitment.md)\>

The commitment.

___

### getUtxoChangesByIndex

▸ **getUtxoChangesByIndex**(`slot`): `Promise`\<[`UtxoChangesResponse`](UtxoChangesResponse.md)\>

Get all UTXO changes of a given slot by commitment index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `number` | Index of the commitment to look up. |

#### Returns

`Promise`\<[`UtxoChangesResponse`](UtxoChangesResponse.md)\>

The UTXO changes.

___

### getUtxoChangesFullByIndex

▸ **getUtxoChangesFullByIndex**(`slot`): `Promise`\<[`UtxoChangesFullResponse`](UtxoChangesFullResponse.md)\>

Get all full UTXO changes of a given slot by commitment index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `slot` | `number` | Index of the commitment to look up. |

#### Returns

`Promise`\<[`UtxoChangesFullResponse`](UtxoChangesFullResponse.md)\>

The UTXO changes.

___

### hexToBech32

▸ **hexToBech32**(`hex`, `bech32Hrp?`): `Promise`\<`string`\>

Convert a hex encoded address to a Bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hexadecimal string representation of an address. |
| `bech32Hrp?` | `string` | The Bech32 HRP (human readable part) to be used. |

#### Returns

`Promise`\<`string`\>

The corresponding Bech32 address.

___

### accountIdToBech32

▸ **accountIdToBech32**(`accountId`, `bech32Hrp?`): `Promise`\<`string`\>

Transforms an account id to a bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | An account ID. |
| `bech32Hrp?` | `string` | The Bech32 HRP (human readable part) to be used. |

#### Returns

`Promise`\<`string`\>

The corresponding Bech32 address.

___

### anchorIdToBech32

▸ **anchorIdToBech32**(`anchorId`, `bech32Hrp?`): `Promise`\<`string`\>

Transforms an anchor id to a bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorId` | `string` | An anchor ID. |
| `bech32Hrp?` | `string` | The Bech32 HRP (human readable part) to be used. |

#### Returns

`Promise`\<`string`\>

The corresponding Bech32 address.

___

### nftIdToBech32

▸ **nftIdToBech32**(`nftId`, `bech32Hrp?`): `Promise`\<`string`\>

Convert an NFT ID to a Bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftId` | `string` | An NFT ID. |
| `bech32Hrp?` | `string` | The Bech32 HRP (human readable part) to be used. |

#### Returns

`Promise`\<`string`\>

The corresponding Bech32 address.

___

### hexPublicKeyToBech32Address

▸ **hexPublicKeyToBech32Address**(`hex`, `bech32Hrp?`): `Promise`\<`string`\>

Convert a hex encoded public key to a Bech32 encoded address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | The hexadecimal string representation of a public key. |
| `bech32Hrp?` | `string` | The Bech32 HRP (human readable part) to be used. |

#### Returns

`Promise`\<`string`\>

The corresponding Bech32 address.

___

### getOutputsIgnoreErrors

▸ **getOutputsIgnoreErrors**(`outputIds`): `Promise`\<[`OutputResponse`](OutputResponse.md)[]\>

Get outputs from provided output IDs (requests are sent
in parallel and errors are ignored, can be useful for spent outputs)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputIds` | `string`[] | An array of output IDs. |

#### Returns

`Promise`\<[`OutputResponse`](OutputResponse.md)[]\>

An array of corresponding output responses.

___

### findBlocks

▸ **findBlocks**(`blockIds`): `Promise`\<[`Block`](Block.md)[]\>

Find blocks by their IDs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockIds` | `string`[] | An array of `BlockId`s. |

#### Returns

`Promise`\<[`Block`](Block.md)[]\>

An array of corresponding blocks.

___

### unhealthyNodes

▸ **unhealthyNodes**(): `Promise`\<`Set`\<[`INode`](../interfaces/INode.md)\>\>

Return the unhealthy nodes.

#### Returns

`Promise`\<`Set`\<[`INode`](../interfaces/INode.md)\>\>

___

### buildBasicOutput

▸ **buildBasicOutput**(`params`): `Promise`\<[`BasicOutput`](BasicOutput.md)\>

Build a basic output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`BasicOutputBuilderParams`](../interfaces/BasicOutputBuilderParams.md) | An instance of `BasicOutputBuilderParams`. |

#### Returns

`Promise`\<[`BasicOutput`](BasicOutput.md)\>

___

### buildAccountOutput

▸ **buildAccountOutput**(`params`): `Promise`\<[`AccountOutput`](AccountOutput.md)\>

Build an account output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`AccountOutputBuilderParams`](../interfaces/AccountOutputBuilderParams.md) | An instance of `AccountOutputBuilderParams`. |

#### Returns

`Promise`\<[`AccountOutput`](AccountOutput.md)\>

___

### buildFoundryOutput

▸ **buildFoundryOutput**(`params`): `Promise`\<[`FoundryOutput`](FoundryOutput.md)\>

Build a foundry output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`FoundryOutputBuilderParams`](../interfaces/FoundryOutputBuilderParams.md) | An instance of `FoundryOutputBuilderParams`. |

#### Returns

`Promise`\<[`FoundryOutput`](FoundryOutput.md)\>

___

### buildNftOutput

▸ **buildNftOutput**(`params`): `Promise`\<[`NftOutput`](NftOutput.md)\>

Build an NFT output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`NftOutputBuilderParams`](../interfaces/NftOutputBuilderParams.md) | An instance of `NftOutputBuilderParams`. |

#### Returns

`Promise`\<[`NftOutput`](NftOutput.md)\>

___

### listenMqtt

▸ **listenMqtt**(`topics`, `callback`): `Promise`\<`void`\>

Listen to MQTT events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topics` | `string`[] | An array of MQTT topics to listen to. |
| `callback` | (`error`: `Error`, `result`: `string`) => `void` | - |

#### Returns

`Promise`\<`void`\>

___

### clearMqttListeners

▸ **clearMqttListeners**(`topics`): `Promise`\<`void`\>

Stop listening to certain MQTT events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topics` | `string`[] | An array of MQTT topics to stop listening to. |

#### Returns

`Promise`\<`void`\>

___

### computeMinimumOutputAmount

▸ **computeMinimumOutputAmount**(`output`): `Promise`\<`number`\>

Calculate the minimum required amount for an output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [`Output`](Output.md) | The output to calculate the minimum amount for. |

#### Returns

`Promise`\<`number`\>

The minimum required amount.

___

### requestFundsFromFaucet

▸ **requestFundsFromFaucet**(`url`, `address`): `Promise`\<`string`\>

Request funds from a faucet.

Example URLs: `https://faucet.testnet.shimmer.network/api/enqueue` or `http://localhost:8091/api/enqueue`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the faucet. |
| `address` | `string` | The address to send the funds to. |

#### Returns

`Promise`\<`string`\>

The faucet response.

___

### callPluginRoute

▸ **callPluginRoute**(`basePluginPath`, `method`, `endpoint`, `queryParams?`, `request?`): `Promise`\<`string`\>

Extension method which provides request methods for plugins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `basePluginPath` | `string` | The base path for the plugin eg indexer/v2/ . |
| `method` | ``"GET"`` \| ``"POST"`` | The http method. |
| `endpoint` | `string` | The path for the plugin request. |
| `queryParams?` | `string`[] | Additional query params for the request. |
| `request?` | `string` | The request object. |

#### Returns

`Promise`\<`string`\>

The response json.

___

### outputIds

▸ **outputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Fetch account/anchor/basic/delegation/NFT/foundry output IDs based on the given query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`OutputQueryParameters`](../interfaces/OutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

___

### basicOutputIds

▸ **basicOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Fetch basic output IDs based on the given query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`BasicOutputQueryParameters`](../interfaces/BasicOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

___

### accountOutputIds

▸ **accountOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Get the corresponding output IDs given a list of account query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`AccountOutputQueryParameters`](../interfaces/AccountOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

A paginated query response of corresponding output IDs.

___

### accountOutputId

▸ **accountOutputId**(`accountId`): `Promise`\<`string`\>

Get the corresponding output ID from an account ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | An account ID. |

#### Returns

`Promise`\<`string`\>

The corresponding output ID.

___

### anchorOutputIds

▸ **anchorOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Get the corresponding output IDs given a list of anchor query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`AnchorOutputQueryParameters`](../interfaces/AnchorOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

A paginated query response of corresponding output IDs.

___

### anchorOutputId

▸ **anchorOutputId**(`anchorId`): `Promise`\<`string`\>

Get the corresponding output ID from an anchor ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorId` | `string` | An anchor ID. |

#### Returns

`Promise`\<`string`\>

The corresponding output ID.

___

### delegationOutputIds

▸ **delegationOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Get the corresponding output IDs given a list of delegation query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`DelegationOutputQueryParameters`](../interfaces/DelegationOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

A paginated query response of corresponding output IDs.

___

### delegationOutputId

▸ **delegationOutputId**(`delegationId`): `Promise`\<`string`\>

Get the corresponding output ID from an delegation ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delegationId` | `string` | A delegation ID. |

#### Returns

`Promise`\<`string`\>

The corresponding output ID.

___

### foundryOutputIds

▸ **foundryOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Get the corresponding output IDs given a list of Foundry query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`FoundryOutputQueryParameters`](../interfaces/FoundryOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

A paginated query response of corresponding output IDs.

___

### foundryOutputId

▸ **foundryOutputId**(`foundryId`): `Promise`\<`string`\>

Get the corresponding output ID from a Foundry ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `foundryId` | `string` | A Foundry ID. |

#### Returns

`Promise`\<`string`\>

The corresponding output ID.

___

### nftOutputIds

▸ **nftOutputIds**(`queryParameters`): `Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

Get the corresponding output IDs given a list of NFT query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryParameters` | [`NftOutputQueryParameters`](../interfaces/NftOutputQueryParameters.md) |

#### Returns

`Promise`\<[`IOutputsResponse`](../interfaces/IOutputsResponse.md)\>

A paginated query response of corresponding output IDs.

___

### nftOutputId

▸ **nftOutputId**(`nftId`): `Promise`\<`string`\>

Get the corresponding output ID from an NFT ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftId` | `string` | An NFT ID. |

#### Returns

`Promise`\<`string`\>

The corresponding output ID.

___

### blockId

▸ **blockId**(`block`): `Promise`\<`string`\>

Compute the block ID (Blake2b256 hash of the block bytes) of a block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | [`Block`](Block.md) | A block. |

#### Returns

`Promise`\<`string`\>

The corresponding block ID.
