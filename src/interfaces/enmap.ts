import { Collection } from "discord.js"
import Personnage from "../entities/Personnage"

export interface PlayerEnmap {
    personnages: string[]
    personnage: string
    dofusList: string[],
    dofus: string | null
}

export interface GuildEnmap {
    ladderBoard: boolean
    logs: boolean
    prefix: string
}

export interface WakFightEnmap {
    debug: boolean
}