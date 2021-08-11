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
        Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.
      </>
    ),
  },
  {
    title: 'Use',
    link: 'docs/use/use-cases/industry-applications',
    description: (
      <>
        Learn about IOTAs solutions and how they can be applied in the real world.
      </>
    ),
  },
  {
    title: 'Develop',
    link: 'docs/develop/getting-started/architecture',
    description: (
      <>
        Follow our tutorials and documentation to build your own projects. IOTA supports Rust, C, Go, Java, and Python.
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
        <img className='title__image' src={isDarkTheme ? useBaseUrl('/img/globe_dark.svg') : useBaseUrl('/img/globe_light.svg')} />
        <div>
          <h1 className='title__text'>{siteConfig.title}</h1>
          <span className='title__subtext grey'>{siteConfig.tagline}</span>
        </div>
      </div>
      <div className='margin-top--xl'>
        <div className='section-header text--center margin-bottom--sm' >Get started, right away</div>
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