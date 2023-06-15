---
description: The `blobs` contract maintains a registry of _blobs_ (a collection of arbitrary binary data) referenced from smart contracts via their hashes.
image: /img/logo/WASP_logo_dark.png
keywords:
- core contracts
- bloc
- binary data
- store
- get
- entry points
- views
- reference
--- 
# The `blob` Contract

The `blob` contract is one of the [core contracts](overview.md) on each IOTA Smart Contracts chain.

The objective of the `blob` contract is to maintain an on-chain registry of _blobs_.
A blob is a collection of named chunks of binary data.

```
<fieldName1>: <binaryChunk1>
<fieldName2>: <binaryChunk2>
...
<fieldNameN>: <binaryChunkN>
```

Both names and chunks are arbitrarily long byte slices.

Blobs can be used to store arbitrary data like, for example, a collection of Wasm binaries needed to deploy a smart contract.

Each blob in the registry is referenced by its hash. The hash is deterministically calculated from the concatenation of all pieces:

```
blobHash = hash( fieldName1 || binaryChunk1 || fieldName2 || binaryChunk2 || ... || fieldNameN || binaryChunkN)
```

Usually, field names are short strings, but their interpretation is use-case specific.

Two predefined field names are interpreted by the VM while deploying smart contracts from binary:

- _fieldname_ = `"v"` is interpreted as the _VM type_.
- _fieldname_ = `"p"` is interpreted as the _smart contract program binary_.

If the field `"v"` is equal to the string `"wasmtime"`, the binary chunk of `"p"` is interpreted as WebAssembly binary, executable by the Wasmtime interpreter.

The blob describing a smart contract may contain extra fields (ignored by the VM), for example:

```
"v" : VM type
"p" : smart contract program binary
"d" : data schema for data exchange between smart contract and outside sources and consumers
"s" : program sources in .zip format
```

---

## Entry Points

### `storeBlob()`

Stores a new blob in the registry.

#### Parameters

The key/value pairs of the received parameters are interpreted as the field/chunk pairs of the blob.

#### Returns

- `hash` (`[32]byte`): The hash of the stored blob.

---

## Views

### `getBlobInfo(hash BlobHash)`

Returns the size of each chunk of the blob.

#### Parameters

- `hash` (`[32]byte`): The hash of the blob.

#### Returns

```
<fieldName1>: <size of the dataChunk1> (uint32)
...
<fieldNameN>: <size of the dataChunkN> (uint32)
```

### `getBlobField(hash BlobHash, field BlobField)`

Returns the chunk associated with the given blob field name.

#### Parameters

- `hash` (`[32]byte`): The hash of the blob.
- `field` (`[]byte`): The field name.

#### Returns

- `bytes` (`[]byte`): The chunk associated with the given field name.

### `listBlobs()`

Returns a list of pairs `blob hash`: `total size of chunks` (`uint32`) for all blobs in the registry.

