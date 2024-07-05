/**
 * SWIZZLED VERSION: 2.0.0-rc.1
 * REASONS:
 *  - The socials bar needed full width, so needed to be placed outside the default container.
 */

import React from 'react';
import Footer from '@theme-original/Footer';
import Social from '@site/src/components/Social';

type FooterProps = {
  footerStyleProps?: React.CSSProperties;
};

const FooterWrapper = ({ footerStyleProps }: FooterProps) => {
  return (
    <div style={footerStyleProps}>
      <Footer />
      <Social />
    </div>
  );
};

export default FooterWrapper;
