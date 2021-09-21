import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './styles.css';

const SocialLinkList = [
  {
    title: 'Youtube',
    imageUrl: '/img/youtube.svg',
    url: 'https://www.youtube.com/c/iotafoundation',
    backgroundColor: 'var(--ifm-color-gray-900)',
  },
  {
    title: 'GitHub',
    imageUrl: '/img/github.svg',
    url: 'https://www.github.com/iotaledger/',
    backgroundColor: '#2C3850',
  },
  {
    title: 'Discord',
    imageUrl: '/img/discord.svg',
    url: 'https://discord.iota.org/',
    backgroundColor: '#4B576F',
  },
  {
    title: 'Twitter',
    imageUrl: '/img/twitter.svg',
    url: 'https://www.twitter.com/iota/',
    backgroundColor: '#6A768E',
  },
  {
    title: 'Reddit',
    imageUrl: '/img/reddit.svg',
    url: 'https://www.reddit.com/r/iota/',
    backgroundColor: '#7D89A1',
  },
  {
    title: 'Linkedin',
    imageUrl: '/img/linkedin.svg',
    url: 'https://www.linkedin.com/company/iotafoundation/',
    backgroundColor: '#8995AD',
  },
  {
    title: 'Instagram',
    imageUrl: '/img/instagram.svg',
    url: 'https://www.instagram.com/iotafoundation/',
    backgroundColor: '#99A5BD',
  },
  {
    title: 'Facebook',
    imageUrl: '/img/facebook.svg',
    url: 'https://www.facebook.com/TheIOTAFoundation/',
    backgroundColor: '#BAC6DE',
  },
]

function SocialLink({ title, imageUrl, url, backgroundColor }) {
  return (
    <a
    className='social__link padding-horiz--sm padding-vert--md'
    style={{backgroundColor: backgroundColor}}
    href={url}>
      <img alt={title} className='social__image' src={useBaseUrl(imageUrl)} />
      <div className='social__title'>{title}</div>
    </a>
  )
}

function Social() {
  return (
    <div className='social'>
      {SocialLinkList.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </div>
  )
}

export default Social
