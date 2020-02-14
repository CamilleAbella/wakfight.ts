import Feature from "../../entities/Feature"
import { FeatureOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"

const options:FeatureOptions = {
    id: 'gardien',
    name: 'Gardien du dofus',
    description: "{name} vole l'effet du dofus adverse et empèche toute altération ou vol du sien.",
    image: 'https://static.ankama.com/wakfu/portal/game/spell/5243.png',
    hooks: ['before fight'],
    conditions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => !ennemy.dofusImmunised,
    actions: ( fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any ) => {
        perso.dofusImmunised = true
        for(const effect in ennemy.dofus){

        }
    }
}

module.exports = new Feature(options)