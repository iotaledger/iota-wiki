#!/usr/bin/env node

import React from 'react';
import { render } from 'ink';
import { Command, Option, runExit } from 'clipanion';
import Components from './components';

class Default extends Command {
  async execute() {
    render(<Components.Default />);
  }
}

class Start extends Command {
  static paths = [[`start`]];

  siteDir = Option.String({ required: false });

  async execute() {
    render(<Components.Start siteDir={this.siteDir} />);
  }
}

runExit([Default, Start]);
