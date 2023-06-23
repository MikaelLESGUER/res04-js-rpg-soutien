import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    const character = new Character();
character.render();

document.addEventListener('keydown', (event) => {
    if (event.key === 'z' || event.key === 'ArrowUp') {
      character.moveUp();
    } else if (event.key === 's' || event.key === 'ArrowDown') {
      character.moveDown();
    } else if (event.key === 'q' || event.key === 'ArrowLeft') {
      character.moveLeft();
    } else if (event.key === 'd' || event.key === 'ArrowRight') {
      character.moveRight();
    } else if (event.key === ' ') { // Touche espace pour activer/désactiver le God Mode
      character.toggleGodMode();
    }
  });
});