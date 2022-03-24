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
      description: 'the port of the dev server',
      env: 'WIKI_PORT',
      default: 3000,
    }),
    open: Flags.boolean({
      default: true,
      allowNo: true,
    }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Start);
    const { siteDir } = args;
    const { port, open } = flags;

    await execute(
      `yarn docusaurus start ${
        open ? '' : '--no-open'
      } --port ${port} ${siteDir}`,
    );

    this.log(
      'TODO:\n' +
        '[ ] Find the module config file in the Wiki cli siteDir.\n' +
        '[ ] Set WIKI_MODULE_CONFIG to the path of the module config.\n' +
        '[ ] Optionally set WIKI_PORT to what is configured using the port flag.\n' +
        '[ ] Use the module config inside of the Wiki CLI internal config.\n' +
        '[ ] Call docusaurus start using the internal config and the WIKI_PORT.\n',
    );
  }
}
