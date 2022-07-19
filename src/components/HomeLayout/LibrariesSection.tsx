import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import {
  Identity,
  IotaCore,
  Streams,
  Stronghold,
  Wallet,
} from '../../icons';

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
    <div className='libraries__card libraries__card--identity'>
      <img
        className='libraries__logo'
        src='/img/homepage/identity_logo.svg'
      />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Identity />
          </div>
          <Languages
            languages={{
              Rust: 'identity.rs/libraries/rust/getting_started',
              WASM: 'identity.rs/libraries/wasm/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Identity</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>Identity framework</li>
          <li className='libraries__feature'>
            Decentralized Identifiers (DID)
          </li>
          <li className='libraries__feature'>
            Verifiable Credentials (VC)
          </li>
        </ul>
        <Link
          to='identity.rs/introduction'
          className='libraries__button button button--outline button--primary'
        >
          Create an identity
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <IotaCore />
          </div>
          <Languages
            languages={{
              Rust: 'iota.rs/getting_started/rust',
              NodeJS: 'iota.rs/getting_started/nodejs',
              Python: 'iota.rs/getting_started/python',
              Java: 'iota.rs/getting_started/java/getting_started',
              Wasm: 'iota.rs/getting_started/wasm',
              Javascript: 'iotajs/welcome',
            }}
          />
        </div>
        <h3 className='libraries__header'>Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            Interact with the IOTA network
          </li>
          <li className='libraries__feature'>
            Create messages and transactions
          </li>
          <li className='libraries__feature'>Sign transactions</li>
        </ul>
        <Link
          to='iota.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Interact with the network
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Wallet />
          </div>
          <Languages
            languages={{
              Rust: 'wallet.rs/getting_started/rust',
              NodeJS: 'wallet.rs/getting_started/nodejs',
              Python: 'wallet.rs/getting_started/python',
              Java: 'wallet.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='libraries__header'>Wallet</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            Integrate an IOTA wallet
          </li>
          <li className='libraries__feature'>Store account data</li>
          <li className='libraries__feature'>
            State management and backup
          </li>
        </ul>
        <Link
          to='wallet.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Streams />
          </div>
          <Languages
            languages={{
              Rust: 'streams/libraries/rust/getting_started',
              WASM: 'streams/libraries/wasm/getting_started',
              C: 'streams/libraries/c/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Streams</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            Organize and share data securely
          </li>
          <li className='libraries__feature'>
            Integrity and authenticity
          </li>
          <li className='libraries__feature'>
            Control the ownership of data
          </li>
        </ul>
        <Link
          to='streams/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Try out Streams
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Stronghold />
          </div>
          <Languages
            languages={{
              Rust: 'stronghold.rs/reference/overview',
            }}
          />
        </div>
        <h3 className='libraries__header'>Stronghold</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            Secure management of passwords
          </li>
          <li className='libraries__feature'>
            Secure personal data and private keys
          </li>
          <li className='libraries__feature'>
            Isolating digital secrets
          </li>
        </ul>
        <Link
          to='stronghold.rs/getting_started'
          className='libraries__button button button--outline button--primary'
        >
          Get to know Stronghold
        </Link>
      </div>
    </div>
  </div>
);

export default LibrariesSection;