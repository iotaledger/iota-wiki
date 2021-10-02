import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

const SocialLinkList = [
  {
    title: 'Youtube',
    icon: '\ue907',
    url: 'https://www.youtube.com/c/iotafoundation',
    backgroundColor: 'var(--ifm-color-gray-900)',
  },
  {
    title: 'GitHub',
    icon: '\ue902',
    url: 'https://www.github.com/iotaledger/',
    backgroundColor: '#2C3850',
  },
  {
    title: 'Discord',
    icon: '\ue900',
    url: 'https://discord.iota.org/',
    backgroundColor: '#4B576F',
  },
  {
    title: 'Twitter',
    icon: '\ue906',
    url: 'https://www.twitter.com/iota/',
    backgroundColor: '#6A768E',
  },
  {
    title: 'Reddit',
    icon: '\ue905',
    url: 'https://www.reddit.com/r/iota/',
    backgroundColor: '#7D89A1',
  },
  {
    title: 'Linkedin',
    icon: '\ue904',
    url: 'https://www.linkedin.com/company/iotafoundation/',
    backgroundColor: '#8995AD',
  },
  {
    title: 'Instagram',
    icon: '\ue903',
    url: 'https://www.instagram.com/iotafoundation/',
    backgroundColor: '#99A5BD',
  },
  {
    title: 'Facebook',
    icon: '\ue901',
    url: 'https://www.facebook.com/TheIOTAFoundation/',
    backgroundColor: '#BAC6DE',
  },
];

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
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  backgroundColor: PropTypes.string,
};

function Social() {
  return (
    <div className='social'>
      {SocialLinkList.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </div>
  );
}

export default Social;
