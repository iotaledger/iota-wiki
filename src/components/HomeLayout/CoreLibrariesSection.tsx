import CoreLibImg from '@site/static/img/homepage/section_core_libraries.png';
import CoreLibImgDark from '@site/static/img/homepage/section_core_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { IotaCore, Shimmer, Wallet } from '@site/src/common/icons';

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
      <img className='libraries__logo' src='/img/homepage/sdk_card_anim.svg' />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Shimmer />
          </div>
          <Languages
            languages={{
              Rust: '/iota-sdk/getting-started/rust',
              NodeJS: '/iota-sdk/getting-started/nodejs',
              Python: '/iota-sdk/getting-started/python',
              WASM: '/iota-sdk/getting-started/wasm',
            }}
          />
        </div>
        <h3 className='libraries__feature'>IOTA SDK</h3>
        <ul className='libraries__feature'>
          <li className='libraries__feature'>
            <Link to='/iota-sdk/how-tos/accounts-and-addresses/create-address'>
              Create an address
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota-sdk/how-tos/simple-transaction'>
              Send a transaction
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota-sdk/how-tos/outputs/features'>
              Test the latest output features
            </Link>
          </li>
        </ul>
        <Link
          to='/iota-sdk/welcome'
          className='nodes__button button button--outline button--primary'
        >
          Get started
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
              Rust: '/iota.rs/getting_started/rust',
              NodeJS: '/iota.rs/getting_started/nodejs',
              Python: '/iota.rs/getting_started/python',
              Java: '/iota.rs/getting_started/java/getting_started',
              Wasm: '/iota.rs/getting_started/wasm',
            }}
          />
        </div>
        <h3 className='libraries__header'>Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iota.rs/examples/get_info'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/examples/data_message'>Send a data message</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/explanations/messages_payloads_and_transactions'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iota.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
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
              Rust: '/wallet.rs/getting_started/rust',
              NodeJS: '/wallet.rs/getting_started/nodejs',
              Python: '/wallet.rs/getting_started/python',
              Java: '/wallet.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='libraries__header'>Wallet</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/explanations/nutshell'>
              The library in a nutshell
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#backup-and-restore-example'>
              Store account data
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#transfer-example'>
              Transfer tokens
            </Link>
          </li>
        </ul>
        <Link
          to='/wallet.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='spaceholder__card__img'>
      <ThemedImage
        alt='Core Libraries'
        sources={{
          light: CoreLibImg,
          dark: CoreLibImgDark,
        }}
      />
    </div>
  </div>
);

export default LibrariesSection;
