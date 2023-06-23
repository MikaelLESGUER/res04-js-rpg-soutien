
class Character {
    constructor() {
        this._posX = 19;
        this._posY = 15;
        this.godMode = false; // Par défaut, le God Mode est désactivé
      }
    
      get posX() {
        return this._posX;
      }
    
      set posX(newPosX) {
        this._posX = newPosX;
      }
    
      get posY() {
        return this._posY;
      }
    
      set posY(newPosY) {
        this._posY = newPosY;
      }
    
      toggleGodMode() {
        this.godMode = !this.godMode;
      }
    
      moveUp() {
        const newPosY = this._posY - 1;
        const newCell = document.getElementById(`${newPosY * 30 + this._posX}`);
    
        if (
          newPosY >= 0 &&
          (this.godMode || (!newCell.classList.contains('water') && !newCell.classList.contains('tree') && !newCell.classList.contains('rock')))
        ) {
          this._posY = newPosY;
          this.render();
        }
      }
    
      moveDown() {
        const newPosY = this._posY + 1;
        const newCell = document.getElementById(`${newPosY * 30 + this._posX}`);
    
        if (
          newPosY <= 19 &&
          (this.godMode || (!newCell.classList.contains('water') && !newCell.classList.contains('tree') && !newCell.classList.contains('rock')))
        ) {
          this._posY = newPosY;
          this.render();
        }
      }
    
      moveLeft() {
        const newPosX = this._posX - 1;
        const newCell = document.getElementById(`${this._posY * 30 + newPosX}`);
    
        if (
          newPosX >= 0 &&
          (this.godMode || (!newCell.classList.contains('water') && !newCell.classList.contains('tree') && !newCell.classList.contains('rock')))
        ) {
          this._posX = newPosX;
          this.render();
        }
      }
    
      moveRight() {
        const newPosX = this._posX + 1;
        const newCell = document.getElementById(`${this._posY * 30 + newPosX}`);
    
        if (
          newPosX <= 29 &&
          (this.godMode || (!newCell.classList.contains('water') && !newCell.classList.contains('tree') && !newCell.classList.contains('rock')))
        ) {
          this._posX = newPosX;
          this.render();
        }
      }
    
      render() {
        let oldBox = document.querySelector(`.character`);  
  
        if(oldBox)  
            oldBox.classList.remove("character"); 
      
        // Ajouter la classe 'character' à la nouvelle cellule du personnage
        const newCell = document.getElementById(`${this._posY * 30 + this._posX}`);
        newCell.classList.add('character');
      }
      
}

export { Character };