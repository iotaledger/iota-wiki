import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import path from 'path';

const internalConfig = require.resolve('../docusaurus/config/start.js');

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
    const pathToWatch = path.resolve(directory, 'docusaurus.config.js');

    return await shell(
      `node -e "setTimeout(() => require('open')('http://localhost:3000'), 5000)"
        && npx nodemon --watch ${pathToWatch} --quiet --exec "npx docusaurus start --no-open --config"`,
      [internalConfig, directory],
      {
        env: {
          IOTA_WIKI_DIRECTORY: directory,
          ...process.env,
        },
      },
    );
  }
}
