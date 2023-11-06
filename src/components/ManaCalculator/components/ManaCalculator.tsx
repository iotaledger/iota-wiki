import React, { useState } from 'react';
import '../styles.css';
import { NetworkType } from '../enums';
import { getDefaultParameters, ManaStateContext } from '../hooks';
import {
  OutputForm,
  NetworkSection,
  AdvancedSettingsValidator,
  RoleSection,
  OtherParametersSection,
} from './';

export function ManaCalculator() {
  const [state, setState] = useState(getDefaultParameters(NetworkType.IOTA));

  return (
    <ManaStateContext.Provider value={{ state, setState }}>
      <NetworkSection />
      <RoleSection />
      <OtherParametersSection />
      <AdvancedSettingsValidator />
      <br />
      <OutputForm />
    </ManaStateContext.Provider>
  );
}
