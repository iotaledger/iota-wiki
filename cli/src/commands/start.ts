import { Command, Flags } from '@oclif/core';
import { execute } from '@yarnpkg/shell';

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
      } --port ${port} ${siteDir}`,
    );

    this.log(
      '\nTODO:\n' +
        '[x] Set WIKI_SITE_DIR to the passed siteDir.\n' +
        '[ ] Find the module config file in the Wiki cli siteDir.\n' +
        '[ ] Use the module config inside of the Wiki CLI internal config.\n' +
        '[ ] Set the Docusaurs CLI config flag to the Wiki CLI internal config\n' +
        '[x] Call docusaurus start.\n',
    );
  }
}
