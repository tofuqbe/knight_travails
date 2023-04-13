const KnightTravails = require("./knights_travalis");

test("Check whether knightMoves returns the correct move order and length", () => {
  const knight_travails1 = new KnightTravails();
  expect(knight_travails1.knightMoves([8, 8], [2, 2])).toEqual(
    "> knightMoves([8,8],[2,2])\n=> You made it in 4 moves! Here's your path:\n8,8\n7,6\n6,4\n4,3\n2,2"
  );
  const knight_travails2 = new KnightTravails();
  expect(knight_travails2.knightMoves([6, 3], [1, 8])).toEqual(
    "> knightMoves([6,3],[1,8])\n=> You made it in 4 moves! Here's your path:\n6,3\n7,5\n5,6\n3,7\n1,8"
  );

  const knight_travails3 = new KnightTravails();
  expect(knight_travails3.knightMoves([1, 1], [8, 8])).toEqual(
    "> knightMoves([1,1],[8,8])\n=> You made it in 6 moves! Here's your path:\n1,1\n2,3\n3,5\n4,7\n5,5\n6,7\n8,8"
  );

  const knight_travails4 = new KnightTravails();
  expect(knight_travails4.knightMoves([8, 8], [1, 1])).toEqual(
    "> knightMoves([8,8],[1,1])\n=> You made it in 6 moves! Here's your path:\n8,8\n7,6\n8,4\n7,2\n5,3\n3,2\n1,1"
  );
});
