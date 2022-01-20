import React, { ReactNode } from 'react';
import FullscreenImage from '@site/src/components/FullscreenImage';

export interface RootProps {
  children: ReactNode;
}

function Root({ children } : RootProps) {
  return <FullscreenImage.Provider>{children}</FullscreenImage.Provider>;
}

export default Root;
