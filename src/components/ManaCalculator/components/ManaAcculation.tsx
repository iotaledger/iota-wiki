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
import { EpochReward } from '../types';

export function ManaAccumulation({ results }: { results: EpochReward[] }) {
  return (
    <div className='table'>
      <br />
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
            unit='M'
          />
          <CartesianGrid strokeDasharray='3 3' stroke='rgb(255, 255, 255, 0.15)' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='mana'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#manaColor)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
