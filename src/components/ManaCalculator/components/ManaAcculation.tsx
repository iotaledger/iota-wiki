import React from 'react';
import { useManaState, useResultsPerEpoch } from '../hooks';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function ManaAccumulation() {
  const { state } = useManaState();
  const results = useResultsPerEpoch(state);

  return (
    <div className='table'>
      <br />
      <h3>Mana Accumulation</h3>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart
          data={results}
         margin={{top: 10}}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='epoch' height={50} label={{ value: 'Epochs', position: 'insideBottom'}} />
          <YAxis width={100} label={{ value: 'Mana', angle: -90, position: 'insideLeft' }} unit="M"/>
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='mana'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
