import { DofusOptions } from "../../interfaces/options"
import Fight from "../../entities/Fight"
import Fighter from "../../entities/Fighter"
import Dofus from "../../entities/Dofus"

const options:DofusOptions = {
    name: 'Dofus Pourpre',
    description: "Quand votre personnage reçoit des dégats, son *AT* augmente de **{buff}%**. (max **{max}%**)",
    image: 'https://static.ankama.com/dofus/www/game/items/200/23001.png',
    hooks: ['after damage'],
    values: {
        currentBuff: 0,
        buff: 10,
        max: 50
    },
    conditions: (fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any) => values.currentBuff < values.max,
    actions: (fight:Fight, perso:Fighter, ennemy:Fighter, values:any, hookArgs:any) => {
        values.currentBuff += values.buff
        perso.buffByPercent(['AT'],values.buff)
    }
}

module.exports = new Dofus(options)