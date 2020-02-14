import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    id: 'extraction',
    name: 'Extraction du wakfu',
    description: "Avant d'attaquer, {name} absorbe (**{inc}** + *nombre d'attaques*) pourcents de l'*AT* et des *PA* adverse. (max **{max}%**)",
    image: 'https://static.ankama.com/wakfu/portal/game/spell/4680.png',
    values: {
        inc: 5,
        max: 30
    },
    hooks: ['before attack'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => (values.inc * fight.turnCount) < values.max,
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        const inc = Math.min( values.max, values.inc * fight.turnCount )
        ennemy.buffByPercent( ['AT','PA'], inc * -1 )
        perso.buffByPercent( ['AT','PA'], inc )
    }
}

module.exports = new Feature(options)