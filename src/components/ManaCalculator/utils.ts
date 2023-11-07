import {
  IOTA_CONGESTION,
  IOTA_GENERATION_PER_SLOT,
  IOTA_SUPPLY,
  IOTA_THROUGHPUT,
  SHIMMER_CONGESTION,
  SHIMMER_GENERATION_PER_SLOT,
  SHIMMER_SUPPLY,
  SHIMMER_THROUGHPUT,
  SLOTS_IN_EPOCH,
} from './constants';
import { CongestionType, NetworkType } from './enums';

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

    return (supply * generation) / (10 * throughput);
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
