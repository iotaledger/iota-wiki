import React from 'react';
import CardWithImage from '/src/theme/CardWithImage';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { cards } = useThemeConfig();

  return (
    <Layout description={`${siteConfig.tagline}`}>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>{siteConfig.title}</h1>
            <p className='hero__subtitle margin--none'>{siteConfig.tagline}</p>
          </div>
          {cards && (
            <div className='row'>
              {cards.map((props, idx) => (
                <CardWithImage key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
