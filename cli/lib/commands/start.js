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
        var _a, _b, _c, _d;
        const PWD = (_a = process.env.PWD) !== null && _a !== void 0 ? _a : '';
        const userConfig = await local_config_1.getLocalConfig();
        const WORKING_FOLDER = path_1.join(PWD, (_b = userConfig.localWikiFolder) !== null && _b !== void 0 ? _b : '', userConfig.localWikiFolder ? 'iota-wiki' : '');
        const DOCUSAURUS_CONFIG_PATH = path_1.join(WORKING_FOLDER, 'docusaurus.config.js');
        const EXTERNAL_DOCS_CONFIG = fs_1.readFileSync(path_1.join(PWD, (_c = userConfig.configFolder) !== null && _c !== void 0 ? _c : '', 'EXTERNAL_DOCS_CONFIG'), 'utf8');
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS CONFIG \*\//,
            to: EXTERNAL_DOCS_CONFIG,
        });
        const EXTERNAL_DOCS_DROPDOWN_CONFIG = fs_1.readFileSync(path_1.join(PWD, (_d = userConfig.configFolder) !== null && _d !== void 0 ? _d : '', 'EXTERNAL_DOCS_DROPDOWN_CONFIG'), 'utf8');
        await replaceInFile({
            files: DOCUSAURUS_CONFIG_PATH,
            from: /\/\* AUTO GENERATED EXTERNAL DOCS DROPDOWN CONFIG \*\//,
            to: EXTERNAL_DOCS_DROPDOWN_CONFIG,
        });
        if (!userConfig.localWikiFolder)
            return;
        const WIKI_EXTERNAL_FOLDER = path_1.join(WORKING_FOLDER, 'external');
        const WIKI_CONTENT_REPO_FOLDER = path_1.join(WIKI_EXTERNAL_FOLDER, userConfig.repoName);
        fs_extra_1.copySync(path_1.join(PWD, 'static', 'img'), path_1.join(WORKING_FOLDER, 'static', 'img'));
        const runYarn = debounce(() => {
            child_process_1.spawn('yarn', [
                'start',
                '--host',
                '0.0.0.0',
            ], {
                cwd: WORKING_FOLDER,
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
