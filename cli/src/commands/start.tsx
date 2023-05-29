import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import path from 'path';
import { generateStartConfig } from '@cli/docusaurus/config/generate';

const nodemonConfigPath = require.resolve('../../../../nodemon.json');

export class Start extends Command {
  static paths = [[`start`], [`tutorial`, `start`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Preview the provided directory (the current working directory by default).`,
  });

  async execute() {
    const directory = this.directory || '.';
    const options = { env: { IOTA_WIKI_DIRECTORY: directory, ...process.env } };

    await generateStartConfig(directory);

    const externalConfigPath = path.resolve(directory, 'docusaurus.config.js');
    const internalConfigPath = require.resolve('../docusaurus/config/start.js');
    const docusaurusStartCommand = `npx docusaurus start --config ${internalConfigPath} --no-open`;
    const nodemonCommand = `npx nodemon --config ${nodemonConfigPath} --watch ${externalConfigPath} --quiet --exec "${docusaurusStartCommand}"`;

    return await shell(nodemonCommand, [], options);
  }
}
