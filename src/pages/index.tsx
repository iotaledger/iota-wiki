import React from 'react';
import HomeLayout from '@site/src/components/HomeLayout';
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
