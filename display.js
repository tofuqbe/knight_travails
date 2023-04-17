import KnightTravails from "./knights_travalis.js";
import Board from "./modules/class_modules/board.js";

const grid = document.querySelector(".boardContainer");
const buttons = document.querySelectorAll("button");

let knightTravails = new KnightTravails();

class BoardController {
  boardStates = {
    knight: {
      active: true,
      location: 0,
    },
    destination: {
      active: false,
      location: null,
    },
  };

  static generateBoard() {
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
      cell.dataset.index = i;
      grid.append(cell);
      type = changeType(type);
    }
  }

  placeKnight(e) {
    if (
      e.target.classList.contains("cell") &&
      buttonController.buttonStates.knight
    ) {
      grid.children[
        boardController.boardStates.knight.location
      ].children[0].remove();
      let knight = document.createElement("div");
      knight.classList.add("knight");
      e.target.append(knight);
      boardController.boardStates.knight.location = e.target.dataset.index;
      buttonController.resetStates();
      BoardController.toggleCursor();
    }
  }

  placeDestination(e) {
    if (
      e.target.classList.contains("cell") &&
      buttonController.buttonStates.destination
    ) {
      if (this.boardStates.destination.active) {
        grid.children[
          boardController.boardStates.destination.location
        ].children[0].remove();
      }

      let flag = document.createElement("div");
      flag.classList.add("flag");
      e.target.append(flag);
      boardController.boardStates.destination = {
        active: true,
        location: e.target.dataset.index,
      };

      buttonController.resetStates();
      BoardController.toggleCursor();
    }
  }

  static toggleCursor() {
    grid.classList.toggle("active");
  }

  convertToCoordinates(pos) {
    let n = parseInt(pos);
    let coord = [1, 1];
    if (n < 8) return [n + 1, 1];
    while (n - 8 >= 0) {
      coord[1] += 1;
      n -= 8;
    }
    coord[0] += n;
    return coord;
  }

  convertToIndex(coord) {
    return (coord[1] - 1) * 8 + coord[0] - 1;
  }

  createShortestPath(knight, destination) {
    let path = knightTravails.knightMoves(
      this.convertToCoordinates(knight),
      this.convertToCoordinates(destination)
    );
    let current = path.head;
    let array = [];
    while (current) {
      array.push(this.convertToIndex(current.value));
      current = current.next;
    }

    return array;
  }

  clearPath() {
    for (let i = 0; i < 64; i++) {
      grid.children[i].classList.remove("path");
    }
  }

  showPath(array) {
    if (array.length === 0) return;
    grid.children[array[0]].classList.add("path");
    array.shift(array);
    this.showPath(array);
  }
}

class Buttons {
  constructor() {
    this.buttonStates = {
      knight: false,
      destination: false,
      cursor: false,
    };
  }

  resetStates() {
    return (this.buttonStates = {
      knight: false,
      destination: false,
      cursor: false,
    });
  }

  clickButton(e) {
    let type = e.target.id;

    switch (type) {
      case "btn-knight":
        if (!this.buttonStates.cursor) BoardController.toggleCursor();
        this.buttonStates = { knight: true, destination: false, cursor: true };
        break;
      case "btn-destination":
        if (!this.buttonStates.cursor) BoardController.toggleCursor();
        this.buttonStates = { knight: false, destination: true, cursor: true };
        break;
      case "btn-path":
        if (
          boardController.boardStates.knight.location &&
          boardController.boardStates.destination.location
        ) {
          let array = boardController.createShortestPath(
            boardController.boardStates.knight.location,
            boardController.boardStates.destination.location
          );
          boardController.clearPath();
          boardController.showPath(array);
        }
    }
  }
}
let boardController = new BoardController();
let buttonController = new Buttons();

BoardController.generateBoard(KnightTravails.squares);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonController.clickButton(e);
  });
});

grid.addEventListener("click", (e) => {
  boardController.placeKnight(e);
});

grid.addEventListener("click", (e) => {
  boardController.placeDestination(e);
});
