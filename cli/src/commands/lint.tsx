import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';

const internalConfig = require.resolve(
  '../markdownlint-cli2/default.markdownlint-cli2.cjs',
);

export class Lint extends Command {
  static paths = [[`lint`]];
  config = Option.String(`-c,--config`);
  args = Option.Rest();

  async execute() {
    return await shell(
      'npx markdownlint-cli2-config ' + internalConfig + ' ',
      this.args,
      {
        env: {
          CUSTOM_CONFIG: this.config,
          ...process.env,
        },
      },
    );
  }
}
