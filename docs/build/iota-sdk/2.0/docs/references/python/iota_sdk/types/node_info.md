---
sidebar_label: node_info
title: iota_sdk.types.node_info
---

## NodeInfoStatus Objects

```python
@json

@dataclass
class NodeInfoStatus()
```

Node status.

**Attributes**:

- `is_healthy` - Tells whether the node is healthy or not.
- `accepted_tangle_time` - A notion of time that is anchored to the latest accepted block.
- `relative_accepted_tangle_time` - The time after Accepted Tangle Time has advanced with the system clock.
- `confirmed_tangle_time` - A notion of time that is anchored to the latest confirmed block.
- `relative_confirmed_tangle_time` - The time after Confirmed Tangle Time has advanced with the system clock.
- `latest_commitment_id` - The latest slot that the node has committed to.
- `latest_finalized_slot` - The index of the latest finalized slot.
- `latest_accepted_block_slot` - The slot index of the latest accepted block.
- `latest_confirmed_block_slot` - The slot index of the latest confirmed block.
- `pruning_epoch` - The index of the epoch before which the tangle history is pruned.

## NodeInfoMetrics Objects

```python
@json

@dataclass
class NodeInfoMetrics()
```

Node metrics.

**Attributes**:

- `blocks_per_second` - The current rate of new blocks per second.
- `confirmed_blocks_per_second` - The current rate of confirmed blocks per second.
- `confirmation_rate` - The ratio of confirmed blocks to new blocks of the last confirmed slot.

## StorageScoreParameters Objects

```python
@json

@dataclass
class StorageScoreParameters()
```

Defines the parameters of storage score calculations on objects which take node resources.

**Attributes**:

- `storage_cost` - Defines the number of IOTA tokens required per unit of storage score.
- `factor_data` - Defines the factor to be used for data only fields.
- `offset_output_overhead` - Defines the offset to be applied to all outputs for the overhead of handling them in storage.
- `offset_ed25519_block_issuer_key` - Defines the offset to be used for block issuer feature public keys.
- `offset_staking_feature` - Defines the offset to be used for staking feature.
- `offset_delegation` - Defines the offset to be used for delegation output.

### as\_dict

```python
def as_dict()
```

Converts this object to a dict.

## WorkScoreParameters Objects

```python
@json

@dataclass
class WorkScoreParameters()
```

Work Score Parameters lists the work score of each type, it is used to denote the computation costs of processing an object.

**Attributes**:

- `data_byte` - Data_kibibyte accounts for the network traffic per kibibyte.
- `block` - Block accounts for work done to process a block in the node software.
- `input` - Input accounts for loading the UTXO from the database and performing the mana calculations.
- `context_input` - Context_input accounts for loading and checking the context input.
- `output` - Output accounts for storing the UTXO in the database.
- `native_token` - Native_token accounts for calculations done with native tokens.
- `staking` - Staking accounts for the existence of a staking feature in the output.
- `block_issuer` - BlockIssuer accounts for the existence of a block issuer feature in the output.
- `allotment` - Allotment accounts for accessing the account-based ledger to transform the mana to block issuance credits.
- `signature_ed25519` - SignatureEd25519 accounts for an Ed25519 signature check.

### as\_dict

```python
def as_dict()
```

Converts this object to a dict.

## CongestionControlParameters Objects

```python
@json

@dataclass
class CongestionControlParameters()
```

Congestion Control Parameters defines the parameters used to calculate the Reference Mana Cost (RMC).

**Attributes**:

- `min_reference_mana_cost` - The minimum value of the reference Mana cost.
- `increase` - The increase step size of the reference Mana cost.
- `decrease` - The decrease step size of the reference Mana cost.
- `increase_threshold` - The threshold for increasing the reference Mana cost.
- `decrease_threshold` - The threshold for decreasing the reference Mana cost.
- `scheduler_rate` - The rate at which the scheduler runs in workscore units per second.
- `max_buffer_size` - The maximum size of the buffer in the scheduler.
- `max_validation_buffer_size` - The maximum number of blocks in the validation buffer.

## VersionSignalingParameters Objects

```python
@json

@dataclass
class VersionSignalingParameters()
```

Version Signaling defines the parameters used by signaling protocol parameters upgrade.

**Attributes**:

- `window_size` - The size of the window in epochs to find which version of protocol parameters was most signaled, from current_epoch - window_size to current_epoch.
- `window_target_ratio` - The target number of supporters for a version to win in a window_size.
- `activation_offset` - The offset in epochs to activate the new version of protocol parameters.

