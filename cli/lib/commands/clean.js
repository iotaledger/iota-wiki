"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const path_1 = require("path");
const fs_1 = require("fs");
const local_config_1 = require("../local-config");
class Clean extends command_1.Command {
    async run() {
        var _a;
        const PWD = (_a = process.env.PWD) !== null && _a !== void 0 ? _a : '';
        const userConfig = await local_config_1.getLocalConfig();
        const LOCAL_WIKI_FOLDER = path_1.join(PWD, userConfig.localWikiFolder);
        fs_1.rmSync(LOCAL_WIKI_FOLDER, { recursive: true, force: true });
    }
}
exports.default = Clean;
Clean.description = 'completely removes local wiki';
Clean.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
