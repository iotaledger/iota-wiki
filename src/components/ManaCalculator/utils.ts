import {
  IOTA_CONGESTION,
  IOTA_GENERATION_PER_SLOT,
  IOTA_SUPPLY,
  IOTA_THROUGHPUT,
  SHIMMER_CONGESTION,
  SHIMMER_GENERATION_PER_SLOT,
  SHIMMER_SUPPLY,
  SHIMMER_THROUGHPUT,
  SLOT_DURATION,
  SLOTS_IN_EPOCH,
} from './constants';
import { CongestionType, NetworkType, UserType } from './enums';

// Given a slot, returns the epoch that slot belongs to
export function slotToEpoch(slot: number): number {
  const epoch = Math.floor(slot / SLOTS_IN_EPOCH);
  return epoch;
}

// Returns the first slot of the epoch
export function getFirstSlotOfEpoch(epoch: number): number {
  const slot = epoch * SLOTS_IN_EPOCH;
  return slot;
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

export function getNetworkCongestion(
  network: NetworkType,
  congestionType: CongestionType,
): number {
  if (congestionType === CongestionType.MEDIUM) {
    const supply = getNetworkSupply(network);
    const generation = getNetworkGenerationPerSlot(network);
    const throughput = getNetworkThroughput(network);

    return (supply * generation) / (SLOT_DURATION * throughput);
  } else {
    if (network == NetworkType.IOTA) {
      return IOTA_CONGESTION[congestionType];
    } else {
      return SHIMMER_CONGESTION[congestionType];
    }
  }
}

export function getNetworkGenerationPerSlot(network: NetworkType): number {
  if (network == NetworkType.IOTA) {
    return IOTA_GENERATION_PER_SLOT;
  } else {
    return SHIMMER_GENERATION_PER_SLOT;
  }
}

export function getNetworkThroughput(network: NetworkType): number {
  if (network == NetworkType.IOTA) {
    return IOTA_THROUGHPUT;
  } else {
    return SHIMMER_THROUGHPUT;
  }
}

export function getStakedOrDelegated(userType: UserType) {
  if (userType == UserType.DELEGATOR) {
    return 'delegatedTokens';
  } else {
    return 'stakedTokens';
  }
}

export const roundMax = function (num: number, places: number) {
  return +(Math.round(Number(num + 'e+' + places)) + 'e-' + places);
};

export function getValidInputValue(
  num: string,
  transformNumber?: (number: number) => number,
): number {
  let value = Number(Number(num).toString());

  if (transformNumber) {
    value = transformNumber(value);
  }

  const isInvalid = isNaN(value);

  if (isInvalid) {
    throw new Error('Invalid number');
  }

  return value;
}
