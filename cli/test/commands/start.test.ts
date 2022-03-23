import { expect, test } from '@oclif/test';

describe('start', () => {
  test
    .stdout()
    .command(['start'])
    .it('starts a server correctly', (ctx) => {
      expect(ctx.stdout).to.contain(
        '[ ] Find the module config file in the Wiki cli siteDir.',
      );
      expect(ctx.stdout).to.contain(
        '[ ] Set WIKI_MODULE_CONFIG to the path of the module config.',
      );
      expect(ctx.stdout).to.contain(
        '[ ] Optionally set WIKI_PORT to what is configured using the port flag.',
      );
      expect(ctx.stdout).to.contain(
        '[ ] Use the module config inside of the Wiki CLI internal config.',
      );
      expect(ctx.stdout).to.contain(
        '[ ] Call docusaurus start using the internal config and the WIKI_PORT.',
      );
    });
});
