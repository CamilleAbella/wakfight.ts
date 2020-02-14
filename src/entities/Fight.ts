import Player from "./Player"
import { Page, Turn } from "../interfaces/types"
import WakFight from "../app/WakFight"

export default class Fight {
    
    public turnCount:number
    private turns:Turn[]

    constructor( 
        public wakfight:WakFight,
        public players:Player[] 
    ){
        
    }

    public get pages(): Page[] {
        return 
    }

}