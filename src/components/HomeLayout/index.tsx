import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';
import {
  Bee,
  Chronicle,
  Discord,
  Hornet,
  IntegrationServices,
  IotaCore,
  IotaToken,
  PickAWallet,
  Search,
  Shimmer,
  Tips,
  Tutorials,
  Wasp,
} from '../../icons';
import LibrariesSection from './LibrariesSection';

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
              <p className='intro__description' >
                Build apps capable of taking millions of users on journeys they’ve never been on before. Simple. Scalable. Secure.
              </p>
              <div className='intro__buttons'>
                <Link
                  to='learn/about-iota/an-introduction-to-iota'
                  className='intro__button button button--outline button--primary'
                >
                  Learn about IOTA
                </Link>
                <Link
                  to='libraries/introduction'
                  className='intro__button button button--primary'
                >
                  Start building
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection header='About IOTA'>
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
            <Link to='wallets/what-is-a-wallet' className='about__card'>
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
          header='Shimmer & IOTA'
          description='Shimmer is an L1 innovation network providing the core building blocks for a scalable, modular multi-chain architecture. It is a validation ground for innovations geared for the IOTA network and its native token is $SMR.'
        >
          <div className='networks__cards'>
            <div className='networks__card'>
              <div className='networks__section'>
                <div className='networks__icon networks__icon--shimmer'>
                  <Shimmer />
                </div>
                <span className='networks__label'>Experimental</span>
                <h2 className='networks__header'>Shimmer Network</h2>
                <p className='networks__description'>
                  The L1 innovation network to build and test your project and
                  to validate innovations destined for IOTA.
                </p>
              </div>
              <div className='networks__section'>
                <ul className='networks__features'>
                  <li className='networks__feature networks__feature--done'>
                    Permissionless
                  </li>
                  <li className='networks__feature networks__feature--done'>
                    DeFi enabled
                  </li>
                  <li className='networks__feature networks__feature--done'>
                    Newest features
                  </li>
                </ul>
                <Link
                  to='introduction/develop/welcome'
                  className='networks__button button button--outline button--primary'
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className='networks__card'>
              <div className='networks__section'>
                <div className='networks__icon networks__icon--iota'>
                  <IotaCore />
                </div>
                <span className='networks__label'>Stable</span>
                <h2 className='networks__header'>IOTA Network</h2>
                <p className='networks__description'>
                  The IOTA main network that uses the IOTA tokens. This network
                  is the most stable.
                </p>
              </div>
              <div className='networks__section'>
                <ul className='networks__features'>
                  <li className='networks__feature networks__feature--done'>
                    Permissionless
                  </li>
                  <li className='networks__feature'>DeFi enabled</li>
                  <li className='networks__feature'>DApps and DAOs</li>
                </ul>
                <Link
                  to='introduction/welcome'
                  className='networks__button button button--outline button--primary'
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection header='Start building'>
          <div className='start-building'>
            <div className='start-building__section'>
              <h2 className='start-building__header'>IOTA Smart Contracts</h2>
              <p className='start-building__description'>
                The IOTA Smart Contracts is a protocol that brings scalable and
                flexible smart contracts into the IOTA ecosystem.
              </p>
              <div className='start-building__buttons'>
                <Link
                  to='smart-contracts/overview'
                  className='start-building__button button button--outline button--primary'
                >
                  Learn about ISCP
                </Link>
                <Link
                  to='smart-contracts/guide/evm/examples/introduction'
                  className='start-building__button button button--primary'
                >
                  Run a smart contract
                </Link>
              </div>
            </div>
          </div>
        </HomepageSection>
        <HomepageSection
          header='Libraries'
          description='With the IOTA client libraries you can easily integrate IOTA into your own applications.'
        >
          <LibrariesSection />
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
                    A node implementation writtin in Go
                  </li>
                  <li className='nodes__feature'>Participate in the network</li>
                  <li className='nodes__feature'>Manage your node</li>
                </ul>
                <Link
                  to='hornet/how_tos/hornet_apt_repository'
                  className='nodes__button button button--outline button--primary'
                >
                  Set up a Hornet node
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Bee />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Bee</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    A node implementation in Rust
                  </li>
                  <li className='nodes__feature'>Participate in the network</li>
                  <li className='nodes__feature'>Become a node operator</li>
                </ul>
                <Link
                  to='bee/how_tos/setup_a_node'
                  className='nodes__button button button--outline button--primary'
                >
                  Set up a Bee node
                </Link>
              </div>
            </div>
            <div className='nodes__card'>
              <div className='nodes__icon'>
                <Wasp />
              </div>
              <div className='nodes__section'>
                <h3 className='nodes__header'>Wasp</h3>
                <ul className='nodes__features'>
                  <li className='nodes__feature'>Validate smart contracts</li>
                  <li className='nodes__feature'>
                    Run the IOTA Smart Contract Protocol
                  </li>
                  <li className='nodes__feature'>
                    Deploy your IOTA Smart Contracts
                  </li>
                </ul>
                <Link
                  to='smart-contracts/guide/chains_and_nodes/running-a-node'
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
                <ul className='nodes__features'>
                  <li className='nodes__feature'>
                    Efficient and reliable permanodes
                  </li>
                  <li className='nodes__feature'>
                    Solution for storing all transactions
                  </li>
                  <li className='nodes__feature'>
                    Managing and accessing permanode
                  </li>
                </ul>
                <Link
                  to='chronicle.rs/getting_started'
                  className='nodes__button button button--outline button--primary'
                >
                  Try the permanode framework
                </Link>
              </div>
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
            <Link
              to='https://iotaledger.github.io/tips'
              className='further__card'
            >
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
