#!/usr/bin/env node

import { Start } from './commands/start';
import { Builtins, Cli } from 'clipanion';
import { Setup } from './commands/tutorial/configure';

const args = process.argv.slice(2);

const cli = new Cli({
  binaryLabel: `IOTA Wiki Cli`,
  binaryName: `iota-wiki`,
  binaryVersion: `0.1.0`,
});

cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);
cli.register(Start);
cli.register(Setup);
cli.runExit(args);
