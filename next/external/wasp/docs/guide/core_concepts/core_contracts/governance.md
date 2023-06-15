---
description: 'The `governance` contract defines the set of identities that constitute the state controller, access nodes,
who is the chain owner, and the fees for request execution.'
image: /img/logo/WASP_logo_dark.png
keywords:

- core contracts
- governance
- state controller
- identities
- chain owner
- rotate
- remove
- claim
- add
- chain info
- fee info
- reference

--- 

# The `governance` Contract

The `governance` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts
chain.

The `governance` contract provides the following functionalities:

- It defines the identity set that constitutes the state controller (the entity that owns the state output via the chain
  Alias Address). It is possible to add/remove addresses from the state controller (thus rotating the committee of
  validators).
- It defines the chain owner (the L1 entity that owns the chain - initially whoever deployed it). The chain owner can
  collect special fees and customize some chain-specific parameters.
- It defines the entities allowed to have an access node.
- It defines the fee policy for the chain (gas price, what token is used to pay for gas, and the validator fee share).

---

## Fee Policy

The Fee Policy looks like the following:

```go
{
  TokenID []byte // id of the token used to pay for gas (nil if the base token should be used (iota/shimmer)) 
  
  GasPerToken uint64 // how many gas units are paid for each token
  
  ValidatorFeeShare uint8 // percentage of the fees that are credited to the validators (0 - 100)
}
```

---

## Entry Points

### `rotateStateController(S StateControllerAddress)`

Called when the committee is about to be rotated to the new address `S`.

If it succeeds, the next state transition will become a governance transition, thus updating the state controller in the
chain's Alias Output. If it fails, nothing happens.

It can only be invoked by the chain owner.

#### Parameters

- `S` ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)): The address of the next
  state controller. Must be an
  [allowed](#addallowedstatecontrolleraddresss-statecontrolleraddress) state controller address.

### `addAllowedStateControllerAddress(S StateControllerAddress)`

Adds the address `S` to the list of identities that constitute the state controller.

It can only be invoked by the chain owner.

#### Parameters

- `S` ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)): The address to add to the
  set of allowed state controllers.

### `removeAllowedStateControllerAddress(S StateControllerAddress)`

Removes the address `S` from the list of identities that constitute the state controller.

It can only be invoked by the chain owner.

#### Parameters

