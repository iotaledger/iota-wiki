import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const ActionList = [
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

function Action({ title, link, description}) {
  return (
    <div className='col col--4 margin-vert--md'>
      <div className={clsx('padding--lg', styles.card)}>
        <div className={clsx(styles.header)}>
          <span className={clsx(styles.headerTitle)}>{title}</span>
          <a href={link} className={clsx(styles.button)}>
            <span className={clsx("material-icons", styles.icon)}>
              navigate_next
            </span>
          </a>
        </div>
        <div className="headline-stick size-s"></div>
        <div className={clsx(styles.body)}>
          {description}
        </div>
      </div>
    </div>
  );
}

function LandingpageActions() {
  return (
    <div className='container padding--xl'>
      <div className="section-header grey text--center margin-bottom--sm" >Get started, right away</div>
      <div className='row'>
        {ActionList.map((props, idx) => (
          <Action key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

export default LandingpageActions