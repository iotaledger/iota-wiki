import React from 'react';
import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import { Box, Text, render } from 'ink';
import Select from 'ink-select-input';

const internalConfig = require.resolve('../docusaurus/config/start.js');

export class Start extends Command {
  static paths = [[`start`], [`tutorial`, `start`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Preview the selected section of the wiki.`,
  });

  async execute() {
    const directory = this.directory || '.';

    render(<StartComponent directory={directory} />);
  }
}

const StartComponent = ({ directory }: { directory: string }) => {
  const directories = [
    { label: 'All', value: '' },
    { label: 'Build', value: 'build' },
    { label: 'Get Started', value: 'get-started' },
    { label: 'Learn', value: 'learn' },
    { label: 'Maintain', value: 'maintain' },
  ];

  const onSelect = async (item) => {
    return await shell(
      'npx docusaurus start --config',
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
      <Text>Which section of the wiki do you want to preview?</Text>
      <Box marginTop={1}>
        <Select items={directories} onSelect={onSelect} />
      </Box>
    </Box>
  );
};
