import React from 'react';
import { useHistory } from 'react-router-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface CardWithImageProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

export default function HomePageCard({
  title,
  image,
  link,
  description,
}: CardWithImageProps) {
  const history = useHistory();

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