- `S` ([`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)): The address to remove from
  the set of allowed state controllers.

### `delegateChainOwnership(o AgentID)`

Sets the Agent ID `o` as the new owner for the chain. This change will only be effective
once [`claimChainOwnership`](#claimchainownership) is called by `o`.

It can only be invoked by the chain owner.

#### Parameters

- `o` (`AgentID`): The Agent ID of the next chain owner.

### `claimChainOwnership()`

Claims the ownership of the chain if the caller matches the identity set
in [`delegateChainOwnership`](#delegatechainownershipo-agentid).

### `setChainInfo(mb MaxBlobSize, me MaxEventSize, mr MaxEventsPerRequest)`

Allows some chain parameters to be set by the chain owner.

Parameters:

- `mb` (optional `uint32` - default: don't change): Maximum [blob](blob.md) size.
- `me` (optional `uint16` - default: don't change): Maximum [event](blocklog.md) size.
- `mr` (optional `uint16` - default: don't change): Maximum amount of [events](blocklog.md) per request.

It can only be invoked by the chain owner.

### `setFeePolicy(g FeePolicy)`

Sets the fee policy for the chain.

#### Parameters

- `g`: ([`FeePolicy`](#feepolicy)).

It can only be invoked by the chain owner.

### `addCandidateNode(ip PubKey, ic Certificate, ia API, i ForCommittee)`

Adds a node to the list of candidates.

#### Parameters

- `ip` (`[]byte`): The public key of the node to be added.
- `ic` (`[]byte`): The certificate is a signed binary containing both the node public key and their L1 address.
- `ia` (`string`): The API base URL for the node.
- `i` (optional `bool` - default: `false`): Whether the candidate node is being added to be part of the committee or
  just an access node.

It can only be invoked by the access node owner (verified via the Certificate field).

### `revokeAccessNode(ip PubKey, ic Certificate, ia API, i ForCommittee)`

Removes a node from the list of candidates.

#### Parameters

- `ip` (`[]byte`): The public key of the node to be removed.
- `ic` (`[]byte`): The certificate of the node to be removed.

It can only be invoked by the access node owner (verified via the Certificate field).

### `changeAccessNodes(n actions)`

Iterates through the given map of actions and applies them.

#### Parameters

- `n` ([`Map`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go) of `public key` => `byte`):
  The list of actions to perform. Each byte value can be one of the following:
    - `0`: Remove the access node from the access nodes list.
    - `1`: Accept a candidate node and add it to the list of access nodes.
    - `2`: Drop an access node from the access node and candidate lists.

It can only be invoked by the chain owner.

### `startMaintenance()`

Starts the chain maintenance mode, meaning no further requests will be processed except calls to the governance
contract.

It can only be invoked by the chain owner.

### `stopMaintenance()`

Stops the maintenance mode.

It can only be invoked by the chain owner.

### `setEVMGasRatio`

Changes the ISC : EVM gas ratio.

#### Parameters

- `e` ([`GasRatio`](#evm-gas-ratio)): The ISC : EVM gas ratio.

---

## Views

### `getAllowedStateControllerAddresses()`

Returns the list of allowed state controllers.

#### Returns

- `a` ([`Array16`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go)
  of [`iotago::Address`](https://github.com/iotaledger/iota.go/blob/develop/address.go)): The list of allowed state
  controllers.

### `getChainOwner()`

Returns the AgentID of the chain owner.

#### Returns

- `o` (`AgentID`): The chain owner.

### `getChainInfo()`

#### Returns:

- `c` (`ChainID`): The chain ID
- `o` (`AgentID`): The chain owner
- `d` (`string`): The chain description
- `g` ([`FeePolicy`](#feepolicy)): The gas fee policy
- `mb` (`uint32`): Maximum [blob](blob.md) size
- `me` (`uint16`): Maximum [event](blocklog.md) size
- `mr` (`uint16`): Maximum amount of [events](blocklog.md) per request

### `getFeePolicy()`

Returns the gas fee policy.

#### Returns

- `g` ([`FeePolicy`](#feepolicy)): The gas fee policy.

### `getEVMGasRatio`

Returns the ISC : EVM gas ratio.

#### Returns

- `e` ([`GasRatio`](#evm-gas-ratio)): The ISC : EVM gas ratio.

### `getChainNodes()`

Returns the current access nodes and candidates.

#### Returns

- `ac` ([`Map`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go) of public key => empty
  value): The access nodes.
- `an` ([`Map`](https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go) of public key
  => [`AccessNodeInfo`](#accessnodeinfo)): The candidate nodes.

### `getMaintenanceStatus()`

Returns whether the chain is ongoing maintenance.

- `m` (`bool`): `true` if the chain is in maintenance mode

## Schemas


### `EVM gas ratio`

ISC : EVM gas ratio is expressed as an `a : b` ratio, where `<ISC gas> = <EVM gas> * <a> / <b>`.

`GasRatio` is encoded as the concatenation of the two `uint32` values `a` & `b`.


### `FeePolicy`

`FeePolicy` is encoded as the concatenation of:

- The [`TokenID`](accounts.md#tokenid) of the token used to charge for gas. (`iotago.NativeTokenID`)
  - If this value is `nil`, the gas fee token is the base token.
- Gas per token, i.e. how many units of gas a token pays for. (`uint64`)
- Validator fee share. Must be between 0 and 100, meaning the percentage of the gas fees distributed to the
  validators. (`uint8`)
- The [EVM gas ratio](#evm-gas-ratio)

### `AccessNodeInfo`

`AccessNodeInfo` is encoded as the concatenation of:

- The validator address. (`[]byte` prefixed by `uint16` size)
- The certificate. (`[]byte` prefixed by `uint16` size)
- Whether the access node is part of the committee of validators. (`bool`)
- The API base URL. (`string` prefixed by `uint16` size)

