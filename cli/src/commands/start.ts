import { Command } from '@oclif/core';

export default class Start extends Command {
  static description = 'Start a development server to view your content.';

  public async run(): Promise<void> {
    this.log(
      'TODO:' +
        '- Check if a .wiki directory exists or create it otherwise.' +
        '- Merge the Docusaurus config in the current directory with a Wiki Docusaurus config.' +
        '- Place or replace the config in the .wiki directory.' +
        '- Run Docusaurus from the .wiki directory.',
    );
  }
}
