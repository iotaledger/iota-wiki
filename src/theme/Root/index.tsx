import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@theme/FullscreenImage' or its... Remove this comment to see the full error message
import FullscreenImage from '@theme/FullscreenImage';

// eslint-disable-next-line react/prop-types
function Root({ children }) {
  return <FullscreenImage.Provider>{children}</FullscreenImage.Provider>;
}

export default Root;
