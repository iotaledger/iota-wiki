import React from 'react';
import { useManaState } from '../hooks/useManaState';
import Select from 'react-select';
import { UserType } from '../enums';
import { CongestionType } from '../enums';
import { AdvancedSettingsValidator } from './AdvancedSettingsValidator';
import { ValidatedInput } from '../../ValidatedInput/ValidatedInput';

export function OtherParametersSection() {
  const {
    state,
    handleCongestionChange,
    handleInitialEpochChange,
    handleFinalEpochChange,
  } = useManaState();
  return (
    <div className='mana_calculator__card'>
      <h4>Other parameters</h4>
      <label className='inlined-label'>Congestion</label>
      <Select
        className='mana_calculator__compact inlined'
        classNamePrefix='react-select'
        onChange={(e) => {
          handleCongestionChange(e.value);
        }}
        defaultValue={{
          value: CongestionType.LOW,
          label: 'Low Congestion',
        }}
        options={[
          { value: CongestionType.LOW, label: 'Low Congestion' },
          { value: CongestionType.MEDIUM, label: 'Stable Price' },
          { value: CongestionType.HIGH, label: 'Extreme Congestion' },
        ]}
      />
      <br />
      <label className='inlined-label'>Initial epoch</label>
      <ValidatedInput
        className='mana_calculator__compact inlined'
        min={1}
        max={state.finalEpoch}
        value={state.initialEpoch}
        onChange={handleInitialEpochChange}
      />
      <br />
      <label className='inlined-label'>Final epoch</label>
      <ValidatedInput
        className='mana_calculator__compact inlined'
        min={state.initialEpoch}
        max={Number.MAX_SAFE_INTEGER}
        value={state.finalEpoch}
        onChange={handleFinalEpochChange}
      />
      {state.userType === UserType.HOLDER ? (
        <></>
      ) : (
        <>
          <AdvancedSettingsValidator />
        </>
      )}
    </div>
  );
}
