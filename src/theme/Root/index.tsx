import React from 'react';
import FullscreenImage from '../FullscreenImage';


function Root({ children }) {
  return <FullscreenImage.Provider>{children}</FullscreenImage.Provider>;
}

export default Root;
