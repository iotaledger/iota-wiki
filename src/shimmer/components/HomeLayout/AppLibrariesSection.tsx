import AppLibImg from '@site/static/img/homepage/section_application_libraries.png';
import AppLibImgDark from '@site/static/img/homepage/section_application_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';
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
  <div className='libraries__cards'>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Stronghold />
          </div>
          <Languages
            languages={{
              Rust: '/stronghold.rs/reference/overview',
            }}
          />
        </div>
        <h3 className='libraries__header'>Stronghold</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/how_tos/cli/store_read_write'>
              Read and write to the vault
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/stronghold.rs/how_tos/cli/create_snapshot/'>
              Create a snapshot
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/how_tos/cli/read_snapshot'>
              Manage snapshots
            </Link>
          </li>
        </ul>
        <Link
          to='/stronghold.rs/getting_started'
          className='libraries__button button button--outline button--primary'
        >
          Get to know Stronghold
        </Link>
      </div>
    </div>
    <div className='libraries__card libraries__card--wide'>
      <img
        alt='ISC'
        className='libraries__logo'
        src='img/homepage/smartcontracts_bot.svg'
      />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <SmartContracts />
          </div>
        </div>
        <h3 className='libraries__header'>IOTA Smart Contracts</h3>
        <p className='libraries__body'>
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
          {/* <Link
            to='/smart-contracts/guide/evm/examples/introduction'
            className='start-building__button button button--primary'
          >
            Run a smart contract
          </Link> */}
        </div>
      </div>
    </div>
    <div className='libraries__card libraries__card--wide'>
      <img
        className='libraries__logo'
        src='img/homepage/identity_logo.svg'
        alt='Identity'
      />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Identity />
          </div>
        </div>
        <h3 className='libraries__header'>IOTA Identity</h3>
        <p className='libraries__body'>
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
    <div className='spaceholder__card__img'>
      <ThemedImage
        alt='Core Libraries'
        sources={{
          light: AppLibImg,
          dark: AppLibImgDark,
        }}
      />
    </div>
  </div>
);

export default LibrariesSection;
