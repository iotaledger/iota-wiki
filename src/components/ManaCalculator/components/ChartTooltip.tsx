import React from 'react';
import { TooltipProps } from 'recharts';
import { getSizeOfUnit, Unit } from '../hooks';

export function chartTooltip(xLabel: string, yLabel: string, unit: Unit) {
  const unitSize = getSizeOfUnit(unit);

  const ChartTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const value = payload[0].value * unitSize;
      return (
        <div className='mana-calculator__tooltip'>
          <p>{`${xLabel}: ${label}`}</p>
          <p>{`${yLabel}: ${value}`}</p>
        </div>
      );
    }

    return null;
  };

  return ChartTooltip;
}
