import { Personagem } from "./modules/Personagem.js"
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { PersonagemView } from "./components/PersonagemView.js";

const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);

const personagens = [magoAntonio, magaJulia, arqueiroBruno];

new PersonagemView(personagens).render()