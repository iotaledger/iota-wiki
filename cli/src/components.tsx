import React, { FC } from 'react';
import { Text } from 'ink';
import { execute } from '@yarnpkg/shell';

export const Default = () => <Text>Default command</Text>;

interface StartOptions {
  siteDir?: string;
}

export const Start: FC<StartOptions> = ({ siteDir = '.' }) => {
  const internalConfig = require.resolve('../internal/docusaurus.config.js');

  execute(
    `WIKI_SITE_DIR=${siteDir} yarn docusaurus start --config ${internalConfig} ${siteDir}`,
  );

  return <Text>Starting preview of {siteDir}</Text>;
};

export default {
  Default,
  Start,
};
