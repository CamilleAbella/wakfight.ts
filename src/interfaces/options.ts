import { BaseData, Actionnable } from "./types";
import { ClasseName } from "./enums";

export interface PersonnageOptions extends BaseData {
    classe: ClasseName
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