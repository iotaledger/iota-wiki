import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import type { DocMetadata } from '../../plugins/docs/types.d.ts';
import './styles.css';

export default function DocBanner() {
  const ReactMarkdown = require('react-markdown');

  const { bannerContent } = useDoc().metadata as DocMetadata;

  if (!bannerContent) return null;

  return (
    <ReactMarkdown className='doc-banner alert alert--warning margin-bottom--md'>
      {bannerContent}
    </ReactMarkdown>
  );
}
