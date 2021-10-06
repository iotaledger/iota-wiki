import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Card({ title, link, description, icon }) {
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <div
      className='card card--pointer margin-horiz--md margin-vert--md shadow--md'
      onClick={handleClick}
    >
      <div className='card__header'>
        <h3>{title}</h3>
      </div>
      <div className='card__body icon'>{icon}</div>
      <div className='card__footer'>
        <p>{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
};
