import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    name: 'Décharge de wakfu',
    description: "Lorsqu'{il} attaque, {perso} a **1/3 chances** de doubler les dégats de son attaque. Si c'est le cas, {il} perd **{debuff}%** de sa *force* et de sa *vitesse*.",
    values: {
        debuff: 15
    },
    hooks: ['attack'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => (values.inc * fight.turnCount) < values.max,
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        const inc = Math.min( values.max, values.inc * fight.turnCount )
        ennemy.buffByPercent( ['force','health','speed'], inc * -1 )
        perso.buffByPercent( ['force','health','speed'], inc )
    }
}

module.exports = new Feature(options)