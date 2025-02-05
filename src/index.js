import { Personagem } from "./modules/Personagem.js"
import { Mago } from "./modules/Mago.js";
import { PersonagemView } from "./components/PersonagemView.js";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);

const personagens = [magoAntonio, magaJulia];

new PersonagemView(personagens).render()