---
sidebar_label: _node_indexer_api
title: iota_sdk.client._node_indexer_api
---

## NodeIndexerAPI Objects

```python
class NodeIndexerAPI(metaclass=ABCMeta)
```

Node indexer API.

## CommonQueryParameters Objects

```python
@json

@dataclass
class CommonQueryParameters()
```

Common Query parameters

**Attributes:**

page_size:
The maximum amount of items returned in one call. If there are more items, a cursor to the next page is
returned too. The parameter is ignored when pageSize is defined via the cursor parameter.
cursor:
Starts the search from the cursor (createdSlotIndex+outputId.pageSize).
If an empty string is provided, only the first page is returned.
created_before:
Returns outputs that were created before a certain slot index.
created_after:
Returns outputs that were created after a certain slot index.

## OutputQueryParameters Objects

```python
@json

@dataclass
class OutputQueryParameters(CommonQueryParameters)
```

Output Query parameters

**Attributes:**

has_native_token:
Filters outputs based on the presence of a native token.
native_token:
Filters outputs based on the presence of a specific native token.
unlockable_by_address:
Returns outputs that are unlockable by the bech32 address.

## BasicOutputQueryParameters Objects

```python
@json

@dataclass
class BasicOutputQueryParameters(CommonQueryParameters)
```

Basic Output Query parameters

**Attributes: **
has_native_token:
Filters outputs based on the presence of a native token.
native_token:
Filters outputs based on the presence of a specific native token.
unlockable_by_address:
Returns outputs that are unlockable by the bech32 address.
address:
Bech32-encoded address that should be searched for.
has_storage_deposit_return:
Filters outputs based on the presence of storage deposit return unlock condition.
storage_deposit_return_address:
Filters outputs based on the presence of a specific return address in the storage deposit return unlock condition.
has_expiration:
Filters outputs based on the presence of expiration unlock condition.
expiration_return_address:
Filters outputs based on the presence of a specific Bech32-encoded return address in the expiration unlock condition.
expires_before:
Returns outputs that expire before a certain slot index.
expires_after:
Returns outputs that expire after a certain slot index.
has_timelock:
Filters outputs based on the presence of timelock unlock condition.
timelocked_before:
Returns outputs that are timelocked before a certain slot index.
timelocked_after:
Returns outputs that are timelocked after a certain slot index.
sender:
Filters outputs based on the presence of validated Sender (bech32 encoded).
tag:
Filters outputs based on matching Tag Block.

## AccountOutputQueryParameters Objects

```python
@json

@dataclass
class AccountOutputQueryParameters(CommonQueryParameters)
```

Account Output Query parameters

**Attributes: **
address:
Bech32-encoded address that should be searched for.
issuer:
Filters outputs based on bech32-encoded issuer address.
sender:
Filters outputs based on the presence of validated Sender (bech32 encoded).

## AnchorOutputQueryParameters Objects

```python
@json

@dataclass
class AnchorOutputQueryParameters(CommonQueryParameters)
```

Anchor Output Query parameters

**Attributes: **
unlockable_by_address:
Returns outputs that are unlockable by the bech32 address.
state_controller:
Filters outputs based on bech32-encoded state controller address.
governor:
Filters outputs based on bech32-encoded governor (governance controller) address.
issuer:
Filters outputs based on bech32-encoded issuer address.
sender:
Filters outputs based on the presence of validated Sender (bech32 encoded).

## DelegationOutputQueryParameters Objects

```python
@json

@dataclass
class DelegationOutputQueryParameters(CommonQueryParameters)
```

Delegation Output Query parameters

**Attributes: **
address:
Bech32-encoded address that should be searched for.
validator:
Filter foundry outputs based on bech32-encoded address of the validator.

## FoundryOutputQueryParameters Objects

```python
@json

@dataclass
class FoundryOutputQueryParameters(CommonQueryParameters)
```

Foundry Output Query parameters

**Attributes: **
has_native_token:
Filters outputs based on the presence of a native token.
native_token:
Filters outputs based on the presence of a specific native token.
account:
Filter foundry outputs based on bech32-encoded address of the controlling account.

