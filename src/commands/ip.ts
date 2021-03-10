import * as chalk from "chalk";
import * as os from "os";
import { Command, flags } from "@oclif/command";

/**
 * get your local ip address
 */
export const ip = () => {
  const ip = os.networkInterfaces().en0[1].address;
  const options = process.argv.slice(2);
  if (options[0] === "-v") {
    chalk.blue("v1.0.0");
  } else {
    chalk.green(`your ip is: ${ip}`);
  }
};
export default class Hello extends Command {
  static description = "describe the command here";

  static examples = [
    `$ langcli hello
hello world from ./src/hello.ts!
`,
  ];

  static arr = [1, 2, 3];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Hello);

    const name = flags.name ?? "world";
    this.log(`hello ${name} from ./src/commands/hello.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
