#!/usr/bin/env node

import { Builtins, Cli } from 'clipanion';

import { Start } from './commands/start';
import { Setup } from './commands/tutorial/configure';
import { Default } from './commands/default';

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
cli.register(Default);
cli.runExit(args);
