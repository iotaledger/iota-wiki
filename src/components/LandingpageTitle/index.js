import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css';


function LandingpageTitle() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();

  return (
    <div className={clsx(styles.heading)}>
      <img className={clsx(styles.headingImage)} src={isDarkTheme ? useBaseUrl('/img/globe_dark.svg') : useBaseUrl('/img/globe_light.svg')} />
      <div>
        <h1 className={clsx(styles.headingTitle)}>{siteConfig.title}</h1>
        <span className={clsx('grey', 'section-header')}>{siteConfig.tagline}</span>
      </div>
    </div>
  )
}

export default LandingpageTitle