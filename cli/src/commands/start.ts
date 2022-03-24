import { Command, Flags } from '@oclif/core';
import { execute } from '@yarnpkg/shell';

const internalConfig = require.resolve('../../internal/docusaurus.config.js');

export default class Start extends Command {
  static description = 'Start a development server to preview your content.';

  static args = [
    {
      name: 'siteDir',
      required: false,
      description: 'the path to the module',
      default: '.',
    },
  ];

  static flags = {
    port: Flags.integer({
      name: 'port',
      description: 'the port of the development server',
      env: 'WIKI_PORT',
      default: 3000,
    }),
    open: Flags.boolean({
      name: 'open',
      description: 'wether to automatically open the content in the browser',
      env: 'WIKI_OPEN',
      default: true,
      allowNo: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);
    const { siteDir } = args;
    const { port, open } = flags;

    await execute(
      `WIKI_SITE_DIR=${siteDir} yarn docusaurus start ${
        open ? '' : '--no-open'
      } --port ${port} --config ${internalConfig} ${siteDir}`,
    );
  }
}
