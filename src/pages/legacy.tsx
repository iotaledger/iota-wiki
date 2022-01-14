import React from 'react';
import HomeLayout from '/src/theme/HomeLayout';

export default function LegacyHome() {
  const description =
    'The IOTA legacy documentation is no longer available.The IOTA Wiki is now the one source of truth for IOTA documentation.';
  const title = 'Legacy Documentation';
  const tagline =
    'The IOTA legacy documentation is no longer available. Any documentation which is still valid will be ported to this Wiki, the one source of truth for all the IOTA documentation.';

  return (
    <HomeLayout description={description} title={title} tagline={tagline} />
  );
}
