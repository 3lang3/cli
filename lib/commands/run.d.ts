import { Command } from "@oclif/command";
export default class Run extends Command {
    static description: string;
    static examples: string[];
    static arr: number[];
    static flags: any;
    static args: {
        name: string;
    }[];
    getIp(): string;
    run(): Promise<void>;
}
