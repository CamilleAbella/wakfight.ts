
import Enmap = require("enmap")
import { WakFightEnmap } from "../interfaces/enmap"
import { Client, Guild, User } from "discord.js"
import DataList from "../entities/DataList"
import Personnage from "../entities/Personnage"
import Talent from "../entities/Feature"
import Temple from "../entities/Temple"
import Player from "../entities/Player"
import Dofus from "../entities/Dofus"
import Feature from "../entities/Feature"

// gestion des events du client
// envoie aux books des infos selon les reactions (même pour la croix)

export default class WakFight {

    constructor(
        public client:Client,
        public configs:Enmap = new Enmap({name:'configs'}),
        public players:Enmap = new Enmap({name:'players'}),
        public guilds:Enmap = new Enmap({name:'guilds'}),
        public personnages:DataList<Personnage> = new DataList('personnages'),
        public features:DataList<Talent> = new DataList('features'),
        public dofus:DataList<Dofus> = new DataList('dofus'),
    ){
        const configData:WakFightEnmap = {
            debug: false
        }
        configs.ensure('config', configData)
    }

    public getPersonnage( id:string ): Personnage { return this.personnages.getItem(id) }
    public getFeature( id:string ): Feature { return this.features.getItem(id) }
    public getDofus( id:string ): Dofus { return this.dofus.getItem(id) }
    public getTemple( guild:Guild ): Temple { return new Temple( this, guild ) }
    public getPlayer( user:User ): Player { return new Player( this, user ) }

}