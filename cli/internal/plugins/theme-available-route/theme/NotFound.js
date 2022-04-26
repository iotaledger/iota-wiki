import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import routes from '@generated/routes';

export default function NotFound() {
  const availableRoutes = routes
    .map(route => route.routes || route)
    .flat()
    .map(route => route.path)
    .filter(route => route.startsWith('/'))
    .sort();
  
  return (
    <Layout title='Available routes'>
      <main className='container padding-top--md padding-bottom--lg theme-doc-markdown markdown'>
        <h1>Available routes</h1>
        {availableRoutes.map((route, i) => (
            <Link to={route} key={i} className='menu__link'>
              {route}
            </Link>
        ))}
      </main>
    </Layout>
  )
}
