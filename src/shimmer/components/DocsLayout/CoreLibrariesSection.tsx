import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Shimmer, Wallet } from '@site/src/common/icons';

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
        <Shimmer />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'>
          <Languages
            languages={{
              Rust: '/iota.rs/getting_started/rust',
              NodeJS: '/iota.rs/getting_started/nodejs',
              Python: '/iota.rs/getting_started/python',
              Java: '/iota.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='nodes__header'>Client</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='/iota.rs/how_tos/get_node_info'>
              Interact with the Shimmer network
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/iota.rs/how_tos/prepare_sign_transaction'>
              Send blocks and transactions
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/iota.rs/how_tos/get_address_balances'>
              Query balances
            </Link>
          </li>
        </ul>
        <Link
          to='/iota.rs/welcome'
          className='nodes__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Wallet />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'>
          <Languages
            languages={{
              Rust: '/wallet.rs/getting_started/rust',
              NodeJS: '/wallet.rs/getting_started/nodejs',
              Python: '/wallet.rs/getting_started/python',
              Java: '/wallet.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='nodes__header'>Wallet</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account'>
              Create and manage a wallet
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/wallet.rs/how_tos/outputs_and_transactions/send_transaction'>
              Send and receive tokens
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/wallet.rs/how_tos/native_tokens/mint_native_token'>
              Mint your Native Tokens and NFTs
            </Link>
          </li>
        </ul>
        <Link
          to='/wallet.rs/welcome'
          className='nodes__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Shimmer />
      </div>
      <div className='nodes__section'>
        <div className='nodes__head'>
          <Languages
            languages={{
              TypeScript: '/iotajs/welcome',
            }}
          />
        </div>
        <h3 className='nodes__header'>TypeScript Client</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='/iotajs/how_tos/simple'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/iotajs/how_tos/data'>Send a data message</Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/iotajs/how_tos/transaction'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iotajs/welcome'
          className='nodes__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
  </div>
);

export default LibrariesSection;
