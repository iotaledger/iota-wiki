import React from 'react';
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
