import { Command } from "@oclif/command";
export default class Create extends Command {
    static description: string;
    static examples: string[];
    static flags: any;
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
