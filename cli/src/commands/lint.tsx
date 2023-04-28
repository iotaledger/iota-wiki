import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import { ppath } from '@yarnpkg/fslib';

export class Lint extends Command {
  static paths = [[`lint`]];
  config = Option.String(`-c,--config`)
  args = Option.Rest()

  async execute() {
    console.log("Running linting...")
    console.log(this.config)
    console.log(this.args)
    console.log("CLI:", ppath.cwd())
    if (this.config) {
      console.log('npx markdownlint-cli2-config', ...[this.config, ...this.args])
      return await shell(
        'npx markdownlint-cli2-config',
        [this.config, ...this.args],
      );
    }
    console.log('npx markdownlint-cli2', ...this.args)
    return await shell(
      'npx markdownlint-cli2',
      this.args,
      {
        cwd: ppath.cwd(),
      }
    );
  }
}
