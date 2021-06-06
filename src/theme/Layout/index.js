/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import {ThemeClassNames} from '@docusaurus/theme-common';
import './styles.css';

const FeatureList = [
  {
    title: 'Youtube',
    imageUrl: '../../../static/img/youtube.svg',
    url: 'https://www.youtube.com/c/iotafoundation',
  },
  {
    title: 'Github',
    imageUrl: '../../../static/img/github.svg',
    url: 'https://www.github.com/iotaledger/',
  },
  {
    title: 'Discord',
    imageUrl: '../../../static/img/discord.svg',
    url: 'https://discord.iota.org/',
  },
  {
    title: 'Twitter',
    imageUrl: '../../../static/img/twitter.svg',
    url: 'https://www.twitter.com/iota/',
  },
  {
    title: 'Reddit',
    imageUrl: '../../../static/img/reddit.svg',
    url: 'https://www.reddit.com/r/iota/',
  },
  {
    title: 'LinkedIn',
    imageUrl: '../../../static/img/linkedin.svg',
    url: 'https://www.linkedin.com/company/iotafoundation/',
  },
  {
    title: 'Instagram',
    imageUrl: '../../../static/img/instagram.svg',
    url: 'https://www.instagram.com/iotafoundation/',
  },
];

function Feature({id, title, imageUrl, url }) {
  //TO-DO Calculate color from inner col with id
  return (
    <div className='col'>
      <a href={url}>
      <div className='row'>
          <div className='col'>
            <img className='social' src={imageUrl} />
          </div>
          <div className='social col'>{title}</div>
      </div>
      </a>
    </div>
  );
}

function Layout(props) {
  const {children, noFooter, wrapperClassName, pageClassName} = props;
  useKeyboardNavigation();
  return (
    <LayoutProviders>
      <div className="bg-image">
        <LayoutHead {...props} />

        <SkipToContent />

        <AnnouncementBar />

        <Navbar />
        
        <div
          className={clsx(
            ThemeClassNames.wrapper.main,
            wrapperClassName,
            pageClassName,
          )}>
          {children}
        </div>
      </div>
      {!noFooter && <Footer />}
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} id={idx} {...props} />
        ))}
      </div>
    </LayoutProviders>
  );
}

export default Layout;
