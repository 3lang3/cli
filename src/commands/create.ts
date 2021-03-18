import { Command, flags } from "@oclif/command";
<<<<<<< HEAD
import { exec } from "child_process";
import * as prompts from "prompts";

const questions = [
  {
    type: "select",
    name: "value",
    message: "选择需要创建的项目",
    choices: [
      {
        title: "static site project",
        description: "基于svelte进行架构，适用于官网或者静态展示站点",
        value: "0",
      },
      {
        title: "h5 project",
        description: "基于create-react-app进行架构，适用于稍复杂的移动端项目",
        value: "1",
      },
    ],
    initial: 0,
=======
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
    description: "基于svelte搭建的typescript脚手架",
  },
  {
    title: "cra",
    value: "cra",
    description: "基于create-react-app eject后搭建的typescript脚手架",
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
>>>>>>> master
  },
];

export default class Create extends Command {
<<<<<<< HEAD
  static description = "快速创建一个项目";

  static examples = [
    `$ langcli create
hello world from ./src/hello.ts!
`,
  ];
=======
  static description = "拉取脚手架cli工具";

  static examples = [`$ cli create`];
>>>>>>> master

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

<<<<<<< HEAD
  async test() {
    const response = await prompts(questions as any);
    this.log(response as any); // => { value: 24 }
     exec('npx create-react-app .', (err, stdout) => {
      this.log(stdout as any)
     })
  }

  async run() {
    // const { args, flags } = this.parse(Create);

    this.test();
=======
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
          initial: `yg-as-${template}`,
        },
        {
          onCancel: normalOnCancel,
        }
      );
      shell.exec(
        `git clone --progress ${getGitRepoUrl(template)} ${projectName}`
      );
      this.log(chalk.green(`🚚 clone success`));
      this.log(`🔥 prepare: run [cd ${projectName} && npm install ]`);
      this.log(chalk.bold(`🧀 Boilerplate generate Done`));
    } catch (error) {
      this.log(error.message);
    }
>>>>>>> master
  }
}
