import { BaseData, Actionnable } from "./types";

export interface PersonnageOptions extends BaseData {
    isMan: boolean
    PV: number
    AT: number
    PA: number,
    features: string[]
}

export interface FeatureOptions extends Actionnable, BaseData {
}

export interface DofusOptions extends Actionnable, BaseData {
}