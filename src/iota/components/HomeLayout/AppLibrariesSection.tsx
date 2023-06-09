import AppLibImg from '@site/static/img/homepage/section_application_libraries.png';
import AppLibImgDark from '@site/static/img/homepage/section_application_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Identity, Streams, Stronghold } from '@site/src/common/icons';

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
    <div className='libraries__card libraries__card--wide'>
      <img className='libraries__logo' src='/img/homepage/identity_logo.svg' />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Identity />
          </div>
          <Languages
            languages={{
              Rust: '/identity.rs/libraries/rust/getting_started',
              WASM: '/identity.rs/libraries/wasm/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Identity</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/identity.rs/decentralized_identity'>
              Decentralized Identities (SSI)
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/identity.rs/concepts/decentralized_identifiers/overview'>
              Decentralized Identifiers (DID)
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/identity.rs/concepts/verifiable_credentials/overview'>
              Verifiable Credentials (VC)
            </Link>
          </li>
        </ul>
        <Link
          to='/identity.rs/introduction'
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
            <Streams />
          </div>
          <Languages
            languages={{
              Rust: '/streams/libraries/rust/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Streams</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/streams/getting_started'>
              Organize and share data securely
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/streams/specs'>Read the specification</Link>
          </li>
        </ul>
        <Link
          to='/streams/welcome'
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
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/how_tos/cli/read_snapshot'>
              Manage snapshots
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/explanations/non-contiguous-data-types'>
              Learn about non-contiguous data types
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
