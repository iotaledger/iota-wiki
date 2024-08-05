/**
 * SWIZZLED VERSION: 2.4.3
 * REASONS:
 *  - Wrapped the component in context provider inorder to transfer data seamlessly between search bar and search page
 */

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
