import { Command, flags } from "@oclif/command";
export default class Run extends Command {
    static description: string;
    static examples: string[];
    static arr: number[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        ip: flags.IOptionFlag<string | undefined>;
    };
    static args: {
        name: string;
    }[];
    getIp(): string;
    run(): Promise<void>;
}
