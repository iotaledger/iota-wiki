/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

interface DocEntry {
  id: string;
  path: string;
  sidebar: string;
}

interface DocSection {
  versions: Array<{
    docs: Array<DocEntry>;
  }>;
}

function useFindMatchingEntries(searchingLocation: string): DocEntry[] {
  const locationPaths = searchingLocation.split('/').filter(Boolean);
  const context = useDocusaurusContext();

  const sections = context.globalData[
    'docusaurus-plugin-content-docs'
  ] as Record<string, DocSection>;

  const entries = Object.values(sections)
    .map((section) => {
      const entries = section.versions[0].docs;
      return entries;
    })
    .flat();

  return entries.filter((entry) =>
    locationPaths.some((part) => entry.id.includes(part)),
  );
}

export default function NotFound() {
  const { pathname } = useLocation();
  const possibleMatchingEntries = useFindMatchingEntries(pathname);

  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className='container margin-vert--xl'>
          <div className='row'>
            <div className='col col--6 col--offset-3'>
              <h1 className='hero__title'>
                <Translate
                  id='theme.NotFound.title'
                  description='The title of the 404 page'
                >
                  Page Not Found
                </Translate>
              </h1>
              {possibleMatchingEntries?.length > 0 ? (
                <>
                  <p>
                    It seems we could not find what you're looking for, but you
                    may be interested in:
                  </p>
                  <ul>
                    {possibleMatchingEntries.map((entry) => {
                      return (
                        <li key={entry.path}>
                          <a title={entry.path} href={entry.path}>
                            {entry.path}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <>
                  <p>We could not find what you were looking for.</p>
                  <p>
                    Please contact the owner of the site that linked you to the
                    original URL and let them know their link is broken.
                  </p>
                </>
              )}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
