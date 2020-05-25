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

  lastEmptyPosUp(posClass) {
    let pos = posClass.split("-");
    let row = parseInt(pos[1]);
    let currentCol = parseInt(pos[2]);

    row = row - 1;
    while (row >= 0) {
      if (this.grid[row][currentCol] === null) {
        row--;
      } else {
        return row + 1;
      }
    }
    return 0;
  }

  lastEmptyPosDown(posClass) {
    let pos = posClass.split("-");
    let row = parseInt(pos[1]);
    let currentCol = parseInt(pos[2]);

    row = row + 1;
    while (row <= this.grid.length - 1) {
      if (this.grid[row][currentCol] === null) {
        row++;
      } else {
        return row - 1;
      }
    }
    return this.grid.length - 1;
  }

  lastEmptyPosLeft(posClass) {
    let pos = posClass.split("-");
    let currentRow = parseInt(pos[1]);
    let col = parseInt(pos[2]);
    col = col - 1;
    while (col >= 0) {
      if (this.grid[currentRow][col] === null) {
        col--;
      } else {
        return col + 1;
      }
    }
    return 0;
  }

  lastEmptyPosRight(posClass) {
    let pos = posClass.split("-");
    let currentRow = parseInt(pos[1]);
    let col = parseInt(pos[2]);
    
    col = col + 1;
    while (col <= this.grid[currentRow].length) {
      if (this.grid[currentRow][col] === null) {
        col++;
      } else {
        return col - 1;
      }
    }
    return this.grid[currentRow].length - 1;
  }

}




module.exports = Board;