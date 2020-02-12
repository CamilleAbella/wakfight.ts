import { HookName } from "./enums";
import { MessageEmbedField } from "discord.js";

export interface BaseData {
    name: string
    description: string
    image: string
}

export interface Actionnable {
    hooks: HookName[]
    conditions: { [id:string]:Function } | Function
    actions: { [id:string]:Function } | Function
    values?: { [id:string]:number|boolean|string }
}

export interface Page {
    content: string
    image?: string
    fields?: Field[]
}

export interface Field {
    name:string
    value: string
    inline?: boolean
}