import Player from "./Player"
import { Page, Turn } from "../interfaces/types"

export default class Fight {
    
    public turnCount:number
    private turns:Turn[]

    constructor( 
        public players:Player[] 
    ){
        
    }

    public get pages(): Page[] {
        return 
    }

}