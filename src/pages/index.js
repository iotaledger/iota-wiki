import React from 'react';
import Layout from '../theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className='hero bg-midnight-gradient'>
      <div className='container'>
        <div className='row'>
          <div className='col col--5 col--offset-1'>
            <h1 className='hero__title'>{siteConfig.title}</h1>
            <p className='hero__subtitle'>{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
