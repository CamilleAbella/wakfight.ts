import { StatName } from "../interfaces/enums"
import Personnage from "./Personnage"
import { map } from "../utils/math"
import Fight from "./Fight"
import Player from "./Player"
import WakFight from "../app/WakFight"
import Dofus from "./Dofus"

export default class Fighter {

    public wakfight:WakFight
    public PV: number
    public AT: number
    public PA: number
    public dofusImmunised: boolean = false
    
    constructor(
        public fight:Fight,
        public player:Player,
    ){
        this.wakfight = this.fight.wakfight
        this.PV = this.personnage.PV
        this.AT = this.personnage.AT
        this.PA = this.personnage.PA
    }

    public get personnage(): Personnage { return this.wakfight.getPersonnage(this.player.personnage) }
    public get dofus(): Dofus { return this.wakfight.getDofus(this.player.dofus) }

    public buffByPercent( stats:StatName[], percent:number ): Fighter {
        for(const stat of stats)
        this[stat] += map(percent, 0, 100, 0, this[stat])
        return this
    }

    public getBuffToPercent( stat:StatName ): number {
        return map(this[stat], 0, this.personnage[stat], 0, 100) - 100
    }

    public debuff( stats:StatName[] ): Fighter {
        for(const stat of stats)
        this[stat] = this.personnage[stat]
        return this
    }

}