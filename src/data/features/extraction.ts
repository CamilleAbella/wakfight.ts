import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    name: 'Extraction du wakfu',
    description: "Avant d'attaquer, {perso} absorbe (**{inc}** + *nombre d'attaques*) pourcents de la *force* et de la *vitesse* adverse. (max **{max}%**)",
    values: {
        inc: 5,
        max: 30
    },
    hooks: ['before attack'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => (values.inc * fight.turnCount) < values.max,
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        const inc = Math.min( values.max, values.inc * fight.turnCount )
        ennemy.buffByPercent( ['force','speed'], inc * -1 )
        perso.buffByPercent( ['force','speed'], inc )
    }
}

module.exports = new Feature(options)