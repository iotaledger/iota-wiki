import React from 'react';
import { render } from 'ink';
import { Command, Option, runExit } from 'clipanion';
import Components from './components';

class Base extends Command {
  async execute() {
    render(<Components.Base />);
  }
}

class Start extends Command {
  static paths = [[`start`]];

  config = Option.String();

  async execute() {
    render(<Components.Start config={this.config} />);
  }
}

runExit([Base, Start]);
