---
description: 'The root contract is the first smart contract deployed on the chain. It functions as a smart contract
factory for the chain.'
image: /img/logo/WASP_logo_dark.png
keywords:

- smart contracts
- core
- root
- initialization
- entry points
- fees
- ownership
- views
- reference

---

# The `root` Contract

The `root` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts
chain.

The `root` contract is responsible for the initialization of the chain.
It is the first smart contract deployed on the chain and, upon receiving the `init` request, bootstraps the state of the
chain.
Deploying all of the other core contracts is a part of the state initialization.

The `root` contract also functions as a smart contract factory for the chain: upon request, it deploys other smart
contracts and maintains an on-chain registry of smart contracts in its state.
The contract registry keeps a list of contract records containing their respective name, hname, description, and
creator.

---

## Entry Points

### `init()`

The constructor. Automatically called immediately after confirmation of the origin transaction and never called again.
When executed, this function:

- Initializes base values of the chain according to parameters.
- Sets the caller as the _chain owner_.
- Deploys all the core contracts.

### `deployContract(ph ProgramHash, ds Description, nm Name)`

Deploys a non-EVM smart contract on the chain if the caller has deploy permission.

#### Parameters

- `ph` (`[32]byte`): The hash of the binary _blob_ (that has been previously stored in the [`blob` contract](blob.md)).
- `ds` (`string`): Description of the contract to be deployed.
- `nm` (`string`): The name of the contract to be deployed, used to calculate the
  contract's _hname_. The name must be unique among all contract names in the
  chain.

### `grantDeployPermission(dp AgentID)`

The chain owner grants deploy permission to the agent ID `dp`.

#### Parameters

`dp`(AgentID): The agent ID.

### `revokeDeployPermission(dp AgentID)`

The chain owner revokes the deploy permission of the agent ID `dp`.

#### Parameters

`dp`(AgentID): The agent ID.

### `requireDeployPermissions(de DeployPermissionsEnabled)`

#### Parameters

- `de` (`bool`): Whether permissions should be required to deploy a contract on the chain.

By default, permissions are enabled (addresses need to be granted the right to deploy), but the chain owner can override
this setting to allow anyone to deploy contracts on the chain.

---

## Views

### `findContract(hn Hname)`

Returns the record for a given smart contract with Hname `hn` (if it exists).

#### Parameters

`hn`: The smart contract’s Hname

#### Returns

- `cf` (`bool`): Whether or not the contract exists.
- `dt` ([`ContractRecord`](#contractrecord)): The requested contract record (if it exists).

### `getContractRecords()`

Returns the list of all smart contracts deployed on the chain and related records.

#### Returns

A map of `Hname` => [`ContractRecord`](#contractrecord)

---

## Schemas

### `ContractRecord`

A `ContractRecord` is encoded as the concatenation of:

- Program hash (`[32]byte`).
- Contract description (`string`).
- Contract name (`string`).



