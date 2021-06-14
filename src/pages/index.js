import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} WORK IN PROGRESS`} description={`${siteConfig.tagline}`}>
      <div className='row margin-horiz--lg margin-vert--xl padding-vert--xl'>
        <span
          className="col col--2 col--offset-2 material-icons text--center"
          style={{
            fontSize: '10rem',
          }}
        >
          construction
        </span>
        <div className='col col--4 padding-vert--md'>
          <h1>Work in Progress</h1>
          <p>
            This website is under construction. Use the links in the header and footer to
            get around or <Link to='/main'>continue to the main page</Link>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
