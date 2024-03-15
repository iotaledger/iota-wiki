```json
First output of query:
ID: OutputId {
    id: "0x20b4a5998917561e90f89c232aaf92b620703e48880abec5417d31de387e6f1ec39500000000",
    transaction_id: TransactionId {
        id: "0x20b4a5998917561e90f89c232aaf92b620703e48880abec5417d31de387e6f1ec3950000",
        slot_index: SlotIndex(
            38339,
        ),
    },
    output_index: 0,
}
OutputResponse {
    output: BasicOutput {
        amount: 1000000000,
        mana: 1000,
        unlock_conditions: UnlockConditions(
            [
                AddressUnlockCondition(
                    Ed25519Address(0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3),
                ),
            ],
        ),
        features: Features(
            [],
        ),
    },
    output_id_proof: OutputIdProof {
        slot: SlotIndex(
            38339,
        ),
        output_index: 0,
        transaction_commitment: "0x94fc67bc63c988fba38587f83cb45a0e3bf806cff17f73567701ae15c6b6701a",
        output_commitment_proof: HashableNode(
            HashableNode {
                kind: 0,
                l: ValueHash(
                    ValueHash {
                        kind: 2,
                        hash: [
                            86,
                            ...
                        ],
                    },
                ),
                r: LeafHash(
                    LeafHash {
                        kind: 1,
                        hash: [
                            10,
                            ...
                        ],
                    },
                ),
            },
        ),
    },
}
```
