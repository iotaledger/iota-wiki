---
sidebar_label: responses
title: iota_sdk.client.responses
---

## OutputIdsResponse Objects

```python
@json

@dataclass
class OutputIdsResponse()
```

Response type for output IDs.

**Attributes**:

- `committed_slot` - The committed slot at which these outputs were available at.
- `page_size` - The maximum amount of items returned in one call. If there are more items, a cursor to the next page is returned too.
- `cursor` - The cursor to the next page of results.
- `items` - The query results.

## CommitteeMember Objects

```python
@json

@dataclass
class CommitteeMember()
```

Information of a committee member.

**Attributes**:

- `address` - Account address of the validator.
- `pool_stake` - The total stake of the pool, including delegators.
- `validator_stake` - The stake of a validator.
- `fixed_cost` - The fixed cost of the validator, which it receives as part of its Mana rewards.

## CommitteeResponse Objects

```python
@json

@dataclass
class CommitteeResponse()
```

The validator information of the committee.
Response of GET /api/core/v3/committee

**Attributes**:

- `committee` - The validators of the committee.
- `total_stake` - The total amount of delegated and staked IOTA coins in the selected committee.
- `total_validator_stake` - The total amount of staked IOTA coins in the selected committee.
- `epoch` - The epoch index of the committee.

## ValidatorResponse Objects

```python
@json

@dataclass
class ValidatorResponse()
```

Information of a validator.
Response of GET /api/core/v3/validators/{bech32Address}

**Attributes**:

- `address` - Account address of the validator.
- `staking_end_epoch` - The epoch index until which the validator registered to stake.
- `pool_stake` - The total stake of the pool, including delegators.
- `validator_stake` - The stake of a validator.
- `fixed_cost` - The fixed cost of the validator, which it receives as part of its Mana rewards.
- `active` - Shows whether the validator was active recently.
- `latest_supported_protocol_version` - The latest protocol version the validator supported.
- `latest_supported_protocol_hash` - The protocol hash of the latest supported protocol of the validator.

## ValidatorsResponse Objects

```python
@json

@dataclass
class ValidatorsResponse()
```

A paginated list of all registered validators ready for the next epoch and indicates if they were active recently
(are eligible for committee selection).
Response of GET /api/core/v3/validators

**Attributes**:

- `validators` - List of registered validators ready for the next epoch.
- `page_size` - The number of validators returned per one API request with pagination.
- `cursor` - The cursor that needs to be provided as cursor query parameter to request the next page. If empty, this was the last page.

## IssuanceBlockHeaderResponse Objects

```python
@json

@dataclass
class IssuanceBlockHeaderResponse()
```

Information that is used to attach a block in the network.
Response of GET /api/core/v3/blocks/issuance

**Attributes**:

- `strong_parents` - Blocks that are strongly directly approved.
- `latest_parent_block_issuing_time` - Latest issuing time of the returned parents.
- `latest_finalized_slot` - The slot index of the latest finalized slot.
- `latest_commitment` - The latest slot commitment.
- `weak_parents` - Blocks that are weakly directly approved.
- `shallow_like_parents` - Blocks that are directly referenced to adjust opinion.

## CongestionResponse Objects

```python
@json

@dataclass
class CongestionResponse()
```

Provides the cost and readiness to issue estimates.
Response of GET /api/core/v3/accounts/{accountId}/congestion.

**Attributes**:

- `slot` - Slot for which the estimate is provided.
- `ready` - Indicates if a node is ready to schedule a block issued by the specified account, or if the issuer should wait.
- `reference_mana_cost` - Mana cost a user needs to burn to issue a block in the slot.
- `block_issuance_credits` - BIC of the account in the slot. This balance needs to be non-negative, otherwise account is locked.

## ManaRewardsResponse Objects

```python
@json

@dataclass
class ManaRewardsResponse()
```

The mana rewards of an account or delegation output.
Response of GET /api/core/v3/rewards/{outputId}.

**Attributes**:

- `start_epoch` - First epoch for which rewards can be claimed. This value is useful for checking if rewards have expired (by comparing against the staking or delegation start) or would expire soon (by checking its relation to the rewards retention period).
- `end_epoch` - Last epoch for which rewards can be claimed.
- `rewards` - Amount of totally available decayed rewards the requested output may claim.
- `latest_committed_epoch_pool_rewards` - Rewards of the latest committed epoch of the staking pool to which this validator or delegator belongs. The ratio of this value and the maximally possible rewards for the latest committed epoch can be used to determine how well the validator of this staking pool performed in that epoch. Note that if the pool was not part of the committee in the latest committed epoch, this value is 0.

## ProtocolParametersResponse Objects

