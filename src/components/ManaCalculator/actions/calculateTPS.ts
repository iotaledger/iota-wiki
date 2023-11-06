import { EPOCH_DURATION } from '../constants';

export function calculateTPS(mana: number, congestion: number): number {
  return mana / congestion / EPOCH_DURATION;
}
