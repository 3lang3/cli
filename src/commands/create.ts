import { Command, flags } from "@oclif/command";
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
  },
];

export default class Create extends Command {
  static description = "快速创建一个项目";

  static examples = [
    `$ langcli create
hello world from ./src/hello.ts!
`,
  ];

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

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
  }
}
