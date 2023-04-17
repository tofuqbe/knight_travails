// Change all dependancies from modules to import to run.
import Board from "./board.js";

test("Check there are 64 leastCost tiles.", () => {
  const board = new Board([5, 2]);
  board.initializeBoard([5, 2]);
  expect(board.squares.length).toEqual(64);
});

test("Check the 64 leastCost tiles are initialized to infinity.", () => {
  const board = new Board([5, 2]);
  let bool = true;
  for (let i = 0; i < board.squares.length; i++) {
    if (board.squares[i].turns !== Infinity) bool = false;
  }
  expect(bool).toEqual(true);
});

test("check accessSquare method returns the correct indices when given array coordinates", () => {
  expect(Board.access([5, 4])).toEqual(35);
  expect(Board.access([1, 1])).toEqual(0);
  expect(Board.access([2, 1])).toEqual(8);
  expect(Board.access([7, 8])).toEqual(55);
  expect(Board.access([8, 8])).toEqual(63);
});
