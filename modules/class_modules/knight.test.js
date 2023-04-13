const Knight = require("./knight");

test("test knight can move using two 2 indicie arrays as arguments for getNewPosition", () => {
  const knight = new Knight();
  expect(knight.getNewPosition([5, 3], [2, 1])).toEqual([7, 4]);
  expect(knight.getNewPosition([2, 2], [-1, 2])).toEqual([1, 4]);
  expect(knight.getNewPosition([7, 4], [1, -2])).toEqual([8, 2]);
  expect(knight.getNewPosition([6, 8], [-2, -1])).toEqual([4, 7]);
});

test("test knight can't move outside 64 square", () => {
  const knight = new Knight();
  expect(knight.checkMove(knight.getNewPosition([7, 3], [2, 1]))).toEqual(null);
  expect(knight.checkMove(knight.getNewPosition([1, 1], [-1, 2]))).toEqual(
    null
  );
  expect(knight.checkMove(knight.getNewPosition([5, 8], [2, 1]))).toEqual(null);
  expect(knight.checkMove(knight.getNewPosition([4, 1], [2, -1]))).toEqual(
    null
  );
});

test("test knight can move inside 64 square", () => {
  const knight = new Knight();
  expect(knight.checkMove(knight.getNewPosition([7, 3], [1, 2]))).toEqual(1);
  expect(knight.checkMove(knight.getNewPosition([2, 3], [-1, -2]))).toEqual(1);
  expect(knight.checkMove(knight.getNewPosition([5, 7], [2, 1]))).toEqual(1);
  expect(knight.checkMove(knight.getNewPosition([4, 1], [2, 1]))).toEqual(1);
});
