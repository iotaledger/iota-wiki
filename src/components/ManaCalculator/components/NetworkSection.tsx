import React from 'react';
import { NetworkType } from '../enums';
import { useManaState } from '../hooks';
import Select from 'react-select';

export function NetworkSection() {
  const { handleNetworkChange } = useManaState();
  return (
    <div className='mana_calculator__card'>
      <h4>Network configuration</h4>
      <label className='inlined-label'>Your Network</label>
      <Select
        className='mana_calculator__compact inlined'
        defaultValue={{ value: NetworkType.IOTA, label: `IOTA` }}
        onChange={(e) => {
          handleNetworkChange(e.value);
        }}
        classNamePrefix='react-select'
        options={[
          { value: NetworkType.IOTA, label: `IOTA` },
          { value: NetworkType.SHIMMER, label: `Shimmer` },
        ]}
      />
    </div>
  );
}
