const Knight = require("./modules/class_modules/knight");
const Board = require("./modules/class_modules/board");

class KnightTravails {
  board = new Board();
  knight = new Knight();

  possibleMoves(startSquare) {
    let possibleMoves = [];
    for (let i = 1; i <= 8; i++) {
      let newPosition = this.knight.getNewPosition(
        startSquare,
        this.knight.moves[i]
      );
      if (this.knight.checkMove(newPosition)) {
        let speed =
          this.board.leastCost[this.board.accessSquare(startSquare)] + 1;
        if (
          this.board.leastCost[this.board.accessSquare(newPosition)] > speed
        ) {
          this.board.leastCost[this.board.accessSquare(newPosition)] = speed;
          this.board.squaresVisited[
            this.board.accessSquare(newPosition)
          ][2].head = null;
          let current =
            this.board.squaresVisited[this.board.accessSquare(startSquare)][2]
              .head;
          while (current) {
            this.board.squaresVisited[
              this.board.accessSquare(newPosition)
            ][2].append(current.value);
            current = current.next;
          }
          this.board.squaresVisited[
            this.board.accessSquare(newPosition)
          ][2].append(newPosition);
        }
        possibleMoves.push(newPosition);
      }
    }
    return possibleMoves;
  }

  knightMoves(startSquare, targetSquare) {
    this.board.leastCost[this.board.accessSquare(startSquare)] = 0;
    this.board.squaresVisited[this.board.accessSquare(startSquare)][2].append(
      startSquare
    );

    let queue = [startSquare];
    for (let i = 0; i < queue.length; i++) {
      let nextMoves = this.possibleMoves(queue[i]);
      for (let j = 0; j < nextMoves.length; j++) {
        queue.push(nextMoves[j]);
      }
      if (queue[i][0] === targetSquare[0] && queue[i][1] === targetSquare[1]) {
        return this.printShortestPath(
          startSquare,
          this.board.squaresVisited[this.board.accessSquare(targetSquare)][2]
        );
      }
    }
  }

  printShortestPath(startSquare, targetSquare) {
    let string = `> knightMoves([${startSquare}],[${
      targetSquare.tail.value
    }])\n=> You made it in ${targetSquare.size - 1} moves! Here's your path:\n`;
    let current = targetSquare.head;
    while (current) {
      string += current.value + "\n";
      current = current.next;
    }
    return string.slice(0, -1);
  }
}

let knightTravails = new KnightTravails();

console.log(knightTravails.knightMoves([8, 8], [1, 1]));

module.exports = KnightTravails;
