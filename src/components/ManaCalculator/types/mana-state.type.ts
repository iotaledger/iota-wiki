import { ManaCalculatorProps } from './mana-calculator.type';

export interface ManaState extends ManaCalculatorProps {
  congestionAmount: number;
  generationPerSlot: number;
  stakedOrDelegatedTokens: number;
}
