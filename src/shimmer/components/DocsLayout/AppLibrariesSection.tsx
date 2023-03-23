import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Identity, SmartContracts, Stronghold } from '@site/src/common/icons';

interface LanguagesProps {
  languages?: { [key: string]: string };
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => (
  <div className='nodes__cards'>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Stronghold />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'>
          <Languages
            languages={{
              Rust: '/stronghold.rs/reference/overview',
            }}
          />
        </div>
        <h3 className='nodes__header'>Stronghold</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='/stronghold.rs/how_tos/cli/store_read_write'>
              Read and write to the vault
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/stronghold.rs/how_tos/cli/create_snapshot/'>
              Create a snapshot
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/stronghold.rs/how_tos/cli/read_snapshot'>
              Manage snapshots
            </Link>
          </li>
        </ul>
        <Link
          to='/stronghold.rs/getting_started'
          className='nodes__button button button--outline button--primary'
        >
          Get to know Stronghold
        </Link>
      </div>
    </div>
    <div className='nodes__card '>
      <div className='nodes__icon'>
        <SmartContracts />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'></div>
        <h3 className='nodes__header'>IOTA Smart Contracts</h3>
        <p className='nodes__body'>
          The IOTA Smart Contracts Protocol brings scalable and flexible smart
          contracts to the early stage and still experimental test chain.
        </p>
        <div className='start-building__buttons'>
          <Link
            to='/smart-contracts/overview'
            className='start-building__button button button--outline button--primary'
          >
            Learn about ISC
          </Link>
        </div>
      </div>
    </div>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Identity />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'></div>
        <h3 className='nodes__header'>IOTA Identity</h3>
        <p className='nodes__body'>
          The IOTA Identity framework for Decentralized Identity brings a first
          experimental version to Shimmer
        </p>
        <div className='start-building__buttons'>
          <Link
            to='/identity.rs/introduction'
            className='start-building__button button button--outline button--primary'
          >
            Learn about Identity
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LibrariesSection;
