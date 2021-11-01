import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Card({ title, image, link, description }) {
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <div className='col margin-vert--md'>
      <div
        className='card card--full-height card-radius--md card--pointer'
        onClick={handleClick}
      >
        {image && (
          <img
            alt={title}
            className='card__image'
            src={useBaseUrl(image)}
            width='337'
            height='342'
          />
        )}
        <div className='card__body padding-horiz--lg padding-bottom--lg'>
          {title && <h3>{title}</h3>}
          {description}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { cards } = useThemeConfig();

  return (
    <Layout description={`${siteConfig.tagline}`}>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>{siteConfig.title}</h1>
            <p className='hero__subtitle margin--none'>{siteConfig.tagline}</p>
          </div>
          {cards && (
            <div className='row'>
              {cards.map((props, idx) => (
                <Card key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
