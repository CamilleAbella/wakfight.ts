import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    name: 'Décharge de wakfu',
    description: "Lorsqu'{il} attaque, {name} a **1/3 chances** de doubler les dégats de son attaque. Si c'est le cas, {il} perd **{debuff}%** de son *AT* et de ses *PA*.",
    image: 'https://static.ankama.com/wakfu/portal/game/spell/4691.png',
    values: {
        debuff: 15
    },
    hooks: ['attack'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => Math.random() < 1/3,
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        hookArgs.degats *= 2
        perso.buffByPercent( ['AT','PA'], values.debuff * -1 )
    }
}

module.exports = new Feature(options)