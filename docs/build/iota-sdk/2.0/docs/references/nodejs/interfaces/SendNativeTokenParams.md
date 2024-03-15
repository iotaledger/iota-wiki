# Interface: SendNativeTokenParams

Address with native token

## Table of contents

### Properties

- [address](SendNativeTokenParams.md#address)
- [nativeToken](SendNativeTokenParams.md#nativetoken)
- [returnAddress](SendNativeTokenParams.md#returnaddress)
- [expiration](SendNativeTokenParams.md#expiration)

## Properties

### address

• **address**: `string`

The Bech32 address.

___

### nativeToken

• **nativeToken**: [`string`, `bigint`]

The Native Token to send.

___

### returnAddress

• `Optional` **returnAddress**: `string`

Bech32 encoded address, to which the storage deposit will be returned.
Default will use the address of the wallet.

___

### expiration

• `Optional` **expiration**: `number`

Expiration in seconds, after which the output will be available for the sender again, if not spent by the
receiver before. Default is 1 day.
