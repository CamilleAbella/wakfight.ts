import { StatName } from "../interfaces/enums"
import Personnage from "./Personnage"
import { map } from "../utils/math"

export default class Fighter {

    health: number
    force: number
    speed: number
    
    constructor(
        public personnage:Personnage
    ){
        this.health = personnage.health
        this.force = personnage.force
        this.speed = personnage.speed
    }

    public buffByPercent( stats:StatName[], percent:number ): Fighter {
        for(const stat of stats)
        this[stat] += map(percent, 0, 100, 0, this[stat])
        return this
    }

    public debuff( stats:StatName[] ): Fighter {
        for(const stat of stats)
        this[stat] = this.personnage[stat]
        return this
    }

}