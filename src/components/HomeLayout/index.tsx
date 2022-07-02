import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './styles.css';

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} >
      <div className='homepage'>
        <div className='homepage__section homepage__section--gradient'>
          <div className='homepage__container'>
            <div className='header'>
              <div className='header__text'>
                <h1 className='header__title'>The complete reference for IOTA</h1>
                <p className='header__paragraph' >
                  Build apps capable of taking millions of users on journeys they’ve never been on before. Simple. Scalable. Secure.
                </p>
                <div className='header__buttons'>
                  <Link className='header__button button button--outline button--primary'>Learn about IOTA</Link>
                  <Link className='header__button button button--primary'>Start building</Link>
                </div>
              </div>
              <img className='header__image' src='img/homepage/header.svg' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
