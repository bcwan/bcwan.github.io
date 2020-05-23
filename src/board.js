// const GRID_TO_ARRAY_COOR = {
//   [0, 0]: { className: "grid-0-0" },
//   [0, 1]: { className: "grid-0-1" },
//   [0, 2]: { className: "grid-0-2" },
//   [0, 3]: { className: "grid-0-3" },
//   [0, 4]: { className: "grid-0-4" },
//   [1, 0]: { className: "grid-1-0" },
//   [1, 1]: { className: "grid-1-1" },
//   [1, 2]: { className: "grid-1-2" },
//   [1, 3]: { className: "grid-1-3" },
//   [1, 4]: { className: "grid-1-4" },
//   [2, 0]: { className: "grid-2-0" },
//   [2, 1]: { className: "grid-2-1" },
//   [2, 2]: { className: "grid-2-2" },
//   [2, 3]: { className: "grid-2-3" },
//   [2, 4]: { className: "grid-2-4" },
//   [3, 0]: { className: "grid-3-0" },
//   [3, 1]: { className: "grid-3-1" },
//   [3, 2]: { className: "grid-3-2" },
//   [3, 3]: { className: "grid-3-3" },
//   [3, 4]: { className: "grid-3-4" },
//   [4, 0]: { className: "grid-4-0" },
//   [4, 1]: { className: "grid-4-1" },
//   [4, 2]: { className: "grid-4-2" },
//   [4, 3]: { className: "grid-4-3" },
//   [4, 4]: { className: "grid-4-4" }
// };

class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  static makeGrid() {
    const grid = [];
    for (let i = 0; i < 5; i++) {
      grid.push([]);
      for (let j = 0; j < 5; j++) {
        grid[i].push(null);
      }
    }
    return grid;
  }

  isEmptyPos(pos) {
    if (!Board.isValidPos(pos))
      throw `Invalid position x: ${pos[0]}, y: ${pos[1]}`;
    return (this.grid[pos[0]][pos[1]] === null);
  }

  static isValidPos(pos) {
    return ((0 <= pos[0]) && (pos[0] < 5) && (0 <= pos[1]) && (pos[1] < 5));
  }

  currentScore() {
    let score = 0;
    for(let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] !== null) {
          score += this.grid[i][j];
        }
      }
    }
    return score;
  }

  clearBoard() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] !== null) {
          this.grid[i][j] = null;
        }
      }
    }
  }

}




module.exports = Board;