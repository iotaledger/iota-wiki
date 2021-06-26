import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import clsx from 'clsx';
import styles from './styles.module.css';

const SocialLinkList = [
  {
    title: 'Youtube',
    imageUrl: '/img/youtube.svg',
    url: 'https://www.youtube.com/c/iotafoundation',
    backgroundColor: '#18243C',
  },
  {
    title: 'GitHub',
    imageUrl: '/img/github.svg',
    url: 'https://www.github.com/iotaledger/',
    backgroundColor: '#24314A',
  },
  {
    title: 'Discord',
    imageUrl: '/img/discord.svg',
    url: 'https://discord.iota.org/',
    backgroundColor: '#303C56',
  },
  {
    title: 'Twitter',
    imageUrl: '/img/twitter.svg',
    url: 'https://www.twitter.com/iota/',
    backgroundColor: '#3B4862',
  },
  {
    title: 'Reddit',
    imageUrl: '/img/reddit.svg',
    url: 'https://www.reddit.com/r/iota/',
    backgroundColor: '#47546F',
  },
  {
    title: 'Linkedin',
    imageUrl: '/img/linkedin.svg',
    url: 'https://www.linkedin.com/company/iotafoundation/',
    backgroundColor: '#52607B',
  },
  {
    title: 'Instagram',
    imageUrl: '/img/instagram.svg',
    url: 'https://www.instagram.com/iotafoundation/',
    backgroundColor: '#5E6B87',
  },
]

function SocialLink({ title, imageUrl, url, backgroundColor }) {
  return (
    <a
    className={clsx('padding-horiz--sm padding-vert--md', styles.socialLink)}
    style={{backgroundColor: backgroundColor}}
    href={url}>
      <img className={clsx(styles.socialImage)} src={useBaseUrl(imageUrl)} />
      <div className={clsx(styles.socialTitle)}>{title}</div>
    </a>
  )
}

function SocialBar() {
  return (
    <div className={clsx(styles.socialBar)}>
      {SocialLinkList.map((props, idx) => (
        <SocialLink key={idx} {...props} />
      ))}
    </div>
  )
}

export default SocialBar
