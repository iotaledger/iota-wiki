import React from 'react';
import Layout from '@theme/Layout';
import TeamMember from './member';
import config from './config.json';

export default function Team() {
  return (
    <Layout>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>Wiki Team</h1>
          </div>
          <div className='row'>
            {config &&
              config.map((props, idx) => <TeamMember key={idx} {...props} />)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
