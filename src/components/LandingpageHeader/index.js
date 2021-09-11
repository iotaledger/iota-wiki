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
    image: 'img/learn.svg',
    link: 'docs/learn/about-iota/an-introduction-to-iota',
    description: (
      <>
        Learn about IOTA, the Tangle, its features, industry applications, network and more.
      </>
    ),
  },
  {
    title: 'Participate',
    image: 'img/participate.svg',
    link: 'docs/participate/support-the-network/about-nodes',
    description: (
      <>
        Join the network and start using solutions built on top of the Tangle.
      </>
    ),
  },
  {
    title: 'Build',
    image: 'img/build.svg',
    link: 'docs/build/getting-started/architecture',
    description: (
      <>
        Access documentation and guides to build with IOTA in Rust, C, Go, Java or Python.
      </>
    ),
  },
];

function Action({ title, image, image_hover, link, description }) {
  let [hovering, setHovering] = useState(false);
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  }

  return (
    <div className='col col--4 margin-vert--md'>
      <div
        className='card'
        onClick={handleClick}
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        <div className='card__image'>
          <img className='image' src={image}/>
        </div>
        <div className='card__body'>
          <h3>{title}</h3>
          <div className={clsx(
            'stick',
            hovering ? 'stick--md' : 'stick--sm',
          )}></div>
          <div className='card__description'>{description}</div>
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
          <div className='title__subtext grey'>{siteConfig.tagline}</div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-container__row row'>
          {ActionList.map((props, idx) => (
            <Action key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default LandingpageHeader