```python
@json

@dataclass
class ProtocolParametersResponse()
```

Protocol Parameters with start epoch.

**Attributes**:

- `start_epoch` - The start epoch of the set of protocol parameters.
- `parameters` - The protocol parameters.

## InfoResponse Objects

```python
@json

@dataclass
class InfoResponse()
```

General information about the node.
GET /api/core/v3/info.

**Attributes**:

- `name` - The name of the node (e.g. Hornet).
- `version` - The semantic version of the node.
- `status` - The status of the node.
- `metrics` - Node metrics.
- `protocol_parameters` - Supported protocol versions by the node.
- `base_token` - Gives info about the base token the network uses.

## NodeInfoWrapper Objects

```python
@json

@dataclass
class NodeInfoWrapper()
```

General information about the node and its URL.
GET /api/core/v3/info.

**Attributes**:

- `node_info` - A NodeInfo object.
- `url` - The URL of the node.

## RoutesResponse Objects

```python
@json

@dataclass
class RoutesResponse()
```

API route groups of the node.
GET /api/routes.

**Attributes**:

- `routes` - The available API route groups of the node.

## OutputResponse Objects

```python
@json

@dataclass
class OutputResponse()
```

An output with its output id proof.
Response of GET /api/core/v3/outputs/{output_id}.

**Attributes**:

- `output` - One of the possible outputs.
- `output_id_proof` - The associated Output ID proof.

## OutputWithMetadataResponse Objects

```python
@json

@dataclass
class OutputWithMetadataResponse()
```

An output with its output id proof and its metadata.
Response of GET /api/core/v3/outputs/{output_id}/full.

**Attributes**:

- `output` - One of the possible outputs.
- `output_id_proof` - The associated Output ID proof.
- `metadata` - The metadata of an output.

## TransactionMetadataResponse Objects

```python
@json

@dataclass
class TransactionMetadataResponse()
```

Response of a GET transaction metadata REST API call.

**Attributes**:

- `transaction_id` - The identifier of the transaction. Hex-encoded with 0x prefix.
- `transaction_state` - If &#x27;pending&#x27;, the transaction is not included yet. If &#x27;accepted&#x27;, the transaction is included. If &#x27;confirmed&#x27; means transaction is included and its included block is confirmed. If &#x27;finalized&#x27; means transaction is included, its included block is finalized and cannot be reverted anymore. If &#x27;failed&#x27; means transaction is issued but failed due to the transaction failure reason.
- `transaction_failure_reason` - The optional transaction failure reason.

## UtxoChangesResponse Objects

```python
@json

@dataclass
class UtxoChangesResponse()
```

All UTXO changes that happened at a specific slot.
Response of
- GET /api/core/v3/commitments/{commitmentId}/utxo-changes
- GET /api/core/v3/commitments/by-slot/{slot}/utxo-changes

**Arguments**:

- `commitment_id` - The commitment ID of the requested slot that contains the changes. Hex-encoded with 0x prefix.
- `created_outputs` - The created outputs of the given slot.
- `consumed_outputs` - The consumed outputs of the given slot.

## UtxoChangesFullResponse Objects

```python
@json

@dataclass
class UtxoChangesFullResponse()
```

All full UTXO changes that happened at a specific slot.
Response of
- GET /api/core/v3/commitments/{commitmentId}/utxo-changes/full
- GET /api/core/v3/commitments/by-slot/{slot}/utxo-changes/full

**Arguments**:

- `commitment_id` - The commitment ID of the requested slot that contains the changes. Hex-encoded with 0x prefix.
- `created_outputs` - The created outputs of the given slot.
- `consumed_outputs` - The consumed outputs of the given slot.

## BlockMetadataResponse Objects

```python
@json

@dataclass
class BlockMetadataResponse()
```

The metadata of a block.
Response of GET /api/core/v3/blocks/{blockId}/metadata.

**Attributes**:

- `block_id` - The identifier of the block. Hex-encoded with 0x prefix.
- `block_state` - If pending, the block is stored but not confirmed. If confirmed, the block is confirmed with the first level of knowledge. If finalized, the block is included and cannot be reverted anymore. If rejected, the block is rejected by the node, and user should reissue payload if it contains one. If failed, the block is not successfully issued due to failure reason.
- `block_failure_reason` - The optional block failure reason.
- `transaction_metadata` - The optional metadata of a given transaction.

## BlockWithMetadataResponse Objects

```python
@json

@dataclass
class BlockWithMetadataResponse()
```

A block with its metadata.
Response of GET /api/core/v3/blocks/{blockId}/full.

**Attributes**:

- `block` - The block.
- `metadata` - The block metadata.

