import { Collection } from "discord.js";
import { DataList } from "../entities/DataList";
import { Personnage } from "../entities/Personnage";

export interface PlayerEnmap {
    personnages: Collection<string,Personnage>
}

export interface WakFightEnmap {
    debug: boolean
}