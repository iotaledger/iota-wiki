import { test } from '@oclif/test';

describe('start', () => {
  test
    .stdout()
    .command(['start', '--port=3001', '--no-open', './test/module'])
    .it('starts a server correctly');
});
