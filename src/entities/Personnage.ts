import { Data } from "./Data";
import { PersonnageOptions } from "../interfaces/options";

export class Personnage extends Data implements PersonnageOptions {
    
    name: string;

    constructor(
        options:PersonnageOptions
    ){ super()
        Object.assign( this, options )
    }

}