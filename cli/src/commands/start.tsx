import { Command, Option } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';

const internalConfig = require.resolve('../../internal/docusaurus.config.js');

export class Start extends Command {
  static paths = [[`start`]];

  siteDir = Option.String({ required: false });

  static usage = Command.Usage({
    description: `Start local wiki`,
  });

  async execute() {
    const siteDir = this.siteDir || '.';

    await shell(
      `WIKI_SITE_DIR=${siteDir} docusaurus start --config ${internalConfig} ${siteDir}`,
    );
  }
}
