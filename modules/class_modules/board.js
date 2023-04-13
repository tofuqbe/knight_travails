const LinkedList = require("../data_modules/linked_list");
class Board {
  constructor() {
    this.leastCost = [];
    for (let i = 1; i <= 64; i++) {
      this.leastCost.push(Infinity);
    }
    this.squaresVisited = [];
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        this.squaresVisited.push([i, j, new LinkedList()]);
      }
    }
  }
  accessSquare(position) {
    return (position[0] - 1) * 8 + position[1] - 1;
  }
}

module.exports = Board;
