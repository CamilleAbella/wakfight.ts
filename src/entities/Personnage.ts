import Data from "./Data"
import { PersonnageOptions } from "../interfaces/options"
import { ClasseName } from "../interfaces/enums"

export default class Personnage extends Data implements PersonnageOptions {

    public classe: ClasseName
    public id: string
    public isMan: boolean
    public PV: number
    public AT: number
    public PA: number
    public image: string
    public description: string
    public features: string[]
    public name: string

    constructor(
        options:PersonnageOptions
    ){ super()
        Object.assign( this, options )
    }

}