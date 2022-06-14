import React from 'react';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import { useWindowSize } from '@docusaurus/theme-common';

export default function DocVersionBadgeWrapper(props) {
  const windowSize = useWindowSize();
  
  const shouldRenderBadge = windowSize === 'mobile';

  return (
    <>
      {shouldRenderBadge && <DocVersionBadge {...props} />}
    </>
  );
}