## NftOutputQueryParameters Objects

```python
@json

@dataclass
class NftOutputQueryParameters(CommonQueryParameters)
```

NFT Output Query parameters

**Attributes: **
unlockable_by_address:
Returns outputs that are unlockable by the bech32 address.
address:
Bech32-encoded address that should be searched for.
has_storage_deposit_return:
Filters outputs based on the presence of storage deposit return unlock condition.
storage_deposit_return_address:
Filters outputs based on the presence of a specific return address in the storage deposit return unlock condition.
has_expiration:
Filters outputs based on the presence of expiration unlock condition.
expiration_return_address:
Filters outputs based on the presence of a specific Bech32-encoded return address in the expiration unlock condition.
expires_before:
Returns outputs that expire before a certain slot index.
expires_after:
Returns outputs that expire after a certain slot index.
has_timelock:
Filters outputs based on the presence of timelock unlock condition.
timelocked_before:
Returns outputs that are timelocked before a certain slot index.
timelocked_after:
Returns outputs that are timelocked after a certain slot index.
issuer:
Filters outputs based on bech32-encoded issuer address.
sender:
Filters outputs based on the presence of validated Sender (bech32 encoded).
tag:
Filters outputs based on matching Tag Block.

### output\_ids

```python
def output_ids(query_parameters: OutputQueryParameters) -> OutputIdsResponse
```

Fetch account/anchor/basic/delegation/NFT/foundry output IDs from the given query parameters.
Supported query parameters are: &quot;hasNativeTokens&quot;, &quot;minNativeTokenCount&quot;, &quot;maxNativeTokenCount&quot;, &quot;unlockableByAddress&quot;, &quot;createdBefore&quot;, &quot;createdAfter&quot;, &quot;cursor&quot;, &quot;pageSize&quot;.

**Returns**:

  The corresponding output IDs of the outputs.

### basic\_output\_ids

```python
def basic_output_ids(
        query_parameters: BasicOutputQueryParameters) -> OutputIdsResponse
```

Fetch basic output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the basic outputs.

### account\_output\_ids

```python
def account_output_ids(
        query_parameters: AccountOutputQueryParameters) -> OutputIdsResponse
```

Fetch account output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the account outputs.

### account\_output\_id

```python
def account_output_id(account_id: HexStr) -> OutputId
```

Fetch account output ID from the given account ID.

**Returns**:

  The output ID of the account output.

### anchor\_output\_ids

```python
def anchor_output_ids(
        query_parameters: AnchorOutputQueryParameters) -> OutputIdsResponse
```

Fetch anchor output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the anchor outputs.

### anchor\_output\_id

```python
def anchor_output_id(anchor_id: HexStr) -> OutputId
```

Fetch anchor output ID from the given anchor ID.

**Returns**:

  The output ID of the anchor output.

### delegation\_output\_ids

```python
def delegation_output_ids(
        query_parameters: DelegationOutputQueryParameters
) -> OutputIdsResponse
```

Fetch delegation output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the delegation outputs.

### delegation\_output\_id

```python
def delegation_output_id(delegation_id: HexStr) -> OutputId
```

Fetch delegation output ID from the given delegation ID.

**Returns**:

  The output ID of the delegation output.

### foundry\_output\_ids

```python
def foundry_output_ids(
        query_parameters: FoundryOutputQueryParameters) -> OutputIdsResponse
```

Fetch foundry Output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the foundry outputs.

### foundry\_output\_id

```python
def foundry_output_id(foundry_id: HexStr) -> OutputId
```

Fetch foundry Output ID from the given foundry ID.

**Returns**:

  The output ID of the foundry output.

### nft\_output\_ids

```python
def nft_output_ids(
        query_parameters: NftOutputQueryParameters) -> OutputIdsResponse
```

Fetch NFT output IDs from the given query parameters.

**Returns**:

  The corresponding output IDs of the NFT outputs.

### nft\_output\_id

```python
def nft_output_id(nft_id: HexStr) -> OutputId
```

Fetch NFT output ID from the given NFT ID.

**Returns**:

  The output ID of the NFT output.

