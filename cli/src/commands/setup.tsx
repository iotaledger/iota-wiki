import { Command } from 'clipanion';

export class Setup extends Command {
  static paths = [[`setup`]];

  static usage = Command.Usage({
    description: `Setup tutorial repos`,
  });

  async execute() {
    this.context.stdout.write('Setup something!\n');
  }
}
