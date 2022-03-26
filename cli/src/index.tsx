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

  config = Option.String('-c,--config', './docusaurus.config.js');

  async execute() {
    render(<Components.Start config={this.config} />);
  }
}

runExit([Default, Start]);
