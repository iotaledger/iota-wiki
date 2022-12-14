import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

export interface CardProps {
  title: string;
  link: string;
  description: string;
  icon: string;
}

export default function Card({ title, link, description, icon }: CardProps) {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push(link);
  };

  return (
    <div
      className='card card-background card--pointer margin-horiz--md margin-vert--md shadow--md'
      onClick={handleClick}
    >
      <div className='card__header'>
        <h3>{title}</h3>
      </div>
      <div className={clsx(styles.icon, 'card__body')}>{icon}</div>
      <div className='card__footer'>
        <p>{description}</p>
      </div>
    </div>
  );
}
