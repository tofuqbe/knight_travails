const Knight = require("./modules/class_modules/knight");
const Board = require("./modules/class_modules/board");

let board = new Board();

class KnightTravails {
  possibleMoves(prevSq) {
    let possibleMoves = [];
    for (let i = 1; i <= 8; i++) {
      let currentSq = Knight.newPos(prevSq, Knight.moves[i]);
      if (Knight.checkMove(currentSq)) {
        this.updateSquare(prevSq, currentSq);
        possibleMoves.push(currentSq);
      }
    }
    return possibleMoves;
  }

  updateSquare(prevSq, currentSq) {
    let currentSquare = board.squares[Board.access(currentSq)];
    let prevSquare = board.squares[Board.access(prevSq)];
    if (currentSquare.turns > prevSquare.turns + 1) {
      currentSquare.turns = prevSquare.turns + 1;
      currentSquare.path.head.next = null;
      let currentNode = prevSquare.path.head.next;
      while (currentNode) {
        currentSquare.path.append(currentNode.value);
        currentNode = currentNode.next;
      }
      currentSquare.path.append(currentSq);
      board.squares[Board.access(currentSq)] = currentSquare;
    }
  }

  printShortestPath(startSq, targetSq) {
    let string = `> knightMoves([${startSq}],[${
      targetSq.tail.value
    }])\n=> You made it in ${targetSq.size - 1} moves! Here's your path:\n`;
    let current = targetSq.head;
    while (current) {
      string += current.value + "\n";
      current = current.next;
    }
    return string.slice(0, -1);
  }

  knightMoves(startSq, targetSq) {
    board.initializeBoard(startSq);
    let queue = [startSq];
    for (let i = 0; i < queue.length; i++) {
      let nextMoves = this.possibleMoves(queue[i]);
      for (let j = 0; j < nextMoves.length; j++) {
        queue.push(nextMoves[j]);
      }
      if (queue[i][0] === targetSq[0] && queue[i][1] === targetSq[1]) {
        return this.printShortestPath(
          startSq,
          board.squares[Board.access(targetSq)].path
        );
      }
    }
  }
}

module.exports = KnightTravails;
