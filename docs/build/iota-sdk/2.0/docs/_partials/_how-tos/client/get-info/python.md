```json
{
    "name": "iota-core",
    "version": "1.0.0-alpha.8",
    "status": {
        "is_healthy": true,
        "accepted_tangle_time": 1708628022003812788,
        "relative_accepted_tangle_time": 1708628022260355411,
        "confirmed_tangle_time": 1708628022003812788,
        "relative_confirmed_tangle_time": 1708628022255670879,
        "latest_commitment_id": "0x697da80c29ef67feb807585d2a02daf25eb5dd76937ce07fa7215f905f087b93b30c0000",
        "latest_finalized_slot": 3251,
        "latest_accepted_block_slot": 3254,
        "latest_confirmed_block_slot": 3254,
        "pruning_epoch": 0
    },
    "metrics": {
        "blocks_per_second": 32.0,
        "confirmed_blocks_per_second": 31.8,
        "confirmation_rate": 99.375
    },
    "protocol_parameters": [
        {
            "start_epoch": 0,
            "parameters": {
                "type": 0,
                "version": 3,
                "network_name": "docker-1708595536",
                "bech32_hrp": "rms",
                "storage_score_parameters": {
                    "storage_cost": 100,
                    "factor_data": 1,
                    "offset_output_overhead": 10,
                    "offset_ed25519_block_issuer_key": 100,
                    "offset_staking_feature": 100,
                    "offset_delegation": 100
                },
                "work_score_parameters": {
                    "data_byte": 500,
                    "block": 110000,
                    "input": 7500,
                    "context_input": 40000,
                    "output": 90000,
                    "native_token": 50000,
                    "staking": 40000,
                    "block_issuer": 70000,
                    "allotment": 5000,
                    "signature_ed25519": 15000
                },
                "mana_parameters": {
                    "bits_count": 63,
                    "generation_rate": 1,
                    "generation_rate_exponent": 17,
                    "decay_factors": [
                        4290989755,
                        ...,
                    ],
                    "decay_factors_exponent": 32,
                    "decay_factor_epochs_sum": 2262417561,
                    "decay_factor_epochs_sum_exponent": 21,
                    "annual_decay_factor_percentage": 70
                },
                "token_supply": 1813620509061365,
                "genesis_slot": 5,
                "genesis_unix_timestamp": 1708595536,
                "slot_duration_in_seconds": 10,
                "slots_per_epoch_exponent": 13,
                "staking_unbonding_period": 10,
                "validation_blocks_per_slot": 10,
                "punishment_epochs": 10,
                "liveness_threshold_lower_bound": 10,
                "liveness_threshold_upper_bound": 15,
                "min_committable_age": 3,
                "max_committable_age": 6,
                "epoch_nearing_threshold": 8,
                "congestion_control_parameters": {
                    "min_reference_mana_cost": 1,
                    "increase": 1,
                    "decrease": 1,
                    "increase_threshold": 400000000,
                    "decrease_threshold": 250000000,
                    "scheduler_rate": 50000000,
                    "max_buffer_size": 1000,
                    "max_validation_buffer_size": 100
                },
                "version_signaling_parameters": {
                    "window_size": 7,
                    "window_target_ratio": 5,
                    "activation_offset": 7
                },
                "rewards_parameters": {
                    "profit_margin_exponent": 8,
                    "bootstrapping_duration": 1079,
                    "reward_to_generation_ratio": 2,
                    "initial_target_rewards_rate": 616067521149261,
                    "final_target_rewards_rate": 226702563632670,
                    "pool_coefficient_exponent": 11,
                    "retention_period": 384
                },
                "target_committee_size": 32,
                "chain_switching_threshold": 3
            }
        }
    ],
    "base_token": {
        "name": "RMS",
        "ticker_symbol": "RMS",
        "unit": "RMS",
        "decimals": 6,
        "subunit": "glow"
    }
}
```