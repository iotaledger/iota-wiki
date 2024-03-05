```json
{
  "name": "iota-core",
  "version": "1.0.0-alpha.8",
  "status": {
    "isHealthy": true,
    "acceptedTangleTime": "1708627911633941263",
    "relativeAcceptedTangleTime": "1708627911848677178",
    "confirmedTangleTime": "1708627911633941263",
    "relativeConfirmedTangleTime": "1708627911843992606",
    "latestCommitmentId": "0x58b3fd243d97bb3d31e50d7f71516b83071ab1294222ef1f33772df92bbc950da80c0000",
    "latestFinalizedSlot": 3240,
    "latestAcceptedBlockSlot": 3243,
    "latestConfirmedBlockSlot": 3243,
    "pruningEpoch": 0
  },
  "metrics": {
    "blocksPerSecond": "32",
    "confirmedBlocksPerSecond": "32.1",
    "confirmationRate": "100.3125"
  },
  "protocolParameters": [
    {
      "parameters": {
        "type": 0,
        "version": 3,
        "networkName": "docker-1708595536",
        "bech32Hrp": "rms",
        "storageScoreParameters": {
          "storageCost": "100",
          "factorData": 1,
          "offsetOutputOverhead": "10",
          "offsetEd25519BlockIssuerKey": "100",
          "offsetStakingFeature": "100",
          "offsetDelegation": "100"
        },
        "workScoreParameters": {
          "dataByte": 500,
          "block": 110000,
          "input": 7500,
          "contextInput": 40000,
          "output": 90000,
          "nativeToken": 50000,
          "staking": 40000,
          "blockIssuer": 70000,
          "allotment": 5000,
          "signatureEd25519": 15000
        },
        "manaParameters": {
          "bitsCount": 63,
          "generationRate": 1,
          "generationRateExponent": 17,
          "decayFactors": [
            4290989755,
            ...,
          ],
          "decayFactorsExponent": 32,
          "decayFactorEpochsSum": 2262417561,
          "decayFactorEpochsSumExponent": 21,
          "annualDecayFactorPercentage": 70
        },
        "tokenSupply": "1813620509061365",
        "genesisSlot": 5,
        "genesisUnixTimestamp": "1708595536",
        "slotDurationInSeconds": 10,
        "slotsPerEpochExponent": 13,
        "stakingUnbondingPeriod": 10,
        "validationBlocksPerSlot": 10,
        "punishmentEpochs": 10,
        "livenessThresholdLowerBound": 10,
        "livenessThresholdUpperBound": 15,
        "minCommittableAge": 3,
        "maxCommittableAge": 6,
        "epochNearingThreshold": 8,
        "congestionControlParameters": {
          "minReferenceManaCost": "1",
          "increase": "1",
          "decrease": "1",
          "increaseThreshold": 400000000,
          "decreaseThreshold": 250000000,
          "schedulerRate": 50000000,
          "maxBufferSize": 1000,
          "maxValidationBufferSize": 100
        },
        "versionSignalingParameters": {
          "windowSize": 7,
          "windowTargetRatio": 5,
          "activationOffset": 7
        },
        "rewardsParameters": {
          "profitMarginExponent": 8,
          "bootstrappingDuration": 1079,
          "rewardToGenerationRatio": 2,
          "initialTargetRewardsRate": "616067521149261",
          "finalTargetRewardsRate": "226702563632670",
          "poolCoefficientExponent": 11,
          "retentionPeriod": 384
        },
        "targetCommitteeSize": 32,
        "chainSwitchingThreshold": 3
      },
      "startEpoch": 0
    }
  ],
  "baseToken": {
    "name": "RMS",
    "tickerSymbol": "RMS",
    "unit": "RMS",
    "subunit": "glow",
    "decimals": 6
  }
}
```