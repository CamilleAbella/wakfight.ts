import Data from "./Data"
import { PersonnageOptions } from "../interfaces/options"

export default class Personnage extends Data implements PersonnageOptions {
    
    isMan: boolean
    PV: number
    AT: number
    PA: number
    image: string
    description: string
    features: string[]
    name: string

    constructor(
        options:PersonnageOptions
    ){ super()
        Object.assign( this, options )
    }

}