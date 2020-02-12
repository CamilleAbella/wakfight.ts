import { StatName } from "../interfaces/enums"
import Personnage from "./Personnage"
import { map } from "../utils/math"

export default class Fighter {

    public PV: number
    public AT: number
    public PA: number
    
    constructor(
        public personnage:Personnage
    ){
        this.PV = personnage.PV
        this.AT = personnage.AT
        this.PA = personnage.PA
    }

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