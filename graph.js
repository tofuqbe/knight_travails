const LinkedList = require("./Linked_list");

class Graph {
  constructor(verticies) {
    this.verticies = verticies;
    this.list = [];
    for (let i = 1; i <= verticies; i++) {
      let square = new LinkedList();
      this.list.push(square);
    }
  }

  shortestPath() {
    let shortestLength = this.list[0].size;
    for (let i = 1; i < this.list.length; i++) {
      if (shortestLength < this.list[i].size) {
        shortestLength = this.list[i].size;
      }
    }
    return shortestLength;
  }
}

module.exports = Graph;
