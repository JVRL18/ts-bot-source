import { CommandInteraction, ChatInputApplicationCommandData, GuildMember, ApplicationCommandData, CommandInteractionOptionResolver } from 'discord.js'
import Client from '../Client/index.js'

export interface ExtendedInteraction extends CommandInteraction{
    member: GuildMember;
}

interface runOptions{
    client: Client;
    interaction: ExtendedInteraction;
    args: CommandInteractionOptionResolver
}

type Run = (options: runOptions) => any;

export type Command = ApplicationCommandData & {
    name: string;
    description: string;
    testOnly: boolean;
    run: Run
} & ChatInputApplicationCommandData