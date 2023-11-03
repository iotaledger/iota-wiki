import React, { useState } from 'react';
import '../styles.css';
import { NetworkType } from '../enums';
import {
  getDefaultParameters,
  ManaStateContext,
  useResultsPerEpoch,
} from '../hooks';
import {
  OutputForm,
  NetworkSection,
  AdvancedSettingsValidator,
  RoleSection,
  OtherParametersSection,
  ManaAccumulation,
  BlockIssuance,
} from './';

export function ManaCalculator() {
  const [state, setState] = useState(getDefaultParameters(NetworkType.IOTA));
  const results = useResultsPerEpoch(state);

  return (
    <ManaStateContext.Provider value={{ state, setState }}>
      <NetworkSection />
      <RoleSection />
      <OtherParametersSection />
      <AdvancedSettingsValidator />
      <br />
      <OutputForm />
      <ManaAccumulation results={results} />
      <BlockIssuance results={results} />
    </ManaStateContext.Provider>
  );
}
