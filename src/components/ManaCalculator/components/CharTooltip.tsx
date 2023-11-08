import React from 'react';
import { getSizeOfUnit, Unit } from '../hooks';

export function chartTooltip(xLabel: string, yLabel: string, unit: Unit) {
  const unitSize = getSizeOfUnit(unit);
  return ({ active, payload, label }) => {
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
}
