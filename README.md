cli
===



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/3lang3/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @sanlang/cli
$ cli COMMAND
running command...
$ cli (-v|--version|version)
@sanlang/cli/0.0.6 darwin-x64 node-v15.8.0
$ cli --help [COMMAND]
USAGE
  $ cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cli create [FILE]`](#cli-create-file)
* [`cli help [COMMAND]`](#cli-help-command)
* [`cli run [IP]`](#cli-run-ip)

## `cli create [FILE]`

拉取脚手架cli工具

```
USAGE
  $ cli create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ cli create
```

_See code: [src/commands/create.ts](https://github.com/3lang3/cli/blob/v0.0.6/src/commands/create.ts)_

## `cli help [COMMAND]`

display help for cli

```
USAGE
  $ cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `cli run [IP]`

describe the command here

```
USAGE
  $ cli run [IP]

OPTIONS
  -h, --help   show CLI help
  -i, --ip=ip  get your ip address

EXAMPLE
  $ langcli ip
```

_See code: [src/commands/run.ts](https://github.com/3lang3/cli/blob/v0.0.6/src/commands/run.ts)_
<!-- commandsstop -->
