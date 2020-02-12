import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    name: 'Gardien du dofus',
    description: "vole l'effet du dofus adverse",
    image: 'https://static.ankama.com/wakfu/portal/game/spell/5243.png',
    values: {
        
    },
    hooks: ['dofus'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {

    },
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        
    }
}

module.exports = new Feature(options)