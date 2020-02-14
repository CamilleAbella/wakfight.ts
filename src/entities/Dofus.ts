import Data from "./Data";
import { DofusOptions } from "../interfaces/options";
import { HookName } from "../interfaces/enums";

export default class Dofus extends Data implements DofusOptions {

    id: string
    hooks: HookName[]
    values?: { [id: string]: string | number | boolean }
    image: string
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