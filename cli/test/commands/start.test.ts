import { expect, test } from '@oclif/test';

describe('start', () => {
  test
    .stdout()
    .command(['start'])
    .it(
      'starts a development server using the Docusaurus config in the current directory',
      (ctx) => {
        expect(ctx.stdout).to.contain(
          'TODO:' +
            '- Check if a .wiki directory exists or create it otherwise.' +
            '- Merge the Docusaurus config in the current directory with a Wiki Docusaurus config.' +
            '- Place or replace the config in the .wiki directory.' +
            '- Run Docusaurus from the .wiki directory.',
        );
      },
    );
});
