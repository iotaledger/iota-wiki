import { Command } from '@oclif/command';
export default class Start extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    run(): Promise<void>;
    /**
     * Get the repository's GIT root directory
     * @param directory string
     * @returns string
     */
    getGitRootDirectory(directory: string): string;
}
