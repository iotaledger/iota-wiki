import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function LegacyHome() {
  const description =
    'The IOTA legacy documentation is no longer available.The IOTA Wiki is now the one source of truth for IOTA documentation.';

  return (
    <Layout description={description}>
      <div className='hero'>
        <div className='container'>
          <h1 className='hero__title'>Legacy Documentation</h1>
          <p className='hero__subtitle'>
            The IOTA legacy documentation is no longer available. Any
            documentation which is still valid will be ported to this Wiki, the
            one source of truth for all the IOTA documentation.
          </p>
          <Link
            to='/'
            className='button button--primary button--outline button--lg'
          >
            Go to the Wiki
          </Link>
        </div>
      </div>
    </Layout>
  );
}
