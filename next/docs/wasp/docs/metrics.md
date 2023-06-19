---
description: IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA tangle.
image: /img/logo/WASP_logo_dark.png
keywords:
- smart contracts
- metrics
- reference
---

# Exposed Metrics

You can see all exposed metrics at our [metrics endpoint](https://wasp.sc.iota.org/metrics). Refer to the [testnet endpoints description](guide/chains_and_nodes/testnet.md#endpoints) for access details.

|Metric                                     |Description
|---                                        |---
|`wasp_off_ledger_requests_counter`         |Off-ledger requests per chain.
|`wasp_on_ledger_request_counter`           |On-ledger requests per chain.
|`wasp_processed_request_counter`           |Total number of requests processed.
|`messages_received_per_chain`              |Number of messages received per chain.
|`receive_requests_acknowledgement_message` |Number of request acknowledgement messages per chain.
|`request_processing_time`                  |Time to process request.
|`vm_run_time`                              |Time it takes to run the vm.