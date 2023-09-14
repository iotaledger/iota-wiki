import CoreLibImg from '@site/static/img/homepage/section_core_libraries.png';
import CoreLibImgDark from '@site/static/img/homepage/section_core_libraries_dark.png';
import ThemedImage from '@theme/ThemedImage';
import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import icons from '@site/src/icons';

const { Shimmer } = icons;

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
        <p>
          The IOTA SDK provides a convenient and efficient way to interact with
          nodes in the Shimmer and IOTA networks running the Stardust protocol.
        </p>
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
