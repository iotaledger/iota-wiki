# Interface: LedgerNanoStatus

The status of a Ledger Nano

## Table of contents

### Properties

- [connected](LedgerNanoStatus.md#connected)
- [locked](LedgerNanoStatus.md#locked)
- [blindSigningEnabled](LedgerNanoStatus.md#blindsigningenabled)
- [app](LedgerNanoStatus.md#app)
- [device](LedgerNanoStatus.md#device)
- [bufferSize](LedgerNanoStatus.md#buffersize)

## Properties

### connected

• **connected**: `boolean`

Ledger is available and ready to be used.

___

### locked

• `Optional` **locked**: `boolean`

Ledger is connected and locked, true/false for IOTA/Shimmer, undefined for the rest.

___

### blindSigningEnabled

• **blindSigningEnabled**: `boolean`

Ledger blind signing enabled

___

### app

• `Optional` **app**: [`LedgerApp`](LedgerApp.md)

Ledger opened app.

___

### device

• `Optional` **device**: [`LedgerDeviceType`](../enums/LedgerDeviceType.md)

Ledger device

___

### bufferSize

• `Optional` **bufferSize**: `number`

Buffer size on device
