import KnightTravails from "./knights_travalis.js";
const grid = document.querySelector(".boardContainer");

let knightTravails = new KnightTravails();

class DispayBoard {
  static generateBoard(squares) {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }

    function changeType(type) {
      return type === "light" ? "dark" : "light";
    }

    let column = 1;
    let type = "light";

    for (let i = 0; i < 64; i++) {
      if (i - 8 * column === 0) {
        column += 1;
        type = changeType(type);
      }
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(type);
      if (i === 0) {
        let knight = document.createElement("div");
        knight.classList.add("knight");
        cell.append(knight);
      }
      grid.append(cell);
      type = changeType(type);
    }
  }
}

DispayBoard.generateBoard(KnightTravails.squares);
