
import Personnage from "../../entities/Personnage";
import { PersonnageOptions } from "../../interfaces/options";

const options:PersonnageOptions = {
    isMan: true,
    id: 'grougaloragran',
    name: 'Grougaloragran',
    classe: 'dragon',
    description: 'Cachez bien votre bon coeur ou la victoire lui appartiendra.',
    image: 'http://cdn.krosfinder.info/media/krs/back/121_back.jpg',
    PV: 45,
    AT: 40,
    PA: 15,
    features: [ 'clairvoyance', 'gardien' ]
}

module.exports = new Personnage( options )