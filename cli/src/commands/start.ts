import { Command } from '@oclif/core';

export default class Start extends Command {
  static description = 'Start a development server to preview your content.';

  public async run(): Promise<void> {
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
