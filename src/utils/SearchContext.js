/* eslint-disable */

import React, { createContext, useState } from 'react';
import { allFacets } from './searchConstant';

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [selectedFacets, setSelectedFacets] = useState(allFacets);

  return (
    <SearchContext.Provider
      value={{
        selectedFacets,
        setSelectedFacets,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
