import React from 'react';

const FeatureList = [
  {
    title: 'Learn',
    description: (
      <>
        Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.
      </>
    ),
  },
  {
    title: 'Build',
    description: (
      <>
        Follow our tutorial to build your own application. IOTA supports Rust, C, Go, Java, and Python. 
      </>
    ),
  },
  {
    title: 'Participate',
    description: (
      <>
        You want to be a part of the IOTA mission? Join the IOTA community or support the network by running a node.
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
        <div className='col'>
          <h1 className="text--center" >Get started, right away</h1>
        </div>
      </div>
      <div className='row'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
