import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import path from 'path';

const internalConfigPath = require.resolve('../docusaurus/config/start.js');
const externalConfigPath = path.resolve(process.cwd(), 'docusaurus.config.js')

const startCommand = `npx docusaurus start --config ${internalConfigPath}`;

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

    return await shell(
      `npx nodemon --watch ${externalConfigPath} --quiet --exec "${startCommand} --no-open"`,
      [],
      {
        env: {
          IOTA_WIKI_DIRECTORY: directory,
          ...process.env,
        },
      },
    );
  }
}
