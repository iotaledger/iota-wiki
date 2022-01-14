import React from 'react';
import CardWithImage from '/src/theme/CardWithImage';
import Layout from '@theme/Layout';
import { useThemeConfig } from '@docusaurus/theme-common';
import PropTypes from 'prop-types';

export default function HomeLayout({ description, title, tagline }) {
  const { cards } = useThemeConfig();

  return (
    <Layout description={description}>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>{title}</h1>
            <p className='hero__subtitle margin--none'>{tagline}</p>
          </div>
          {cards && (
            <div className='row'>
              {cards.map((props, idx) => (
                <CardWithImage key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

HomeLayout.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
};
