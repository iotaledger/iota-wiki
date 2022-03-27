#!/usr/bin/env node

import React from 'react';
import { render } from 'ink';
import { Command, Option, runExit } from 'clipanion';
import { execute as shell } from '@yarnpkg/shell';
import Components from './components';

const internalConfig = require.resolve('../internal/docusaurus.config.js');

class Default extends Command {
  async execute() {
    render(<Components.Default />);
  }
}

class Start extends Command {
  static paths = [[`start`]];

  siteDir = Option.String({ required: false });

  async execute() {
    const siteDir = this.siteDir || '.';

    await shell(
      `WIKI_SITE_DIR=${siteDir} docusaurus start --config ${internalConfig} ${siteDir}`,
    );
  }
}

runExit([Default, Start]);
