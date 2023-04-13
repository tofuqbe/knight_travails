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
      8: [-2, -1],
    };
  }

  getNewPosition(currentPosition, movement) {
    return [currentPosition[0] + movement[0], currentPosition[1] + movement[1]];
  }

  checkMove(position) {
    if (position[0] < 1 || position[0] > 8) return null;
    if (position[1] < 1 || position[1] > 8) return null;
    return 1;
  }
}

module.exports = Knight;
