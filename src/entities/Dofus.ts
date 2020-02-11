import Data from "./Data";
import { DofusOptions } from "../interfaces/options";

export default class Dofus extends Data implements DofusOptions {

    description: string
    conditions: { [id: string]: Function }
    actions: { [id: string]: Function }
    name: string

    constructor(
        options:DofusOptions
    ){ super()
        Object.assign( this, options )
    }

}