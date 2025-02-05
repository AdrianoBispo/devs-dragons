import { Personagem } from "./modules/Personagem.js"
import { Mago } from "./modules/Mago.js";
import { PersonagemView } from "./components/PersonagemView.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

//console.log(new Mago('gelo', 7, 9))

const personagens = [personagemPedrinho, personagemJose];

new PersonagemView(personagens).render()