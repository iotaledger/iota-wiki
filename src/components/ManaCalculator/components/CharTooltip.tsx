import React from 'react';

export function chartTooltip(
  xLabel: string,
  yLabel: string,
  formatter: (value: number) => string = (v) => v.toString(),
) {
  return ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const value = formatter(payload[0].value);
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
