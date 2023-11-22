import React, { useState } from 'react';
import '../styles.css';
import { NetworkType } from '../enums';
import {
  getDefaultParameters,
  ManaStateContext,
  useGivenManaState,
  useResultsPerEpoch,
  useResultsWithUnit,
} from '../hooks';
import {
  OutputForm,
  NetworkSection,
  RoleSection,
  OtherParametersSection,
  ManaAccumulation,
} from './';

export function ManaCalculator() {
  const [state, setState] = useState(getDefaultParameters(NetworkType.IOTA));
  const manaState = useGivenManaState(state, setState);
  const results = useResultsPerEpoch(manaState.state);
  const { data, manaUnit } = useResultsWithUnit(results);
  return (
    <ManaStateContext.Provider value={{ state, setState }}>
      <h3>Configuration</h3>
      <NetworkSection />
      <RoleSection />
      <OtherParametersSection />
      <br />
      <h3>Results</h3>
      <OutputForm />
      <ManaAccumulation results={data} unit={manaUnit} />
    </ManaStateContext.Provider>
  );
}
