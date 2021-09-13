import { Command, flags } from '@oclif/command';
export default class Setup extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        ref: flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
