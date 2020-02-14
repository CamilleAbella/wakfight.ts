import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    id: 'clairvoyance',
    name: 'Clarvoyance',
    description: "peut annuler des attaques et peut trouver le point faible",
    image: 'https://static.ankama.com/wakfu/portal/game/spell/866.png',
    values: {

    },
    hooks: ['before damage'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {

    },
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        
    }
}

module.exports = new Feature(options)