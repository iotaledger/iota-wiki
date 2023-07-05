import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Shimmer } from '@site/src/common/icons';
import CoreLibImg from '@site/static/img/homepage/section_core_libraries.png';
import CoreLibImgDark from '@site/static/img/homepage/section_core_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';

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
      <img className='libraries__logo' src='/img/homepage/resources_bot.svg' />
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
              Java: '/iota-sdk/getting-started/java',
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
