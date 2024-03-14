# Interface: SendParams

Address with a base token amount

## Table of contents

### Properties

- [address](SendParams.md#address)
- [amount](SendParams.md#amount)
- [returnAddress](SendParams.md#returnaddress)
- [expiration](SendParams.md#expiration)

## Properties

### address

• **address**: `string`

The Bech32 address to send the amount to.

___

### amount

• **amount**: `string` \| `bigint`

The amount to send.

___

### returnAddress

• `Optional` **returnAddress**: `string`

Bech32 encoded address, to which the storage deposit will be returned if one is necessary
given the provided amount. If a storage deposit is needed and a return address is not provided, it will
default to the address of the wallet.

___

### expiration

• `Optional` **expiration**: `number`

Expiration in seconds, after which the output will be available for the sender again, if not spent by the
receiver already. The expiration will only be used if one is necessary given the provided amount. If an
expiration is needed but not provided, it will default to one day.
