import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';

interface HomepageSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const HomepageSection: FC<HomepageSectionProps> = (props) => {
  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && <h2 className='homepage__header'>{props.header}</h2>}
        {props.description && <p className='homepage__description'>{props.description}</p>}
        {props.children}
      </div>
    </div>
  )
}

interface LibrariesLanguagesProps {
  languages?: { [key: string]: string; };
}

const LibrariesLanguages: FC<LibrariesLanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='libraries__languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='libraries__language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  )
} 

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline} >
      <div className='homepage'>
        <HomepageSection className='homepage__section--gradient'>
          <div className='intro'>
            <div className='intro__section'>
              <h1 className='intro__header'>The complete reference for IOTA</h1>
              <p className='intro__description' >
                Build apps capable of taking millions of users on journeys they’ve never been on before. Simple. Scalable. Secure.
              </p>
              <div className='intro__buttons'>
                <Link className='intro__button button button--outline button--primary'>Learn about IOTA</Link>
                <Link className='intro__button button button--primary'>Start building</Link>
              </div>
            </div>
            <img className='intro__image' src='img/homepage/header.svg' />
          </div>
        </HomepageSection>
        <HomepageSection header='About IOTA'>
          <div className='about__cards'>
            <Link className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>{'\ue907'}</div>
                <h3 className='about__header'>What is IOTA?</h3>
                <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas.</p>
              </div>
            </Link>
            <Link className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>{'\ue907'}</div>
                <h3 className='about__header'>Get IOTA tokens</h3>
                <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Link>
            <Link className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>{'\ue90a'}</div>
                <h3 className='about__header'>Pick a wallet</h3>
                <p className='about__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Link>
          </div>
        </HomepageSection>
        <HomepageSection
          header='Shimmer & IOTA'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, pharetra proin quis egestas risus augue ante justo. Pharetra proin quis egestas risus augue ante justo.'
        >
          <div className='networks__cards'>
            <div className='networks__card'>
              <div className='networks__section'>
                <div className='networks__icon networks__icon--shimmer'>{'\ue907'}</div>
                <span className='networks__label'>Experimental</span>
                <h2 className='networks__header'>Shimmer Network</h2>
                <p className='networks__description'>
                  Build and test your project.<br/>Port it later on to the mainnet.
                </p>
              </div>
              <div className='networks__section'>
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
              <div className='networks__section'>
                <div className='networks__icon networks__icon--iota'>{'\ue907'}</div>
                <span className='networks__label'>Stable</span>
                <h2 className='networks__header'>IOTA Mainnet</h2>
                <p className='networks__description'>
                  Sit amet, consectetur adipiscing elit. Augue faucibus pellentesque convallis magna.
                </p>
              </div>
              <div className='networks__section'>
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
        </HomepageSection>
        <HomepageSection header='Start Building'>
          <div className='start-building'>
            <div className='start-building__section'>
              <h2 className='start-building__header'>IOTA Smart Contracts</h2>
              <p className='start-building__description' >
                The IOTA Smart Contracts is a protocol that brings scalable and flexible smart contracts into the IOTA ecosystem.
              </p>
              <div className='start-building__buttons'>
                <Link className='start-building__button button button--outline button--primary'>Learn about ISCP</Link>
                <Link className='start-building__button button button--primary'>Run a smart contract</Link>
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection
          header='Libraries'
          description='With the IOTA client libraries you can easily integrate IOTA into your own applications.'
        >
          <div className='libraries__cards'>
            <div className='libraries__card libraries__card--identity'>
              <div className='libraries__section'>
                <div className='libraries__head'>
                  <div className='libraries__icon'>{'\ue907'}</div>
                  <LibrariesLanguages languages={{
                    'rust': '/',
                  }}/>
                </div>
                <h3 className='libraries__header'>IDENTITY</h3>
                <ul className='libraries__features'>
                  <li className='libraries__feature'>Identity framework</li>
                  <li className='libraries__feature'>Decentralized Identifiers (DID)</li>
                  <li className='libraries__feature'>Verifiable Credentials (VC)</li>
                </ul>
                <Link className='libraries__button button button--outline button--primary'>
                  Create an identity
                </Link>
              </div>
            </div>
            <div className='libraries__card'>
              <div className='libraries__section'>
                <div className='libraries__head'>
                  <div className='libraries__icon'>{'\ue907'}</div>
                  <LibrariesLanguages languages={{
                    'rust': '/',
                    'c': '/',
                    'python': '/',
                    'java': '/',
                    'wasm': '/',
                  }}/>
                </div>
                <h3 className='libraries__header'>IDENTITY</h3>
                <ul className='libraries__features'>
                  <li className='libraries__feature'>Identity framework</li>
                  <li className='libraries__feature'>Decentralized Identifiers (DID)</li>
                  <li className='libraries__feature'>Verifiable Credentials (VC)</li>
                </ul>
                <Link className='libraries__button button button--outline button--primary'>
                  Create an identity
                </Link>
              </div>
            </div>
            <div className='libraries__card'>
              <div className='libraries__section'>
                <div className='libraries__head'>
                  <div className='libraries__icon'>{'\ue907'}</div>
                  <LibrariesLanguages languages={{
                    'rust': '/',
                  }}/>
                </div>
                <h3 className='libraries__header'>IDENTITY</h3>
                <ul className='libraries__features'>
                  <li className='libraries__feature'>Identity framework</li>
                  <li className='libraries__feature'>Decentralized Identifiers (DID)</li>
                  <li className='libraries__feature'>Verifiable Credentials (VC)</li>
                </ul>
                <Link className='libraries__button button button--outline button--primary'>
                  Create an identity
                </Link>
              </div>
            </div>
            <div className='libraries__card'>
              <div className='libraries__section'>
                <div className='libraries__head'>
                  <div className='libraries__icon'>{'\ue907'}</div>
                  <LibrariesLanguages languages={{
                    'rust': '/',
                  }}/>
                </div>
                <h3 className='libraries__header'>IDENTITY</h3>
                <ul className='libraries__features'>
                  <li className='libraries__feature'>Identity framework</li>
                  <li className='libraries__feature'>Decentralized Identifiers (DID)</li>
                  <li className='libraries__feature'>Verifiable Credentials (VC)</li>
                </ul>
                <Link className='libraries__button button button--outline button--primary'>
                  Create an identity
                </Link>
              </div>
            </div>
            <div className='libraries__card'>
              <div className='libraries__section'>
                <div className='libraries__head'>
                  <div className='libraries__icon'>{'\ue907'}</div>
                  <LibrariesLanguages languages={{
                    'rust': '/',
                  }}/>
                </div>
                <h3 className='libraries__header'>IDENTITY</h3>
                <ul className='libraries__features'>
                  <li className='libraries__feature'>Identity framework</li>
                  <li className='libraries__feature'>Decentralized Identifiers (DID)</li>
                  <li className='libraries__feature'>Verifiable Credentials (VC)</li>
                </ul>
                <Link className='libraries__button button button--outline button--primary'>
                  Create an identity
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
      </div>
    </Layout>
  );
}
