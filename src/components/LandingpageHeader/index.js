import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import clsx from 'clsx'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';


import './styles.css'

const ActionList = [
  {
    title: 'Learn',
    link: 'docs/learn/about-iota/an-introduction-to-iota',
    description: (
      <>
        Learn about IOTA, the Tangle, its features, industry applications, network and more.
      </>
    ),
  },
  {
    title: 'Participate',
    link: 'docs/participate/support-the-network/about-nodes',
    description: (
      <>
        Join the network and start using solutions built on top of the Tangle.
      </>
    ),
  },
  {
    title: 'Build',
    link: 'docs/develop/getting-started/architecture',
    description: (
      <>
        Access documentation and guides to build with IOTA in Rust, C, Go, Java or Python.
      </>
    ),
  },
];

function Action({ title, link, description }) {
  let [hovering, setHovering] = useState(false);
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  }

  return (
    <div className='col col--4 margin-vert--md'>
      <div
        className='action padding--lg'
        onClick={handleClick}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <div className='action__header'>
          <span className='action__title'>{title}</span>
          <div href={link} className='action__button'>
            <span className='action__icon material-icons'>
              navigate_next
            </span>
          </div>
        </div>
        <div className={clsx(
          'headline-stick',
          {
            'size-m': hovering,
            'size-s': !hovering
          }
        )}></div>
        <div className='action__description'>
          {description}
        </div>
      </div>
    </div>
  );
}

function LandingpageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();

  return (
    <header className='header padding-vert--xl'>
      <div className='title margin-horiz--sm'>
        <div>
          <h1 className='title__text'>{siteConfig.title}</h1>
          <span className='title__subtext grey'>{siteConfig.tagline}</span>
        </div>
      </div>
      <div className='margin-top--xl'>
        <div className='actionlist row'>
          {ActionList.map((props, idx) => (
            <Action key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default LandingpageHeader