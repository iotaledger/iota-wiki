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

export function BlockAllowance({ results }: { results: EpochReward[] }) {
  return (
    <div className='table'>
      <br />
      <h3>Block Allowance</h3>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart
          data={results}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='totalTps' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#7caae6' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#7caae6' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='epoch' />
          <YAxis width={120} />
          <CartesianGrid strokeDasharray='3 3' stroke='rgb(255, 255, 255, 0.15)' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='totalTps'
            stroke='#7caae6'
            fillOpacity={1}
            fill='url(#totalTps)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
