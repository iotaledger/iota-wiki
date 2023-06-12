import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import './styles.css';
import {
  Chronicle,
  Discord,
  Hornet,
  IntegrationServices,
  Search,
  Tutorials,
  Wasp,
} from '@site/src/common/icons';
import CoreLibrariesSection from './CoreLibrariesSection';
import AppLibrariesSection from './AppLibrariesSection';
import ProtocolSection from '@site/src/shimmer/components/DocsLayout/ProtocolSection';

interface DocsSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const DocsSection: FC<DocsSectionProps> = (props) => {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((parts) => parts.toLowerCase())
      .join('-');

  return (
    <div className={clsx('docssection__section', props.className)}>
      <div className='docssection__container'>
        {props.header && (
          <h2 className='docssection__header' id={toKebabCase(props.header)}>
            {props.header}
          </h2>
        )}
        {props.description && (
          <p className='docssection__description'>{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default function DocsLayout() {
  return (
    <>
      <DocsSection
        header='Stardust Protocol'
        description='Stardust is the core protocol in the Shimmer network.'
      >
        <ProtocolSection />
      </DocsSection>
      <DocsSection
        header='IOTA SDK'
        description='With the IOTA SDK you can easily integrate Shimmer into your own applications.'
      >
        <CoreLibrariesSection />
      </DocsSection>
      <DocsSection
        header='Application Libraries'
        description='With the Shimmer application libraries you can easily integrate Shimmer into your own applications.'
      >
        <AppLibrariesSection />
      </DocsSection>
      <DocsSection
        header='Nodes and extensions'
        description='Nodes are the core of an Shimmer network. They run the node software, which gives them read and write access to the Shimmer network. You can extend their functionality with additional extensions such as INX plugins or the Wasp software for Smart Contracts'
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
                <li className='nodes__feature'>
                  <Link to='/hornet/how_tos/post_installation'>
                    Manage your node
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
              <Wasp />
            </div>
            <div className='nodes__section'>
              <h3 className='nodes__header'>Wasp</h3>
              <ul className='nodes__features'>
                <li className='nodes__feature'>
                  <Link to='/smart-contracts/guide/core_concepts/validators'>
                    Validate smart contracts
                  </Link>
                </li>
                <li className='nodes__feature'>
                  <Link to='/smart-contracts/guide/chains_and_nodes/running-a-node'>
                    Run the Shimmer Smart Contract Protocol
                  </Link>
                </li>
                <li className='nodes__feature'>
                  <Link to='/smart-contracts/guide/evm/introduction'>
                    Run EVM/Solidity Smart Contract
                  </Link>
                </li>
              </ul>
              <Link
                to='/smart-contracts/guide/chains_and_nodes/running-a-node'
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
                  <Link to='/chronicle/welcome'>
                    Efficient and reliable permanodes
                  </Link>
                </li>
                <li className='nodes__feature'>
                  <Link to='/chronicle/reference/authentication'>
                    Configure authentication
                  </Link>
                </li>
                <li className='nodes__feature'>
                  <Link to='/chronicle/reference/api'>
                    Using the API of your permanode
                  </Link>
                </li>
              </ul>
              <Link
                to='/chronicle/getting_started/docker'
                className='nodes__button button button--outline button--primary'
              >
                Try the permanode framework
              </Link>
            </div>
          </div>
        </div>
      </DocsSection>
      <DocsSection header='Developer resources'>
        <div className='resources__cards'>
          <Link to='/tutorials?tags=shimmer' className='resources__card'>
            <div className='resources__icon'>
              <Tutorials />
            </div>
            <h3 className='resources__header'>Try a tutorial</h3>
            <p className='resources__description'>
              Now that you understand the basics of Shimmer, it’s time to start
              your own project!
            </p>
          </Link>
          <Link to='/develop/tools' className='resources__card'>
            <div className='resources__icon'>
              <IntegrationServices />
            </div>
            <h3 className='resources__header'>Discover integrations & tools</h3>
            <p className='resources__description'>
              Speed up integration with IOTA tools & solutions
            </p>
          </Link>
        </div>
      </DocsSection>
      <DocsSection header='Further links'>
        <div className='further__cards'>
          <Link to='https://discord.shimmer.network/' className='further__card'>
            <div className='further__section'>
              <div className='further__icon'>
                <Discord />
              </div>
              <h3 className='further__header'>Join Discord</h3>
              <p className='further__description'>
                Check out the Shimmer community on Discord.
              </p>
            </div>
          </Link>
          <Link
            to='https://explorer.shimmer.network/shimmer'
            className='further__card'
          >
            <div className='further__section'>
              <div className='further__icon'>
                <Search />
              </div>
              <h3 className='further__header'>Visit the explorer</h3>
              <p className='further__description'>
                View transactions and data stored on the Shimmer Tangle.
              </p>
            </div>
          </Link>
        </div>
      </DocsSection>
    </>
  );
}
