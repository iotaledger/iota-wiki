"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const child_process_1 = require("child_process");
const local_config_1 = require("../local-config");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
class Checkout extends command_1.Command {
    async run() {
        var _a;
        const { flags } = this.parse(Checkout);
        const PWD = (_a = process.env.PWD) !== null && _a !== void 0 ? _a : '';
        const userConfig = await local_config_1.getLocalConfig();
        const content = userConfig.content;
        this.log(`Working in ${PWD}`);
        content.forEach(entry => {
            const GIT_ARGS = ['clone'];
            GIT_ARGS.push('--depth 1');
            GIT_ARGS.push(entry.repo);
            if (entry.checkoutParams) {
                GIT_ARGS.push(...entry.checkoutParams);
            }
            child_process_1.spawnSync('git', GIT_ARGS, {
                cwd: path_1.join(PWD, 'external'),
                shell: true,
                stdio: 'inherit',
            });
            if (entry.staticPath) {
                fs_extra_1.copySync(path_1.join(PWD, 'external', entry.repo.split('/').pop(), entry.staticPath), path_1.join(PWD, './static'), { overwrite: flags.overwrite });
            }
        });
    }
}
exports.default = Checkout;
Checkout.description = 'checkout content repositories';
Checkout.examples = [
    '$ iota-wiki-cli checkout',
];
Checkout.flags = {
    help: command_1.flags.help({ char: 'h' }),
    overwrite: command_1.flags.boolean({
        char: 'o',
        description: 'Disable/Enable overwriting of static content',
        default: true,
        allowNo: true
    }),
};
