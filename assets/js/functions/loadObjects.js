export default function loadObjects(objects)
{
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const gridCell = document.getElementById(`${object.posY * 30 + object.posX}`);
    
        if (object.type === "tree") {
          gridCell.classList.add("tree");
        } else if (object.type === "stump") {
          gridCell.classList.add("stump");
        } else if (object.type === "rock") {
          gridCell.classList.add("rock");
        }
      }
}