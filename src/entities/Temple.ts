import WakFight from "../app/WakFight"
import { Guild, Collection } from "discord.js"
import { prefix } from "../app/config.json"
import { GuildEnmap } from "../interfaces/enmap"

// contient également ses timers

export default class Temple {

    constructor(
        private wakfight:WakFight,
        public guild:Guild
    ){
        const guildEnmap:GuildEnmap = {
            ladderBoard: false,
            logs: false,
            prefix: prefix
        }
        wakfight.guilds.ensure(guild.id, guildEnmap)
    }

    set logs( activate:boolean ){ this.wakfight.guilds.setProp(this.guild.id,'logs',activate) }
    get logs():boolean { return this.wakfight.guilds.getProp(this.guild.id,'logs') }
    set ladderBoard( activate:boolean ){ this.wakfight.guilds.setProp(this.guild.id,'ladderBoard',activate) }
    get ladderBoard():boolean { return this.wakfight.guilds.getProp(this.guild.id,'ladderBoard') }
    set prefix( prefix:string ){ this.wakfight.guilds.setProp(this.guild.id,'prefix',prefix) }
    get prefix():string { return this.wakfight.guilds.getProp(this.guild.id,'prefix') }

}