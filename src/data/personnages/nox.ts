import Personnage from "../../entities/Personnage";
import { PersonnageOptions } from "../../interfaces/options";

const options:PersonnageOptions = {
    isMan: true,
    name: 'Nox',
    description: 'Il débarque pour combler sa soif de wakfu',
    health: 5,
    force: 5,
    speed: 5,
    features: [ 'extraction', 'folie' ]
}

module.exports = new Personnage(options)