import React from 'react';
import FullscreenImage from '@theme/FullscreenImage';

// eslint-disable-next-line react/prop-types
function Root({ children }) {
  return <FullscreenImage.Provider>{children}</FullscreenImage.Provider>;
}

export default Root;
