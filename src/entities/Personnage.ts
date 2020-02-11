import Data from "./Data"
import { PersonnageOptions } from "../interfaces/options"

export default class Personnage extends Data implements PersonnageOptions {

    description: string
    health: number
    force: number
    speed: number
    features: string[]
    name: string

    constructor(
        options:PersonnageOptions
    ){ super()
        Object.assign( this, options )
    }

}