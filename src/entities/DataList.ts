import { Collection } from "discord.js"
import { Data } from "./Data"
import { DataName } from "../interfaces/enums"
import { promises as fs } from 'fs'
import * as path from 'path'

export class DataList<V> extends Collection<string,Data> {

    constructor(
        public name:DataName
    ){ super() }

    public rand(): V {
        return this.random() as V
    }

    private load( key:string, value:V ): DataList<V> {
        this.set(key,value)
        return this
    }

    async fetch(): Promise<DataList<V>> {
        this.clear()
        const names = await fs.readdir(path.resolve(__dirname,this.name))
        for(const name of names){
            if(/\.ts$/i.test(name)){
                this.load(name,require(path.resolve(__dirname,this.name,name)))
                delete require.cache[path.resolve(__dirname,this.name,name)]
            }
        }
        return this
    }

}