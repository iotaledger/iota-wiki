"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const child_process_1 = require("child_process");
const path_1 = require("path");
const replaceInFile = require('replace-in-file');
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const syncDirectory = require('sync-directory');
const debounce = require('lodash.debounce');
const local_config_1 = require("../local-config");
class Start extends command_1.Command {
    async run() {
        var _a;
        const PWD = (_a = process.env.PWD) !== null && _a !== void 0 ? _a : '';
        const userConfig = await local_config_1.getLocalConfig();
        const WIKI_GIT_FOLDER = path_1.join(PWD, userConfig.localWikiFolder, 'iota-wiki');
        const DOCUSAURUS_CONFIG_PATH = path_1.join(WIKI_GIT_FOLDER, 'docusaurus.config.js');
        const log = this.log;
        const EXTERNAL_DOCS_CONFIG = fs_1.readFileSync(path_1.join(PWD, 'EXTERNAL_DOCS_CONFIG'), 'utf8');
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS CONFIG \*\//,
            to: EXTERNAL_DOCS_CONFIG,
        });
        const EXTERNAL_DOCS_DROPDOWN_CONFIG = fs_1.readFileSync(path_1.join(PWD, 'EXTERNAL_DOCS_DROPDOWN_CONFIG'), 'utf8');
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS DROPDOWN CONFIG \*\//,
            to: EXTERNAL_DOCS_DROPDOWN_CONFIG,
        });
        const WIKI_EXTERNAL_FOLDER = path_1.join(WIKI_GIT_FOLDER, 'external');
        const WIKI_CONTENT_REPO_FOLDER = path_1.join(WIKI_EXTERNAL_FOLDER, userConfig.repoName);
        fs_extra_1.copySync(path_1.join(PWD, 'static', 'img'), path_1.join(WIKI_GIT_FOLDER, 'static', 'img'));
        log(path_1.resolve(path_1.join(PWD, '..')));
        const runYarn = debounce(() => {
            child_process_1.spawn('yarn', [
                'start',
                '--host',
                '0.0.0.0',
            ], {
                cwd: WIKI_GIT_FOLDER,
                shell: true,
                stdio: 'inherit',
            });
        }, 100);
        syncDirectory(path_1.resolve(path_1.join(PWD, '..')), path_1.resolve(WIKI_CONTENT_REPO_FOLDER), {
            exclude: userConfig.excludeList,
            watch: true,
            afterSync: ({ type, relativePath }) => {
                this.log(`${type}: ${relativePath}`);
                if (type === 'init:hardlink') {
                    runYarn();
                }
            },
        });
    }
}
exports.default = Start;
Start.description = 'start local wiki';
Start.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
