import NodesImg from '@site/static/img/homepage/section_nodes.png';
import NodesImgDark from '@site/static/img/homepage/section_nodes_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';
import icons from '@site/src/icons';
import CoreLibrariesSection from './CoreLibrariesSection';
import AppLibrariesSection from './AppLibrariesSection';

const {
  Chronicle,
  Discord,
  Hornet,
  IntegrationServices,
  IotaCore,
  PickAWallet,
  IotaEVM,
  Search,
  Tips,
  Tutorials,
  Wasp,
} = icons;

interface HomepageSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const HomepageSection: FC<HomepageSectionProps> = (props) => {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((parts) => parts.toLowerCase())
      .join('-');

  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && (
          <h2 className='homepage__header' id={toKebabCase(props.header)}>
            {props.header}
          </h2>
        )}
        {props.description && (
          <p className='homepage__description'>{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <div className='homepage'>
        <HomepageSection className='homepage__section--intro'>
          <div className='intro'>
            <div className='intro__section'>
              <h1 className='intro__header'>{siteConfig.tagline}</h1>
              <p className='intro__description'>
                Build apps capable of taking millions of users on journeys
                they&apos;ve never been on before. Simple. Scalable. Secure.
              </p>
              <div className='intro__buttons'>
                <Link
                  to='/get-started/introduction'
                  className='intro__button button button--outline button--primary'
                >
                  Introduction
                </Link>
                <Link
                  to='/build/welcome'
                  className='intro__button button button--primary'
                >
                  Start building
                </Link>
                <Link
                  to='/isc/getting-started/quick-start/'
                  className='intro__button button button--primary'
                >
                  Build your dApp on IOTA EVM
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection header='Use IOTA'>
          <div className='about__cards'>
            <Link
              to='/get-started/introduction/iota/introduction'
              className='about__card'
            >
              <div className='about__section'>
                <div className='about__icon'>
                  <IotaCore />
                </div>
                <h3 className='about__header'>What is IOTA?</h3>
                <p className='about__description'>
                  An open, feeless and scalable distributed ledger, designed to
                  support data and value transfer.
                </p>
              </div>
            </Link>
            <Link to='/isc/getting-started/quick-start' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <IotaEVM />
                </div>
                <h3 className='about__header'>Build on IOTA EVM</h3>
                <p className='about__description'>
                  Experience seamless dApp development with IOTA EVM&apos;s
                  oracles, subgraphs, Layer 0 interoperability, and robust Blast
                  API endpoints.
                </p>
              </div>
            </Link>
            <Link to='/get-started/wallets' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <PickAWallet />
                </div>
                <h3 className='about__header'>Pick a wallet</h3>
                <p className='about__description'>
                  Choose a wallet to store your public and private keys and
                  interact with the IOTA network.
                </p>
              </div>
            </Link>
          </div>
        </HomepageSection>
        <HomepageSection
          header='IOTA SDK'
          description='With the IOTA SDK you can easily integrate IOTA into your own applications.'
        >
          <CoreLibrariesSection />
        </HomepageSection>
        <HomepageSection
          header='Application Libraries'
          description='With the IOTA application libraries you can easily integrate IOTA into your own applications.'
        >
          <AppLibrariesSection />
        </HomepageSection>
        <HomepageSection
          header='Nodes and extensions'
          description='Nodes are the core of an IOTA network. They run the node software, which gives them read and write access to the IOTA network. You can extend their functionality with additional extensions such as INX plugins or the Wasp software for Smart Contracts'
        >
          <div className='nodes__cards'>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Hornet />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Hornet</h3>
                <p className='libraries__feature'>
                  Hornet is an easy-to-install node software that offers full
                  node capabilities and network updates, granting you direct
                  access to the IOTA network and contributing to its resilience
                  by validating messages and transactions.
                </p>
                <Link
                  to='/hornet/how_tos/using_docker'
                  className='nodes__button button button--outline button--primary'
                >
                  Set up a Hornet node
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Wasp />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Wasp</h3>
                <p className='libraries__feature'>
                  WASP is an INX plugin you can install and use to run your
                  smart contract chain using the IOTA Smart Contracts protocol.
                </p>
                <Link
                  to='/wasp/how-tos/running-a-node'
                  className='nodes__button button button--outline button--primary'
                >
                  Run a smart contract node
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Chronicle />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Chronicle</h3>
                <p className='libraries__feature'>
                  Chronicle is a permanode solution that allows you to store and
                  retrieve IOTA messages and data in real time.
                </p>
                <Link
                  to='/chronicle/welcome'
                  className='nodes__button button button--outline button--primary'
                >
                  Try the permanode framework
                </Link>
              </div>
            </div>
            <div className='spaceholder__card__img'>
              <ThemedImage
                alt='Nodes Setup'
                sources={{
                  light: NodesImg,
                  dark: NodesImgDark,
                }}
              />
            </div>
          </div>
        </HomepageSection>
        <HomepageSection header='Developer resources'>
          <div className='resources__cards'>
            <div className='resources__card resources__card--logo' />
            <Link to='tutorials' className='resources__card'>
              <div className='resources__icon'>
                <Tutorials />
              </div>
              <h3 className='resources__header'>Try a tutorial</h3>
              <p className='resources__description'>
                Now that you understand the basics of IOTA, it’s time to start
                your own project!
              </p>
            </Link>
            <Link to='build/tools' className='resources__card'>
              <div className='resources__icon'>
                <IntegrationServices />
              </div>
              <h3 className='resources__header'>
                Discover integrations & tools
              </h3>
              <p className='resources__description'>
                Speed up integration with IOTA tools & solutions
              </p>
            </Link>
          </div>
        </HomepageSection>
        <HomepageSection header='Further links'>
          <div className='further__cards'>
            <Link to='https://discord.iota.org/' className='further__card'>
              <div className='further__section'>
                <div className='further__icon'>
                  <Discord />
                </div>
                <h3 className='further__header'>Join Discord</h3>
                <p className='further__description'>
                  Check out the IOTA community on Discord.
                </p>
              </div>
            </Link>
            <Link to='/tips' className='further__card'>
              <div className='further__section'>
                <div className='further__icon'>
                  <Tips />
                </div>
                <h3 className='further__header'>
                  Tangle Improvement Proposals
                </h3>
                <p className='further__description'>
                  Propose, discuss and debate ideas.
                </p>
              </div>
            </Link>
            <Link
              to='https://explorer.iota.org/mainnet'
              className='further__card'
            >
              <div className='further__section'>
                <div className='further__icon'>
                  <Search />
                </div>
                <h3 className='further__header'>Visit the explorer</h3>
                <p className='further__description'>
                  View transactions and data stored on the IOTA Tangle.
                </p>
              </div>
            </Link>
          </div>
        </HomepageSection>
      </div>
    </Layout>
  );
}
