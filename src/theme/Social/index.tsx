import React from 'react';
import PropTypes from 'prop-types';
import { useThemeConfig } from '@docusaurus/theme-common';
import './styles.css';
import get_socials_data from '../../../src/helper/socials';

function SocialLink({ url, backgroundColor }) {
  let data = get_socials_data(url);
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

SocialLink.propTypes = {
  url: PropTypes.string,
  backgroundColor: PropTypes.string,
};

function Social() {
  const { socials } = useThemeConfig();

  return (
    <div className='social'>
      {socials &&
        socials.map((props, idx) => <SocialLink key={idx} {...props} />)}
    </div>
  );
}

export default Social;
