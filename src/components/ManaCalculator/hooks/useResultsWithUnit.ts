import { EpochReward } from '../types/epoch-reward.type';

export enum Unit {
  default = 'default',
  K = 'K',
  M = 'M',
  G = 'G',
  T = 'T',
  P = 'P',
}

const UNIT_MAP: { [unit in Unit]: { val: number; dp: number } } = {
  default: { val: 1, dp: 0 },
  K: { val: 1000, dp: 3 },
  M: { val: 1000000, dp: 6 },
  G: { val: 1000000000, dp: 9 },
  T: { val: 1000000000000, dp: 12 },
  P: { val: 1000000000000000, dp: 15 },
};

const getUnit = (value: number): Unit => {
  let bestUnits: Unit = Unit.default;
  if (!value || value === 0) {
    return Unit.M;
  }
  const checkLength = Math.abs(value).toString().length;

  if (checkLength > UNIT_MAP.M.dp) {
    bestUnits = Unit.M;
  } else if (checkLength > UNIT_MAP.K.dp) {
    bestUnits = Unit.K;
  } else if (checkLength > UNIT_MAP.G.dp) {
    bestUnits = Unit.G;
  } else if (checkLength > UNIT_MAP.M.dp) {
    bestUnits = Unit.M;
  } else if (checkLength > UNIT_MAP.K.dp) {
    bestUnits = Unit.K;
  }

  return bestUnits;
};

interface UseResultsWithUnit {
  data: EpochReward[];
  manaUnit: Unit;
  blocksUnit: Unit;
}

export function getSizeOfUnit(unit: Unit): number {
  return UNIT_MAP[unit].val;
}

export function useResultsWithUnit(results: EpochReward[]): UseResultsWithUnit {
  const averageMana =
    results.reduce((acc, reward) => acc + reward.mana, 0) / results.length;
  const averageBlocks =
    results.reduce((acc, reward) => acc + reward.totalTps, 0) / results.length;

  const manaUnit = getUnit(averageMana);
  const blocksUnit = getUnit(averageBlocks);

  const manaSize = getSizeOfUnit(manaUnit);
  const blocksSize = getSizeOfUnit(blocksUnit);

  const data = results.map<EpochReward>((reward) => {
    return {
      ...reward,
      mana: reward.mana / manaSize,
      totalTps: reward.totalTps / blocksSize,
    };
  });

  return {
    data,
    manaUnit,
    blocksUnit,
  };
}
