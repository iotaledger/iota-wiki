import { BETA_PER_YEAR, EPOCH_DURATION_IN_YEARS } from '../constants';

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
