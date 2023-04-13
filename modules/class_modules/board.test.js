const Board = require("./board");

test("Check there are 64 leastCost tiles.", () => {
  const board = new Board();
  expect(board.leastCost.length).toEqual(64);
});

test("Check the 64 leastCost tiles are initialized to infinity.", () => {
  const board = new Board();
  let bool = true;
  for (let i = 0; i < board.leastCost.length; i++) {
    if (board.leastCost[i] !== Infinity) bool = false;
  }
  expect(bool).toEqual(true);
});

test("check accessSquare method returns the correct indices when given array coordinates", () => {
  const board = new Board();
  expect(board.accessSquare([5, 4])).toEqual(35);
  expect(board.accessSquare([1, 1])).toEqual(0);
  expect(board.accessSquare([2, 1])).toEqual(8);
  expect(board.accessSquare([7, 8])).toEqual(55);
  expect(board.accessSquare([8, 8])).toEqual(63);
});
