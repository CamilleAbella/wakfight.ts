import WakFight from "../app/WakFight"
import { User, Collection } from "discord.js"
import { PlayerEnmap } from "../interfaces/enmap"
import { Personnage } from "./Personnage"

// contient également ses timers

export default class Player {

    constructor(
        private wakfight:WakFight,
        public user:User
    ){
        const personnages:Collection<string,Personnage> = new Collection
        const firstPersonnage = wakfight.personnages.random() as Personnage
        personnages.set(firstPersonnage.name,firstPersonnage)
        const playerData:PlayerEnmap = {
            personnages
        }
        wakfight.players.ensure(user.id, playerData)
    }

}