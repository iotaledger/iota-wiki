import React from 'react';
import TutorialCard from '../TutorialCard';
import { useFilteredTutorials } from '../TutorialFilters';

import './styles.css';

function TutorialCards() {
  const filteredTutorials = useFilteredTutorials();

  if (filteredTutorials.length === 0) {
    return (
      <section className='margin-top--lg margin-bottom--xl'>
        <div className='container padding-vert--md text--center'>
          <h2>No result</h2>
        </div>
      </section>
    );
  }

  return (
    <section className='margin-top--lg margin-bottom--xl'>
      <div className='container margin-top--lg'>
        <ul className='tutorial-list'>
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} tutorial={tutorial} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TutorialCards;
