---
sidebar_label: balance
title: iota_sdk.types.balance
---

## BaseCoinBalance Objects

```python
@json

@dataclass
class BaseCoinBalance()
```

Base coin fields for Balance.

**Attributes**:

- `total` - The total balance.
- `available` - The available amount of the total balance.
  # voting_power: The voting power of the wallet.

## ManaBalance Objects

```python
@json

@dataclass
class ManaBalance()
```

Mana fields for Balance.

**Attributes**:

- `total` - The total balance.
- `available` - The available amount of the total balance.
- `rewards` - Mana rewards of account and delegation outputs.

## RequiredStorageDeposit Objects

```python
@json

@dataclass
class RequiredStorageDeposit()
```

Required storage deposit for the outputs in the wallet.

**Attributes**:

- `basic` - The required amount for basic outputs.
- `account` - The required amount for account outputs.
- `foundry` - The required amount for foundry outputs.
- `nft` - The required amount for nft outputs.
- `delegation` - The required amount for delegation outputs.

## NativeTokensBalance Objects

```python
@json

@dataclass
class NativeTokensBalance()
```

Native tokens fields for Balance.

**Attributes**:

- `token_id` - The native token id.
- `total` - The total native token balance.
- `available` - The available amount of the total native token balance.
- `metadata` - Some metadata of the native token.

## Balance Objects

```python
@json

@dataclass
class Balance()
```

The balance of an account.

**Attributes**:

- `base_coin` - The base coin balance.
- `mana` - Total and available mana.
- `required_storage_deposit` - The required storage deposit.
- `native_tokens` - The balances of all native tokens.
- `accounts` - All owned accounts.
- `foundries` - All owned foundries.
- `nfts` - All owned NFTs.
- `delegations` - All owned delegation outputs.
- `potentially_locked_outputs` - A list of potentially locked outputs.

