import * as chalk from "chalk";
import * as os from "os";
import { Command, flags } from "@oclif/command";

export default class Run extends Command {
  static description = "describe the command here";

  static examples = [`$ langcli ip`];

  static arr = [1, 2, 3];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    ip: flags.string({ char: "i", required: false, description: "get your ip address" }),
  };

  static args = [{ name: "ip" }];

  getIp() {
    const ip = os.networkInterfaces().en0[1].address;
    return ip
  }

  async run() {
    const { args, flags } = this.parse(Run);

    if (flags.ip) {
      console.log(flags.ip, args)
      this.log(`IP Address: ${chalk.green(this.getIp())}`);
    }
  }
}
