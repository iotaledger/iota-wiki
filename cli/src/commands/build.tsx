import { Box, Text } from 'ink';
import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import { render } from 'ink';
import React from 'react';
import Select from 'ink-select-input';

const internalConfig = require.resolve('../docusaurus/config/build.js');

export class Build extends Command {
  static paths = [[`build`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Build current directory or sections of the wiki.`,
  });

  async execute() {
    const directory = this.directory || '.';

    render(<BuildComponent directory={directory} />);
  }
}

const BuildComponent = ({ directory }: { directory: string }) => {
  const directories = [
    { label: 'Current directory', value: '' },
    { label: 'Build', value: 'build' },
    { label: 'Get Started', value: 'get-started' },
    { label: 'Learn', value: 'learn' },
    { label: 'Maintain', value: 'maintain' },
  ];

  const onSelect = async (item) => {
    return await shell(
      'npx docusaurus build --config',
      [internalConfig, directory],
      {
        env: {
          IOTA_WIKI_DIRECTORY: directory,
          SELECTED_SECTION: item.value,
          ...process.env,
        },
      },
    );
  };

  return (
    <Box flexDirection='column'>
      <Text>Which section of the wiki do you want to build?</Text>
      <Box marginTop={1}>
        <Select items={directories} onSelect={onSelect} />
      </Box>
    </Box>
  );
};
