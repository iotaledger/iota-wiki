import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';

const internalConfig = require.resolve('../docusaurus/config/build.js');

export class Build extends Command {
  static paths = [[`build`]];

  directory = Option.String({
    required: false,
  });

  static usage = Command.Usage({
    description: `Build the provided directory (the current working directory by default).`,
  });

  async execute() {
    const directory = this.directory || '.';

    await shell(
      `IOTA_WIKI_DIRECTORY=${directory} npx docusaurus build --config ${internalConfig} ${directory}`,
    );
  }
}
