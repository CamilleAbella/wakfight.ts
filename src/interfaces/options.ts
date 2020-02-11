import { HookName } from "./enums";

export interface PersonnageOptions {
    isMan: boolean
    name: string
    description: string
    health: number
    force: number
    speed: number,
    features: string[]
}

export interface FeatureOptions {
    name: string
    description: string
    hooks: HookName[],
    conditions: { [id:string]:Function } | Function
    actions: { [id:string]:Function } | Function
    values?: { [id:string]:number|boolean|string }
}

export interface DofusOptions {
    name: string
    description: string
    conditions: { [id:string]:Function } | Function
    actions: { [id:string]:Function } | Function
}