import { Command, flags } from "@oclif/command";
import * as shell from "shelljs";
import * as prompts from "prompts";
import * as chalk from "chalk";

function getGitRepoUrl(str: string): string {
  return `https://github.com/3lang3/template-${str}.git`;
}

function normalOnCancel(): void {
  throw new Error("💻 cli: exit create command");
}

const projects = [
  {
    title: "svelte",
    value: "svelte",
    description: "基于svelte搭建web的typescript脚手架",
  },
  {
    title: "cra",
    value: "cra",
    description: "基于create-react-app搭建响应式h5的typescript脚手架",
  },
  {
    title: "taro",
    value: "taro",
    description: "基于taro的跨端模版",
  },
  {
    title: "adp",
    value: "adp",
    description: "ant-design-pro脚手架",
  },
  {
    title: "tsed",
    value: "tsed",
    description: "基于tsed搭建的nodejs服务框架脚手架",
  },
];

export default class Create extends Command {
  static description = "拉取脚手架cli工具";

  static examples = [`$ cli create`];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Create);

    const name = flags.name ?? "world";
    if (args.file && flags.force) {
      this.log(`hello ${name} from ./src/commands/hello.ts`);
      this.log(`you input --force and --file: ${args.file}`);
    }
    try {
      const { template } = await prompts(
        {
          type: "select",
          name: "template",
          message: "🎯 Select the boilerplate type:",
          choices: projects,
        },
        {
          onCancel: normalOnCancel,
        }
      );
      const { projectName } = await prompts(
        {
          type: "text",
          name: "projectName",
          message: "📥 What is your project name?",
          initial: `fe-yg-${template}`,
        },
        {
          onCancel: normalOnCancel,
        }
      );
      const execRs = shell.exec(
        `git clone --progress ${getGitRepoUrl(template)} ${projectName}`
      );
      if (execRs.code !== 0) {
        throw Error(execRs.stderr)
      }
      this.log(chalk.green(`🚚 clone success`));
      this.log(`🔥 prepare: run [cd ${projectName} && npm install ]`);
      this.log(chalk.bold(`🧀 Boilerplate generate Done`));
    } catch (error) {
      this.log(chalk.red(error.message));
    }
  }
}