## ManaParameters Objects

```python
@json

@dataclass
class ManaParameters()
```

ManaParameters defines the parameters used by mana calculation.

**Attributes**:

- `bits_count` - The number of bits used to represent Mana.
- `generation_rate` - The amount of potential Mana generated by 1 IOTA in 1 slot.
- `generation_rate_exponent` - The scaling of generation_rate expressed as an exponent of 2.
- `decay_factors` - A lookup table of epoch index diff to mana decay factor (slice index 0 = 1 epoch).
- `decay_factors_exponent` - The scaling of decay_factors expressed as an exponent of 2.
- `decay_factor_epochs_sum` - An integer approximation of the sum of decay over epochs.
- `decay_factor_epochs_sum_exponent` - The scaling of decay_factor_epochs_sum expressed as an exponent of 2.
- `annual_decay_factor_percentage` - Decay factor for 1 year.

## RewardsParameters Objects

```python
@json

@dataclass
class RewardsParameters()
```

Rewards Parameters defines the parameters that are used to calculate Mana rewards.

**Attributes**:

- `profit_margin_exponent` - Used for shift operation during calculation of profit margin.
- `bootstrapping_duration` - The length of the bootstrapping phase in epochs.
- `reward_to_generation_ratio` - The ratio of the final rewards rate to the generation rate of Mana.
- `initial_target_rewards_rate` - The rate of Mana rewards at the start of the bootstrapping phase.
- `final_target_rewards_rate` - The rate of Mana rewards after the bootstrapping phase.
- `pool_coefficient_exponent` - The exponent used for shifting operation during the pool rewards calculations.
- `retention_period` - The number of epochs for which rewards are retained.

## ProtocolParameters Objects

```python
@json

@dataclass
class ProtocolParameters()
```

The protocol parameters.

**Attributes**:

- `type` - Set to value 0 to denote a IOTA 2.0 protocol parameter.
- `version` - Protocol version used by the network.
- `network_name` - The Name of the network from which the networkId is derived.
- `bech32_hrp` - Tells whether the node supports mainnet or testnet addresses.
  Value `iota` indicates that the node supports mainnet addresses.
  Value `atoi` indicates that the node supports testnet addresses.
- `storage_score_parameters` - The storage score parameters used by given node/network.
- `work_score_parameters` - Work Score Parameters lists the work score of each type, it is used to denote the computation costs of processing an object.
- `token_supply` - Current supply of the base token. Plain string encoded number.
- `genesis_slot` - Defines the slot of the genesis.
- `version`0 - The genesis timestamp at which the slots start to count.
- `version`1 - The duration of a slot, in seconds.
- `version`2 - The number of slots in an epoch expressed as an exponent of 2.
- `version`3 - ManaParameters defines the parameters used by mana calculation.
- `version`4 - The unbonding period in epochs before an account can stop staking.
- `version`5 - Validation Blocks Per Slot is the number of validation blocks that each validator should issue each slot.
- `version`6 - The number of epochs worth of Mana that a node is punished with for each additional validation block it issues.
- `version`7 - Used by tip-selection to determine if a block is eligible by evaluating issuing times.
- `version`8 - Used by tip-selection to determine if a block is eligible by evaluating issuing times.
- `version`9 - Min_committable_age is the minimum age relative to the accepted tangle time slot index that a slot can be committed.
- `network_name`0 - Max_committable_age is the maximum age for a slot commitment to be included in a block relative to the slot index of the block issuing time.
- `network_name`1 - Determine the slot that should trigger a new committee selection for the next and upcoming epoch.
- `network_name`2 - Congestion Control Parameters defines the parameters used to calculate the Reference Mana Cost (RMC).
- `network_name`3 - The version signaling parameters.
- `network_name`4 - Rewards Parameters defines the parameters that are used to calculate Mana rewards.
- `network_name`5 - Defines the target size of the committee. If there&#x27;s fewer candidates the actual committee size could be smaller in a given epoch.
- `network_name`6 - Defines the number of heavier slots that a chain needs to be ahead of the current chain to be considered for switching.

## NodeInfoBaseToken Objects

```python
@json

@dataclass
class NodeInfoBaseToken()
```

The base coin info.

**Attributes**:

- `name` - The name of the base token of the network.
- `ticker_symbol` - Ticker symbol of the token to be displayed on trading platforms.
- `unit` - The primary unit of the token.
- `subunit` - The name of the smallest possible denomination of the primary unit. subunit * 10^decimals = unit.
- `decimals` - Number of decimals the primary unit is divisible up to.

