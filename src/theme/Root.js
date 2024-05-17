/* eslint-disable */

import React from 'react';
import { SearchProvider } from '@site/src/utils/SearchContext';

export default function Root({ children }) {
  return (
    <SearchProvider>
      <div>{children}</div>
    </SearchProvider>
  );
}
