const LinkedList = require("../data_modules/linked_list");
class Board {
  squares = [];

  initializeBoard(startSq = null) {
    this.squares = [];
    for (let i = 0; i < 64; i++) {
      this.squares.push({ turns: Infinity, path: new LinkedList(startSq) });
      if (startSq !== null) {
        this.squares[i].path.size += 1;
      }
    }
    this.squares[Board.access(startSq)].turns = 0;
  }

  static access(position) {
    return (position[0] - 1) * 8 + position[1] - 1;
  }
}

module.exports = Board;
