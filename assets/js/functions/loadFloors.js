export default function loadFloors(map)
{
    let id = 0;  
  
for(let i = 0; i < 20; i++)  
{  
    for(let j = 0; j < 30; j++)  
    {  
        let box = document.getElementById(id);  
  
        if(map[i][j] === "G")  
            box.classList.add("grass");  
        else if(map[i][j] === "W")  
            box.classList.add("water");  
        else if(map[i][j] === "D")  
            box.classList.add("dirt");  
        else if(map[i][j] === "S")  
            box.classList.add("sand");  
  
        id++;  
    }  
    }
}
// import { map } from "../data/game-map.js";

// export default function loadFloors(map) {
//     const grid = document.getElementById("grid");
  
//     for (let row = 0; row < map.length; row++) {
//       const gridRow = document.createElement("div");
//       gridRow.className = "row";
  
//       for (let col = 0; col < map[row].length; col++) {
//         const cell = document.createElement("div");
  
//         // Ajoute la classe correspondante en fonction de la valeur dans le tableau
//         switch (map[row][col]) {
//           case "G":
//             cell.className = "grass";
//             break;
//           case "W":
//             cell.className = "water";
//             break;
//           case "S":
//             cell.className = "sand";
//             break;
//           case "D":
//             cell.className = "dirt";
//             break;
//           default:
//             cell.className = "empty";
//             break;
//         }
  
//         gridRow.appendChild(cell);
//       }
  
//       grid.appendChild(gridRow);
//     }
//   }
  