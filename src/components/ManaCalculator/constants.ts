import { CongestionType } from './enums/parameters.enum';

// GENERIC

export const INITIAL_EPOCH = 1;
export const FINAL_EPOCH = 10;
export const SLOT_DURATION = 10;
export const SLOTS_IN_EPOCH = 8192;
export const EPOCH_DURATION = SLOTS_IN_EPOCH * SLOT_DURATION;
export const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;
export const EPOCH_DURATION_IN_YEARS = EPOCH_DURATION / SECONDS_IN_YEAR;
export const BETA_PER_YEAR = 1 / 3;
export const BOOTSTRAPPING_DURATION = 1154;
export const REWARDS_MANA_SHARE_COEFFICIENT = 2;
export const EPOCH = 1154 + 1;

// IOTA

export const IOTA_SUPPLY = 4600000000000000;

export const IOTA_CONGESTION = {
  [CongestionType.HIGH]: 350000000,
  [CongestionType.MEDIUM]: 0, // Dynamic
  [CongestionType.LOW]: 1000,
};

export const IOTA_GENERATION_PER_SLOT = Math.pow(2, -17);

export const IOTA_THROUGHPUT = 100;

export const IOTA_HOLD = 600; // IOTA
export const IOTA_STAKED = 600; // IOTA
export const IOTA_DELEGATED = 600; // IOTA

// SHIMMER

export const SHIMMER_SUPPLY = 1813620509000000;

export const SHIMMER_CONGESTION = {
  [CongestionType.HIGH]: 275000000,
  [CongestionType.MEDIUM]: 0, // Dynamic
  [CongestionType.LOW]: 1000,
};

export const SHIMMER_GENERATION_PER_SLOT = Math.pow(2, -16);

export const SHIMMER_THROUGHPUT = 100;

export const SHIMMER_HOLD = 600; // SMR
export const SHIMMER_STAKED = 600; // SMR
export const SHIMMER_DELEGATED = 600; // SMR
