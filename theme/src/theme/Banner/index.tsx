import React, { lazy } from 'react';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { GlobalBannerData } from '@iota-wiki/plugin-docs';

export default function Banner() {
  const { pluginData } = useActivePlugin();
  const { banner } = pluginData as GlobalBannerData;

  if (!banner) return null;

  const ReactMarkdown = lazy(() => import('react-markdown'));
  return <ReactMarkdown>{banner}</ReactMarkdown>;
}
