const LinkedList = require("./Linked_list");
const Graph = require("./graph");

class Board {
  squaresVisited = new LinkedList();
  toBeVisited = new LinkedList();
  constructor() {
    this.leastCost = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        this.leastCost.push([0]);
      }
    }
  }

  accessLeastCost(position) {
    return (position[0] - 1) * 8 + position[1] - 1;
  }
}

class Knight {
  constructor() {
    this.moves = {
      1: [1, 2],
      2: [1, -2],
      3: [-1, 2],
      4: [-1, -2],
      5: [2, 1],
      6: [2, -1],
      7: [-2, 1],
      8: [-2, -2],
    };
  }

  getNewPosition(currentPosition, movement) {
    return [currentPosition[0] + movement[0], currentPosition[1] + movement[1]];
  }

  checkMove(position) {
    if (position[0] < 1 || position[0] > 8) return null;
    if (position[1] < 1 || position[1] > 8) return null;
    return 1;
  }
}

class KnightTravails {
  board = new Board();
  knight = new Knight();

  possibleMoves(currentPosition) {
    let possibleMoves = [];
    for (let i = 1; i <= 8; i++) {
      let newPosition = this.knight.getNewPosition(
        currentPosition,
        this.knight.moves[i]
      );
      if (this.knight.checkMove(newPosition)) {
        if (this.board.squaresVisited.find(newPosition) === null) {
          this.board.squaresVisited.append(newPosition);
          possibleMoves.push(newPosition);
          this.board.leastCost[this.board.accessLeastCost(newPosition)] =
            this.board.leastCost[this.board.accessLeastCost(currentPosition)] +
            1;
        }
      }
    }
    return possibleMoves;
  }

  calcMoves(startPos, endPos) {
    let priorityQueue = [];
    let counter = 0;
    while (this.board.squaresVisited.size < 64) {
      if (priorityQueue.length < 1) {
        let possibleMoves = this.possibleMoves(startPos);
        for (let i = 0; i < possibleMoves.length; i++) {
          priorityQueue.push(possibleMoves[i]);
        }
      } else {
        let possibleMoves = this.possibleMoves(priorityQueue[counter]);
        for (let i = 0; i < possibleMoves.length; i++) {
          priorityQueue.push(possibleMoves[i]);
        }
        counter++;
      }
    }
    return this.board.leastCost[this.board.accessLeastCost(endPos)];
  }
}

let knightTravails = new KnightTravails();

// console.log(knightTravails.board.leastCost);
console.log(knightTravails.calcMoves([3, 5], [6, 8]));
