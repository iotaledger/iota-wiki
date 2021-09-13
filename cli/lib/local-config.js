"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalConfig = void 0;
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
async function getLocalConfig() {
    var _a;
    const PWD = (_a = process.env.PWD) !== null && _a !== void 0 ? _a : '';
    const configPath = path_1.join(PWD, 'config.json');
    if (!fs_1.existsSync(configPath)) {
        this.error('local config.json not found');
    }
    const userConfig = await fs_extra_1.readJSON(configPath);
    return userConfig;
}
exports.getLocalConfig = getLocalConfig;
