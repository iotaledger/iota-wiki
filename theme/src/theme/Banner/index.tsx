import React from 'react';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { GlobalBannerData } from '@iota-wiki/plugin-docs';
import ReactMarkdown from 'react-markdown';
import './styles.css';

export default function Banner() {
  const { pluginData } = useActivePlugin();
  const { banner } = pluginData as GlobalBannerData;

  if (!banner) return null;

  return (
    <ReactMarkdown className='banner alert alert--warning margin-bottom--md'>
      {banner}
    </ReactMarkdown>
  );
}
