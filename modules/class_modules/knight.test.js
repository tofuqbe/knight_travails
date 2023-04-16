const Knight = require("./knight");

test("test knight can move using two 2 indicie arrays as arguments for newPos", () => {
  expect(Knight.newPos([5, 3], [2, 1])).toEqual([7, 4]);
  expect(Knight.newPos([2, 2], [-1, 2])).toEqual([1, 4]);
  expect(Knight.newPos([7, 4], [1, -2])).toEqual([8, 2]);
  expect(Knight.newPos([6, 8], [-2, -1])).toEqual([4, 7]);
});

test("test Knight can't move outside 64 square", () => {
  expect(Knight.checkMove(Knight.newPos([7, 3], [2, 1]))).toEqual(null);
  expect(Knight.checkMove(Knight.newPos([1, 1], [-1, 2]))).toEqual(null);
  expect(Knight.checkMove(Knight.newPos([5, 8], [2, 1]))).toEqual(null);
  expect(Knight.checkMove(Knight.newPos([4, 1], [2, -1]))).toEqual(null);
});

test("test Knight can move inside 64 square", () => {
  expect(Knight.checkMove(Knight.newPos([7, 3], [1, 2]))).toEqual(1);
  expect(Knight.checkMove(Knight.newPos([2, 3], [-1, -2]))).toEqual(1);
  expect(Knight.checkMove(Knight.newPos([5, 7], [2, 1]))).toEqual(1);
  expect(Knight.checkMove(Knight.newPos([4, 1], [2, 1]))).toEqual(1);
});
