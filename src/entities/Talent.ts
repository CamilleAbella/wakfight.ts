import { Data } from "./Data";
import { TalentOptions } from "../interfaces/options";

export class Talent extends Data implements TalentOptions {
    
    name: string;

    constructor(
        public options:TalentOptions
    ){ super()
        Object.assign( this, options )
    }

}