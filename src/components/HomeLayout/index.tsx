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
        <div className='homepage__section'>
          <div className='homepage__container'>
            <h2 className='homepage__header'>About IOTA</h2>
            <div className='about__cards'>
              <Link className='about__card'>
                <div className='about__icon'>{'\ue907'}</div>
                <h3 className='about__title'>What is IOTA?</h3>
                <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
              </Link>
              <Link className='about__card'>
                <div className='about__icon'>{'\ue907'}</div>
                <h3 className='about__title'>Get IOTA token</h3>
                <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
              </Link>
              <Link className='about__card'>
                <div className='about__icon'>{'\ue90a'}</div>
                <h3 className='about__title'>Pick a wallet</h3>
                <p className='about__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='homepage__section'>
          <div className='homepage__container'>
            <h2 className='homepage__header'>Shimmer &amp; IOTA</h2>
            <p className='homepage__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas risus augue ante justo. Pharetra proin quis egestas risus augue ante justo.
            </p>
            <div className='networks__cards'>
              <div className='networks__card'>
                <div className='networks__body'>
                  <div className='networks__icon networks__icon--shimmer'>{'\ue907'}</div>
                  <span className='networks__label'>Experimental</span>
                  <h2 className='networks__title'>Shimmer Network</h2>
                  <p className='networks__paragraph'>
                    Build and test your project.<br/>Port it later on to the mainnet.
                  </p>
                </div>
                <div className='networks__body'>
                  <ul className='networks__features'>
                    <li className='networks__feature networks__feature--done'>Lorem ipsum ipsum</li>
                    <li className='networks__feature networks__feature--done'>Lorem ipsum</li>
                    <li className='networks__feature networks__feature--done'>Lorem ipsum Lorem ipsum</li>
                  </ul>
                  <Link className='networks__button button button--outline button--primary'>
                    Learn more
                  </Link>
                </div>
              </div>
              <div className='networks__card'>
                <div className='networks__body'>
                  <div className='networks__icon networks__icon--iota'>{'\ue907'}</div>
                  <span className='networks__label'>Stable</span>
                  <h2 className='networks__title'>IOTA Mainnet</h2>
                  <p className='networks__paragraph'>
                    Sit amet, consectetur adipiscing elit. Augue faucibus pellentesque convallis magna.
                  </p>
                </div>
                <div className='networks__body'>
                  <ul className='networks__features'>
                    <li className='networks__feature networks__feature--done'>Lorem ipsum ipsum</li>
                    <li className='networks__feature'>To be announced</li>
                    <li className='networks__feature'>To be announced</li>
                  </ul>
                  <Link className='networks__button button button--outline button--primary'>
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
