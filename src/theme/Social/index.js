import React from 'react';
import PropTypes from 'prop-types';
import { useThemeConfig } from '@docusaurus/theme-common';
import './styles.css';

function SocialLink({ title, icon, url, backgroundColor }) {
  return (
    <a
      className='social__link padding-horiz--sm padding-vert--md'
      style={{ backgroundColor: backgroundColor }}
      href={url}
    >
      <div className='social__font social__icon'>{icon}</div>
      <div className='social__title'>{title}</div>
    </a>
  );
}

SocialLink.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
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
