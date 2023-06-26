---
description: iota.js API reference
keywords:
  - references
  - api references
  - typescript
image: /img/client_banner.png
---

# Interface: SingleNodeClientOptions

Options used when constructing SingleNodeClient.

## Table of contents

### Properties

- [basePath](SingleNodeClientOptions.md#basepath)
- [powProvider](SingleNodeClientOptions.md#powprovider)
- [protocolVersion](SingleNodeClientOptions.md#protocolversion)
- [timeout](SingleNodeClientOptions.md#timeout)
- [userName](SingleNodeClientOptions.md#username)
- [password](SingleNodeClientOptions.md#password)
- [headers](SingleNodeClientOptions.md#headers)

## Properties

### basePath

• `Optional` **basePath**: `string`

Base path for API location, defaults to /api/.

---

### powProvider

• `Optional` **powProvider**: [`IPowProvider`](IPowProvider.md)

Use a custom pow provider instead of the one on the node.

---

### protocolVersion

• `Optional` **protocolVersion**: `number`

The protocol version for blocks.

---

### timeout

• `Optional` **timeout**: `number`

Timeout for API requests.

---

### userName

• `Optional` **userName**: `string`

Username for the endpoint.

---

### password

• `Optional` **password**: `string`

Password for the endpoint.

---

### headers

• `Optional` **headers**: `Object`

Additional headers to include in the requests.

#### Index signature

▪ [id: `string`]: `string`
