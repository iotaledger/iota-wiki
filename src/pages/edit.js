import React from 'react';
import Layout from '@theme/Layout';
import Editor from '../components/Editor';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Edit() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <Editor />
    </Layout>
  );
}
