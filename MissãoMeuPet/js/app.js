import {petList} from './petList.js'
import { showPreviewInitialPage } from './petList.js';

let showPreviewCards = document.querySelector('#show-preview-cards')
const getArrayPets = petList.slice(0,4)

showPreviewInitialPage(showPreviewCards, getArrayPets)

// Função de escrita animada na descrição da página INICIAL
new TypeIt(".asyncExec", {
   speed: 80,
   waitUntilVisible: true,
 })
   .type("Nosso proposito", { delay: 300 })
   .move(-4)
   .delete(1)
   .type("ó")
   .move(null, { to: "END" })
   .type("... 🐕")
   .pause(800)
   .delete(1)
   .pause(1000)
   .type("🐕🐩🏠", {delay: 300})
   .go();