// Constants
export const IOTA_SUPPLY = 4292657708000000;
const SLOT_DURATION = 10;
const SLOTS_IN_EPOCH = 8192;
export const EPOCH_DURATION = SLOTS_IN_EPOCH * SLOT_DURATION;
const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;
const EPOCH_DURATION_IN_YEARS = EPOCH_DURATION / SECONDS_IN_YEAR;
const BETA_PER_YEAR = 1 / 3;
export const GENERATION_PER_SLOT = Math.pow(2, -17);
const BOOTSTRAPPING_DURATION = 1154;
const REWARDS_MANA_SHARE_COEFFICIENT = 2;
export const RMC_LOW_CONGESTION = 100000;
export const RMC_STABLE_CONGESTION = 9000000;
export const RMC_EXTREME_CONGESTION = 500000000;

// given t in seconds, returns the slot that time t belongs to
function time_to_slot(t: number): number {
  const slot = Math.floor(t / SLOT_DURATION);
  return slot;
}

// given t in seconds, returns the epoch that time t belongs to
function time_to_epoch(t: number): number {
  const epoch = Math.floor(t / EPOCH_DURATION);
  return epoch;
}

// given n in slots, returns the epoch that slot n belongs to
function slot_to_epoch(n: number): number {
  const epoch = Math.floor(n / SLOTS_IN_EPOCH);
  return epoch;
}

// returns the first slot of epoch n
export function first_slot_of_epoch(n: number): number {
  const slot = n * SLOTS_IN_EPOCH;
  return slot;
}

// returns the decayed value of value by n epochs
export function decay(value: number, n: number): number {
  if (value != 0 && n != 0) {
    const decay = Math.exp(-BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS * n);
    value = Math.floor(value * decay);
  }
  return value;
}

// returns the potential mana generated by holding value tokens from creationSlot to consumptionSlot
export function potential_Mana(
  value: number,
  creationSlot: number,
  consumptionSlot: number,
  generationRate: number,
): number {
  const i = slot_to_epoch(creationSlot);
  const j = slot_to_epoch(consumptionSlot);
  const n = j - i;
  const slotAfterEpochi = first_slot_of_epoch(i + 1);
  const firstSlotEpochJ = first_slot_of_epoch(j);
  const d1 = slotAfterEpochi - creationSlot;
  const d2 = consumptionSlot - firstSlotEpochJ;
  let potentialMana = 0;
  if (n == 0) {
    potentialMana = value * (consumptionSlot - creationSlot) * generationRate;
  } else if (n == 1) {
    potentialMana =
      value * d2 * generationRate + decay(value * d1 * generationRate, 1);
  } else {
    const c =
      Math.exp(-BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS) /
      (1 - Math.exp(-BETA_PER_YEAR * EPOCH_DURATION_IN_YEARS));
    const aux = value * generationRate * c * SLOTS_IN_EPOCH;
    const potentialMana_n = decay(value * d1 * generationRate, n);
    const potentialMana_n_1 = decay(aux, n - 1);
    const potentialMana_0 = value * d2 * generationRate + aux;
    potentialMana = potentialMana_n - potentialMana_n_1 + potentialMana_0;
  }
  return potentialMana;
}

// returns the target reward of a certain epoch n
export function targetReward(n: number): number {
  const finalReward =
    IOTA_SUPPLY *
    REWARDS_MANA_SHARE_COEFFICIENT *
    GENERATION_PER_SLOT *
    SLOTS_IN_EPOCH;
  const decayBalancingConstant =
    Math.exp(1) /
    (BOOTSTRAPPING_DURATION *
      (1 - Math.exp(-EPOCH_DURATION_IN_YEARS * BETA_PER_YEAR)));
  const initialReward = finalReward * decayBalancingConstant;

  let reward = 0;
  if (n <= BOOTSTRAPPING_DURATION) {
    reward = decay(initialReward, n);
  } else {
    reward = finalReward;
  }
  return reward;
}