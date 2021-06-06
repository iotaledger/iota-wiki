import React from 'react';

const FeatureList = [
  {
    title: 'Learn',
    link: 'docs/learn/about-iota/not-a-blockchain',
    description: (
      <>
        Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.
      </>
    ),
  },
  {
    title: 'Build',
    link: 'docs/build/getting-started/architecture',
    description: (
      <>
        Follow our tutorial to build your own application. IOTA supports Rust, C, Go, Java, and Python. 
      </>
    ),
  },
  {
    title: 'Participate',
    link: 'docs/participate/support-the-network/run-a-node',
    description: (
      <>
        You want to be a part of the IOTA mission? Join the IOTA community or support the network by running a node.
      </>
    ),
  },
];

function Feature({ title, link, description}) {
  return (
    <div className='col col--4'>
      <div className="card">
        <div className="card__header row">
          <div className="col col--9">
            <h2>{title}</h2>
          </div>
          <div className="col col--3">
            <a href={link} className="card-button button button--primary button--block">&#x1433;</a>
          </div>
        </div>
        <hr className="card-horizontal-line"></hr>
        <div className="card__body">
          <p>
            {description}
          </p>
        </div>
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
