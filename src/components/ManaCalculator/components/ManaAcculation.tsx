import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { stringifyUnit, Unit } from '../hooks';
import { EpochReward } from '../types';
import { chartTooltip } from './ChartTooltip';

export function ManaAccumulation({
  results,
  unit,
}: {
  results: EpochReward[];
  unit: Unit;
}) {
  const unitString = stringifyUnit(unit);
  return (
    <>
      <h3>Mana Accumulation</h3>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart data={results} margin={{ top: 10 }}>
          <defs>
            <linearGradient id='manaColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='epoch'
            height={50}
            label={{ value: 'Epochs', position: 'insideBottom' }}
          />
          <YAxis
            width={100}
            label={{ value: 'Mana', angle: -90, position: 'insideLeft' }}
            unit={unitString}
          />
          <CartesianGrid
            strokeDasharray='3 3'
            stroke='rgb(150, 150, 150, 0.3)'
          />
          <Tooltip content={chartTooltip('Epoch', 'Mana', unit)} />
          <Area
            type='monotone'
            dataKey='mana'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#manaColor)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
