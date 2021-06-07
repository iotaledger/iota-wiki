import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import clsx from 'clsx';
import styles from './styles.module.css';

const SocialLinkList = [
  {
    title: 'Youtube',
    imageUrl: '/img/youtube.svg',
    url: 'https://www.youtube.com/c/iotafoundation',
  },
  {
    title: 'GitHub',
    imageUrl: '/img/github.svg',
    url: 'https://www.github.com/iotaledger/',
  },
  {
    title: 'Discord',
    imageUrl: '/img/discord.svg',
    url: 'https://discord.iota.org/',
  },
  {
    title: 'Twitter',
    imageUrl: '/img/twitter.svg',
    url: 'https://www.twitter.com/iota/',
  },
  {
    title: 'Reddit',
    imageUrl: '/img/reddit.svg',
    url: 'https://www.reddit.com/r/iota/',
  },
  {
    title: 'Linkedin',
    imageUrl: '/img/linkedin.svg',
    url: 'https://www.linkedin.com/company/iotafoundation/',
  },
  {
    title: 'Instagram',
    imageUrl: '/img/instagram.svg',
    url: 'https://www.instagram.com/iotafoundation/',
  },
]

function SocialLink({ id, title, imageUrl, url }) {
  //TO-DO Calculate color from inner col with id
  return (
    <div className={clsx('col', styles.socialLink)}>
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
        <SocialLink key={idx} id={idx} {...props} />
      ))}
    </div>
  )
}

export default SocialBar
