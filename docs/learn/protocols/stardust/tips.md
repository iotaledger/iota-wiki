# Stardust TIPs

The following Tangle Improvement Proposals (TIPs) are currently implemented in the Stardust protocol.

The _Status_ of a TIP reflects its current state with respect to its progression to being supported on
the [IOTA](../stardust/introduction.md) mainnet.

- `Draft` TIPs are work in progress. They may or may not have a working implementation on a testnet.
- `Proposed` TIPs are demonstrated to have a working implementation. These TIPs are supported on Shimmer, the staging
  network of IOTA.

| #   | Title                                                               | Description                                                                                                                                    | Type      | Layer     | Status   | Initial Target |
| --- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | -------- | -------------- |
| 18  | [Multi-Asset Ledger and ISC Support](/tips/tips/TIP-0018)           | Transform IOTA into a multi-asset ledger that supports running IOTA Smart Contracts                                                            | Standards | Core      | Proposed | **Stardust**   |
| 19  | [Dust Protection Based on Byte Costs](/tips/tips/TIP-0019)          | Prevent bloating the ledger size with dust outputs                                                                                             | Standards | Core      | Proposed | **Stardust**   |
| 20  | [Transaction Payload with New Output Types](/tips/tips/TIP-0020)    | UTXO-based transaction structure with TIP-18                                                                                                   | Standards | Core      | Proposed | **Stardust**   |
| 21  | [Serialization Primitives](/tips/tips/TIP-0021)                     | Introduce primitives to describe the binary serialization of objects                                                                           | Standards | Core      | Proposed | **Stardust**   |
| 22  | [IOTA Protocol Parameters](/tips/tips/TIP-0022)                     | Describes the global protocol parameters for the IOTA protocol                                                                                 | Standards | Core      | Draft    | **Stardust**   |
| 23  | [Tagged Data Payload](/tips/tips/TIP-0023)                          | Payload for arbitrary data                                                                                                                     | Standards | Core      | Proposed | **Stardust**   |
| 24  | [Tangle Block](/tips/tips/TIP-0024)                                 | A new version of TIP-6 that renames messages to blocks and removes the Indexation Payload in favor of the Tagged Data Payload. Replaces TIP-6. | Standards | Core      | Proposed | **Stardust**   |
| 25  | [Core REST API](/tips/tips/TIP-0025)                                | Node Core REST API routes and objects in OpenAPI Specification. Replaces TIP-13.                                                               | Standards | Interface | Proposed | **Stardust**   |
| 26  | [UTXO Indexer REST API](/tips/tips/TIP-0026)                        | UTXO Indexer REST API routes and objects in OpenAPI Specification.                                                                             | Standards | Interface | Proposed | **Stardust**   |
| 27  | [IOTA NFT standards](/tips/tips/TIP-0027)                           | Define NFT metadata standard, collection system and creator royalties                                                                          | Standards | IRC       | Proposed | **Stardust**   |
| 28  | [Node Event API](/tips/tips/TIP-0028)                               | Node event API definitions in AsyncAPI Specification. Replaces TIP-16.                                                                         | Standards | Interface | Proposed | **Stardust**   |
| 29  | [Milestone Payload](/tips/tips/TIP-0029)                            | Milestone Payload with keys removed from essence. Replaces TIP-8.                                                                              | Standards | Core      | Proposed | **Stardust**   |
| 30  | [Native Token Metadata Standard](/tips/tips/TIP-0030)               | A JSON schema that describes token metadata format for native token foundries                                                                  | Standards | IRC       | Proposed | **Stardust**   |
| 31  | [Bech32 Address Format for IOTA and Shimmer](/tips/tips/TIP-0031)   | Extendable address format supporting various signature schemes and address types. Replaces TIP-11.                                             | Standards | Interface | Proposed | **Stardust**   |
| 32  | [Shimmer Protocol Parameters](/tips/tips/TIP-0032)                  | Describes the global protocol parameters for the Shimmer network                                                                               | Standards | Core      | Proposed | **Stardust**   |
| 33  | [Public Token Registry](https://github.com/iotaledger/tips/pull/72) | Defines an open public registry for NFT collection ID and native tokens metadata                                                               | Standards | IRC       | Draft    | **Stardust**   |
| 34  | [Wotsicide (Stardust update)](/tips/tips/TIP-0034)                  | Define migration from legacy W-OTS addresses to post-Chrysalis networks. Replaces TIP-17.                                                      | Standards | Core      | Proposed | **Stardust**   |
| 35  | [Local Snapshot File Format (Stardust Update)](/tips/tips/TIP-0035) | File format to export/import ledger state. Replaces TIP-9.                                                                                     | Standards | Interface | Proposed | **Stardust**   |
| 37  | [Dynamic Proof-of-Work](https://github.com/iotaledger/tips/pull/81) | Dynamically adapt the PoW difficulty                                                                                                           | Standards | Core      | Draft    | **Stardust**   |
