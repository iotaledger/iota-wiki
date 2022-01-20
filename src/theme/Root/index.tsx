import React from 'react';
import FullscreenImage from '@site/src/components/FullscreenImage';


function Root({ children }) {
  return <FullscreenImage.Provider>{children}</FullscreenImage.Provider>;
}

export default Root;
