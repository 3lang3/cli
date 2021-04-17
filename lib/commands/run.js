"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const os = require("os");
const command_1 = require("@oclif/command");
class Run extends command_1.Command {
    getIp() {
        const ip = os.networkInterfaces().en0[1].address;
        return ip;
    }
    async run() {
        const { args, flags } = this.parse(Run);
        if (flags.ip) {
            console.log(flags.ip, args);
            this.log(`IP Address: ${chalk.green(this.getIp())}`);
        }
    }
}
exports.default = Run;
Run.description = "describe the command here";
Run.examples = [`$ langcli ip`];
Run.arr = [1, 2, 3];
Run.flags = {
    help: command_1.flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    ip: command_1.flags.string({ char: "i", required: false, description: "get your ip address" }),
};
Run.args = [{ name: "ip" }];
