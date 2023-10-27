import {
  BETA_PER_YEAR,
  BOOTSTRAPPING_DURATION,
  EPOCH_DURATION_IN_YEARS,
  GENERATION_PER_SLOT,
  IOTA_SUPPLY,
  REWARDS_MANA_SHARE_COEFFICIENT,
  SHIMMER_SUPPLY,
  SLOTS_IN_EPOCH,
} from './constants';
import { NetworkType } from './enums';

// Given a slot, returns the epoch that slot belongs to
function slotToEpoch(slot: number): number {
  const epoch = Math.floor(slot / SLOTS_IN_EPOCH);
  return epoch;
}

// Returns the first slot of the epoch
export function getFirstSlotOfEpoch(epoch: number): number {
  const slot = epoch * SLOTS_IN_EPOCH;
  return slot;
}

// Returns the decayed value of value by the amount of epochs
export function decay(value: number, epochsAmount: number): number {
  if (value != 0 && epochsAmount != 0) {
    const decay = Math.exp(
      -BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS * epochsAmount,
    );
    value = Math.floor(value * decay);
  }
  return value;
}

// Returns the potential mana generated by holding value tokens from creationSlot to consumptionSlot
export function getPotentialMana(
  value: number,
  creationSlot: number,
  consumptionSlot: number,
  generationRate: number,
): number {
  const creationEpoch = slotToEpoch(creationSlot);
  const consumptionEpoch = slotToEpoch(consumptionSlot);

  const epochsLeftToConsumption = consumptionEpoch - creationEpoch;

  const slotAfterCreationEpoch = getFirstSlotOfEpoch(creationEpoch + 1);
  const firstSlotConsumptionEpoch = getFirstSlotOfEpoch(consumptionEpoch);

  const d1 = slotAfterCreationEpoch - creationSlot;
  const d2 = consumptionSlot - firstSlotConsumptionEpoch;

  let potentialMana = 0;
  if (epochsLeftToConsumption == 0) {
    potentialMana = value * (consumptionSlot - creationSlot) * generationRate;
  } else if (epochsLeftToConsumption == 1) {
    potentialMana =
      value * d2 * generationRate + decay(value * d1 * generationRate, 1);
  } else {
    const c =
      Math.exp(-BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS) /
      (1 - Math.exp(-BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS));
    const aux = value * generationRate * c * SLOTS_IN_EPOCH;
    const potentialMana_n = decay(
      value * d1 * generationRate,
      epochsLeftToConsumption,
    );
    const potentialMana_n_1 = decay(aux, epochsLeftToConsumption - 1);
    const potentialMana_0 = value * d2 * generationRate + aux;
    potentialMana = potentialMana_n - potentialMana_n_1 + potentialMana_0;
  }
  return potentialMana;
}

// Returns the target reward for the given epoch
export function targetReward(epoch: number, supply: number): number {
  const finalReward =
    supply *
    REWARDS_MANA_SHARE_COEFFICIENT *
    GENERATION_PER_SLOT *
    SLOTS_IN_EPOCH;
  const decayBalancingConstant =
    Math.exp(1) /
    (BOOTSTRAPPING_DURATION *
      (1 - Math.exp(-EPOCH_DURATION_IN_YEARS * BETA_PER_YEAR)));
  const initialReward = finalReward * decayBalancingConstant;

  let reward = 0;
  if (epoch <= BOOTSTRAPPING_DURATION) {
    reward = decay(initialReward, epoch);
  } else {
    reward = finalReward;
  }
  return reward;
}

// Returns The number of Mana/IOTA from micros
export function fromMicro(n: number): number {
  return n / 1_000_000;
}

// Returns The number of micro(Mana/IOTA).
export function toMicro(n: number): number {
  return n * 1_000_000;
}

// Returns the total supply given the network type
export function getNetworkSupply(network: NetworkType): number {
  if (network == NetworkType.IOTA) {
    return IOTA_SUPPLY;
  } else {
    return SHIMMER_SUPPLY;
  }
}
