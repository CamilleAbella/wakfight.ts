import Data from "./Data";
import { FeatureOptions } from "../interfaces/options";
import { HookName } from "../interfaces/enums"

export default class Feature extends Data implements FeatureOptions {

    public hooks: HookName[]
    public values?: { [id: string]: string | number | boolean }
    public image: string
    public description: string
    public conditions: { [id: string]: Function } | Function
    public actions: { [id: string]: Function } | Function
    public name: string

    constructor(
        public options:FeatureOptions
    ){ super()
        Object.assign( this, options )
    }

}