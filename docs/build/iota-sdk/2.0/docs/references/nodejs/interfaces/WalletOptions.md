# Interface: WalletOptions

Options for the Wallet builder.

## Table of contents

### Properties

- [address](WalletOptions.md#address)
- [alias](WalletOptions.md#alias)
- [bipPath](WalletOptions.md#bippath)
- [clientOptions](WalletOptions.md#clientoptions)
- [secretManager](WalletOptions.md#secretmanager)
- [storagePath](WalletOptions.md#storagepath)

## Properties

### address

• `Optional` **address**: `string`

The wallet address.

___

### alias

• `Optional` **alias**: `string`

The alias of the wallet.

___

### bipPath

• `Optional` **bipPath**: [`Bip44`](Bip44.md)

The the BIP44 path of the wallet.

___

### clientOptions

• `Optional` **clientOptions**: [`IClientOptions`](IClientOptions.md)

The node client options.

___

### secretManager

• `Optional` **secretManager**: [`SecretManagerType`](../api_ref.md#secretmanagertype)

The secret manager to use.

___

### storagePath

• `Optional` **storagePath**: `string`

The path to the wallet database.
