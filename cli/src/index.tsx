#!/usr/bin/env node

import { Builtins, Cli } from 'clipanion';

import { Start } from './commands/start';
import { Build } from './commands/build';
import { Check } from './commands/check';
import { Lint } from './commands/lint';
import { Setup } from './commands/tutorial/configure';
import { Default } from './commands/default';

const args = process.argv.slice(2);

const cli = new Cli({
  binaryLabel: `IOTA Wiki Cli`,
  binaryName: `iota-wiki`,
  binaryVersion: `2.1.1`,
});

cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);
cli.register(Start);
cli.register(Build);
cli.register(Check);
cli.register(Lint);
cli.register(Setup);
cli.register(Default);
cli.runExit(args);
