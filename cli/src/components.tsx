import React, { FC } from 'react';
import { Text } from 'ink';
import { execute } from '@yarnpkg/shell';

export const Default = () => <Text>Default command</Text>;

interface StartOptions {
  config: string;
  siteDir?: string;
}

export const Start: FC<StartOptions> = ({ config, siteDir = '.' }) => {
  const internalConfig = require.resolve('../internal/docusaurus.config.js');

  execute(
    `WIKI_SITE_DIR=${siteDir} yarn docusaurus start --config ${internalConfig} ${siteDir}`,
  );

  return <Text>Start subcommand with config {config}</Text>;
};

export default {
  Default,
  Start,
};
