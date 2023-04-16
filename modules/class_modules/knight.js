class Knight {
  static moves = {
    1: [1, 2],
    2: [1, -2],
    3: [-1, 2],
    4: [-1, -2],
    5: [2, 1],
    6: [2, -1],
    7: [-2, 1],
    8: [-2, -1],
  };

  static newPos(currentPos, move) {
    return [currentPos[0] + move[0], currentPos[1] + move[1]];
  }

  static checkMove(pos) {
    if (pos[0] < 1 || pos[0] > 8) return null;
    if (pos[1] < 1 || pos[1] > 8) return null;
    return 1;
  }
}

export default Knight;
