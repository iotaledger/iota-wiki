---
sidebar_label: send_params
title: iota_sdk.types.send_params
---

## SendParams Objects

```python
@json

@dataclass
class SendParams()
```

Parameters for sending base coins.

**Attributes**:

- `address` - The address to send to.
- `amount` - The amount to send.
- `return_address` - The address to return the funds to if not claimed.
- `expiration` - Expiration in seconds, after which the output will be available for the sender again, if not spent by the
  receiver already. The expiration will only be used if one is necessary given the provided amount. If an
  expiration is needed but not provided, it will default to one day.

## SendNativeTokenParams Objects

```python
@json

@dataclass
class SendNativeTokenParams()
```

Parameters for sending a native token

**Attributes**:

- `address` - The address to send to.
- `native_token` - The native token to send.
- `return_address` - The address to return the native token to if not claimed.
- `expiration` - The expiration timestamp until the native token can be claimed.

## SendNftParams Objects

```python
@json

@dataclass
class SendNftParams()
```

Parameters for sending NFTs.

**Attributes**:

- `address` - The address to send the NFT to.
- `nft_id` - The ID of the NFT to send.

## CreateNativeTokenParams Objects

```python
@json

@dataclass
class CreateNativeTokenParams()
```

Parameters for creating native tokens.

**Attributes**:

- `circulating_supply` - The circulating supply of the native token.
- `maximum_supply` - The maximum supply of the native token.
- `foundry_metadata` - The foundry metadata of the native token.
- `account_id` - The ID of the corresponding account.

## CreateDelegationParams Objects

```python
@json

@dataclass
class CreateDelegationParams()
```

Parameters for creating a delegation output.

**Attributes**:

- `delegated_amount` - The amount to delegate.
- `validator_address` - The Account Address of the validator to which this output will delegate.
- `address` - Bech32 encoded address which will control the delegation. By default, the ed25519 wallet address will be used.

## BeginStakingParams Objects

```python
@json

@dataclass
class BeginStakingParams()
```

Parameters for beginning staking.

**Attributes**:

- `account_id` - The account id which will become a validator.
- `staked_amount` - The amount of tokens to stake.
- `fixed_cost` - The fixed cost of the validator, which it receives as part of its Mana rewards.
- `staking_period` - The staking period (in epochs). Will default to the staking unbonding period.

## MintNftParams Objects

```python
@json

@dataclass
class MintNftParams()
```

Parameters for minting NFTs.

**Attributes**:

- `address` - A Bech32 encoded address to which the NFT will be minted. Default will use the address of the wallet.
- `sender` - An NFT sender feature.
- `metadata` - An NFT metadata feature.
- `tag` - An NFT tag feature.
- `issuer` - An NFT issuer feature.
- `immutable_metadata` - An NFT immutable metadata feature.

## CreateAccountOutputParams Objects

```python
@json

@dataclass
class CreateAccountOutputParams()
```

Parameters for creating accounts.

**Attributes**:

- `address` - A Bech32 encoded address which will control the account. Default will use the address of the wallet.
- `immutable_metadata` - Immutable account metadata.
- `metadata` - Account metadata.

