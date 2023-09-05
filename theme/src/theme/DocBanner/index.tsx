import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import { DocMetadata } from '@iota-wiki/plugin-docs';
import ReactMarkdown from 'react-markdown';
import './styles.css';

export default function DocBanner() {
  const { bannerContent } = useDoc().metadata as DocMetadata;

  if (!bannerContent) return null;

  return (
    <ReactMarkdown className='doc-banner alert alert--warning margin-bottom--md'>
      {bannerContent}
    </ReactMarkdown>
  );
}
