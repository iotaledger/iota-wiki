import React from 'react';
import Heading from '@theme/Heading';
import { toTitleCase } from '@artsy/to-title-case';
import { clsx } from 'clsx';

export default function Glossary() {
  const glossary = require('@site/config/jargon.js');
  const parse = require('html-react-parser');

  const sortedGlossary = Object.keys(glossary)
    .sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    })
    .reduce((acc, key) => {
      acc[key] = glossary[key];
      return acc;
    }, {});

  let char = '';
  return (
    <>
      {Object.entries(sortedGlossary).map(([key, value]) => {
        let heading = null;
        if (key.charAt(0).toLowerCase() !== char.toLowerCase()) {
          char = key.charAt(0);
          heading = char;
        }

        return (
          <>
            {heading && (
              <Heading
                as='h2'
                title={char}
                className={clsx(
                  'anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module',
                )}
              >
                {char.toUpperCase()}
              </Heading>
            )}
            <Heading
              as='h3'
              title={key}
              className={clsx(
                'anchor anchorWithHideOnScrollNavbar_node_modules-@docusaurus-theme-classic-lib-theme-Heading-styles-module',
              )}
            >
              {toTitleCase(key)}
            </Heading>
            <p>{parse(value)}</p>
          </>
        );
      })}
    </>
  );
}
