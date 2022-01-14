import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '/src/theme/HomeLayout' or its ... Remove this comment to see the full error message
import HomeLayout from '/src/theme/HomeLayout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <HomeLayout
      description={siteConfig.tagline}
      title={siteConfig.title}
      tagline={siteConfig.tagline}
    />
  );
}
