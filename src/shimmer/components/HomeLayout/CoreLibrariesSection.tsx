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
