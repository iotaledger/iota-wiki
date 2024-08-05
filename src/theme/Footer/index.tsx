/**
 * SWIZZLED VERSION: 2.0.0-rc.1
 * REASONS:
 *  - The socials bar needed full width, so needed to be placed outside the default container.
 */

import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';
import Social from '@site/src/components/Social';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
      <Social />
    </>
  );
}
