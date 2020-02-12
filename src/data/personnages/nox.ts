import Personnage from "../../entities/Personnage";
import { PersonnageOptions } from "../../interfaces/options";

const options:PersonnageOptions = {
    isMan: true,
    name: 'Nox',
    description: 'Il débarque pour combler sa soif de wakfu !',
    image: 'http://cdn.krosfinder.info/media/krs/back/204_back.jpg',
    PV: 60,
    AT: 10,
    PA: 30,
    features: [ 'extraction', 'decharge' ]
}

module.exports = new Personnage(options)