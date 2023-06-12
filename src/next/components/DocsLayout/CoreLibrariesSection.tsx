import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Shimmer } from '@site/src/common/icons';

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
              Rust: '/iota-sdk/getting_started/rust',
              NodeJS: '/iota-sdk/getting_started/nodejs',
              Python: '/iota-sdk/getting_started/python',
              Wasm: '/iota-sdk/getting_started/wasm',
            }}
          />
        </div>
        <h3 className='nodes__header'>IOTA SDK</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='/iota-sdk/how_tos/accounts_and_addresses/create_address'>
              Create an address
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='/iota-sdk/how_tos/simple_transaction'>
              Send a transaction
            </Link>
          </li>

          <li className='nodes__feature'>
            <Link to='/iota-sdk/how_tos/outputs/features'>
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
  </div>
);

export default LibrariesSection;
