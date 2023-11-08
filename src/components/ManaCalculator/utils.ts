import { IOTA_SUPPLY, SHIMMER_SUPPLY, SLOTS_IN_EPOCH } from './constants';
import { NetworkType } from './enums';

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

export const roundMax = function (num: number, places: number) {
  return +(Math.round(Number(num + 'e+' + places)) + 'e-' + places);
};
