
import Enmap = require("enmap")
import { WakFightConfig } from "../interfaces/configs"
import { Client } from "discord.js"
import { DataList } from "../entities/DataList"
import { Personnage } from "../entities/Personnage"

// gestion des events du client
// envoie aux books des infos selon les reactions (même pour la croix)

export default class WakFight {

    constructor(
        public client:Client,
        public configs:Enmap = new Enmap({name:'configs'}),
        public players:Enmap = new Enmap({name:'players'}),
        public personnages:DataList<string,Personnage> = new DataList('personnages'),
        public talents:DataList<string,Talent> = new DataList('talents')
    ){
        const configData:WakFightConfig = {
            debug: false
        }
        configs.ensure('config', configData)
    }

}