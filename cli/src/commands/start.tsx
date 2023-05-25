import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import path from 'path';

const nodemonConfigPath = require.resolve('../../../../nodemon.json')
const internalConfigPath = require.resolve('../docusaurus/config/start.js');
const externalConfigPath = path.resolve(process.cwd(), 'docusaurus.config.js');

const docusaurusStartCommand = `npx docusaurus start --config ${internalConfigPath} --no-open`;
const nodemonCommand = `npx nodemon --config ${nodemonConfigPath} --watch ${externalConfigPath} --quiet --exec "${docusaurusStartCommand}"`;

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

    return await shell(nodemonCommand, [], options);
  }
}
