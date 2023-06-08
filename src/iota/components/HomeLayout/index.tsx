import NodesImg from '@site/static/img/homepage/section_nodes.png';
import NodesImgDark from '@site/static/img/homepage/section_nodes_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';
import {
  Chronicle,
  Discord,
  Hornet,
  IntegrationServices,
  IotaCore,
  IotaToken,
  PickAWallet,
  Search,
  Tips,
  Tutorials,
} from '@site/src/common/icons';
import CoreLibrariesSection from './CoreLibrariesSection';
import AppLibrariesSection from './AppLibrariesSection';
import FeaturedSlider from '@site/src/common/components/FeaturedSlider';

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
        <FeaturedSlider />
        <HomepageSection header='Use IOTA'>
          <div className='about__cards'>
            <Link
              to='learn/about-iota/an-introduction-to-iota'
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
            <Link to='learn/iota-token/buying-iota' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <IotaToken />
                </div>
                <h3 className='about__header'>Get IOTA tokens</h3>
                <p className='about__description'>
                  The IOTA token is used to transact value on the IOTA
                  distributed ledger.
                </p>
              </div>
            </Link>
            <Link to='/use/wallets/what-is-a-wallet' className='about__card'>
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
          header='Core Libraries'
          description='With the IOTA core libraries you can easily integrate IOTA into your own applications.'
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
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    <Link to='/hornet/welcome'>
                      A node implementation written in Go
                    </Link>
                  </li>
                  <li className='nodes__feature'>
                    <Link to='/hornet/getting_started'>
                      Participate in the network
                    </Link>
                  </li>
                </ul>
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
                <Chronicle />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Chronicle</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    <Link to='/chronicle/welcome'>
                      Efficient and reliable permanodes
                    </Link>
                  </li>
                  <li className='nodes__feature'>
                    <Link to='/chronicle/welcome#project-structure'>
                      Solution for storing all transactions
                    </Link>
                  </li>
                  <li className='nodes__feature'>
                    <Link to='/chronicle/config_reference'>
                      Managing and accessing the permanode
                    </Link>
                  </li>
                </ul>
                <Link
                  to='chronicle/getting_started'
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
            <Link to='integration-services/welcome' className='resources__card'>
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
