const LinkedList = require("./Linked_list");
const Graph = require("./graph");

let 

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

  checkMove(currentPos) {
    if (
      currentPos[0] < 1 ||
      currentPos[0] > 8 ||
      currentPos[1] < 1 ||
      currentPos[1] > 8
    ) {
      return null;
    }
    return 1;
  }

  checkInitialMoves(start) {
    let count = 0;
    for (let i = 1; i <= 8; i++) {
      let newPosition = [
        start[0] + this.moves[i][0],
        start[1] + this.moves[i][1],
      ];
      if (this.checkMove(newPosition)) count++;
    }
    return count;
  }

  bestMove()

  calcMove(start, end, board = new Graph(this.checkInitialMoves(start))) {
    // base case
    if (start[0] === end[0] && start[1] === end[1]) return n;
    let vertice = 0;
    for (let i = 1; i <= 8; i++) {
      let newPosition = [
        start[0] + this.moves[i][0],
        start[1] + this.moves[i][1],
      ];

      if (
        this.checkMove(newPosition) &&
        squaresVisited.find(newPosition) === null
      ) {
        board.list[vertice].append(newPosition);
        if (newPosition[0] === end[0] && newPosition[1] === end[1])
          return board.list[vertice].size;
        vertice++;
        squaresVisited.append(newPosition);
        this.calcMove(newPosition, end, board);
      }
    }

    return board;
  }
}

let braveKnight = new Knight();

// braveKnight.calcMove([2, 3], [3, 5]).list[0].size;

console.log(braveKnight.calcMove([2, 3], [1, 1]));
