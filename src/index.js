import { Personagem } from "./modules/Personagem.js"
import { Mago } from "./modules/Mago.js";
import { Arqueiro } from "./modules/Arqueiro.js";
import { PersonagemView } from "./components/PersonagemView.js";
import { ArqueiroMago } from "./modules/ArqueiroMago.js";

const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico];

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))