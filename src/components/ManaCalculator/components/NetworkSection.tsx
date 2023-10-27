import React from 'react';
import { NetworkType } from '../enums';
import { useManaState } from '../hooks';
import Select from 'react-select';

export function NetworkSection() {
  const { handleNetworkChange } = useManaState();
  return (
    <div className='grouped-form'>
      <p className='align-center'>Network configuration</p>
      <label className='inlined-label'>Your Network</label>
      <Select
        className='compact inlined'
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
