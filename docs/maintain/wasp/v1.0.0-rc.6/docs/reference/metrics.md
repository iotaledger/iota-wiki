---
description: IOTA Smart Contract Protocol is IOTA's solution for running smart contracts on top of the IOTA _tangle_.
image: /img/logo/WASP_logo_dark.png
tags:
  - smart contracts
  - metrics
  - reference
---

# Exposed Metrics

Refer to the [testnet endpoints description](/build/networks-endpoints/#shimmerevm-testnet) for access details.

| Metric                                     | Description                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `wasp_off_ledger_requests_counter`         | Off-ledger requests per chain.                       |
| `wasp_on_ledger_request_counter`           | On-ledger requests per chain.                        |
| `wasp_processed_request_counter`           | Total number of requests processed.                  |
| `messages_received_per_chain`              | Number of messages received per chain.               |
| `receive_requests_acknowledgement_message` | Number of request acknowledgment messages per chain. |
| `request_processing_time`                  | Time to process request.                             |
| `vm_run_time`                              | Time it takes to run the VM.                         |
