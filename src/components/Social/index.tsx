import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import './styles.css';
import get_socials_data from '../../../src/helper/socials';

function SocialLink({ url, backgroundColor }) {
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
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'socials' does not exist on type 'ThemeCo... Remove this comment to see the full error message
  const { socials } = useThemeConfig();

  return (
    <div className='social'>
      {socials &&
        socials.map((props, idx) => <SocialLink key={idx} {...props} />)}
    </div>
  );
}

export default Social;
