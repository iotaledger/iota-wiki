import React from 'react';
import Footer from '@theme-original/Footer';
import Social from '@site/src/components/Social';

type FooterProps = {
  footerStyleProps?: React.CSSProperties;
};

const FooterWrapper = ({ footerStyleProps }: FooterProps) => {
  return (
    <div>
      <div style={footerStyleProps}>
        <Footer />
        <Social />
      </div>
    </div>
  );
};

export default FooterWrapper;
