import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import clsx from 'clsx';
import styles from './styles.module.css';

const SocialLinkList = [
  {
    title: 'Youtube',
    imageUrl: '/img/youtube.svg',
    url: 'https://www.youtube.com/c/iotafoundation',
    backgroundColor: '#131F37',
  },
  {
    title: 'GitHub',
    imageUrl: '/img/github.svg',
    url: 'https://www.github.com/iotaledger/',
    backgroundColor: '#3C4964',
  },
  {
    title: 'Discord',
    imageUrl: '/img/discord.svg',
    url: 'https://discord.iota.org/',
    backgroundColor: '#69768F',
  },
  {
    title: 'Twitter',
    imageUrl: '/img/twitter.svg',
    url: 'https://www.twitter.com/iota/',
    backgroundColor: '#8493AD',
  },
  {
    title: 'Reddit',
    imageUrl: '/img/reddit.svg',
    url: 'https://www.reddit.com/r/iota/',
    backgroundColor: '#9FAFCA',
  },
  {
    title: 'Linkedin',
    imageUrl: '/img/linkedin.svg',
    url: 'https://www.linkedin.com/company/iotafoundation/',
    backgroundColor: '#C3D0E4',
  },
  {
    title: 'Instagram',
    imageUrl: '/img/instagram.svg',
    url: 'https://www.instagram.com/iotafoundation/',
    backgroundColor: '#D1DDEF',
  },
]

function SocialLink({ title, imageUrl, url, backgroundColor }) {
  return (
    <div className={clsx('col', styles.socialLink)} style={{backgroundColor: backgroundColor}}>
      <a href={url}>
        <img src={useBaseUrl(imageUrl)} />
        <div>{title}</div>
      </a>
    </div>
  )
}

function SocialBar() {
  return (
    <div className="row row--no-gutters text--center">
      {SocialLinkList.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </div>
  )
}

export default SocialBar
