import WakFight from "../app/WakFight"
import { User, Collection } from "discord.js"
import { PlayerEnmap } from "../interfaces/enmap"
import Personnage from "./Personnage"

// contient également ses timers

export default class Player {

    constructor(
        private wakfight:WakFight,
        public user:User
    ){
        const firstPersonnage = wakfight.personnages.random() as Personnage
        const playerEnmap:PlayerEnmap = {
            personnages: [firstPersonnage.id],
            personnage: firstPersonnage.id,
            dofusList: [],
            dofus: null
        }
        wakfight.players.ensure(user.id, playerEnmap)
    }

    get personnages():string[] { return this.wakfight.players.getProp(this.user.id, 'personnages') }
    get personnage():string { return this.wakfight.players.getProp(this.user.id, 'personnage') }
    set personnage( id:string ){
        if(this.personnages.includes(id))
        this.wakfight.players.setProp(this.user.id, 'personnage', id)
        else throw ''
    }

    get dofusList():string[] { return this.wakfight.players.getProp(this.user.id, 'dofusList') }
    get dofus():string { return this.wakfight.players.getProp(this.user.id, 'dofus') }
    set dofus( id:string ){
        if(this.dofusList.includes(id))
        this.wakfight.players.setProp(this.user.id, 'dofus', id)
    }

}