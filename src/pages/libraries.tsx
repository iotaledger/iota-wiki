import Layout from '@theme/Layout';
import LibrariesSection from '../components/HomeLayout/LibrariesSection';
import React from 'react';

export default function Libraries() {
  return (
    <Layout>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>Libraries</h1>
          </div>
          <LibrariesSection />
        </div>
      </div>
    </Layout>
  );
}