import React from 'react';

const FeatureList = [
  {
    title: 'Learn',
    description: (
      <>
        Learn everything you need to know about the technology and how the IOTA eco-system ticks.
      </>
    ),
  },
  {
    title: 'Develop',
    description: (
      <>
        Looking to build on IOTA? A one stop directory and source for developer docs and repos.
      </>
    ),
  },
  {
    title: 'Interact',
    description: (
      <>
        An introduction to the IOTA token, wallets, and safe management and trading of your crypto assets.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className='col col--4'>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className='container padding-vert--xl'>
      <div className='row'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
