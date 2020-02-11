import Data from "./Data";
import { FeatureOptions } from "../interfaces/options";

export default class Feature extends Data implements FeatureOptions {

    description: string
    conditions: { [id: string]: Function } | Function
    actions: { [id: string]: Function } | Function
    name: string

    constructor(
        public options:FeatureOptions
    ){ super()
        Object.assign( this, options )
    }

}