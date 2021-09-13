"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const local_config_1 = require("../local-config");
const path_1 = require("path");
class Setup extends command_1.Command {
    async run() {
        var _a, _b;
        const { flags } = this.parse(Setup);
        const ref = (_a = flags.ref) !== null && _a !== void 0 ? _a : '';
        const PWD = (_b = process.env.PWD) !== null && _b !== void 0 ? _b : '';
        const userConfig = await local_config_1.getLocalConfig();
        const WORKING_FOLDER = userConfig.localWikiFolder;
        this.log(`Working in ${path_1.join(PWD, WORKING_FOLDER)}`);
        if (!fs_1.existsSync(WORKING_FOLDER)) {
            fs_1.mkdirSync(WORKING_FOLDER);
        }
        const GIT_ARGS = ['clone'];
        if (ref) {
            GIT_ARGS.push('--branch', ref);
        }
        GIT_ARGS.push('https://github.com/iota-community/iota-wiki.git');
        child_process_1.spawnSync('git', GIT_ARGS, {
            cwd: path_1.join(PWD, WORKING_FOLDER),
            shell: true,
            stdio: 'inherit',
        });
        const WIKI_GIT_FOLDER = path_1.join(path_1.join(PWD, WORKING_FOLDER), fs_1.readdirSync(path_1.join(PWD, WORKING_FOLDER))[0]);
        const WIKI_EXTERNAL_FOLDER = path_1.join(WIKI_GIT_FOLDER, 'external');
        if (!fs_1.existsSync(WIKI_EXTERNAL_FOLDER)) {
            fs_1.mkdirSync(WIKI_EXTERNAL_FOLDER);
        }
        const WIKI_CONTENT_REPO_FOLDER = path_1.join(WIKI_EXTERNAL_FOLDER, userConfig.repoName);
        if (!fs_1.existsSync(WIKI_CONTENT_REPO_FOLDER)) {
            fs_1.mkdirSync(WIKI_CONTENT_REPO_FOLDER);
        }
        const WIKI_CONTENT_DOCS_FOLDER = path_1.join(WIKI_CONTENT_REPO_FOLDER, userConfig.contentFolder);
        if (!fs_1.existsSync(WIKI_CONTENT_DOCS_FOLDER)) {
            fs_1.mkdirSync(WIKI_CONTENT_DOCS_FOLDER);
        }
        child_process_1.spawnSync('yarn', {
            cwd: WIKI_CONTENT_REPO_FOLDER,
            shell: true,
            stdio: 'inherit',
        });
    }
}
exports.default = Setup;
Setup.description = 'setup local wiki';
Setup.examples = [
    '$ iota-wiki-cli setup --ref main',
];
Setup.flags = {
    help: command_1.flags.help({ char: 'h' }),
    ref: command_1.flags.string({ char: 'r', description: 'wiki revison to checkout' }),
};
