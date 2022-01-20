import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import './styles.css';
import get_socials_data from '@site/src/helper/socials';
import { ThemeConfig } from '@docusaurus/preset-classic';

export interface Social {
  url: string;
  backgroundColor: string;
}

export interface SocialsConfig extends ThemeConfig {
  socials: Social[];
}

function SocialLink({ url, backgroundColor }: Social) {
  const data = get_socials_data(url);
  return (
    <a
      className='social__link padding-horiz--sm padding-vert--md'
      style={{ backgroundColor: backgroundColor }}
      href={url}
    >
      <div className='social__font social__icon'>{data.icon}</div>
      <div className='social__title'>{data.name}</div>
    </a>
  );
}

function Social() {
  const { socials } = useThemeConfig() as SocialsConfig;

  return (
    <div className='social'>
      {socials &&
        socials.map((props, idx) => <SocialLink key={idx} {...props} />)}
    </div>
  );
}

export default Social;
